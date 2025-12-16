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
      <div className="w-full h-[100vh] relative w-full h-[100vh]  py-10 overflow-hidden ">
        
        <div className="relative z-10 w-full max-w-[1500px] mx-auto flex flex-col gap-6 px-8 ">
          <div className="relative flex justify-center">
            <div className="w-60 h-[500px] bg-[#c2e4f1] to-transparent rounded-tl-2xl rounded-bl-2xl" />

            <img
              className="w-[1400px] h-[500px] object-cover shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
              src={trip.images}
              alt=""
            />
            

            <div className="w-60 h-[500px] bg-[#c24c3a] to-transparent rounded-br-2xl rounded-tr-2xl" />
          </div>

          <div className="bg-[#fbfbfb] py-4 px-4  rounded-xl shadow-sm w-[700] h-[200px] space-y-2">
            <div className="flex">
              <div className="flex gap-4 items-center text-4xl font-extrabold tracking-tight text-[#203250] ">
                <MapPinned />
                <span className="leading-none">{trip?.destination}</span>
                <div>-</div>
                <div>{trip?.title}</div>
              </div>
            </div>

            <div className="flex gap-3">
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
    </div>
  );
};
export default Page;
