"use client";

import { useState } from "react";
import { loginWithGoogle } from "../services/auth.service";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { playUISound } from "@/lib/uiSounds";

export default function GoogleSignInButton({
  setErrorMessage,
}: {
  setErrorMessage: (message: string | null) => void;
}) {
  const [isPending, setIsPending] = useState(false);

  async function handleLoginWithGoogle() {
    try {
      playUISound("click");
      setIsPending(true);
      const { error } = await loginWithGoogle();

      if (error) {
        setErrorMessage(error.message);
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    } finally {
      setIsPending(false);
    }
  }

  return (
    <Button
      type="button"
      disabled={isPending}
      onClick={handleLoginWithGoogle}
      className="group relative flex w-full items-center justify-center gap-3 rounded-lg border border-border-subtle bg-white py-5 font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:border-eloq-purple/40 hover:bg-gray-50 hover:shadow-md active:scale-[0.99] dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800/80"
    >
      <FcGoogle className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
      <span className="text-sm sm:text-base">
        {isPending ? "Connecting..." : "Continue with Google"}
      </span>
    </Button>
  );
}