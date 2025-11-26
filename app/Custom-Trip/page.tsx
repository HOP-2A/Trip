"use client";
import { Button } from "@/components/ui/button";
import { Header } from "../_components/Header";
import { Calendar2 } from "../../components/ui/Calender";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Dialog } from "../_components/Dialog";
import { ChangeEvent, useState } from "react";
const CustomTrip = () => {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
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
            placeholder="Where you wanna go... "
            className="w-80"
            value={inputValue}
            onChange={(e) => {
              handleInput(e);
            }}
          />
          <Calendar2 />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Adult" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Adult">
                Adult(12+)<button>+</button>
                <div>0</div>
                <button>-</button>
              </SelectItem>
              <SelectItem value="Child">
                Child(2-11)<button>+</button>
                <div>0</div>
                <button>-</button>
              </SelectItem>
              <SelectItem value="Newborn">
                Newborn(0-1) <button>+</button>
                <div>0</div>
                <button>-</button>
              </SelectItem>
            </SelectContent>
          </Select>
          <Button>Create</Button>
        </div>
        <Dialog />
      </div>
    </div>
  );
};
export default CustomTrip;
