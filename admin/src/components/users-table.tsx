"use client";

import { useMemo, useState } from "react";
import { Avatar, Card, Pill, Table, Td } from "@/components/ui";
import type { UserRow } from "@/lib/stats";

type Filter = "all" | "active" | "new" | "idle";

const DAY = 86_400_000;

function days(iso: string): number {
  return Math.floor((Date.now() - Date.parse(iso)) / DAY);
}

/** kun.oy.yil — uz-UZ locale teskari tartib beradi, shuning uchun qo'lda */
function fmt(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${String(d.getFullYear()).slice(2)}`;
}

/** CSV — Excel uchun nuqta-vergul, BOM bilan */
function toCsv(rows: UserRow[]): string {
  const head = [
    "Ism",
    "Telegram ID",
    "Username",
    "Ro'yxatdan",
    "Oxirgi faollik",
    "Imtihon",
    "Mashq",
  ];
  const body = rows.map((u) =>
    [
      u.name,
      u.telegramId,
      u.username ?? "",
      u.createdAt,
      u.lastSeenAt,
      u.exams,
      u.uebung,
    ]
      .map((v) => `"${String(v).replace(/"/g, '""')}"`)
      .join(";"),
  );
  return "﻿" + [head.join(";"), ...body].join("\n");
}

export function UsersTable({ users }: { users: UserRow[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(
    () => ({
      all: users.length,
      active: users.filter((u) => days(u.lastSeenAt) <= 7).length,
      new: users.filter((u) => days(u.createdAt) <= 7).length,
      idle: users.filter((u) => days(u.lastSeenAt) > 14).length,
    }),
    [users],
  );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      if (filter === "active" && days(u.lastSeenAt) > 7) return false;
      if (filter === "new" && days(u.createdAt) > 7) return false;
      if (filter === "idle" && days(u.lastSeenAt) <= 14) return false;
      if (!q) return true;
      return (
        u.name.toLowerCase().includes(q) ||
        (u.username ?? "").toLowerCase().includes(q) ||
        String(u.telegramId).includes(q)
      );
    });
  }, [users, filter, query]);

  const download = () => {
    const blob = new Blob([toCsv(rows)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `foydalanuvchilar-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const chips: { key: Filter; label: string }[] = [
    { key: "all", label: `Barchasi · ${counts.all}` },
    { key: "active", label: `Faol · ${counts.active}` },
    { key: "new", label: `Yangi · ${counts.new}` },
    { key: "idle", label: `Uzoq kirmagan · ${counts.idle}` },
  ];

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setFilter(c.key)}
              className={`cursor-pointer rounded-lg px-[14px] py-[8px] text-[13.5px] font-semibold transition-colors ${
                filter === c.key
                  ? "bg-ink text-paper"
                  : "border-line text-muted-3 hover:bg-sand border"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ism yoki username…"
            className="border-line bg-surface text-ink placeholder:text-muted-2 w-[230px] rounded-lg border px-[14px] py-[9px] text-[14px] outline-none focus:border-[color:var(--color-line-hover,#c7bca8)]"
          />
          <button
            type="button"
            onClick={download}
            className="border-line text-muted-3 hover:bg-sand cursor-pointer rounded-lg border px-4 py-[9px] text-[13.5px] font-semibold transition-colors"
          >
            CSV eksport
          </button>
        </div>
      </div>

      <Card>
        <Table
          head={[
            "Foydalanuvchi",
            "Telegram",
            "Ro‘yxatdan",
            "Oxirgi faollik",
            "Imtihon",
            "Mashq",
            "Holat",
          ]}
        >
          {rows.map((u) => {
            const idle = days(u.lastSeenAt);
            return (
              <tr key={u.id}>
                <Td>
                  <span className="flex items-center gap-3">
                    <Avatar name={u.name} />
                    <span className="font-semibold">{u.name}</span>
                  </span>
                </Td>
                <Td className="text-muted-3">
                  {u.username ? (
                    <a
                      href={`https://t.me/${u.username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-petrol"
                    >
                      @{u.username}
                    </a>
                  ) : (
                    <span className="tnum">{u.telegramId}</span>
                  )}
                </Td>
                <Td className="text-muted-3 tnum whitespace-nowrap">
                  {fmt(u.createdAt)}
                </Td>
                <Td className="text-muted-3 tnum whitespace-nowrap">
                  {fmt(u.lastSeenAt)}
                </Td>
                <Td className="tnum">{u.exams}</Td>
                <Td className="tnum">{u.uebung}</Td>
                <Td>
                  {idle <= 1 ? (
                    <Pill tone="ok">faol</Pill>
                  ) : idle <= 7 ? (
                    <Pill tone="plain">{idle} kun</Pill>
                  ) : (
                    <Pill tone="warn">{idle} kun</Pill>
                  )}
                </Td>
              </tr>
            );
          })}
        </Table>

        {rows.length === 0 && (
          <p className="text-muted-2 mt-4 mb-0 text-center text-[14px]">
            Bu filtrga mos foydalanuvchi topilmadi.
          </p>
        )}

        <div className="text-muted-2 mt-4 text-[12.5px]">
          {rows.length} / {users.length} ko‘rsatilmoqda
        </div>
      </Card>
    </>
  );
}
