"use client";

import { Calendar, Info } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Pop } from "@/app/_components/Popover";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@/hooks/use-auth";

type Trip = {
  id: string;
  title: string;
  destination: string;
  images: string[];
  startDate: string;
  endDate: string;
};

type TripDay = {
  id: string;
  title: string;
  description: string;
};

type TripMember = {
  id: string;
  userId: string;
  tripPlanId: string;
  role: string;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const year = d.getFullYear();
  return `${month}.${day}.${year}`;
};

const BannerSkeleton = () => (
  <div className="h-[400px] w-full bg-gray-200 rounded-3xl animate-pulse" />
);

const TitleSkeleton = () => (
  <div className="space-y-4 animate-pulse">
    <div className="h-10 w-3/4 bg-gray-200 rounded-lg" />
    <div className="flex gap-4">
      <div className="h-6 w-32 bg-gray-200 rounded-md" />
      <div className="h-6 w-32 bg-gray-200 rounded-md" />
    </div>
  </div>
);

const AccordionSkeleton = () => (
  <div className="space-y-3 animate-pulse">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="h-16 bg-gray-100 rounded-xl w-full" />
    ))}
  </div>
);

const BookingCardSkeleton = () => (
  <div className="border border-gray-100 rounded-3xl p-6 space-y-6 animate-pulse">
    <div className="h-6 w-1/2 bg-gray-200 rounded" />
    <div className="space-y-3">
      <div className="h-20 bg-gray-100 rounded-xl" />
      <div className="h-20 bg-gray-100 rounded-xl" />
    </div>
    <div className="h-12 bg-gray-200 rounded-xl w-full" />
  </div>
);

const Page = () => {
  const [trip, setTrip] = useState<Trip | null>(null);
  const [tripsDayByDay, setTripsDayByDay] = useState<TripDay[]>([]);
  const [tripMembers, setTripMembers] = useState<TripMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPerson, setTotalPerson] = useState(0);

  const params = useParams();
  const { tripId } = params;

  const { user: clerkId } = useUser();
  const { user } = useAuth(clerkId?.id);

  const hasJoined = tripMembers.some(
    (member: TripMember) => member.userId === user?.id
  );

  const joinTrip = async () => {
    if (!trip || !user) return;

    if (hasJoined) {
      await fetch(`/api/trip/tripPlanMember/${trip.id}`, {
        method: "DELETE",
        body: JSON.stringify({ userId: user.id }),
      });

      setTripMembers((prev) => prev.filter((m) => m.userId !== user?.id));
    } else {
      const res = await fetch(`/api/trip/tripPlanMember/${trip.id}`, {
        method: "POST",
        body: JSON.stringify({
          userId: user.id,
          tripPlanId: trip.id,
        }),
      });

      const newMember = await res.json();
      setTripMembers((prev) => [...prev, newMember]);
    }
  };

  useEffect(() => {
    if (!tripId) return;

    async function loadData() {
      setIsLoading(true);
      try {
        const tripRes = await fetch(
          `/api/trip/tripGet/getTripDetail/${tripId}`
        );
        if (tripRes.ok) {
          const tripData: Trip = await tripRes.json();
          setTrip(tripData);
        }

        const daysRes = await fetch(
          `/api/trip/tripGet/tripsDayByDay/${tripId}`
        );
        if (daysRes.ok) {
          const daysData: TripDay[] = await daysRes.json();
          setTripsDayByDay(daysData);
        }

        const bringTripMembers = await fetch(
          `/api/trip/tripPlanMember/${tripId}`
        );
        if (bringTripMembers.ok) {
          const tripMemberData = await bringTripMembers.json();
          setTripMembers(tripMemberData);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [tripId]);


  return (
    <div className="max-w-7xl mx-auto p-6 font-sans text-slate-900 mt-20">
      <div className="mb-8">
        {isLoading || !trip ? (
          <BannerSkeleton />
        ) : (
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg">
            <img
              src={trip.images[0]}
              alt="Trip banner"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          {isLoading || !trip ? (
            <TitleSkeleton />
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col flex-wrap gap-6 py-4 border-y border-gray-100 text-black font-medium">
                <h1 className="text-4xl font-black uppercase tracking-tight leading-tight">
                  {trip.destination} ~ {trip.title}
                </h1>
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{formatDate(trip.startDate)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-blue-600" /> Аяллын хөтөлбөр
            </h2>

            {isLoading ? (
              <AccordionSkeleton />
            ) : (
              <div className="space-y-4">
                {tripsDayByDay.map((day, index) => (
                  <Accordion
                    key={day.id}
                    type="single"
                    collapsible
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionItem value={day.id} className="border-none">
                      <AccordionTrigger className="px-5 py-4 hover:no-underline font-bold text-lg">
                        <div className="flex items-center gap-3">
                          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm">
                            Өдөр {index + 1}
                          </span>
                          <span>{day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 text-gray-600 text-base leading-relaxed border-t border-gray-50 pt-4">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          {isLoading ? (
            <>
              <BookingCardSkeleton />
              <div className="rounded-[2rem] p-8 shadow-xl bg-white">
                <div className="space-y-4 animate-pulse">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-6 bg-gray-200 rounded w-3/4" />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border border-gray-200 rounded-[2rem] p-8 shadow-xl bg-white">
                <h3 className="text-xl font-bold mb-6">Захиалгын мэдээлэл</h3>
                <div className="space-y-6">
                  <Button
                    className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 cursor-pointer"
                    onClick={joinTrip}
                  >
                    Захиалах
                  </Button>
                </div>
              </div>

               
              <div className="border border-gray-200 rounded-[2rem] p-8 shadow-xl bg-white">
                <h3 className="text-xl font-bold mb-6">Аяллын Гишүүд</h3>
                {tripMembers.length > 0 && (
                  <div className="space-y-4">
                    {tripMembers.map((tM, index) =>
                      tM.user ? <div key={index}>~ {tM.user.name}</div> : null
                    )}
                  </div>
                )}
              </div>

              <div className="border border-gray-200 rounded-[2rem] p-8 shadow-xl bg-white">
                <h3 className="text-xl font-bold mb-6">Сонирхолтой баримтууд</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                     <img
              src={""}
              alt=""
              
            />
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="border border-gray-200 rounded-[2rem] p-8 shadow-xl bg-white">
                <h3 className="text-xl font-bold mb-6">Сонирхолтой баримтууд</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-50">
                    <div className="flex items-center gap-3">
                     <img
              src={""}
              alt=""
              
            />
                    </div>
                  </div>
                  
                </div>
              </div>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
