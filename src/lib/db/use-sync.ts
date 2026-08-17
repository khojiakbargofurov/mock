"use client";

import * as React from "react";
import { useApp, useHydrated } from "@/lib/store";
import { useSession } from "@/lib/auth/use-session";

/** Sinxronlanadigan holat — store'ning faqat foydalanuvchi ma'lumotlari */
function snapshot() {
  const s = useApp.getState();
  return {
    profile: s.profile,
    profileUpdatedAt: s.profileUpdatedAt,
    attempts: s.attempts,
    examAttempts: s.examAttempts,
    mistakes: s.mistakes,
    vocab: s.vocab,
    examRuns: s.examRuns,
  };
}

export type SyncPhase = "off" | "syncing" | "ok" | "error";

/**
 * Bulut bilan sinxron.
 *
 * Kirgan foydalanuvchi uchun: ilova ochilganda mahalliy holat serverga
 * yuboriladi, server uni o'zinikiga qo'shib qaytaradi (hech narsa yo'qolmaydi),
 * keyin har o'zgarishdan 3 soniya o'tib yana yuboriladi.
 *
 * Kirmagan bo'lsa — hech narsa qilmaydi, ilova offline ishlayveradi.
 */
export function useCloudSync() {
  const { user, loading } = useSession();
  const hydrated = useHydrated();
  const [phase, setPhase] = React.useState<SyncPhase>("off");
  const [syncedAt, setSyncedAt] = React.useState<number | null>(null);

  const active = Boolean(user) && hydrated && !loading;

  // 1. Boshlang'ich birlashtirish
  React.useEffect(() => {
    if (!active) return;
    let cancelled = false;

    fetch("/api/sync", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(snapshot()),
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (cancelled || !data?.state) {
          if (!cancelled) setPhase("error");
          return;
        }
        useApp.getState().applyRemote(data.state);
        setPhase(data.saved === false ? "error" : "ok");
        if (data.saved !== false) setSyncedAt(Date.now());
      })
      .catch(() => {
        if (!cancelled) setPhase("error");
      });

    return () => {
      cancelled = true;
    };
  }, [active]);

  // 2. Keyingi o'zgarishlar — kechiktirilgan yuborish
  React.useEffect(() => {
    if (!active) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const unsubscribe = useApp.subscribe(() => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setPhase("syncing");
        fetch("/api/sync", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(snapshot()),
        })
          .then((response) => (response.ok ? response.json() : null))
          .then((data) => {
            const ok = Boolean(data) && data.saved !== false;
            setPhase(ok ? "ok" : "error");
            if (ok) setSyncedAt(Date.now());
          })
          .catch(() => setPhase("error"));
      }, 3000);
    });

    return () => {
      if (timer) clearTimeout(timer);
      unsubscribe();
    };
  }, [active]);

  // Birinchi javob kelgunicha "sinxronlanmoqda" ko'rinadi (hosila holat)
  const shown: SyncPhase = active && phase === "off" ? "syncing" : phase;
  return { phase: shown, syncedAt, enabled: active };
}
