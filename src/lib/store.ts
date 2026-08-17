"use client";

import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  AnswerRecord,
  Attempt,
  Level,
  MistakeEntry,
  Profile,
  Question,
  Skill,
  UserSettings,
  VocabCardState,
} from "@/lib/types";
import { PASS_SCORE, SKILLS, VOCAB_BOX_DAYS } from "@/lib/types";
import { buildTest, questionById, shuffleOptions } from "@/lib/questions";
import { buildQueue, resolveTarget } from "@/lib/vocab";
import { VOCAB_SESSION_SIZE } from "@/lib/types";
import type { ModuleId } from "@/lib/exam/types";
import type { ExamAnswers } from "@/lib/exam/score";
import { emptyAnswers } from "@/lib/exam/score";
import { examSet } from "@/lib/exam/registry";
import { formatSpec, moduleSpec } from "@/lib/exam/spec";
import { itemScore } from "@/lib/exam/score";
import { givenText } from "@/lib/exam/labels";

/** Vaqt cheklovi yoqilganda har savolga beriladigan vaqt (dizayn: 12 savol · 10 daqiqa) */
export const SECONDS_PER_QUESTION = 50;

export interface Session {
  id: string;
  level: Level;
  skill: Skill | null;
  questions: Question[];
  /** Har savol uchun tanlangan variant indeksi (javob berilmagan bo'lsa null) */
  answers: (number | null)[];
  flagged: boolean[];
  spent: number[];
  current: number;
  startedAt: number;
  /** Sarflangan umumiy vaqt (soniya) */
  elapsed: number;
  /** Vaqt cheklovi yoqilganda — qolgan vaqt */
  remaining: number | null;
}

/**
 * Wortschatz mashqi — sinov sessiyasi kabi store'da saqlanadi:
 * sahifa yangilansa ham aylanish joyidan davom etadi.
 */
export interface VocabSession {
  /** To'plam slugi yoki aralash takrorlash ("heute", "heute-b1") */
  slug: string;
  wordIds: string[];
  index: number;
  /** Javob ochilganmi */
  flipped: boolean;
  known: number;
  wrongIds: string[];
}

/**
 * Rasmiy formatdagi imtihon: bitta variant bo'yicha to'plangan javoblar.
 * Modullar alohida-alohida topshiriladi, natija hammasi tugagach chiqadi.
 */
export interface ExamRun {
  setId: string;
  answers: ExamAnswers;
  doneModules: ModuleId[];
  startedAt: number;
  finishedAt?: number;
  /** Oxirgi o'zgarish — sinxronda yangiroq nusxa g'olib bo'ladi */
  updatedAt: number;
}

/**
 * Yakunlangan imtihon moduli — Statistik sahifasi shu yozuvlardan o'qiydi.
 * Har modul alohida saqlanadi, chunki ular alohida-alohida topshiriladi.
 */
export interface ExamAttempt {
  id: string;
  setId: string;
  format: string;
  moduleId: ModuleId;
  /** "Goethe-Zertifikat A1 · Hören" */
  title: string;
  finishedAt: number;
  durationSec: number;
  raw: number;
  rawMax: number;
  weighted: number;
  weightedMax: number;
  percent: number;
  /** Mezon bo'yicha o'zini baholagan modul (Schreiben / Sprechen) */
  selfAssessed: boolean;
}

/** Joriy modul sessiyasi — taymer va audio hisobi shu yerda */
export interface ExamSession {
  setId: string;
  moduleId: ModuleId;
  teilIndex: number;
  remaining: number;
  startedAt: number;
  /** Blok id → audio necha marta o'ynatilgan (Hören cheklovi) */
  plays: Record<string, number>;
}

const DEFAULT_SETTINGS: UserSettings = {
  timeLimit: true,
  instantFeedback: true,
  dailyReminder: true,
  focusMode: true,
  uiLang: "uz",
};

/**
 * Kirmagan foydalanuvchi uchun bo'sh profil.
 * (Ilgari bu yerda dizayn prototipidagi soxta ism va email turardi —
 * ular haqiqiy hisobga ham yozilib ketardi.)
 */
const DEFAULT_PROFILE: Profile = {
  firstName: "Mehmon",
  lastName: "",
  targetLevel: "B1",
  goal: null,
  examDate: null,
  streak: 0,
  settings: DEFAULT_SETTINGS,
  onboarded: true,
};

interface AppState {
  profile: Profile;
  attempts: Attempt[];
  mistakes: MistakeEntry[];
  session: Session | null;
  /** So'z id → Leitner holati. Ko'rilmagan so'z bu yerda umuman bo'lmaydi. */
  vocab: Record<string, VocabCardState>;
  vocabSession: VocabSession | null;
  /** Variant id → yig'ilgan javoblar */
  examRuns: Record<string, ExamRun>;
  examSession: ExamSession | null;
  /** Yakunlangan imtihon modullari — eng yangisi birinchi */
  examAttempts: ExamAttempt[];
  /** Profil oxirgi marta o'zgargan vaqt (sinxron uchun) */
  profileUpdatedAt: number;

  setProfile: (patch: Partial<Profile>) => void;
  setSetting: <K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K],
  ) => void;

  startSession: (level: Level, skill: Skill | null, count?: number) => boolean;
  /** Fehlerbuch'dan mashq: faqat xato qilingan savollar. Daraja qaytariladi. */
  startDrill: (count?: number) => Level | null;
  answer: (index: number) => void;
  toggleFlag: () => void;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  tick: () => void;
  /** Sinovni yakunlaydi va yangi urinish (Attempt) id sini qaytaradi */
  finish: () => string | null;
  abandon: () => void;

  markMastered: (questionId: string) => void;

  /** Kartochkaga javob: bilsa quti bir pog'ona ko'tariladi, bilmasa boshiga tushadi */
  reviewWord: (wordId: string, known: boolean) => void;
  /** To'plamni noldan boshlash — Wortschatz to'plam kartasidagi harakat */
  resetVocab: (wordIds: string[]) => void;

  /** Aylanishni boshlaydi. `wordIds` berilsa — aynan shu so'zlar (xatolarni takrorlash). */
  startVocabSession: (slug: string, wordIds?: string[]) => void;
  flipVocabCard: () => void;
  answerVocabCard: (known: boolean) => void;

  /* ── Rasmiy formatdagi imtihon ── */
  startExamModule: (setId: string, moduleId: ModuleId) => boolean;
  setExamAnswer: (itemId: string, value: string) => void;
  toggleExamRubric: (itemId: string, criterionId: string) => void;
  /** Audio o'ynatilganini qayd qiladi (necha marta qolganini hisoblash uchun) */
  registerPlay: (blockId: string) => void;
  goToTeil: (index: number) => void;
  tickExam: () => void;
  /** Modulni yakunlaydi; barcha modullar tugasa `finishedAt` yoziladi */
  finishExamModule: () => void;
  leaveExamModule: () => void;
  resetExamRun: (setId: string) => void;

  /** Bulutdan kelgan birlashtirilgan holatni qo'llaydi (sinxron) */
  applyRemote: (state: Partial<RemoteState>) => void;
}

/** Sinxronda almashinadigan maydonlar */
export interface RemoteState {
  profile: Profile;
  profileUpdatedAt: number;
  attempts: Attempt[];
  examAttempts: ExamAttempt[];
  mistakes: MistakeEntry[];
  vocab: Record<string, VocabCardState>;
  examRuns: Record<string, ExamRun>;
}

function scoreOf(answers: (number | null)[], questions: Question[]) {
  const correct = questions.reduce(
    (n, q, i) => n + (answers[i] === q.correctIndex ? 1 : 0),
    0,
  );
  return {
    correct,
    score: questions.length
      ? Math.round((correct / questions.length) * 100)
      : 0,
  };
}

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      profile: DEFAULT_PROFILE,
      attempts: [],
      mistakes: [],
      session: null,
      vocab: {},
      vocabSession: null,
      examRuns: {},
      examSession: null,
      examAttempts: [],
      profileUpdatedAt: 0,

      setProfile: (patch) =>
        set((s) => ({
          profile: { ...s.profile, ...patch },
          profileUpdatedAt: Date.now(),
        })),

      setSetting: (key, value) =>
        set((s) => ({
          profile: {
            ...s.profile,
            settings: { ...s.profile.settings, [key]: value },
          },
          profileUpdatedAt: Date.now(),
        })),

      startSession: (level, skill, count = 12) => {
        const questions = buildTest(level, skill, count);
        if (questions.length === 0) return false;

        const { timeLimit } = get().profile.settings;
        set({
          session: {
            id: `att-${Date.now()}`,
            level,
            skill,
            questions,
            answers: Array(questions.length).fill(null),
            flagged: Array(questions.length).fill(false),
            spent: Array(questions.length).fill(0),
            current: 0,
            startedAt: Date.now(),
            elapsed: 0,
            remaining: timeLimit
              ? questions.length * SECONDS_PER_QUESTION
              : null,
          },
        });
        return true;
      },

      startDrill: (count = 12) => {
        // Imtihon elementlari boshqa tuzilishga ega — mashq faqat Übung
        // savollaridan yig'iladi
        const open = get()
          .mistakes.filter((m) => !m.mastered && m.source !== "pruefung")
          .sort((a, b) => b.wrongCount - a.wrongCount);

        const questions = open
          .map((m) => questionById(m.questionId))
          .filter((q): q is Question => Boolean(q))
          .slice(0, count)
          .map(shuffleOptions);

        if (questions.length === 0) return null;

        const level = questions[0].level;
        const { timeLimit } = get().profile.settings;

        set({
          session: {
            id: `att-${Date.now()}`,
            level,
            skill: null,
            questions,
            answers: Array(questions.length).fill(null),
            flagged: Array(questions.length).fill(false),
            spent: Array(questions.length).fill(0),
            current: 0,
            startedAt: Date.now(),
            elapsed: 0,
            remaining: timeLimit
              ? questions.length * SECONDS_PER_QUESTION
              : null,
          },
        });

        return level;
      },

      answer: (index) =>
        set((s) => {
          if (!s.session) return s;
          // Javob berilgan savol qayta o'zgartirilmaydi — imtihon mantiqi
          if (s.session.answers[s.session.current] !== null) return s;
          const answers = [...s.session.answers];
          answers[s.session.current] = index;
          return { session: { ...s.session, answers } };
        }),

      toggleFlag: () =>
        set((s) => {
          if (!s.session) return s;
          const flagged = [...s.session.flagged];
          flagged[s.session.current] = !flagged[s.session.current];
          return { session: { ...s.session, flagged } };
        }),

      goTo: (index) =>
        set((s) => {
          if (!s.session) return s;
          const clamped = Math.max(
            0,
            Math.min(s.session.questions.length - 1, index),
          );
          return { session: { ...s.session, current: clamped } };
        }),

      next: () => get().goTo((get().session?.current ?? 0) + 1),
      prev: () => get().goTo((get().session?.current ?? 0) - 1),

      tick: () =>
        set((s) => {
          if (!s.session) return s;
          const spent = [...s.session.spent];
          spent[s.session.current] += 1;
          return {
            session: {
              ...s.session,
              spent,
              elapsed: s.session.elapsed + 1,
              remaining:
                s.session.remaining === null
                  ? null
                  : Math.max(0, s.session.remaining - 1),
            },
          };
        }),

      finish: () => {
        const s = get().session;
        if (!s) return null;

        const { correct, score } = scoreOf(s.answers, s.questions);
        const answers: AnswerRecord[] = s.questions.map((q, i) => ({
          questionId: q.id,
          chosenIndex: s.answers[i],
          isCorrect: s.answers[i] === q.correctIndex,
          flagged: s.flagged[i],
          timeSpentSec: s.spent[i],
        }));

        const attempt: Attempt = {
          id: s.id,
          level: s.level,
          skill: s.skill,
          title: `${s.level} · ${s.skill ?? "Vollständig"}`,
          startedAt: s.startedAt,
          finishedAt: Date.now(),
          durationSec: s.elapsed,
          score,
          correctCount: correct,
          total: s.questions.length,
          answers,
        };

        // Fehlerbuch: xato qilingan savollar yig'iladi, to'g'ri javob "mastered" qiladi
        const mistakes = [...get().mistakes];
        for (const [i, rec] of answers.entries()) {
          const at = mistakes.findIndex((m) => m.questionId === rec.questionId);
          // Variantlar aralashtirilgani uchun indeks emas, matn saqlanadi
          const chosenText =
            rec.chosenIndex === null
              ? null
              : s.questions[i].options[rec.chosenIndex];
          if (rec.isCorrect) {
            if (at !== -1) mistakes[at] = { ...mistakes[at], mastered: true };
            continue;
          }
          if (at === -1) {
            mistakes.push({
              questionId: rec.questionId,
              source: "uebung",
              wrongCount: 1,
              lastWrongAt: attempt.finishedAt,
              mastered: false,
              lastChosenText: chosenText,
            });
          } else {
            mistakes[at] = {
              ...mistakes[at],
              wrongCount: mistakes[at].wrongCount + 1,
              lastWrongAt: attempt.finishedAt,
              mastered: false,
              lastChosenText: chosenText,
            };
          }
        }

        set((prev) => ({
          attempts: [attempt, ...prev.attempts],
          mistakes,
          session: null,
          profile: { ...prev.profile, streak: prev.profile.streak + 1 },
        }));

        return attempt.id;
      },

      abandon: () => set({ session: null }),

      markMastered: (questionId) =>
        set((s) => ({
          mistakes: s.mistakes.map((m) =>
            m.questionId === questionId ? { ...m, mastered: true } : m,
          ),
        })),

      reviewWord: (wordId, known) =>
        set((s) => {
          const prev = s.vocab[wordId] ?? {
            box: 0,
            lastReviewedAt: 0,
            correct: 0,
            wrong: 0,
          };
          // Xato — eng past qutiga: so'z darhol takrorlash navbatiga qaytadi
          const box = known
            ? Math.min(VOCAB_BOX_DAYS.length - 1, prev.box + 1)
            : 0;

          return {
            vocab: {
              ...s.vocab,
              [wordId]: {
                box,
                lastReviewedAt: Date.now(),
                correct: prev.correct + (known ? 1 : 0),
                wrong: prev.wrong + (known ? 0 : 1),
              },
            },
          };
        }),

      resetVocab: (wordIds) =>
        set((s) => {
          const vocab = { ...s.vocab };
          for (const id of wordIds) delete vocab[id];
          return { vocab };
        }),

      startVocabSession: (slug, wordIds) => {
        const target = resolveTarget(slug);
        if (!target) return;

        const ids =
          wordIds ??
          buildQueue(
            target.words,
            get().vocab,
            Date.now(),
            VOCAB_SESSION_SIZE,
          ).map((w) => w.id);

        set({
          vocabSession: {
            slug,
            wordIds: ids,
            index: 0,
            flipped: false,
            known: 0,
            wrongIds: [],
          },
        });
      },

      flipVocabCard: () =>
        set((s) =>
          s.vocabSession
            ? { vocabSession: { ...s.vocabSession, flipped: true } }
            : s,
        ),

      startExamModule: (setId, moduleId) => {
        const target = examSet(setId);
        if (!target) return false;
        const spec = formatSpec(target.format);
        const ms = spec && moduleSpec(spec, moduleId);
        if (!ms) return false;

        const runs = { ...get().examRuns };
        if (!runs[setId]) {
          runs[setId] = {
            setId,
            answers: emptyAnswers(),
            doneModules: [],
            startedAt: Date.now(),
            updatedAt: Date.now(),
          };
        }

        set({
          examRuns: runs,
          examSession: {
            setId,
            moduleId,
            teilIndex: 0,
            remaining: ms.timeSec,
            startedAt: Date.now(),
            plays: {},
          },
        });
        return true;
      },

      setExamAnswer: (itemId, value) =>
        set((s) => {
          const session = s.examSession;
          if (!session) return s;
          const run = s.examRuns[session.setId];
          if (!run) return s;
          return {
            examRuns: {
              ...s.examRuns,
              [session.setId]: {
                ...run,
                updatedAt: Date.now(),
                answers: {
                  ...run.answers,
                  values: { ...run.answers.values, [itemId]: value },
                },
              },
            },
          };
        }),

      toggleExamRubric: (itemId, criterionId) =>
        set((s) => {
          const session = s.examSession;
          if (!session) return s;
          const run = s.examRuns[session.setId];
          if (!run) return s;

          const current = run.answers.rubric[itemId] ?? [];
          const next = current.includes(criterionId)
            ? current.filter((c) => c !== criterionId)
            : [...current, criterionId];

          return {
            examRuns: {
              ...s.examRuns,
              [session.setId]: {
                ...run,
                updatedAt: Date.now(),
                answers: {
                  ...run.answers,
                  rubric: { ...run.answers.rubric, [itemId]: next },
                },
              },
            },
          };
        }),

      registerPlay: (blockId) =>
        set((s) =>
          s.examSession
            ? {
                examSession: {
                  ...s.examSession,
                  plays: {
                    ...s.examSession.plays,
                    [blockId]: (s.examSession.plays[blockId] ?? 0) + 1,
                  },
                },
              }
            : s,
        ),

      goToTeil: (index) =>
        set((s) =>
          s.examSession
            ? { examSession: { ...s.examSession, teilIndex: Math.max(0, index) } }
            : s,
        ),

      tickExam: () =>
        set((s) =>
          s.examSession
            ? {
                examSession: {
                  ...s.examSession,
                  remaining: Math.max(0, s.examSession.remaining - 1),
                },
              }
            : s,
        ),

      finishExamModule: () => {
        const session = get().examSession;
        if (!session) return;
        const run = get().examRuns[session.setId];
        if (!run) return;

        const target = examSet(session.setId);
        const spec = target && formatSpec(target.format);
        const ms = spec && moduleSpec(spec, session.moduleId);
        const mod = target?.modules.find((m) => m.id === session.moduleId);

        const doneModules = run.doneModules.includes(session.moduleId)
          ? run.doneModules
          : [...run.doneModules, session.moduleId];

        const allDone =
          spec !== undefined &&
          spec.modules.every((m) => doneModules.includes(m.id));

        const now = Date.now();
        const mistakes = [...get().mistakes];
        let raw = 0;
        let selfAssessed = false;

        // Xato qilingan elementlar Fehlerbuch'ga tushadi.
        // Schreiben/Sprechen mezon bo'yicha baholanadi — ularda "to'g'ri javob"
        // tushunchasi yo'q, shuning uchun xato sifatida yozilmaydi.
        for (const teil of mod?.teile ?? []) {
          for (const block of teil.blocks) {
            for (const item of block.items) {
              const score = itemScore(item, run.answers);
              raw += score;

              if (item.kind === "freitext" || item.kind === "sprechen") {
                selfAssessed = true;
                continue;
              }

              const at = mistakes.findIndex(
                (m) => m.questionId === item.id && m.source === "pruefung",
              );

              if (score > 0) {
                // To'g'ri javob — oldingi xato o'zlashtirilgan hisoblanadi
                if (at !== -1) mistakes[at] = { ...mistakes[at], mastered: true };
                continue;
              }

              const given = givenText(
                item,
                run.answers.values[item.id],
                teil.bank,
              );
              const chosen = given === "\u2014" ? null : given;

              if (at === -1) {
                mistakes.push({
                  questionId: item.id,
                  source: "pruefung",
                  setId: session.setId,
                  wrongCount: 1,
                  lastWrongAt: now,
                  mastered: false,
                  lastChosenText: chosen,
                });
              } else {
                mistakes[at] = {
                  ...mistakes[at],
                  wrongCount: mistakes[at].wrongCount + 1,
                  lastWrongAt: now,
                  mastered: false,
                  lastChosenText: chosen,
                };
              }
            }
          }
        }

        const rawMax = ms?.rawMax ?? 0;
        const ratio = rawMax > 0 ? raw / rawMax : 0;
        const attempt: ExamAttempt | null =
          ms && spec && target
            ? {
                id: `ex-${session.setId}-${session.moduleId}-${now}`,
                setId: session.setId,
                format: target.format,
                moduleId: session.moduleId,
                title: `${spec.label} \u00b7 ${ms.label}`,
                finishedAt: now,
                durationSec: Math.max(0, ms.timeSec - session.remaining),
                raw: Math.round(raw * 10) / 10,
                rawMax,
                weighted: Math.round(ratio * ms.weighted * 10) / 10,
                weightedMax: ms.weighted,
                percent: Math.round(ratio * 100),
                selfAssessed,
              }
            : null;

        set({
          mistakes,
          examAttempts: attempt
            ? [attempt, ...get().examAttempts]
            : get().examAttempts,
          examRuns: {
            ...get().examRuns,
            [session.setId]: {
              ...run,
              doneModules,
              updatedAt: now,
              finishedAt: allDone ? now : run.finishedAt,
            },
          },
          examSession: null,
        });
      },

      leaveExamModule: () => set({ examSession: null }),

      applyRemote: (state) =>
        set((s) => ({
          profile: state.profile ?? s.profile,
          profileUpdatedAt: state.profileUpdatedAt ?? s.profileUpdatedAt,
          attempts: state.attempts ?? s.attempts,
          examAttempts: state.examAttempts ?? s.examAttempts,
          mistakes: state.mistakes ?? s.mistakes,
          vocab: state.vocab ?? s.vocab,
          examRuns: state.examRuns ?? s.examRuns,
        })),

      resetExamRun: (setId) =>
        set((s) => {
          const runs = { ...s.examRuns };
          delete runs[setId];
          return { examRuns: runs, examSession: null };
        }),

      answerVocabCard: (known) => {
        const s = get().vocabSession;
        if (!s) return;
        const wordId = s.wordIds[s.index];
        if (!wordId) return;

        get().reviewWord(wordId, known);
        set({
          vocabSession: {
            ...s,
            index: s.index + 1,
            flipped: false,
            known: s.known + (known ? 1 : 0),
            wrongIds: known ? s.wrongIds : [...s.wrongIds, wordId],
          },
        });
      },
    }),
    {
      name: "gmt-store",
      storage: createJSONStorage(() => localStorage),
      version: 2,
    },
  ),
);

/**
 * localStorage'dan tiklanish tugaganini bildiradi.
 * Server render vaqtida false — shu sabab ekranlar shu paytda dizayndagi
 * "Savollar tayyorlanmoqda…" skeletonini ko'rsatadi va hydration mos keladi.
 */
export function useHydrated() {
  return useSyncExternalStore(
    (onChange) => useApp.persist.onFinishHydration(onChange),
    () => useApp.persist.hasHydrated(),
    () => false,
  );
}

/* ── Hisob-kitob yordamchilari (dashboard / natija ekranlari) ───────────── */

export function averageScore(attempts: Attempt[]) {
  if (attempts.length === 0) return 0;
  return Math.round(
    attempts.reduce((n, a) => n + a.score, 0) / attempts.length,
  );
}

/** Har bo'lim bo'yicha to'g'ri javoblar foizi */
export function skillBreakdown(
  attempts: Attempt[],
  questionLookup: (id: string) => Question | undefined,
): { name: Skill; value: number; answered: number }[] {
  const tally = new Map<Skill, { ok: number; total: number }>(
    SKILLS.map((s) => [s, { ok: 0, total: 0 }]),
  );

  for (const attempt of attempts) {
    for (const rec of attempt.answers) {
      const q = questionLookup(rec.questionId);
      if (!q) continue;
      const cell = tally.get(q.skill)!;
      cell.total += 1;
      if (rec.isCorrect) cell.ok += 1;
    }
  }

  return SKILLS.map((name) => {
    const cell = tally.get(name)!;
    return {
      name,
      value: cell.total ? Math.round((cell.ok / cell.total) * 100) : 0,
      answered: cell.total,
    };
  });
}

/** Oxirgi 4 testdagi o'sish — natija ekranidagi "+12%" bloki */
export function growth(attempts: Attempt[]) {
  if (attempts.length < 2) return null;
  const recent = attempts.slice(0, 4);
  const older = attempts.slice(4, 8);
  if (older.length === 0) return null;
  return averageScore(recent) - averageScore(older);
}

export function passed(score: number) {
  return score >= PASS_SCORE;
}
