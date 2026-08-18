import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { Card, CardHead, Empty, Pill, Table, Td } from "@/components/ui";
import { resolveItems, topMistakes } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function QualityPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const rows = await topMistakes(30);
  const texts = await resolveItems(rows.map((r) => r.itemId));

  return (
    <Shell
      admin={admin}
      current="/savol-sifati"
      eyebrow="Analitika"
      title="Savol sifati"
      actions={
        <span className="border-line bg-sand text-muted-3 rounded-lg border px-4 py-[9px] text-[13.5px] font-semibold">
          {rows.length} element
        </span>
      }
    >
      <Card>
        <CardHead
          title="Eng ko‘p xato qilingan savollar"
          hint="ko‘p kishi qoqilgan savollar yuqorida"
        />

        {rows.length === 0 ? (
          <Empty
            title="Hozircha muammoli savol yo‘q"
            body="Foydalanuvchilar imtihon va mashq topshira boshlagach, shu yerda qaysi savollar chalkash yoki juda qiyin ekani ko‘rinadi."
          />
        ) : (
          <Table head={["Savol", "To‘g‘ri javob", "Manba", "Kishi", "Xato", "Element"]}>
            {rows.map((r) => {
              const text = texts.get(r.itemId);
              return (
                <tr key={r.itemId}>
                  <Td className="max-w-[460px] leading-[1.45]">
                    {text?.prompt ?? <span className="text-muted-2">—</span>}
                  </Td>
                  <Td className="text-muted-3">{text?.correct ?? "—"}</Td>
                  <Td>
                    <Pill tone={r.source === "pruefung" ? "info" : "plain"}>
                      {r.source === "pruefung" ? "Imtihon" : "Mashq"}
                    </Pill>
                  </Td>
                  <Td className="tnum font-semibold">{r.users}</Td>
                  <Td className="tnum">{r.total}</Td>
                  <Td className="text-muted-2 text-[12px] whitespace-nowrap">
                    {r.setId ? `${r.setId} · ` : ""}
                    {r.itemId}
                  </Td>
                </tr>
              );
            })}
          </Table>
        )}
      </Card>

      <Card>
        <CardHead title="Qanday o‘qish kerak" />
        <ul className="text-muted-3 m-0 flex list-none flex-col gap-2 p-0 text-[14px] leading-[1.6]">
          <li>
            <strong>Ko‘p kishi bir savolda qoqilsa</strong> — savol qiyin,
            chalkash yoki javob varianti noto‘g‘ri bo‘lishi mumkin.
          </li>
          <li>
            <strong>Bir kishi ko‘p marta xato qilsa</strong> — bu odatiy hol:
            Fehlerbuch shu savolni takror-takror qaytaradi.
          </li>
          <li>
            Savol matnini o‘zgartirish uchun kontent fayllari tahrirlanadi va
            deploy qilinadi — panel kontentni o‘zgartirmaydi.
          </li>
        </ul>
      </Card>
    </Shell>
  );
}
