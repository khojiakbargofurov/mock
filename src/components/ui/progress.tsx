import { cn } from "@/lib/cn";

/**
 * Ko'nikma progress bari.
 * Dizayn qoidasi: 70% dan past ball qizil (#C9705A), aks holda accent.
 */
export function ProgressBar({
  value,
  size = "md",
  onDark,
  className,
}: {
  value: number;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
  className?: string;
}) {
  const h = size === "sm" ? "h-[7px]" : size === "lg" ? "h-[9px]" : "h-2";
  const low = value < 70;

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "rounded-pill overflow-hidden",
        h,
        onDark ? "bg-on-dark/12" : "bg-sand-deep",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-pill h-full transition-[width] duration-500 ease-out",
          low ? "bg-low" : "bg-accent",
        )}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

/** Ko'nikma qatori: nom + foiz + bar (dashboard va natija ekranlarida) */
export function SkillRow({
  name,
  value,
  size = "md",
  onDark,
}: {
  name: string;
  value: number;
  size?: "sm" | "md" | "lg";
  onDark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[7px]">
      <div className="flex justify-between text-[14px]">
        <span className={onDark ? "text-[#e4ddd0]" : "text-slate"}>{name}</span>
        <span
          className={cn(
            "tnum",
            onDark ? "text-on-dark-muted" : "text-muted-2",
          )}
        >
          {value}%
        </span>
      </div>
      <ProgressBar value={value} size={size} onDark={onDark} />
    </div>
  );
}

/**
 * Sinov yuqorisidagi 12 segmentli progress.
 * Holatlar: bajarilgan (ink) · hozirgi (accent) · qolgan (bej)
 */
export function SegmentBar({
  total,
  current,
  answered,
}: {
  total: number;
  current: number;
  answered: boolean[];
}) {
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn(
            "rounded-pill h-[5px] flex-1 transition-colors duration-300",
            i === current
              ? "bg-accent"
              : answered[i]
                ? "bg-ink"
                : "bg-seg-idle",
          )}
        />
      ))}
    </div>
  );
}
