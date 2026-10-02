"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Badge, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { useApp, useHydrated } from "@/lib/store";
import { ProgressBar } from "@/components/ui/progress";
import { examSet, examSetsByFormat } from "@/lib/exam/registry";
import { formatSpec, FORMAT_SPECS } from "@/lib/exam/spec";
import type { ExamFormat } from "@/lib/exam/types";
import { cn } from "@/lib/cn";

export default function ExamOverviewPage() {
  const t = useTranslations("pruefung");
  const params = useParams<{ set: string }>();
  const router = useRouter();
  const hydrated = useHydrated();
  const runs = useApp((s) => s.examRuns);
  const [confirmReset, setConfirmReset] = React.useState(false);

  const setId = String(params.set ?? "");

  // Manzil format identifikatori bo'lsa (masalan "goethe-a1"),
  // bu sahifa variant tanlash ro'yxatini ko'rsatadi.
  const asFormat = Object.hasOwn(FORMAT_SPECS, setId)
    ? formatSpec(setId as ExamFormat)
    : undefined;

  const set = examSet(setId);
  const spec = set && formatSpec(set.format);

  if (asFormat) {
    return (
      <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-[6px]">
            <Overline className="tracking-[.18em]">{asFormat.label}</Overline>
            <h1 className="font-display m-0 text-[28px] font-bold lg:text-[32px]">
              {t("chooseVariant")}
            </h1>
            <p className="text-muted-3 m-0 max-w-[62ch] text-[15.5px] leading-[1.6]">
              {t("variantsIntro", {
                count: examSetsByFormat(setId).length,
                points: asFormat.totalPoints,
                pass: asFormat.passPercent,
              })}
            </p>
          </div>
          <Link href="/pruefung" className="text-petrol text-[14px] font-semibold">
            ← {t("backToList")}
          </Link>
        </div>

        {!hydrated ? (
          <Skeleton className="h-[300px] rounded-4xl" />
        ) : (
          <div className="grid gap-[14px] xl:grid-cols-2">
            {examSetsByFormat(setId).map((s) => {
              const done = runs[s.id]?.doneModules.length ?? 0;
              const total = asFormat.modules.length;

              return (
                <Link
                  key={s.id}
                  href={`/pruefung/${s.id}`}
                  className={cn(
                    "border-line rounded-4xl flex flex-col gap-[14px] border bg-white px-[26px] py-[22px]",
                    "ease-out-soft transition-[box-shadow,transform] duration-200",
                    "hover:shadow-card hover:-translate-y-[2px] active:translate-y-0",
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-display text-[21px] leading-[1.2] font-bold">
                      {s.title}
                    </span>
                    <Badge tone={done === total ? "ok" : "marked"}>
                      {done === total ? t("statusDone") : `${done}/${total}`}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-[7px]">
                    <span className="text-slate text-[13.5px]">
                      {t("modulesDone", { done, total })}
                    </span>
                    <ProgressBar
                      value={Math.round((done / total) * 100)}
                      size="sm"
                    />
                  </div>

                  <span className="text-petrol text-[14px] font-semibold">
                    {done === 0
                      ? t("start")
                      : done === total
                        ? t("showResult")
                        : t("continue")}{" "}
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </main>
    );
  }

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
        <Skeleton className="h-[300px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  const run = runs[setId];
  const doneModules = run?.doneModules ?? [];
  const allDone = spec.modules.every((m) => doneModules.includes(m.id));
  const nextModule = spec.modules.find((m) => !doneModules.includes(m.id));
  const totalMinutes = spec.modules.reduce(
    (minutes, module) => minutes + Math.round(module.timeSec / 60),
    0,
  );

  return (
    <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div className="flex flex-col gap-[6px]">
          <Overline className="tracking-[.18em]">
            {spec.label} · {set.title}
          </Overline>
          <h1 className="font-display m-0 text-[28px] font-bold lg:text-[32px]">
            {t("modulesTitle")}
          </h1>
        </div>
        <Link href="/pruefung" className="text-petrol text-[14px] font-semibold">
          ← {t("backToList")}
        </Link>
      </div>

      {!allDone && nextModule && (
        <div className="bg-ink text-on-dark rounded-4xl flex flex-wrap items-center justify-between gap-5 px-6 py-5 lg:px-7">
          <div className="flex max-w-[62ch] flex-col gap-[5px]">
            <Overline className="text-on-dark-muted">{t("fullExamOverline")}</Overline>
            <span className="font-display text-[21px] font-bold">
              {doneModules.length > 0 ? t("fullExamContinue") : t("fullExamTitle")}
            </span>
            <span className="text-on-dark-muted text-[14px] leading-[1.5]">
              {t("fullExamMeta", {
                modules: spec.modules.length,
                minutes: totalMinutes,
              })}
            </span>
          </div>
          <Button
            variant="accent"
            onClick={() => {
              if (useApp.getState().startExamModule(setId, nextModule.id, true)) {
                router.push(`/modul/${setId}/${nextModule.id}`);
              }
            }}
          >
            {doneModules.length > 0 ? t("fullExamResume") : t("fullExamStart")}
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {spec.modules.map((m) => {
          const done = doneModules.includes(m.id);
          const teile = set.modules.find((x) => x.id === m.id)?.teile ?? [];

          return (
            <div
              key={m.id}
              className={cn(
                "border-line rounded-4xl grid items-center gap-5 border bg-white px-[26px] py-[22px]",
                "lg:grid-cols-[minmax(0,1fr)_auto]",
              )}
            >
              <div className="flex flex-col gap-[7px]">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-[21px] font-bold">
                    {m.label}
                  </span>
                  {done && <Badge tone="ok">{t("moduleDone")}</Badge>}
                </div>
                <span className="text-muted-3 text-[14.5px]">
                  {t("moduleMeta", {
                    minutes: Math.round(m.timeSec / 60),
                    teile: teile.length,
                    items: m.teile.reduce((n, x) => n + x.itemCount, 0),
                    points: m.weighted,
                  })}
                </span>
              </div>

              <Button
                variant={done ? "secondary" : "primary"}
                onClick={() => {
                  if (useApp.getState().startExamModule(setId, m.id)) {
                    router.push(`/modul/${setId}/${m.id}`);
                  }
                }}
              >
                {done ? t("moduleRetake") : t("moduleStart")}
              </Button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="accent"
          disabled={!allDone}
          onClick={() => router.push(`/pruefung/${setId}/ergebnis`)}
        >
          {allDone ? t("showResult") : t("resultLocked")}
        </Button>
        {run && (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="text-muted-2 hover:text-ink cursor-pointer text-[14px] font-semibold transition-colors"
          >
            {t("reset")}
          </button>
        )}
      </div>
      <ConfirmDialog
        open={confirmReset}
        title={t("resetConfirmTitle")}
        body={t("resetConfirmBody")}
        confirmLabel={t("resetConfirmAction")}
        cancelLabel={t("cancel")}
        danger
        onCancel={() => setConfirmReset(false)}
        onConfirm={() => {
          useApp.getState().resetExamRun(setId);
          setConfirmReset(false);
        }}
      />
    </main>
  );
}
