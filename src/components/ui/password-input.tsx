"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

/** Dizayndagi 4 segmentli kuch shkalasi: 0–4 */
export function passwordScore(v: string): number {
  if (!v) return 0;
  let s = 0;
  if (v.length >= 8) s++;
  if (/[0-9]/.test(v)) s++;
  if (/[A-ZÄÖÜ]/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v) || v.length >= 12) s++;
  return s;
}

const STRENGTH_LABEL = ["", "Juda zaif", "Zaif", "Yaxshi", "Kuchli"] as const;

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  hint?: string;
  error?: string;
  /** Kuch shkalasini ko'rsatish (ro'yxatdan o'tish ekranida) */
  showStrength?: boolean;
  onDark?: boolean;
}

export function PasswordInput({
  label,
  hint,
  error,
  showStrength,
  onDark,
  className,
  id,
  value,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = React.useState(false);
  const autoId = React.useId();
  const inputId = id ?? autoId;

  const score = showStrength ? passwordScore(String(value ?? "")) : 0;
  const strong = score >= 4;

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            "text-[14px] font-semibold",
            onDark ? "text-on-dark-soft" : "text-slate",
          )}
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex items-center gap-[10px] rounded-lg border-[1.5px] px-[18px] py-4 transition-[border-color,box-shadow] duration-[180ms]",
          "focus-within:ring-4 focus-within:ring-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]",
          onDark
            ? "border-on-dark/20 bg-on-dark/6 focus-within:border-accent"
            : "border-line-strong focus-within:border-accent bg-white",
          // Kuchli parol — dizaynda chegara yashilga o'zgaradi
          showStrength && strong && "border-ok-bd focus-within:border-ok-bd",
          error && "border-bad-bd bg-bad-bg",
          className,
        )}
      >
        <input
          id={inputId}
          type={visible ? "text" : "password"}
          value={value}
          aria-invalid={error ? true : undefined}
          className={cn(
            "flex-1 bg-transparent text-[17px] outline-none",
            onDark ? "text-on-dark" : "text-ink",
            !visible && "tracking-[.22em]",
          )}
          {...props}
        />

        {showStrength && score > 0 ? (
          <span
            className={cn(
              "text-[13.5px] font-semibold",
              strong ? "text-ok-fg" : "text-muted-2",
            )}
          >
            {STRENGTH_LABEL[score]}
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className={cn(
              "cursor-pointer text-[13.5px] font-semibold",
              onDark ? "text-accent" : "text-petrol",
            )}
          >
            {visible ? "Yashirish" : "Ko‘rsatish"}
          </button>
        )}
      </div>

      {showStrength && (
        <div className="flex gap-[6px]" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                "h-[5px] flex-1 rounded-pill transition-colors duration-200",
                i < score
                  ? score >= 3
                    ? "bg-ok-bar"
                    : "bg-accent"
                  : onDark
                    ? "bg-on-dark/18"
                    : "bg-line-strong",
              )}
            />
          ))}
        </div>
      )}

      {error ? (
        <span className="text-danger text-[13.5px]">{error}</span>
      ) : hint ? (
        <span
          className={cn(
            "text-[13.5px]",
            onDark ? "text-on-dark-dim" : "text-muted-2",
          )}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}
