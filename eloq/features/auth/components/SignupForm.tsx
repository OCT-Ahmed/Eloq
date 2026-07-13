"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { signup } from "../actions/signup"
import { Button } from "@/components/ui/button";
import { signupSchema } from "../validation/signup.schema"


/* add loading state */
export default function SignupForm() {
  // °° INPUTS STATE
  const [ fullName, setFullName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  // °° FORM STATES
  const [ errorMessage, setErrorMessage ] = useState("")
  // °° VARIABLES 
  const successMessage = "Acount created successfuly!";
  const failMessage = "Something went wrong."
  // °° SUBMIT HANDLER
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const result = signupSchema.safeParse({
        fullName,
        email,
        password,
      })
      if (!result.success) {
        console.log(result.error.flatten())
        return
      }
      const signupData = result.data;
      await signup(signupData)
      alert(successMessage)
      setErrorMessage("")
    } catch (error) {
      console.error(error)
      setErrorMessage(failMessage)
    }
  }
  
  return (
    <motion.form onSubmit={handleSubmit}
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
      {/* ERROR MESSAGE FIELD */}
      {errorMessage && (
        <span>
          {errorMessage}
        </span>
        )}
      {/* SUBMIT BUTTON */}
      <Button 
        type="submit"
        className="w-full p-3 font-medium text-md bg-eloq-purple hover:bg-eloq-purple/75 rounded-lg"
      >
        Create Account
      </Button>
    </motion.form>
  )
}