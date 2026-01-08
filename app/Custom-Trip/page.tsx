/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { Button } from "@/components/ui/button";
import { Header } from "../_components/Header";
import { Calendar05 } from "../_components/Calender";
import { useRouter } from "next/navigation";
import { DialogDemo } from "../_components/Dialog";
import { ChangeEvent, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Pop } from "../_components/Popover";
import { GenerateImage } from "../_components/GenerateImg";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useAuth } from "@/hooks/use-auth";

export type CustomTripType = {
  id: string;
  startDate: string;
  endDate: string;
  peopleCount: number;
  destination: string;
  images: string[];
  createdById: string;
  duration: number;
};

const CustomTrip = () => {
  const [duration, setDuration] = useState<DateRange | undefined>();
  const [bringData, setBringData] = useState<CustomTripType[]>([]);
  const [input, setInput] = useState("");
  const [totalPerson, setTotalPerson] = useState(0);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const { push } = useRouter();

  const { user: clerkUser } = useUser();
  const { user } = useAuth(clerkUser?.id);

  const BringCustomTrip = async () => {
    const response = await fetch("/api/trip/tripPost/customTrip");
    const data = await response.json();
    setBringData(data);
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const CustomTripCreate = async () => {
    if (!duration?.from || !duration?.to) return;
    const startDate = duration?.from?.toISOString();
    const endDate = duration?.to?.toISOString();
    const amount = Math.floor(
      (new Date(endDate).getTime() - new Date(startDate).getTime()) /
        (1000 * 60 * 60 * 24)
    );

    await fetch("/api/trip/tripPost/customTrip", {
      method: "POST",
      body: JSON.stringify({
        startDate,
        endDate,
        duration: amount,
        peopleCount: totalPerson,
        destination: input,
        images: imageUrl,
        createdById: user?.id,
      }),
    });
    await BringCustomTrip();
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

  useEffect(() => {
    BringCustomTrip();
  }, []);

  return (
    <div>
      <div className="min-h-screen relative">
        <div className="absolute top-0 w-full z-10">
          <Header />
        </div>
        <div className="relative">
          <img
            src={"3.jpeg"}
            alt="Nature Photo"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover object-center"
          />
          <div className="flex flex-col gap-6 sm:gap-10 items-center justify-center absolute inset-0">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center px-4">
              Шинэ газар, шинэ мэдрэмж
            </h1>
            <div className="bg-white/20 backdrop-blur-sm text-white border font-semibold px-2 sm:px-4 py-2 rounded-lg shadow-lg hover:bg-white/30 transition flex flex-wrap justify-center gap-1">
              <Button
                variant="ghost"
                onClick={() => push("/")}
                className="text-sm sm:text-base"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => push("/travel")}
                className="text-sm sm:text-base"
              >
                Travel
              </Button>
              <Button
                variant="ghost"
                onClick={() => push("/Custom-Trip")}
                className="text-sm sm:text-base"
              >
                Custom Trip
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center mt-5 gap-5 px-4">
          <div className="border p-4 sm:p-5 rounded-2xl w-full lg:w-auto">
            <GenerateImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <div className="w-full max-w-[500px]">
              {imageUrl.length ? (
                <div className="bg-gray-50 p-4 sm:p-5 rounded-lg h-50 relative">
                  <div className="overflow-x-auto">
                    <div className="flex gap-4 pb-2">
                      {imageUrl.map((url, index) => (
                        <img
                          key={`${url}-${index}`}
                          className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-2xl object-cover flex-shrink-0"
                          src={url}
                          alt={`Generated image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 sm:p-5 rounded-lg flex gap-2 h-50 justify-center items-center text-sm sm:text-base text-center">
                  Your Generated Image Here!
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row border rounded-2xl gap-4 sm:gap-5 p-4 sm:p-5 items-stretch sm:items-center w-full lg:w-auto">
            <div className="w-full sm:w-auto">
              <Input
                placeholder="Where you wanna go..."
                value={input}
                onChange={(e) => {
                  handleInput(e);
                }}
                className="w-full"
              />
            </div>
            <div className="flex justify-center">
              <Calendar05 onChange={setDuration} />
              <Pop totalPerson={totalPerson} setTotalPerson={setTotalPerson} />
            </div>
            <Button
              onClick={() => {
                CustomTripCreate();
                setImageUrl([]);
              }}
              variant="outline"
              className="w-full sm:w-auto"
            >
              Create
            </Button>
            <div className="w-full sm:w-auto">
              <DialogDemo />
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto mt-10 px-4 pb-10">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {bringData.map((bring) => {
              return (
                <div
                  key={bring.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                  onClick={() => {
                    push(`/Custom-Trip/${bring.id}`);
                  }}
                >
                  <img
                    src={bring.images[0]}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  <div>
                    <div className="p-4 space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg leading-snug">
                        {bring.destination.toLocaleUpperCase()}
                      </h3>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Эхлэл хугацаа: {formatDate(bring.startDate)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomTrip;
