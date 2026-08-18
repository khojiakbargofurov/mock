"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Phase = "idle" | "starting" | "waiting" | "denied" | "expired" | "error";

export function LoginBox() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const [link, setLink] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(300);

  // Holatni so'rab turamiz
  useEffect(() => {
    if (phase !== "waiting" || !token) return;

    const timer = setInterval(() => {
      void fetch(`/api/login/status?token=${token}`)
        .then((r) => r.json())
        .then((data: { status: string }) => {
          if (data.status === "approved") {
            clearInterval(timer);
            router.replace("/");
            router.refresh();
          } else if (data.status === "denied") {
            clearInterval(timer);
            setPhase("denied");
          } else if (data.status === "expired" || data.status === "unknown") {
            clearInterval(timer);
            setPhase("expired");
          }
        })
        .catch(() => {});
    }, 2000);

    return () => clearInterval(timer);
  }, [phase, token, router]);

  // Qolgan vaqt
  useEffect(() => {
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
    try {
      const response = await fetch("/api/login/start", { method: "POST" });
      if (!response.ok) throw new Error("start failed");
      const data = (await response.json()) as { token: string; link: string };
      setToken(data.token);
      setLink(data.link);
      setSeconds(300);
      setPhase("waiting");
    } catch {
      setPhase("error");
    }
  };

  if (phase === "waiting" && link) {
    return (
      <div className="flex flex-col gap-4">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="bg-ink text-paper block rounded-xl px-6 py-[14px] text-center text-[15.5px] font-semibold"
        >
          Telegramni ochish
        </a>
        <p className="text-muted-3 m-0 text-[14px] leading-[1.6]">
          Botda <strong>Start</strong> bosing. Shu oyna o‘zi ochiladi —
          yangilash shart emas.
        </p>
        <span className="text-muted-2 tnum text-[13px]">
          Kod amal qiladi: {Math.floor(seconds / 60)}:
          {String(seconds % 60).padStart(2, "0")}
        </span>
      </div>
    );
  }

  if (phase === "denied") {
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-bad-bg text-bad-fg rounded-xl px-4 py-3 text-[14px] leading-[1.6]">
          Bu hisobga ruxsat yo‘q. Panelga faqat ro‘yxatdagi Telegram
          hisoblari kira oladi.
        </div>
        <button
          type="button"
          onClick={() => setPhase("idle")}
          className="border-line hover:bg-sand cursor-pointer rounded-xl border px-6 py-[13px] text-[15px] font-semibold"
        >
          Qaytadan
        </button>
      </div>
    );
  }

  if (phase === "expired" || phase === "error") {
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-warn-bg text-warn-fg rounded-xl px-4 py-3 text-[14px]">
          {phase === "expired"
            ? "Kod muddati tugadi."
            : "Xatolik yuz berdi. Qayta urinib ko‘ring."}
        </div>
        <button
          type="button"
          onClick={start}
          className="bg-ink text-paper cursor-pointer rounded-xl px-6 py-[13px] text-[15px] font-semibold"
        >
          Qaytadan
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={start}
      disabled={phase === "starting"}
      className="bg-ink text-paper w-full cursor-pointer rounded-xl px-6 py-[14px] text-[15.5px] font-semibold transition-opacity hover:opacity-90 disabled:opacity-70"
    >
      {phase === "starting" ? "Kod tayyorlanmoqda…" : "Telegram bilan kirish"}
    </button>
  );
}
