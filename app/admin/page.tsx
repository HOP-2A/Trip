import { requireAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  try {
    await requireAdmin();
  } catch {
    redirect("/");
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">admin panel</h1>
    </div>
  );
}
