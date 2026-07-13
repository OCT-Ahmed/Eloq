"use client"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import SignupForm from "@/features/auth/components/SignupForm"
import LoginForm from "@/features/auth/components/LoginForm"

const Test = () => {
  const [d, setD] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null)
  useEffect(() => {
    async function getUsers() {
      const { data, error } = await supabase.from("test_users")
        .select("*");
      setD(data ?? []);
      setError(error)
    }
    getUsers();
  }, [d]);
  
  
    const pushUser = async () => {
      const { data, error } = await supabase.from("test_users")
        .insert({
          name: "Eyas",
          email: "eyas@gmail.com"
        });
        if (error) {
          setError(error)
        }
    }
  return (
    <div className="p-6 border border-white/15 w-[80%] rounded-xl bg-white/5 mx-auto my-auto text-center">
      <h1>Supabase Test</h1>
      <p>users count: {d.length} {d[0]?.name}</p>
      {/*<p className="grid gris-col-2">{d.map(dd => (<span>{dd.name} {dd.email}</span>))}</p>*/}
      <p>{result ? result : "No Result"}</p>
      {error && <p>error:{error.message}</p>}
      <button className=" bg-white/15 p-4" onClick={pushUser}>
        Push User
      </button>
            <button className=" bg-white/5 p-4 rounded-xl font-bold text-white border-2 border-white/5" onClick={() => {
              const result = supabase.auth.getSession();
              console.log(result);
              result ? setResult(JSON.stringify(result)) : ""
            }}>
        Push User
      </button>
      <SignupForm />
      <LoginForm />
    </div>
  )
}
export default Test;