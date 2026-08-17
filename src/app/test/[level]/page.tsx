"use client";

import * as React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Overline } from "@/components/ui/badge";
import { LoadingLine, Skeleton } from "@/components/ui/feedback";
import { SegmentBar } from "@/components/ui/progress";
import { Toggle } from "@/components/ui/toggle";
import {
  FeedbackBlock,
  OptionButton,
  QuestionCard,
} from "@/components/question";
import { cn } from "@/lib/cn";
import { questionCount } from "@/lib/questions";
import { formatClock, LEVELS, type Level } from "@/lib/types";
import { useApp, useHydrated } from "@/lib/store";

export default function TestPage() {
  const t = useTranslations("test");
  const tm = useTranslations("mock");
  const params = useParams<{ level: string }>();
  const router = useRouter();
  const hydrated = useHydrated();

  const level = String(params.level ?? "").toUpperCase() as Level;
  const validLevel = LEVELS.includes(level);

  const session = useApp((s) => s.session);
  const instantFeedback = useApp((s) => s.profile.settings.instantFeedback);
  const focusMode = useApp((s) => s.profile.settings.focusMode);
  const setSetting = useApp((s) => s.setSetting);

  // Bazada savol yo'q bo'lsa sinov boshlanmaydi — bu holat render paytida ma'lum
  const unavailable = validLevel && questionCount(level) === 0;

  // Sinovni boshlash — faqat brauzerda, chunki savollar tasodifiy tanlanadi
  React.useEffect(() => {
    if (!hydrated || !validLevel || unavailable) return;
    const current = useApp.getState().session;
    if (current && current.level === level) return;
    useApp.getState().startSession(level, null);
  }, [hydrated, validLevel, unavailable, level]);

  // Taymer
  const running = Boolean(session);
  React.useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => useApp.getState().tick(), 1000);
    return () => clearInterval(timer);
  }, [running]);

  const finishTest = React.useCallback(() => {
    const id = useApp.getState().finish();
    if (id) router.replace(`/result/${id}`);
  }, [router]);

  // Vaqt tugadi — sinov avtomatik yakunlanadi
  React.useEffect(() => {
    if (session?.remaining === 0) finishTest();
  }, [session?.remaining, finishTest]);

  if (!validLevel) {
    return (
      <CenteredNote
        title={t("invalidLevelTitle")}
        body={t("invalidLevelBody")}
        home={t("home")}
      />
    );
  }

  if (unavailable) {
    return (
      <CenteredNote
        title={t("unavailableTitle", { level })}
        body={t("unavailableBody")}
        home={t("home")}
      />
    );
  }

  if (!hydrated || !session) return <TestSkeleton />;

  const total = session.questions.length;
  const question = session.questions[session.current];
  const picked = session.answers[session.current];
  const revealed = instantFeedback && picked !== null;
  const isCorrect = picked === question.correctIndex;
  const isLast = session.current === total - 1;
  const answeredCount = session.answers.filter((a) => a !== null).length;
  const clock = formatClock(session.remaining ?? session.elapsed);

  const onPick = (i: number) => useApp.getState().answer(i);
  const onNext = () => {
    if (isLast) finishTest();
    else useApp.getState().next();
  };
  const stop = () => {
    useApp.getState().abandon();
    router.push("/");
  };

  const nextLabel = isLast
    ? t("finish")
    : picked === null
      ? t("pick")
      : t("next");

  return (
    <div className="bg-paper min-h-screen lg:grid lg:grid-cols-[248px_minmax(0,1fr)_300px]">
      {/* ── Chap panel ───────────────────────────────────────────── */}
      <aside className="border-line hidden flex-col gap-[26px] border-r bg-white px-[18px] py-7 lg:flex">
        <div className="px-2">
          <Logo />
        </div>
        <nav className="flex flex-col gap-1">
          <span className="bg-sand text-ink flex items-center gap-3 rounded-md px-[14px] py-[11px] text-[15px] font-semibold">
            <span
              aria-hidden
              className="bg-accent h-[6px] w-[6px] rounded-full"
            />
            {t("navLabel")}
          </span>
          <span className="text-muted-2 px-[14px] py-[11px] text-[13.5px] leading-[1.5]">
            {t("navNote")}
          </span>
        </nav>
        <div className="bg-sand mt-auto flex flex-col gap-[10px] rounded-xl p-[18px]">
          <Overline className="text-muted-2">{t("focusTitle")}</Overline>
          <span className="text-muted-3 text-[13.5px] leading-[1.5]">
            {t("focusBody")}
          </span>
          <span className="flex items-center gap-[9px] text-[13.5px] font-semibold">
            <Toggle
              size="sm"
              checked={focusMode}
              onChange={(v) => setSetting("focusMode", v)}
              label={t("focusTitle")}
            />
            {focusMode ? t("focusOn") : t("focusOff")}
          </span>
        </div>
      </aside>

      {/* ── Asosiy ustun ─────────────────────────────────────────── */}
      <main className="flex min-h-screen min-w-0 flex-col gap-[18px] px-5 pt-11 pb-8 lg:min-h-0 lg:gap-[22px] lg:px-10 lg:py-[30px]">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-[14px]">
            <span className="bg-sand rounded-pill px-3 py-[6px] text-[13px] font-semibold tracking-[.02em]">
              {t("badge", {
                level,
                section: session.skill ?? tm("full"),
              })}
            </span>
            <span className="text-muted hidden text-[14px] lg:inline">
              {t("questionOf", { current: session.current + 1, total })}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="border-line tnum flex items-center gap-[9px] rounded-md border bg-white px-4 py-2 text-[16px] font-bold">
              <span aria-hidden className="bg-accent h-2 w-2 rounded-full" />
              {clock}
            </span>
            <button
              type="button"
              onClick={stop}
              className="text-muted hover:text-danger hidden cursor-pointer text-[14px] font-semibold transition-colors lg:inline"
            >
              {t("stop")}
            </button>
          </div>
        </div>

        <SegmentBar
          total={total}
          current={session.current}
          answered={session.answers.map((a) => a !== null)}
        />

        <div className="text-muted flex justify-between text-[12px] lg:hidden">
          <span>
            {t("questionOf", { current: session.current + 1, total })}
          </span>
          <span>{t("answeredCount", { count: answeredCount })}</span>
        </div>

        <QuestionCard question={question} index={session.current} compact />

        <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-3">
          {question.options.map((option, i) => (
            <OptionButton
              key={i}
              option={option}
              index={i}
              picked={picked}
              correctIndex={question.correctIndex}
              revealed={revealed}
              compact
              onPick={onPick}
            />
          ))}
        </div>

        <FeedbackBlock
          visible={revealed}
          correct={isCorrect}
          title={
            isCorrect
              ? t("correct", {
                  answer: question.options[question.correctIndex],
                })
              : t("wrong")
          }
          body={question.explanation}
        />

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Button
            variant="secondary"
            onClick={() => useApp.getState().prev()}
            disabled={session.current === 0}
            className="hidden lg:inline-flex"
          >
            {t("back")}
          </Button>
          <div className="flex w-full gap-3 lg:w-auto">
            <Button
              variant="secondary"
              onClick={() => useApp.getState().toggleFlag()}
              className={cn(
                "flex-none",
                session.flagged[session.current] &&
                  "bg-sand border-line-flag text-ink",
              )}
            >
              {session.flagged[session.current] ? t("flagged") : t("flag")}
            </Button>
            <Button
              onClick={onNext}
              disabled={picked === null}
              className="flex-1 rounded-2xl py-[17px] text-[16.5px] font-bold lg:flex-none"
            >
              {nextLabel}
            </Button>
          </div>
        </div>
      </main>

      {/* ── O'ng panel: savollar xaritasi ────────────────────────── */}
      <aside className="border-line hidden flex-col gap-[22px] border-l bg-white px-6 py-[30px] lg:flex">
        <Overline>{t("questions")}</Overline>
        <div className="grid grid-cols-5 gap-2">
          {session.questions.map((q, i) => {
            const state =
              i === session.current
                ? "now"
                : session.answers[i] !== null
                  ? "done"
                  : session.flagged[i]
                    ? "flag"
                    : "next";
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => useApp.getState().goTo(i)}
                className={cn(
                  "tnum flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border text-[14px] font-semibold transition-transform duration-[160ms] hover:-translate-y-[2px]",
                  state === "now" && "bg-accent text-paper border-transparent",
                  state === "done" && "bg-ink text-paper border-transparent",
                  state === "flag" && "bg-sand border-line-flag text-muted-2",
                  state === "next" && "border-line text-muted-2 bg-white",
                )}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div className="border-line-soft text-muted-3 flex flex-col gap-[9px] border-t pt-[18px] text-[13.5px]">
          <Legend className="bg-ink">{t("legendAnswered")}</Legend>
          <Legend className="bg-accent">{t("legendCurrent")}</Legend>
          <Legend className="bg-sand border-line-flag border">
            {t("legendFlagged")}
          </Legend>
          <Legend className="border-line border bg-white">
            {t("legendRemaining")}
          </Legend>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <span className="text-muted-2 text-[13.5px] leading-[1.5]">
            {t("remaining", { count: total - answeredCount })}
            {answeredCount > 0 &&
              t("avgPer", {
                secs: Math.round(session.elapsed / answeredCount),
              })}
          </span>
          <Button variant="accent" fullWidth size="xl" onClick={finishTest}>
            {t("finish")}
          </Button>
          <button
            type="button"
            onClick={stop}
            className="text-muted hover:text-danger cursor-pointer text-[13.5px] font-semibold transition-colors"
          >
            {t("stop")}
          </button>
        </div>
      </aside>
    </div>
  );
}

function Legend({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-[10px]">
      <span aria-hidden className={cn("h-3 w-3 rounded-xs", className)} />
      {children}
    </span>
  );
}

function CenteredNote({
  title,
  body,
  home,
}: {
  title: string;
  body: string;
  home: string;
}) {
  return (
    <div className="bg-paper flex min-h-screen flex-col items-center justify-center gap-5 px-6 text-center">
      <h1 className="font-display m-0 text-[27px] font-bold">{title}</h1>
      <p className="text-muted-3 m-0 max-w-[44ch] text-[16.5px] leading-[1.55]">
        {body}
      </p>
      <Link
        href="/"
        className="bg-ink text-paper rounded-lg px-6 py-[15px] text-[15px] font-semibold"
      >
        {home}
      </Link>
    </div>
  );
}

/** Dizayndagi 16-freym: "Savollar tayyorlanmoqda…" */
function TestSkeleton() {
  const t = useTranslations("test");

  return (
    <div className="bg-paper flex min-h-screen flex-col gap-4 px-6 pt-11 pb-8 lg:px-10">
      <LoadingLine text={t("loading")} />
      <div className="border-line rounded-4xl flex flex-col gap-3 border bg-white p-6">
        <Skeleton className="h-[11px] w-[38%] rounded-xs" />
        <Skeleton className="h-[19px] w-full rounded-sm" delay={0.1} />
        <Skeleton className="h-[19px] w-[78%] rounded-sm" delay={0.2} />
      </div>
      <div className="flex flex-col gap-3">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[52px] rounded-xl" delay={i * 0.12} />
        ))}
      </div>
      <span className="text-muted mt-auto text-center text-[13.5px] leading-[1.5]">
        {t("breathe")}
      </span>
    </div>
  );
}
