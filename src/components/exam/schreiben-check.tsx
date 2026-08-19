"use client";

import * as React from "react";
import { cn } from "@/lib/cn";
import { FindingRow, FreitextField, RubricList } from "@/components/exam/fields";
import { analyzeSchreiben } from "@/lib/schreiben/analyze";
import type { SchreibenReport } from "@/lib/schreiben/analyze";
import type { ExamFormat, FreitextItem } from "@/lib/exam/types";

/**
 * Schreiben topshirig'i + avtomatik tekshiruv.
 *
 * Tekshiruv butunlay brauzerda, qoidalar bilan bajariladi — tarmoqqa
 * chiqmaydi, hech qanday kalit yoki xarajat talab qilmaydi.
 * Natija mezon katakchalarini oldindan belgilab qo'yadi; foydalanuvchi
 * ularni baribir qo'lda o'zgartira oladi.
 */
export function SchreibenCheck({
  item,
  format,
  value,
  checked,
  onChange,
  onToggle,
  onApply,
}: {
  item: FreitextItem;
  format: ExamFormat;
  value?: string;
  checked: string[];
  onChange: (value: string) => void;
  onToggle: (criterionId: string) => void;
  onApply: (criterionIds: string[]) => void;
}) {
  // Hisobot qaysi matn uchun chiqarilganini yodda tutamiz — matn o'zgarsa
  // eski natija o'z-o'zidan kuchini yo'qotadi (effekt kerak emas).
  const [run, setRun] = React.useState<{
    text: string;
    report: SchreibenReport;
  } | null>(null);

  const text = value ?? "";
  const report = run && run.text === text ? run.report : null;

  const check = () => {
    const next = analyzeSchreiben(item, format, text);
    setRun({ text, report: next });
    onApply(next.autoChecked);
  };

  return (
    <div className="flex flex-col gap-4">
      <FreitextField item={item} value={value} onChange={onChange} />

      <div className="border-line rounded-4xl flex flex-col gap-4 border bg-white px-[26px] py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="flex flex-col gap-[2px]">
            <span className="font-display text-[19px] font-bold">
              Avtomatik tekshiruv
            </span>
            <span className="text-muted-2 text-[13.5px]">
              Qoidalar bo‘yicha — internet va sun’iy intellektsiz
            </span>
          </span>
          <button
            type="button"
            onClick={check}
            disabled={!text.trim()}
            className={cn(
              "rounded-lg px-6 py-[12px] text-[15px] font-semibold transition-opacity",
              text.trim()
                ? "bg-ink text-paper cursor-pointer hover:opacity-90"
                : "bg-disabled-bg text-disabled-fg cursor-not-allowed",
            )}
          >
            {report ? "Qayta tekshirish" : "Matnni tekshirish"}
          </button>
        </div>

        {report ? (
          <ul className="m-0 flex list-none flex-col gap-[6px] p-0">
            {report.notes.map((finding, i) => (
              <FindingRow key={i} finding={finding} />
            ))}
          </ul>
        ) : (
          <span className="text-muted-2 text-[14.5px] leading-[1.5]">
            Matnni yozib bo‘lgach tugmani bosing: so‘z soni, murojaat va
            xayrlashuv, „Sie/du“ uslubi, Leitpunktlar qamrovi va bog‘lovchilar
            tekshiriladi. Grammatikani baholashni kod uddalay olmaydi — uni
            namuna bilan solishtirib o‘zingiz belgilaysiz.
          </span>
        )}
      </div>

      <RubricList
        criteria={item.criteria}
        checked={checked}
        onToggle={onToggle}
        sample={item.sample}
        checks={report?.criteria}
      />
    </div>
  );
}
