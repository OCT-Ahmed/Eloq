import { z } from "zod"

export const loginSchema = z.object({
  email: z
  .email("Invalid email address"),
  password: z
  .string()
  .min(8),
})

/* how to message email or password is incorrect */

export type LoginSchema = z.infer<typeof loginSchema>