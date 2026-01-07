import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  const AllMember = await prisma.user.findMany({});
  return NextResponse.json(AllMember);
};
