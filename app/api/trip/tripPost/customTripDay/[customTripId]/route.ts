import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ customTripId: string }> }
) => {
  const id = await context.params;
  const { dayNumber, title, description } = await req.json();

  const response = await prisma.customTripDay.create({
    data: {
      dayNumber,
      title,
      description,
      customTripId: id.customTripId,
    },
  });
  return NextResponse.json(response);
};

export const GET = async (
  req: Request,
  context: { params: Promise<{ customTripId: string }> }
) => {
  const { customTripId } = await context.params;

  const response = await prisma.customTrip.findMany({
    where: {
      id: customTripId,
    },
    include: {
      days: true,
    },
  });

  return NextResponse.json(response);
};
