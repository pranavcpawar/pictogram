import { connectToDB } from "@/database/mongoose";
import User from "@/database/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const {username, email, password} = req;

    console.log(req);

    const user = await User.findOne({email})

    // check if user exists
    if (user){
      return NextResponse.json({error: "User already exists"}, {status: 400})
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    const savedUser =  await newUser.save();

    console.log(savedUser);

    return NextResponse.json(
      {message: "User created successfully", user: savedUser}, 
      {status: 200});
    
  } catch (error) {
    return NextResponse.json(
      { error: error }, 
      {status: 500});
  }
}

