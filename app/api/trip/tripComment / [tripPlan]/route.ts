import { prisma } from "@/lib/db";
import { create } from "domain";
import { NextResponse, NextRequest } from "next/server";
export const POST = async (req: NextRequest) => {
  const { comment, tripPlanId } = await req.json();
  const createComment = await prisma.tripComment.create({
    data: {
      comment,
      tripPlanId: tripPlanId,
    },
  });
  return NextResponse.json(createComment);
};
