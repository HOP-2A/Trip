import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { name, email, password } = body;
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return NextResponse.json(createdUser);
};


