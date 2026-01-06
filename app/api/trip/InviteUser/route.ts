import { prisma } from "@/lib/db";
import { InvitedStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const invitedUser = await prisma.invitedMember.findMany({});
  return NextResponse.json(invitedUser);
};

export const POST = async (req: NextRequest) => {
  const { userId, customTripId, invitedUserId, status } = await req.json();
  if (userId === customTripId) {
    return NextResponse.json("aldaa");
  }
  if (status === InvitedStatus.ACCEPTED) {
    return NextResponse.json("Accepted");
  }
  if (status === InvitedStatus.REJECTED) {
    return NextResponse.json("Rejeceted");
  }

  const InviteMember = await prisma.invitedMember.create({
    data: {
      userId,
      customTripId,
      invitedUserId,
      status: "PENDING",
    },
  });
  return NextResponse.json(InviteMember);
};

