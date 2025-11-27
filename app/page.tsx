"use client";
import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { useRouter } from "next/navigation";
import { YourTrip } from "./_components/YourTrip";
import { FeaturedTrip } from "./_components/FeaturedTrip";
import { useState } from "react";
import { Calendar2 } from "../components/ui/Calender";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
export default function Home() {
  const [count, setCount] = useState(0);
  const { push } = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [calendar, setCalender] = useState<boolean>(false);

  const plusPeople = () => {
    let amount: number = 0;
    amount = amount + 1;
    setCount(amount);
  };
  const func = () => {
    setCalender(true);
  };
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative">
        <Header />
        <img
          src={"/nature.jpg"}
          alt="Nature Photo"
          className="w-full h-[600px] object-cover object-center"
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
        Бид төлөвлөе, та аял — таны мөрөөдлийн аяллыг бид үнэ төлбөргүй төлөвлөж
        өгье!
      </div>
      <div className="flex justify-evenly">
        <Input placeholder="Where you wanna go... " className="w-80" />
        <Calendar2 />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Adult" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Adult">
              Adult<button>+</button>
              <div>0</div>
              <button>-</button>
            </SelectItem>
            <SelectItem value="Child">
              Child<button>+</button>
              <div>0</div>
              <button>-</button>
            </SelectItem>
            <SelectItem value="Newborn">
              Newborn <button>+</button>
              <div>0</div>
              <button>-</button>
            </SelectItem>
          </SelectContent>
        </Select>
        {/* <select>
          <option defaultValue="1">
            Adult(12+)
            <button>+</button>
            <div>{count}</div>
            <button>-</button>
          </option>
          <option>
            <button>+</button>
            Child(2-11)
            <button>-</button>
          </option>
          <option>
            Newborn(0-1) <button>+</button>
            <button>-</button>
          </option>
        </select> */}
        <Button>Create</Button>
      </div>

      <FeaturedTrip />
      <YourTrip />
    </div>
  );
}
