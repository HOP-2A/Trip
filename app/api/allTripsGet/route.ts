import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
    const allTrips = await prisma.tripPlan.findMany()
    return NextResponse.json(allTrips);
}

