"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Chip, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import { openMistakes } from "@/lib/mistakes";
import { useApp, useHydrated } from "@/lib/store";
import { cn } from "@/lib/cn";

export default function FehlerbuchPage() {
  const t = useTranslations("fehlerbuch");
  const router = useRouter();
  const hydrated = useHydrated();
  const mistakes = useApp((s) => s.mistakes);
  const markMastered = useApp((s) => s.markMastered);
  const [filter, setFilter] = React.useState<string | null>(null);

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-3 px-6 py-8 lg:px-10">
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} className="h-[110px] rounded-3xl" delay={i * 0.12} />
        ))}
      </main>
    );
  }

  const entries = openMistakes(mistakes);

  if (entries.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <EmptyState
          title={t("emptyTitle")}
          body={t("emptyBody")}
          primary={{ label: t("emptyAction"), onClick: () => router.push("/uebersicht") }}
        />
      </main>
    );
  }

  // Chiplar mavjud kategoriyalardan tuziladi: Übung'da ko'nikma, Prüfung'da modul
  const counts = [...new Set(entries.map((e) => e.category))].map(
    (category) => ({
      category,
      count: entries.filter((e) => e.category === category).length,
    }),
  );

  const shown = filter ? entries.filter((e) => e.category === filter) : entries;
  const drillable = entries.filter((e) => e.drillable).length;

  const startDrill = () => {
    const level = useApp.getState().startDrill();
    if (level) router.push(`/test/${level.toLowerCase()}`);
  };

  return (
    <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-[6px]">
          <Overline className="tracking-[.18em]">
            {t("overline", { count: entries.length })}
          </Overline>
          <h1 className="font-display m-0 text-[28px] font-bold lg:text-[32px]">
            {t("title")}
          </h1>
        </div>
        <Button
          variant="accent"
          className="rounded-lg py-[14px]"
          disabled={drillable === 0}
          onClick={startDrill}
        >
          {drillable > 0 ? t("drill") : t("drillEmpty")}
        </Button>
      </div>

      <div className="flex flex-wrap gap-[9px]">
        <Chip active={filter === null} onClick={() => setFilter(null)}>
          {t("all")}
        </Chip>
        {counts.map(({ category, count }) => (
          <Chip
            key={category}
            active={filter === category}
            count={count}
            onClick={() => setFilter(category)}
          >
            {category}
          </Chip>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {shown.map((entry) => (
          <div
            key={entry.id}
            className={cn(
              "border-line rounded-3xl border bg-white px-[26px] py-[22px]",
              "grid items-center gap-6 transition-[box-shadow,transform] duration-200",
              "hover:shadow-card hover:-translate-y-[2px]",
              "lg:grid-cols-[minmax(0,1fr)_200px_220px]",
            )}
          >
            <div className="flex flex-col gap-[7px]">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-sm px-[8px] py-[2px] text-[11px] font-bold tracking-[.1em] uppercase",
                    entry.source === "pruefung"
                      ? "bg-ink text-paper"
                      : "bg-sand text-muted-3",
                  )}
                >
                  {entry.source === "pruefung" ? t("srcExam") : t("srcPractice")}
                </span>
                <span className="text-muted-2 text-[12px] tracking-[.14em] uppercase">
                  {entry.origin}
                  {entry.wrongCount > 1 &&
                    t("wrongTimes", { count: entry.wrongCount })}
                </span>
              </div>
              <span className="font-display text-[19px] leading-[1.35] font-medium lg:text-[21px]">
                {entry.prompt}
              </span>
            </div>

            <div className="flex flex-col items-start gap-[7px]">
              <span className="text-muted-2 text-[12.5px]">
                {t("yourAnswer")}
              </span>
              <span className="bg-bad-bg text-bad-fg rounded-sm px-[10px] py-1 text-[14px] font-semibold">
                {entry.given ?? t("noAnswer")}
              </span>
              <span className="text-ok-fg text-[13.5px] font-semibold">
                {t("correct", { answer: entry.correct })}
              </span>
            </div>

            <div className="flex flex-col items-start gap-3">
              <span className="text-muted-3 text-[14.5px] leading-[1.55]">
                {entry.explanation}
              </span>
              <button
                type="button"
                onClick={() => markMastered(entry.id)}
                className="text-petrol cursor-pointer text-[13.5px] font-semibold"
              >
                {t("mastered")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {drillable === 0 && (
        <span className="text-muted-2 max-w-[70ch] text-[13.5px] leading-[1.6]">
          {t("examDrillHint")}
        </span>
      )}
    </main>
  );
}
