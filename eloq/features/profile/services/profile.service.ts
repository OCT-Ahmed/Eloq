import { supabase } from "@/lib/supabase/client"

export async function getProfile(userId:string) {

  const { data: profile, errorPro } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single()
    
    const { data: student, errorStu } = await supabase
    .from("students")
    .select("*")
    .eq("id", userId)
    .single()
    
  if (errorPro || errorStu) {
    return {
      success:false,
      errorPro: errorPro ? errorPro : null,
      errorStu: errorStu ? errorStu : null
    }
  }

  return {
    ...profile,
    ...student
  }
}


/* 
alert(JSON.stringify(student, null, 2)) 
alert(JSON.stringify(profile, null, 2))
*/