import { requireAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  try {
    await requireAdmin();
  } catch {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Admin panel</h1>
          <span className="text-sm text-gray-500">Travely dashboard</span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="text-lg font-medium mb-2">trips</h2>
            <p className="text-sm text-gray-500">
              create, edit, or delete trips.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border">
            <h2 className="text-lg font-medium mb-2">users</h2>
            <p className="text-sm text-gray-500">view and manage user roles.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
