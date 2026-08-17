"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Badge, Overline } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/feedback";
import { ProgressBar } from "@/components/ui/progress";
import { useApp, useHydrated } from "@/lib/store";
import { EXAM_SETS } from "@/lib/exam/registry";
import { formatSpec } from "@/lib/exam/spec";
import { cn } from "@/lib/cn";

export default function PruefungPage() {
  const t = useTranslations("pruefung");
  const hydrated = useHydrated();
  const runs = useApp((s) => s.examRuns);

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[76px] w-[60%] rounded-xl" />
        <Skeleton className="h-[210px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-col gap-[6px]">
        <Overline className="tracking-[.18em]">{t("overline")}</Overline>
        <h1 className="font-display m-0 text-[28px] font-bold lg:text-[32px]">
          {t("title")}
        </h1>
        <p className="text-muted-3 m-0 max-w-[70ch] text-[16px] leading-[1.6]">
          {t("intro")}
        </p>
      </div>

      <div className="grid gap-[14px] xl:grid-cols-2">
        {EXAM_SETS.map((set) => {
          const spec = formatSpec(set.format);
          if (!spec) return null;

          const run = runs[set.id];
          const done = run?.doneModules.length ?? 0;
          const total = spec.modules.length;
          const percent = Math.round((done / total) * 100);

          return (
            <Link
              key={set.id}
              href={`/pruefung/${set.id}`}
              className={cn(
                "border-line rounded-4xl flex flex-col gap-[18px] border bg-white px-[26px] py-[22px]",
                "ease-out-soft transition-[box-shadow,transform] duration-200",
                "hover:shadow-card hover:-translate-y-[2px] active:translate-y-0",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-[6px]">
                  <span className="text-muted-2 text-[12px] tracking-[.14em] uppercase">
                    {spec.provider === "goethe" ? "Goethe-Institut" : "telc"} ·{" "}
                    {set.title}
                  </span>
                  <span className="font-display text-[22px] leading-[1.2] font-bold">
                    {spec.label}
                  </span>
                </div>
                <Badge tone={done === total ? "ok" : "marked"}>
                  {done === total ? t("statusDone") : `${done}/${total}`}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-[7px]">
                {spec.modules.map((m) => (
                  <span
                    key={m.id}
                    className={cn(
                      "rounded-pill px-[13px] py-[6px] text-[13px] font-semibold",
                      run?.doneModules.includes(m.id)
                        ? "bg-ok-bg text-ok-fg"
                        : "bg-sand text-muted-3",
                    )}
                  >
                    {m.label} · {Math.round(m.timeSec / 60)}′
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-[7px]">
                <div className="flex justify-between text-[13.5px]">
                  <span className="text-slate">
                    {t("modulesDone", { done, total })}
                  </span>
                  <span className="text-muted-2 tnum">
                    {spec.totalPoints} {t("points")} · {spec.passPercent}%
                  </span>
                </div>
                <ProgressBar value={percent} size="sm" />
              </div>

              <span className="text-petrol text-[14px] font-semibold">
                {done === 0 ? t("start") : t("continue")} →
              </span>
            </Link>
          );
        })}
      </div>

      <p className="text-muted-2 max-w-[70ch] text-[14px] leading-[1.6]">
        {t("disclaimer")}
      </p>
    </main>
  );
}
