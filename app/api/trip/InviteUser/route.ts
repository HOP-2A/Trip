import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const invitedUser = await prisma.invitedMember.findMany({});
  return NextResponse.json(invitedUser);
};

export const POST = async (req: NextRequest) => {
  const { userId, customTripId, invitedUserId } = await req.json();
  if (userId === customTripId) {
    return NextResponse.json("aldaa");
  }

  const InviteMember = await prisma.invitedMember.create({
    data: {
      userId,
      customTripId,
      invitedUserId,
    },
  });
  return NextResponse.json(InviteMember);
};
