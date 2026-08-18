import { redirect } from "next/navigation";
import { allowedIds, currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { Card, CardHead, Pill, Table, Td } from "@/components/ui";
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

/** Imtihon qoidalari — kontentdagi spetsifikatsiyadan */
const RULES = [
  { label: "O‘tish chegarasi", value: "60%" },
  { label: "Goethe A1 · A2", value: "4 modul · 100 ball · umumiy hisob" },
  { label: "telc B1 · B2", value: "5 modul · 300 ball · yozma va og‘zaki alohida" },
  { label: "Hörverstehen", value: "Teil qoidasiga ko‘ra 1 yoki 2 marta o‘qiladi" },
  { label: "Sessiya muddati", value: "Admin panel — 12 soat" },
];

export default async function SettingsPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const sizes = await tableSizes();
  const total = sizes.reduce((n, s) => n + s.rows, 0);

  return (
    <Shell
      admin={admin}
      current="/sozlamalar"
      eyebrow="Tizim"
      title="Sozlamalar"
    >
      <div className="grid gap-4 xl:grid-cols-2">
        {/* ── Kirish huquqi ── */}
        <Card>
          <CardHead title="Kirish huquqi" hint={`${allowedIds().length} hisob`} />
          <Table head={["Telegram ID", "Huquq", ""]}>
            {allowedIds().map((id) => (
              <tr key={id}>
                <Td className="tnum font-semibold">{id}</Td>
                <Td>
                  <Pill tone="ok">to‘liq</Pill>
                </Td>
                <Td className="text-muted-2 text-right text-[12.5px]">
                  {id === admin.telegramId ? "siz" : ""}
                </Td>
              </tr>
            ))}
          </Table>
          <p className="text-muted-2 mt-4 mb-0 text-[12.5px] leading-[1.6]">
            Ro‘yxat{" "}
            <code className="bg-sand rounded px-[5px] py-[1px] text-[12px]">
              ADMIN_TELEGRAM_IDS
            </code>{" "}
            muhit o‘zgaruvchisida. O‘zgartirish uchun Vercel sozlamalarida
            yangilanadi — panelda tahrirlash ataylab yo‘q, chunki bu xavfsizlik
            chegarasi.
          </p>
        </Card>

        {/* ── Imtihon qoidalari ── */}
        <Card>
          <CardHead title="Imtihon qoidalari" hint="faqat o‘qish uchun" />
          <Table head={["Qoida", "Qiymat"]}>
            {RULES.map((r) => (
              <tr key={r.label}>
                <Td className="font-semibold">{r.label}</Td>
                <Td className="text-muted-3">{r.value}</Td>
              </tr>
            ))}
          </Table>
          <p className="text-muted-2 mt-4 mb-0 text-[12.5px] leading-[1.6]">
            Qoidalar kontent spetsifikatsiyasida belgilangan va har deployda
            validatordan o‘tadi.
          </p>
        </Card>
      </div>

      {/* ── Baza ── */}
      <Card>
        <CardHead title="Baza holati" hint={`jami ${total} qator`} />
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
          {sizes.map((s) => (
            <div
              key={s.table}
              className="border-line-soft flex items-baseline justify-between gap-3 border-b py-[10px]"
            >
              <span className="text-[13.5px]">{LABEL[s.table] ?? s.table}</span>
              <span className="tnum text-[14px] font-semibold">{s.rows}</span>
            </div>
          ))}
        </div>
      </Card>
    </Shell>
  );
}
