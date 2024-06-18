"use server";
import { loginSchema, logoutSchema, registerSchema } from "@/database/validations";
import { authenticateRegisterAction, authenticateLoginAction, ActionError, unauthenticatedLogoutAction } from "./safe-actions";
import bcryptjs from "bcryptjs";
import { addUser } from "@/database/operations";
import { redirect } from "next/navigation";
import { createNewSession, deleteSession } from "@/lib/session";

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

  await createNewSession(String(user._id), String(user.username));
  
});

export const logoutUserAction = unauthenticatedLogoutAction(logoutSchema, async({ auth }) => {
  await deleteSession(auth);

});