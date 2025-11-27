"use client";

import { useEffect, useState } from "react";

const TripDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrip = async () => {
      try {
        const res = await fetch(`/api/trip/getDetailedTrip/${id}`);
        const data = await res.json();
        setTrip(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getTrip();
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        Loading... :/
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex items-center justify-center text-red-400">
        Trip not found :C
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0f1115] text-white">
      <div className="relative w-full h-[55vh]">
        <img src={} alt="trip image" className="object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            {trip.title}
          </h1>
          <button className="px-6 py-3 bg-teal-400 text-black rounded-xl font-semibold hover:bg-teal-300 transition">
            plan trip
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-[#1c1f26] p-6 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-400 text-sm">Start date</p>
              <p>
                {trip.startDate
                  ? new Date(trip.startDate).toDateString()
                  : "not set"}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">duration</p>
              <p>{trip.durationDays} days</p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">group members</p>
              <p>{trip.members?.length || 1}</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h2 className="text-2xl font-semibold">trip plan</h2>

          {trip.customTrip?.days?.map((day) => (
            <div key={day.id} className="bg-[#1c1f26] p-5 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-2">
                day {day.dayNumber} — {day.title || "untitled"}
              </h3>

              {day.description && (
                <p className="text-gray-300 mb-4">{day.description}</p>
              )}

              <div className="space-y-3">
                {day.activities?.map((act) => (
                  <div
                    key={act.id}
                    className="bg-[#23262d] p-4 rounded-xl flex flex-col"
                  >
                    <p className="text-sm text-gray-400">
                      {act.time || "anytime"}
                    </p>
                    <p className="text-lg font-semibold">{act.title}</p>
                    {act.notes && (
                      <p className="text-sm text-gray-300 mt-1">{act.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {trip.images?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {trip.images.map((img: any) => (
                <div
                  key={img.id}
                  className="relative w-full h-60 rounded-xl overflow-hidden"
                >
                  <img
                    src={img.url}
                    alt="gallery image"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default TripDetailPage;
