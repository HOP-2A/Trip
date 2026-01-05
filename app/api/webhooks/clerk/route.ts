import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import { UserJSON, UserWebhookEvent } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const WH_SECRET = process.env.WH_SECRET;
  if (!WH_SECRET) throw new Error("Missing CLERK_WEBHOOK_SECRET");

  const payload = await req.text();
  const headerList = await headers();

  const svixHeaders = {
    "svix-id": headerList.get("svix-id")!,
    "svix-timestamp": headerList.get("svix-timestamp")!,
    "svix-signature": headerList.get("svix-signature")!,
  };

  const wh = new Webhook(WH_SECRET);
  let evt;

  try {
    evt = wh.verify(payload, svixHeaders) as UserWebhookEvent;
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const eventType = evt.type;
  const user = evt.data as UserJSON;

  const email = user.email_addresses?.[0]?.email_address ?? null;
  const name = user.first_name || "";
  const imageUrl = user.image_url || "defaultPfp.jpg";
  const isAdmin = user.public_metadata?.isAdmin === true;
  const role = isAdmin ? "admin" : "user";

  try {
    if (eventType === "user.created") {
      await prisma.user.upsert({
        where: { clerkId: user.id },
        update: {
          email,
          name,
          imageUrl,
          role,
        },
        create: {
          clerkId: user.id,
          email,
          name,
          imageUrl,
          role,
        },
      });
    } else if (eventType === "user.updated") {
      await prisma.user.upsert({
        where: { clerkId: user.id },
        update: {
          email,
          name,
          imageUrl,
          role,
        },
        create: {
          clerkId: user.id,
          email,
          name,
          imageUrl,
          role,
        },
      });
    } else if (eventType === "user.deleted") {
      try {
        await prisma.user.delete({ where: { clerkId: user.id } });
      } catch (e) {}
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Webhook DB error:", err);
    return new Response("Server error", { status: 500 });
  }
}
