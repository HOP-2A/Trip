/* eslint-disable react-hooks/set-state-in-effect */
"use client";

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

import DynamicCreateForm from "@/app/_components/Form";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { InvitedStatus } from "@prisma/client";
import { toast } from "sonner";
import { Calendar, Delete, DeleteIcon, Trash, User } from "lucide-react";

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded-md ${className}`} />
);

const TripHeaderSkeleton = () => (
  <div className="mb-8 space-y-4">
    <Skeleton className="h-[400px] w-full rounded-3xl" />
    <Skeleton className="h-8 w-64" />
    <Skeleton className="h-4 w-48" />
    <Skeleton className="h-4 w-40" />
  </div>
);

const DaysFormSkeleton = () => (
  <div className="space-y-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <Skeleton key={i} className="h-16 w-[520px]" />
    ))}
  </div>
);

const MembersSkeleton = () => (
  <div className="border border-gray-200 rounded-[2rem] p-8 shadow-xl bg-white space-y-4 w-[360px]">
    <Skeleton className="h-6 w-40" />
    {Array.from({ length: 5 }).map((_, i) => (
      <Skeleton key={i} className="h-10 w-full" />
    ))}
  </div>
);

const Page = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;

  const [getData, setGetData] = useState<customTripType[]>([]);
  const [days, setDays] = useState<days[]>([]);
  const [duration, setDuration] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const { user: clerkId } = useUser();
  const { user } = useAuth(clerkId?.id);

  const [allUser, setAllUser] = useState<UserType[]>([]);
  const [tripMembers, setTripMembers] = useState<tripMember[]>([]);
  const [invitedOne, setInvitedOne] = useState<InviteUserType[]>([]);

  const hasJoined = tripMembers.some(
    (member: tripMember) => member.userId === user?.id
  );

  const getCustomTripData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);
      const response = await res.json();

      setGetData(response);
      const days = response.map((data: customTripType) => data.days).flat();
      setDays(days);
      setDuration(response[0].duration);
    } finally {
      setIsLoading(false);
    }
  };

  const isOwner = getData.length > 0 && getData[0].createdById === user?.id;

  const getTripMembers = async () => {
    const res = await fetch("/api/trip/tripMember");
    const data = await res.json();
    setTripMembers(data);
  };

  const joinTrip = async () => {
    if (!user) return;

    if (hasJoined) {
      await fetch(`/api/trip/tripMember`, {
        method: "DELETE",
        body: JSON.stringify({ userId: user.id }),
      });

      setTripMembers((prev) => prev.filter((m) => m.userId !== user?.id));
    } else {
      const res = await fetch(`/api/trip/tripMember`, {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          customTripId: DayId,
        }),
      });

      const newMember = await res.json();
      setTripMembers((prev) => [...prev, newMember]);
    }
  };

  const deleteMember = async (mId: string) => {
    await fetch(`/api/trip/tripMember`, {
      method: "DELETE",
      body: JSON.stringify({ userId: mId }),
    });
    if (!user) {
      return toast.success("Amjilttai ustgagdlaa!");
    }

    setTripMembers((prev) => prev.filter((c) => c.id !== user.id));
  };

  const getAllUser = async () => {
    const response = await fetch("/api/user");
    const allUser = await response.json();
    setAllUser(allUser);
  };

  const members = allUser.filter((member) => member.id !== user?.id);

  const InviteMember = async (userId: string) => {
    await fetch("/api/trip/InviteUser", {
      method: "POST",
      body: JSON.stringify({
        userId: user?.id,
        customTripId: DayId,
        invitedUserId: userId,
        status: "PENDING",
      }),
    });
  };

  const InvitedUser = async () => {
    const response = await fetch("/api/trip/InviteUser");
    const invitedOne = await response.json();
    setInvitedOne(invitedOne);
  };

  const changeReq = async (inviteId: string, status: string) => {
    await fetch("/api/trip/InviteUser/ChangeReq", {
      method: "POST",
      body: JSON.stringify({ status, inviteId }),
    });

    if (status === "ACCEPTED") {
      toast.success("amjilttai aylald urigdllee");
      joinTrip();
    }
  };

  useEffect(() => {
    getCustomTripData();
    getAllUser();
    InvitedUser();
    getTripMembers();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20 text-slate-900">
      {isLoading ? (
        <>
          <TripHeaderSkeleton />
          <div className="flex gap-8">
            <DaysFormSkeleton />
            <MembersSkeleton />
          </div>
        </>
      ) : (
        <>
          <div className="mb-8">
            {getData.map((data, index) => (
              <div key={index} className="space-y-2">
                <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg">
                  <img
                    src={data.images[0]}
                    alt="trip banner"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-3xl font-bold">
                  {data.destination.toUpperCase()}
                </div>
                <div className="flex items-center gap-2">
                  <User />
                  Аялах хүний тоо:{" "}
                  <div className="font-extrabold">{data.peopleCount}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar />
                  Аялах өдрийн тоо:{" "}
                  <div className="font-extrabold">{duration}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 items-start">
            <div>
              <DynamicCreateForm
                days={days}
                duration={duration}
                dayId={DayId}
              />
            </div>
            <div className="border rounded-[2rem] p-8 shadow-xl bg-white w-[360px]">
              <h3 className="text-xl font-bold mb-6">Аяллын гишүүд</h3>
              <div>
                {tripMembers.map((m) => (
                  <div key={m.id} className="flex justify-between">
                    <div>{m?.user.name}</div>
                    {isOwner && (
                      <Trash
                        onClick={() => {
                          deleteMember(m.id);
                        }}
                      />
                    )}
                    {m.id === user?.id && (
                      <Trash
                        onClick={() => deleteMember(m.id)}
                        className="text-xs text-gray-400 hover:text-red-500 transition cursor-pointer"
                      ></Trash>
                    )}
                  </div>
                ))}
              </div>

              <div>
                {isOwner ? (
                  <div className="border"></div>
                ) : (
                  <div className="mb-4">
                    <Button
                      className={`w-full mt-5 rounded-2xl font-bold text-lg transition-all shadow-lg cursor-pointer
    ${
      hasJoined
        ? "bg-red-500 text-white hover:bg-red-400 cursor-pointer"
        : "bg-[#2e5d4d] text-white hover:bg-green-700 shadow-blue-200"
    }`}
                      onClick={joinTrip}
                    >
                      {hasJoined ? "Аяллаас гарах" : "Аялалд бүртгүүлэх"}
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-2 mt-6">
                {isOwner &&
                  members
                    .filter(
                      (user) => !tripMembers.some((tM) => tM.userId === user.id)
                    )
                    .map((user) => (
                      <div
                        key={user.id}
                        className="flex justify-between items-center"
                      >
                        <div>{user.name.toUpperCase()}</div>
                        <div>
                          <Button
                            variant="ghost"
                            onClick={() => InviteMember(user.id)}
                          >
                            Invite
                          </Button>
                        </div>

                        <Trash
                          onClick={() => {
                            deleteMember(user.id);
                          }}
                        />
                      </div>
                    ))}

                {!isOwner &&
                  invitedOne.map((invite) => (
                    <div
                      key={invite.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          onClick={() => changeReq(invite.id, "ACCEPTED")}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => changeReq(invite.id, "REJECTED")}
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
