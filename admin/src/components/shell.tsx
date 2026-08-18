import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import type { AdminUser } from "@/lib/auth";

/** Sidebar tuzilishi — dizayndagi uch guruh */
const NAV = [
  {
    group: "Verwaltung",
    items: [
      { href: "/", label: "Dashboard" },
      { href: "/foydalanuvchilar", label: "Foydalanuvchilar" },
    ],
  },
  {
    group: "Analitika",
    items: [
      { href: "/natijalar", label: "Natijalar" },
      { href: "/savol-sifati", label: "Savol sifati" },
    ],
  },
  {
    group: "Tizim",
    items: [{ href: "/sozlamalar", label: "Sozlamalar" }],
  },
];

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Shell({
  admin,
  current,
  eyebrow,
  title,
  actions,
  children,
}: {
  admin: AdminUser;
  current: string;
  eyebrow: string;
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[262px_minmax(0,1fr)]">
      {/* ── Sidebar ── */}
      <aside className="bg-ink text-paper flex flex-col gap-6 px-4 py-6 lg:sticky lg:top-0 lg:h-screen">
        <div className="flex items-center gap-[11px] px-2">
          <span className="bg-accent text-ink font-display grid h-[30px] w-[30px] place-items-center rounded-[9px] text-[15px] font-extrabold">
            G
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[16px] font-bold">Mock Test</span>
            <span className="text-on-dark-muted text-[11.5px] tracking-[.14em] uppercase">
              Admin
            </span>
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-5">
          {NAV.map((section) => (
            <div key={section.group} className="flex flex-col gap-1">
              <span className="text-on-dark-dim px-[14px] pt-2 pb-1 text-[11px] tracking-[.16em] uppercase">
                {section.group}
              </span>
              {section.items.map((item) => {
                const active = current === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-[10px] rounded-[10px] px-[14px] py-[9px] text-[14.5px] transition-colors ${
                      active
                        ? "text-paper bg-white/[.09] font-semibold"
                        : "text-on-dark-soft hover:text-paper hover:bg-white/[.05]"
                    }`}
                  >
                    <span
                      className={`h-[6px] w-[6px] rounded-full ${
                        active ? "bg-accent" : "bg-white/25"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 px-2 pt-4">
          <div className="flex items-center gap-3">
            <span className="text-on-dark grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[13px] font-bold">
              {initials(admin.firstName)}
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="truncate text-[14px] font-semibold">
                {admin.firstName}
              </span>
              <span className="text-on-dark-dim truncate text-[12px]">
                {admin.username ? `@${admin.username}` : admin.telegramId}
              </span>
            </span>
          </div>
          <LogoutButton />
        </div>
      </aside>

      {/* ── Kontent ── */}
      <div className="bg-paper flex min-w-0 flex-col">
        <header className="border-line flex flex-wrap items-center justify-between gap-4 border-b px-8 py-5">
          <div className="flex flex-col gap-[3px]">
            <span className="text-muted text-[11.5px] tracking-[.16em] uppercase">
              {eyebrow}
            </span>
            <h1 className="font-display m-0 text-[26px] leading-none font-extrabold">
              {title}
            </h1>
          </div>
          {actions && (
            <div className="flex flex-wrap items-center gap-3">{actions}</div>
          )}
        </header>

        <main className="flex flex-1 flex-col gap-5 px-8 py-6">{children}</main>
      </div>
    </div>
  );
}
