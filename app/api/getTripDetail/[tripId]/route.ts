import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: { tripId: string } }
) => {
  const { tripId } = await context.params;
  console.log(tripId, "asdasdasdasd");
  const trip = await prisma.tripPlan.findUnique({
    where: { id: tripId },
  });

  return NextResponse.json(trip);
};
