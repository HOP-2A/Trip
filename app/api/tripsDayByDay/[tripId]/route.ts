import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (
  request: Request,
  context: { params: Promise<{ tripId: string }> }
) => {
  const { tripId } = await context.params;
  const tripDay = await prisma.tripDay.findMany({
    where: {
      tripPlanId: tripId,
    },
  });
  return NextResponse.json(tripDay);
};
