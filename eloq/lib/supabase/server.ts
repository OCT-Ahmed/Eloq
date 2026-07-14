import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"


const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function createClient() {
  const cookieStore = await cookies();
  return await createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({name, value, options}) => {
              cookieStore.set(name, value, options)
            })
          } catch {
            /* server components can not adjust cookies always */
          }
        },
      },
    }
  )
}