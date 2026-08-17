"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Chip, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/feedback";
import { ProgressBar } from "@/components/ui/progress";
import { useApp, useHydrated } from "@/lib/store";
import { useNow } from "@/lib/now";
import { LEVELS, type Level } from "@/lib/types";
import { reviewSlug, setStats, vocabSets, VOCAB_BANK } from "@/lib/vocab";
import { cn } from "@/lib/cn";

export default function WortschatzPage() {
  const t = useTranslations("wortschatz");
  const router = useRouter();
  const hydrated = useHydrated();
  const vocab = useApp((s) => s.vocab);
  const now = useNow();
  const [level, setLevel] = React.useState<Level | null>(null);

  const sets = React.useMemo(() => vocabSets(level), [level]);
  const words = React.useMemo(() => sets.flatMap((s) => s.words), [sets]);
  const totals = setStats(words, vocab, now);

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[76px] w-[60%] rounded-xl" />
        <div className="grid gap-[14px] sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-[78px] rounded-2xl" delay={i * 0.1} />
          ))}
        </div>
        <div className="grid gap-[14px] xl:grid-cols-2">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton
              key={i}
              className="h-[164px] rounded-4xl"
              delay={0.12 + i * 0.1}
            />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-[6px]">
          <Overline className="tracking-[.18em]">
            {t("overline", { count: totals.total })}
          </Overline>
          <h1 className="font-display m-0 text-[28px] font-bold lg:text-[32px]">
            {t("title")}
          </h1>
        </div>
        <Button
          variant="accent"
          className="rounded-lg py-[14px]"
          disabled={totals.due === 0}
          onClick={() => router.push(`/wortschatz/${reviewSlug(level)}`)}
        >
          {totals.due > 0
            ? t("reviewToday", { count: totals.due })
            : t("reviewDone")}
        </Button>
      </div>

      <div className="grid gap-[14px] sm:grid-cols-3">
        <StatCard label={t("statLearned")} value={`${totals.learned}`} />
        <StatCard label={t("statDue")} value={`${totals.due}`} />
        <StatCard label={t("statFresh")} value={`${totals.fresh}`} />
      </div>

      <div className="flex flex-wrap gap-[9px]">
        <Chip active={level === null} onClick={() => setLevel(null)}>
          {t("all")}
        </Chip>
        {LEVELS.map((lv) => (
          <Chip
            key={lv}
            active={level === lv}
            count={VOCAB_BANK[lv].length}
            onClick={() => setLevel(lv)}
          >
            {lv}
          </Chip>
        ))}
      </div>

      <div className="grid gap-[14px] xl:grid-cols-2">
        {sets.map((set) => {
          const stats = setStats(set.words, vocab, now);

          return (
            <Link
              key={set.slug}
              href={`/wortschatz/${set.slug}`}
              className={cn(
                "border-line rounded-4xl flex flex-col gap-[18px] border bg-white px-[26px] py-[22px]",
                "ease-out-soft transition-[box-shadow,transform] duration-200",
                "hover:shadow-card hover:-translate-y-[2px] active:translate-y-0",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-[6px]">
                  <span className="text-muted-2 text-[12px] tracking-[.14em] uppercase">
                    {set.level} · {t("wordCount", { count: stats.total })}
                  </span>
                  <span className="font-display text-[21px] leading-[1.25] font-bold">
                    {set.topic}
                  </span>
                </div>
                {stats.due > 0 ? (
                  <span className="bg-sand text-muted-3 rounded-pill flex-none px-[14px] py-[7px] text-[13px] font-semibold">
                    {t("dueBadge", { count: stats.due })}
                  </span>
                ) : (
                  <span className="bg-ok-bg text-ok-fg rounded-pill flex-none px-[14px] py-[7px] text-[13px] font-semibold">
                    {t("restBadge")}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[7px]">
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-slate">
                    {t("learnedOf", {
                      learned: stats.learned,
                      total: stats.total,
                    })}
                  </span>
                  <span className="text-muted-2 tnum">{stats.percent}%</span>
                </div>
                <ProgressBar value={stats.percent} size="sm" />
              </div>

              <span className="text-petrol text-[14px] font-semibold">
                {stats.fresh === stats.total ? t("start") : t("continue")} →
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
