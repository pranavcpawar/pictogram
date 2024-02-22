import { IUser } from "@/app/signup/page";
import { z } from "zod";

export const UserValidation: z.ZodType<IUser> = z
.object({
  email: z.string().email(),
  username: z
              .string()
                .min(1,{message: "Username is required"})
                .min(3, {message: "Minimum username length is 3 characters"})
                .max(20, {message: "Maximum username length is 20 characters"}),

  password: z
              .string()
              .min(1, { message: "Password is required" })
              .min(8, { message: "Password is too short" })
              .max(20, { message: "Password is too long" }),
  
  confirmPassword: z.string(),

})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});
