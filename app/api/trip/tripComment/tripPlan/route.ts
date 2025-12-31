import { prisma } from "@/lib/db";
import { useUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { comment, tripPlanId } = body;
  const createdComment = await prisma.tripComment.create({
    data: { comment, tripPlanId },
  });
  return NextResponse.json(createdComment);
};
export const GET = async (req: NextRequest) => {
  const response = await prisma.tripComment.findMany({});
  return NextResponse.json(response);
};
