"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Badge, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import { useApp, useHydrated } from "@/lib/store";
import { examSet } from "@/lib/exam/registry";
import { formatSpec } from "@/lib/exam/spec";
import { cn } from "@/lib/cn";

export default function ExamOverviewPage() {
  const t = useTranslations("pruefung");
  const params = useParams<{ set: string }>();
  const router = useRouter();
  const hydrated = useHydrated();
  const runs = useApp((s) => s.examRuns);

  const setId = String(params.set ?? "");
  const set = examSet(setId);
  const spec = set && formatSpec(set.format);

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
            onClick={() => useApp.getState().resetExamRun(setId)}
            className="text-muted-2 hover:text-ink cursor-pointer text-[14px] font-semibold transition-colors"
          >
            {t("reset")}
          </button>
        )}
      </div>
    </main>
  );
}
