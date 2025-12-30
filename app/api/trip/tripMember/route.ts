import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { customtripId, memberId } = await req.json();
  if (!customtripId || !memberId) {
    return NextResponse.json("aldaa");
  }
  const NewTripMember = await prisma.tripMember.create({
    data: {
      userId: memberId,
      role: "member",
      customTripId: customtripId,
    },
  });

  return NextResponse.json(NewTripMember);
};
export const GET = async (req: NextRequest) => {
  const response = await prisma.tripMember.findMany({});
  return NextResponse.json(response);
};
