"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Badge, Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmptyState, Skeleton } from "@/components/ui/feedback";
import { SegmentBar } from "@/components/ui/progress";
import { ScoreRing } from "@/components/ui/score-ring";
import { useApp, useHydrated } from "@/lib/store";
import { cancelSpeech, useSpeech } from "@/lib/speech";
import type { VocabWord } from "@/lib/types";
import { resolveTarget, vocabById } from "@/lib/vocab";
import { cn } from "@/lib/cn";

export default function VocabTrainerPage() {
  const t = useTranslations("wortschatz");
  const params = useParams<{ set: string }>();
  const slug = String(params.set ?? "");
  const hydrated = useHydrated();
  const { speak, supported } = useSpeech();

  const target = resolveTarget(slug);
  const stored = useApp((s) => s.vocabSession);
  const session = stored && stored.slug === slug ? stored : null;

  // Aylanish store'da tuziladi — u joriy vaqtga bog'liq, shuning uchun faqat brauzerda
  React.useEffect(() => {
    if (!hydrated || !resolveTarget(slug)) return;
    const current = useApp.getState().vocabSession;
    // Tugallanmagan aylanish joyidan davom etadi; yakunlangani esa qayta kirilganda
    // xulosani emas, yangi aylanishni ochadi
    if (
      current &&
      current.slug === slug &&
      current.index < current.wordIds.length
    ) {
      return;
    }
    useApp.getState().startVocabSession(slug);
  }, [hydrated, slug]);

  // Ekrandan chiqilganda o'qish to'xtaydi
  React.useEffect(() => cancelSpeech, []);

  const queue: VocabWord[] = session
    ? session.wordIds
        .map(vocabById)
        .filter((w): w is VocabWord => w !== undefined)
    : [];

  const current = session ? queue[session.index] : undefined;
  const finished = Boolean(session) && queue.length > 0 && !current;

  const flip = () => useApp.getState().flipVocabCard();

  const answer = (known: boolean) => {
    cancelSpeech();
    useApp.getState().answerVocabCard(known);
  };

  /**
   * Tugmalar holatga qarab ma'nosini almashtiradi ("Javobni ko'rish" o'rnida
   * "Takrorlash kerak" paydo bo'ladi). Bosilgandan keyin fokus qolsa, probel yoki
   * Enter keyingi ekranda mutlaqo boshqa amalni ishga tushirib yuboradi —
   * shuning uchun fokus bo'shatiladi, klaviatura uchun esa pastdagi tezkor
   * tugmalar (probel · 1 · 2) hujjat darajasida ishlaydi.
   */
  const press =
    (fn: () => void) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.blur();
      fn();
    };

  // Klaviatura: probel — javobni ochish, 1 — takrorlash kerak, 2 — bilaman
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      // Fokus tugma yoki havolada bo'lsa — o'sha elementning o'z amali ishlasin
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && focused.closest("a, button, input"))
        return;

      const active = useApp.getState().vocabSession;
      if (!active || active.slug !== slug) return;
      if (active.index >= active.wordIds.length) return;

      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!active.flipped) useApp.getState().flipVocabCard();
        return;
      }
      if (!active.flipped) return;
      if (e.key === "1") {
        cancelSpeech();
        useApp.getState().answerVocabCard(false);
      }
      if (e.key === "2") {
        cancelSpeech();
        useApp.getState().answerVocabCard(true);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slug]);

  if (!target) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-10">
        <EmptyState
          title={t("notFoundTitle")}
          body={t("notFoundBody")}
          primary={{ label: t("backToSets"), href: "/wortschatz" }}
        />
      </main>
    );
  }

  const heading = target.topic
    ? target.topic
    : target.level
      ? t("mixedLevel", { level: target.level })
      : t("mixed");

  return (
    <main className="mx-auto flex w-full max-w-[760px] flex-1 flex-col gap-[22px] px-6 py-8 lg:py-[34px]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-[6px]">
          <Overline className="tracking-[.18em]">
            {target.level ? `${target.level} · ` : ""}
            {t("overline", { count: target.words.length })}
          </Overline>
          <h1 className="font-display m-0 text-[26px] font-bold lg:text-[30px]">
            {heading}
          </h1>
        </div>
        <Link
          href="/wortschatz"
          className="text-petrol text-[14px] font-semibold"
        >
          ← {t("backToSets")}
        </Link>
      </div>

      {!session || queue.length === 0 ? (
        <Skeleton className="h-[320px] rounded-4xl" />
      ) : finished ? (
        <Summary
          known={session.known}
          wrongIds={session.wrongIds}
          total={queue.length}
          slug={slug}
        />
      ) : (
        current && (
          <>
            <div className="flex flex-col gap-[10px]">
              <div className="text-muted-2 flex justify-between text-[13px]">
                <span className="tnum">
                  {t("counter", {
                    current: session.index + 1,
                    total: queue.length,
                  })}
                </span>
                <span className="tnum">
                  {t("knownCount", { count: session.known })}
                </span>
              </div>
              <SegmentBar
                total={queue.length}
                current={session.index}
                answered={queue.map((_, i) => i < session.index)}
              />
            </div>

            {/* Kartani bosib ham ochish mumkin — asosiy boshqaruv pastdagi tugmada,
                shuning uchun bu blok interaktiv element sifatida e'lon qilinmaydi */}
            <div
              onClick={flip}
              className={cn(
                "border-line rounded-4xl flex min-h-[320px] flex-col gap-[18px] border bg-white px-9 py-[34px] text-left",
                "ease-out-soft transition-shadow duration-200",
                session.flipped
                  ? "cursor-default"
                  : "hover:shadow-card cursor-pointer",
              )}
            >
              <div className="flex items-center justify-between gap-4">
                <Badge tone="marked">{current.kind}</Badge>
                <span className="text-muted-2 text-[12px] tracking-[.14em] uppercase">
                  {current.level} · {current.topic}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-display text-[34px] leading-[1.15] font-extrabold">
                  {current.term}
                </span>
                {current.forms && (
                  <span className="text-muted text-[15px]">{current.forms}</span>
                )}
              </div>

              {session.flipped ? (
                <div className="animate-rise flex flex-col gap-4">
                  <span className="text-[21px] leading-[1.35] font-semibold">
                    {current.meaning}
                  </span>
                  <div className="bg-sand flex flex-col gap-[6px] rounded-2xl px-5 py-4">
                    <span className="text-[17px] leading-[1.5]">
                      {current.example}
                    </span>
                    <span className="text-muted-3 text-[15px] leading-[1.5]">
                      {current.exampleUz}
                    </span>
                  </div>
                  {supported && (
                    <div className="flex flex-wrap gap-[10px]">
                      <SpeakButton
                        label={t("speakTerm")}
                        onClick={() => speak(current.term)}
                      />
                      <SpeakButton
                        label={t("speakExample")}
                        onClick={() => speak(current.example)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <span className="text-muted-3 mt-auto text-[15px]">
                  {t("flipHint")}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-[10px]">
              {session.flipped ? (
                <>
                  <Button
                    variant="secondary"
                    onClick={press(() => answer(false))}
                  >
                    {t("again")}
                  </Button>
                  <Button onClick={press(() => answer(true))}>
                    {t("know")}
                  </Button>
                </>
              ) : (
                <Button variant="accent" onClick={press(flip)}>
                  {t("show")}
                </Button>
              )}
            </div>

            <span className="text-muted-2 hidden text-[13px] lg:block">
              {t("keyboardHint")}
            </span>
          </>
        )
      )}
    </main>
  );
}

function SpeakButton({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        // Karta ustidagi bosish uni qayta ochib yubormasin
        e.stopPropagation();
        onClick();
      }}
      className="border-line-btn text-muted-3 rounded-pill hover:bg-sand cursor-pointer border px-4 py-[9px] text-[14px] font-semibold transition-colors"
    >
      ♪ {label}
    </button>
  );
}

function Summary({
  known,
  wrongIds,
  total,
  slug,
}: {
  known: number;
  wrongIds: string[];
  total: number;
  slug: string;
}) {
  const t = useTranslations("wortschatz");
  const percent = total ? Math.round((known / total) * 100) : 0;

  return (
    <Card tone="ink" className="flex flex-col items-center gap-6 py-9">
      <ScoreRing
        score={percent}
        caption={t("ringCaption", { known, total })}
        size={186}
      />
      <div className="flex flex-col items-center gap-2 text-center">
        <h2 className="font-display m-0 text-[26px] font-bold">
          {wrongIds.length === 0 ? t("doneTitleAll") : t("doneTitle")}
        </h2>
        <p className="text-on-dark-soft m-0 max-w-[44ch] text-[16px] leading-[1.55]">
          {wrongIds.length === 0
            ? t("doneBodyAll")
            : t("doneBody", { count: wrongIds.length })}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[10px]">
        {wrongIds.length > 0 && (
          <Button
            variant="accent"
            onClick={() =>
              useApp.getState().startVocabSession(slug, [...wrongIds])
            }
          >
            {t("repeatWrong", { count: wrongIds.length })}
          </Button>
        )}
        <Button
          variant="secondary"
          className="text-on-dark border-on-dark/25 hover:bg-on-dark/10"
          onClick={() => useApp.getState().startVocabSession(slug)}
        >
          {t("nextRound")}
        </Button>
      </div>
    </Card>
  );
}
