"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type inpType = {
  title: string;
  description: string;
};
type days = {
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
  createdById: string;
  days: days[];
};

const CustomTripDay = () => {
  const params = useParams();
  const DayId = params.CustomTripDay;
  const [day, setDay] = useState<days[]>([]);
  const [bringData, setBringData] = useState<customTripType[]>([]);
  const [dayNumber, setDayNumber] = useState<number[]>([]);
  const [season, setSeason] = useState("");
  const [loading, setLoading] = useState(false);
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
    if (month >= 3 && month <= 5) {
      setSeason("spring");
    } else if (month >= 6 && month <= 8) {
      setSeason("summer");
    } else if (month >= 9 && month <= 11) {
      setSeason("autumn");
    } else {
      setSeason("winter");
    }
  };

  const CustomTripDayCreate = async () => {
    const data = bringData[0];
    const dayNumber = Math.floor(
      (new Date(data.endDate).getTime() - new Date(data.startDate).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    getSeason(new Date(data.startDate));
    getSeason(new Date(data.endDate));

    await fetch(`/api/trip/tripPost/customTripDay/${DayId}`, {
      method: "POST",
      body: JSON.stringify({
        dayNumber,
        title: input.title,
        description: input.description,
      }),
    });
  };

  const customTripDayBring = async () => {
    setLoading(true);
    const response = await fetch(`/api/trip/tripPost/customTripDay/${DayId}`);
    const res = await response.json();
    const daysss = res.map((data: customTripType) => data.days).flat();
    setDay(daysss);
    setBringData(res);
    setLoading(false);
    console.log(daysss, "aerg");
    console.log(day, "aesrfg");
  };

  useEffect(() => {
    customTripDayBring();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }
  const days = Array.from({ length: day[0]?.dayNumber }, (_, i) => i + 1);
  console.log(days);
  console.log(bringData, "drf");
  return (
    <div>
      <div>
        <div className="text-4xl font-bold flex justify-center">Таны аялал</div>
        <div>
          {bringData.map((data, index) => {
            return (
              <div key={index}>
                <img className="h-[400px] w-[600px]" src={data.images[0]} />
                <div className="text-3xl">{data.destination.toUpperCase()}</div>
                <div>Аялах хүний тоо {data.peopleCount}</div>
              </div>
            );
          })}
        </div>
      </div>
      <p>Aяллын маршрут</p>
      {days.map((count) => {
        return (
          <div key={count}>
            <div className="flex">
              <span>Day {count}</span>
              <div className="flex">
                <Input
                  className="w-[100px]"
                  name="title"
                  value={input.title}
                  placeholder="ner..."
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
                <Input
                  className="w-[100px]"
                  name="description"
                  value={input.description}
                  placeholder="ner..."
                  onChange={(e) => {
                    handleInput(e);
                  }}
                />
              </div>
              <Button onClick={CustomTripDayCreate}>create</Button>
            </div>
          </div>
        );
      })}
      <div>
        <select>
          <option defaultValue="owner">Owner</option>
          <option>Зочин аялагч</option>
        </select>
      </div>
    </div>
  );
};
export default CustomTripDay;
