"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/card";
import { LoadingLine, Skeleton } from "@/components/ui/feedback";
import { SkillRow } from "@/components/ui/progress";
import {
  LevelCardRow,
  LevelCardTall,
  useLevelStatuses,
} from "@/components/level-card";
import { questionById } from "@/lib/questions";
import { formatDay, greetingKey } from "@/lib/format";
import {
  averageScore,
  skillBreakdown,
  useApp,
  useHydrated,
} from "@/lib/store";
import { weakestTopic } from "@/lib/mistakes";
import { PASS_SCORE } from "@/lib/types";
import { cn } from "@/lib/cn";

export default function DashboardPage() {
  const t = useTranslations("dashboard");
  const tg = useTranslations("greeting");
  const hydrated = useHydrated();
  const router = useRouter();
  const profile = useApp((s) => s.profile);
  const attempts = useApp((s) => s.attempts);
  const mistakes = useApp((s) => s.mistakes);
  const statuses = useLevelStatuses();

  if (!hydrated) return <DashboardSkeleton />;

  const openMistakes = mistakes.filter((m) => !m.mastered);
  const skills = skillBreakdown(attempts, questionById);
  const weakest = weakestTopic(mistakes);
  const answered = skills.some((s) => s.answered > 0);

  return (
    <div className="flex flex-1 flex-col xl:flex-row">
      <main className="flex min-w-0 flex-1 flex-col gap-7 px-6 py-8 lg:px-9 lg:py-[34px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-[7px]">
            <span className="text-muted text-[12px] tracking-[.18em] uppercase">
              {t("hello", {
                greeting: tg(greetingKey()),
                name: profile.firstName,
              })}
            </span>
            <h1 className="font-display m-0 text-[30px] leading-[1.15] font-bold lg:text-[34px]">
              {t("titleLine1")}
              <br className="lg:hidden" /> {t("titleLine2")}
            </h1>
          </div>
          <Button
            size="md"
            className="rounded-lg py-[14px]"
            onClick={() =>
              router.push(`/test/${profile.targetLevel.toLowerCase()}`)
            }
          >
            {t("continue", { level: profile.targetLevel })}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-[14px] lg:grid-cols-3">
          <StatCard
            label={t("statAverage")}
            value={attempts.length ? `${averageScore(attempts)}%` : "—"}
          />
          <StatCard label={t("statTests")} value={String(attempts.length)} />
          <StatCard
            label={t("statMistakes")}
            value={String(openMistakes.length)}
            className="col-span-2 lg:col-span-1"
          />
        </div>

        <div className="hidden flex-1 grid-cols-2 gap-[14px] lg:grid">
          {statuses.map((s) => (
            <LevelCardTall key={s.level} status={s} />
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          {statuses.map((s) => (
            <LevelCardRow key={s.level} status={s} />
          ))}
        </div>

        {attempts.length > 0 && (
          <div className="border-line-strong text-muted flex items-center justify-between border-t pt-[14px] text-[13px] xl:hidden">
            <span>
              {t("lastTest", {
                date: formatDay(attempts[0].finishedAt),
                score: attempts[0].score,
              })}
            </span>
            <Link href="/statistik" className="text-petrol font-semibold">
              {t("history")}
            </Link>
          </div>
        )}
      </main>

      <aside className="border-line flex w-full flex-none flex-col gap-[26px] border-l bg-white px-[26px] py-[34px] xl:w-[320px]">
        <div className="flex flex-col gap-[14px]">
          <Overline>{t("skills")}</Overline>
          {answered ? (
            skills.map((s) => (
              <SkillRow key={s.name} name={s.name} value={s.value} size="sm" />
            ))
          ) : (
            <p className="text-muted-2 m-0 text-[13.5px] leading-[1.5]">
              {t("skillsEmpty")}
            </p>
          )}
        </div>

        <div className="border-line-soft flex flex-col gap-3 border-t pt-[22px]">
          <Overline>{t("lastResults")}</Overline>
          {attempts.length === 0 ? (
            <p className="text-muted-2 m-0 text-[13.5px] leading-[1.5]">
              {t("noAttempts")}
            </p>
          ) : (
            attempts.slice(0, 4).map((a) => (
              <Link
                key={a.id}
                href={`/result/${a.id}`}
                className="flex items-center justify-between gap-3"
              >
                <span className="flex flex-col">
                  <span className="text-ink text-[14.5px] font-medium">
                    {a.title}
                  </span>
                  <span className="text-muted-2 text-[12.5px]">
                    {formatDay(a.finishedAt)}
                  </span>
                </span>
                <span
                  className={cn(
                    "tnum text-[15px] font-bold",
                    a.score >= PASS_SCORE ? "text-ink" : "text-danger",
                  )}
                >
                  {a.score}%
                </span>
              </Link>
            ))
          )}
        </div>

        <div className="bg-ink text-on-dark mt-auto flex flex-col gap-[6px] rounded-xl p-[18px]">
          <Overline className="text-on-dark-muted">{t("weakest")}</Overline>
          {weakest ? (
            <>
              <span className="text-[16px] leading-[1.35] font-semibold">
                {weakest.topic}
              </span>
              <span className="text-on-dark-muted text-[13.5px]">
                {t("weakestMeta", {
                  skill: weakest.skill,
                  count: weakest.count,
                })}
              </span>
              <Link
                href="/fehlerbuch"
                className="text-accent mt-1 text-[13.5px] font-semibold"
              >
                {t("openFehlerbuch")}
              </Link>
            </>
          ) : (
            <span className="text-on-dark-muted text-[13.5px] leading-[1.5]">
              {t("weakestEmpty")}
            </span>
          )}
        </div>
      </aside>
    </div>
  );
}

/** Dizayndagi 05/16-freym: yuklanish holati */
function DashboardSkeleton() {
  const t = useTranslations("dashboard");

  return (
    <main className="flex flex-1 flex-col gap-6 px-6 py-8 lg:px-9 lg:py-[34px]">
      <LoadingLine text={t("loading")} />
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((i) => (
          <Skeleton key={i} className="h-[74px] rounded-xl" delay={i * 0.12} />
        ))}
      </div>
      <div className="grid flex-1 grid-cols-1 gap-3 lg:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[120px] rounded-4xl" delay={i * 0.12} />
        ))}
      </div>
    </main>
  );
}
