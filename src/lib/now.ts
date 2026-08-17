"use client";

import { useSyncExternalStore } from "react";

/**
 * Joriy vaqtni tashqi manba sifatida beradi.
 *
 * `Date.now()` ni to'g'ridan-to'g'ri render ichida chaqirish mumkin emas
 * (nopok funksiya + SSR bilan mos kelmaydi), shuning uchun daqiqada bir marta
 * yangilanadigan kichik store ishlatiladi. Imtihongacha qolgan kunlar shundan
 * hisoblanadi.
 */
let current = 0;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (timer === null) {
    current = Date.now();
    timer = setInterval(() => {
      current = Date.now();
      for (const listener of listeners) listener();
    }, 60_000);
  }
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  };
}

function getSnapshot() {
  if (current === 0) current = Date.now();
  return current;
}

/** Server renderda 0 — vaqtga bog'liq matn faqat brauzerda ko'rinadi */
function getServerSnapshot() {
  return 0;
}

export function useNow() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** ISO sanagacha qolgan kunlar; vaqt hali ma'lum bo'lmasa null */
export function daysUntil(isoDate: string | null, now: number) {
  if (!isoDate || now === 0) return null;
  return Math.max(0, Math.ceil((new Date(isoDate).getTime() - now) / 86_400_000));
}
