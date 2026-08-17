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
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col gap-6 px-8 py-9">
        <div className="flex flex-col gap-2">
          <Overline>{t("registerOverline")}</Overline>
          <h1 className="font-display m-0 text-[30px] leading-[1.15] font-bold">
            {current ? t("setupTitle") : t("registerTitle")}
          </h1>
          <p className="text-muted-3 m-0 text-[15.5px] leading-[1.6]">
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
            />
            <ul className="text-muted-3 m-0 flex list-none flex-col gap-[10px] p-0 text-[14.5px]">
              {(["benefit1", "benefit2", "benefit3"] as const).map((key) => (
                <li key={key} className="flex gap-3">
                  <span className="text-accent font-bold">·</span>
                  {t(key)}
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
              <div className="flex flex-wrap gap-2">
                {LEVELS.map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={level === value}
                    onClick={() => setLevel(value)}
                    className={cn(
                      "flex flex-col items-start gap-[2px] rounded-2xl border px-[18px] py-3 transition-colors",
                      level === value
                        ? "border-ink bg-sand"
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
                className="border-line-btn focus:border-ink rounded-lg border bg-white px-[14px] py-[12px] text-[16px] outline-none transition-colors"
              />
              <span className="text-muted-2 text-[13.5px]">
                {t("examDateHint")}
              </span>
            </label>

            <Button size="lg" fullWidth onClick={finish}>
              {t("finish")}
            </Button>
          </div>
        )}
      </Card>

      <span className="text-muted-2 text-center text-[14.5px]">
        {t("haveAccount")}{" "}
        <Link href="/login" className="text-petrol font-semibold">
          {t("toLogin")}
        </Link>
      </span>
    </div>
  );
}
