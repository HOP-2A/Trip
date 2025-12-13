import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { startDate, endDate, peopleCount, destination, createdById } = body;
  console.log(createdById);

  const dbUser = await prisma.user.findUnique({
    where: { clerkId: createdById.clerkId },
  });

  console.log(dbUser);
  if (!dbUser) {
    return new Response("user not found", { status: 404 });
  }

  const newTrip = await prisma.customTrip.create({
    data: {
      startDate,
      endDate,
      peopleCount,
      destination,
      createdById: dbUser.id,
    },
  });
  return NextResponse.json(newTrip);
};
export const GET = async (req: NextRequest) => {
  const response = await prisma.customTrip.findMany({});
  return NextResponse.json(response);
};
