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
import { formatDate } from "date-fns";

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
        createdById: clerkUser?.id,
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
      <div className="min-h-screen bg-gray-100 relative">
        <div className="absolute top-0 w-full">
          <Header />
        </div>
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
            <div className="bg-white/20 backdrop-blur-sm text-white border font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-white/30 transition">
              <Button variant="ghost" onClick={() => push("/")}>
                Home
              </Button>
              <Button variant="ghost" onClick={() => push("/travel")}>
                Travel
              </Button>
              <Button variant="ghost" onClick={() => push("/Custom-Trip")}>
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
          <GenerateImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <div>
            <Input
              placeholder="Your destination... "
              value={input}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>
          <Calendar05 onChange={setDuration} />
          <Pop totalPerson={totalPerson} setTotalPerson={setTotalPerson} />
          <Button
            onClick={() => {
              CustomTripCreate();
            }}
          >
            Create
          </Button>
        </div>
        <DialogDemo />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bringData.map((bring) => {
            return (
              <div
                key={bring.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={bring.images[0]}
                  className="w-full h-40 object-cover"
                />
                <div>
                  <div
                    onClick={() => {
                      push(`/Custom-Trip/${bring.id}`);
                    }}
                    className="p-4 space-y-2"
                  >
                    <div className="text-sm text-gray-600">
                      {formatDate(bring.startDate)}
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
