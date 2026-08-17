import type {
  ExamFormat,
  ExamSet,
  FormatSpec,
  ModuleId,
  ModuleSpec,
} from "@/lib/exam/types";

/**
 * Goethe-Zertifikat A1 · Start Deutsch 1.
 *
 * Manba: goethe.de rasmiy Modellsatz (bfu.goethe.de/a1_sd1).
 * Hören 15 + Lesen 15 + Schreiben 15 xom ball; har modul 25 ballga keltiriladi,
 * jami 100. Imtihon modulli emas — barcha qismlar birga topshiriladi va
 * umumiy 60 balldan o'tiladi.
 */
const GOETHE_A1: FormatSpec = {
  format: "goethe-a1",
  provider: "goethe",
  level: "A1",
  label: "Goethe-Zertifikat A1 · Start Deutsch 1",
  totalPoints: 100,
  passPercent: 60,
  passRule: "gesamt",
  modules: [
    {
      id: "hoeren",
      label: "Hören",
      timeSec: 20 * 60,
      rawMax: 15,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "mc", itemCount: 6, playCount: 2 },
        { nr: 2, taskType: "richtig-falsch", itemCount: 4, playCount: 1 },
        { nr: 3, taskType: "mc", itemCount: 5, playCount: 2 },
      ],
    },
    {
      id: "lesen",
      label: "Lesen",
      timeSec: 25 * 60,
      rawMax: 15,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "richtig-falsch", itemCount: 5 },
        { nr: 2, taskType: "mc", itemCount: 5 },
        { nr: 3, taskType: "richtig-falsch", itemCount: 5 },
      ],
    },
    {
      id: "schreiben",
      label: "Schreiben",
      timeSec: 20 * 60,
      rawMax: 15,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "formular", itemCount: 5 },
        { nr: 2, taskType: "freitext", itemCount: 1 },
      ],
    },
    {
      id: "sprechen",
      label: "Sprechen",
      timeSec: 15 * 60,
      rawMax: 15,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "sprechen", itemCount: 1 },
        { nr: 2, taskType: "sprechen", itemCount: 1 },
        { nr: 3, taskType: "sprechen", itemCount: 1 },
      ],
    },
  ],
};

/**
 * Goethe-Zertifikat A2.
 *
 * Manba: goethe.de rasmiy Modellsatz (bfu.goethe.de/a2_mod_2MX5).
 * Hören 4 Teil × 5 = 20 element (30 daq), Lesen 4 Teil × 5 = 20 element (30 daq),
 * Schreiben 2 topshiriq (30 daq), Sprechen 3 topshiriq (~15 daq).
 * Har modul 25 ballga keltiriladi, jami 100, o'tish 60.
 */
const GOETHE_A2: FormatSpec = {
  format: "goethe-a2",
  provider: "goethe",
  level: "A2",
  label: "Goethe-Zertifikat A2",
  totalPoints: 100,
  passPercent: 60,
  passRule: "gesamt",
  modules: [
    {
      id: "hoeren",
      label: "Hören",
      timeSec: 30 * 60,
      rawMax: 20,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "mc", itemCount: 5, playCount: 2 },
        { nr: 2, taskType: "zuordnung", itemCount: 5, playCount: 1 },
        { nr: 3, taskType: "mc", itemCount: 5, playCount: 1 },
        { nr: 4, taskType: "richtig-falsch", itemCount: 5, playCount: 2 },
      ],
    },
    {
      id: "lesen",
      label: "Lesen",
      timeSec: 30 * 60,
      rawMax: 20,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "mc", itemCount: 5 },
        { nr: 2, taskType: "mc", itemCount: 5 },
        { nr: 3, taskType: "mc", itemCount: 5 },
        { nr: 4, taskType: "zuordnung", itemCount: 5 },
      ],
    },
    {
      id: "schreiben",
      label: "Schreiben",
      timeSec: 30 * 60,
      rawMax: 20,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "freitext", itemCount: 1 },
        { nr: 2, taskType: "freitext", itemCount: 1 },
      ],
    },
    {
      id: "sprechen",
      label: "Sprechen",
      timeSec: 15 * 60,
      rawMax: 20,
      weighted: 25,
      teile: [
        { nr: 1, taskType: "sprechen", itemCount: 1 },
        { nr: 2, taskType: "sprechen", itemCount: 1 },
        { nr: 3, taskType: "sprechen", itemCount: 1 },
      ],
    },
  ],
};

/**
 * telc Deutsch B1 (Zertifikat Deutsch).
 *
 * Yozma qism 150 daqiqa: Leseverstehen + Sprachbausteine birga 90 daqiqa,
 * Hörverstehen ~30, Schriftlicher Ausdruck 30. Og'zaki qism ~15 daqiqa
 * (20 daqiqa tayyorgarlik bilan).
 *
 * Ball: LV 75 + SB 30 + HV 75 + SA 45 = 225 (yozma), Mündlich 75 → jami 300.
 * DIQQAT: yozma va og'zaki qism ALOHIDA-ALOHIDA 60% dan o'tishi kerak.
 */
const TELC_B1: FormatSpec = {
  format: "telc-b1",
  provider: "telc",
  level: "B1",
  label: "telc Deutsch B1 · Zertifikat Deutsch",
  totalPoints: 300,
  passPercent: 60,
  passRule: "separat",
  modules: [
    {
      id: "lesen",
      label: "Leseverstehen",
      timeSec: 60 * 60,
      rawMax: 75,
      weighted: 75,
      teile: [
        { nr: 1, taskType: "zuordnung", itemCount: 5 },
        { nr: 2, taskType: "mc", itemCount: 5 },
        { nr: 3, taskType: "zuordnung", itemCount: 10 },
      ],
    },
    {
      id: "sprachbausteine",
      label: "Sprachbausteine",
      timeSec: 30 * 60,
      rawMax: 30,
      weighted: 30,
      teile: [
        { nr: 1, taskType: "mc", itemCount: 10 },
        { nr: 2, taskType: "zuordnung", itemCount: 10 },
      ],
    },
    {
      id: "hoeren",
      label: "Hörverstehen",
      timeSec: 30 * 60,
      rawMax: 75,
      weighted: 75,
      teile: [
        { nr: 1, taskType: "richtig-falsch", itemCount: 5, playCount: 1 },
        { nr: 2, taskType: "richtig-falsch", itemCount: 10, playCount: 1 },
        { nr: 3, taskType: "richtig-falsch", itemCount: 5, playCount: 2 },
      ],
    },
    {
      id: "schreiben",
      label: "Schriftlicher Ausdruck",
      timeSec: 30 * 60,
      rawMax: 45,
      weighted: 45,
      teile: [{ nr: 1, taskType: "freitext", itemCount: 1 }],
    },
    {
      id: "sprechen",
      label: "Mündliche Prüfung",
      timeSec: 15 * 60,
      rawMax: 75,
      weighted: 75,
      teile: [
        { nr: 1, taskType: "sprechen", itemCount: 1 },
        { nr: 2, taskType: "sprechen", itemCount: 1 },
        { nr: 3, taskType: "sprechen", itemCount: 1 },
      ],
    },
  ],
};

/**
 * telc Deutsch B2.
 *
 * Tuzilma B1 bilan bir xil, matnlar murakkabroq va Hörverstehen qisqaroq
 * (~20 daqiqa). Yozma qism jami 140 daqiqa.
 * Ball taqsimoti B1 dagidek: LV 75 + SB 30 + HV 75 + SA 45 = 225, og'zaki 75.
 */
const TELC_B2: FormatSpec = {
  format: "telc-b2",
  provider: "telc",
  level: "B2",
  label: "telc Deutsch B2",
  totalPoints: 300,
  passPercent: 60,
  passRule: "separat",
  modules: [
    {
      id: "lesen",
      label: "Leseverstehen",
      timeSec: 60 * 60,
      rawMax: 75,
      weighted: 75,
      teile: [
        { nr: 1, taskType: "zuordnung", itemCount: 5 },
        { nr: 2, taskType: "mc", itemCount: 5 },
        { nr: 3, taskType: "zuordnung", itemCount: 10 },
      ],
    },
    {
      id: "sprachbausteine",
      label: "Sprachbausteine",
      timeSec: 30 * 60,
      rawMax: 30,
      weighted: 30,
      teile: [
        { nr: 1, taskType: "mc", itemCount: 10 },
        { nr: 2, taskType: "zuordnung", itemCount: 10 },
      ],
    },
    {
      id: "hoeren",
      label: "Hörverstehen",
      timeSec: 20 * 60,
      rawMax: 75,
      weighted: 75,
      teile: [
        { nr: 1, taskType: "richtig-falsch", itemCount: 5, playCount: 1 },
        { nr: 2, taskType: "richtig-falsch", itemCount: 10, playCount: 1 },
        { nr: 3, taskType: "richtig-falsch", itemCount: 5, playCount: 2 },
      ],
    },
    {
      id: "schreiben",
      label: "Schriftlicher Ausdruck",
      timeSec: 30 * 60,
      rawMax: 45,
      weighted: 45,
      teile: [{ nr: 1, taskType: "freitext", itemCount: 1 }],
    },
    {
      id: "sprechen",
      label: "Mündliche Prüfung",
      timeSec: 15 * 60,
      rawMax: 75,
      weighted: 75,
      teile: [
        { nr: 1, taskType: "sprechen", itemCount: 1 },
        { nr: 2, taskType: "sprechen", itemCount: 1 },
        { nr: 3, taskType: "sprechen", itemCount: 1 },
      ],
    },
  ],
};

export const FORMAT_SPECS: Partial<Record<ExamFormat, FormatSpec>> = {
  "goethe-a1": GOETHE_A1,
  "goethe-a2": GOETHE_A2,
  "telc-b1": TELC_B1,
  "telc-b2": TELC_B2,
};

export function formatSpec(format: ExamFormat): FormatSpec | undefined {
  return FORMAT_SPECS[format];
}

export function moduleSpec(
  spec: FormatSpec,
  id: ModuleId,
): ModuleSpec | undefined {
  return spec.modules.find((m) => m.id === id);
}

/** Modul yozma qismgami yoki og'zaki — telc'da o'tish sharti shunga bog'liq */
export function isOral(id: ModuleId) {
  return id === "sprechen";
}

/**
 * Kontentni spetsifikatsiyaga solishtiradi.
 * Xatolar ro'yxatini qaytaradi (bo'sh massiv = hammasi joyida).
 *
 * Ishlab chiqish rejimida imtihon yuklanganda avtomatik chaqiriladi —
 * shunda yangi variant yozganda element soni yoki ball yig'indisi
 * noto'g'ri bo'lsa darhol ko'rinadi.
 */
export function validateSet(set: ExamSet): string[] {
  const errors: string[] = [];
  const spec = formatSpec(set.format);

  if (!spec) {
    return [`${set.id}: "${set.format}" formati uchun spetsifikatsiya yo'q`];
  }

  const seenIds = new Set<string>();

  for (const ms of spec.modules) {
    const mod = set.modules.find((m) => m.id === ms.id);
    if (!mod) {
      errors.push(`${set.id}: "${ms.id}" moduli yo'q`);
      continue;
    }

    if (mod.teile.length !== ms.teile.length) {
      errors.push(
        `${set.id}/${ms.id}: ${ms.teile.length} ta Teil kutilgan, ${mod.teile.length} ta bor`,
      );
    }

    let rawSum = 0;

    for (const ts of ms.teile) {
      const teil = mod.teile.find((t) => t.nr === ts.nr);
      if (!teil) {
        errors.push(`${set.id}/${ms.id}: Teil ${ts.nr} yo'q`);
        continue;
      }

      if (teil.taskType !== ts.taskType) {
        errors.push(
          `${set.id}/${ms.id}/Teil ${ts.nr}: tur "${ts.taskType}" bo'lishi kerak, "${teil.taskType}" berilgan`,
        );
      }

      if (ts.playCount && teil.playCount !== ts.playCount) {
        errors.push(
          `${set.id}/${ms.id}/Teil ${ts.nr}: audio ${ts.playCount}× o'ynashi kerak`,
        );
      }

      const items = teil.blocks.flatMap((b) => b.items);
      if (items.length !== ts.itemCount) {
        errors.push(
          `${set.id}/${ms.id}/Teil ${ts.nr}: ${ts.itemCount} ta element kutilgan, ${items.length} ta bor`,
        );
      }

      for (const item of items) {
        if (seenIds.has(item.id)) {
          errors.push(`${set.id}: element id takrorlangan — ${item.id}`);
        }
        seenIds.add(item.id);
        rawSum += item.points;

        if (item.kind === "zuordnung") {
          const keys = new Set((teil.bank ?? []).map((b) => b.key));
          if (!keys.has(item.correct) && item.correct !== "x") {
            errors.push(
              `${set.id}: ${item.id} javobi "${item.correct}" Teil bankida yo'q`,
            );
          }
        }

        if (item.kind === "choice") {
          const keys = item.options.map((o) => o.key);
          if (!keys.includes(item.correct)) {
            errors.push(
              `${set.id}: ${item.id} javobi "${item.correct}" variantlar orasida yo'q`,
            );
          }
        }
      }
    }

    if (rawSum !== ms.rawMax) {
      errors.push(
        `${set.id}/${ms.id}: ballar yig'indisi ${rawSum}, spetsifikatsiyada ${ms.rawMax}`,
      );
    }
  }

  const weighted = spec.modules.reduce((n, m) => n + m.weighted, 0);
  if (weighted !== spec.totalPoints) {
    errors.push(
      `${set.format}: modul og'irliklari ${weighted}, jami ${spec.totalPoints} bo'lishi kerak`,
    );
  }

  return errors;
}
