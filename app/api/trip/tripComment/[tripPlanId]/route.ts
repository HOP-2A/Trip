import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ tripPlanId: string }> }
) => {
  const { tripPlanId } = await context.params;
  const body = await req.json();
  const { comment, userId } = body;
  const createdComment = await prisma.tripComment.create({
    data: { comment, userId, tripPlanId },
  });
  return NextResponse.json(createdComment);
};

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ tripPlanId: string }> }
) => {
  const { tripPlanId } = await context.params;
  const response = await prisma.tripComment.findMany({
    where: { tripPlanId },
    include: {
      user: true,
    },
  });
  return NextResponse.json(response);
};
export const DELETE = async (req: NextRequest) => {
  const { commentId } = await req.json();
  const deletedComment = await prisma.tripComment.delete({
    where: { id: commentId },
  });
  return NextResponse.json(deletedComment);
};
