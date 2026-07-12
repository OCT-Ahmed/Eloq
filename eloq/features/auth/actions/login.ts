import { login as loginService } from "../services/auth.service"
import type { LoginData } from "../types/auth.types"

export async function login(data: LoginData) {
  const { data: authData, error } = await loginService(data)
  
  if (error) { throw error }
  
  return authData
}