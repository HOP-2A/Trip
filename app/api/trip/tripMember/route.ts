import { prisma } from "@/lib/db";
import { TripRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { customTripId, userId } = await req.json();

  const existing = await prisma.tripMember.findUnique({
    where: { userId_customTripId: { userId, customTripId } },
    include: { user: true },
  });

  if (existing) return NextResponse.json(existing);

  const newTripMember = await prisma.tripMember.create({
    data: { userId, customTripId, role: TripRole.MEMBER },
    include: { user: true },
  });

  return NextResponse.json(newTripMember);
};
export const GET = async () => {
  const response = await prisma.tripMember.findMany({
    include: { user: true },
  });
  return NextResponse.json(response);
};

export const DELETE = async (req: NextRequest) => {
  const { userId, customTripId } = await req.json();

  const deletedTripMember = await prisma.tripMember.deleteMany({
    where: {
      userId,
      customTripId,
    },
  });

  return NextResponse.json(deletedTripMember);
};
