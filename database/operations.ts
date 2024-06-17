import User from "./models/user.model";
import { connectToDB } from "./mongoose";

connectToDB();

export async function addUser(user: {email: string, username: string, password: string}) {

  const newUser = new User(user);
  await newUser.save();
};

export async function getUser(email: string) {

  return await User.findOne({ email });
};
