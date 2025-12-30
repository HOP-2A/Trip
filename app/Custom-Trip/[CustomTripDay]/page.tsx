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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;
  const [getData, setGetData] = useState<customTripType[]>([]);
  const [days, setDays] = useState<days[]>([]);
  const [duration, setDuration] = useState<number>(0);

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
        <select>
          <option defaultValue="owner">Owner</option>
          <option>Зочин аялагч</option>
        </select>
      </div>
    </div>
  );
};
export default Page;
