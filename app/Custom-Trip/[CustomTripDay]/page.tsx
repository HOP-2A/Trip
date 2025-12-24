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

type days = {
  dayNumber: number;
  title: string;
  description: string;
  customTripId: string;
};

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;
  const [getData, setGetData] = useState<customTripType[]>([]);
  const [days, setDays] = useState<days[]>([]);
  const [duration, setDuration] = useState<number[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dayNumber, setDayNumber] = useState<number>(0);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const getCustomTripData = async () => {
    const res = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);
    const response = await res.json();
    setGetData(response);

    const days = response.map((data: customTripType) => data.days).flat();
    setDays(days);
    const duration = Array.from(
      { length: response[0].duration },
      (_, i) => i + 1
    );
    setDuration(duration);
  };

  const postCustomTripData = async () => {
    await fetch(`/api/trip/tripPost/customTripDay/${DayId}`, {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        dayNumber,
      }),
    });
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
        {duration.map((count, index) => {
          return (
            <div key={index} className="flex">
              <span>Day {count}</span>
              <Input
                className="w-[100px]"
                placeholder="title..."
                value={title}
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <Input
                className="w-[100px]"
                placeholder="description..."
                value={description}
                onChange={(e) => {
                  handleInput2(e);
                }}
              />
              <Button onClick={postCustomTripData}>Create</Button>
            </div>
          );
        })}
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
