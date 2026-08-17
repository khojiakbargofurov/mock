"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Dark panel ustida (mobil login ekrani) */
  onDark?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { label, hint, error, onDark, className, id, ...props },
    ref,
  ) {
    const autoId = React.useId();
    const inputId = id ?? autoId;
    const describedBy = error
      ? `${inputId}-error`
      : hint
        ? `${inputId}-hint`
        : undefined;

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
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "rounded-lg border-[1.5px] px-[18px] py-4 text-[16.5px] outline-none transition-[border-color,box-shadow,background-color] duration-[180ms]",
            onDark
              ? "text-on-dark border-on-dark/20 bg-on-dark/6 placeholder:text-on-dark-dim focus:border-accent"
              : "border-line-strong text-ink placeholder:text-muted-2 bg-white focus:border-accent focus:ring-4 focus:ring-[color-mix(in_srgb,var(--color-accent)_16%,transparent)]",
            error &&
              !onDark &&
              "border-bad-bd bg-bad-bg text-bad-fg focus:border-bad-bd focus:ring-0",
            className,
          )}
          {...props}
        />
        {error ? (
          <span id={`${inputId}-error`} className="text-danger text-[13.5px]">
            {error}
          </span>
        ) : hint ? (
          <span
            id={`${inputId}-hint`}
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
  },
);
