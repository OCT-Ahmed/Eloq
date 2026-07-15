import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const code = searchParams.get("code")
  const oauthError = searchParams.get("error")

  // المستخدم ألغى تسجيل الدخول
  if (oauthError) {
    return NextResponse.redirect(
      new URL(
        `/login?error=${oauthError}`,
        request.url
      )
    )
  }

  // لا يوجد code
  if (!code) {
    return NextResponse.redirect(
      new URL(
        "/login?error=no_code",
        request.url
      )
    )
  }

  try {
    const supabase = await createClient()

    const { error } =
      await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      return NextResponse.redirect(
        new URL(
          `/login?error=${encodeURIComponent(error.message)}`,
          request.url
        )
      )
    }

    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    )

  } catch (error) {

    return NextResponse.redirect(
      new URL(
        "/login?error=unexpected_error",
        request.url
      )
    )
  }
}