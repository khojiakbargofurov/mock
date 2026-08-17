import { cn } from "@/lib/cn";

type Tone = "surface" | "sand" | "ink" | "paper";

const tones: Record<Tone, string> = {
  surface: "bg-white border border-line", // asosiy oq karta
  sand: "bg-sand border-0", // iliq urg'uli blok
  ink: "bg-ink text-on-dark border-0", // quyuq panel
  paper: "bg-paper border border-line",
};

export function Card({
  tone = "surface",
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { tone?: Tone }) {
  return (
    <div
      className={cn("rounded-4xl p-[26px]", tones[tone], className)}
      {...props}
    >
      {children}
    </div>
  );
}

/** Bosh sahifadagi KPI kartasi: "O'rtacha ball · 78%" */
export function StatCard({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-line rounded-2xl border bg-white px-5 py-[18px]",
        "flex flex-col gap-[5px]",
        className,
      )}
    >
      <span className="text-muted text-[12.5px] tracking-[.06em]">{label}</span>
      <span className="font-display tnum text-[28px] font-bold">{value}</span>
    </div>
  );
}

export function Avatar({
  initials,
  size = 32,
  className,
}: {
  initials: string;
  size?: number;
  className?: string;
}) {
  return (
    <span
      style={{ width: size, height: size, fontSize: Math.round(size * 0.4) }}
      className={cn(
        "bg-avatar text-muted-3 font-display inline-flex flex-none items-center justify-center rounded-full font-bold",
        className,
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}
