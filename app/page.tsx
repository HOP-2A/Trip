"use client";
import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar05 } from "./_components/Calender";
import { DateRange } from "react-day-picker";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Trip = {
  id: string;
  title: string;
  destination: string;
  images: string[];
  startDate: string;
  endDate: string;
};

export default function Home() {
  const { push } = useRouter();
  const [duration, setDuration] = useState<DateRange | undefined>();
  const [inputValue, setInputValue] = useState("");
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [destinations, setDestinations] = useState<string[]>([]);

  useEffect(() => {
    async function loadTrips() {
      try {
        const res = await fetch("/api/trip/tripGet/allTripsGet");
        const data = await res.json();
        setTrips(data);

        const uniqueDestinations = [
          ...new Set(data?.map((trip) => trip.destination)),
        ];
        setDestinations(uniqueDestinations);
      } catch (err) {
        console.error("Failed to fetch trips:", err);
      }
    }

    loadTrips();
  }, []);

  console.log(destinations);
  console.log(trips);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative">
        <div className="right-0 absolute py-5 px-30">
          <Header />
        </div>

        <img
          src={
            "https://i.pinimg.com/1200x/27/8e/a8/278ea85ceebe2dd36f8f0f37ac25a2bf.jpg"
          }
          alt="Nature Photo"
          className="w-full h-[600px] object-cover object-center"
        />
        <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
          <h1 className="text-white text-5xl font-extrabold text-center px-4">
            Гайхамшигтай мөчүүд таныг хүлээж байна
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

          <div>
            {destinations?.map((d, index) => (
              <div key={index}>
                <div>{d}</div>
              </div>
            ))}
          </div>

          <Calendar05 onChange={setDuration} />

          <div>
            <Search />
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Featured Trips
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trips?.slice(0, 4).map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={trip.images[0]}
                alt={trip.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg leading-snug">
                  {trip.title}
                </h3>
                <div className="text-sm text-gray-600">{trip.startDate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
