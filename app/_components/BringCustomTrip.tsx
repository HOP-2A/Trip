import { prisma } from "@/lib/db";

export const BringCustomTrip = async () => {
  const customtrips = await prisma.customTrip.findMany();
  return (
    <div>
      <div>
        {customtrips.map((trips) => {
          return (
            <div key={trips.id}>
              <div>{trips.destination}</div>
              <div>{trips.peopleCount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
