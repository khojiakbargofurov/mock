"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/feedback";
import type { SessionUser } from "@/lib/auth/use-session";
import { cn } from "@/lib/cn";

type Phase = "idle" | "starting" | "waiting" | "done" | "expired" | "error";

interface StartResponse {
  token: string;
  link: string | null;
  bot: string;
  expiresIn: number;
  message?: string;
}

/**
 * Telegram bot orqali kirish.
 *
 * Oqim: brauzer bir martalik token oladi → foydalanuvchi botda "Start"
 * bosadi → bot tokenni tasdiqlaydi → brauzer holatni so'rab turadi va
 * sessiya cookie'sini oladi. Parol ham, SMS ham kerak emas.
 */
export function TelegramLogin({
  onSuccess,
  labelStart,
}: {
  onSuccess: (user: SessionUser, isNew: boolean) => void;
  labelStart?: string;
}) {
  const t = useTranslations("auth");
  const [phase, setPhase] = React.useState<Phase>("idle");
  const [link, setLink] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [seconds, setSeconds] = React.useState(0);
  const tokenRef = React.useRef<string | null>(null);

  // Holatni so'rab turish — token tasdiqlangach sessiya o'rnatiladi
  React.useEffect(() => {
    if (phase !== "waiting") return;

    const timer = setInterval(async () => {
      const token = tokenRef.current;
      if (!token) return;

      try {
        const response = await fetch(
          `/api/auth/telegram/status?token=${encodeURIComponent(token)}`,
          { cache: "no-store" },
        );
        const data = (await response.json()) as {
          status: string;
          user?: SessionUser;
        };

        if (data.status === "approved" && data.user) {
          setPhase("done");
          onSuccess(data.user, data.user.createdAt > Date.now() - 60_000);
        } else if (data.status === "expired" || data.status === "unknown") {
          setPhase("expired");
        }
      } catch {
        // Tarmoq uzilishi — keyingi urinishda davom etadi
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [phase, onSuccess]);

  // Qolgan vaqt
  React.useEffect(() => {
    if (phase !== "waiting") return;
    const timer = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setPhase("expired");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  const start = async () => {
    setPhase("starting");
    setError(null);

    try {
      const response = await fetch("/api/auth/telegram/start", {
        method: "POST",
      });
      const data = (await response.json()) as StartResponse;

      if (!response.ok || !data.link) {
        setError(data.message ?? t("errorGeneric"));
        setPhase("error");
        return;
      }

      tokenRef.current = data.token;
      setLink(data.link);
      setSeconds(data.expiresIn);
      setPhase("waiting");
      // Telegram'ni yangi oynada ochamiz — brauzerdagi kutish sahifasi qoladi
      window.open(data.link, "_blank", "noopener,noreferrer");
    } catch {
      setError(t("errorGeneric"));
      setPhase("error");
    }
  };

  if (phase === "waiting" || phase === "done") {
    return (
      <div className="flex flex-col gap-5">
        <div className="border-line rounded-3xl flex items-center gap-4 border bg-white px-5 py-4">
          {phase === "done" ? (
            <span className="bg-ok-bg text-ok-fg flex h-10 w-10 flex-none items-center justify-center rounded-full text-[18px]">
              ✓
            </span>
          ) : (
            <Spinner className="h-10 w-10 border-[3px]" />
          )}
          <div className="flex flex-col gap-1">
            <span className="text-[16px] font-semibold">
              {phase === "done" ? t("approved") : t("waiting")}
            </span>
            <span className="text-muted-2 tnum text-[13.5px]">
              {phase === "done"
                ? t("redirecting")
                : t("waitingHint", {
                    time: `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`,
                  })}
            </span>
          </div>
        </div>

        {phase === "waiting" && link && (
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-ink text-paper rounded-lg px-6 py-[14px] text-[15px] font-semibold transition-opacity hover:opacity-90"
            >
              {t("openTelegram")}
            </a>
            <button
              type="button"
              onClick={start}
              className="text-muted-2 hover:text-ink cursor-pointer text-[14px] font-semibold transition-colors"
            >
              {t("restart")}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Button
        size="lg"
        fullWidth
        onClick={start}
        disabled={phase === "starting"}
        className={cn(
          "flex items-center justify-center gap-3",
          phase === "starting" && "opacity-80",
        )}
      >
        <span aria-hidden className="text-[18px]">
          ✈
        </span>
        {phase === "starting" ? t("starting") : (labelStart ?? t("loginWithTelegram"))}
      </Button>

      {phase === "expired" && (
        <span className="text-muted-3 text-[14px]">{t("expired")}</span>
      )}
      {phase === "error" && error && (
        <span className="text-bad-fg text-[14px] leading-[1.5]">{error}</span>
      )}
    </div>
  );
}
