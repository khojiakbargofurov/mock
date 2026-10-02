"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import type {
  ChoiceItem,
  FreitextItem,
  GapItem,
  RubricCriterion,
  SprechenItem,
  ZuordnungItem,
} from "@/lib/exam/types";
import type {
  CriterionCheck,
  Finding,
  Verdict,
} from "@/lib/schreiben/analyze";

/** a / b / c yoki Richtig / Falsch — imtihon varaqasidagi kabi katakcha bilan */
export function ChoiceField({
  item,
  value,
  onChange,
}: {
  item: ChoiceItem;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-3 border-0 p-0">
      <legend className="flex gap-3 pb-1">
        <span className="bg-ink text-paper font-display tnum flex h-[26px] w-[26px] flex-none items-center justify-center rounded-[8px] text-[13px] font-bold">
          {item.nr}
        </span>
        <span className="text-[16.5px] leading-[1.45] font-semibold">
          {item.prompt}
        </span>
      </legend>

      <div
        className={cn(
          "flex gap-[10px] pl-[38px]",
          item.options.length > 2 ? "flex-col" : "flex-row flex-wrap",
        )}
      >
        {item.options.map((option) => {
          const active = value === option.key;
          return (
            <button
              key={option.key}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.key)}
              className={cn(
                "flex items-center gap-3 rounded-2xl border px-[18px] py-[13px] text-left text-[15.5px] transition-[background-color,border-color] duration-150",
                active
                  ? "border-ink bg-sand font-semibold"
                  : "border-line hover:border-line-hover bg-white",
              )}
            >
              <span
                className={cn(
                  "flex h-[22px] w-[22px] flex-none items-center justify-center rounded-[6px] border text-[12px] font-bold uppercase",
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line-btn text-muted-2",
                )}
              >
                {option.key.slice(0, 1)}
              </span>
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

/**
 * Zuordnung — kartochka yoki e'lonni vaziyatga moslashtirish.
 * Variantlar banki Teil boshida to'liq ko'rsatilgani uchun bu yerda faqat
 * harflar chiqadi; boshqa element allaqachon olgan harf belgilanadi
 * (imtihon qoidasi: har variant bir marta ishlatiladi).
 */
export function ZuordnungField({
  item,
  bank,
  value,
  usedBy,
  onChange,
}: {
  item: ZuordnungItem;
  bank: { key: string; label: string }[];
  value?: string;
  /** harf → uni tanlagan boshqa elementning tartib raqami */
  usedBy: Record<string, number>;
  onChange: (value: string) => void;
}) {
  return (
    <div className="border-line rounded-3xl flex flex-col gap-3 border bg-white px-[22px] py-[18px]">
      <div className="flex gap-3">
        <span className="bg-ink text-paper font-display tnum flex h-[26px] w-[26px] flex-none items-center justify-center rounded-[8px] text-[13px] font-bold">
          {item.nr}
        </span>
        <span className="text-[16px] leading-[1.45] font-semibold">
          {item.prompt}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 pl-[38px]">
        {bank.map((option) => {
          const active = value === option.key;
          const taken = usedBy[option.key];
          return (
            <button
              key={option.key}
              type="button"
              aria-pressed={active}
              aria-label={option.label}
              onClick={() => onChange(option.key)}
              className={cn(
                "flex min-w-[44px] flex-col items-center gap-[2px] rounded-xl border px-3 py-2 transition-colors",
                active
                  ? "border-ink bg-ink text-paper"
                  : taken
                    ? "border-line bg-sand text-muted-2"
                    : "border-line hover:border-line-hover bg-white",
              )}
            >
              <span className="text-[15px] font-bold uppercase">
                {option.key}
              </span>
              {taken && !active && (
                <span className="tnum text-[10px]">Nr. {taken}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Blankadagi bo'sh joy */
export function GapField({
  item,
  value,
  onChange,
}: {
  item: GapItem;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex items-center gap-3">
      <span className="bg-sand text-muted-3 tnum flex h-[22px] w-[22px] flex-none items-center justify-center rounded-[6px] text-[12px] font-bold">
        {item.nr}
      </span>
      <input
        type="text"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        aria-label={item.label}
        className="border-line-btn focus:border-ink w-full rounded-lg border bg-white px-[14px] py-[10px] text-[16px] outline-none transition-colors"
      />
    </label>
  );
}

function WordCount({
  text,
  min,
  max,
}: {
  text: string;
  min: number;
  max: number;
}) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const ok = words >= min && words <= max;

  return (
    <span
      className={cn(
        "tnum text-[13.5px] font-semibold",
        words === 0 ? "text-muted-2" : ok ? "text-ok-fg" : "text-low",
      )}
    >
      {words} so‘z · kerak: {min}–{max}
    </span>
  );
}

/** Schreiben Teil 2 — erkin matn + mazmun nuqtalari */
export function FreitextField({
  item,
  value,
  onChange,
}: {
  item: FreitextItem;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-sand flex flex-col gap-3 rounded-3xl px-[22px] py-5">
        <span className="text-muted-3 text-[15.5px] leading-[1.55]">
          {item.situation}
        </span>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-[10px] text-[15.5px]">
              <span className="text-accent font-bold">·</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          rows={10}
          placeholder="Sehr geehrte Damen und Herren, …"
          className="border-line focus:border-ink w-full resize-y rounded-3xl border bg-white px-[22px] py-5 text-[16.5px] leading-[1.65] outline-none transition-colors"
        />
        <div className="flex justify-end">
          <WordCount
            text={value ?? ""}
            min={item.minWords}
            max={item.maxWords}
          />
        </div>
      </div>
    </div>
  );
}

/** Sprechen — kartochkalar, tayyorgarlik vaqti va mikrofonga yozish */
export function SprechenField({
  item,
  value,
  onChange,
}: {
  item: SprechenItem;
  value?: string;
  onChange: (value: string) => void;
}) {
  const t = useTranslations("pruefung");
  const [phase, setPhase] = React.useState<
    "idle" | "preparing" | "recording" | "ready"
  >("idle");
  const [seconds, setSeconds] = React.useState(0);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const recorder = React.useRef<MediaRecorder | null>(null);
  const stream = React.useRef<MediaStream | null>(null);
  const chunks = React.useRef<Blob[]>([]);
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const audioUrlRef = React.useRef<string | null>(null);

  const clearTimer = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const releaseStream = () => {
    stream.current?.getTracks().forEach((track) => track.stop());
    stream.current = null;
  };

  React.useEffect(() => {
    return () => {
      if (timer.current !== null) clearInterval(timer.current);
      if (recorder.current?.state === "recording") {
        recorder.current.onstop = null;
        recorder.current.stop();
      }
      stream.current?.getTracks().forEach((track) => track.stop());
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    };
  }, []);

  const beginRecording = (mediaStream: MediaStream) => {
    let mr: MediaRecorder;
    try {
      mr = new MediaRecorder(mediaStream);
    } catch {
      releaseStream();
      setPhase("idle");
      setError(t("speakingUnsupported"));
      return;
    }
    recorder.current = mr;
    chunks.current = [];
    setSeconds(0);
    setPhase("recording");

    mr.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.current.push(event.data);
    };
    mr.onstop = () => {
      clearTimer();
      const blob = new Blob(chunks.current, {
        type: mr.mimeType || "audio/webm",
      });
      if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
      const nextUrl = URL.createObjectURL(blob);
      audioUrlRef.current = nextUrl;
      setAudioUrl(nextUrl);
      setPhase("ready");
      releaseStream();
    };

    mr.start();
    let elapsed = 0;
    timer.current = setInterval(() => {
      elapsed += 1;
      setSeconds(elapsed);
      if (elapsed >= item.speakSec) {
        clearTimer();
        if (mr.state === "recording") mr.stop();
      }
    }, 1000);
  };

  const start = async () => {
    setError(null);
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError(t("speakingUnsupported"));
      return;
    }

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.current = mediaStream;
      let remaining = item.prepSec;
      setSeconds(remaining);
      setPhase("preparing");

      if (remaining <= 0) {
        beginRecording(mediaStream);
        return;
      }

      timer.current = setInterval(() => {
        remaining -= 1;
        setSeconds(remaining);
        if (remaining <= 0) {
          clearTimer();
          beginRecording(mediaStream);
        }
      }, 1000);
    } catch {
      releaseStream();
      setPhase("idle");
      setError(t("speakingPermissionError"));
    }
  };

  const stop = () => {
    clearTimer();
    if (recorder.current?.state === "recording") recorder.current.stop();
  };

  const cancelPreparation = () => {
    clearTimer();
    releaseStream();
    setSeconds(0);
    setPhase("idle");
  };

  const removeRecording = () => {
    if (audioUrlRef.current) URL.revokeObjectURL(audioUrlRef.current);
    audioUrlRef.current = null;
    setAudioUrl(null);
    setSeconds(0);
    setPhase("idle");
  };

  const progress =
    phase === "preparing"
      ? ((item.prepSec - seconds) / Math.max(1, item.prepSec)) * 100
      : (seconds / Math.max(1, item.speakSec)) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
        {item.cards.map((card) => (
          <div
            key={card.key}
            className="border-line-btn rounded-3xl flex flex-col gap-1 border border-dashed bg-white px-5 py-4"
          >
            <span className="font-display text-[18px] font-bold">
              {card.label}
            </span>
            {card.hint && (
              <span className="text-muted-2 text-[14px]">{card.hint}</span>
            )}
          </div>
        ))}
      </div>

      <div className="border-line rounded-3xl flex flex-col gap-4 border bg-white px-5 py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="flex flex-col gap-[3px]">
            <span className="font-display text-[18px] font-bold">
              {phase === "preparing"
                ? t("speakingPreparing")
                : phase === "recording"
                  ? t("speakingRecording")
                  : phase === "ready"
                    ? t("speakingReady")
                    : t("speakingTitle")}
            </span>
            <span className="text-muted-2 tnum text-[13.5px]">
              {t("speakingTiming", {
                prep: item.prepSec,
                speak: item.speakSec,
              })}
            </span>
          </span>

          {phase === "idle" && (
            <button
              type="button"
              onClick={start}
              className="bg-ink text-paper cursor-pointer rounded-lg px-6 py-[13px] text-[15px] font-semibold transition-opacity hover:opacity-90"
            >
              ● {t("speakingStart")}
            </button>
          )}
          {phase === "preparing" && (
            <button
              type="button"
              onClick={cancelPreparation}
              className="border-line-btn text-muted-3 hover:bg-sand cursor-pointer rounded-lg border px-5 py-[12px] text-[14px] font-semibold"
            >
              {t("speakingCancel")}
            </button>
          )}
          {phase === "recording" && (
            <button
              type="button"
              onClick={stop}
              className="bg-danger text-paper cursor-pointer rounded-lg px-6 py-[13px] text-[15px] font-semibold"
            >
              ■ {t("speakingStop")}
            </button>
          )}
        </div>

        {(phase === "preparing" || phase === "recording") && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-3 text-[14px]">
                {phase === "preparing"
                  ? t("speakingStartsIn")
                  : t("speakingElapsed")}
              </span>
              <span className="font-display tnum text-[24px] font-bold">
                {phase === "preparing"
                  ? `${seconds}s`
                  : `${seconds}s / ${item.speakSec}s`}
              </span>
            </div>
            <div className="bg-sand rounded-pill h-2 overflow-hidden">
              <div
                className={cn(
                  "rounded-pill h-full transition-[width] duration-300",
                  phase === "recording" ? "bg-danger" : "bg-accent",
                )}
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {error && <span className="text-bad-fg text-[14px]">{error}</span>}

      {audioUrl && (
        <div className="bg-sand flex flex-col gap-3 rounded-3xl px-5 py-4">
          <audio
            controls
            src={audioUrl}
            className="w-full"
            aria-label={t("speakingAudioLabel")}
          />
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                removeRecording();
                void start();
              }}
              className="text-petrol cursor-pointer text-[14px] font-semibold"
            >
              {t("speakingRerecord")}
            </button>
            <button
              type="button"
              onClick={removeRecording}
              className="text-muted-2 hover:text-danger cursor-pointer text-[14px] font-semibold"
            >
              {t("speakingDelete")}
            </button>
          </div>
        </div>
      )}

      <label className="flex flex-col gap-2">
        <span className="text-muted-3 text-[14.5px]">
          {t("speakingNotes")}
        </span>
        <textarea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          placeholder={t("speakingNotesPlaceholder")}
          className="border-line focus:border-ink w-full resize-y rounded-3xl border bg-white px-[22px] py-4 text-[16px] leading-[1.6] outline-none transition-colors"
        />
      </label>
    </div>
  );
}

const VERDICT_BADGE: Record<Verdict, { label: string; className: string }> = {
  ok: { label: "topildi", className: "bg-ok-bg text-ok-fg" },
  teilweise: { label: "qisman", className: "bg-sand text-accent" },
  fehlt: { label: "topilmadi", className: "bg-bad-bg text-bad-fg" },
  manuell: { label: "o‘zingiz", className: "bg-sand text-muted-3" },
};

const FINDING_MARK: Record<Finding["level"], { sign: string; className: string }> =
  {
    ok: { sign: "✓", className: "text-ok-fg" },
    warn: { sign: "!", className: "text-accent" },
    bad: { sign: "×", className: "text-bad-fg" },
  };

/** Bitta kuzatuv qatori — avtomatik tekshiruv natijasi */
export function FindingRow({ finding }: { finding: Finding }) {
  const mark = FINDING_MARK[finding.level];
  return (
    <li className="flex gap-[10px] text-[14px] leading-[1.5]">
      <span className={cn("flex-none font-bold", mark.className)}>
        {mark.sign}
      </span>
      <span className="flex flex-col gap-[2px]">
        <span className="text-muted-3">{finding.text}</span>
        {finding.detail && (
          <span className="text-muted-2 text-[13px] italic">
            {finding.detail}
          </span>
        )}
      </span>
    </li>
  );
}

/**
 * O'zini baholash ro'yxati — Schreiben/Sprechen ballari shundan chiqadi.
 * `checks` berilsa, har mezon ostida avtomatik tekshiruv natijasi ko'rinadi.
 */
export function RubricList({
  criteria,
  checked,
  onToggle,
  sample,
  checks,
}: {
  criteria: RubricCriterion[];
  checked: string[];
  onToggle: (id: string) => void;
  sample: string;
  checks?: CriterionCheck[];
}) {
  const [open, setOpen] = React.useState(false);
  const got = criteria
    .filter((c) => checked.includes(c.id))
    .reduce((n, c) => n + c.points, 0);
  const max = criteria.reduce((n, c) => n + c.points, 0);

  return (
    <div className="border-line rounded-4xl flex flex-col gap-4 border bg-white px-[26px] py-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-display text-[19px] font-bold">
          O‘zini baholash
        </span>
        <span className="tnum text-muted-2 text-[14px]">
          {got} / {max} ball
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {criteria.map((criterion) => {
          const on = checked.includes(criterion.id);
          const check = checks?.find((c) => c.id === criterion.id);
          const badge = check && VERDICT_BADGE[check.verdict];
          return (
            <div
              key={criterion.id}
              className={cn(
                "rounded-2xl border transition-colors",
                on ? "border-ok-bd bg-ok-bg" : "border-line",
              )}
            >
            <button
              type="button"
              aria-pressed={on}
              onClick={() => onToggle(criterion.id)}
              className={cn(
                "flex w-full items-start gap-3 rounded-2xl px-[18px] py-[13px] text-left transition-colors",
                on ? "" : "hover:bg-sand",
              )}
            >
              <span
                className={cn(
                  "mt-[2px] flex h-[20px] w-[20px] flex-none items-center justify-center rounded-[6px] border text-[12px] font-bold",
                  on
                    ? "border-ok-fg bg-ok-fg text-paper"
                    : "border-line-btn text-muted-2",
                )}
              >
                {on ? "✓" : ""}
              </span>
              <span className="flex flex-col gap-[3px]">
                <span className="flex flex-wrap items-center gap-2 text-[15.5px] font-semibold">
                  {criterion.label}{" "}
                  <span className="text-muted-2 tnum font-normal">
                    · {criterion.points} ball
                  </span>
                  {badge && (
                    <span
                      className={cn(
                        "rounded-[6px] px-2 py-[2px] text-[12px] font-semibold",
                        badge.className,
                      )}
                    >
                      {badge.label}
                    </span>
                  )}
                </span>
                <span className="text-muted-3 text-[14.5px] leading-[1.5]">
                  {criterion.question}
                </span>
              </span>
            </button>

            {check && check.findings.length > 0 && (
              <ul className="border-line m-0 flex list-none flex-col gap-[6px] border-t px-[18px] py-3 pl-[51px]">
                {check.findings.map((finding, i) => (
                  <FindingRow key={i} finding={finding} />
                ))}
              </ul>
            )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-petrol cursor-pointer self-start text-[14.5px] font-semibold"
        >
          {open ? "Namunani yashirish" : "Namunaviy javobni ko‘rish →"}
        </button>
        {open && (
          <pre className="bg-sand text-slate m-0 overflow-x-auto rounded-2xl px-5 py-4 font-sans text-[15.5px] leading-[1.6] whitespace-pre-wrap">
            {sample}
          </pre>
        )}
      </div>
    </div>
  );
}
