import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { dayNumber, title, description, customTripId } = await req.json();
  const response = await prisma.customTripDay.create({
    data: {
      dayNumber,
      title,
      description,
      customTripId,
    },
  });
  return NextResponse.json(response);
};

export const GET = async (req: NextRequest) => {
  const response = await prisma.customTripDay.findMany({});
  return NextResponse.json(response);
};
