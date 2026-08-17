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
      router.push("/");
    },
    [router],
  );

  if (!loading && user) {
    return (
      <Card className="flex flex-col gap-5 px-8 py-9">
        <div className="flex flex-col gap-2">
          <Overline>{t("overline")}</Overline>
          <h1 className="font-display m-0 text-[26px] font-bold">
            {t("alreadyIn", { name: user.firstName })}
          </h1>
          <p className="text-muted-3 m-0 text-[15.5px] leading-[1.6]">
            {user.username
              ? t("accountMeta", { username: user.username })
              : t("accountMetaNoName")}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="bg-ink text-paper rounded-lg px-6 py-[14px] text-[15px] font-semibold transition-opacity hover:opacity-90"
          >
            {t("toApp")}
          </Link>
          <button
            type="button"
            onClick={logout}
            className="border-line-btn text-muted-3 hover:bg-sand cursor-pointer rounded-lg border px-6 py-[14px] text-[15px] font-semibold transition-colors"
          >
            {t("logout")}
          </button>
        </div>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <Card className="flex flex-col gap-6 px-8 py-9">
        <div className="flex flex-col gap-2">
          <Overline>{t("overline")}</Overline>
          <h1 className="font-display m-0 text-[30px] leading-[1.15] font-bold">
            {t("loginTitle")}
          </h1>
          <p className="text-muted-3 m-0 text-[15.5px] leading-[1.6]">
            {t("loginBody")}
          </p>
        </div>

        <TelegramLogin onSuccess={onSuccess} />

        <ol className="text-muted-3 m-0 flex list-none flex-col gap-[10px] p-0 text-[14.5px]">
          {(["step1", "step2", "step3"] as const).map((key, i) => (
            <li key={key} className="flex gap-3">
              <span className="bg-sand text-muted-3 tnum flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full text-[12px] font-bold">
                {i + 1}
              </span>
              {t(key)}
            </li>
          ))}
        </ol>
      </Card>

      <span className="text-muted-2 text-center text-[14.5px]">
        {t("noAccount")}{" "}
        <Link href="/register" className="text-petrol font-semibold">
          {t("toRegister")}
        </Link>
      </span>
    </div>
  );
}
