import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const gotCountries = await prisma.travelGroup.findMany({
    include: {
      creator: true,
    },
  });

  return NextResponse.json(gotCountries);
};
