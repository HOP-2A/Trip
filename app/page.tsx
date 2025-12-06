"use client";
import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { useRouter } from "next/navigation";
import { FeaturedTrip } from "./_components/FeaturedTrip";
import { useEffect, useState } from "react";
import { Calendar05 } from "./_components/Calender";
import { DateRange } from "react-day-picker";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Home() {
  const { push } = useRouter();
  const [duration, setDuration] = useState<DateRange | undefined>();
  const [inputValue, setInputValue] = useState("");
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destination, setDestination] = useState([]);

  const getDestinations = async () => {
    const res = await fetch("/api/trip/tripGet/allTripsGet");
    const data = await res.json();
    setDestination(data);
  };

  const searchForTrips = () => {
    fetch(``);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDestinations();
  }, []);

  console.log(destination);

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
          <div className="bg-gradient-to-r from-green-400 to-cyan-300 text-white font-semibold rounded-lg shadow-lg transition-transform">
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

      <div className="flex justify-center">
        <div className="flex items-center w-[600px] py-5 border justify-around">
          <Input
            placeholder="Where you wanna go... "
            name="input"
            className="w-80"
            value={inputValue}
            onClick={() => setIsSearchDropdownOpen(true)}
            onChange={(e) => {
              setInputValue(e.target.value);
              setIsSearchDropdownOpen(true);
            }}
          />

          <Calendar05 onChange={setDuration} />

          <div>
            <Search />
          </div>
        </div>
      </div>
      <FeaturedTrip />
    </div>
  );
}
