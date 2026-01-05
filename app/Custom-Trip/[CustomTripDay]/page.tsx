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

export type days = {
  dayNumber: number;
  title: string;
  description: string;
  customTripId: string;
};

import DynamicCreateForm from "@/app/_components/Form";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";

const Page = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;
  const [getData, setGetData] = useState<customTripType[]>([]);
  const [days, setDays] = useState<days[]>([]);
  const [duration, setDuration] = useState<number>(0);
  const { user: clerkId } = useUser();
  const { user } = useAuth(clerkId?.id);

  const getCustomTripData = async () => {
    const res = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);
    const response = await res.json();
    setGetData(response);

    const days = response.map((data: customTripType) => data.days).flat();
    setDays(days);
    setDuration(response[0].duration);
  };

  useEffect(() => {
    getCustomTripData();
  }, []);

  const isOwner = getData.length > 0 && getData[0].createdById === user?.id;

  const CreateGuest = async () => {
    await fetch("/api/trip/tripMember", {
      method: "POST",
      body: JSON.stringify({
        memberId: user?.id,
        customTripId: DayId,
      }),
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 font-sans text-slate-900 mt-20">
      <div className="mb-8">
        {getData.map((data, index) => {
          return (
            <div key={index}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={data.images[0]}
                  alt="Trip banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-3xl">{data.destination.toUpperCase()}</div>
              <div>Аялах хүний тоо {data.peopleCount}</div>
              <div>Аялах өдрийн тоо {duration}</div>
            </div>
          );
        })}
      </div>
      <DynamicCreateForm days={days} duration={duration} dayId={DayId} />

      {isOwner ? (
        <div>
          chi creator bizde
          <Button>aylald hun urih</Button>
        </div>
      ) : (
        <div>
          Aylald negdeh
          <Button onClick={CreateGuest}>Create</Button>
        </div>
      )}
    </div>
  );
};
export default Page;
