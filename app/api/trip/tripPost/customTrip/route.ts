import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { startDate, endDate, peopleCount, destination } = await req.json();
  const response = await prisma.customTrip.create({
    data: {
      startDate,
      endDate,
      peopleCount,
      destination,
    },
  });
  return NextResponse.json(response);
};

export const GET = async (req: NextRequest) => {
  const response = await prisma.customTrip.findMany({});
  return NextResponse.json(response);
};
