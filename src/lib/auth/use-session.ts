"use client";

import * as React from "react";

export interface SessionUser {
  id: string;
  telegramId: number;
  firstName: string;
  lastName?: string;
  username?: string;
  photoUrl?: string;
  createdAt: number;
}

/**
 * Joriy sessiya. Cookie httpOnly bo'lgani uchun mijoz uni o'qiy olmaydi —
 * shuning uchun `/api/auth/me` so'raladi.
 */
export function useSession() {
  const [user, setUser] = React.useState<SessionUser | null>(null);
  const [loading, setLoading] = React.useState(true);
  // Qayta so'rash uchun: qiymat o'zgarsa, effekt yangidan ishlaydi
  const [reloadKey, setReloadKey] = React.useState(0);

  React.useEffect(() => {
    let active = true;

    fetch("/api/auth/me", { cache: "no-store" })
      .then((response) => response.json())
      .then((data: { user: SessionUser | null }) => {
        if (!active) return;
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [reloadKey]);

  const refresh = React.useCallback(() => setReloadKey((n) => n + 1), []);

  const logout = React.useCallback(async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  }, []);

  return { user, loading, refresh, logout };
}
