import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { startDate, endDate, peopleCount, destination, images, createdById } = body;

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: createdById.clerkId },
  });
  if (!dbUser) {
    return new Response("user not found", { status: 404 });
  }

  const response = await prisma.customTrip.create({
    data: {
      startDate,
      endDate,
      peopleCount,
      destination,
      images,
      createdById: dbUser.id,
    },
  });
  return NextResponse.json(response);
};
export const GET = async (req: NextRequest) => {
  const response = await prisma.customTrip.findMany({});
  return NextResponse.json(response);
};
