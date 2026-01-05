import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  context: { params: Promise<{ userId: string }> }
) => {
  const { userId } = await context.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json("user not found");
    }
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json("server error");
  }
};
