import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { BarRow, Card, CardHead, Empty, MonthChart, Table, Td } from "@/components/ui";
import { activityLog, funnel, levelStats, monthlySeries } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function clock(iso: string): string {
  return new Date(iso).toLocaleTimeString("uz-UZ", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function dayLabel(iso: string): string {
  const d = Math.floor((Date.now() - Date.parse(iso)) / 86_400_000);
  if (d === 0) return "";
  if (d === 1) return "kecha";
  return `${d} kun oldin`;
}

export default async function ResultsPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const [steps, levels, months, log] = await Promise.all([
    funnel(),
    levelStats(),
    monthlySeries(),
    activityLog(10),
  ]);

  const started = steps[0]?.count ?? 0;
  const finished = steps.at(-1)?.count ?? 0;
  const conversion = started ? Math.round((finished / started) * 100) : 0;

  return (
    <Shell
      admin={admin}
      current="/natijalar"
      eyebrow="Analitika"
      title="Natijalar"
    >
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        {/* ── Voronka ── */}
        <Card>
          <CardHead
            title="Imtihon yakunlash yo‘nalishi"
            hint={started ? `Konversiya ${conversion}%` : undefined}
          />
          {started === 0 ? (
            <Empty
              title="Hali imtihon boshlanmagan"
              body="Foydalanuvchi birinchi imtihonni boshlagach, bu yerda qaysi bosqichda to‘xtab qolayotgani ko‘rinadi."
            />
          ) : (
            <div className="flex flex-col gap-[10px]">
              {steps.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-muted-3 w-[168px] flex-none text-[13.5px]">
                    {s.label}
                  </span>
                  <div className="bg-sand-deep h-[30px] flex-1 overflow-hidden rounded-[7px]">
                    <div
                      className="bg-ink flex h-full items-center justify-end rounded-[7px] px-[10px]"
                      style={{ width: `${Math.max(s.percent, 8)}%` }}
                    >
                      <span className="text-paper tnum text-[12.5px] font-bold">
                        {s.count}
                      </span>
                    </div>
                  </div>
                  <span className="text-muted-2 tnum w-[42px] flex-none text-right text-[13px]">
                    {s.percent}%
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* ── Daraja bo'yicha ── */}
        <Card>
          <CardHead title="Daraja bo‘yicha o‘tish ulushi" />
          {levels.every((l) => l.attempts === 0) ? (
            <Empty
              title="Ma’lumot yig‘ilmoqda"
              body="Har daraja bo‘yicha kamida bitta modul topshirilgach, taqqoslash paydo bo‘ladi."
            />
          ) : (
            <>
              <div className="flex flex-col gap-1">
                {levels.map((l) => (
                  <BarRow
                    key={l.level}
                    label={l.level}
                    sub={
                      l.attempts
                        ? `${l.attempts} modul · o‘rtacha ${l.avgPercent}%`
                        : "hali topshirilmagan"
                    }
                    value={l.attempts ? `${l.passRate}%` : "—"}
                    percent={l.passRate}
                    tone={l.passRate >= 60 ? "ok" : l.passRate > 0 ? "accent" : "accent"}
                  />
                ))}
              </div>
              <p className="text-muted-2 mt-3 mb-0 text-[12.5px] leading-[1.55]">
                O‘tish chegarasi — 60%. Ulush past bo‘lgan darajada savollar
                yoki vaqt me’yori qayta ko‘rilishi mumkin.
              </p>
            </>
          )}
        </Card>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <Card className="flex flex-col">
          <CardHead
            title="Oyiga topshirilgan modullar"
            hint={`${new Date().getFullYear()}`}
          />
          <MonthChart data={months} />
        </Card>

        <Card>
          <CardHead title="Faoliyat jurnali" />
          {log.length === 0 ? (
            <Empty
              title="Hodisa yo‘q"
              body="Foydalanuvchilar harakati shu yerda vaqti bilan ko‘rinadi."
            />
          ) : (
            <Table head={["Vaqt", "Hodisa"]}>
              {log.map((e, i) => (
                <tr key={`${e.at}-${i}`}>
                  <Td className="text-muted-2 tnum w-[86px] align-top whitespace-nowrap">
                    {dayLabel(e.at) || clock(e.at)}
                  </Td>
                  <Td>
                    <span className="block text-[14px]">{e.text}</span>
                    <span className="text-muted-2 text-[12.5px]">{e.who}</span>
                  </Td>
                </tr>
              ))}
            </Table>
          )}
        </Card>
      </div>
    </Shell>
  );
}
