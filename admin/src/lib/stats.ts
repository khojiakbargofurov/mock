import { db } from "@/lib/db";

/**
 * Barcha ko'rsatkichlar shu yerda hisoblanadi.
 *
 * Hozircha oddiy so'rovlar: sanoq uchun `count`, dinamika uchun faqat
 * kerakli ustunni cheklangan oraliqda o'qiymiz. Baza o'sganda (taxminan
 * 50 000 qatordan keyin) shu funksiyalarni SQL ko'rinishlariga
 * (view / rpc) ko'chirish kerak — chaqiruv joylari o'zgarmaydi.
 */

const DAY = 86_400_000;

function iso(daysAgo: number): string {
  return new Date(Date.now() - daysAgo * DAY).toISOString();
}

async function countOf(
  table: string,
  build?: (q: ReturnType<typeof db>) => unknown,
): Promise<number> {
  void build;
  const { count } = await db().from(table).select("*", {
    count: "exact",
    head: true,
  });
  return count ?? 0;
}

async function countSince(
  table: string,
  column: string,
  daysAgo: number,
): Promise<number> {
  const { count } = await db()
    .from(table)
    .select("*", { count: "exact", head: true })
    .gte(column, iso(daysAgo));
  return count ?? 0;
}

export interface Kpis {
  users: number;
  usersToday: number;
  users7: number;
  users30: number;
  active1: number;
  active7: number;
  active30: number;
  examAttempts: number;
  examAttempts7: number;
  uebungAttempts: number;
  uebungAttempts7: number;
  openMistakes: number;
  vocabLearned: number;
}

export async function kpis(): Promise<Kpis> {
  const [
    users,
    usersToday,
    users7,
    users30,
    active1,
    active7,
    active30,
    examAttempts,
    examAttempts7,
    uebungAttempts,
    uebungAttempts7,
  ] = await Promise.all([
    countOf("users"),
    countSince("users", "created_at", 1),
    countSince("users", "created_at", 7),
    countSince("users", "created_at", 30),
    countSince("users", "last_seen_at", 1),
    countSince("users", "last_seen_at", 7),
    countSince("users", "last_seen_at", 30),
    countOf("exam_attempts"),
    countSince("exam_attempts", "finished_at", 7),
    countOf("attempts"),
    countSince("attempts", "finished_at", 7),
  ]);

  const { count: openMistakes } = await db()
    .from("mistakes")
    .select("*", { count: "exact", head: true })
    .eq("mastered", false);

  const { count: vocabLearned } = await db()
    .from("vocab_state")
    .select("*", { count: "exact", head: true })
    .gte("box", 4);

  return {
    users,
    usersToday,
    users7,
    users30,
    active1,
    active7,
    active30,
    examAttempts,
    examAttempts7,
    uebungAttempts,
    uebungAttempts7,
    openMistakes: openMistakes ?? 0,
    vocabLearned: vocabLearned ?? 0,
  };
}

export interface DayPoint {
  day: string;
  count: number;
}

/** Kunlik qator: sana → soni. Bo'sh kunlar ham nol bilan qaytadi. */
function toSeries(dates: string[], days: number): DayPoint[] {
  const bucket = new Map<string, number>();
  for (let i = days - 1; i >= 0; i -= 1) {
    bucket.set(new Date(Date.now() - i * DAY).toISOString().slice(0, 10), 0);
  }
  for (const d of dates) {
    const key = d.slice(0, 10);
    if (bucket.has(key)) bucket.set(key, (bucket.get(key) ?? 0) + 1);
  }
  return [...bucket].map(([day, count]) => ({ day, count }));
}

export async function signupSeries(days = 30): Promise<DayPoint[]> {
  const { data } = await db()
    .from("users")
    .select("created_at")
    .gte("created_at", iso(days))
    .limit(10_000);
  return toSeries((data ?? []).map((r) => r.created_at as string), days);
}

export async function activitySeries(days = 30): Promise<DayPoint[]> {
  const [exams, uebung] = await Promise.all([
    db()
      .from("exam_attempts")
      .select("finished_at")
      .gte("finished_at", iso(days))
      .limit(10_000),
    db()
      .from("attempts")
      .select("finished_at")
      .gte("finished_at", iso(days))
      .limit(10_000),
  ]);
  const all = [
    ...(exams.data ?? []).map((r) => r.finished_at as string),
    ...(uebung.data ?? []).map((r) => r.finished_at as string),
  ];
  return toSeries(all, days);
}

export interface FormatRow {
  format: string;
  attempts: number;
  users: number;
  avgPercent: number;
  passRate: number;
}

/** Format bo'yicha: nechta modul topshirilgan, o'rtacha foiz, o'tish ulushi */
export async function formatStats(): Promise<FormatRow[]> {
  const { data } = await db()
    .from("exam_attempts")
    .select("format, percent, user_id")
    .limit(20_000);

  const groups = new Map<
    string,
    { sum: number; n: number; pass: number; users: Set<string> }
  >();

  for (const row of data ?? []) {
    const key = String(row.format);
    const g = groups.get(key) ?? {
      sum: 0,
      n: 0,
      pass: 0,
      users: new Set<string>(),
    };
    g.sum += Number(row.percent);
    g.n += 1;
    if (Number(row.percent) >= 60) g.pass += 1;
    g.users.add(String(row.user_id));
    groups.set(key, g);
  }

  return [...groups]
    .map(([format, g]) => ({
      format,
      attempts: g.n,
      users: g.users.size,
      avgPercent: g.n ? Math.round(g.sum / g.n) : 0,
      passRate: g.n ? Math.round((g.pass / g.n) * 100) : 0,
    }))
    .sort((a, b) => b.attempts - a.attempts);
}

export interface ModuleRow {
  moduleId: string;
  attempts: number;
  avgPercent: number;
}

/** Qaysi modul qiyinroq — o'rtacha foiz bo'yicha */
export async function moduleStats(): Promise<ModuleRow[]> {
  const { data } = await db()
    .from("exam_attempts")
    .select("module_id, percent")
    .limit(20_000);

  const groups = new Map<string, { sum: number; n: number }>();
  for (const row of data ?? []) {
    const key = String(row.module_id);
    const g = groups.get(key) ?? { sum: 0, n: 0 };
    g.sum += Number(row.percent);
    g.n += 1;
    groups.set(key, g);
  }

  return [...groups]
    .map(([moduleId, g]) => ({
      moduleId,
      attempts: g.n,
      avgPercent: g.n ? Math.round(g.sum / g.n) : 0,
    }))
    .sort((a, b) => a.avgPercent - b.avgPercent);
}

export interface MistakeRow {
  itemId: string;
  users: number;
  total: number;
  source: string;
  setId: string | null;
}

/** Eng ko'p xato qilingan elementlar — kontent sifatining ko'rsatkichi */
export async function topMistakes(limit = 15): Promise<MistakeRow[]> {
  const { data } = await db()
    .from("mistakes")
    .select("item_id, user_id, wrong_count, source, set_id")
    .limit(20_000);

  const groups = new Map<
    string,
    { users: Set<string>; total: number; source: string; setId: string | null }
  >();

  for (const row of data ?? []) {
    const key = String(row.item_id);
    const g = groups.get(key) ?? {
      users: new Set<string>(),
      total: 0,
      source: String(row.source ?? "uebung"),
      setId: (row.set_id as string | null) ?? null,
    };
    g.users.add(String(row.user_id));
    g.total += Number(row.wrong_count ?? 1);
    groups.set(key, g);
  }

  return [...groups]
    .map(([itemId, g]) => ({
      itemId,
      users: g.users.size,
      total: g.total,
      source: g.source,
      setId: g.setId,
    }))
    .sort((a, b) => b.users - a.users || b.total - a.total)
    .slice(0, limit);
}

export interface UserRow {
  id: string;
  telegramId: number;
  name: string;
  username: string | null;
  createdAt: string;
  lastSeenAt: string;
  exams: number;
  uebung: number;
}

export async function recentUsers(limit = 50): Promise<UserRow[]> {
  const { data: users } = await db()
    .from("users")
    .select("id, telegram_id, first_name, last_name, username, created_at, last_seen_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  const ids = (users ?? []).map((u) => String(u.id));
  if (ids.length === 0) return [];

  const [exams, uebung] = await Promise.all([
    db().from("exam_attempts").select("user_id").in("user_id", ids).limit(20_000),
    db().from("attempts").select("user_id").in("user_id", ids).limit(20_000),
  ]);

  const countBy = (rows: { user_id: unknown }[] | null) => {
    const m = new Map<string, number>();
    for (const r of rows ?? []) {
      const k = String(r.user_id);
      m.set(k, (m.get(k) ?? 0) + 1);
    }
    return m;
  };
  const examMap = countBy(exams.data);
  const uebungMap = countBy(uebung.data);

  return (users ?? []).map((u) => ({
    id: String(u.id),
    telegramId: Number(u.telegram_id),
    name: [u.first_name, u.last_name].filter(Boolean).join(" ") || "—",
    username: (u.username as string | null) ?? null,
    createdAt: String(u.created_at),
    lastSeenAt: String(u.last_seen_at),
    exams: examMap.get(String(u.id)) ?? 0,
    uebung: uebungMap.get(String(u.id)) ?? 0,
  }));
}

/** Nechta foydalanuvchi birinchi kundan keyin ham qaytgan */
export async function retention(): Promise<{ returned: number; total: number }> {
  const { data } = await db()
    .from("users")
    .select("created_at, last_seen_at")
    .limit(20_000);

  let returned = 0;
  for (const u of data ?? []) {
    if (
      Date.parse(String(u.last_seen_at)) - Date.parse(String(u.created_at)) >
      DAY
    ) {
      returned += 1;
    }
  }
  return { returned, total: (data ?? []).length };
}

/** Element matnlarini asosiy ilovadan olib keladi */
export async function resolveItems(
  ids: string[],
): Promise<Map<string, { prompt: string | null; correct: string | null; setId?: string; moduleId?: string }>> {
  const base = process.env.MAIN_APP_URL;
  const secret = process.env.ADMIN_API_SECRET;
  const result = new Map<
    string,
    { prompt: string | null; correct: string | null; setId?: string; moduleId?: string }
  >();
  if (!base || !secret || ids.length === 0) return result;

  try {
    const response = await fetch(`${base}/api/admin/items`, {
      method: "POST",
      headers: { "content-type": "application/json", "x-admin-secret": secret },
      body: JSON.stringify({ ids }),
      cache: "no-store",
    });
    if (!response.ok) return result;

    const body = (await response.json()) as {
      items: {
        id: string;
        prompt: string | null;
        correct: string | null;
        setId?: string;
        moduleId?: string;
      }[];
    };
    for (const item of body.items) result.set(item.id, item);
  } catch {
    // Asosiy ilova javob bermasa — matnsiz ko'rsatamiz
  }
  return result;
}

export async function tableSizes(): Promise<{ table: string; rows: number }[]> {
  const tables = [
    "users",
    "profiles",
    "attempts",
    "exam_attempts",
    "exam_runs",
    "mistakes",
    "vocab_state",
    "login_requests",
  ];
  const rows = await Promise.all(
    tables.map(async (t) => ({ table: t, rows: await countOf(t) })),
  );
  return rows;
}
