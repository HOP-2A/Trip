import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

type CommentType = "TRIP" | "CUSTOM";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ tripPlanId: string }> }
) => {
  const body = await req.json();
  const {
    comment,
    userId,
    type,
  }: {
    comment: string;
    userId: string;
    type: CommentType;
  } = body;

  if (!comment || !userId || !type) {
    return NextResponse.json(
      { error: "missing required fields" },
      { status: 400 }
    );
  }

  const { tripPlanId } = await params;

  const data =
    type === "CUSTOM"
      ? {
          comment,
          userId,
          customTripId: tripPlanId,
        }
      : {
          comment,
          userId,
          tripPlanId: tripPlanId,
        };

  const created = await prisma.tripComment.create({
    data,
    include: { user: true },
  });

  return NextResponse.json(created);
};

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ tripPlanId: string }> }
) => {
  const { tripPlanId } = await params;
  const comments = await prisma.tripComment.findMany({
    where: {
      OR: [{ tripPlanId: tripPlanId }, { customTripId: tripPlanId }],
    },
    include: { user: true },
  });

  return NextResponse.json(comments);
};

export const DELETE = async (req: NextRequest) => {
  const { commentId }: { commentId: string } = await req.json();

  if (!commentId) {
    return NextResponse.json({ error: "commentId required" }, { status: 400 });
  }

  await prisma.tripComment.delete({
    where: { id: commentId },
  });

  return NextResponse.json({ success: true });
};
