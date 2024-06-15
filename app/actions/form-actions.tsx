"use server";
import { loginSchema, registerSchema } from "@/database/validations";
import { authenticateRegisterAction, authenticateLoginAction } from "./safe-actions";

export const registerNewUserAction = authenticateRegisterAction(registerSchema, async({ email, username, password }) => {
  console.log("registerNewUserAction: ", email, username, password );
});

export const loginUserAction = authenticateLoginAction(loginSchema, async({ email, password }) => {
  console.log("loginUserAction: ", email, password );
});