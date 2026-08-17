import type { ExamAttempt, ExamRun } from "@/lib/store";
import type {
  Attempt,
  MistakeEntry,
  Profile,
  VocabCardState,
} from "@/lib/types";
import { db } from "@/lib/db/client";

/**
 * Qurilma va server o'rtasida almashinadigan holat.
 * Mijoz to'liq holatini yuboradi, server uni o'zinikiga qo'shib,
 * birlashtirilgan natijani qaytaradi — shunda hech qaysi qurilmada
 * ma'lumot yo'qolmaydi.
 */
export interface SyncState {
  profile: Profile;
  profileUpdatedAt: number;
  attempts: Attempt[];
  examAttempts: ExamAttempt[];
  mistakes: MistakeEntry[];
  vocab: Record<string, VocabCardState>;
  examRuns: Record<string, ExamRun>;
}

/* ── O'qish ─────────────────────────────────────────────────────────────── */

export async function pullState(
  userId: string,
): Promise<Partial<SyncState> | null> {
  const client = db();
  if (!client) return null;

  const [profile, attempts, examAttempts, mistakes, vocab, runs] =
    await Promise.all([
      client.from("profiles").select("*").eq("user_id", userId).maybeSingle(),
      client.from("attempts").select("*").eq("user_id", userId),
      client.from("exam_attempts").select("*").eq("user_id", userId),
      client.from("mistakes").select("*").eq("user_id", userId),
      client.from("vocab_state").select("*").eq("user_id", userId),
      client.from("exam_runs").select("*").eq("user_id", userId),
    ]);

  const state: Partial<SyncState> = {
    attempts: (attempts.data ?? []).map(rowToAttempt),
    examAttempts: (examAttempts.data ?? []).map(rowToExamAttempt),
    mistakes: (mistakes.data ?? []).map(rowToMistake),
    vocab: Object.fromEntries(
      (vocab.data ?? []).map((row) => [
        row.word_id,
        {
          box: row.box,
          lastReviewedAt: new Date(row.last_reviewed_at).getTime(),
          correct: row.correct,
          wrong: row.wrong,
        } satisfies VocabCardState,
      ]),
    ),
    examRuns: Object.fromEntries(
      (runs.data ?? []).map((row) => [row.set_id, rowToExamRun(row)]),
    ),
  };

  if (profile.data) {
    state.profile = {
      firstName: profile.data.first_name ?? "",
      lastName: profile.data.last_name ?? "",
      targetLevel: profile.data.target_level ?? "B1",
      goal: profile.data.goal ?? null,
      examDate: profile.data.exam_date ?? null,
      streak: profile.data.streak ?? 0,
      settings: profile.data.settings ?? {},
      onboarded: true,
    } as Profile;
    state.profileUpdatedAt = new Date(profile.data.updated_at).getTime();
  }

  return state;
}

/* ── Birlashtirish ──────────────────────────────────────────────────────── */

function mergeById<T extends { id: string }>(a: T[], b: T[]): T[] {
  const map = new Map<string, T>();
  for (const item of [...a, ...b]) map.set(item.id, item);
  return [...map.values()];
}

export function mergeStates(
  server: Partial<SyncState>,
  client: SyncState,
): SyncState {
  // Urinishlar tarixi — hech qachon o'chirilmaydi, faqat qo'shiladi
  const attempts = mergeById(server.attempts ?? [], client.attempts).sort(
    (x, y) => y.finishedAt - x.finishedAt,
  );
  const examAttempts = mergeById(
    server.examAttempts ?? [],
    client.examAttempts,
  ).sort((x, y) => y.finishedAt - x.finishedAt);

  // Xatolar — yangiroq yozuv g'olib; teng bo'lsa "o'zlashtirilgan" ustun
  const mistakes = new Map<string, MistakeEntry>();
  for (const entry of [...(server.mistakes ?? []), ...client.mistakes]) {
    const current = mistakes.get(entry.questionId);
    if (
      !current ||
      entry.lastWrongAt > current.lastWrongAt ||
      (entry.lastWrongAt === current.lastWrongAt && entry.mastered)
    ) {
      mistakes.set(entry.questionId, entry);
    }
  }

  // Wortschatz — oxirgi takrorlash vaqti kechroq bo'lgani g'olib
  const vocab: Record<string, VocabCardState> = { ...(server.vocab ?? {}) };
  for (const [id, state] of Object.entries(client.vocab)) {
    const current = vocab[id];
    if (!current || state.lastReviewedAt >= current.lastReviewedAt) {
      vocab[id] = state;
    }
  }

  // Imtihon sessiyalari — updatedAt bo'yicha
  const examRuns: Record<string, ExamRun> = { ...(server.examRuns ?? {}) };
  for (const [id, run] of Object.entries(client.examRuns)) {
    const current = examRuns[id];
    if (!current || (run.updatedAt ?? 0) >= (current.updatedAt ?? 0)) {
      examRuns[id] = run;
    }
  }

  // Profil — qaysi tomonda kechroq o'zgargan bo'lsa
  const serverNewer =
    (server.profileUpdatedAt ?? 0) > (client.profileUpdatedAt ?? 0);

  return {
    profile: serverNewer && server.profile ? server.profile : client.profile,
    profileUpdatedAt: Math.max(
      server.profileUpdatedAt ?? 0,
      client.profileUpdatedAt ?? 0,
    ),
    attempts,
    examAttempts,
    mistakes: [...mistakes.values()],
    vocab,
    examRuns,
  };
}

/* ── Yozish ─────────────────────────────────────────────────────────────── */

export interface PushResult {
  ok: boolean;
  errors: string[];
}

/**
 * Supabase xatoni istisno sifatida tashlamaydi — javob ichida `error` qaytaradi.
 * Shuning uchun har amalni alohida tekshiramiz, aks holda muvaffaqiyatsiz
 * yozuv ham "saqlandi" bo'lib ko'rinadi.
 */
async function run(
  label: string,
  op: PromiseLike<{ error: { message: string } | null }> | Promise<string | null>,
): Promise<string | null> {
  try {
    const result = (await op) as { error?: { message: string } | null } | string | null;
    if (typeof result === "string") return result;
    if (result && typeof result === "object" && result.error) {
      return `${label}: ${result.error.message}`;
    }
    return null;
  } catch (error) {
    return `${label}: ${(error as Error).message}`;
  }
}

export async function pushState(
  userId: string,
  state: SyncState,
): Promise<PushResult> {
  const client = db();
  if (!client) return { ok: false, errors: ["baza sozlanmagan"] };

  const iso = (ms: number) => new Date(ms).toISOString();
  const tasks: Promise<string | null>[] = [];

  tasks.push(
    run(
      "profiles",
      client.from("profiles").upsert({
        user_id: userId,
        first_name: state.profile.firstName,
        last_name: state.profile.lastName,
        target_level: state.profile.targetLevel,
        goal: state.profile.goal,
        exam_date: state.profile.examDate,
        streak: state.profile.streak,
        settings: state.profile.settings,
        updated_at: iso(state.profileUpdatedAt || Date.now()),
      }),
    ),
  );

  if (state.attempts.length > 0) {
    tasks.push(
      run(
        "attempts",
        client.from("attempts").upsert(
          state.attempts.map((a) => ({
            id: a.id,
            user_id: userId,
            level: a.level,
            skill: a.skill,
            title: a.title,
            started_at: iso(a.startedAt),
            finished_at: iso(a.finishedAt),
            duration_sec: a.durationSec,
            score: a.score,
            correct_count: a.correctCount,
            total: a.total,
            answers: a.answers,
          })),
        ),
      ),
    );
  }

  if (state.examAttempts.length > 0) {
    tasks.push(
      run(
        "exam_attempts",
        client.from("exam_attempts").upsert(
          state.examAttempts.map((a) => ({
            id: a.id,
            user_id: userId,
            set_id: a.setId,
            format: a.format,
            module_id: a.moduleId,
            title: a.title,
            finished_at: iso(a.finishedAt),
            duration_sec: a.durationSec,
            raw: a.raw,
            raw_max: a.rawMax,
            weighted: a.weighted,
            weighted_max: a.weightedMax,
            percent: a.percent,
            self_assessed: a.selfAssessed,
          })),
        ),
      ),
    );
  }

  // Quyidagilar "to'liq almashtirish": avval birlashtirilgani uchun hech narsa
  // yo'qolmaydi, lekin o'chirishlar ham qurilmalar orasida tarqaladi
  const mistakeIds = state.mistakes.map((m) => m.questionId);
  tasks.push(
    (async () => {
      if (state.mistakes.length > 0) {
        const error = await run(
          "mistakes",
          client.from("mistakes").upsert(
            state.mistakes.map((m) => ({
              user_id: userId,
              item_id: m.questionId,
              source: m.source ?? "uebung",
              set_id: m.setId ?? null,
              wrong_count: m.wrongCount,
              last_wrong_at: iso(m.lastWrongAt),
              mastered: m.mastered,
              last_chosen_text: m.lastChosenText,
            })),
          ),
        );
        if (error) return error;
      }
      const query = client.from("mistakes").delete().eq("user_id", userId);
      return run(
        "mistakes/delete",
        mistakeIds.length > 0
          ? query.not("item_id", "in", `(${mistakeIds.join(",")})`)
          : query,
      );
    })(),
  );

  const wordIds = Object.keys(state.vocab);
  tasks.push(
    (async () => {
      if (wordIds.length > 0) {
        const error = await run(
          "vocab_state",
          client.from("vocab_state").upsert(
            wordIds.map((id) => ({
              user_id: userId,
              word_id: id,
              box: state.vocab[id].box,
              last_reviewed_at: iso(state.vocab[id].lastReviewedAt),
              correct: state.vocab[id].correct,
              wrong: state.vocab[id].wrong,
            })),
          ),
        );
        if (error) return error;
      }
      const query = client.from("vocab_state").delete().eq("user_id", userId);
      return run(
        "vocab_state/delete",
        wordIds.length > 0
          ? query.not("word_id", "in", `(${wordIds.join(",")})`)
          : query,
      );
    })(),
  );

  const runIds = Object.keys(state.examRuns);
  tasks.push(
    (async () => {
      if (runIds.length > 0) {
        const error = await run(
          "exam_runs",
          client.from("exam_runs").upsert(
            runIds.map((id) => ({
              user_id: userId,
              set_id: id,
              answers: state.examRuns[id].answers,
              done_modules: state.examRuns[id].doneModules,
              started_at: iso(state.examRuns[id].startedAt),
              finished_at: state.examRuns[id].finishedAt
                ? iso(state.examRuns[id].finishedAt!)
                : null,
              updated_at: iso(state.examRuns[id].updatedAt ?? Date.now()),
            })),
          ),
        );
        if (error) return error;
      }
      const query = client.from("exam_runs").delete().eq("user_id", userId);
      return run(
        "exam_runs/delete",
        runIds.length > 0
          ? query.not("set_id", "in", `(${runIds.join(",")})`)
          : query,
      );
    })(),
  );

  const errors = (await Promise.all(tasks)).filter(
    (e): e is string => e !== null,
  );

  if (errors.length > 0) {
    console.error("[sync] yozib bo'lmadi:\n  " + errors.join("\n  "));
  }
  return { ok: errors.length === 0, errors };
}

/* ── Satrlarni obyektga aylantirish ─────────────────────────────────────── */

/* eslint-disable @typescript-eslint/no-explicit-any */

function rowToAttempt(row: any): Attempt {
  return {
    id: row.id,
    level: row.level,
    skill: row.skill,
    title: row.title,
    startedAt: row.started_at ? new Date(row.started_at).getTime() : 0,
    finishedAt: new Date(row.finished_at).getTime(),
    durationSec: row.duration_sec,
    score: row.score,
    correctCount: row.correct_count,
    total: row.total,
    answers: row.answers ?? [],
  };
}

function rowToExamAttempt(row: any): ExamAttempt {
  return {
    id: row.id,
    setId: row.set_id,
    format: row.format,
    moduleId: row.module_id,
    title: row.title,
    finishedAt: new Date(row.finished_at).getTime(),
    durationSec: row.duration_sec,
    raw: Number(row.raw),
    rawMax: Number(row.raw_max),
    weighted: Number(row.weighted),
    weightedMax: Number(row.weighted_max),
    percent: row.percent,
    selfAssessed: row.self_assessed,
  };
}

function rowToMistake(row: any): MistakeEntry {
  return {
    questionId: row.item_id,
    source: row.source,
    setId: row.set_id ?? undefined,
    wrongCount: row.wrong_count,
    lastWrongAt: new Date(row.last_wrong_at).getTime(),
    mastered: row.mastered,
    lastChosenText: row.last_chosen_text,
  };
}

function rowToExamRun(row: any): ExamRun {
  return {
    setId: row.set_id,
    answers: row.answers ?? { values: {}, rubric: {} },
    doneModules: row.done_modules ?? [],
    startedAt: new Date(row.started_at).getTime(),
    finishedAt: row.finished_at
      ? new Date(row.finished_at).getTime()
      : undefined,
    updatedAt: new Date(row.updated_at).getTime(),
  };
}
