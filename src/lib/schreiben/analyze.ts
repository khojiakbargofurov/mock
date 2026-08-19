import type { ExamFormat, FreitextItem } from "@/lib/exam/types";

/**
 * Schreiben matnini AI'siz, faqat qoidalar bilan tekshiradi.
 *
 * Nima qila oladi: so'z soni, murojaat/xayrlashuv, hurmat shakli (Sie/du),
 * Leitpunkt qamrovi (kalit so'z bo'yicha, taxminiy), bog'lovchilar xilma-xilligi,
 * mexanik xatolar (kichik harfli gap boshi, nuqta yo'qligi va h.k.).
 *
 * Nima qila olmaydi: grammatika va imlo to'g'riligini haqiqiy baholash —
 * buning uchun lug'at va morfologiya kerak. O'sha mezon "manuell" bo'lib qoladi.
 */

/* ── Natija tuzilmasi ────────────────────────────────────────────────────── */

/** `manuell` — kod hukm chiqara olmaydi, foydalanuvchi o'zi belgilaydi */
export type Verdict = "ok" | "teilweise" | "fehlt" | "manuell";

export interface Finding {
  level: "ok" | "warn" | "bad";
  /** O'zbekcha izoh */
  text: string;
  /** Matndan olingan parcha yoki nemischa namuna */
  detail?: string;
}

export interface CriterionCheck {
  id: string;
  verdict: Verdict;
  findings: Finding[];
}

export interface SchreibenReport {
  words: number;
  criteria: CriterionCheck[];
  /** Avtomatik belgilanadigan mezonlar (verdict === "ok") */
  autoChecked: string[];
  /** Mezonga bog'lanmagan umumiy kuzatuvlar */
  notes: Finding[];
}

/* ── Matnni bo'laklarga ajratish ─────────────────────────────────────────── */

const WORD_RE = /[A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß'’-]*/g;

/** WordCount komponenti bilan bir xil qoida — bo'shliq bo'yicha */
export function countWords(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}

function wordsOf(text: string): string[] {
  return text.match(WORD_RE) ?? [];
}

/** Nuqta har doim ham gap oxiri emas: „5. Juli“, „z. B.“, „Nr. 12“ */
const ABBREV = /\b(z|b|bzw|ca|usw|ggf|evtl|inkl|nr|dr|hr|fr|st|str|abs|bsp|tel|etc|max|min)\.$/i;

function sentencesOf(text: string): string[] {
  const out: string[] = [];
  let start = 0;
  const re = /[.!?]+(?:\s+|$)/g;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    const before = text.slice(0, m.index + 1);
    if (/\d\.$/.test(before) || ABBREV.test(before.trimEnd())) continue;

    const s = text.slice(start, m.index + m[0].length).trim();
    if (s) out.push(s);
    start = m.index + m[0].length;
  }

  const tail = text.slice(start).trim();
  if (tail) out.push(tail);
  return out;
}

function paragraphsOf(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/* ── Murojaat, xayrlashuv, hurmat shakli ─────────────────────────────────── */

const ANREDE_FORMELL =
  /sehr\s+geehrte[rs]?\s+(damen\s+und\s+herren|frau|herr)/i;
const ANREDE_INFORMELL =
  /^\s*(liebe[rs]?\s+\w|hallo|hi\b|guten\s+(tag|morgen|abend)|servus|moin)/im;

const GRUSS_FORMELL =
  /(mit\s+freundlichen\s+gr(ü|ue)(ß|ss)en|freundliche\s+gr(ü|ue)(ß|ss)e|hochachtungsvoll)/i;
const GRUSS_INFORMELL =
  /((viele|liebe|herzliche|beste|ganz\s+liebe)\s+gr(ü|ue)(ß|ss)e|bis\s+bald|tsch(ü|ue)ss|\blg\b)/i;

type Register = "formell" | "informell";

/** Namunaviy javobdan kutilayotgan uslubni aniqlaymiz */
function expectedRegister(sample: string): Register {
  if (ANREDE_FORMELL.test(sample) || GRUSS_FORMELL.test(sample)) return "formell";
  return "informell";
}

/**
 * Hurmat shakli „Sie“ — gap boshida turgani hisobga olinmaydi,
 * chunki u yerda „sie“ (u/ular) ham katta harf bilan yoziladi.
 */
function countSie(text: string): number {
  let n = 0;
  const re = /\bSie\b/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    const before = text.slice(0, m.index).replace(/\s+$/, "");
    if (before && !".!?:".includes(before.slice(-1))) n++;
  }
  return n;
}

function countFormell(text: string): number {
  return (
    countSie(text) +
    (text.match(/\bIhnen\b/g) ?? []).length +
    (text.match(/\bIhre[mnrs]?\b/g) ?? []).length
  );
}

function countInformell(text: string): number {
  return (
    text.match(/\b(du|dich|dir|dein[emnrs]?|euch|euer|eure[mnrs]?)\b/gi) ?? []
  ).length;
}

/* ── Leitpunkt qamrovi ───────────────────────────────────────────────────── */

/** Har bulletda uchraydigan, mazmun tashimaydigan so'zlar */
const STOPP = new Set([
  // artikl, olmosh, predlog, bog'lovchi
  "der","die","das","den","dem","des","ein","eine","einen","einem","einer","eines",
  "und","oder","aber","doch","denn","dass","wenn","weil","auch","noch","nur","schon",
  "sehr","mehr","sich","sie","ihr","ihm","ihn","ich","wir","uns","mich","mir","dich",
  "dir","euch","nicht","kein","keine","keinen","ist","sind","war","waren","haben",
  "hat","hatte","habe","wird","werden","wurde","sein","seine","ihre","unser","bitte",
  "was","wer","wie","wo","wann","warum","welche","welcher","welches","etwas","nichts",
  "alle","alles","man","von","mit","für","auf","aus","bei","nach","über","unter","vor",
  "hinter","zwischen","durch","ohne","gegen","um","an","in","im","am","zum","zur",
  "beim","vom","als","also","dann","dort","hier","dabei","damit","daran","darauf",
  "diese","dieser","dieses","diesem","diesen","jede","jeder","jedes","viel","viele",
  "gut","gern","bitte","danke","können","könnt","kann","möchte","möchten","wollen",
  "will","soll","sollen","muss","müssen","darf","dürfen","werden",
  // topshiriq fe'llari — har bulletda bor, mazmuni yo'q
  "schreiben","schreibe","nennen","nennt","fragen","frage","fragt","beschreiben",
  "beschreibe","sagen","sage","erklären","erkläre","begründen","begründe",
  "berichten","berichte","mitteilen","teilen","erwähnen","antworten","antworte",
  "machen","geben","punkt","punkte","bitten","erklaeren","erzählen","erzähle",
  "könnte","könnten","geht","gehen","gibt","konkreten","konkrete","genau",
  "kommen","komme","kommt","sagen","sagt","möchte","wollte","lassen",
]);

function keywordsOf(bullet: string): string[] {
  const seen = new Set<string>();
  for (const w of wordsOf(bullet)) {
    const lower = w.toLowerCase();
    if (lower.length >= 4 && !STOPP.has(lower)) seen.add(lower);
  }
  return [...seen];
}

/**
 * Kalit so'z matnda bormi. Qo'shimchalarni (Information → Informationen) va
 * qo'shma so'zlarni (Hotel → Hotelzimmer) ushlash uchun o'zak bo'yicha qidiramiz.
 */
function hasKeyword(keyword: string, haystack: string): boolean {
  const stem = keyword.slice(0, Math.max(4, keyword.length - 3));
  return haystack.includes(stem);
}

/**
 * Nutq akti qatlami — Leitpunktlar ko'pincha buyruq shaklida beriladi
 * („Fragen Sie nach dem Preis“), yaxshi javob esa uni o'z so'zi bilan bajaradi.
 * Shuning uchun kalit so'zdan tashqari harakatning izini ham qidiramiz.
 */
interface SpeechAct {
  /** Leitpunkt shu turgami */
  bullet: RegExp;
  /** Javobda harakat bajarilganini ko'rsatuvchi iz */
  marker: RegExp;
  /** Iz topilmasa beriladigan maslahat */
  hint: string;
}

const ACTS: SpeechAct[] = [
  {
    bullet: /\bfragen sie\b|\?/i,
    marker:
      /\?|k(ö|oe)nnten sie|k(ö|oe)nnen sie|w(ä|ae)re es m(ö|oe)glich|ich m(ö|oe)chte wissen|teilen sie mir mit/i,
    hint: "savolni savol shaklida yozing („Könnten Sie mir bitte …?“)",
  },
  {
    bullet: /\bbitten sie\b|\bbitte\b/i,
    marker:
      /\bbitte\b|bitten|w(ä|ae)re ich dankbar|k(ö|oe)nnten sie|ich h(ä|ae)tte gern/i,
    hint: "iltimosni ochiq bildiring („Ich möchte Sie bitten, …“)",
  },
  {
    bullet: /vorschlag|schlagen sie vor/i,
    marker:
      /schlage .{0,20}vor|vorschlag|k(ö|oe)nnte man|man k(ö|oe)nnte|man sollte|sollte man|vielleicht|w(ä|ae)re es (gut|sinnvoll|besser)|(sinnvoller|besser) w(ä|ae)re|erg(ä|ae)nzend|k(ö|oe)nnen wir|wollen wir|wie w(ä|ae)re es|treffen wir/i,
    hint: "aniq taklif kiriting („Ich schlage vor, …“)",
  },
  {
    bullet: /entschuldig/i,
    marker: /entschuldig|tut mir leid|verzeihen sie|es tut mir/i,
    hint: "kechirim so‘rang („Es tut mir leid, …“)",
  },
  {
    bullet: /\bwarum\b|begr(ü|ue)nden sie|\bgrund\b/i,
    marker:
      /\bweil\b|\bdenn\b|deshalb|deswegen|aus diesem grund|der grund|n(ä|ae)mlich|\bleider\b|\bda ich\b/i,
    hint: "sababni ayting („…, weil …“)",
  },
  {
    bullet: /zeitpunkt|\bwann\b|termin|datum|wie lange|zeitraum|\bdauer/i,
    marker:
      /\d{1,2}\.|januar|februar|m(ä|ae)rz|april|\bmai\b|juni|juli|august|september|oktober|november|dezember|montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag|n(ä|ae)chste|morgen|woche|monat|\buhr\b/i,
    hint: "aniq vaqt yoki sanani yozing",
  },
];

interface BulletHit {
  index: number;
  bullet: string;
  found: string[];
  missing: string[];
  ratio: number;
  /** Leitpunktga mos nutq akti topildimi */
  actOk: boolean;
  /** Akt bajarilmagan bo'lsa — maslahat */
  hint?: string;
}

function bulletCoverage(item: FreitextItem, text: string): BulletHit[] {
  const haystack = text.toLowerCase();
  return item.bullets.map((bullet, index) => {
    const keys = keywordsOf(bullet);
    const found = keys.filter((k) => hasKeyword(k, haystack));
    const missing = keys.filter((k) => !found.includes(k));

    const acts = ACTS.filter((a) => a.bullet.test(bullet));
    const done = acts.filter((a) => a.marker.test(text));

    return {
      index,
      bullet,
      found,
      missing,
      ratio: keys.length ? found.length / keys.length : 1,
      actOk: acts.length > 0 && done.length === acts.length,
      hint: acts.find((a) => !a.marker.test(text))?.hint,
    };
  });
}

/**
 * Ba'zi Leitpunktlar butunlay umumiy bo'ladi — „Beschreiben Sie das Problem“,
 * „Erklären Sie die Situation“. Ularda tekshiriladigan mazmun so'zi yo'q,
 * shuning uchun kod ular haqida hukm chiqarmaydi.
 */
const GENERIC = new Set([
  "situation","problem","probleme","sache","thema","meinung","erfahrung",
  "erfahrungen","ordnung","folgen","grund","gründe","vorschlag","vorschläge",
  "einzelheiten","details","stellung","bezug","argument","beispiel",
  "vereinbart","versprochen","besprochen","abgemacht",
]);

function bulletVerdict(hit: BulletHit): Verdict {
  const strong =
    hit.ratio >= 0.5 ||
    hit.found.length >= 2 ||
    (hit.found.length >= 1 && hit.actOk) ||
    (hit.found.length === 0 && hit.actOk && hit.missing.length <= 2);
  if (strong) return "ok";
  if (hit.found.length >= 1 || hit.actOk) return "teilweise";

  // Hech narsa topilmadi. Leitpunktning o'zida tekshirsa bo'ladigan
  // mazmun bormi? Bo'lmasa — bu foydalanuvchi xatosi emas, kodning cheki.
  const judgeable = hit.missing.some((k) => !GENERIC.has(k));
  return judgeable ? "fehlt" : "manuell";
}

/* ── Bog'lovchilar va so'z boyligi ───────────────────────────────────────── */

const KONNEKTOREN = [
  "und","aber","oder","denn","weil","dass","wenn","als","obwohl","trotzdem",
  "deshalb","deswegen","darum","daher","außerdem","ausserdem","zuerst","danach",
  "dann","jedoch","allerdings","damit","sondern","zwar","dennoch","folglich",
  "zudem","ferner","einerseits","andererseits","während","bevor","nachdem",
  "seitdem","falls","sobald","somit","schließlich","zum beispiel","vor allem",
];

/** Formatga qarab kutiladigan minimal bog'lovchi xilma-xilligi */
const KONNEKTOR_MIN: Record<ExamFormat, number> = {
  "goethe-a1": 1,
  "goethe-a2": 1,
  "telc-b1": 2,
  "telc-b2": 3,
};

/** telc'da xat kamida murojaat + tana + xayrlashuv bo'lib ajralishi kutiladi */
const ABSATZ_MIN: Record<ExamFormat, number> = {
  "goethe-a1": 0,
  "goethe-a2": 0,
  "telc-b1": 3,
  "telc-b2": 3,
};

function usedKonnektoren(text: string): string[] {
  const lower = ` ${text.toLowerCase()} `;
  return KONNEKTOREN.filter((k) => lower.includes(` ${k} `));
}

/** Ketma-ket 3 ta gap bir xil so'z bilan boshlansa — takror */
function repeatedStarts(sentences: string[]): string | null {
  let last = "";
  let run = 0;
  for (const s of sentences) {
    const first = (wordsOf(s)[0] ?? "").toLowerCase();
    if (first && first === last) {
      run++;
      if (run >= 2) return first;
    } else {
      last = first;
      run = 0;
    }
  }
  return null;
}

/* ── Mexanik xatolar ─────────────────────────────────────────────────────── */

function mechanicalFindings(text: string): Finding[] {
  const out: Finding[] = [];
  const sentences = sentencesOf(text);

  // Nemischada murojaatdan keyingi vergul kichik harf bilan davom etadi —
  // shuning uchun birinchi gapni tekshirmaymiz.
  const skipFirst = /[,:]\s*$/m.test(text.split("\n")[0] ?? "");
  const lower: string[] = [];
  sentences.forEach((s, i) => {
    if (i === 0 && skipFirst) return;
    const first = wordsOf(s)[0];
    if (first && first[0] === first[0].toLowerCase()) lower.push(s);
  });
  if (lower.length > 0) {
    out.push({
      level: "warn",
      text:
        lower.length === 1
          ? "Bitta gap kichik harf bilan boshlangan."
          : `${lower.length} ta gap kichik harf bilan boshlangan.`,
      detail: lower[0].slice(0, 60) + (lower[0].length > 60 ? "…" : ""),
    });
  }

  const trimmed = text.trim();
  if (trimmed && !/[.!?]$/.test(trimmed.split("\n").pop()?.trim() ?? "")) {
    // Oxirgi qator odatda imzo bo'ladi — faqat gap bo'lsa ogohlantiramiz
    const lastLine = trimmed.split("\n").pop()?.trim() ?? "";
    if (countWords(lastLine) > 4) {
      out.push({ level: "warn", text: "Oxirgi gap tinish belgisisiz tugagan.", detail: lastLine.slice(0, 60) });
    }
  }

  if (/\s{2,}/.test(text.replace(/\n/g, ""))) {
    out.push({ level: "warn", text: "Ikki marta bo‘shliq qo‘yilgan joy bor." });
  }
  if (/\s+[,.;:!?]/.test(text)) {
    out.push({ level: "warn", text: "Tinish belgisidan oldin bo‘shliq turibdi." });
  }

  // Ergash gap oldidan vergul — nemischada majburiy
  const sub = /\b(weil|dass|obwohl)\b/g;
  let m: RegExpExecArray | null;
  while ((m = sub.exec(text)) !== null) {
    const before = text.slice(0, m.index).replace(/\s+$/, "");
    if (!before || ".!?".includes(before.slice(-1))) continue; // gap boshi
    if (before.slice(-1) !== ",") {
      out.push({
        level: "warn",
        text: `„${m[0]}“ oldidan vergul kerakmi — tekshiring.`,
        detail: text.slice(Math.max(0, m.index - 30), m.index + 20).trim(),
      });
      break; // bitta eslatma yetarli
    }
  }

  const longest = sentences.reduce(
    (acc, s) => (countWords(s) > countWords(acc) ? s : acc),
    "",
  );
  if (countWords(longest) > 35) {
    out.push({
      level: "warn",
      text: `Juda uzun gap (${countWords(longest)} so‘z) — bo‘lib yuboring.`,
      detail: longest.slice(0, 70) + "…",
    });
  }

  if (!/[äöüßÄÖÜ]/.test(text) && /\b\w*(ae|oe|ue|ss)\w*\b/.test(text)) {
    out.push({
      level: "warn",
      text: "Matnda umlaut yo‘q — „ä ö ü ß“ o‘rniga „ae oe ue ss“ yozgan bo‘lishingiz mumkin.",
    });
  }

  return out;
}

/* ── Mezonlarni tekshiruvlarga bog'lash ──────────────────────────────────── */

type Slot =
  | { kind: "bullet"; index: number }
  | { kind: "allBullets" }
  | { kind: "form" }
  | { kind: "structure" }
  | { kind: "vocabulary" }
  | { kind: "accuracy" };

/**
 * Har formatning mezonlari boshqa narsani o'lchaydi.
 * Goethe A1'da c1–c3 — alohida Leitpunktlar, c4 — matn shakli.
 * Qolganlarida c1 — butun mazmun, c2 — tuzilish/uslub, c3 — so'z boyligi, c4 — to'g'rilik.
 */
const SLOTS: Record<ExamFormat, Record<string, Slot>> = {
  "goethe-a1": {
    c1: { kind: "bullet", index: 0 },
    c2: { kind: "bullet", index: 1 },
    c3: { kind: "bullet", index: 2 },
    c4: { kind: "form" },
  },
  "goethe-a2": {
    c1: { kind: "allBullets" },
    c2: { kind: "structure" },
    c3: { kind: "vocabulary" },
    c4: { kind: "accuracy" },
  },
  "telc-b1": {
    c1: { kind: "allBullets" },
    c2: { kind: "structure" },
    c3: { kind: "vocabulary" },
    c4: { kind: "accuracy" },
  },
  "telc-b2": {
    c1: { kind: "allBullets" },
    c2: { kind: "structure" },
    c3: { kind: "vocabulary" },
    c4: { kind: "accuracy" },
  },
};

/* ── Asosiy funksiya ─────────────────────────────────────────────────────── */

export function analyzeSchreiben(
  item: FreitextItem,
  format: ExamFormat,
  raw: string,
): SchreibenReport {
  const text = raw.trim();
  const words = countWords(text);
  const notes: Finding[] = [];

  if (!text) {
    return {
      words: 0,
      criteria: item.criteria.map((c) => ({
        id: c.id,
        verdict: "fehlt" as Verdict,
        findings: [{ level: "bad", text: "Matn yozilmagan." }],
      })),
      autoChecked: [],
      notes: [{ level: "bad", text: "Avval matn yozing." }],
    };
  }

  /* Umumiy o'lchovlar */
  const sentences = sentencesOf(text);
  const absaetze = paragraphsOf(text).length;
  const hits = bulletCoverage(item, text);
  const konnektoren = usedKonnektoren(text);
  const wanted = expectedRegister(item.sample);
  const formell = countFormell(text);
  const informell = countInformell(text);
  const hasAnrede = ANREDE_FORMELL.test(text) || ANREDE_INFORMELL.test(text);
  const hasGruss = GRUSS_FORMELL.test(text) || GRUSS_INFORMELL.test(text);
  const mech = mechanicalFindings(text);

  /* So'z soni — mazmun bahosiga ta'sir qiladi */
  const tooShort = words < item.minWords;
  const tooLong = words > item.maxWords;
  notes.push(
    tooShort
      ? {
          level: "bad",
          text: `${words} so‘z — kamida ${item.minWords} kerak. Rasmiy imtihonda qisqa matndan mazmun ballari ayiriladi.`,
        }
      : tooLong
        ? {
            level: "warn",
            text: `${words} so‘z — chegara ${item.maxWords}. Ortiqcha qism baholanmasligi mumkin.`,
          }
        : {
            level: "ok",
            text: `${words} so‘z — talab ${item.minWords}–${item.maxWords} oralig‘ida.`,
          },
  );

  /* Imzo — xayrlashuvdan keyin ism turibdimi */
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const grussLine = lines.findIndex((l) => GRUSS_FORMELL.test(l) || GRUSS_INFORMELL.test(l));
  const hasUnterschrift = grussLine >= 0 && grussLine < lines.length - 1;

  /* ── Har mezon uchun hukm ─────────────────────────────────────────────── */

  const slotsForFormat = SLOTS[format] ?? {};

  /** Matn minimumdan qisqa bo'lsa, hech bir mezon to'liq bajarilgan sanalmaydi */
  const shortNote: Finding = {
    level: "warn",
    text: "Matn belgilangan hajmdan qisqa — shu sababli bu mezon to‘liq deb belgilanmadi.",
  };

  const criteria: CriterionCheck[] = item.criteria.map((criterion) => {
    const slot: Slot = slotsForFormat[criterion.id] ?? { kind: "accuracy" };
    const findings: Finding[] = [];

    switch (slot.kind) {
      case "bullet": {
        const hit = hits[slot.index];
        if (!hit) return { id: criterion.id, verdict: "manuell", findings };
        let verdict = bulletVerdict(hit);
        const demoted = tooShort && verdict === "ok";
        if (demoted) verdict = "teilweise";

        findings.push({
          level:
            verdict === "ok" ? "ok" : verdict === "fehlt" ? "bad" : "warn",
          text:
            verdict === "ok"
              ? "Bu nuqta matnda yoritilgan."
              : verdict === "teilweise"
                ? "Bu nuqta zaif yoritilgan — kengaytiring."
                : verdict === "fehlt"
                  ? "Bu nuqta matnda topilmadi."
                  : "Bu nuqtani kod tekshira olmadi — o‘zingiz qarang.",
          detail:
            verdict === "ok"
              ? undefined
              : (hit.hint ??
                `Kutilgan so‘zlar: ${hit.missing.slice(0, 5).join(", ")}`),
        });
        if (demoted) findings.push(shortNote);
        return { id: criterion.id, verdict, findings };
      }

      case "allBullets": {
        const verdicts = hits.map(bulletVerdict);

        hits.forEach((h, i) => {
          const v = verdicts[i];
          findings.push({
            level: v === "ok" ? "ok" : v === "fehlt" ? "bad" : "warn",
            text: `${h.index + 1}-nuqta: ${
              v === "ok"
                ? "yoritilgan"
                : v === "teilweise"
                  ? "zaif yoritilgan"
                  : v === "fehlt"
                    ? "topilmadi"
                    : "kod tekshira olmadi"
            }`,
            detail: v === "ok" ? undefined : (h.hint ?? h.bullet),
          });
        });

        // Bitta nuqta ham tekshirilmagan bo'lsa, butun mezonni avtomatik
        // belgilab qo'ymaymiz — noto'g'ri ball berishdan ko'ra so'ragan yaxshi.
        let verdict: Verdict = verdicts.includes("fehlt")
          ? "fehlt"
          : verdicts.includes("teilweise")
            ? "teilweise"
            : verdicts.includes("manuell")
              ? "manuell"
              : "ok";
        if (tooShort && verdict === "ok") {
          verdict = "teilweise";
          findings.push(shortNote);
        }
        return { id: criterion.id, verdict, findings };
      }

      case "form": {
        findings.push(
          hasAnrede
            ? { level: "ok", text: "Murojaat bor." }
            : { level: "bad", text: "Murojaat yo‘q (masalan „Sehr geehrte Damen und Herren,“)." },
        );
        findings.push(
          hasGruss
            ? { level: "ok", text: "Xayrlashuv bor." }
            : { level: "bad", text: "Xayrlashuv yo‘q (masalan „Mit freundlichen Grüßen“)." },
        );
        findings.push(
          hasUnterschrift
            ? { level: "ok", text: "Xayrlashuvdan keyin ism turibdi." }
            : { level: "warn", text: "Oxirida ismingizni yozing." },
        );
        const complete = hasAnrede && hasGruss && hasUnterschrift;
        if (complete && tooShort) findings.push(shortNote);
        const verdict: Verdict =
          complete && !tooShort
            ? "ok"
            : hasAnrede || hasGruss
              ? "teilweise"
              : "fehlt";
        return { id: criterion.id, verdict, findings };
      }

      case "structure": {
        findings.push(
          hasAnrede
            ? { level: "ok", text: "Murojaat bor." }
            : { level: "bad", text: "Murojaat yo‘q." },
        );
        findings.push(
          hasGruss
            ? { level: "ok", text: "Xayrlashuv bor." }
            : { level: "bad", text: "Xayrlashuv yo‘q." },
        );

        const minAbs = ABSATZ_MIN[format] ?? 0;
        const absOk = absaetze >= minAbs;
        if (minAbs > 0) {
          findings.push(
            absOk
              ? { level: "ok", text: `${absaetze} ta abzats — tuzilish ko‘rinib turibdi.` }
              : {
                  level: "warn",
                  text: `${absaetze} ta abzats — kamida ${minAbs} ta bo‘lsin (murojaat · asosiy qism · xayrlashuv).`,
                },
          );
        }

        // Uslub: qisqa xatda olmosh umuman bo'lmasligi mumkin — bu xato emas.
        // Xato faqat noto'g'ri shakl ishlatilganda yoki ikkisi aralashganda.
        const wrong = wanted === "formell" ? informell : formell;
        const right = wanted === "formell" ? formell : informell;
        const mixed = formell > 0 && informell > 0;
        const registerOk = !mixed && wrong === 0;
        findings.push(
          mixed
            ? {
                level: "bad",
                text: "Matnda „Sie“ va „du“ aralashib ketgan — bittasini tanlang.",
                detail: `Sie/Ihr — ${formell} marta · du/dein — ${informell} marta`,
              }
            : registerOk
              ? {
                  level: "ok",
                  text:
                    wanted === "formell"
                      ? right > 0
                        ? "Rasmiy uslub („Sie“) saqlangan."
                        : "Do‘stona shakl („du“) ishlatilmagan — rasmiy uslub buzilmagan."
                      : right > 0
                        ? "Do‘stona uslub („du“) saqlangan."
                        : "Rasmiy shakl („Sie“) ishlatilmagan — do‘stona uslub buzilmagan.",
                }
              : {
                  level: "warn",
                  text:
                    wanted === "formell"
                      ? "Bu topshiriq rasmiy — „Sie“ shaklini ishlating."
                      : "Bu topshiriq do‘stona — „du“ shaklini ishlating.",
                },
        );

        const solid = hasAnrede && hasGruss && registerOk && absOk;
        if (solid && tooShort) findings.push(shortNote);
        const verdict: Verdict =
          solid && !tooShort
            ? "ok"
            : hasAnrede && hasGruss
              ? "teilweise"
              : "fehlt";
        return { id: criterion.id, verdict, findings };
      }

      case "vocabulary": {
        const need = KONNEKTOR_MIN[format] ?? 3;
        const konnOk = konnektoren.length >= need;
        findings.push(
          konnOk
            ? {
                level: "ok",
                text: `${konnektoren.length} xil bog‘lovchi ishlatilgan.`,
                detail: konnektoren.slice(0, 8).join(", "),
              }
            : {
                level: "warn",
                text: `${konnektoren.length} xil bog‘lovchi — kamida ${need} kutiladi.`,
                detail:
                  "Sinab ko‘ring: deshalb, außerdem, weil, trotzdem, obwohl, jedoch",
              },
        );

        const repeat = repeatedStarts(sentences);
        if (repeat) {
          findings.push({
            level: "warn",
            text: `Ketma-ket gaplar „${repeat}“ bilan boshlanyapti — boshlanishni xilma-xil qiling.`,
          });
        }

        const content = wordsOf(text)
          .map((w) => w.toLowerCase())
          .filter((w) => w.length >= 4 && !STOPP.has(w));
        const variety = content.length ? new Set(content).size / content.length : 1;
        if (content.length >= 20 && variety < 0.55) {
          findings.push({
            level: "warn",
            text: "So‘zlar ko‘p takrorlanyapti — sinonim qidiring.",
            detail: `Xilma-xillik: ${Math.round(variety * 100)}%`,
          });
        }

        const clean = findings.every((f) => f.level === "ok");
        if (clean && tooShort) findings.push(shortNote);
        return {
          id: criterion.id,
          verdict: clean && !tooShort ? "ok" : "teilweise",
          findings,
        };
      }

      case "accuracy": {
        findings.push({
          level: "warn",
          text: "Grammatika va imloni kod tekshira olmaydi — namuna bilan solishtirib, o‘zingiz baholang.",
        });
        findings.push(...mech);
        return { id: criterion.id, verdict: "manuell", findings };
      }
    }
  });

  // Mexanik kuzatuvlar hech qaysi mezonga tushmagan bo'lsa — umumiy ro'yxatga
  if (!criteria.some((c) => c.verdict === "manuell")) notes.push(...mech);

  return {
    words,
    criteria,
    autoChecked: criteria.filter((c) => c.verdict === "ok").map((c) => c.id),
    notes,
  };
}
