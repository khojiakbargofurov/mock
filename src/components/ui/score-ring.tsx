import { cn } from "@/lib/cn";

/**
 * Natija ekranidagi ball halqasi.
 * Dizaynda conic-gradient: accent 0→(ball/100)turn, qolgani rgba(246,242,235,.14).
 */
export function ScoreRing({
  score,
  caption,
  size = 212,
  className,
}: {
  score: number;
  caption: string;
  size?: number;
  className?: string;
}) {
  const turn = Math.max(0, Math.min(100, score)) / 100;
  const inner = Math.round(size * 0.783); // 166/212

  return (
    <div
      role="img"
      aria-label={`Natija ${score} foiz. ${caption}`}
      style={{
        width: size,
        height: size,
        background: `conic-gradient(var(--color-accent) 0turn ${turn}turn, rgba(246,242,235,.14) ${turn}turn 1turn)`,
      }}
      className={cn("flex items-center justify-center rounded-full", className)}
    >
      <div
        style={{ width: inner, height: inner }}
        className="bg-ink flex flex-col items-center justify-center gap-[2px] rounded-full"
      >
        <span
          className="font-display tnum text-on-dark leading-none font-extrabold"
          style={{ fontSize: Math.round(size * 0.255) }}
        >
          {score}
          <span style={{ fontSize: Math.round(size * 0.113) }}>%</span>
        </span>
        <span className="text-on-dark-muted text-[12.5px] tracking-[.06em]">
          {caption}
        </span>
      </div>
    </div>
  );
}
