import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async () => {
  const response = await prisma.images.createMany({
    data: [
         {
             tripPlanId: "BCtl1xoW_YznjYbx7EkZz",
             image:"https://i.pinimg.com/1200x/e0/b8/17/e0b81761d30a7f6e7593417527b1316d.jpg"
         }
    ],
    });
  return NextResponse.json(response);
};