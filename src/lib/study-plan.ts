import type { Attempt, Level, MistakeEntry, Profile, VocabCardState } from "@/lib/types";
import type { ExamAttempt, ExamRun } from "@/lib/store";
import { daysUntil } from "@/lib/now";
import { openMistakes, weakestTopic } from "@/lib/mistakes";
import { reviewSlug, setStats, VOCAB_BANK } from "@/lib/vocab";

export type StudyTaskKind = "mistakes" | "vocab" | "practice" | "exam" | "done";

export interface StudyTask {
  kind: StudyTaskKind;
  href?: string;
  count?: number;
  topic?: string;
  level?: Level;
}

export interface StudyPlan {
  daysLeft: number | null;
  intensity: "steady" | "focused" | "intensive";
  practiceDone: number;
  practiceTarget: number;
  modulesDone: number;
  moduleTarget: number;
  tasks: StudyTask[];
}

const WEEK_MS = 7 * 86_400_000;

/**
 * Imtihon sanasi, oxirgi 7 kunlik faollik va ochiq xatolardan ixcham reja tuzadi.
 * Reja serverga bog'liq emas — guest foydalanuvchida ham ishlaydi.
 */
export function buildStudyPlan({
  profile,
  attempts,
  examAttempts,
  mistakes,
  vocab,
  examRuns,
  now,
}: {
  profile: Profile;
  attempts: Attempt[];
  examAttempts: ExamAttempt[];
  mistakes: MistakeEntry[];
  vocab: Record<string, VocabCardState>;
  examRuns: Record<string, ExamRun>;
  now: number;
}): StudyPlan {
  const daysLeft = daysUntil(profile.examDate, now);
  const intensity =
    daysLeft !== null && daysLeft <= 7
      ? "intensive"
      : daysLeft !== null && daysLeft <= 30
        ? "focused"
        : "steady";

  const practiceTarget = intensity === "intensive" ? 5 : intensity === "focused" ? 4 : 3;
  const moduleTarget = intensity === "intensive" ? 4 : intensity === "focused" ? 3 : 2;
  const since = now > 0 ? now - WEEK_MS : Number.POSITIVE_INFINITY;
  const practiceDone = attempts.filter((attempt) => attempt.finishedAt >= since).length;
  const modulesDone = examAttempts.filter((attempt) => attempt.finishedAt >= since).length;

  const open = openMistakes(mistakes);
  const weakest = weakestTopic(mistakes);
  const due = setStats(VOCAB_BANK[profile.targetLevel], vocab, now).due;
  const hasActiveExam = Object.values(examRuns).some(
    (run) => run.doneModules.length > 0 && !run.finishedAt,
  );

  const mistakesTask: StudyTask | null = open.length
    ? { kind: "mistakes", href: "/fehlerbuch", count: open.length, topic: weakest?.topic }
    : null;
  const vocabTask: StudyTask | null = due
    ? {
        kind: "vocab",
        href: `/wortschatz/${reviewSlug(profile.targetLevel)}`,
        count: Math.min(due, 12),
        level: profile.targetLevel,
      }
    : null;
  const practiceTask: StudyTask | null =
    practiceDone < practiceTarget
      ? {
          kind: "practice",
          href: "/mock",
          topic: weakest?.topic,
          level: profile.targetLevel,
        }
      : null;
  const examTask: StudyTask | null =
    modulesDone < moduleTarget || hasActiveExam
      ? { kind: "exam", href: "/pruefung", level: profile.targetLevel }
      : null;

  const ordered =
    intensity === "intensive"
      ? [examTask, mistakesTask, practiceTask, vocabTask]
      : [mistakesTask, vocabTask, practiceTask, examTask];
  const tasks = ordered.filter((task): task is StudyTask => task !== null).slice(0, 3);

  if (tasks.length === 0) tasks.push({ kind: "done" });

  return {
    daysLeft,
    intensity,
    practiceDone,
    practiceTarget,
    modulesDone,
    moduleTarget,
    tasks,
  };
}
