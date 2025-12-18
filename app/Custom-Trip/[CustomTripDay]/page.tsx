"use client";
import { ExampleCombobox } from "@/app/_components/Combobox";
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
};
type customTripType = {
  destination: string;
  endDate: string;
  startDate: string;
  id: string;
  images: string[];
  peopleCount: number;
  title: string;
};
const CustomTripDay = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;
  const [bringData, setBringData] = useState<customTripType[]>([]);
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

  const getSeason = (date: Date) => {
    const month = date.getMonth() + 1;
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";
    return "winter";
  };

  const days = () => {
    bringData.map((data) => {
      const end = data.endDate;
      const start = data.startDate;
      const diffMs = new Date(end).getTime() - new Date(start).getTime();
      const dayNum = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      setDayNumber(dayNum);

      getSeason(new Date(start));
      getSeason(new Date(end));
    });
  };

  const CustomTripDayCreate = async () => {
    await fetch(`/api/trip/tripPost/customTripDay/${DayId}`, {
      method: "POST",
      body: JSON.stringify({
        dayNumber: dayNumber,
        title: input.title,
        description: input.description,
      }),
    });
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
        <div className="text-4xl font-bold flex justify-center">Таны аялал</div>
        <div>
          {bringData.map((data, index) => {
            return (
              <div key={index}>
                <img
                  className="object-contain w-full rounded-lg   bg-lightbeige lg:h-[33rem]"
                  src={data.images[0]}
                />
                <div className="text-3xl">{data.destination.toUpperCase()}</div>
                <div>Аялах хүний тоо {data.peopleCount}</div>
                <div>
                  <Button
                    onClick={() => {
                      days();
                    }}
                  >
                    Харуулах
                  </Button>
                  Аялах өдрийн тоо {dayNumber}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div>
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
          </div>
          <div>
            <ExampleCombobox />
          </div>
          <div>
            <select>
              <option defaultValue="owner">Owner</option>
              <option>Зочин аялагч</option>
            </select>
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
