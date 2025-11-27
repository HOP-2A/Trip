import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import{ hash } from "bcrypt";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { name, email, password } = body;

  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds)
  
  const createdUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return NextResponse.json(createdUser);
};


