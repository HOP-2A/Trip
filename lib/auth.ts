import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";

export async function requireAdmin() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("unauthenticated");
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { role: true },
  });

  if (!user || user.role !== "admin") {
    throw new Error("forbidden");
  }

  return user;
}
