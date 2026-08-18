import Link from "next/link";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border-line bg-surface rounded-[18px] border p-5 ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  hint,
}: {
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
      <h2 className="font-display m-0 text-[19px] font-bold">{children}</h2>
      {hint && <span className="text-muted-2 text-[13px]">{hint}</span>}
    </div>
  );
}

/** Asosiy raqam — dashboard tepasidagi qator */
export function Kpi({
  label,
  value,
  sub,
  tone = "plain",
}: {
  label: string;
  value: string | number;
  sub?: string;
  tone?: "plain" | "ok" | "warn";
}) {
  const toneClass =
    tone === "ok"
      ? "text-ok-fg"
      : tone === "warn"
        ? "text-warn-fg"
        : "text-ink";

  return (
    <div className="border-line bg-surface rounded-[18px] border px-5 py-4">
      <div className="text-muted text-[12px] tracking-[.12em] uppercase">
        {label}
      </div>
      <div
        className={`font-display tnum mt-1 text-[30px] leading-none font-extrabold ${toneClass}`}
      >
        {value}
      </div>
      {sub && <div className="text-muted-2 mt-1 text-[13px]">{sub}</div>}
    </div>
  );
}

/** Oddiy ustunli grafik — tashqi kutubxonasiz, SVG */
export function BarChart({
  data,
  height = 120,
}: {
  data: { day: string; count: number }[];
  height?: number;
}) {
  const max = Math.max(1, ...data.map((d) => d.count));
  const w = 100 / Math.max(1, data.length);

  return (
    <div className="flex flex-col gap-2">
      <svg
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        className="w-full"
        style={{ height }}
        role="img"
        aria-label="Kunlik dinamika"
      >
        {data.map((d, i) => {
          const h = (d.count / max) * (height - 4);
          return (
            <rect
              key={d.day}
              x={i * w + w * 0.15}
              y={height - h}
              width={w * 0.7}
              height={Math.max(d.count > 0 ? 2 : 0.5, h)}
              rx={0.6}
              fill={d.count > 0 ? "var(--color-accent)" : "var(--color-line)"}
            >
              <title>{`${d.day}: ${d.count}`}</title>
            </rect>
          );
        })}
      </svg>
      <div className="text-muted-2 flex justify-between text-[11.5px]">
        <span>{data[0]?.day.slice(5)}</span>
        <span className="tnum">eng yuqori: {max}</span>
        <span>{data.at(-1)?.day.slice(5)}</span>
      </div>
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
                className="text-muted py-2 pr-4 text-left text-[12px] font-semibold tracking-[.08em] whitespace-nowrap uppercase"
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
    <td className={`border-line-soft border-b py-[10px] pr-4 ${className}`}>
      {children}
    </td>
  );
}

export function Pill({
  children,
  tone = "plain",
}: {
  children: React.ReactNode;
  tone?: "plain" | "ok" | "warn" | "bad";
}) {
  const map = {
    plain: "bg-sand text-muted-3",
    ok: "bg-ok-bg text-ok-fg",
    warn: "bg-warn-bg text-warn-fg",
    bad: "bg-bad-bg text-bad-fg",
  } as const;
  return (
    <span
      className={`inline-block rounded-full px-[10px] py-[3px] text-[12px] font-semibold ${map[tone]}`}
    >
      {children}
    </span>
  );
}

export function Nav({ current }: { current: string }) {
  const items = [
    { href: "/", label: "Umumiy" },
    { href: "/foydalanuvchilar", label: "Foydalanuvchilar" },
    { href: "/kontent", label: "Kontent sifati" },
    { href: "/tizim", label: "Tizim" },
  ];

  return (
    <nav className="flex flex-wrap gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`rounded-lg px-[14px] py-2 text-[14.5px] font-semibold transition-colors ${
            current === item.href
              ? "bg-ink text-paper"
              : "text-muted-3 hover:bg-sand"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
