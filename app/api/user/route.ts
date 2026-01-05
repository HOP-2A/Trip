import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  const AllMember = await prisma.user.findMany({});
  return NextResponse.json(AllMember);
};
