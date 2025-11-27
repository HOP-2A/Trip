import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }) => {
  const trip = await prisma.tripPlan.findUnique({
    where: { id: params.id },
    include: {
      images: true,
      members: true,
      customTrip: {
        include: {
          days: {
            include: {
              activities: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(trip);
};
