import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "./button";

/** Skeleton bloki — dcPulse animatsiyasi bilan */
export function Skeleton({
  className,
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ animationDelay: `${delay}s` }}
      className={cn(
        "bg-skeleton animate-pulse-soft block rounded-xl",
        className,
      )}
    />
  );
}

/**
 * Yuklanish spinneri — accent rangli yuqori chegara aylanadi.
 *
 * `flex-none` shart: flex konteyner ichida yonidagi matn joy talab qilsa,
 * spinner siqilib doiradan ovalga aylanib qoladi.
 */
export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "border-line-btn border-t-accent animate-spin-slow inline-block h-5 w-5 flex-none rounded-full border-[2.5px]",
        className,
      )}
    />
  );
}

export function LoadingLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3" role="status">
      <Spinner />
      <span className="text-slate text-[16px] font-semibold">{text}</span>
    </div>
  );
}

/**
 * Bo'sh holat — dizayndagi chiziqli naqshli placeholder bilan.
 * (Frame 05 va 15)
 */
export function EmptyState({
  title,
  body,
  primary,
  secondary,
  size = "lg",
}: {
  title: string;
  body: string;
  primary?: { label: string; onClick?: () => void; href?: string };
  secondary?: { label: string; onClick?: () => void };
  size?: "lg" | "sm";
}) {
  const box = size === "lg" ? "h-[150px] w-[150px]" : "h-[132px] w-[132px]";

  return (
    <div className="flex flex-col items-center justify-center gap-5 p-10 text-center">
      <div
        aria-hidden
        className={cn(
          "border-line-btn flex items-center justify-center rounded-6xl border",
          box,
        )}
        style={{
          background:
            "repeating-linear-gradient(135deg, #E9E1D2 0 8px, #F2ECDF 8px 16px)",
        }}
      />
      <h3
        className={cn(
          "font-display m-0 font-bold",
          size === "lg" ? "text-[27px]" : "text-[24px]",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-muted-3 m-0 leading-[1.55]",
          size === "lg" ? "max-w-[44ch] text-[16.5px]" : "max-w-[26ch] text-[16px]",
        )}
      >
        {body}
      </p>
      {(primary || secondary) && (
        <div className="flex flex-wrap justify-center gap-[10px]">
          {primary &&
            (primary.href ? (
              <Link href={primary.href}>
                <Button onClick={primary.onClick}>{primary.label}</Button>
              </Link>
            ) : (
              <Button onClick={primary.onClick}>{primary.label}</Button>
            ))}
          {secondary && (
            <Button variant="secondary" onClick={secondary.onClick}>
              {secondary.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
