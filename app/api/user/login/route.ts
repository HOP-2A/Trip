import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { email, password } = body;
  const foundUser = await prisma.user.findUnique({
    where: { email },
  });
  
  if (!foundUser) return new NextResponse("email buruu baina");
    const checkPass = await compare(password,  foundUser.password)
    if(!checkPass){
      return NextResponse.json({message:"pass buruu baina"},{status:404})
    }

return NextResponse.json({message:"amjilttai newterlee"},{status:200})
};
