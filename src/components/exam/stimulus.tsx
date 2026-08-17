"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { useScriptSpeech } from "@/lib/speech";
import type { Stimulus } from "@/lib/exam/types";

/**
 * Hörverstehen pleyeri.
 * Imtihon qoidasi: matn faqat belgilangan marta o'ynaydi, orqaga qaytarib
 * bo'lmaydi. Shuning uchun faqat "boshlash" tugmasi bor va limit tugagach
 * tugma o'chadi.
 */
function AudioStimulus({
  blockId,
  situation,
  lines,
  playCount,
  plays,
  onPlay,
}: {
  blockId: string;
  situation?: string;
  lines: { voice: string; text: string }[];
  playCount: 1 | 2;
  plays: number;
  onPlay: (blockId: string) => void;
}) {
  const { play, playing, lineIndex, supported } = useScriptSpeech();
  const left = Math.max(0, playCount - plays);

  const start = () => {
    if (left === 0 || playing) return;
    onPlay(blockId);
    play(lines as never);
  };

  return (
    <div className="border-line rounded-4xl flex flex-col gap-4 border bg-white px-[26px] py-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-muted text-[11.5px] tracking-[.16em] uppercase">
          {situation ?? "Audio"}
        </span>
        <span className="text-muted-2 tnum text-[13px]">
          {playCount}× eshitish mumkin · qoldi: {left}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={start}
          disabled={left === 0 || playing || !supported}
          className={cn(
            "rounded-pill flex h-[54px] w-[54px] flex-none items-center justify-center text-[20px] transition-[opacity,transform] duration-200",
            left === 0 || !supported
              ? "bg-disabled-bg text-disabled-fg cursor-default"
              : playing
                ? "bg-ink text-paper cursor-default"
                : "bg-accent text-ink cursor-pointer hover:opacity-90 active:scale-[.97]",
          )}
          aria-label={playing ? "Audio o‘qilmoqda" : "Audioni boshlash"}
        >
          {playing ? "■" : "▶"}
        </button>

        <div className="flex min-w-0 flex-col gap-[6px]">
          <span className="text-[15px] font-semibold">
            {!supported
              ? "Brauzeringiz nemis ovozini qo‘llab-quvvatlamaydi"
              : playing
                ? "Audio o‘qilmoqda — to‘xtatib bo‘lmaydi"
                : left === 0
                  ? "Bu matnni qayta eshitib bo‘lmaydi"
                  : "Tayyor bo‘lsangiz, boshlang"}
          </span>
          {/* Skript ko'rsatilmaydi — faqat nechanchi gap o'qilayotgani */}
          <div className="flex gap-[5px]" aria-hidden>
            {lines.map((_, i) => (
              <span
                key={i}
                className={cn(
                  "rounded-pill h-[5px] w-8 transition-colors duration-300",
                  i < lineIndex
                    ? "bg-ink"
                    : i === lineIndex
                      ? "bg-accent"
                      : "bg-seg-idle",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TextStimulus({ title, body }: { title?: string; body: string }) {
  return (
    <div className="border-line rounded-4xl flex flex-col gap-3 border bg-white px-[30px] py-7">
      {title && (
        <span className="text-muted text-[11.5px] tracking-[.16em] uppercase">
          {title}
        </span>
      )}
      <p className="text-slate m-0 text-[16.5px] leading-[1.65] whitespace-pre-line">
        {body}
      </p>
    </div>
  );
}

function AnzeigenStimulus({
  entries,
}: {
  entries: { key: string; title?: string; body: string }[];
}) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {entries.map((entry) => (
        <div
          key={entry.key}
          className="border-line rounded-3xl flex flex-col gap-2 border bg-white px-[22px] py-5"
        >
          <span className="bg-sand text-ink rounded-sm px-[9px] py-[2px] text-[13px] font-bold self-start uppercase">
            {entry.key}
          </span>
          {entry.title && (
            <span className="font-display text-[18px] font-bold">
              {entry.title}
            </span>
          )}
          <p className="text-slate m-0 text-[15.5px] leading-[1.55] whitespace-pre-line">
            {entry.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Ko'cha yoki bino lavhasi — dizaynda qog'oz varaq ko'rinishida */
function AushangStimulus({ ort, body }: { ort: string; body: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-muted text-[11.5px] tracking-[.16em] uppercase">
        {ort}
      </span>
      <div className="border-line-btn bg-sand rounded-3xl border border-dashed px-[26px] py-6">
        <p className="m-0 text-[17px] leading-[1.6] font-medium whitespace-pre-line">
          {body}
        </p>
      </div>
    </div>
  );
}

function FormularStimulus({
  title,
  rows,
  renderGap,
}: {
  title: string;
  rows: { label: string; value?: string; gapId?: string }[];
  renderGap: (gapId: string) => React.ReactNode;
}) {
  return (
    <div className="border-line rounded-4xl flex flex-col gap-4 border bg-white px-[26px] py-6">
      <span className="font-display text-[19px] font-bold">{title}</span>
      <div className="flex flex-col">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={cn(
              "grid items-center gap-3 py-[10px] sm:grid-cols-[200px_minmax(0,1fr)]",
              i > 0 && "border-line-soft border-t",
            )}
          >
            <span className="text-muted-3 text-[14.5px]">{row.label}</span>
            {row.gapId ? (
              renderGap(row.gapId)
            ) : (
              <span className="text-[16px] font-semibold">{row.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StimulusView({
  blockId,
  stimulus,
  playCount,
  plays,
  onPlay,
  renderGap,
}: {
  blockId: string;
  stimulus: Stimulus;
  playCount?: 1 | 2;
  plays?: number;
  onPlay?: (blockId: string) => void;
  renderGap?: (gapId: string) => React.ReactNode;
}) {
  switch (stimulus.kind) {
    case "audio":
      return (
        <AudioStimulus
          blockId={blockId}
          situation={stimulus.situation}
          lines={stimulus.lines}
          playCount={playCount ?? 1}
          plays={plays ?? 0}
          onPlay={onPlay ?? (() => {})}
        />
      );
    case "text":
      return <TextStimulus title={stimulus.title} body={stimulus.body} />;
    case "anzeigen":
      return <AnzeigenStimulus entries={stimulus.entries} />;
    case "aushang":
      return <AushangStimulus ort={stimulus.ort} body={stimulus.body} />;
    case "formular":
      return (
        <FormularStimulus
          title={stimulus.title}
          rows={stimulus.rows}
          renderGap={renderGap ?? (() => null)}
        />
      );
  }
}
