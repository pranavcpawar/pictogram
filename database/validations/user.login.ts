import { z } from "zod";
import { IUser } from "@/app/login/page";

export const UserLoginValidation: z.ZodType<IUser> = z
.object({
  username: z
              .string()
                .min(1,{message: "Username is required"}),

  password: z
              .string()
              .min(1, { message: "Password is required" })
})
