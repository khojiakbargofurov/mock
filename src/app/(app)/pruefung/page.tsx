"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Badge, Overline } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/feedback";
import { ProgressBar } from "@/components/ui/progress";
import { useApp, useHydrated } from "@/lib/store";
import { EXAM_SETS } from "@/lib/exam/registry";
import { formatSpec } from "@/lib/exam/spec";
import type { ExamFormat, ExamSet, FormatSpec } from "@/lib/exam/types";
import { cn } from "@/lib/cn";

interface FormatGroup {
  format: ExamFormat;
  spec: FormatSpec;
  sets: ExamSet[];
}

/**
 * Variantlarni formati bo'yicha guruhlaydi.
 * Ro'yxatda har format bir marta ko'rinadi — variant ichida tanlanadi.
 */
function groupByFormat(): FormatGroup[] {
  const groups: FormatGroup[] = [];

  for (const set of EXAM_SETS) {
    const spec = formatSpec(set.format);
    if (!spec) continue;

    const group = groups.find((g) => g.format === set.format);
    if (group) group.sets.push(set);
    else groups.push({ format: set.format, spec, sets: [set] });
  }

  return groups;
}

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

      <div className="grid items-start gap-[14px] xl:grid-cols-2">
        {groupByFormat().map(({ format, spec, sets }) => {
          const total = spec.modules.length;

          // Modul biror variantda topshirilgan bo'lsa, format darajasida ham yashil
          const doneAnywhere = new Set(
            sets.flatMap((s) => runs[s.id]?.doneModules ?? []),
          );
          const doneSets = sets.filter(
            (s) => (runs[s.id]?.doneModules.length ?? 0) === total,
          ).length;
          const percent = Math.round((doneAnywhere.size / total) * 100);

          return (
            <Link
              key={format}
              href={`/pruefung/${format}`}
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
                    {t("variantCount", { count: sets.length })}
                  </span>
                  <span className="font-display text-[22px] leading-[1.2] font-bold">
                    {spec.label}
                  </span>
                </div>
                <Badge tone={doneSets === sets.length ? "ok" : "marked"}>
                  {doneSets === sets.length
                    ? t("statusDone")
                    : `${doneSets}/${sets.length}`}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-[7px]">
                {spec.modules.map((m) => (
                  <span
                    key={m.id}
                    className={cn(
                      "rounded-pill px-[13px] py-[6px] text-[13px] font-semibold",
                      doneAnywhere.has(m.id)
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
                    {t("modulesDone", { done: doneAnywhere.size, total })}
                  </span>
                  <span className="text-muted-2 tnum">
                    {spec.totalPoints} {t("points")} · {spec.passPercent}%
                  </span>
                </div>
                <ProgressBar value={percent} size="sm" />
              </div>

              <span className="text-petrol text-[14px] font-semibold">
                {t("chooseVariant")} →
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
