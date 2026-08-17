"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Badge, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import { ProgressBar } from "@/components/ui/progress";
import { ScoreRing } from "@/components/ui/score-ring";
import { useApp, useHydrated } from "@/lib/store";
import { examSet } from "@/lib/exam/registry";
import { formatSpec } from "@/lib/exam/spec";
import { itemScore, scoreExam } from "@/lib/exam/score";
import type { ExamItem, ExamSet } from "@/lib/exam/types";
import { cn } from "@/lib/cn";

type Bank = { key: string; label: string }[] | undefined;

/** Variant kalitini o'qiladigan matnga aylantiradi (zuordnung uchun bank kerak) */
function keyLabel(key: string, bank: Bank): string {
  const entry = bank?.find((b) => b.key === key);
  return entry ? `${key} · ${entry.label}` : key;
}

/** Elementning to'g'ri javobi — tahlil ro'yxatida ko'rsatiladi */
function correctLabel(item: ExamItem, bank: Bank): string {
  switch (item.kind) {
    case "choice":
      return (
        item.options.find((o) => o.key === item.correct)?.label ?? item.correct
      );
    case "zuordnung":
      return keyLabel(item.correct, bank);
    case "gap":
      return item.accept[0];
    default:
      return "—";
  }
}

function givenLabel(
  item: ExamItem,
  value: string | undefined,
  bank: Bank,
): string {
  if (!value) return "—";
  if (item.kind === "choice") {
    return item.options.find((o) => o.key === value)?.label ?? value;
  }
  if (item.kind === "zuordnung") return keyLabel(value, bank);
  return value;
}

export default function ExamResultPage() {
  const t = useTranslations("pruefung");
  const params = useParams<{ set: string }>();
  const router = useRouter();
  const hydrated = useHydrated();
  const runs = useApp((s) => s.examRuns);

  const setId = String(params.set ?? "");
  const set = examSet(setId);
  const spec = set && formatSpec(set.format);
  const run = runs[setId];

  if (!set || !spec) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <EmptyState
          title={t("notFoundTitle")}
          body={t("notFoundBody")}
          primary={{ label: t("backToList"), href: "/pruefung" }}
        />
      </main>
    );
  }

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[76px] w-[60%] rounded-xl" />
        <Skeleton className="h-[320px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  if (!run || run.doneModules.length === 0) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <EmptyState
          title={t("noResultTitle")}
          body={t("noResultBody")}
          primary={{ label: t("backToModules"), href: `/pruefung/${setId}` }}
        />
      </main>
    );
  }

  const result = scoreExam(set, run.answers);

  return (
    <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-[6px]">
          <Overline className="tracking-[.18em]">
            {spec.label} · {set.title}
          </Overline>
          <h1 className="font-display m-0 text-[28px] font-bold lg:text-[32px]">
            {result.passed ? t("passedTitle") : t("failedTitle")}
          </h1>
        </div>
        <Link
          href={`/pruefung/${setId}`}
          className="text-petrol text-[14px] font-semibold"
        >
          ← {t("backToModules")}
        </Link>
      </div>

      <div className="grid gap-[14px] xl:grid-cols-[320px_minmax(0,1fr)]">
        <Card tone="ink" className="flex flex-col items-center gap-5 py-8">
          <ScoreRing
            score={result.percent}
            caption={t("ringCaption", {
              points: result.points,
              max: result.maxPoints,
            })}
            size={186}
          />
          <div className="flex flex-col items-center gap-1">
            <span className="font-display text-[21px] font-bold">
              {result.praedikat}
            </span>
            <span className="text-on-dark-muted text-[14px]">
              {t("passMark", { percent: spec.passPercent })}
            </span>
          </div>
        </Card>

        <Card className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-display text-[19px] font-bold">
              {t("byModule")}
            </span>
            {run.doneModules.length < spec.modules.length && (
              <Badge tone="marked">
                {t("partial", {
                  done: run.doneModules.length,
                  total: spec.modules.length,
                })}
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {result.modules.map((m) => (
              <div key={m.id} className="flex flex-col gap-[7px]">
                <div className="flex flex-wrap justify-between gap-2 text-[14.5px]">
                  <span className="font-semibold">
                    {m.label}
                    {m.selfAssessed && (
                      <span className="text-muted-2 font-normal">
                        {" "}
                        · {t("selfAssessed")}
                      </span>
                    )}
                  </span>
                  <span className="tnum text-muted-2">
                    {m.raw} / {m.rawMax} {t("rawPoints")} → {m.weighted} /{" "}
                    {m.weightedMax}
                  </span>
                </div>
                <ProgressBar value={m.percent} size="sm" />
              </div>
            ))}
          </div>

          {result.writtenPercent !== undefined && (
            <span className="text-muted-3 text-[14px]">
              {t("separateRule", {
                written: result.writtenPercent,
                oral: result.oralPercent ?? 0,
                pass: spec.passPercent,
              })}
            </span>
          )}
        </Card>
      </div>

      <Review set={set} values={run.answers.values} />

      <div className="flex flex-wrap gap-3">
        <Button
          variant="accent"
          onClick={() => {
            useApp.getState().resetExamRun(setId);
            router.push(`/pruefung/${setId}`);
          }}
        >
          {t("retake")}
        </Button>
        <Button variant="secondary" onClick={() => router.push("/pruefung")}>
          {t("backToList")}
        </Button>
      </div>
    </main>
  );
}

/** Element-element tahlil: javobingiz, to'g'ri javob va izoh */
function Review({
  set,
  values,
}: {
  set: ExamSet;
  values: Record<string, string>;
}) {
  const t = useTranslations("pruefung");
  const [open, setOpen] = React.useState(false);

  const rows = set.modules.flatMap((mod) =>
    mod.teile.flatMap((teil) =>
      teil.blocks.flatMap((block) =>
        block.items
          .filter((i) => i.kind === "choice" || i.kind === "zuordnung" || i.kind === "gap")
          .map((item) => ({
            moduleId: mod.id,
            teilNr: teil.nr,
            bank: teil.bank,
            item,
            given: values[item.id],
            ok:
              itemScore(item, { values, rubric: {} }) > 0,
            script:
              block.stimulus?.kind === "audio" ? block.stimulus.lines : null,
          })),
      ),
    ),
  );

  const wrong = rows.filter((r) => !r.ok);
  const shown = open ? rows : wrong;

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-display text-[19px] font-bold">
          {t("review")}
        </span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-petrol cursor-pointer text-[14px] font-semibold"
        >
          {open ? t("showWrongOnly") : t("showAll", { count: rows.length })}
        </button>
      </div>

      {shown.length === 0 ? (
        <span className="text-ok-fg text-[15px] font-semibold">
          {t("noMistakes")}
        </span>
      ) : (
        <div className="flex flex-col gap-3">
          {shown.map(({ item, given, ok, moduleId, teilNr, script, bank }) => (
            <div
              key={item.id}
              className={cn(
                "rounded-3xl border px-5 py-4",
                ok ? "border-ok-bd bg-ok-bg/40" : "border-bad-bd bg-bad-bg/40",
              )}
            >
              <div className="flex flex-col gap-[6px]">
                <span className="text-muted-2 text-[12px] tracking-[.14em] uppercase">
                  {moduleId} · Teil {teilNr} · Nr. {item.nr}
                </span>
                <span className="text-[16px] font-semibold">
                  {item.kind === "gap" ? item.label : item.prompt}
                </span>
                <span className="text-[14.5px]">
                  <span className="text-muted-3">{t("yourAnswer")}: </span>
                  <span className={ok ? "text-ok-fg" : "text-bad-fg"}>
                    {givenLabel(item, given, bank)}
                  </span>
                  {!ok && (
                    <>
                      <span className="text-muted-3"> · {t("correct")}: </span>
                      <span className="text-ok-fg font-semibold">
                        {correctLabel(item, bank)}
                      </span>
                    </>
                  )}
                </span>
                <span className="text-muted-3 text-[14.5px] leading-[1.55]">
                  {item.explanation}
                </span>
                {script && (
                  <details className="mt-1">
                    <summary className="text-petrol cursor-pointer text-[13.5px] font-semibold">
                      {t("showScript")}
                    </summary>
                    <div className="text-slate mt-2 flex flex-col gap-1 text-[14.5px] leading-[1.5]">
                      {script.map((line, i) => (
                        <span key={i}>
                          <span className="text-muted-2">{line.voice}: </span>
                          {line.text}
                        </span>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
