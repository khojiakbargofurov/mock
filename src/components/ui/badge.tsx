import { cn } from "@/lib/cn";

type Tone = "ok" | "bad" | "marked" | "ink" | "new" | "accent";

const tones: Record<Tone, string> = {
  ok: "bg-ok-bg text-ok-fg", // Richtig
  bad: "bg-bad-bg text-bad-fg", // Falsch
  marked: "bg-sand text-muted-3", // Markiert
  ink: "bg-ink text-paper", // B1
  new: "bg-petrol-bg text-petrol", // Neu
  accent: "bg-accent text-ink",
};

export function Badge({
  tone = "marked",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "rounded-pill inline-flex items-center px-[14px] py-[7px] text-[13.5px] font-semibold",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Filtr chipi — Fehlerbuch sahifasidagi "Barchasi / Grammatik · 18" */
export function Chip({
  active,
  count,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
  count?: number;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-pill cursor-pointer px-4 py-[9px] text-[14px] transition-colors duration-[180ms]",
        active
          ? "bg-ink text-paper font-semibold"
          : "border-line text-muted-3 hover:bg-sand border bg-white font-medium",
        className,
      )}
      {...props}
    >
      {children}
      {count !== undefined && (
        <span className="tnum"> · {count}</span>
      )}
    </button>
  );
}

/** Bo'lim ustidagi kichik katta harfli sarlavha — dizaynda hamma joyda ishlatilgan */
export function Overline({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "text-muted text-[12px] tracking-[.16em] uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
