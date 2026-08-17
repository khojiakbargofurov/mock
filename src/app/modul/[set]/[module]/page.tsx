"use client";

import * as React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/app-shell";
import { Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import {
  ChoiceField,
  FreitextField,
  GapField,
  RubricList,
  SprechenField,
  ZuordnungField,
} from "@/components/exam/fields";
import { StimulusView } from "@/components/exam/stimulus";
import { useApp, useHydrated } from "@/lib/store";
import { examSet, moduleItems } from "@/lib/exam/registry";
import { formatSpec, moduleSpec } from "@/lib/exam/spec";
import { isAnswered } from "@/lib/exam/score";
import { cancelSpeech } from "@/lib/speech";
import { formatClock } from "@/lib/types";
import type { ExamItem, ModuleId } from "@/lib/exam/types";
import { cn } from "@/lib/cn";

/**
 * Modulni yakunlaydi va keyingi ekranga o'tkazadi.
 * Komponentdan tashqarida — shunda React Compiler memoizatsiyasiga tegmaydi.
 */
function completeModule(setId: string, router: ReturnType<typeof useRouter>) {
  cancelSpeech();
  useApp.getState().finishExamModule();

  const run = useApp.getState().examRuns[setId];
  const set = examSet(setId);
  const total = set ? (formatSpec(set.format)?.modules.length ?? 0) : 0;
  const done = run?.doneModules.length ?? 0;

  router.replace(
    total > 0 && done === total
      ? `/pruefung/${setId}/ergebnis`
      : `/pruefung/${setId}`,
  );
}

export default function ExamModulePage() {
  const t = useTranslations("pruefung");
  const params = useParams<{ set: string; module: string }>();
  const router = useRouter();
  const hydrated = useHydrated();

  const setId = String(params.set ?? "");
  const moduleId = String(params.module ?? "") as ModuleId;

  const set = examSet(setId);
  const spec = set && formatSpec(set.format);
  const ms = spec && moduleSpec(spec, moduleId);
  const mod = set?.modules.find((m) => m.id === moduleId);

  const stored = useApp((s) => s.examSession);
  const runs = useApp((s) => s.examRuns);
  const session =
    stored && stored.setId === setId && stored.moduleId === moduleId
      ? stored
      : null;
  const answers = runs[setId]?.answers;

  // Sessiya store'da ochiladi — taymer va audio hisobi shu yerda saqlanadi
  React.useEffect(() => {
    if (!hydrated) return;
    const current = useApp.getState().examSession;
    if (current && current.setId === setId && current.moduleId === moduleId) {
      return;
    }
    useApp.getState().startExamModule(setId, moduleId);
  }, [hydrated, setId, moduleId]);

  const running = Boolean(session);
  React.useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => useApp.getState().tickExam(), 1000);
    return () => clearInterval(timer);
  }, [running]);

  React.useEffect(() => cancelSpeech, []);

  const finish = () => completeModule(setId, router);

  // Vaqt tugadi — modul avtomatik yakunlanadi
  React.useEffect(() => {
    if (session?.remaining !== 0) return;
    completeModule(setId, router);
  }, [session?.remaining, setId, router]);

  if (!set || !spec || !ms || !mod) {
    return (
      <main className="bg-paper flex min-h-screen items-center justify-center px-6">
        <EmptyState
          title={t("notFoundTitle")}
          body={t("notFoundBody")}
          primary={{ label: t("backToList"), href: "/pruefung" }}
        />
      </main>
    );
  }

  if (!hydrated || !session || !answers) {
    return (
      <main className="bg-paper flex min-h-screen flex-col gap-4 px-6 py-8">
        <Skeleton className="h-[60px] rounded-xl" />
        <Skeleton className="h-[320px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  const teil = mod.teile[Math.min(session.teilIndex, mod.teile.length - 1)];
  const items = moduleItems(set, moduleId);
  const teilItems = teil.blocks.flatMap((b) => b.items);
  const answered = items.filter((i) => isAnswered(i, answers)).length;
  const lowTime = session.remaining <= 60;

  const setAnswer = (itemId: string, value: string) =>
    useApp.getState().setExamAnswer(itemId, value);

  const renderItem = (item: ExamItem) => {
    switch (item.kind) {
      case "choice":
        return (
          <ChoiceField
            key={item.id}
            item={item}
            value={answers.values[item.id]}
            onChange={(v) => setAnswer(item.id, v)}
          />
        );
      case "zuordnung": {
        // Har variant bir marta ishlatiladi — qaysi harfni kim olganini ko'rsatamiz
        const usedBy: Record<string, number> = {};
        for (const other of teilItems) {
          if (other.id === item.id) continue;
          const chosen = answers.values[other.id];
          if (chosen) usedBy[chosen] = other.nr;
        }
        return (
          <ZuordnungField
            key={item.id}
            item={item}
            bank={teil.bank ?? []}
            usedBy={usedBy}
            value={answers.values[item.id]}
            onChange={(v) => setAnswer(item.id, v)}
          />
        );
      }
      case "gap":
        // Blanka ichida ko'rsatiladi (renderGap orqali)
        return null;
      case "freitext":
        return (
          <div key={item.id} className="flex flex-col gap-4">
            <FreitextField
              item={item}
              value={answers.values[item.id]}
              onChange={(v) => setAnswer(item.id, v)}
            />
            <RubricList
              criteria={item.criteria}
              checked={answers.rubric[item.id] ?? []}
              onToggle={(c) => useApp.getState().toggleExamRubric(item.id, c)}
              sample={item.sample}
            />
          </div>
        );
      case "sprechen":
        return (
          <div key={item.id} className="flex flex-col gap-4">
            <SprechenField
              item={item}
              value={answers.values[item.id]}
              onChange={(v) => setAnswer(item.id, v)}
            />
            <RubricList
              criteria={item.criteria}
              checked={answers.rubric[item.id] ?? []}
              onToggle={(c) => useApp.getState().toggleExamRubric(item.id, c)}
              sample={item.sample}
            />
          </div>
        );
    }
  };

  return (
    <div className="bg-paper flex min-h-screen flex-col">
      <header className="border-line sticky top-0 z-20 flex flex-wrap items-center justify-between gap-4 border-b bg-white/95 px-6 py-4 backdrop-blur lg:px-10">
        <div className="flex items-center gap-5">
          <Logo />
          <span className="text-muted-2 hidden text-[13.5px] lg:block">
            {spec.label}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-muted-2 tnum text-[13.5px]">
            {t("answeredOf", { answered, total: items.length })}
          </span>
          <span
            className={cn(
              "font-display tnum rounded-lg px-4 py-2 text-[19px] font-bold",
              lowTime ? "bg-bad-bg text-bad-fg" : "bg-sand text-ink",
            )}
            aria-live="polite"
          >
            {formatClock(session.remaining)}
          </span>
          <Button size="sm" variant="secondary" onClick={finish}>
            {t("finishModule")}
          </Button>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[980px] flex-1 flex-col gap-6 px-6 py-8 lg:py-10">
        <div className="flex flex-col gap-[6px]">
          <Overline className="tracking-[.18em]">
            {ms.label} · {t("teilOf", { nr: teil.nr, total: mod.teile.length })}
          </Overline>
          <h1 className="font-display m-0 text-[24px] leading-[1.3] font-bold lg:text-[27px]">
            {teil.instruction}
          </h1>
          {teil.hint && (
            <p className="text-muted-3 m-0 text-[15.5px]">{teil.hint}</p>
          )}
        </div>

        {teil.bank && (
          <div className="border-line rounded-3xl flex flex-wrap gap-2 border bg-white px-5 py-4">
            {teil.bank.map((b) => (
              <span
                key={b.key}
                className="bg-sand rounded-pill px-[14px] py-[7px] text-[14px] font-semibold"
              >
                <span className="text-muted uppercase">{b.key}</span> ·{" "}
                {b.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-8">
          {teil.blocks.map((block) => (
            <div key={block.id} className="flex flex-col gap-5">
              {block.stimulus && (
                <StimulusView
                  blockId={block.id}
                  stimulus={block.stimulus}
                  playCount={teil.playCount}
                  plays={session.plays[block.id] ?? 0}
                  onPlay={(id) => useApp.getState().registerPlay(id)}
                  renderGap={(gapId) => {
                    const item = block.items.find((i) => i.id === gapId);
                    if (!item || item.kind !== "gap") return null;
                    return (
                      <GapField
                        item={item}
                        value={answers.values[item.id]}
                        onChange={(v) => setAnswer(item.id, v)}
                      />
                    );
                  }}
                />
              )}
              {block.items.some((i) => i.kind !== "gap") && (
                <div className="flex flex-col gap-6">
                  {block.items.map(renderItem)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-line-soft flex flex-wrap items-center justify-between gap-3 border-t pt-6">
          <Button
            variant="secondary"
            disabled={session.teilIndex === 0}
            onClick={() => useApp.getState().goToTeil(session.teilIndex - 1)}
          >
            {t("prevTeil")}
          </Button>

          {session.teilIndex < mod.teile.length - 1 ? (
            <Button
              onClick={() => {
                cancelSpeech();
                useApp.getState().goToTeil(session.teilIndex + 1);
                window.scrollTo({ top: 0 });
              }}
            >
              {t("nextTeil")}
            </Button>
          ) : (
            <Button variant="accent" onClick={finish}>
              {t("finishModule")}
            </Button>
          )}
        </div>

        <Link
          href={`/pruefung/${setId}`}
          onClick={() => useApp.getState().leaveExamModule()}
          className="text-muted-2 hover:text-ink self-start text-[13.5px] transition-colors"
        >
          {t("abortModule")}
        </Link>
      </main>
    </div>
  );
}
