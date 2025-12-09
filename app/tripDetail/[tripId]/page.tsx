"use client";
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
      <div>{trip.title}</div>
      <div>{trip.destination}</div>
      <img src={trip.images[0]} />
      <div>{trip.startDate}</div>
      <div>{trip.endDate}</div>
    </div>
  );
};
export default Page;
