import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: Promise<{ tripId: string }> }
) => {
  const { tripId } = await context.params;
  const trip = await prisma.tripPlan.findUnique({
    where: { id: tripId },
  });

  return NextResponse.json(trip);
};
