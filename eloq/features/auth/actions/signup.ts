import { register } from "../services/auth.service"
import type { SignupData } from "../types/auth.types"

export async function signup(data: SignupData) {
  const { data: authData, error } = await register(data)
  
  if (error) { throw error }
  
  return authData
}

/* 
ستصبح مكانًا مناسبًا لإضافة منطق العملية، مثل:
تحويل رسائل الأخطاء إلى رسائل مناسبة للمستخدم.
تسجيل Analytics.
إعادة التوجيه (Redirect).
تحديث حالة التطبيق (State).
تنفيذ أكثر من Service في عملية واحدة.
*/