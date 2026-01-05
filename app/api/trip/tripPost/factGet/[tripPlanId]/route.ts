import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: Promise<{ tripPlanId: string }> }
) => {
  const { tripPlanId } = await context.params;
  const fact = await prisma.fact.findUnique({
    where: { id: tripPlanId },
  });

  return NextResponse.json(fact);
};
