import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { Card, Pill, SectionTitle, Table, Td } from "@/components/ui";
import { recentUsers } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function fmt(iso: string): string {
  return new Date(iso).toLocaleString("uz-UZ", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function daysSince(iso: string): number {
  return Math.floor((Date.now() - Date.parse(iso)) / 86_400_000);
}

export default async function UsersPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const users = await recentUsers(100);
  const active = users.filter((u) => daysSince(u.lastSeenAt) <= 7).length;
  const withActivity = users.filter((u) => u.exams + u.uebung > 0).length;

  return (
    <Shell
      admin={admin}
      current="/foydalanuvchilar"
      title="Foydalanuvchilar"
      hint={`Oxirgi ${users.length} ta hisob, ro‘yxatdan o‘tish tartibida. ${active} tasi so‘nggi 7 kunda faol, ${withActivity} tasi kamida bitta topshiriq bajargan.`}
    >
      <Card>
        <SectionTitle hint={`${users.length} ta yozuv`}>Ro‘yxat</SectionTitle>
        {users.length === 0 ? (
          <p className="text-muted-2 m-0 text-[14px]">Hali foydalanuvchi yo‘q.</p>
        ) : (
          <Table
            head={[
              "Ism",
              "Telegram",
              "Ro‘yxatdan o‘tgan",
              "Oxirgi faollik",
              "Imtihon",
              "Mashq",
              "Holat",
            ]}
          >
            {users.map((u) => {
              const idle = daysSince(u.lastSeenAt);
              return (
                <tr key={u.id}>
                  <Td className="font-semibold">{u.name}</Td>
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
        )}
      </Card>
    </Shell>
  );
}
