import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const WH_SECRET = process.env.CLERK_WEBHOOK_SECRET;
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
    evt = wh.verify(payload, svixHeaders);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  const eventType = evt.type;
  const user = evt.data;

  const email = user.email_addresses?.[0]?.email_address ?? null;
  const phoneNumber = user.phone_numbers?.[0]?.phone_number ?? null;
  const firstName = user.first_name || "";

  if (eventType === "user.created") {
    await prisma.childProfile.upsert({
      where: { clerkId: user.id },
      update: {},
      create: {
        clerkId: user.id,
        email,
        phoneNumber,
        firstName,
      },
    });
  }
}
