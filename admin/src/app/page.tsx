import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { BarChart, Card, Kpi, Pill, SectionTitle, Table, Td } from "@/components/ui";
import {
  activitySeries,
  formatStats,
  kpis,
  moduleStats,
  recentUsers,
  retention,
  signupSeries,
} from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const FORMAT_LABEL: Record<string, string> = {
  "goethe-a1": "Goethe A1",
  "goethe-a2": "Goethe A2",
  "telc-b1": "telc B1",
  "telc-b2": "telc B2",
};

const MODULE_LABEL: Record<string, string> = {
  hoeren: "Hören",
  lesen: "Lesen",
  schreiben: "Schreiben",
  sprechen: "Sprechen",
  sprachbausteine: "Sprachbausteine",
};

function when(iso: string): string {
  const diff = Date.now() - Date.parse(iso);
  const min = Math.floor(diff / 60_000);
  if (min < 1) return "hozir";
  if (min < 60) return `${min} daq oldin`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h} soat oldin`;
  const d = Math.floor(h / 24);
  return `${d} kun oldin`;
}

export default async function DashboardPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const [k, signups, activity, formats, modules, users, ret] =
    await Promise.all([
      kpis(),
      signupSeries(30),
      activitySeries(30),
      formatStats(),
      moduleStats(),
      recentUsers(8),
      retention(),
    ]);

  const retPercent = ret.total
    ? Math.round((ret.returned / ret.total) * 100)
    : 0;

  return (
    <Shell
      admin={admin}
      current="/"
      title="Umumiy ko‘rinish"
      hint="Barcha raqamlar bazadan jonli olinadi — sahifa har ochilganda qayta hisoblanadi."
    >
      {/* ── Asosiy raqamlar ── */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi
          label="Foydalanuvchilar"
          value={k.users}
          sub={`bugun +${k.usersToday} · 7 kunda +${k.users7}`}
        />
        <Kpi
          label="Faol (7 kun)"
          value={k.active7}
          sub={`bugun ${k.active1} · 30 kunda ${k.active30}`}
          tone={k.active7 > 0 ? "ok" : "plain"}
        />
        <Kpi
          label="Imtihon modullari"
          value={k.examAttempts}
          sub={`7 kunda ${k.examAttempts7}`}
        />
        <Kpi
          label="Mashq urinishlari"
          value={k.uebungAttempts}
          sub={`7 kunda ${k.uebungAttempts7}`}
        />
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi
          label="Qaytib kelganlar"
          value={`${retPercent}%`}
          sub={`${ret.returned} / ${ret.total} foydalanuvchi`}
          tone={retPercent >= 40 ? "ok" : retPercent >= 20 ? "warn" : "plain"}
        />
        <Kpi
          label="Ochiq xatolar"
          value={k.openMistakes}
          sub="Fehlerbuch’da tuzatilmagan"
        />
        <Kpi
          label="O‘zlashtirilgan so‘z"
          value={k.vocabLearned}
          sub="Leitner 4-qutidan yuqori"
        />
        <Kpi
          label="30 kunda yangi"
          value={k.users30}
          sub={k.users ? `jamining ${Math.round((k.users30 / k.users) * 100)}%` : "—"}
        />
      </section>

      {/* ── Dinamika ── */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionTitle hint="oxirgi 30 kun">Ro‘yxatdan o‘tish</SectionTitle>
          <BarChart data={signups} />
        </Card>
        <Card>
          <SectionTitle hint="imtihon + mashq">Faollik</SectionTitle>
          <BarChart data={activity} />
        </Card>
      </section>

      {/* ── Format va modul kesimi ── */}
      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionTitle hint="topshirilgan modullar bo‘yicha">
            Formatlar
          </SectionTitle>
          {formats.length === 0 ? (
            <p className="text-muted-2 m-0 text-[14px]">Hali ma’lumot yo‘q.</p>
          ) : (
            <Table head={["Format", "Modul", "Kishi", "O‘rtacha", "O‘tish"]}>
              {formats.map((f) => (
                <tr key={f.format}>
                  <Td className="font-semibold">
                    {FORMAT_LABEL[f.format] ?? f.format}
                  </Td>
                  <Td className="tnum">{f.attempts}</Td>
                  <Td className="tnum">{f.users}</Td>
                  <Td className="tnum">{f.avgPercent}%</Td>
                  <Td>
                    <Pill
                      tone={
                        f.passRate >= 60 ? "ok" : f.passRate >= 30 ? "warn" : "bad"
                      }
                    >
                      {f.passRate}%
                    </Pill>
                  </Td>
                </tr>
              ))}
            </Table>
          )}
        </Card>

        <Card>
          <SectionTitle hint="o‘rtacha foiz bo‘yicha, qiyini yuqorida">
            Modullar
          </SectionTitle>
          {modules.length === 0 ? (
            <p className="text-muted-2 m-0 text-[14px]">Hali ma’lumot yo‘q.</p>
          ) : (
            <Table head={["Modul", "Topshirilgan", "O‘rtacha"]}>
              {modules.map((m) => (
                <tr key={m.moduleId}>
                  <Td className="font-semibold">
                    {MODULE_LABEL[m.moduleId] ?? m.moduleId}
                  </Td>
                  <Td className="tnum">{m.attempts}</Td>
                  <Td>
                    <Pill
                      tone={
                        m.avgPercent >= 60
                          ? "ok"
                          : m.avgPercent >= 40
                            ? "warn"
                            : "bad"
                      }
                    >
                      {m.avgPercent}%
                    </Pill>
                  </Td>
                </tr>
              ))}
            </Table>
          )}
        </Card>
      </section>

      {/* ── So'nggi foydalanuvchilar ── */}
      <Card>
        <SectionTitle hint="oxirgi 8 ta">Yangi foydalanuvchilar</SectionTitle>
        {users.length === 0 ? (
          <p className="text-muted-2 m-0 text-[14px]">Hali foydalanuvchi yo‘q.</p>
        ) : (
          <Table head={["Ism", "Telegram", "Ro‘yxatdan", "Oxirgi faollik", "Imtihon", "Mashq"]}>
            {users.map((u) => (
              <tr key={u.id}>
                <Td className="font-semibold">{u.name}</Td>
                <Td className="text-muted-3">
                  {u.username ? `@${u.username}` : u.telegramId}
                </Td>
                <Td className="text-muted-3">{when(u.createdAt)}</Td>
                <Td className="text-muted-3">{when(u.lastSeenAt)}</Td>
                <Td className="tnum">{u.exams}</Td>
                <Td className="tnum">{u.uebung}</Td>
              </tr>
            ))}
          </Table>
        )}
      </Card>
    </Shell>
  );
}
