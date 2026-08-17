"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import { cancelSpeech, useSpeech } from "@/lib/speech";
import type { Question } from "@/lib/types";

const KEYS = ["A", "B", "C", "D", "E", "F"];

/** `___` bo'sh joyni dizayndagi bej "quti" bilan almashtiradi */
function PromptText({ text }: { text: string }) {
  const parts = text.split(/(_{2,})/g);
  return (
    <>
      {parts.map((part, i) =>
        /^_{2,}$/.test(part) ? (
          <span
            key={i}
            className="bg-sand text-muted rounded-sm px-[14px] align-baseline"
          >
            ____
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}

export function QuestionCard({
  question,
  index,
  compact,
}: {
  question: Question;
  index: number;
  compact?: boolean;
}) {
  const t = useTranslations("question");
  const { speak, speaking, supported } = useSpeech(question.passage);

  // Yangi savolga o'tganda oldingi o'qishni to'xtatamiz
  React.useEffect(() => {
    cancelSpeech();
  }, [index]);

  return (
    <div
      className={cn(
        "border-line rounded-4xl flex flex-col gap-3 border bg-white",
        compact ? "px-[22px] py-6" : "px-9 py-[34px]",
      )}
    >
      <span className="text-muted text-[11.5px] tracking-[.16em] uppercase">
        {question.instruction}
      </span>

      {question.kind === "hoeren" && (
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => speak()}
            disabled={!supported}
            className={cn(
              "rounded-md px-4 py-[10px] text-[14.5px] font-semibold transition-opacity",
              supported
                ? "bg-ink text-paper cursor-pointer hover:opacity-90"
                : "bg-disabled-bg text-disabled-fg cursor-not-allowed",
            )}
          >
            {speaking ? t("speaking") : t("listen")}
          </button>
          <span className="text-muted-2 text-[13.5px]">
            {supported ? t("listenHint") : t("notSupported")}
          </span>
        </div>
      )}

      {question.kind === "lesen" && question.passage && (
        <p className="text-slate bg-paper border-line m-0 rounded-xl border p-[18px] text-[16px] leading-[1.6] whitespace-pre-line">
          {question.passage}
        </p>
      )}

      <p
        className={cn(
          "font-display m-0 font-medium",
          compact
            ? "text-[23px] leading-[1.35] tracking-[-.01em]"
            : "max-w-[34ch] text-[34px] leading-[1.3] tracking-[-.015em]",
        )}
      >
        <PromptText text={question.prompt} />
      </p>

      {question.note && (
        <span className="text-muted-2 text-[14px]">{question.note}</span>
      )}
    </div>
  );
}

export function OptionButton({
  option,
  index,
  picked,
  correctIndex,
  revealed,
  compact,
  onPick,
}: {
  option: string;
  index: number;
  picked: number | null;
  correctIndex: number;
  revealed: boolean;
  compact?: boolean;
  onPick: (i: number) => void;
}) {
  const isCorrect = index === correctIndex;
  const isPicked = index === picked;

  let tone = "bg-white border-line text-ink";
  let mark = "";
  let anim = "";

  if (revealed) {
    if (isCorrect) {
      tone = "bg-ok-bg border-ok-bd text-ok-fg";
      mark = "✓";
      anim = "animate-pop";
    } else if (isPicked) {
      tone = "bg-bad-bg border-bad-bd text-bad-fg";
      mark = "✕";
      anim = "animate-shake";
    } else {
      tone = "bg-paper border-line text-muted-2";
    }
  } else if (isPicked) {
    // Darhol javob o'chirilgan bo'lsa — tanlangan variant shunchaki belgilanadi
    tone = "bg-sand border-line-hover text-ink";
  }

  return (
    <button
      type="button"
      onClick={() => onPick(index)}
      disabled={picked !== null}
      className={cn(
        "flex w-full items-center justify-between border-[1.5px] text-left",
        "transition-[background-color,border-color,color,transform] duration-[220ms]",
        compact ? "rounded-xl px-[18px] py-[15px]" : "rounded-2xl px-6 py-5",
        tone,
        anim,
        picked === null
          ? "hover:border-line-hover cursor-pointer active:scale-[.99]"
          : "cursor-default",
      )}
    >
      <span className={cn("flex items-center", compact ? "gap-[14px]" : "gap-4")}>
        <span
          className={cn(
            "flex items-center justify-center rounded-[9px] font-bold opacity-80",
            compact ? "h-7 w-7 text-[13px]" : "h-[34px] w-[34px] text-[15px]",
            revealed && (isCorrect || isPicked) ? "bg-ink/8" : "bg-sand",
          )}
        >
          {KEYS[index]}
        </span>
        <span className={compact ? "text-[18px] font-semibold" : "text-[21px] font-semibold"}>
          {option}
        </span>
      </span>
      <span className="text-[17px] font-semibold opacity-85">{mark}</span>
    </button>
  );
}

/** Javobdan keyingi izoh bloki — to'g'ri/xato ranglari bilan */
export function FeedbackBlock({
  visible,
  correct,
  title,
  body,
}: {
  visible: boolean;
  correct: boolean;
  title: string;
  body: string;
}) {
  return (
    <div
      aria-live="polite"
      className={cn(
        "flex flex-col gap-1 rounded-xl px-4 py-[14px] transition-[opacity,transform] duration-[250ms]",
        visible
          ? correct
            ? "bg-ok-bg text-ok-fg translate-y-0 opacity-100"
            : "bg-bad-bg text-bad-fg translate-y-0 opacity-100"
          : "pointer-events-none translate-y-[6px] bg-transparent text-transparent opacity-0",
      )}
    >
      <span className="text-[16px] font-bold">{visible ? title : " "}</span>
      <span className="text-[15px] leading-[1.55] opacity-90">
        {visible ? body : " "}
      </span>
    </div>
  );
}
