"use client"
import { loginWithGoogle } from "../services/auth.service"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton({
  setErrorMessage,
}: {
  setErrorMessage: (message: string | null) => void
}) {

  async function handleLoginWithGoogle() {
    try {
      const { error } = await loginWithGoogle()

      if (error) {
        setErrorMessage(error.message)
      }

    } catch (error) {
      console.error(error)

      if (error instanceof Error) {
        setErrorMessage(error.message)
      }
    }
  }

  return (
    <Button
      type="button"
      className="w-full p-3 py-5 font-medium text-md text-black bg-white hover:bg-eloq-purple/75 rounded-lg"
      onClick={handleLoginWithGoogle}
    >
      <FcGoogle />
      Login With Google
    </Button>
  )
}