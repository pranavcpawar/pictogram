"use server";
import { loginSchema, registerSchema } from "@/database/validations";
import { authenticateRegisterAction, authenticateLoginAction, ActionError } from "./safe-actions";
import bcryptjs from "bcryptjs";
import { addUser } from "@/database/operations";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const registerNewUserAction = authenticateRegisterAction(registerSchema, async({ email, username, password }) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  await addUser({ email, username, password: hashedPassword });

  redirect("/login");
});

export const loginUserAction = authenticateLoginAction(loginSchema, async({ email, password }, { user }) => {
  const isLegit = await bcryptjs.compare(password, user.password);

  if (!isLegit) {
    throw new ActionError("Authentication Failed. Please try again!");
  };

  const auth = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET!, { expiresIn: "1h" });
  cookies().set("auth", JSON.stringify(auth), { secure: true, sameSite: "strict", httpOnly: true, maxAge: 60 * 60 * 1 });
  
});