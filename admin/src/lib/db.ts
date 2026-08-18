import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase — faqat server tomonida, `service_role` kaliti bilan.
 * Admin paneli hech qanday ma'lumotni brauzerga to'g'ridan-to'g'ri
 * ochmaydi: barcha so'rovlar server komponentlarida bajariladi.
 */
let cached: SupabaseClient | null = null;

export function db(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("SUPABASE_URL yoki SUPABASE_SERVICE_ROLE_KEY yo'q");
  }

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { "x-application-name": "gmt-admin" } },
  });
  return cached;
}
