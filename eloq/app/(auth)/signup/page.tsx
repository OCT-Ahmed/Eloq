import { supabase } from "@/lib/supabase/client"
import SignupForm from "@/features/auth/components/SignupForm"

export default function SignUpPage() {
  return (
    <div className="h-full w-full pt-30 px-5">
      <SignupForm />
    </div>
  )
}