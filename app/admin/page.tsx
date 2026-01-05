import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function AdminPage() {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  const dbUser = await prisma.user.findUnique({ where: { clerkId: user.id } });
  if (!dbUser || dbUser.role !== "ADMIN") return <div>Access denied</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>test</div>
    </div>
  );
}
