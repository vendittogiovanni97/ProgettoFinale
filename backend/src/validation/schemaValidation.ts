import { z } from "zod";

export const LoginInfoSchema = z.object({
  email:z.string().email(),
  password: z.string().min(6, { message: "Must be 6 or more characters long" }).regex(/[A-Z]/).regex(/[a-z]/).regex(/[0-9]/).regex(/[!@#$%^&*(),.?":{}|<>]/)
})
