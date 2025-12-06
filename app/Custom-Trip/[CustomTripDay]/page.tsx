"use client";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type inpType = {
  title: string;
  description: string;
};
type CustomTripDayType = {
  dayNumber: number;
  title: string;
  description: string;
  customTripId: string;
};

const CustomTripDay = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;

  const [bringData, setBringData] = useState<CustomTripDayType[]>([]);
  const [dayNumber, setDayNumber] = useState<number>(0);
  const [input, setInput] = useState<inpType>({
    title: "",
    description: "",
  });
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "title") {
      setInput({ ...input, title: value });
    }
    if (name === "description") {
      setInput({ ...input, description: value });
    }
  };

  const CustomTripDayCreate = async () => {
    const response = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`, {
      method: "POST",
      body: JSON.stringify({
        dayNumber,
        title: input.title,
        description: input.description,
      }),
    });
    const res = await response.json();
  };

  const customTripDayBring = async () => {
    const response = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);
    const res = await response.json();
    setBringData(res);
  };
  useEffect(() => {
    customTripDayBring();
  }, []);

  return (
    <div>
      <div>
        {bringData.map((trip, index) => {
          return (
            <div key={index}>
              <div className="text-4xl font-bold flex justify-center">
                Таны бүтээсэн аялал
              </div>
              <div>{trip.description}</div>
              <div>{trip.customTripId}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CustomTripDay;
