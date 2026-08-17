import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase — faqat server tomonida.
 *
 * Bu loyihada Supabase Auth ishlatilmaydi: foydalanuvchini Telegram orqali
 * biz taniymiz. Shuning uchun bazaga `service_role` kaliti bilan kiramiz —
 * u RLS'ni chetlab o'tadi, ya'ni kalit hech qachon brauzerga tushmasligi kerak.
 * Kim nimani ko'rishini bizning API yo'llarimiz sessiya cookie'si asosida
 * hal qiladi.
 */
let cached: SupabaseClient | null = null;

export function db(): SupabaseClient | null {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { "x-application-name": "german-mock-test" } },
  });
  return cached;
}

/** Baza sozlanganmi — sozlanmagan bo'lsa ilova xotira rejimida ishlaydi */
export function dbReady(): boolean {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
