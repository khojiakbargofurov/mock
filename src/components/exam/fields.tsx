"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import type {
  ChoiceItem,
  FreitextItem,
  GapItem,
  RubricCriterion,
  SprechenItem,
  ZuordnungItem,
} from "@/lib/exam/types";

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
  const [recording, setRecording] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const recorder = React.useRef<MediaRecorder | null>(null);
  const chunks = React.useRef<Blob[]>([]);

  React.useEffect(() => {
    return () => {
      recorder.current?.stream.getTracks().forEach((t) => t.stop());
      if (audioUrl) URL.revokeObjectURL(audioUrl);
    };
  }, [audioUrl]);

  const start = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunks.current = [];
      mr.ondataavailable = (e) => chunks.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunks.current, { type: mr.mimeType });
        // Yozuv faqat shu qurilmada qoladi — hech qayerga yuborilmaydi
        setAudioUrl((old) => {
          if (old) URL.revokeObjectURL(old);
          return URL.createObjectURL(blob);
        });
        stream.getTracks().forEach((t) => t.stop());
      };
      mr.start();
      recorder.current = mr;
      setRecording(true);
      // Rasmiy vaqt tugaganda yozuv o'zi to'xtaydi
      window.setTimeout(() => {
        if (mr.state === "recording") mr.stop();
        setRecording(false);
      }, item.speakSec * 1000);
    } catch {
      setError("Mikrofonga ruxsat berilmadi — javobni yozib qo‘yishingiz mumkin.");
    }
  };

  const stop = () => {
    if (recorder.current?.state === "recording") recorder.current.stop();
    setRecording(false);
  };

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

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={recording ? stop : start}
          className={cn(
            "rounded-lg px-6 py-[14px] text-[15px] font-semibold transition-opacity",
            recording
              ? "bg-danger text-paper"
              : "bg-ink text-paper cursor-pointer hover:opacity-90",
          )}
        >
          {recording ? "■ Yozuvni to‘xtatish" : "● Javobni yozib olish"}
        </button>
        <span className="text-muted-2 tnum text-[13.5px]">
          Tayyorgarlik {item.prepSec} s · gapirish {item.speakSec} s
        </span>
      </div>

      {error && <span className="text-bad-fg text-[14px]">{error}</span>}

      {audioUrl && (
        <audio
          controls
          src={audioUrl}
          className="w-full"
          aria-label="Sizning yozuvingiz"
        />
      )}

      <label className="flex flex-col gap-2">
        <span className="text-muted-3 text-[14.5px]">
          Ixtiyoriy: aytmoqchi bo‘lgan gaplaringizni yozib qo‘ying — natijada
          namuna bilan solishtirasiz.
        </span>
        <textarea
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className="border-line focus:border-ink w-full resize-y rounded-3xl border bg-white px-[22px] py-4 text-[16px] leading-[1.6] outline-none transition-colors"
        />
      </label>
    </div>
  );
}

/** O'zini baholash ro'yxati — Schreiben/Sprechen ballari shundan chiqadi */
export function RubricList({
  criteria,
  checked,
  onToggle,
  sample,
}: {
  criteria: RubricCriterion[];
  checked: string[];
  onToggle: (id: string) => void;
  sample: string;
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
          return (
            <button
              key={criterion.id}
              type="button"
              aria-pressed={on}
              onClick={() => onToggle(criterion.id)}
              className={cn(
                "flex items-start gap-3 rounded-2xl border px-[18px] py-[13px] text-left transition-colors",
                on ? "border-ok-bd bg-ok-bg" : "border-line hover:bg-sand",
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
                <span className="text-[15.5px] font-semibold">
                  {criterion.label}{" "}
                  <span className="text-muted-2 tnum font-normal">
                    · {criterion.points} ball
                  </span>
                </span>
                <span className="text-muted-3 text-[14.5px] leading-[1.5]">
                  {criterion.question}
                </span>
              </span>
            </button>
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
