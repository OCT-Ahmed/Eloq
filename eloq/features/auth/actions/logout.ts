import { logout as logoutService } from "../services/auth.service"

export async function logout() {
  const { error } = await logoutService()
  
  if (error) { throw error }
}