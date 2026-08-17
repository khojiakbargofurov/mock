"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Overline } from "@/components/ui/badge";
import { Card, StatCard } from "@/components/ui/card";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import { SkillRow } from "@/components/ui/progress";
import { questionById } from "@/lib/questions";
import { formatDay, formatDuration } from "@/lib/format";
import { skillBreakdown, useApp, useHydrated } from "@/lib/store";
import { PASS_SCORE } from "@/lib/types";
import { cn } from "@/lib/cn";

export default function StatistikPage() {
  const t = useTranslations("statistik");
  const router = useRouter();
  const hydrated = useHydrated();
  const attempts = useApp((s) => s.attempts);
  const examAttempts = useApp((s) => s.examAttempts);

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[60px] w-[50%] rounded-xl" />
        <Skeleton className="h-[260px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  if (attempts.length === 0 && examAttempts.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <EmptyState
          size="sm"
          title={t("emptyTitle")}
          body={t("emptyBody")}
          primary={{
            label: t("emptyAction"),
            onClick: () => router.push("/pruefung"),
          }}
        />
      </main>
    );
  }

  const skills = skillBreakdown(attempts, questionById).filter(
    (s) => s.answered > 0,
  );

  // KPI qatorida ikkala rejim ham hisobga olinadi
  const allScores = [
    ...attempts.map((a) => a.score),
    ...examAttempts.map((a) => a.percent),
  ];
  const average = allScores.length
    ? Math.round(allScores.reduce((n, s) => n + s, 0) / allScores.length)
    : 0;
  const best = allScores.length ? Math.max(...allScores) : 0;
  const totalTime =
    attempts.reduce((n, a) => n + a.durationSec, 0) +
    examAttempts.reduce((n, a) => n + a.durationSec, 0);

  return (
    <main className="flex flex-1 flex-col gap-6 px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-col gap-[7px]">
        <Overline className="tracking-[.18em]">{t("overline")}</Overline>
        <h1 className="font-display m-0 text-[28px] font-bold lg:text-[34px]">
          {t("title")}
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-4">
        <StatCard label={t("statAverage")} value={`${average}%`} />
        <StatCard label={t("statBest")} value={`${best}%`} />
        <StatCard
          label={t("statTests")}
          value={String(attempts.length + examAttempts.length)}
        />
        <StatCard label={t("statTime")} value={formatDuration(totalTime)} />
      </div>

      {examAttempts.length > 0 && (
        <Card className="flex flex-col gap-[18px] px-7 py-[26px]">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <Overline>{t("examSection")}</Overline>
            <Link
              href="/pruefung"
              className="text-petrol text-[13.5px] font-semibold"
            >
              {t("examLink")}
            </Link>
          </div>

          <div className="flex flex-col">
            {examAttempts.map((a) => (
              <Link
                key={a.id}
                href={`/pruefung/${a.setId}/ergebnis`}
                className="border-line-soft hover:bg-paper -mx-3 flex items-center justify-between gap-4 rounded-md border-b px-3 py-[14px] transition-colors last:border-b-0"
              >
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold">
                    {a.title}
                    {a.selfAssessed && (
                      <span className="text-muted-2 font-normal">
                        {" "}
                        · {t("selfAssessed")}
                      </span>
                    )}
                  </span>
                  <span className="text-muted-2 text-[12.5px]">
                    {t("examMeta", {
                      date: formatDay(a.finishedAt),
                      raw: a.raw,
                      rawMax: a.rawMax,
                      weighted: a.weighted,
                      weightedMax: a.weightedMax,
                      duration: formatDuration(a.durationSec),
                    })}
                  </span>
                </span>
                <span
                  className={cn(
                    "tnum text-[16px] font-bold",
                    a.percent >= PASS_SCORE ? "text-ink" : "text-danger",
                  )}
                >
                  {a.percent}%
                </span>
              </Link>
            ))}
          </div>
        </Card>
      )}

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card className="flex flex-col gap-[18px] px-7 py-[26px]">
          <Overline>{t("allTests")}</Overline>
          {attempts.length === 0 ? (
            <span className="text-muted-2 text-[14.5px] leading-[1.6]">
              {t("noPractice")}
            </span>
          ) : (
            <div className="flex flex-col">
              {attempts.map((a) => (
                <Link
                  key={a.id}
                  href={`/result/${a.id}`}
                  className="border-line-soft hover:bg-paper -mx-3 flex items-center justify-between gap-4 rounded-md border-b px-3 py-[14px] transition-colors last:border-b-0"
                >
                  <span className="flex flex-col">
                    <span className="text-[15px] font-semibold">{a.title}</span>
                    <span className="text-muted-2 text-[12.5px]">
                      {t("attemptMeta", {
                        date: formatDay(a.finishedAt),
                        correct: a.correctCount,
                        total: a.total,
                        duration: formatDuration(a.durationSec),
                      })}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "tnum text-[16px] font-bold",
                      a.score >= PASS_SCORE ? "text-ink" : "text-danger",
                    )}
                  >
                    {a.score}%
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Card>

        <Card className="flex h-fit flex-col gap-[18px] px-7 py-[26px]">
          <Overline>{t("sections")}</Overline>
          {skills.length === 0 ? (
            <span className="text-muted-2 text-[14.5px] leading-[1.6]">
              {t("noSkills")}
            </span>
          ) : (
            skills.map((s) => (
              <SkillRow key={s.name} name={s.name} value={s.value} size="lg" />
            ))
          )}
          <span className="text-muted-2 text-[13.5px] leading-[1.5]">
            {t("passHint", { pass: PASS_SCORE })}
          </span>
        </Card>
      </div>
    </main>
  );
}
