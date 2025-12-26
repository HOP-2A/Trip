import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { tripPlanId, userId } = await req.json();

  const existing = await prisma.tripPlanMember.findUnique({
    where: { userId_tripPlanId: { userId, tripPlanId } },
    include: { user: true },
  });

  if (existing) return NextResponse.json(existing);

  const newTripMember = await prisma.tripPlanMember.create({
    data: { userId, tripPlanId, role: "member" },
    include: { user: true },
  });

  return NextResponse.json(newTripMember);
};

export const DELETE = async (req: NextRequest) => {
  const { userId, tripPlanId } = await req.json();

  const deletedTripMember = await prisma.tripPlanMember.deleteMany({
    where: {
      userId,
      tripPlanId,
    },
  });

  return NextResponse.json(deletedTripMember);
};

export const GET = async (
  req: NextRequest,
  context: { params: { tripId: string } }
) => {
  const params = await context.params;
  const { tripId } = params;

  const response = await prisma.tripPlanMember.findMany({
    where: { tripPlanId: tripId },
    include: { user: true },
  });

  return NextResponse.json(response);
};
