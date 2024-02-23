import { connectToDB } from "@/database/mongoose";
import User from "@/database/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connectToDB();

export async function POST(request: NextRequest) {

  try {
    const req = await request.json();
    const { username, password } = req;

    console.log(req);

    // check if user exists
    const user = await User.findOne({ username })

    if(!user){
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    // check if password is correct
    const legitPassword = await bcryptjs.compare(password, user.password);

    if(!legitPassword){
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // create jwt
    const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET!, { expiresIn: "1d" });

    // set cookies
    const res = NextResponse.json({ message: "Login successful"}, { status: 200 });
    res.cookies.set("token", JSON.stringify(token), {httpOnly: true });

    return res;

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: (err as Error).message }, { status: 400 });

  }
}