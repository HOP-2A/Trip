import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { customTripId, dayNumber, title, description } = body;

  const createdDay = await prisma.customTripDay.create({
    data: {
      customTripId,
      dayNumber,
      title,
      description,
    },
  });
  return NextResponse.json(createdDay);
};
