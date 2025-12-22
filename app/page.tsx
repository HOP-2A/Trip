"use client";

import { Button } from "@/components/ui/button";
import { Header } from "./_components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Calendar05 } from "./_components/Calender";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DateRange } from "react-day-picker";

type Trip = {
  id: string;
  title: string;
  destination: string;
  images: string[];
  startDate: string;
  endDate: string;
};

const TripSkeleton = () => (
  <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse">
    <div className="w-full h-40 bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

export default function Home() {
  const { push } = useRouter();

  const [duration, setDuration] = useState<DateRange | undefined>();
  const [inputValue, setInputValue] = useState("");
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const [trips, setTrips] = useState<Trip[]>([]);
  const [filteredTrips, setFilteredTrips] = useState<Trip[]>([]);
  const [destinations, setDestinations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadTrips() {
      try {
        setIsLoading(true);

        const res = await fetch("/api/trip/tripGet/allTripsGet");
        const data: Trip[] = await res.json();

        setTrips(data);

        const uniqueDestinations = [
          ...new Set(data.map((trip) => trip.destination)),
        ];
        setDestinations(uniqueDestinations);
      } catch (err) {
        console.error("Failed to fetch trips:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadTrips();
  }, []);

  const handleSearch = () => {
    const searchResults = trips.filter((t) => {
      const matchedDestination = t.destination
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      let matchesDate = true;
      if (duration?.from && duration?.to) {
        const tripStart = new Date(t.startDate);
        const tripEnd = new Date(t.endDate);
        matchesDate = tripEnd >= duration.from && tripStart <= duration.to;
      }

      return matchedDestination && matchesDate;
    });

    setFilteredTrips(searchResults);
  };

  return (
    <div className="min-h-screen">
      <div className="relative">
        <div className="absolute top-0 w-full">
          <Header />
        </div>

        <img
          src="https://i.pinimg.com/1200x/27/8e/a8/278ea85ceebe2dd36f8f0f37ac25a2bf.jpg"
          alt="Nature Photo"
          className="w-full h-[600px] object-cover object-center"
        />

        <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
          <h1 className="text-white text-5xl font-extrabold text-center px-4">
            Гайхамшигтай мөчүүд таныг хүлээж байна
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

      <div className="flex justify-center">
        <div className="flex items-center w-[600px] py-5 border justify-around rounded-2xl">
          <div className="relative">
            <Input
              placeholder="Where you wanna go..."
              className="w-80"
              value={inputValue}
              onFocus={() => setIsSearchDropdownOpen(true)}
              onBlur={() => setIsSearchDropdownOpen(false)}
              onChange={(e) => {
                setInputValue(e.target.value);
                setIsSearchDropdownOpen(true);
              }}
            />

            {isSearchDropdownOpen && destinations.length > 0 && (
              <div className="absolute bg-white shadow rounded w-80 mt-2 max-h-60 overflow-y-auto z-10">
                {destinations.map((d) => (
                  <div
                    key={d}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseDown={() => {
                      setInputValue(d);
                      setIsSearchDropdownOpen(false);
                    }}
                  >
                    {d}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Calendar05 onChange={setDuration} />

          <div onClick={handleSearch} className="cursor-pointer">
            <Search />
          </div>
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Featured Trips
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => <TripSkeleton key={i} />)
            : (filteredTrips.length > 0
                ? filteredTrips
                : trips.slice(0, 4)
              ).map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                  onClick={() => push(`/tripDetail/${trip.id}`)}
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
                    <div className="text-sm text-gray-600">
                      {formatDate(trip.startDate)}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
