import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;
  const foundUser = await prisma.user.findUnique({
    where: { email },
  });
  if (!foundUser) return new NextResponse("user not found");
};
