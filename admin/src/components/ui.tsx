/** Dizayndagi qayta ishlatiladigan bloklar */

export function Card({
  children,
  className = "",
  pad = true,
}: {
  children: React.ReactNode;
  className?: string;
  pad?: boolean;
}) {
  return (
    <section
      className={`border-line bg-surface rounded-[16px] border ${
        pad ? "p-5" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function CardHead({
  title,
  hint,
  action,
}: {
  title: string;
  hint?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
      <span className="text-muted text-[11.5px] tracking-[.14em] uppercase">
        {title}
      </span>
      {action ?? (hint && <span className="text-muted-2 text-[12.5px]">{hint}</span>)}
    </div>
  );
}

/** Asosiy raqam + haftalik o'zgarish */
export function Stat({
  label,
  value,
  delta,
  deltaLabel,
  invert = false,
}: {
  label: string;
  value: string | number;
  delta?: number | null;
  deltaLabel?: string;
  /** Kamayishi yaxshi bo'lgan ko'rsatkichlar uchun (masalan tashlab ketish) */
  invert?: boolean;
}) {
  const good = delta == null ? null : invert ? delta <= 0 : delta >= 0;

  return (
    <div className="border-line bg-surface rounded-[16px] border px-5 py-[18px]">
      <div className="text-muted-2 text-[13px]">{label}</div>
      <div className="font-display tnum mt-[6px] text-[30px] leading-none font-extrabold">
        {value}
      </div>
      <div className="mt-[7px] text-[12.5px]">
        {delta == null ? (
          <span className="text-muted-2">{deltaLabel ?? "—"}</span>
        ) : (
          <span className={good ? "text-ok-fg" : "text-bad-fg"}>
            {delta > 0 ? "+" : ""}
            {delta}% {deltaLabel ?? "haftada"}
          </span>
        )}
      </div>
    </div>
  );
}

/** 12 oylik ustunlar — joriy oy urg'uli */
export function MonthChart({
  data,
  height = 190,
}: {
  data: { label: string; count: number; current: boolean }[];
  height?: number;
}) {
  const max = Math.max(1, ...data.map((d) => d.count));

  return (
    <div className="flex flex-1 flex-col justify-end gap-2">
      <div className="flex items-end gap-[6px]" style={{ height }}>
        {data.map((d) => (
          <div
            key={d.label}
            className="flex flex-1 flex-col items-center justify-end gap-1"
            title={`${d.label}: ${d.count}`}
          >
            <div
              className={`w-full rounded-t-[4px] ${
                d.current ? "bg-accent" : "bg-sand-deep"
              }`}
              style={{
                height: `${Math.max(d.count > 0 ? 6 : 3, (d.count / max) * (height - 26))}px`,
              }}
            />
            <span className="text-muted-2 text-[11px]">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Nomi + foizi + chizig'i bo'lgan qator (eng qiyin mavzular, darajalar) */
export function BarRow({
  label,
  sub,
  value,
  percent,
  tone = "accent",
}: {
  label: string;
  sub?: string;
  value: string;
  percent: number;
  tone?: "accent" | "bad" | "ok";
}) {
  const color =
    tone === "bad"
      ? "var(--color-bad-bar, #b46350)"
      : tone === "ok"
        ? "var(--color-ok-bar, #7fa37a)"
        : "var(--color-accent)";

  return (
    <div className="flex flex-col gap-[6px] py-[7px]">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[14px] font-semibold">{label}</span>
        <span className="text-muted-3 tnum text-[13px]">{value}</span>
      </div>
      <div className="bg-sand-deep h-[6px] w-full overflow-hidden rounded-full">
        <div
          className="h-full rounded-full"
          style={{ width: `${Math.min(100, percent)}%`, background: color }}
        />
      </div>
      {sub && <span className="text-muted-2 text-[12px]">{sub}</span>}
    </div>
  );
}

export function Table({
  head,
  children,
}: {
  head: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="-mx-5 overflow-x-auto px-5">
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr className="border-line border-b">
            {head.map((h) => (
              <th
                key={h}
                className="text-muted py-[10px] pr-4 text-left text-[11px] font-semibold tracking-[.12em] whitespace-nowrap uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export function Td({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`border-line-soft border-b py-[13px] pr-4 ${className}`}>
      {children}
    </td>
  );
}

export function Pill({
  children,
  tone = "plain",
}: {
  children: React.ReactNode;
  tone?: "plain" | "ok" | "warn" | "bad" | "info";
}) {
  const map = {
    plain: "bg-sand text-muted-3",
    ok: "bg-ok-bg text-ok-fg",
    warn: "bg-warn-bg text-warn-fg",
    bad: "bg-bad-bg text-bad-fg",
    info: "bg-petrol-bg text-petrol",
  } as const;

  return (
    <span
      className={`inline-block rounded-full px-[11px] py-[4px] text-[12px] font-semibold ${map[tone]}`}
    >
      {children}
    </span>
  );
}

export function Avatar({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span className="bg-sand text-muted-3 grid h-8 w-8 flex-none place-items-center rounded-full text-[12px] font-bold">
      {letters || "—"}
    </span>
  );
}

/** Ma'lumot yo'q holati — dizayndagi 08-ekran */
export function Empty({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
      <div className="bg-sand-deep text-muted-2 grid h-[74px] w-[74px] place-items-center rounded-[18px] text-[11px]">
        —
      </div>
      <span className="font-display text-[18px] font-bold">{title}</span>
      <p className="text-muted-3 m-0 max-w-[42ch] text-[14px] leading-[1.6]">
        {body}
      </p>
      {action}
    </div>
  );
}
