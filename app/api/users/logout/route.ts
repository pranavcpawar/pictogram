import { NextResponse } from "next/server";


export async function GET(){
  try {
    const res = NextResponse.json({
      message: "Logout successful",
      success: true
      },{ status: 200 });

    res.cookies.set("token", "", {expires: new Date(0), httpOnly: true, secure: true, sameSite: "strict"});

    return res;
    
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}