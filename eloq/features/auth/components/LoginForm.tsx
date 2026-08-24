"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { login } from "../actions/login";
import { loginSchema } from "../validation/login.schema";
import GoogleSignInButton from "../components/GoogleSignInButton";
import OrSeparator from "../components/OrSeparator";
import { Button } from "@/components/ui/button";
import { playUISound } from "@/lib/uiSounds";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
  const failMessage = "Something went wrong. Please check your credentials.";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    playUISound("click");

    try {
      setIsLoading(true);
      setEmailErrorMessage("");
      setPasswordErrorMessage("");
      setErrorMessage("");

      const result = loginSchema.safeParse({ email, password });

      if (!result.success) {
        const errors = result.error.flatten().fieldErrors;
        setEmailErrorMessage(errors.email?.[0] ?? "");
        setPasswordErrorMessage(errors.password?.[0] ?? "");
        return;
      }

      await login(result.data);
      router.push(`${SITE_URL}/dashboard`);
    } catch (error) {
      console.error(error);
      setErrorMessage(failMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-4 rounded-2xl border border-border-subtle/80 bg-card/50 p-6 shadow-soft backdrop-blur-sm md:w-[65%] lg:w-[50%]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* البريد الإلكتروني */}
      <div className="flex w-full flex-col gap-1.5">
        <label className="text-xs font-semibold text-muted">Email</label>
        <motion.input
          name="email"
          type="email"
          value={email}
          placeholder="name@example.com"
          className="w-full rounded-xl border border-border-subtle bg-background p-3 text-sm font-medium text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-eloq-purple focus:ring-2 focus:ring-eloq-purple/20"
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrorMessage && (
          <span className="text-xs font-medium text-red-500">
            {emailErrorMessage}
          </span>
        )}
      </div>

      {/* كلمة السر */}
      <div className="flex w-full flex-col gap-1.5">
        <label className="text-xs font-semibold text-muted">Password</label>
        <motion.input
          name="password"
          type="password"
          value={password}
          placeholder="••••••••"
          className="w-full rounded-xl border border-border-subtle bg-background p-3 text-sm font-medium text-foreground outline-none transition-all placeholder:text-muted/60 focus:border-eloq-purple focus:ring-2 focus:ring-eloq-purple/20"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrorMessage && (
          <span className="text-xs font-medium text-red-500">
            {passwordErrorMessage}
          </span>
        )}
      </div>

      {/* رسائل الخطأ العامة */}
      {errorMessage && (
        <div className="w-full rounded-xl border border-red-500/20 bg-red-500/10 p-3">
          <span className="text-xs font-medium text-red-500">
            {errorMessage}
          </span>
        </div>
      )}

      {/* زر تسجيل الدخول */}
      <Button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full rounded-xl bg-eloq-purple py-5 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-eloq-purple/90 active:scale-[0.99]"
      >
        {isLoading ? "Signing in..." : "Login"}
      </Button>

      <OrSeparator />

      <GoogleSignInButton setErrorMessage={setErrorMessage} />
    </motion.form>
  );
}
