"use client";
import { Button } from "@/components/ui/button";
import { Header } from "../_components/Header";
import { Calendar05 } from "../_components/Calender";
import { BringCustomTrip } from "../_components/BringCustomTrip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Dialog } from "../_components/Dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
type CustomTripType = {
  id: string;
  startDate: string;
  endDate: string;
  peopleCount: number;
  destination: string;
  title: string;
};

const CustomTrip = () => {
  const [duration, setDuration] = useState<DateRange | undefined>();
  const [count, setCount] = useState<number>(1);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [bringData, setBringData] = useState<CustomTripType[]>([]);
  const { push } = useRouter();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };
  const total = count + count2 + count3;

  const CustomTripCreate = async () => {
    const response = await fetch("/api/trip/tripPost/customTrip", {
      method: "POST",
      body: JSON.stringify({
        startDate: duration?.from?.toISOString(),
        endDate: duration?.to?.toISOString(),
        peopleCount: total,
        destination: inputValue,
        title: inputValue2,
      }),
    });
    const res = await response.json();
  };
  const BringCustomTrip = async () => {
    const response = await fetch("/api/trip/tripPost/customTrip", {
      method: "GET",
    });
    const data = await response.json();
    setBringData(data);
  };
  useEffect(() => {
    BringCustomTrip();
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 relative">
        <Header />
        <div className="relative">
          <img
            src={"/custom.jpg"}
            alt="Nature Photo"
            className="w-full h-150 object-cover object-center"
          />
          <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
            <h1 className="text-white text-5xl font-extrabold text-center px-4">
              Plan Your Next Adventure
            </h1>
            <div className="bg-gradient-to-r from-green-400 to-cyan-300 text-white font-semibold  rounded-lg shadow-lg hover:scale-105 transition-transform">
              <Button
                variant="ghost"
                onClick={() => {
                  push("/");
                }}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  push("/travel");
                }}
              >
                Travel
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  push("/Custom-Trip");
                }}
              >
                Custom Trip
              </Button>
            </div>
          </div>
        </div>
        <div>
          Бид төлөвлөе, та аял — таны мөрөөдлийн аяллыг бид үнэ төлбөргүй
          төлөвлөж өгье!
        </div>
        <div className="flex justify-evenly">
          <Input
            placeholder="Aylah gazra nerlene uu"
            name="input"
            className="w-80"
            value={inputValue2}
            onChange={(e) => {
              handleInput2(e);
            }}
          />
          <Input
            placeholder="Where you wanna go... "
            name="input"
            className="w-80"
            value={inputValue}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <Calendar05 onChange={setDuration} />

          <Popover>
            <PopoverTrigger>open</PopoverTrigger>
            <PopoverContent>
              <div>
                Том хүн (12+) нас
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setCount(count - 1);
                    }}
                  >
                    -
                  </Button>
                  {count}
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div>
                Хүүхэд (2-11) нас
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCount2(count2 - 1);
                  }}
                >
                  -
                </Button>
                {count2}
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCount2(count2 + 1);
                  }}
                >
                  +
                </Button>
              </div>
              <div>
                Нярай (0-1) нас
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCount3(count3 - 1);
                  }}
                >
                  -
                </Button>
                {count3}
                <Button
                  variant="ghost"
                  onClick={() => {
                    setCount3(count3 + 1);
                  }}
                >
                  +
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Button
            onClick={() => {
              CustomTripCreate();
            }}
          >
            Create
          </Button>
          {/* <BringCustomTrip /> */}
        </div>
        <Dialog />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          tanii buteesen aylal:
          {bringData.map((bring) => {
            return (
              <div
                key={bring.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div>
                  <div
                    onClick={() => {
                      push(`/Custom-Trip/${bring.id}`);
                    }}
                    className="p-4 space-y-2"
                  >
                    <h3 className="font-semibold text-lg leading-snug">
                      {bring.title}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {bring.startDate}
                    </div>
                    <div className="text-sm text-gray-600">{bring.endDate}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CustomTrip;
