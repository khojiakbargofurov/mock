/**
 * Supabase ulanishini tekshiradi va nima yetishmayotganini aniq aytadi.
 *
 * Ishga tushirish:  npm run db:check
 */
import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

const ok = (m) => console.log(`  ✓ ${m}`);
const bad = (m) => console.log(`  ✗ ${m}`);

console.log("\nSupabase tekshiruvi\n");

// 1. Muhit o'zgaruvchilari
console.log("1. Sozlamalar");
if (!url) {
  bad("SUPABASE_URL topilmadi (.env.local)");
} else if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) {
  bad(`SUPABASE_URL shakli noto'g'ri: ${url}`);
  console.log("     Kutilgan ko'rinish: https://abcdefgh.supabase.co");
} else {
  ok(`SUPABASE_URL = ${url}`);
}

if (!key) {
  bad("SUPABASE_SERVICE_ROLE_KEY topilmadi (.env.local)");
} else {
  // service_role kalitining ichida rol yozilgan bo'ladi
  let role = "noma'lum";
  try {
    const body = JSON.parse(
      Buffer.from(key.split(".")[1], "base64").toString("utf8"),
    );
    role = body.role ?? "noma'lum";
  } catch {
    /* eski shakldagi kalit bo'lishi mumkin */
  }

  if (role === "service_role") {
    ok("SUPABASE_SERVICE_ROLE_KEY (service_role) o'rnatilgan");
  } else if (role === "anon") {
    bad("Siz anon kalitni qo'ygansiz — service_role kaliti kerak");
    console.log("     Supabase → Project Settings → API → service_role (secret)");
  } else {
    ok("Kalit o'rnatilgan (rolni aniqlab bo'lmadi — davom etamiz)");
  }
}

if (!url || !key) {
  console.log("\n.env.example dan nusxa oling va qiymatlarni to'ldiring.\n");
  process.exit(1);
}

// 2. Ulanish va jadvallar
console.log("\n2. Ulanish va jadvallar");
const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const tables = [
  "users",
  "login_requests",
  "profiles",
  "attempts",
  "exam_attempts",
  "exam_runs",
  "mistakes",
  "vocab_state",
];

let missing = 0;
let failed = false;

for (const table of tables) {
  const { error } = await supabase
    .from(table)
    .select("*", { head: true, count: "exact" })
    .limit(1);

  if (!error) {
    ok(`${table}`);
    continue;
  }

  if (error.message.includes("does not exist") || error.code === "42P01") {
    bad(`${table} — jadval yo'q`);
    missing += 1;
  } else if (error.message.toLowerCase().includes("invalid api key")) {
    bad("Kalit noto'g'ri (Invalid API key)");
    failed = true;
    break;
  } else {
    bad(`${table} — ${error.message}`);
    failed = true;
  }
}

// 3. Yozib ko'rish
if (!failed && missing === 0) {
  console.log("\n3. Yozish huquqi");
  const testId = `tg:check-${Date.now()}`;
  const { error: writeError } = await supabase
    .from("users")
    .insert({ id: testId, telegram_id: Date.now(), first_name: "Tekshiruv" });

  if (writeError) {
    bad(`Yozib bo'lmadi: ${writeError.message}`);
    failed = true;
  } else {
    await supabase.from("users").delete().eq("id", testId);
    ok("Yozish va o'chirish ishlaydi");
  }
}

console.log();
if (missing > 0) {
  console.log(
    `${missing} ta jadval yo'q. Supabase → SQL Editor'da supabase/schema.sql faylini ishga tushiring.\n`,
  );
  process.exit(1);
}
if (failed) {
  console.log("Ulanishda muammo bor — yuqoridagi xabarga qarang.\n");
  process.exit(1);
}
console.log("Hammasi joyida — baza ishlatishga tayyor.\n");
