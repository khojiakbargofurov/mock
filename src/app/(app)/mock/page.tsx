"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Chip, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/feedback";
import {
  LevelCardRow,
  LevelCardTall,
  useLevelStatuses,
} from "@/components/level-card";
import { questionCount } from "@/lib/questions";
import { useApp, useHydrated, SECONDS_PER_QUESTION } from "@/lib/store";
import { LEVELS, SKILLS, type Level, type Skill } from "@/lib/types";
import { cn } from "@/lib/cn";

const TEST_LENGTH = 12;

export default function MockPage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const targetLevel = useApp((s) => s.profile.targetLevel);
  const timeLimit = useApp((s) => s.profile.settings.timeLimit);
  const statuses = useLevelStatuses();

  const [level, setLevel] = React.useState<Level>(targetLevel);
  const [skill, setSkill] = React.useState<Skill | null>(null);

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[60px] w-[50%] rounded-xl" />
        <Skeleton className="h-[220px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  const available = questionCount(level, skill);
  const count = Math.min(TEST_LENGTH, available);

  const start = () => {
    const ok = useApp.getState().startSession(level, skill, TEST_LENGTH);
    if (ok) router.push(`/test/${level.toLowerCase()}`);
  };

  return (
    <main className="flex flex-1 flex-col gap-7 px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-col gap-[7px]">
        <Overline className="tracking-[.18em]">Mock Tests</Overline>
        <h1 className="font-display m-0 text-[28px] font-bold lg:text-[34px]">
          Sinovni sozlang
        </h1>
      </div>

      <section className="flex flex-col gap-3">
        <Overline>Daraja</Overline>
        <div className="flex flex-wrap gap-[9px]">
          {LEVELS.map((lv) => {
            const locked = questionCount(lv) === 0;
            return (
              <button
                key={lv}
                type="button"
                disabled={locked}
                onClick={() => setLevel(lv)}
                className={cn(
                  "rounded-md border-[1.5px] px-5 py-[11px] text-[15.5px] transition-colors duration-[180ms]",
                  level === lv
                    ? "bg-ink border-ink text-paper font-bold"
                    : "border-line-strong text-muted-3 bg-white font-semibold",
                  locked
                    ? "cursor-not-allowed opacity-50"
                    : level !== lv && "hover:bg-sand cursor-pointer",
                )}
              >
                {lv}
              </button>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Overline>Bo‘lim</Overline>
        <div className="flex flex-wrap gap-[9px]">
          <Chip active={skill === null} onClick={() => setSkill(null)}>
            Vollständig
          </Chip>
          {SKILLS.map((sk) => {
            const n = questionCount(level, sk);
            return (
              <Chip
                key={sk}
                active={skill === sk}
                count={n}
                onClick={() => n > 0 && setSkill(sk)}
                className={n === 0 ? "cursor-not-allowed opacity-50" : undefined}
              >
                {sk}
              </Chip>
            );
          })}
        </div>
      </section>

      <div className="border-line flex flex-wrap items-center justify-between gap-5 rounded-3xl border bg-white px-7 py-6">
        <div className="flex flex-col gap-1">
          <span className="font-display text-[21px] font-bold">
            {level} · {skill ?? "Vollständig"}
          </span>
          <span className="text-muted-3 text-[14.5px]">
            {count > 0
              ? `${count} savol${
                  timeLimit
                    ? ` · ${Math.round((count * SECONDS_PER_QUESTION) / 60)} daqiqa`
                    : " · vaqt cheklovsiz"
                }`
              : "Bu tanlov uchun savol hali yo‘q"}
          </span>
        </div>
        <Button size="lg" disabled={count === 0} onClick={start}>
          Sinovni boshlash
        </Button>
      </div>

      <section className="flex flex-col gap-3">
        <Overline>Darajalar holati</Overline>
        <div className="hidden grid-cols-2 gap-[14px] lg:grid">
          {statuses.map((s) => (
            <LevelCardTall key={s.level} status={s} />
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:hidden">
          {statuses.map((s) => (
            <LevelCardRow key={s.level} status={s} />
          ))}
        </div>
      </section>
    </main>
  );
}
