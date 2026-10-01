"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Overline } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TelegramLogin } from "@/components/auth/telegram-login";
import { useSession, type SessionUser } from "@/lib/auth/use-session";
import { useApp } from "@/lib/store";
import { LEVELS, LEVEL_NAMES, type Level } from "@/lib/types";
import { cn } from "@/lib/cn";

/**
 * Telegram bilan alohida "ro'yxatdan o'tish" bo'lmaydi: birinchi kirish
 * hisobni yaratadi. Shuning uchun bu sahifa ikki qadamdan iborat —
 * Telegram bilan tanishtirish, keyin maqsad darajasi va imtihon sanasi.
 */
export default function RegisterPage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const { user, loading } = useSession();
  const profile = useApp((s) => s.profile);
  const setProfile = useApp((s) => s.setProfile);

  const [account, setAccount] = React.useState<SessionUser | null>(null);
  const [level, setLevel] = React.useState<Level>(profile.targetLevel);
  const [examDate, setExamDate] = React.useState(profile.examDate ?? "");

  const current = account ?? (loading ? null : user);

  const onSuccess = React.useCallback((next: SessionUser) => {
    useApp.getState().setProfile({
      firstName: next.firstName,
      lastName: next.lastName ?? "",
    });
    setAccount(next);
  }, []);

  const finish = () => {
    setProfile({ targetLevel: level, examDate: examDate || null });
    router.push("/uebersicht");
  };

  return (
    <div className="text-ink flex flex-col gap-5">
      <Card className="flex flex-col gap-7 rounded-[30px] border-white/50 bg-paper px-7 py-8 shadow-[0_30px_90px_rgba(0,0,0,.3)] sm:px-9 sm:py-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Overline className="text-accent">{t("registerOverline")}</Overline>
            <span className="border-line flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[17px]" aria-hidden>
              +
            </span>
          </div>
          <h1 className="font-display m-0 max-w-[13ch] text-[34px] leading-[1.04] font-extrabold tracking-[-.035em] sm:text-[38px]">
            {current ? t("setupTitle") : t("registerTitle")}
          </h1>
          <p className="text-muted-3 m-0 max-w-[40ch] text-[15.5px] leading-[1.55]">
            {current
              ? t("setupBody", { name: current.firstName })
              : t("registerBody")}
          </p>
        </div>

        {!current ? (
          <>
            <TelegramLogin
              onSuccess={onSuccess}
              labelStart={t("registerWithTelegram")}
              flow="register"
            />
            <ul className="border-line-soft text-muted-3 m-0 flex list-none flex-col gap-0 rounded-[20px] border bg-white/70 p-1 text-[13.5px]">
              {(["benefit1", "benefit2", "benefit3"] as const).map((key) => (
                <li key={key} className="border-line-soft flex items-start gap-3 border-b px-3 py-3 last:border-b-0">
                  <span className="bg-accent/15 text-ink flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px] font-bold">✓</span>
                  <span className="leading-[1.45]">{t(key)}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[15px] font-semibold">
                {t("targetLevel")}
              </span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {LEVELS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={level === value}
                    onClick={() => setLevel(value)}
                    className={cn(
                      "flex flex-col items-start gap-[2px] rounded-2xl border px-4 py-3 transition-[border-color,background-color,transform] hover:-translate-y-0.5",
                      level === value
                        ? "border-accent bg-sand shadow-[inset_0_0_0_1px_var(--color-accent)]"
                        : "border-line hover:border-line-hover bg-white",
                    )}
                  >
                    <span className="font-display text-[18px] font-bold">
                      {value}
                    </span>
                    <span className="text-muted-2 text-[12.5px]">
                      {LEVEL_NAMES[value]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-[15px] font-semibold">
                {t("examDate")}
              </span>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="border-line-btn focus:border-accent rounded-xl border bg-white px-4 py-[14px] text-[16px] outline-none transition-[border-color,box-shadow] focus:ring-4 focus:ring-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]"
              />
              <span className="text-muted-2 text-[13.5px]">
                {t("examDateHint")}
              </span>
            </label>

            <Button variant="accent" size="lg" fullWidth onClick={finish} className="rounded-xl font-bold">
              {t("finish")}
            </Button>
          </div>
        )}
      </Card>

      <span className="text-center text-[14.5px] text-white/45">
        {t("haveAccount")}{" "}
        <Link href="/login" className="text-accent font-bold hover:underline">
          {t("toLogin")}
        </Link>
      </span>
    </div>
  );
}
