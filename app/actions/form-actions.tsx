"use server";
import { loginSchema, registerSchema } from "@/database/validations";
import { authenticateRegisterAction, authenticateLoginAction, ActionError } from "./safe-actions";
import bcryptjs from "bcryptjs";
import { addUser } from "@/database/operations";
import { redirect } from "next/navigation";

export const registerNewUserAction = authenticateRegisterAction(registerSchema, async({ email, username, password }) => {
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);
  await addUser({ email, username, password: hashedPassword });

  redirect("/login");
});

export const loginUserAction = authenticateLoginAction(loginSchema, async({ email, password }) => {
  console.log("loginUserAction: ", email, password );
});