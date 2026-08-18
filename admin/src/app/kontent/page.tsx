import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { Card, Pill, SectionTitle, Table, Td } from "@/components/ui";
import { resolveItems, topMistakes } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ContentPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const rows = await topMistakes(25);
  const texts = await resolveItems(rows.map((r) => r.itemId));

  return (
    <Shell
      admin={admin}
      current="/kontent"
      title="Kontent sifati"
      hint="Eng ko‘p xato qilingan elementlar. Bitta savolda ko‘p kishi qoqilsa — savol qiyin, chalkash yoki javob noto‘g‘ri bo‘lishi mumkin."
    >
      <Card>
        <SectionTitle hint={`${rows.length} ta element`}>
          Eng ko‘p xato qilinganlar
        </SectionTitle>

        {rows.length === 0 ? (
          <p className="text-muted-2 m-0 text-[14px]">
            Hali xato yozuvi yo‘q. Foydalanuvchilar imtihon topshira boshlagach,
            shu yerda qaysi savollar muammoli ekani ko‘rinadi.
          </p>
        ) : (
          <Table head={["Savol", "Manba", "Kishi", "Xato", "Element"]}>
            {rows.map((r) => {
              const text = texts.get(r.itemId);
              return (
                <tr key={r.itemId}>
                  <Td className="max-w-[520px]">
                    {text?.prompt ? (
                      <div className="flex flex-col gap-[3px]">
                        <span className="leading-[1.45]">{text.prompt}</span>
                        {text.correct && (
                          <span className="text-muted-2 text-[13px]">
                            To‘g‘ri javob: {text.correct}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-muted-2">—</span>
                    )}
                  </Td>
                  <Td>
                    <Pill tone={r.source === "pruefung" ? "plain" : "ok"}>
                      {r.source === "pruefung" ? "Imtihon" : "Mashq"}
                    </Pill>
                  </Td>
                  <Td className="tnum font-semibold">{r.users}</Td>
                  <Td className="tnum">{r.total}</Td>
                  <Td className="text-muted-2 text-[12.5px] whitespace-nowrap">
                    {r.setId ? `${r.setId} · ` : ""}
                    {r.itemId}
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
