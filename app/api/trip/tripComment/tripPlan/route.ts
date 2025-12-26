import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { comment } = req.json();
  const createdComment = await prisma.tripComment.create({ data: { comment } });

  return NextResponse.json(createdComment);
};
