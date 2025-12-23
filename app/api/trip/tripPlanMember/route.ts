import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { tripPlanId, userId } = await req.json();

  const newTripMember = await prisma.tripPlanMember.create({
    data: {
      userId,
      role: "member",
      tripPlanId,
    },
  });

  return NextResponse.json(newTripMember);
};

export const GET = async () => {
  const response = await prisma.tripPlanMember.findMany({});
  return NextResponse.json(response);
};
