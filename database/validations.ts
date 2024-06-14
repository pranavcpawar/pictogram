import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  username: z
              .string()
                .min(1,{message: "Username is required"})
                .max(20, {message: "Maximum username length is 20 characters"}),

  password: z
              .string()
                .min(1, { message: "Password is required" })
                .max(20, { message: "Password is too long" }),
  
})