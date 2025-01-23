import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    return NextResponse.json({ success: true, status: 200 });
  } catch (error) {
    return new NextResponse("Loi server", { status: 500 });
  }
};

export const dynamic = "force-dynamic";
