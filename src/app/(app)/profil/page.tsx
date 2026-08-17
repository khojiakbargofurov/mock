"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Overline } from "@/components/ui/badge";
import { Avatar, Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/feedback";
import { SettingRow } from "@/components/ui/toggle";
import { averageScore, useApp, useHydrated } from "@/lib/store";
import { formatDay } from "@/lib/format";
import { daysUntil, useNow } from "@/lib/now";
import { initials, LEVELS, PASS_SCORE, type Level } from "@/lib/types";
import { useSession } from "@/lib/auth/use-session";
import { cn } from "@/lib/cn";

const UI_LANGS = [
  { code: "uz", label: "O‘zbek" },
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
] as const;

export default function ProfilPage() {
  const hydrated = useHydrated();
  const profile = useApp((s) => s.profile);
  const attempts = useApp((s) => s.attempts);
  const setProfile = useApp((s) => s.setProfile);
  const setSetting = useApp((s) => s.setSetting);
  const days = daysUntil(profile.examDate, useNow());

  if (!hydrated) {
    return (
      <main className="flex flex-1 flex-col gap-4 px-6 py-8 lg:px-10">
        <Skeleton className="h-[76px] w-[60%] rounded-xl" />
        <Skeleton className="h-[320px] rounded-4xl" delay={0.12} />
      </main>
    );
  }

  const readiness = attempts.length ? averageScore(attempts) : 0;

  return (
    <main className="flex flex-1 flex-col gap-[22px] px-6 py-8 lg:px-10 lg:py-[34px]">
      <div className="flex flex-wrap items-center gap-5">
        <Avatar
          initials={initials(profile.firstName, profile.lastName)}
          size={76}
        />
        <div className="flex flex-col gap-[5px]">
          <h1 className="font-display m-0 text-[26px] font-bold lg:text-[30px]">
            {profile.firstName} {profile.lastName}
          </h1>
          <span className="text-muted text-[15px]">
            {profile.targetLevel} · Streak {profile.streak} Tage
          </span>
        </div>
      </div>

      <AccountCard />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="flex flex-col gap-5 px-[30px] py-7">
          <Overline>Sinov sozlamalari</Overline>

          <SettingRow
            title="Vaqt cheklovi"
            description="Har savol uchun taymer ko‘rsatiladi"
            checked={profile.settings.timeLimit}
            onChange={(v) => setSetting("timeLimit", v)}
          />
          <SettingRow
            divider
            title="Darhol javobni ko‘rsatish"
            description="Sinov oxirida emas, har savoldan keyin"
            checked={profile.settings.instantFeedback}
            onChange={(v) => setSetting("instantFeedback", v)}
          />
          <SettingRow
            divider
            title="Kunlik eslatma"
            description="19:00 · haftaning ish kunlari"
            checked={profile.settings.dailyReminder}
            onChange={(v) => setSetting("dailyReminder", v)}
          />

          <div className="border-line-soft flex flex-col gap-[10px] border-t pt-[18px]">
            <span className="text-[16px] font-semibold">Maqsadli daraja</span>
            <div className="flex flex-wrap gap-[9px]">
              {LEVELS.map((lv) => (
                <button
                  key={lv}
                  type="button"
                  onClick={() => setProfile({ targetLevel: lv as Level })}
                  className={cn(
                    "cursor-pointer rounded-md border-[1.5px] px-[18px] py-[11px] text-[15px] transition-colors duration-[180ms]",
                    profile.targetLevel === lv
                      ? "bg-ink border-ink text-paper font-bold"
                      : "border-line-strong text-muted-3 hover:bg-sand bg-white font-semibold",
                  )}
                >
                  {lv}
                </button>
              ))}
            </div>
          </div>

          <div className="border-line-soft flex flex-col gap-[10px] border-t pt-[18px]">
            <span className="text-[16px] font-semibold">Prüfungstermin</span>
            <input
              type="date"
              value={profile.examDate ?? ""}
              onChange={(e) => setProfile({ examDate: e.target.value || null })}
              className="border-line-strong focus:border-accent w-fit rounded-lg border-[1.5px] bg-white px-[18px] py-[13px] text-[16px] outline-none transition-colors"
            />
            <span className="text-muted-2 text-[14px]">
              {days === null
                ? "Sanani belgilasangiz, yon panelda qolgan kunlar ko‘rinadi."
                : `Imtihongacha ${days} kun qoldi.`}
            </span>
          </div>

          <div className="border-line-soft flex flex-col gap-[10px] border-t pt-[18px]">
            <span className="text-[16px] font-semibold">Interfeys tili</span>
            <div className="flex flex-wrap gap-[9px]">
              {UI_LANGS.map((lang) => {
                const on = profile.settings.uiLang === lang.code;
                const ready = lang.code === "uz";
                return (
                  <button
                    key={lang.code}
                    type="button"
                    disabled={!ready}
                    onClick={() => setSetting("uiLang", lang.code)}
                    className={cn(
                      "rounded-md border-[1.5px] px-[18px] py-[11px] text-[15px] font-semibold transition-colors duration-[180ms]",
                      on
                        ? "bg-ink border-ink text-paper"
                        : "border-line-strong text-muted-3 bg-white",
                      ready
                        ? !on && "hover:bg-sand cursor-pointer"
                        : "cursor-not-allowed opacity-50",
                    )}
                  >
                    {lang.label}
                  </button>
                );
              })}
            </div>
            <span className="text-muted-2 text-[14px]">
              Deutsch va English tarjimalari keyingi bosqichda qo‘shiladi.
            </span>
          </div>
        </Card>

        <div className="flex flex-col gap-4">
          <Card tone="ink" className="flex flex-col gap-[10px] p-[26px]">
            <Overline className="text-on-dark-muted tracking-[.14em]">
              Tayyorlik darajasi
            </Overline>
            <span className="font-display tnum text-[40px] leading-none font-extrabold">
              {readiness}%
            </span>
            <div className="rounded-pill h-2 overflow-hidden bg-[rgba(246,242,235,.14)]">
              <div
                className="bg-accent rounded-pill h-full transition-[width] duration-500"
                style={{ width: `${readiness}%` }}
              />
            </div>
            <span className="text-on-dark-muted text-[14px] leading-[1.5]">
              {days === null
                ? `O‘tish balli ${PASS_SCORE}%. Haftada 3 mock test tavsiya etiladi.`
                : `${profile.targetLevel} imtihoniga ${days} kun qoldi. Haftada 3 mock test rejasi.`}
            </span>
          </Card>

          <Card className="flex flex-1 flex-col gap-[14px] p-6">
            <Overline>Oxirgi natijalar</Overline>
            {attempts.length === 0 ? (
              <span className="text-muted-2 text-[13.5px]">
                Hali sinov topshirmadingiz.
              </span>
            ) : (
              attempts.slice(0, 4).map((a) => (
                <Link
                  key={a.id}
                  href={`/result/${a.id}`}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="flex flex-col">
                    <span className="text-[14.5px] font-medium">{a.title}</span>
                    <span className="text-muted-2 text-[12.5px]">
                      {formatDay(a.finishedAt)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "tnum text-[15px] font-bold",
                      a.score >= PASS_SCORE ? "text-ink" : "text-danger",
                    )}
                  >
                    {a.score}%
                  </span>
                </Link>
              ))
            )}
          </Card>
        </div>
      </div>
    </main>
  );
}

/**
 * Hisob bloki — Telegram sessiyasi shu yerda ko'rinadi.
 * Kirmagan bo'lsa, kirish va ro'yxatdan o'tish havolalari chiqadi.
 */
function AccountCard() {
  const t = useTranslations("auth");
  const { user, loading, logout } = useSession();

  if (loading) {
    return <Skeleton className="h-[104px] rounded-4xl" />;
  }

  if (!user) {
    return (
      <Card className="flex flex-wrap items-center justify-between gap-4 px-[30px] py-6">
        <div className="flex flex-col gap-[5px]">
          <Overline>{t("overline")}</Overline>
          <span className="text-[16px] font-semibold">{t("guestTitle")}</span>
          <span className="text-muted-3 text-[14.5px]">{t("guestBody")}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="bg-ink text-paper rounded-lg px-6 py-[13px] text-[15px] font-semibold transition-opacity hover:opacity-90"
          >
            {t("loginWithTelegram")}
          </Link>
          <Link
            href="/register"
            className="border-line-btn text-muted-3 hover:bg-sand rounded-lg border px-6 py-[13px] text-[15px] font-semibold transition-colors"
          >
            {t("toRegister")}
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex flex-wrap items-center justify-between gap-4 px-[30px] py-6">
      <div className="flex flex-col gap-[5px]">
        <Overline>{t("overline")}</Overline>
        <span className="text-[16px] font-semibold">
          {user.firstName} {user.lastName ?? ""}
        </span>
        <span className="text-muted-3 text-[14.5px]">
          {user.username
            ? t("accountMeta", { username: user.username })
            : t("accountMetaNoName")}
        </span>
      </div>
      <button
        type="button"
        onClick={logout}
        className="border-line-btn text-muted-3 hover:bg-sand cursor-pointer rounded-lg border px-6 py-[13px] text-[15px] font-semibold transition-colors"
      >
        {t("logout")}
      </button>
    </Card>
  );
}
