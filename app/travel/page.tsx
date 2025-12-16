"use client";

import { useEffect, useState } from "react";
import { Header } from "../_components/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FeaturedTrips() {
  const [trips, setTrips] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    async function loadTrips() {
      try {
        const res = await fetch("api/trip/tripGet/allTripsGet");
        const data = await res.json();
        setTrips(data);
      } catch (err) {
        console.error("Failed to fetch trips:", err);
      }
    }
    loadTrips();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="relative">
        <div className="right-0 absolute py-5 px-30">
          <Header />
        </div>
        
        <img
          src={
            "nature.jpeg"
          }
          alt="Nature Photo"
          className="w-full h-[600px] object-cover object-center"
        />
        <div className="flex flex-col gap-10 items-center justify-center absolute inset-0">
          <h1 className="text-white text-5xl font-extrabold text-center px-4">
            Амьдрал бол гайхамшиг
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
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <h2 className="text-2xl font-bold mb-6">Онцлох аяллууд</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              onClick={() => push(`/tripDetail/${trip.id}`)}
            >
              <img
                src={trip.images}
                alt={trip.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg leading-snug">
                  {trip.title}
                </h3>
                <div className="text-sm text-gray-600">{trip.startDate}</div>
                <div className="text-sm text-gray-600">{trip.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
