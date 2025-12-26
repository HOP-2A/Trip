"use client";

import { useEffect, useState } from "react";
import { Header } from "../_components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Trip = {
  id: string;
  title: string;
  destination: string;
  images: string[];
  startDate: string;
  endDate: string;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

const TripSkeleton = () => (
  <div className="bg-white rounded-xl shadow overflow-hidden animate-pulse">
    <div className="w-full h-40 bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
    </div>
  </div>
);

export default function FeaturedTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    async function loadTrips() {
      try {
        setIsLoading(true);

        const res = await fetch("api/trip/tripGet/allTripsGet");
        const data = await res.json();

        setTrips(data);
      } catch (err) {
        console.error("failed to fetch trips:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadTrips();
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="relative">
        <div className="absolute top-0 w-full">
          <Header />
        </div>

        <img
          src="nature.jpeg"
          alt="Nature Photo"
          className="w-full h-[600px] object-cover object-center"
        />

        <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
          <h1 className="text-white text-5xl font-extrabold text-center px-4">
            Амьдрал бол гайхамшиг
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

      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Аяллууд</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <TripSkeleton key={i} />)
            : trips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
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
