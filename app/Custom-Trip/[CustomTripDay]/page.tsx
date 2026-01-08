"use client";

import DynamicCreateForm from "@/app/_components/Form";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InvitedStatus } from "@prisma/client";
import { toast } from "sonner";
import { Calendar, Trash, User, Loader2, Send } from "lucide-react";
import { CarouselFunc } from "@/app/_components/carousel";

type customTripType = {
  destination: string;
  endDate: string;
  startDate: string;
  id: string;
  images: string[];
  peopleCount: number;
  title: string;
  createdById: string;
  duration: number;
  days: days[];
};

type InviteUserType = {
  id: string;
  userId: string;
  customTripId: string;
  invitedUserId: string;
  status: InvitedStatus;
};

type UserType = {
  id: string;
  name: string;
  email: string;
  clerkId: string;
};

export type days = {
  dayNumber: number;
  title: string;
  description: string;
  customTripId: string;
};

type tripMember = {
  customTripId: string;
  id: string;
  role: string;
  userId: string;
  user: {
    name: string;
  };
};

type TripComment = {
  id: string;
  comment: string;
  user: {
    id: string;
    name: string;
  };
};

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded-md ${className}`} />
);

const TripHeaderSkeleton = () => (
  <div className="mb-6 sm:mb-8 space-y-4">
    <Skeleton className="h-[250px] sm:h-[350px] md:h-[400px] w-full rounded-2xl sm:rounded-3xl" />
    <Skeleton className="h-6 sm:h-8 w-48 sm:w-64" />
    <Skeleton className="h-4 w-36 sm:w-48" />
    <Skeleton className="h-4 w-32 sm:w-40" />
  </div>
);

const DaysFormSkeleton = () => (
  <div className="space-y-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} className="h-16 w-full sm:w-[520px]" />
    ))}
  </div>
);

const MembersSkeleton = () => (
  <div className="border border-gray-200 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-xl bg-white space-y-4 w-full sm:w-[360px]">
    <Skeleton className="h-6 w-32 sm:w-40" />
    {Array.from({ length: 5 }).map((_, i) => (
      <Skeleton key={i} className="h-10 w-full" />
    ))}
  </div>
);

const Page = () => {
  const params = useParams();
  const DayId = params.CustomTripDay as string;

  const [tripData, setTripData] = useState<customTripType | null>(null);
  const [days, setDays] = useState<days[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isJoining, setIsJoining] = useState(false);
  const [isInviting, setIsInviting] = useState<string | null>(null);

  const { user: clerkId } = useUser();
  const { user } = useAuth(clerkId?.id);

  const [allUser, setAllUser] = useState<UserType[]>([]);
  const [tripMembers, setTripMembers] = useState<tripMember[]>([]);
  const [invitedUsers, setInvitedUsers] = useState<InviteUserType[]>([]);

  const [tripComment, setTripComment] = useState<TripComment[]>([]);
  const [tripCommentInput, setTripCommentInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasJoined = tripMembers.some(
    (member: tripMember) => member.userId === user?.id
  );

  const isOwner = tripData?.createdById === user?.id;

  const myPendingInvites = invitedUsers.filter(
    (invite) =>
      invite.invitedUserId === user?.id &&
      invite.status === "PENDING" &&
      invite.customTripId === DayId
  );

  const getCustomTripData = async () => {
    if (!DayId) return;

    try {
      const res = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);

      if (!res.ok) {
        throw new Error("Failed to fetch trip data");
      }

      const response = await res.json();

      if (Array.isArray(response) && response.length > 0) {
        setTripData(response[0]);
        const allDays = response
          .map((data: customTripType) => data.days)
          .flat();
        setDays(allDays);
      } else if (response && !Array.isArray(response)) {
        setTripData(response);
        setDays(response.days || []);
      }
    } catch (error) {
      console.error("Error fetching trip data:", error);
      toast.error("Аяллын мэдээлэл татахад алдаа гарлаа");
    }
  };

  const getTripMembers = async () => {
    if (!DayId) return;

    try {
      const res = await fetch(`/api/trip/tripMember/`);

      if (!res.ok) {
        throw new Error("Failed to fetch members");
      }

      const data = await res.json();

      const uniqueMembers = data.filter(
        (member: tripMember, index: number, self: tripMember[]) =>
          index === self.findIndex((m) => m.userId === member.userId)
      );

      setTripMembers(uniqueMembers);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  const getAllUser = async () => {
    try {
      const response = await fetch("/api/user");

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const allUser = await response.json();
      setAllUser(allUser);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getInvitedUsers = async () => {
    try {
      const response = await fetch("/api/trip/InviteUser");

      if (!response.ok) {
        throw new Error("Failed to fetch invitations");
      }

      const invitations = await response.json();
      setInvitedUsers(invitations);
    } catch (error) {
      console.error("Error fetching invitations:", error);
    }
  };

  const tripCommentGet = async () => {
    if (!DayId) return;

    try {
      const res = await fetch(`/api/trip/tripComment/${DayId}`);
      if (!res.ok) throw new Error("Failed to fetch comments");

      const comments = await res.json();
      setTripComment(comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const tripDetailComment = async () => {
    if (!tripCommentInput.trim() || !user?.id || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/trip/tripComment/${DayId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          comment: tripCommentInput.trim(),
          type: "CUSTOM",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const newComment = await response.json();
      setTripComment((prev) => [newComment, ...prev]);
      setTripCommentInput("");
      toast.success("Сэтгэгдэл амжилттай нэмэгдлээ");
    } catch (error) {
      console.error("Error posting comment:", error);
      toast.error("Сэтгэгдэл илгээхэд алдаа гарлаа");
    } finally {
      setIsSubmitting(false);
    }
  };

  const tripCommentDelete = async (commentId: string) => {
    try {
      const response = await fetch(`/api/trip/tripComment/${DayId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentId }),
      });

      if (!response.ok) throw new Error("Failed to delete comment");

      setTripComment((prev) => prev.filter((c) => c.id !== commentId));
      toast.success("Сэтгэгдэл устгагдлаа");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Сэтгэгдэл устгахад алдаа гарлаа");
    }
  };

  const inputHandlerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTripCommentInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      tripDetailComment();
    }
  };

  const joinTrip = async () => {
    if (!user || !DayId || isJoining) return;

    setIsJoining(true);
    try {
      if (hasJoined) {
        const response = await fetch(`/api/trip/tripMember/`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: user.id }),
        });

        if (!response.ok) {
          throw new Error("Failed to leave trip");
        }

        setTripMembers((prev) => prev.filter((m) => m.userId !== user.id));
        toast.success("Аяллаас амжилттай гарлаа");
      } else {
        const response = await fetch(`/api/trip/tripMember/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user.id,
            customTripId: DayId,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to join trip");
        }

        const newMember = await response.json();
        setTripMembers((prev) => [...prev, newMember]);
        toast.success("Аялалд амжилттай бүртгүүллээ");
      }
    } catch (error) {
      console.error("Error joining/leaving trip:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setIsJoining(false);
    }
  };

  const deleteMember = async (memberId: string, userId: string) => {
    if (!DayId) return;

    try {
      const response = await fetch(`/api/trip/tripMember/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove member");
      }

      setTripMembers((prev) => prev.filter((m) => m.userId !== userId));
      toast.success("Гишүүнийг амжилттай хаслаа");
    } catch (error) {
      console.error("Error removing member:", error);
      toast.error("Гишүүн хасахад алдаа гарлаа");
    }
  };

  const inviteMember = async (invitedUserId: string) => {
    if (!user || !DayId || isInviting) return;

    setIsInviting(invitedUserId);
    try {
      const response = await fetch("/api/trip/InviteUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          customTripId: DayId,
          invitedUserId,
          status: "PENDING",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send invitation");
      }

      const newInvite = await response.json();
      setInvitedUsers((prev) => [...prev, newInvite]);
      toast.success("Урилга илгээлээ");
    } catch (error) {
      console.error("Error inviting member:", error);
      toast.error("Урилга илгээхэд алдаа гарлаа");
    } finally {
      setIsInviting(null);
    }
  };

  const handleInviteResponse = async (
    inviteId: string,
    status: "ACCEPTED" | "REJECTED"
  ) => {
    try {
      const response = await fetch("/api/trip/InviteUser/ChangeReq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status, inviteId }),
      });

      if (!response.ok) {
        throw new Error("Failed to respond to invitation");
      }

      setInvitedUsers((prev) =>
        prev.map((inv) =>
          inv.id === inviteId
            ? { ...inv, status: status as InvitedStatus }
            : inv
        )
      );

      if (status === "ACCEPTED") {
        toast.success("Урилгыг хүлээн авлаа");
        await joinTrip();
      } else {
        toast.info("Урилгыг татгалзлаа");
      }
    } catch (error) {
      console.error("Error responding to invitation:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const availableUsersToInvite = allUser.filter((u) => {
    if (u.id === user?.id) return false;
    if (tripMembers.some((m) => m.userId === u.id)) return false;

    const hasPendingInvite = invitedUsers.some(
      (inv) =>
        inv.invitedUserId === u.id &&
        inv.customTripId === DayId &&
        inv.status === "PENDING"
    );

    return !hasPendingInvite;
  });

  useEffect(() => {
    if (!DayId) return;

    async function loadAllData() {
      setIsLoading(true);
      try {
        await Promise.all([
          getCustomTripData(),
          getTripMembers(),
          getAllUser(),
          getInvitedUsers(),
          tripCommentGet(),
        ]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadAllData();
  }, [DayId]);

  if (!DayId) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-16 sm:mt-20 text-center">
        <p className="text-red-500">Буруу хуудас байна</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 mt-16 sm:mt-20 text-slate-900">
      {isLoading ? (
        <>
          <TripHeaderSkeleton />
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1">
              <DaysFormSkeleton />
            </div>
            <MembersSkeleton />
          </div>
        </>
      ) : !tripData ? (
        <div className="text-center py-12 sm:py-20">
          <p className="text-gray-500 text-base sm:text-lg">Аялал олдсонгүй</p>
        </div>
      ) : (
        <>
          <div className="mb-6 sm:mb-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg">
                <CarouselFunc data={tripData.images} />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight">
                  {tripData.destination}
                </h1>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Аялах хүний тоо:</span>
                  <span className="font-bold text-black">
                    {tripData.peopleCount}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Аялах өдрийн тоо:</span>
                  <span className="font-bold text-black">
                    {tripData.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="flex-1 w-full">
              <DynamicCreateForm
                days={days}
                duration={tripData.duration}
                dayId={DayId}
              />
            </div>

            <div className="space-y-6 w-full lg:w-[360px]">
              <div className="border border-gray-200 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-xl bg-white lg:top-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                  Аяллын гишүүд
                </h3>

                <div className="space-y-3 mb-4 sm:mb-6">
                  {tripMembers.length > 0 ? (
                    tripMembers
                      .filter(
                        (member, index, self) =>
                          index ===
                          self.findIndex((m) => m.userId === member.userId)
                      )
                      .map((member) => (
                        <div
                          key={member.id}
                          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className="w-8 h-8 bg-[#2e5d4d] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                              {member.user.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="font-medium text-sm sm:text-base truncate">
                              {member.user.name}
                            </span>
                            {member.userId === tripData.createdById && (
                              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex-shrink-0">
                                Owner
                              </span>
                            )}
                          </div>
                          {isOwner &&
                            member.userId !== tripData.createdById && (
                              <Trash
                                onClick={() =>
                                  deleteMember(member.id, member.userId)
                                }
                                className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer transition flex-shrink-0 ml-2"
                              />
                            )}
                        </div>
                      ))
                  ) : (
                    <p className="text-gray-500 text-center py-4 text-sm sm:text-base">
                      Гишүүн хараахан байхгүй
                    </p>
                  )}
                </div>

                {!isOwner && (
                  <Button
                    className={`w-full mb-4 sm:mb-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all shadow-lg ${
                      hasJoined
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-[#2e5d4d] text-white hover:bg-green-700"
                    }`}
                    onClick={joinTrip}
                    disabled={isJoining}
                  >
                    {isJoining ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : hasJoined ? (
                      "Аяллаас гарах"
                    ) : (
                      "Аялалд бүртгүүлэх"
                    )}
                  </Button>
                )}

                {!isOwner && myPendingInvites.length > 0 && (
                  <div className="mb-4 sm:mb-6 border-t pt-4 sm:pt-6">
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">
                      Урилга
                    </h4>
                    {myPendingInvites.map((invite) => (
                      <div
                        key={invite.id}
                        className="bg-blue-50 p-3 sm:p-4 rounded-lg space-y-3"
                      >
                        <p className="text-xs sm:text-sm text-gray-700">
                          Таныг энэ аялалд урьсан байна
                        </p>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-green-600 hover:bg-green-700 text-xs sm:text-sm"
                            onClick={() =>
                              handleInviteResponse(invite.id, "ACCEPTED")
                            }
                          >
                            Зөвшөөрөх
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 text-xs sm:text-sm"
                            onClick={() =>
                              handleInviteResponse(invite.id, "REJECTED")
                            }
                          >
                            Татгалзах
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {isOwner && availableUsersToInvite.length > 0 && (
                  <div className="border-t pt-4 sm:pt-6">
                    <h4 className="font-semibold mb-3 text-sm sm:text-base">
                      Хүмүүс урих
                    </h4>
                    <div className="space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
                      {availableUsersToInvite.map((u) => (
                        <div
                          key={u.id}
                          className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-lg"
                        >
                          <span className="text-xs sm:text-sm truncate flex-1 mr-2">
                            {u.name}
                          </span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[#2e5d4d] hover:text-green-700 text-xs sm:text-sm flex-shrink-0"
                            onClick={() => inviteMember(u.id)}
                            disabled={isInviting === u.id}
                          >
                            {isInviting === u.id ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              "Урих"
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-xl bg-white">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                  Сэтгэгдэл
                </h3>
                <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                  {tripComment.length > 0 ? (
                    tripComment.map((c) => (
                      <div
                        key={c.id}
                        className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 shadow-sm"
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-gray-800">
                            {c.user.name}
                          </div>
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-gray-700 leading-relaxed flex-1 text-sm">
                              {c.comment}
                            </p>
                            {c.user.id === user?.id && (
                              <Trash
                                onClick={() => tripCommentDelete(c.id)}
                                className="w-4 h-4 text-gray-400 hover:text-red-500 transition cursor-pointer flex-shrink-0"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4 text-sm sm:text-base">
                      Сэтгэгдэл хараахан байхгүй байна
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      value={tripCommentInput}
                      onChange={inputHandlerValue}
                      onKeyDown={handleKeyDown}
                      placeholder="Сэтгэгдлээ бичнэ үү..."
                      className="rounded-full pl-5 pr-12 py-6 shadow-sm focus-visible:ring-[#2e5d4d]"
                      disabled={!user || isSubmitting}
                    />
                    <Send
                      onClick={tripDetailComment}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 transition ${
                        !user || isSubmitting || !tripCommentInput.trim()
                          ? "text-gray-300 cursor-not-allowed"
                          : "text-gray-400 hover:text-[#2e5d4d] cursor-pointer"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
