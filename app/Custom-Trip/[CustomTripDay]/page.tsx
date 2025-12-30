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
import { SelectDemo } from "@/app/_components/Select";
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
        customtripId: DayId,
      }),
    });
  };

  return (
    <div>
      {getData.map((data, index) => {
        return (
          <div key={index}>
            <img className="h-[400px] w-[600px]" src={data.images[0]} />
            <div className="text-3xl">{data.destination.toUpperCase()}</div>
            <div>Аялах хүний тоо {data.peopleCount}</div>
            <div>Аялах өдрийн тоо {duration}</div>
          </div>
        );
      })}
      <p>Aяллын маршрут</p>
      <div>
        <DynamicCreateForm days={days} duration={duration} dayId={DayId} />
      </div>
      <div>
        {isOwner ? (
          <div>chi creator bizde</div>
        ) : (
          <div>
            Aylald negdeh
            <Button onClick={CreateGuest}>Create</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Page;
