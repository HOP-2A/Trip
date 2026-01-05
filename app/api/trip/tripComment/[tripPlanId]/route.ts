import { prisma } from "@/lib/db";
import { useUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  context: { params: Promise<{ tripPlanId: string }> }
) => {
  const { tripPlanId } = await context.params;
  const body = await req.json();
  const { comment } = body;
  const createdComment = await prisma.tripComment.create({
    data: { comment, tripPlanId },
  });
  return NextResponse.json(createdComment);
};

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ tripPlanId: string }> }
) => {
  const { tripPlanId } = await context.params;
  const response = await prisma.tripComment.findMany({
    where: { tripPlanId: tripPlanId },
  });
  return NextResponse.json(response);
};
