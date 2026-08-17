"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "accent" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  // #14191F fon — asosiy harakat
  primary: "bg-ink text-paper border-0 hover:opacity-90",
  // oxra fon — sinovni yakunlash, hisob yaratish kabi urg'uli harakatlar
  accent: "bg-accent text-ink border-0 font-bold hover:opacity-90",
  // shaffof + chegara — ikkilamchi
  secondary:
    "bg-transparent text-muted-3 border border-line-btn hover:bg-sand",
  // petrol matn — matnli havola tugma
  ghost: "bg-transparent text-petrol border-0 hover:bg-petrol-bg",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-[11px] text-[14px] rounded-md",
  md: "px-6 py-[15px] text-[15px] rounded-lg",
  lg: "px-6 py-[18px] text-[16.5px] rounded-xl",
  xl: "px-6 py-[17px] text-[16.5px] rounded-2xl",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      fullWidth,
      className,
      disabled,
      ...props
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "font-sans font-semibold whitespace-nowrap transition-[opacity,background-color,transform,color] duration-[180ms] active:scale-[.98]",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          // Disabled dizaynda alohida ko'rinish — bosilmaydi, kursor o'zgarmaydi
          disabled &&
            "bg-disabled-bg text-disabled-fg pointer-events-none border-0 opacity-100 active:scale-100",
          className,
        )}
        {...props}
      />
    );
  },
);
