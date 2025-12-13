"use client";
import { Clock7, Clock8, MapPinned } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [trip, setTrip] = useState({});
  const params = useParams();
  const { tripId } = params;

  useEffect(() => {
    if (!tripId) return;

    async function getTrips() {
      const response = await fetch(`/api/getTripDetail/${tripId}`);
      if (response.ok) {
        const res = await response.json();
        setTrip(res);
      }
    }
    getTrips();
  }, [tripId]);
  console.log(trip);
  return (
    <div>
      <div className="w-full bg-[#f6f7f8] py-10">
        <div className="w-full max-w-[1500px] mx-auto flex flex-col gap-6 px-8">
          <div className="relative flex justify-center">
            <div className="w-60 h-[500px] bg-gradient-to-tl from-[#07207a] to-transparent rounded-tl-2xl rounded-bl-2xl" />

            <img
              className="w-[820px] h-[500px] object-cover shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
              src={trip.images}
              alt=""
            />

            <div className="w-60 h-[500px] bg-gradient-to-tr from-[#07207a] to-transparent rounded-tr-2xl rounded-br-2xl" />
          </div>

          <div className="bg-[#fbfbfb] py-4 px-4  rounded-xl shadow-sm w-[700] h-[200px]">
            <div className="flex">
              <div className="flex gap-4 items-center text-4xl font-extrabold tracking-tight text-[#203250]">
                <MapPinned />
                <span>{trip?.destination}</span>
                <span>-</span>
                <span>{trip?.title}</span>
              </div>
              <div>
                <input type="text" />
              </div>
            </div>

            <div className="flex gap-2">
              <Clock7 className="h-5 w-5" />
              <div className="text-gray-900">{trip?.startDate}</div>
            </div>

            <div className="flex gap-2">
              <Clock8 className="h-5 w-5" />
              <div className="text-gray-900">{trip?.endDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
