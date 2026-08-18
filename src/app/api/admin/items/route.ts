import { EXAM_SETS, locateExamItem } from "@/lib/exam/registry";
import { correctText, promptText } from "@/lib/exam/labels";
import { questionById } from "@/lib/questions";

/**
 * Admin panel uchun element matnlarini qaytaradi.
 *
 * Fehlerbuch bazasida faqat element id saqlanadi; savol matni esa kod
 * ichida. Admin ilovasi alohida deploy bo'lgani uchun matnni shu yerdan
 * so'raydi. Kontent maxfiy emas, lekin endpoint baribir umumiy sir bilan
 * yopilgan — begona so'rovlar serverni bekorga yuklamasin.
 */
const EXAM_SET_IDS = EXAM_SETS.map((s) => s.id);

export async function POST(request: Request) {
  const secret = process.env.ADMIN_API_SECRET;
  if (!secret || request.headers.get("x-admin-secret") !== secret) {
    return new Response("Forbidden", { status: 403 });
  }

  let ids: string[] = [];
  try {
    const body = (await request.json()) as { ids?: unknown };
    if (Array.isArray(body.ids)) {
      ids = body.ids
        .filter((x): x is string => typeof x === "string")
        .slice(0, 200);
    }
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const items = ids.map((id) => {
    // Imtihon elementi — qaysi variant/modulda ekanini ham qaytaramiz
    for (const setId of EXAM_SET_IDS) {
      const found = locateExamItem(setId, id);
      if (!found) continue;
      return {
        id,
        kind: "pruefung" as const,
        prompt: promptText(found.item),
        correct: correctText(found.item, found.bank),
        setId,
        moduleId: found.moduleId,
        teil: found.teilNr,
      };
    }

    // Übung savoli
    const question = questionById(id);
    if (question) {
      return {
        id,
        kind: "uebung" as const,
        prompt: question.prompt,
        correct: question.options[question.correctIndex] ?? "",
        level: question.level,
        topic: question.topic,
      };
    }

    return { id, kind: "unknown" as const, prompt: null, correct: null };
  });

  return Response.json({ items });
}
