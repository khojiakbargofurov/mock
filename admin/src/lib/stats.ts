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

/* ══════════════════════════════════════════════════════════════
   Dizayn bo'yicha qo'shimcha ko'rsatkichlar
   ══════════════════════════════════════════════════════════════ */

/** Haftalik o'zgarish: shu hafta va o'tgan hafta orasidagi farq (%) */
export interface Delta {
  value: number;
  previous: number;
  percent: number | null;
}

async function weekDelta(
  table: string,
  column: string,
): Promise<Delta> {
  const [now, prev] = await Promise.all([
    db()
      .from(table)
      .select("*", { count: "exact", head: true })
      .gte(column, iso(7)),
    db()
      .from(table)
      .select("*", { count: "exact", head: true })
      .gte(column, iso(14))
      .lt(column, iso(7)),
  ]);
  const value = now.count ?? 0;
  const previous = prev.count ?? 0;
  return {
    value,
    previous,
    percent: previous === 0 ? null : Math.round(((value - previous) / previous) * 100),
  };
}

export interface HeadlineStats {
  users: number;
  usersDelta: Delta;
  activeWeek: number;
  examsWeek: Delta;
  avgPercent: number;
  avgPercentPrev: number;
  dropout: number;
}

/** Dashboard tepasidagi to'rtta karta */
export async function headline(): Promise<HeadlineStats> {
  const [{ count: users }, usersDelta, examsWeek, active] = await Promise.all([
    db().from("users").select("*", { count: "exact", head: true }),
    weekDelta("users", "created_at"),
    weekDelta("exam_attempts", "finished_at"),
    db()
      .from("users")
      .select("*", { count: "exact", head: true })
      .gte("last_seen_at", iso(7)),
  ]);

  // O'rtacha ball: shu hafta va o'tgan hafta
  const [thisWeek, lastWeek] = await Promise.all([
    db().from("exam_attempts").select("percent").gte("finished_at", iso(7)).limit(5000),
    db()
      .from("exam_attempts")
      .select("percent")
      .gte("finished_at", iso(14))
      .lt("finished_at", iso(7))
      .limit(5000),
  ]);
  const avg = (rows: { percent: unknown }[] | null) =>
    rows && rows.length
      ? Math.round(rows.reduce((n, r) => n + Number(r.percent), 0) / rows.length)
      : 0;

  // Tashlab ketish: boshlangan, lekin bironta modul tugallanmagan imtihonlar
  const { data: runs } = await db()
    .from("exam_runs")
    .select("done_modules")
    .limit(20_000);
  const started = (runs ?? []).length;
  const abandoned = (runs ?? []).filter(
    (r) => (r.done_modules as string[] | null)?.length === 0,
  ).length;

  return {
    users: users ?? 0,
    usersDelta,
    activeWeek: active.count ?? 0,
    examsWeek,
    avgPercent: avg(thisWeek.data),
    avgPercentPrev: avg(lastWeek.data),
    dropout: started ? Math.round((abandoned / started) * 100) : 0,
  };
}

export interface MonthPoint {
  label: string;
  count: number;
  current: boolean;
}

/** 12 oylik ustunlar — dizayndagi asosiy grafik */
export async function monthlySeries(): Promise<MonthPoint[]> {
  const LABELS = [
    "Jan", "Feb", "Mär", "Apr", "Mai", "Jun",
    "Jul", "Aug", "Sep", "Okt", "Nov", "Dez",
  ];
  const year = new Date().getFullYear();
  const thisMonth = new Date().getMonth();

  const { data } = await db()
    .from("exam_attempts")
    .select("finished_at")
    .gte("finished_at", new Date(year, 0, 1).toISOString())
    .limit(50_000);

  const counts = new Array(12).fill(0) as number[];
  for (const row of data ?? []) {
    const m = new Date(String(row.finished_at)).getMonth();
    counts[m] += 1;
  }

  return LABELS.map((label, i) => ({
    label,
    count: counts[i],
    current: i === thisMonth,
  }));
}

export interface TopicRow {
  topic: string;
  errorShare: number;
  mistakes: number;
}

/**
 * Eng qiyin mavzular. Xatolar item_id bo'yicha saqlanadi, mavzu esa
 * kontentda — shuning uchun asosiy ilovadan matnlarni olib, mavzu
 * (Übung) yoki modul (imtihon) bo'yicha guruhlaymiz.
 */
const MODULE_LABEL: Record<string, string> = {
  hoeren: "Hörverstehen",
  lesen: "Leseverstehen",
  schreiben: "Schreiben",
  sprechen: "Sprechen",
  sprachbausteine: "Sprachbausteine",
};

export async function hardestTopics(limit = 5): Promise<TopicRow[]> {
  const { data } = await db()
    .from("mistakes")
    .select("item_id, wrong_count")
    .limit(20_000);

  const rows = data ?? [];
  if (rows.length === 0) return [];

  const ids = [...new Set(rows.map((r) => String(r.item_id)))].slice(0, 200);
  const meta = await resolveItems(ids);

  const groups = new Map<string, number>();
  let total = 0;
  for (const row of rows) {
    const info = meta.get(String(row.item_id));
    const meta2 = info as { topic?: string; moduleId?: string } | undefined;
    const key =
      meta2?.topic ??
      (meta2?.moduleId ? (MODULE_LABEL[meta2.moduleId] ?? meta2.moduleId) : undefined) ??
      "Boshqa";
    const n = Number(row.wrong_count ?? 1);
    groups.set(key, (groups.get(key) ?? 0) + n);
    total += n;
  }

  return [...groups]
    .map(([topic, mistakes]) => ({
      topic,
      mistakes,
      errorShare: total ? Math.round((mistakes / total) * 100) : 0,
    }))
    .sort((a, b) => b.mistakes - a.mistakes)
    .slice(0, limit);
}

export interface FunnelStep {
  label: string;
  count: number;
  percent: number;
}

/** Voronka: imtihon boshlangandan yakunlangungacha */
export async function funnel(): Promise<FunnelStep[]> {
  const { data } = await db()
    .from("exam_runs")
    .select("set_id, done_modules, finished_at")
    .limit(20_000);

  const rows = data ?? [];
  const total = rows.length;
  const modulesOf = (setId: string) => (setId.startsWith("telc") ? 5 : 4);

  const atLeastOne = rows.filter(
    (r) => ((r.done_modules as string[] | null)?.length ?? 0) >= 1,
  ).length;
  const half = rows.filter((r) => {
    const done = (r.done_modules as string[] | null)?.length ?? 0;
    return done >= Math.ceil(modulesOf(String(r.set_id)) / 2);
  }).length;
  const complete = rows.filter((r) => {
    const done = (r.done_modules as string[] | null)?.length ?? 0;
    return done >= modulesOf(String(r.set_id));
  }).length;

  const pct = (n: number) => (total ? Math.round((n / total) * 100) : 0);

  return [
    { label: "Imtihon boshlandi", count: total, percent: 100 },
    { label: "Kamida bitta modul", count: atLeastOne, percent: pct(atLeastOne) },
    { label: "Yarmigacha yetdi", count: half, percent: pct(half) },
    { label: "To‘liq yakunladi", count: complete, percent: pct(complete) },
  ];
}

export interface LevelRow {
  level: string;
  attempts: number;
  avgPercent: number;
  passRate: number;
}

/** Daraja bo'yicha o'tish ulushi */
export async function levelStats(): Promise<LevelRow[]> {
  const { data } = await db()
    .from("exam_attempts")
    .select("format, percent")
    .limit(20_000);

  const LEVELS = ["A1", "A2", "B1", "B2"];
  const groups = new Map<string, { sum: number; n: number; pass: number }>();

  for (const row of data ?? []) {
    const level = String(row.format).split("-")[1]?.toUpperCase() ?? "?";
    const g = groups.get(level) ?? { sum: 0, n: 0, pass: 0 };
    g.sum += Number(row.percent);
    g.n += 1;
    if (Number(row.percent) >= 60) g.pass += 1;
    groups.set(level, g);
  }

  return LEVELS.map((level) => {
    const g = groups.get(level);
    return {
      level,
      attempts: g?.n ?? 0,
      avgPercent: g && g.n ? Math.round(g.sum / g.n) : 0,
      passRate: g && g.n ? Math.round((g.pass / g.n) * 100) : 0,
    };
  });
}

export interface LogEntry {
  at: string;
  text: string;
  who: string;
}

/** Faoliyat jurnali — so'nggi hodisalar */
export async function activityLog(limit = 12): Promise<LogEntry[]> {
  const [exams, uebung, users] = await Promise.all([
    db()
      .from("exam_attempts")
      .select("finished_at, title, percent, user_id")
      .order("finished_at", { ascending: false })
      .limit(limit),
    db()
      .from("attempts")
      .select("finished_at, title, score, user_id")
      .order("finished_at", { ascending: false })
      .limit(limit),
    db()
      .from("users")
      .select("created_at, first_name")
      .order("created_at", { ascending: false })
      .limit(limit),
  ]);

  const names = new Map<string, string>();
  const ids = [
    ...(exams.data ?? []).map((r) => String(r.user_id)),
    ...(uebung.data ?? []).map((r) => String(r.user_id)),
  ];
  if (ids.length) {
    const { data } = await db()
      .from("users")
      .select("id, first_name")
      .in("id", [...new Set(ids)]);
    for (const u of data ?? []) names.set(String(u.id), String(u.first_name));
  }

  const entries: LogEntry[] = [
    ...(exams.data ?? []).map((r) => ({
      at: String(r.finished_at),
      text: `${r.title} — ${r.percent}%`,
      who: names.get(String(r.user_id)) ?? "—",
    })),
    ...(uebung.data ?? []).map((r) => ({
      at: String(r.finished_at),
      text: `Mashq: ${r.title} — ${r.score}%`,
      who: names.get(String(r.user_id)) ?? "—",
    })),
    ...(users.data ?? []).map((r) => ({
      at: String(r.created_at),
      text: "Yangi foydalanuvchi ro‘yxatdan o‘tdi",
      who: String(r.first_name),
    })),
  ];

  return entries
    .sort((a, b) => Date.parse(b.at) - Date.parse(a.at))
    .slice(0, limit);
}
