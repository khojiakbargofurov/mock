"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

/**
 * Landing sahifadagi jonli demo — haqiqiy imtihon savoli.
 *
 * Savol matni, variantlar va izoh `EXAM_SETS` dan keladi (o'ylab topilmagan).
 * Taymer faqat ko'rgazma uchun ishlaydi va hech qayerga yozilmaydi.
 */
export interface DemoQuestion {
  /** Modul yorlig'i, masalan "telc B1 · Sprachbausteine" */
  label: string;
  prompt: string;
  options: { key: string; label: string }[];
  correct: string;
  explanation: string;
  /** Nechanchi savol / jami — progress chizig'i uchun */
  nr: number;
  total: number;
}

const START_SEC = 8 * 60 + 12;

/**
 * Savol matnidagi imtihon belgisi („__(21)__“) o'rniga ko'rinadigan bo'sh joy.
 * `null` — shu yerda bo'sh joy turishi kerak.
 */
function promptParts(prompt: string): (string | null)[] {
  const out: (string | null)[] = [];
  const re = /_{2,}\(\d+\)_{2,}|_{3,}/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(prompt)) !== null) {
    if (m.index > last) out.push(prompt.slice(last, m.index));
    out.push(null);
    last = m.index + m[0].length;
  }
  if (last < prompt.length) out.push(prompt.slice(last));
  return out.length ? out : [prompt];
}

export function DemoCard({
  question,
  labels,
}: {
  question: DemoQuestion;
  labels: {
    overline: string;
    pick: string;
    next: string;
    right: string;
    wrong: string;
    footnote: string;
  };
}) {
  const [picked, setPicked] = React.useState<string | null>(null);
  const [secs, setSecs] = React.useState(START_SEC);

  React.useEffect(() => {
    const id = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const revealed = picked !== null;
  const isRight = picked === question.correct;

  const clock = `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(
    secs % 60,
  ).padStart(2, "0")}`;

  return (
    <div className="bg-ink rounded-6xl flex flex-col gap-[18px] px-[26px] py-[30px] shadow-[0_26px_60px_rgba(20,25,31,.28)]">
      <div className="text-paper flex items-center justify-between">
        <span className="flex items-center gap-[9px] text-[13.5px]">
          <span className="bg-accent h-[7px] w-[7px] flex-none rounded-full" />
          {question.label}
        </span>
        <span
          className="tnum text-[14px] font-bold"
          aria-label={labels.overline}
        >
          {clock}
        </span>
      </div>

      {/* Sinov progressi — ko'rgazma uchun */}
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: question.total }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-[5px] flex-1 rounded-full transition-colors",
              i < question.nr - 1
                ? "bg-paper"
                : i === question.nr - 1
                  ? "bg-accent"
                  : "bg-paper/20",
            )}
          />
        ))}
      </div>

      <div className="bg-paper rounded-5xl flex flex-col gap-[14px] p-6">
        <span className="text-muted text-[11.5px] tracking-[.16em] uppercase">
          {labels.overline}
        </span>
        <p className="font-display m-0 text-[21px] leading-[1.36] font-medium tracking-[-.01em]">
          {promptParts(question.prompt).map((part, i) =>
            part === null ? (
              <span
                key={i}
                className="bg-sand text-muted-2 mx-[2px] rounded-xs px-[10px]"
                aria-label="Lücke"
              >
                ____
              </span>
            ) : (
              <span key={i}>{part}</span>
            ),
          )}
        </p>

        <div className="flex flex-col gap-[9px]">
          {question.options.map((option) => {
            const isCorrect = option.key === question.correct;
            const isPicked = option.key === picked;
            return (
              <button
                key={option.key}
                type="button"
                disabled={revealed}
                onClick={() => setPicked(option.key)}
                aria-pressed={isPicked}
                className={cn(
                  "flex items-center justify-between rounded-xl border-[1.5px] px-4 py-[14px] text-left text-[16.5px] font-semibold transition-colors duration-200",
                  !revealed &&
                    "border-line hover:border-line-hover cursor-pointer bg-white",
                  revealed &&
                    isCorrect &&
                    "border-ok-bd bg-ok-bg text-ok-fg",
                  revealed &&
                    isPicked &&
                    !isCorrect &&
                    "border-bad-bd bg-bad-bg text-bad-fg",
                  revealed &&
                    !isCorrect &&
                    !isPicked &&
                    "border-line bg-sand text-muted-2",
                )}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-[28px] w-[28px] flex-none items-center justify-center rounded-[9px] text-[13px] font-bold uppercase",
                      revealed && (isCorrect || isPicked)
                        ? "bg-ink/8"
                        : "bg-sand text-muted-2",
                    )}
                  >
                    {option.key}
                  </span>
                  {option.label}
                </span>
                {revealed && isCorrect && <span aria-hidden>✓</span>}
                {revealed && isPicked && !isCorrect && <span aria-hidden>✕</span>}
              </button>
            );
          })}
        </div>

        {/* Javob izohi silliq ochiladi — yopiq holatda quruq joy qoldirmaydi */}
        <div
          aria-live="polite"
          className={cn(
            "ease-out-soft grid transition-[grid-template-rows,opacity] duration-300",
            revealed
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "flex flex-col gap-[3px] rounded-xl px-4 py-3",
                isRight ? "bg-ok-bg text-ok-fg" : "bg-bad-bg text-bad-fg",
              )}
            >
              <span className="text-[14.5px] font-bold">
                {isRight ? labels.right : labels.wrong}
              </span>
              <span className="text-[13.5px] leading-[1.5]">
                {question.explanation}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          disabled={!revealed}
          onClick={() => setPicked(null)}
          className={cn(
            "w-full rounded-2xl py-[15px] text-[16px] font-bold transition-colors duration-200",
            revealed
              ? "bg-ink text-paper cursor-pointer hover:opacity-90"
              : "bg-disabled-bg text-disabled-fg",
          )}
        >
          {revealed ? labels.next : labels.pick}
        </button>
      </div>

      <span className="text-on-dark-muted text-center text-[13.5px]">
        {labels.footnote}
      </span>
    </div>
  );
}
