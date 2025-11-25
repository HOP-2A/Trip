import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const gotActivities = await prisma.tripActivity.findMany({
    include: {
      tripPlan: true,
    },
  });

  return NextResponse.json(gotActivities);
};
