import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { activity, notes, dayNumber, tripPlanId } = body;
  const createdActivity = await prisma.tripActivity.create({
    data: {
      activity,
      notes,
      dayNumber,
      tripPlanId,
    },
  });
  return NextResponse.json(createdActivity);
};
