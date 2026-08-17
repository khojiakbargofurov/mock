"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/feedback";
import { SkillRow } from "@/components/ui/progress";
import { ScoreRing } from "@/components/ui/score-ring";
import { questionById } from "@/lib/questions";
import { formatDay, formatDuration } from "@/lib/format";
import {
  growth,
  passed,
  skillBreakdown,
  useApp,
  useHydrated,
} from "@/lib/store";
import { weakestTopic } from "@/lib/mistakes";
import { PASS_SCORE } from "@/lib/types";

export default function ResultPage() {
  const t = useTranslations("result");
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const hydrated = useHydrated();

  const attempts = useApp((s) => s.attempts);
  const mistakes = useApp((s) => s.mistakes);

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[60px] w-[60%] rounded-xl" />
        <Skeleton className="h-[320px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  const attempt = attempts.find((a) => a.id === params.id);

  if (!attempt) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
        <h1 className="font-display m-0 text-[27px] font-bold">
          {t("notFoundTitle")}
        </h1>
        <p className="text-muted-3 m-0 max-w-[44ch] text-[16.5px] leading-[1.55]">
          {t("notFoundBody")}
        </p>
        <Button onClick={() => router.push("/")}>{t("home")}</Button>
      </main>
    );
  }

  const verdict =
    attempt.score >= 80
      ? t("verdictGreat")
      : attempt.score >= PASS_SCORE
        ? t("verdictPass")
        : t("verdictFail");

  const skills = skillBreakdown([attempt], questionById).filter(
    (s) => s.answered > 0,
  );
  const weakest = weakestTopic(
    mistakes.filter((m) =>
      attempt.answers.some(
        (a) => a.questionId === m.questionId && !a.isCorrect,
      ),
    ),
  );
  const delta = growth(attempts);
  const avgPerQuestion = Math.round(attempt.durationSec / attempt.total);
  const ok = passed(attempt.score);

  return (
    <main className="flex flex-1 flex-col gap-6 px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-[7px]">
          <Overline className="tracking-[.18em]">
            {t("overline", {
              title: attempt.title,
              date: formatDay(attempt.finishedAt),
            })}
          </Overline>
          <h1 className="font-display m-0 text-[28px] font-bold lg:text-[34px]">
            {verdict}
          </h1>
        </div>
        <div className="flex gap-[10px]">
          <Button
            variant="secondary"
            className="rounded-lg py-[14px]"
            onClick={() => window.print()}
          >
            {t("pdf")}
          </Button>
          <Button
            className="rounded-lg py-[14px]"
            onClick={() => router.push("/fehlerbuch")}
          >
            {t("showMistakes")}
          </Button>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[392px_minmax(0,1fr)]">
        <Card tone="ink" className="flex flex-col items-center gap-5 p-[30px]">
          <ScoreRing
            score={attempt.score}
            caption={t("ringCaption", {
              correct: attempt.correctCount,
              total: attempt.total,
            })}
          />
          <div className="flex w-full justify-around gap-6 border-t border-[rgba(246,242,235,.14)] pt-[6px]">
            <RingStat
              label={t("time")}
              value={formatDuration(attempt.durationSec)}
            />
            <RingStat
              label={t("average")}
              value={t("seconds", { secs: avgPerQuestion })}
            />
            <RingStat label={t("passScore")} value={`${PASS_SCORE}%`} />
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-[18px] px-7 py-[26px]">
            <Overline>{t("sections")}</Overline>
            {skills.map((s) => (
              <SkillRow key={s.name} name={s.name} value={s.value} size="lg" />
            ))}
          </Card>

          <div className="grid flex-1 gap-4 sm:grid-cols-2">
            <Card tone="sand" className="flex flex-col gap-2 p-6">
              <Overline className="text-muted-2 tracking-[.14em]">
                {t("weakest")}
              </Overline>
              {weakest ? (
                <>
                  <span className="font-display text-[21px] leading-[1.25] font-bold">
                    {weakest.topic}
                  </span>
                  <span className="text-muted-3 text-[14px] leading-[1.5]">
                    {t("weakestBody", { count: weakest.count })}
                  </span>
                </>
              ) : (
                <span className="text-muted-3 text-[14px] leading-[1.5]">
                  {t("noMistakes")}
                </span>
              )}
            </Card>

            <Card className="flex flex-col gap-2 p-6">
              <Overline className="text-muted-2 tracking-[.14em]">
                {t("growth")}
              </Overline>
              <span className="font-display text-[21px] font-bold">
                {delta === null
                  ? t("growthNone")
                  : t("growthValue", {
                      delta: `${delta >= 0 ? "+" : ""}${delta}`,
                    })}
              </span>
              <span className="text-muted-3 text-[14px] leading-[1.5]">
                {ok
                  ? t("readyGood", { level: attempt.level })
                  : t("readyMore", {
                      level: attempt.level,
                      pass: PASS_SCORE,
                    })}
              </span>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button
          variant="accent"
          onClick={() => router.push(`/test/${attempt.level.toLowerCase()}`)}
        >
          {t("retake")}
        </Button>
        <Link
          href="/"
          className="text-muted-3 border-line-btn hover:bg-sand rounded-lg border px-6 py-[15px] text-[15px] font-semibold transition-colors"
        >
          {t("home")}
        </Link>
      </div>
    </main>
  );
}

function RingStat({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex flex-col items-center gap-[3px]">
      <span className="text-on-dark-muted text-[12px]">{label}</span>
      <span className="tnum text-[19px] font-bold">{value}</span>
    </span>
  );
}
