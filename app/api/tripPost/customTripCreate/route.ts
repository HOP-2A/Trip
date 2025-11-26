import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();
  //haashaa,hezee,heden hun gedgiin avna
  const { totaldays, startDate, endDate } = body;
  //endees haashaa gedeg n avagdahgui baina
};
