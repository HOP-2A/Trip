import { prisma } from "@/lib/db";
import { TripRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const {
    startDate,
    endDate,
    peopleCount,
    destination,
    duration,
    images,
    createdById,
  } = body;

  const dbUser = await prisma.user.findUnique({
    where: { id: createdById },
  });

  if (!dbUser) {
    return new Response("user not found", { status: 404 });
  }

  const newTrip = await prisma.customTrip.create({
    data: {
      startDate,
      endDate,
      duration,
      peopleCount,
      destination,
      images,
      createdById: dbUser.id,
      members: {
        create: {
          userId: createdById,
          role: TripRole.OWNER,
        },
      },
    },
  });
  return NextResponse.json(newTrip);
};
export const GET = async () => {
  const response = await prisma.customTrip.findMany({});
  return NextResponse.json(response);
};
