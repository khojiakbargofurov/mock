"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import type { Attempt, Level } from "@/lib/types";
import { LEVEL_NAMES } from "@/lib/types";
import { questionCount } from "@/lib/questions";
import { useApp, useHydrated, averageScore } from "@/lib/store";

/** Dizayn: A1 → B2 tomon fon tobora quyuqlashadi, B2 esa to'liq siyoh rangda */
const TINT: Record<Level, string> = {
  A1: "bg-lvl-a1 border-lvl-a1-bd text-ink",
  A2: "bg-lvl-a2 border-lvl-a2-bd text-ink",
  B1: "bg-lvl-b1 border-lvl-b1-bd text-ink",
  B2: "bg-lvl-b2 border-lvl-b2-bd text-on-dark",
};

export interface LevelStatus {
  level: Level;
  meta: string;
  /** 0–4 — kartadagi to'ldirilgan nuqtalar soni */
  done: number;
  locked: boolean;
}

/** Daraja holatini urinishlar tarixidan hisoblaydi */
const NO_ATTEMPTS: Attempt[] = [];

export function useLevelStatuses(): LevelStatus[] {
  const t = useTranslations("levelCard");
  const hydrated = useHydrated();
  const stored = useApp((s) => s.attempts);

  // Urinishlar localStorage'dan keladi — serverda va brauzerdagi birinchi
  // renderda bo'sh, shunda kartalar mos kelmaslik chiqarmay chiziladi.
  const attempts = hydrated ? stored : NO_ATTEMPTS;

  return (["A1", "A2", "B1", "B2"] as Level[]).map((level) => {
    const mine = attempts.filter((a) => a.level === level);
    const available = questionCount(level) > 0;

    if (!available) {
      return { level, meta: t("soon"), done: 0, locked: true };
    }
    if (mine.length === 0) {
      return { level, meta: t("new"), done: 0, locked: false };
    }

    const avg = averageScore(mine);
    return {
      level,
      meta: avg >= 85 ? t("done", { score: avg }) : t("inProgress", { score: avg }),
      done: Math.min(4, mine.length),
      locked: false,
    };
  });
}

function Pips({
  done,
  dark,
  shape,
}: {
  done: number;
  dark: boolean;
  shape: "bar" | "dot";
}) {
  return (
    <div className="flex w-full gap-[5px]" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn(
            shape === "bar"
              ? "rounded-pill h-[5px] flex-1"
              : "h-[7px] w-[7px] rounded-full",
            i < done
              ? dark
                ? "bg-paper"
                : "bg-ink"
              : dark
                ? "bg-paper/28"
                : "bg-ink/16",
          )}
        />
      ))}
    </div>
  );
}

function useStart() {
  const router = useRouter();
  return (level: Level, locked: boolean) => {
    if (locked) return;
    router.push(`/test/${level.toLowerCase()}`);
  };
}

/** Desktop dashboard kartasi (2×2 to'r) */
export function LevelCardTall({ status }: { status: LevelStatus }) {
  const { level, meta, done, locked } = status;
  const start = useStart();
  const dark = level === "B2";

  return (
    <button
      type="button"
      onClick={() => start(level, locked)}
      disabled={locked}
      className={cn(
        "rounded-4xl flex flex-col justify-between gap-[26px] border px-6 pt-6 pb-5 text-left",
        "ease-out-soft transition-[transform,box-shadow] duration-[220ms]",
        TINT[level],
        locked
          ? "cursor-not-allowed opacity-55"
          : "hover:shadow-lift cursor-pointer hover:-translate-y-[3px] active:translate-y-0 active:scale-[.995]",
      )}
    >
      <div className="flex w-full items-start justify-between gap-4">
        <span className="flex flex-col gap-[5px]">
          <span className="font-display text-[38px] leading-none font-extrabold">
            {level}
          </span>
          <span className="text-[15px] opacity-[.72]">{LEVEL_NAMES[level]}</span>
        </span>
        <span className="text-[12.5px] tracking-[.04em] whitespace-nowrap opacity-[.68]">
          {meta}
        </span>
      </div>
      <Pips done={done} dark={dark} shape="bar" />
    </button>
  );
}

/** Mobil ro'yxat kartasi */
export function LevelCardRow({ status }: { status: LevelStatus }) {
  const { level, meta, done, locked } = status;
  const start = useStart();
  const dark = level === "B2";

  return (
    <button
      type="button"
      onClick={() => start(level, locked)}
      disabled={locked}
      className={cn(
        "rounded-3xl flex w-full items-center justify-between border px-5 py-[18px] text-left",
        "ease-out-soft transition-[transform,box-shadow] duration-200",
        TINT[level],
        locked
          ? "cursor-not-allowed opacity-55"
          : "hover:shadow-lift-sm cursor-pointer hover:-translate-y-[2px] active:translate-y-0 active:scale-[.99]",
      )}
    >
      <span className="flex flex-col items-start gap-1">
        <span className="font-display text-[26px] leading-none font-bold">
          {level}
        </span>
        <span className="text-[13.5px] opacity-[.72]">{LEVEL_NAMES[level]}</span>
      </span>
      <span className="flex flex-col items-end gap-[9px]">
        <span className="text-[12px] tracking-[.04em] opacity-70">{meta}</span>
        <span className="w-[54px]">
          <Pips done={done} dark={dark} shape="dot" />
        </span>
      </span>
    </button>
  );
}
