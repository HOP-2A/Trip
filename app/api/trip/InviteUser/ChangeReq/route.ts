import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { inviteId, status } = await req.json();

  const updatingReq = await prisma.invitedMember.update({
    where: { id: inviteId },
    data: { status },
  });
  return NextResponse.json(updatingReq);
};
