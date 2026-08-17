"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";
import { Avatar } from "@/components/ui/card";
import { Overline } from "@/components/ui/badge";
import { useApp } from "@/lib/store";
import { useCloudSync } from "@/lib/db/use-sync";
import { daysUntil, useNow } from "@/lib/now";
import { initials } from "@/lib/types";

/** Nav yorliqlari nemischa atamalar — tarjima fayllarida ham shunday qoladi */
export const NAV = [
  { key: "uebersicht", href: "/uebersicht" },
  { key: "pruefung", href: "/pruefung" },
  { key: "mock", href: "/mock" },
  { key: "fehlerbuch", href: "/fehlerbuch" },
  { key: "wortschatz", href: "/wortschatz" },
  { key: "statistik", href: "/statistik" },
] as const;

function isActive(pathname: string, href: string) {
  return pathname.startsWith(href);
}

/** Logo — dizaynda 30×30 quyuq kvadrat "G" + nom */
export function Logo({ onDark }: { onDark?: boolean }) {
  const t = useTranslations("brand");

  return (
    <span className="flex items-center gap-[11px]">
      <span
        className={cn(
          "font-display flex h-[30px] w-[30px] items-center justify-center rounded-[9px] text-[15px] font-extrabold",
          onDark ? "bg-accent text-ink" : "bg-ink text-paper",
        )}
      >
        G
      </span>
      <span className="font-display text-[17px] font-bold tracking-[-.01em]">
        {t("short")}
      </span>
    </span>
  );
}

function NavList({ pathname }: { pathname: string }) {
  const t = useTranslations("nav");

  return (
    <nav className="flex flex-col gap-1">
      {NAV.map((item) => {
        const on = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={on ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-md px-[14px] py-[11px] text-[15px] transition-colors duration-[180ms]",
              on
                ? "bg-sand text-ink font-semibold"
                : "text-nav-idle hover:bg-paper font-medium",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "h-[6px] w-[6px] rounded-full",
                on ? "bg-accent" : "bg-dot-idle",
              )}
            />
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}

/** Sidebar tagidagi imtihon sanasi bloki */
function ExamCard() {
  const t = useTranslations("shell");
  const profile = useApp((s) => s.profile);
  const days = daysUntil(profile.examDate, useNow());

  if (!profile.examDate) {
    return (
      <div className="bg-sand mt-auto flex flex-col gap-2 rounded-xl p-[18px]">
        <Overline className="text-muted-2">{t("examTitle")}</Overline>
        <span className="text-muted-3 text-[13.5px] leading-[1.5]">
          {t.rich("examEmpty", {
            link: (chunks) => (
              <Link href="/profil" className="text-petrol font-semibold">
                {chunks}
              </Link>
            ),
          })}
        </span>
      </div>
    );
  }

  const label = new Date(profile.examDate).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className="bg-sand mt-auto flex flex-col gap-2 rounded-xl p-[18px]">
      <Overline className="text-muted-2">{t("examTitle")}</Overline>
      <span className="font-display text-[22px] font-bold tracking-[-.01em]">
        {label} · {profile.targetLevel}
      </span>
      <span className="text-muted-3 text-[13.5px]">
        {days === null ? t("examNoDays") : t("examDays", { days })}
      </span>
    </div>
  );
}

export function Sidebar() {
  const t = useTranslations("shell");
  const pathname = usePathname();
  const profile = useApp((s) => s.profile);

  return (
    <aside className="border-line hidden w-[248px] flex-none flex-col gap-7 border-r bg-white px-[18px] py-7 lg:flex">
      <Link href="/uebersicht" className="px-2">
        <Logo />
      </Link>
      <NavList pathname={pathname} />
      <ExamCard />
      <SyncStatus />
      <Link
        href="/profil"
        className="border-line-soft hover:bg-paper -mx-2 flex items-center gap-[11px] rounded-md border-t px-2 pt-4 pb-[6px] transition-colors"
      >
        <Avatar initials={initials(profile.firstName, profile.lastName)} />
        <span className="flex flex-col">
          <span className="text-[14px] font-semibold">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="text-muted-2 text-[12.5px]">
            {t("streak", { days: profile.streak })}
          </span>
        </span>
      </Link>
    </aside>
  );
}

/** Mobil pastki navigatsiya — dizayndagi telefon ekranlari sidebar'siz */
function MobileNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="border-line fixed inset-x-0 bottom-0 z-20 flex border-t bg-white/95 backdrop-blur lg:hidden">
      {NAV.map((item) => {
        const on = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={on ? "page" : undefined}
            className={cn(
              "flex flex-1 flex-col items-center gap-[5px] px-1 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] text-[11px] transition-colors",
              on ? "text-ink font-semibold" : "text-nav-idle font-medium",
            )}
          >
            <span
              aria-hidden
              className={cn(
                "h-[6px] w-[6px] rounded-full",
                on ? "bg-accent" : "bg-dot-idle",
              )}
            />
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}

/** Bulut sinxroni holati — yon panel tagida kichik satr */
function SyncStatus() {
  const t = useTranslations("sync");
  const { phase, enabled } = useCloudSync();

  if (!enabled) {
    return (
      <Link
        href="/login"
        className="text-muted-2 hover:text-ink px-2 text-[12.5px] transition-colors"
      >
        {t("offline")}
      </Link>
    );
  }

  return (
    <span className="text-muted-2 flex items-center gap-2 px-2 text-[12.5px]">
      <span
        aria-hidden
        className={cn(
          "h-[6px] w-[6px] flex-none rounded-full",
          phase === "ok"
            ? "bg-ok-bar"
            : phase === "error"
              ? "bg-danger"
              : "bg-accent animate-pulse-soft",
        )}
      />
      {phase === "ok"
        ? t("synced")
        : phase === "error"
          ? t("failed")
          : t("syncing")}
    </span>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-paper flex min-h-screen">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col pb-[76px] lg:pb-0">
        {children}
      </div>
      <MobileNav />
    </div>
  );
}
