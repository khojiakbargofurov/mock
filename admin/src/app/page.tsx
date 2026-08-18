import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import {
  BarRow,
  Card,
  CardHead,
  Empty,
  MonthChart,
  Pill,
  Stat,
  Table,
  Td,
} from "@/components/ui";
import {
  hardestTopics,
  headline,
  monthlySeries,
  recentUsers,
  resolveItems,
  topMistakes,
} from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function when(iso: string): string {
  const min = Math.floor((Date.now() - Date.parse(iso)) / 60_000);
  if (min < 1) return "hozir";
  if (min < 60) return `${min} daq`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h} soat`;
  return `${Math.floor(h / 24)} kun`;
}

export default async function DashboardPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const [h, months, topics, mistakes, users] = await Promise.all([
    headline(),
    monthlySeries(),
    hardestTopics(5),
    topMistakes(4),
    recentUsers(5),
  ]);

  const texts = await resolveItems(mistakes.map((m) => m.itemId));
  const totalYear = months.reduce((n, m) => n + m.count, 0);
  const avgDelta =
    h.avgPercentPrev === 0 ? null : h.avgPercent - h.avgPercentPrev;

  return (
    <Shell
      admin={admin}
      current="/"
      eyebrow="Verwaltung"
      title="Dashboard"
      actions={
        <>
          <span className="border-line bg-sand text-muted-3 rounded-lg border px-4 py-[9px] text-[13.5px] font-semibold">
            Oxirgi 7 kun
          </span>
          <a
            href="https://prufung.uz"
            target="_blank"
            rel="noreferrer"
            className="bg-ink text-paper rounded-lg px-4 py-[9px] text-[13.5px] font-semibold"
          >
            Saytni ochish
          </a>
        </>
      }
    >
      {/* ── To'rtta asosiy raqam ── */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat
          label="Foydalanuvchilar"
          value={h.users}
          delta={h.usersDelta.percent}
          deltaLabel={
            h.usersDelta.percent == null
              ? `7 kunda +${h.usersDelta.value}`
              : "haftada"
          }
        />
        <Stat
          label="Faol (7 kun)"
          value={h.activeWeek}
          delta={null}
          deltaLabel={
            h.users ? `jamining ${Math.round((h.activeWeek / h.users) * 100)}%` : "—"
          }
        />
        <Stat
          label="Haftalik modullar"
          value={h.examsWeek.value}
          delta={h.examsWeek.percent}
          deltaLabel={
            h.examsWeek.percent == null
              ? `o‘tgan hafta ${h.examsWeek.previous}`
              : "haftada"
          }
        />
        <Stat
          label="O‘rtacha ball"
          value={h.avgPercent ? `${h.avgPercent}%` : "—"}
          delta={avgDelta}
          deltaLabel={avgDelta == null ? "taqqoslash uchun ma’lumot kam" : "haftada"}
        />
      </div>

      {/* ── Grafik + eng qiyin mavzular ── */}
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        <Card className="flex flex-col">
          <CardHead
            title="Oyiga topshirilgan modullar"
            hint={`${new Date().getFullYear()} · jami ${totalYear}`}
          />
          <MonthChart data={months} />
        </Card>

        <Card>
          <CardHead title="Eng qiyin mavzular" />
          {topics.length === 0 ? (
            <Empty
              title="Hali ma’lumot yo‘q"
              body="Foydalanuvchilar xato qila boshlagach, shu yerda qaysi mavzular qiyinligi ko‘rinadi."
            />
          ) : (
            <>
              <div className="flex flex-col">
                {topics.map((t) => (
                  <BarRow
                    key={t.topic}
                    label={t.topic}
                    value={`${t.errorShare}% xato`}
                    percent={t.errorShare}
                    tone={t.errorShare >= 50 ? "bad" : "accent"}
                  />
                ))}
              </div>
              <p className="text-muted-2 mt-3 mb-0 text-[12.5px] leading-[1.55]">
                Xato ulushi 50% dan yuqori mavzular qayta ko‘rib chiqishga
                tavsiya etiladi.
              </p>
            </>
          )}
        </Card>
      </div>

      {/* ── Diqqat talab qiladigan savollar ── */}
      <Card>
        <CardHead
          title={`Diqqat talab qiladigan savollar · ${mistakes.length}`}
          action={
            <a
              href="/savol-sifati"
              className="text-petrol text-[13px] font-semibold"
            >
              Barchasini ko‘rish
            </a>
          }
        />
        {mistakes.length === 0 ? (
          <Empty
            title="Hammasi joyida"
            body="Hozircha muammoli savol yo‘q. Foydalanuvchilar imtihon topshira boshlagach, eng ko‘p xato qilingan savollar shu yerga chiqadi."
          />
        ) : (
          <Table head={["Savol", "Manba", "Kishi", "Xato"]}>
            {mistakes.map((m) => (
              <tr key={m.itemId}>
                <Td className="max-w-[560px]">
                  {texts.get(m.itemId)?.prompt ?? m.itemId}
                </Td>
                <Td>
                  <Pill tone={m.source === "pruefung" ? "info" : "plain"}>
                    {m.source === "pruefung" ? "Imtihon" : "Mashq"}
                  </Pill>
                </Td>
                <Td className="tnum font-semibold">{m.users}</Td>
                <Td className="tnum">{m.total}</Td>
              </tr>
            ))}
          </Table>
        )}
      </Card>

      {/* ── So'nggi foydalanuvchilar ── */}
      <Card>
        <CardHead
          title="Yangi foydalanuvchilar"
          action={
            <a
              href="/foydalanuvchilar"
              className="text-petrol text-[13px] font-semibold"
            >
              Barchasi
            </a>
          }
        />
        {users.length === 0 ? (
          <Empty
            title="Hali foydalanuvchi yo‘q"
            body="Birinchi foydalanuvchi Telegram orqali kirgach, shu yerda paydo bo‘ladi."
          />
        ) : (
          <Table head={["Ism", "Telegram", "Ro‘yxatdan", "Oxirgi faollik", "Imtihon"]}>
            {users.map((u) => (
              <tr key={u.id}>
                <Td className="font-semibold">{u.name}</Td>
                <Td className="text-muted-3">
                  {u.username ? `@${u.username}` : u.telegramId}
                </Td>
                <Td className="text-muted-3">{when(u.createdAt)} oldin</Td>
                <Td className="text-muted-3">{when(u.lastSeenAt)} oldin</Td>
                <Td className="tnum">{u.exams}</Td>
              </tr>
            ))}
          </Table>
        )}
      </Card>
    </Shell>
  );
}
