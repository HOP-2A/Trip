import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { startDate, endDate, peopleCount, destination, title } = body;
  const response = await prisma.customTrip.create({
    data: {
      startDate,
      endDate,
      peopleCount,
      destination,
      title,
    },
  });
  return NextResponse.json(response);
};
