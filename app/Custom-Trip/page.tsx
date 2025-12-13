"use client";
import { Button } from "@/components/ui/button";
import { Header } from "../_components/Header";
import { Calendar05 } from "../_components/Calender";
import { upload } from "@vercel/blob/client";
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
import { useAuth } from "@/hooks/use-auth";
import { useUser } from "@clerk/nextjs";
type CustomTripType = {
  id: string;
  startDate: string;
  endDate: string;
  peopleCount: number;
  destination: string;
  images: string[];
  createdById: string;
};

const CustomTrip = () => {
  const [duration, setDuration] = useState<DateRange | undefined>();
  const [count, setCount] = useState<number>(1);
  const [count2, setCount2] = useState<number>(0);
  const [count3, setCount3] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [bringData, setBringData] = useState<CustomTripType[]>([]);
  const { push } = useRouter();

  const { user: clerkUser } = useUser();
  const { user } = useAuth(clerkUser?.id); // useUser ees avsn clerkUsernii id iig clerkUser ruu hiigd ternes user avjin
  console.log(user);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const total = count + count2 + count3;

  const BringCustomTrip = async () => {
    const response = await fetch("/api/trip/tripPost/customTrip", {
      method: "GET",
    });
    const data = await response.json();
    setBringData(data);
  };
  const generateImage = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/images/generate", {
        method: "POST",
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const blob = await response.blob();

      const file = new File([blob], "generated.png", { type: "image/png" });

      const uploaded = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/images/upload",
      });
      setImageUrl((prev) => [...prev, uploaded.url]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const CustomTripCreate = async () => {
    const response = await fetch("/api/trip/tripPost/customTrip", {
      method: "POST",
      body: JSON.stringify({
        startDate: duration?.from?.toISOString(),
        endDate: duration?.to?.toISOString(),
        peopleCount: total,
        destination: prompt,
        images: imageUrl,
        createdById: user?.id,
      }),
    });
    const res = await response.json();
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    BringCustomTrip();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 relative">
        <Header />
        <div className="relative">
          <img
            src={"airBalloon.jpeg"}
            alt="Nature Photo"
          className="w-full h-[600px] object-cover object-center"
            
          />
          <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
            <h1 className="text-white text-5xl font-extrabold text-center px-4">
              Шинэ газар, шинэ мэдрэмж
            </h1>
            <div className="bg-gradient-to-r from-green-400 to-cyan-300 text-white font-semibold rounded-lg shadow-lg transition-transform">
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
            placeholder="Where you wanna go... "
            name="input"
            className="w-80"
            onChange={(e) => {
              handleInput(e);
            }}
            value={prompt}
            disabled={isLoading}
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
              generateImage();
              CustomTripCreate();
            }}
          >
            Create
          </Button>
        </div>
        <Dialog />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bringData.map((bring) => {
            return (
              <div
                key={bring.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={bring.images[0]}
                  alt={bring.title}
                  className="w-full h-40 object-cover"
                />
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {imageUrl && (
        <div>
          <div className="text-xl font-semibold text-gray-800">
            Your generated Image
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            {imageUrl.map((url) => (
              <img
                key={url}
                className="w-full h-auto rounded-lg shadow-md "
                src={url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default CustomTrip;
