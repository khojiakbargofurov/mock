import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { Card, SectionTitle, Table, Td } from "@/components/ui";
import { allowedIds } from "@/lib/auth";
import { tableSizes } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const LABEL: Record<string, string> = {
  users: "Foydalanuvchilar",
  profiles: "Profillar",
  attempts: "Mashq urinishlari",
  exam_attempts: "Imtihon modullari",
  exam_runs: "Tugallanmagan imtihonlar",
  mistakes: "Xatolar (Fehlerbuch)",
  vocab_state: "Lug‘at holati",
  login_requests: "Kirish so‘rovlari",
};

export default async function SystemPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const sizes = await tableSizes();
  const total = sizes.reduce((n, s) => n + s.rows, 0);

  return (
    <Shell
      admin={admin}
      current="/tizim"
      title="Tizim"
      hint="Baza holati va panel sozlamalari."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <SectionTitle hint={`jami ${total} qator`}>
            Jadvallar
          </SectionTitle>
          <Table head={["Jadval", "Qator"]}>
            {sizes.map((s) => (
              <tr key={s.table}>
                <Td>
                  <span className="font-semibold">
                    {LABEL[s.table] ?? s.table}
                  </span>
                  <span className="text-muted-2 ml-2 text-[12.5px]">
                    {s.table}
                  </span>
                </Td>
                <Td className="tnum">{s.rows}</Td>
              </tr>
            ))}
          </Table>
        </Card>

        <Card>
          <SectionTitle>Kirish huquqi</SectionTitle>
          <p className="text-muted-3 m-0 mb-3 text-[14px] leading-[1.6]">
            Panelga faqat quyidagi Telegram id lar kira oladi. Ro‘yxat
            <code className="bg-sand mx-1 rounded px-[5px] py-[1px] text-[13px]">
              ADMIN_TELEGRAM_IDS
            </code>
            muhit o‘zgaruvchisida saqlanadi — o‘zgartirish uchun Vercel
            sozlamalarida yangilab, qayta deploy qilish kerak.
          </p>
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {allowedIds().map((id) => (
              <li
                key={id}
                className="border-line-soft tnum flex items-center justify-between border-b py-2 text-[14px]"
              >
                <span>{id}</span>
                {id === admin.telegramId && (
                  <span className="text-muted-2 text-[12.5px]">siz</span>
                )}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Shell>
  );
}
