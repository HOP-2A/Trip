"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "./_components/Header";
import { useRouter } from "next/navigation";
import { YourTrip } from "./_components/YourTrip";
import { FeaturedTrip } from "./_components/FeaturedTrip";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const { push } = useRouter();

  const plusPeople = () => {
    let amount: number = 0;
    amount = amount + 1;
    setCount(amount);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header />
      <div className="relative">
        <img
          src={"/nature.jpg"}
          alt="Nature Photo"
          className="w-full h-150 object-cover object-center"
        />
        <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
          <h1 className="text-white text-5xl font-extrabold text-center px-4">
            Plan Your Next Adventure
          </h1>
          <div className="bg-gradient-to-r from-green-400 to-cyan-300 text-white font-semibold  rounded-lg shadow-lg hover:scale-105 transition-transform">
            <Button variant="ghost">Home</Button>
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
        <div>
          Бид төлөвлөе, та аял — таны мөрөөдлийн аяллыг бид үнэ төлбөргүй
          төлөвлөж өгье!
        </div>
        <input placeholder="Where you wanna go... " />
        <select>
          <option defaultValue="1">
            Adult(12+)
            <button onClick={plusPeople}>+</button>
            <div>{count}</div>
            <button>-</button>
          </option>
          <option>
            <button onClick={() => {}}>+</button>
            Child(2-11)
            <button>-</button>
          </option>
          <option>
            Newborn(0-1) <button onClick={() => {}}>+</button>
            <button>-</button>
          </option>
        </select>
        <button>Create</button>
      </div>

      <FeaturedTrip />
      <YourTrip />
    </div>
  );
}
