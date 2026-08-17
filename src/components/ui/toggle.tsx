"use client";

import { cn } from "@/lib/cn";

/**
 * Sozlamalar toggle'i.
 * Dizaynda ikki o'lcham: 44×25 (profil) va 34×19 (Fokus-Modus).
 */
export function Toggle({
  checked,
  onChange,
  size = "md",
  label,
  className,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  size?: "sm" | "md";
  label?: string;
  className?: string;
}) {
  const sm = size === "sm";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "rounded-pill box-border inline-flex cursor-pointer items-center transition-colors duration-200",
        sm ? "h-[19px] w-[34px] p-[2px]" : "h-[25px] w-[44px] p-[3px]",
        checked ? "bg-ink justify-end" : "bg-line-strong justify-start",
        className,
      )}
    >
      <span
        className={cn(
          "block rounded-full transition-transform duration-200",
          sm ? "h-[15px] w-[15px]" : "h-[19px] w-[19px]",
          checked ? "bg-paper" : "bg-white",
        )}
      />
    </button>
  );
}

/** Sozlamalar qatori: sarlavha + tavsif + toggle */
export function SettingRow({
  title,
  description,
  checked,
  onChange,
  divider,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  divider?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-5",
        divider && "border-line-soft border-t pt-[18px]",
      )}
    >
      <span className="flex flex-col gap-[3px]">
        <span className="text-[16px] font-semibold">{title}</span>
        <span className="text-muted-2 text-[14px]">{description}</span>
      </span>
      <Toggle checked={checked} onChange={onChange} label={title} />
    </div>
  );
}
