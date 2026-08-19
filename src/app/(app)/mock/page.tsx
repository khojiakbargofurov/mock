"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Chip, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

/** Profil o'qilgunicha ko'rsatiladigan daraja — store'dagi standart qiymat */
const FALLBACK_LEVEL: Level = "B1";

export default function MockPage() {
  const t = useTranslations("mock");
  const router = useRouter();
  const hydrated = useHydrated();
  const storedLevel = useApp((s) => s.profile.targetLevel);
  const storedTimeLimit = useApp((s) => s.profile.settings.timeLimit);
  const statuses = useLevelStatuses();

  // Darajalar, ko'nikmalar va savol sonlari statik — serverda ham chiziladi.
  // Profildagi maqsad daraja va vaqt chegarasi shaxsiy: gidratatsiyagacha
  // standart qiymat ishlatiladi, shunda server va brauzer bir xil chizadi.
  const targetLevel = hydrated ? storedLevel : FALLBACK_LEVEL;
  const timeLimit = hydrated ? storedTimeLimit : true;

  // Foydalanuvchi hali tanlamagan bo'lsa — profildagi maqsad daraja
  const [chosenLevel, setLevel] = React.useState<Level | null>(null);
  const [skill, setSkill] = React.useState<Skill | null>(null);
  const level = chosenLevel ?? targetLevel;

  const available = questionCount(level, skill);
  const count = Math.min(TEST_LENGTH, available);

  const start = () => {
    const ok = useApp.getState().startSession(level, skill, TEST_LENGTH);
    if (ok) router.push(`/test/${level.toLowerCase()}`);
  };

  return (
    <main className="flex flex-1 flex-col gap-7 px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-col gap-[7px]">
        <Overline className="tracking-[.18em]">{t("overline")}</Overline>
        <h1 className="font-display m-0 text-[28px] font-bold lg:text-[34px]">
          {t("title")}
        </h1>
      </div>

      <section className="flex flex-col gap-3">
        <Overline>{t("level")}</Overline>
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
        <Overline>{t("section")}</Overline>
        <div className="flex flex-wrap gap-[9px]">
          <Chip active={skill === null} onClick={() => setSkill(null)}>
            {t("full")}
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
            {t("summaryTitle", { level, section: skill ?? t("full") })}
          </span>
          <span className="text-muted-3 text-[14.5px]">
            {count > 0
              ? `${t("questions", { count })} · ${
                  timeLimit
                    ? t("minutes", {
                        count: Math.round(
                          (count * SECONDS_PER_QUESTION) / 60,
                        ),
                      })
                    : t("noLimit")
                }`
              : t("empty")}
          </span>
        </div>
        <Button size="lg" disabled={count === 0} onClick={start}>
          {t("start")}
        </Button>
      </div>

      <section className="flex flex-col gap-3">
        <Overline>{t("levelsStatus")}</Overline>
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
