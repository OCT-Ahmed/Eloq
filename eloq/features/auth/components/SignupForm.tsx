"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signup } from "../actions/signup"
import { signupSchema } from "../validation/signup.schema"
import { motion } from "framer-motion"
import GoogleSignInButton from "../components/GoogleSignInButton"
import { Button } from "@/components/ui/button"
import OrSeparator from "../components/OrSeparator"

export default function SignupForm() {
  const router = useRouter();
  // °° INPUTS STATE
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // °° STATES
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState("") // إضافة حالة خطأ الاسم
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [passwordErrorMessage, setPasswordErrorMessage ] = useState("")
  // °° VARIABLES
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;
  const successMessage = "Account created successfully!";
  const failMessage = "Something went wrong."

  // °° SUBMIT HANDLER
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setIsLoading(true)
      setFullNameErrorMessage("")
      setEmailErrorMessage("")
      setPasswordErrorMessage("")
      setErrorMessage("")
      const result = signupSchema.safeParse({
        fullName,
        email,
        password,
      })
      if (!result.success) {
        console.log(result.error.flatten())
        // handle fields errors
        const errors = result.error.flatten().fieldErrors
        setFullNameErrorMessage(errors.fullName?.[0] || errors.full_name?.[0])
        setEmailErrorMessage(errors.email?.[0])
        setPasswordErrorMessage(errors.password?.[0])
        return
      }
      const signupData = result.data;
      await signup(signupData)
      alert(successMessage)
      router.push(`${SITE_URL}/dashboard`)
      setErrorMessage("")
    } catch (error) {
      console.error(error)
      setErrorMessage(failMessage)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-4 lg:gap-6 w-full md:w-[65%] lg:w-[50%] md:p-6 md:bg-background/5 md:border md:border-white/5 md:rounded-lg"
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {/* حقل الاسم الكامل */}
      <div className="flex flex-col w-full gap-1">
        <motion.input 
          name="full_name"
          type="text"
          value={fullName}
          placeholder="Write your full name"
          className="w-full p-3 text-md bg-foreground font-medium border-2 rounded-lg outline-none caret-eloq-purple"
          onChange={(e) => {
            setFullName(e.target.value)
          }}
          whileFocus={{
            scale: 1.02,
            borderColor: "purple",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          initial={{borderColor: "transparent"}}
        />
        {fullNameErrorMessage && (
          <span className="text-sm text-red-400">
            {fullNameErrorMessage}
          </span>
        )}
      </div>

      {/* حقل البريد الإلكتروني */}
      <div className="flex flex-col w-full gap-1">
        <motion.input 
          name="email"
          type="email"
          value={email}
          placeholder="Write your email"
          className="w-full p-3 text-md bg-foreground font-medium border-2 rounded-lg outline-none caret-eloq-purple"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          whileFocus={{
            scale: 1.02,
            borderColor: "purple",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          initial={{borderColor: "transparent"}}
        />
        {emailErrorMessage && (
          <span className="text-sm text-red-400">
            {emailErrorMessage}
          </span>
        )}
      </div>

      {/* حقل كلمة السر */}
      <div className="flex flex-col w-full gap-1">
        <motion.input 
          name="password"
          type="password"
          value={password}
          placeholder="Write your password"
          className="w-full p-3 text-md bg-foreground font-medium border-2 rounded-lg outline-none caret-eloq-purple"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          whileFocus={{
            scale: 1.02,
            borderColor: "purple",
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20 
          }}
          initial={{borderColor: "transparent"}}
        />
        {passwordErrorMessage && (
          <span className="text-sm text-red-400">
            {passwordErrorMessage}
          </span>
        )}
      </div>

      {/* ERROR MESSAGE FIELD */}
      {errorMessage && (
        <div className="w-full py-1 px-3 bg-red-400/15 border border-red-400/25 rounded-lg">
          <span className="text-sm text-red-500">
            {errorMessage}
          </span>
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <Button 
        type="submit"
        className="w-full p-3 font-medium text-md bg-eloq-purple hover:bg-eloq-purple/75 rounded-lg"
      >
        {isLoading ? "..." : "Create Account"}
      </Button>
      <OrSeparator />
      {/* OAuth */}
      <GoogleSignInButton setErrorMessage={setErrorMessage} />
    </motion.form>
  )
}
