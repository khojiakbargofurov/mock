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
  manual?: boolean;
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
  flow = "login",
}: {
  onSuccess: (user: SessionUser, isNew: boolean) => void;
  labelStart?: string;
  flow?: "login" | "register";
}) {
  const t = useTranslations("auth");
  const [phase, setPhase] = React.useState<Phase>("idle");
  const [link, setLink] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [seconds, setSeconds] = React.useState(0);
  const [manual, setManual] = React.useState(false);
  const tokenRef = React.useRef<string | null>(null);

  // Holatni so'rab turish — token tasdiqlangach sessiya o'rnatiladi
  React.useEffect(() => {
    if (phase !== "waiting" || manual) return;

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
        } else if (data.status === "expired") {
          setPhase("expired");
        }
      } catch {
        // Tarmoq uzilishi — keyingi urinishda davom etadi
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [manual, phase, onSuccess]);

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
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ flow }),
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
      setManual(Boolean(data.manual));
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
        <div className="border-line rounded-[20px] flex items-center gap-4 border bg-white px-5 py-4">
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
                : manual
                  ? t("manualHint", {
                      time: `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`,
                    })
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
              className="bg-accent text-ink rounded-xl px-6 py-[14px] text-[15px] font-bold transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-90"
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
        variant="accent"
        size="lg"
        fullWidth
        onClick={start}
        disabled={phase === "starting"}
        className={cn(
          "flex items-center justify-center gap-3 rounded-xl font-bold shadow-[0_12px_28px_rgba(201,138,62,.18)] hover:-translate-y-0.5",
          phase === "starting" && "opacity-80",
        )}
      >
        <span aria-hidden className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M20.7 3.4 2.8 10.3c-1.2.5-1.2 1.1-.2 1.4l4.6 1.4 1.7 5.2c.2.6.1.9.8.9.5 0 .8-.2 1-.4l2.2-2.1 4.6 3.4c.9.5 1.5.2 1.7-.8l3-14.2c.3-1.2-.5-1.8-1.5-1.4Zm-2.2 3.2-8.3 7.5-.3 3.1-1.6-5 9.6-6.1c.5-.3.9-.1.6.5Z" />
          </svg>
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
