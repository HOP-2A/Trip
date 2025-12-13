"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  customTrip: {
    destination: string;
    endDate: string;
    startDate: string;
    id: string;
    images: string[];
    peopleCount: number;
    title: string;
  };
};

const CustomTripDay = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;

  const [bringData, setBringData] = useState<CustomTripDayType[]>([]);
  const [dayNumber, setDayNumber] = useState<number>();
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

  const days = () => {
    bringData.map((data) => {
      const end = data.customTrip.endDate;
      const start = data.customTrip.startDate;
      const diffMs = new Date(end).getTime() - new Date(start).getTime();
      const dayNumber = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      setDayNumber(dayNumber);
    });
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
    await response.json();
  };

  const customTripDayBring = async () => {
    const response = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);
    const res = await response.json();
    setBringData(res);
  };
  useEffect(() => {
    customTripDayBring();
  }, []);
  console.log(
    bringData.map((data) => {
      data.customTrip.images;
    })
  );
  return (
    <div>
      <div>
        <div className="text-4xl font-bold flex justify-center">Таны аялал</div>
        <div>
          {bringData.map((trip, index) => {
            return (
              <div key={index}>
                <div>{trip.description}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div>bidend bugluj ogno uu</div>
          <Input
            name="title"
            value={input.title}
            placeholder="ner..."
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <Input
            name="description"
            value={input.description}
            placeholder="ner..."
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <div>
            <Button
              onClick={() => {
                days();
              }}
            >
              bring
            </Button>
            {dayNumber}
          </div>
          <Button
            onClick={() => {
              CustomTripDayCreate();
            }}
          >
            create
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CustomTripDay;
