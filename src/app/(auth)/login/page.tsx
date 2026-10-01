"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Overline } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TelegramLogin } from "@/components/auth/telegram-login";
import { useSession, type SessionUser } from "@/lib/auth/use-session";
import { useApp } from "@/lib/store";

export default function LoginPage() {
  const t = useTranslations("auth");
  const router = useRouter();
  const { user, loading, logout } = useSession();

  const onSuccess = React.useCallback(
    (account: SessionUser) => {
      // Telegram ismi mahalliy profilga ko'chiriladi — ilova offline ham ishlaydi
      useApp.getState().setProfile({
        firstName: account.firstName,
        lastName: account.lastName ?? "",
      });
      router.push("/uebersicht");
    },
    [router],
  );

  if (!loading && user) {
    return (
      <Card className="text-ink flex flex-col gap-7 rounded-[30px] border-white/50 bg-paper px-7 py-8 shadow-[0_30px_90px_rgba(0,0,0,.3)] sm:px-9 sm:py-10">
        <div className="flex flex-col gap-2">
          <Overline className="text-accent">{t("overline")}</Overline>
          <h1 className="font-display m-0 text-[30px] leading-[1.08] font-extrabold tracking-[-.03em]">
            {t("alreadyIn", { name: user.firstName })}
          </h1>
          <p className="text-muted-3 m-0 text-[15.5px] leading-[1.6]">
            {user.username
              ? t("accountMeta", { username: user.username })
              : t("accountMetaNoName")}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/uebersicht"
            className="bg-accent text-ink rounded-xl px-6 py-[15px] text-center text-[15px] font-bold transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-90"
          >
            {t("toApp")}
          </Link>
          <button
            type="button"
            onClick={logout}
            className="border-line-btn text-muted-3 hover:bg-sand cursor-pointer rounded-xl border px-6 py-[15px] text-[15px] font-semibold transition-colors"
          >
            {t("logout")}
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="text-ink flex flex-col gap-5">
      <Card className="flex flex-col gap-7 rounded-[30px] border-white/50 bg-paper px-7 py-8 shadow-[0_30px_90px_rgba(0,0,0,.3)] sm:px-9 sm:py-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <Overline className="text-accent">{t("overline")}</Overline>
            <span className="border-line flex h-10 w-10 items-center justify-center rounded-full border bg-white text-[17px]" aria-hidden>
              ↗
            </span>
          </div>
          <h1 className="font-display m-0 max-w-[12ch] text-[34px] leading-[1.04] font-extrabold tracking-[-.035em] sm:text-[38px]">
            {t("loginTitle")}
          </h1>
          <p className="text-muted-3 m-0 max-w-[38ch] text-[15.5px] leading-[1.55]">
            {t("loginBody")}
          </p>
        </div>

        <TelegramLogin onSuccess={onSuccess} />

        <ol className="border-line-soft text-muted-3 m-0 flex list-none flex-col gap-0 rounded-[20px] border bg-white/70 p-1 text-[13.5px]">
          {(["step1", "step2", "step3"] as const).map((key, i) => (
            <li key={key} className="border-line-soft flex items-start gap-3 border-b px-3 py-3 last:border-b-0">
              <span className="bg-sand text-muted-3 tnum flex h-[24px] w-[24px] flex-none items-center justify-center rounded-full text-[11px] font-bold">
                {i + 1}
              </span>
              <span className="pt-0.5 leading-[1.45]">{t(key)}</span>
            </li>
          ))}
        </ol>
      </Card>

      <span className="text-center text-[14.5px] text-white/45">
        {t("noAccount")}{" "}
        <Link href="/register" className="text-accent font-bold hover:underline">
          {t("toRegister")}
        </Link>
      </span>
    </div>
  );
}
