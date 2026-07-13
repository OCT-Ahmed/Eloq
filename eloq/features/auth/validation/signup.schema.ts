import { z } from "zod"

export const signupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(35, "Full name is too long"),
  email: z
  .email("Invalid email address"),
  password: z
  .string()
  .min(8, "Password must be at least 8 characters"),
})

export type SignupSchema = z.infer<typeof signupSchema>