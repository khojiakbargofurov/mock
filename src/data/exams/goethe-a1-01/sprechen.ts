import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A1 · Sprechen — 3 Teil, ~15 daqiqa, 15 ball (har Teil 5 ball).
 *
 * Rasmiy imtihon guruhda o'tadi. Ilovada hamkorning gaplari TTS orqali
 * o'qiladi, foydalanuvchi o'z navbatida mikrofonga gapiradi va yozuvni
 * namunaviy javob bilan solishtiradi.
 */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Sich vorstellen. Stellen Sie sich vor. Sprechen Sie zu den Stichwörtern auf den Karten.",
      hint: "Oxirida ismingizni harflab ayting va telefon raqamingizni sanang.",
      blocks: [
        {
          id: "sp1-b1",
          items: [
            {
              id: "a1-sp-001",
              nr: 1,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "name", label: "Name?", hint: "Ich heiße …" },
                { key: "alter", label: "Alter?", hint: "Ich bin … Jahre alt." },
                { key: "land", label: "Land?", hint: "Ich komme aus …" },
                { key: "wohnort", label: "Wohnort?", hint: "Ich wohne in …" },
                { key: "sprachen", label: "Sprachen?", hint: "Ich spreche …" },
                { key: "beruf", label: "Beruf?", hint: "Ich bin … von Beruf." },
                { key: "hobby", label: "Hobby?", hint: "Mein Hobby ist …" },
                {
                  key: "buchstabieren",
                  label: "Buchstabieren Sie Ihren Namen.",
                },
                { key: "nummer", label: "Ihre Telefonnummer?" },
              ],
              sample: `Guten Tag. Ich heiße Ali Karimov. Ich bin 27 Jahre alt und komme aus Usbekistan. Jetzt wohne ich in Bremen. Ich spreche Usbekisch, Russisch und ein bisschen Deutsch. Ich bin Techniker von Beruf. Mein Hobby ist Fußball. Mein Name: K–A–R–I–M–O–V. Meine Telefonnummer ist null vier zwei eins, neun neun acht acht sieben sieben.`,
              criteria: [
                {
                  id: "c1",
                  label: "Barcha nuqtalar",
                  question:
                    "Yetti kartochkaning hammasi bo‘yicha gapirdingizmi (ism, yosh, mamlakat, shahar, tillar, kasb, hobbi)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Harflash va raqam",
                  question:
                    "Ismingizni harflab aytdingizmi va telefon raqamini nemischa sanadingizmi?",
                  points: 1,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question:
                    "Gaplaringiz tushunarli bo‘ldimi — tinglovchi qayta so‘ramasdan tushunadimi?",
                  points: 2,
                },
              ],
              explanation:
                "A1 Teil 1 da har kartochka bo‘yicha bittadan gap yetarli. Asosiysi — hech bir nuqta tushib qolmasin.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Um Informationen bitten. Thema: „Essen und Trinken“. Bilden Sie zu jedem Stichwort eine Frage und antworten Sie auf die Frage Ihres Partners.",
      hint: "Savol tuzing (Was …? Wann …? Wie oft …?) va hamkorning savoliga javob bering.",
      blocks: [
        {
          id: "sp2-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning savollari (TTS o‘qiydi)",
            lines: [
              { voice: "female", text: "Was trinken Sie am Morgen?" },
              { voice: "female", text: "Wo kaufen Sie Obst und Gemüse?" },
            ],
          },
          items: [
            {
              id: "a1-sp-002",
              nr: 2,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "fruehstueck", label: "Frühstück", hint: "Wann …?" },
                { key: "obst", label: "Obst" },
                { key: "restaurant", label: "Restaurant" },
                { key: "wasser", label: "Wasser" },
              ],
              sample: `Wann frühstücken Sie? — Ich frühstücke um sieben Uhr.
Welches Obst essen Sie gern? — Ich esse gern Äpfel und Bananen.
Gehen Sie oft ins Restaurant? — Nein, nur am Wochenende.
Wie viel Wasser trinken Sie am Tag? — Ungefähr zwei Liter.

Antwort auf den Partner: Am Morgen trinke ich Tee mit Milch. Obst und Gemüse kaufe ich auf dem Markt.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta savol",
                  question:
                    "Har kartochka uchun to‘g‘ri tuzilgan savol aytdingizmi (fe’l o‘z o‘rnida)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Javoblar",
                  question:
                    "Hamkorning ikkala savoliga to‘liq gap bilan javob berdingizmi?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Tushunarlilik",
                  question: "Talaffuz va gap tuzilishi tushunarli bo‘ldimi?",
                  points: 1,
                },
              ],
              explanation:
                "Teil 2 da savol tuzish asosiy vazifa: „Wann frühstücken Sie?“ — fe’l ikkinchi o‘rinda, W-savol boshida.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Bitten formulieren und darauf reagieren. Bitten Sie Ihren Partner um etwas und reagieren Sie auf seine Bitte.",
      hint: "„Können Sie mir bitte …?“ · „Könnten Sie bitte …?“ · Javob: „Ja, gern.“ / „Tut mir leid, …“",
      blocks: [
        {
          id: "sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkorning iltimoslari (TTS o‘qiydi)",
            lines: [
              { voice: "male", text: "Können Sie bitte das Fenster öffnen?" },
              { voice: "male", text: "Haben Sie einen Kugelschreiber für mich?" },
            ],
          },
          items: [
            {
              id: "a1-sp-003",
              nr: 3,
              kind: "sprechen",
              points: 5,
              prepSec: 30,
              speakSec: 120,
              cards: [
                { key: "wasser", label: "🥤 Wasser" },
                { key: "stift", label: "✏️ Stift" },
                { key: "handy", label: "📱 Handy" },
                { key: "stuhl", label: "🪑 Stuhl" },
              ],
              sample: `Können Sie mir bitte ein Glas Wasser geben? — Ja, gern.
Haben Sie einen Stift für mich? — Natürlich, hier bitte.
Darf ich Ihr Handy benutzen? Mein Akku ist leer. — Ja, kein Problem.
Können Sie mir bitte den Stuhl bringen? — Ja, einen Moment.

Antwort auf den Partner: Ja, gern, ich öffne das Fenster. — Ja, hier ist mein Kugelschreiber.`,
              criteria: [
                {
                  id: "c1",
                  label: "To‘rtta iltimos",
                  question:
                    "Har kartochka uchun muloyim iltimos tuzdingizmi („Können Sie bitte …?“)?",
                  points: 2,
                },
                {
                  id: "c2",
                  label: "Javob berish",
                  question:
                    "Hamkorning iltimoslariga javob berdingizmi (rozilik yoki uzr)?",
                  points: 2,
                },
                {
                  id: "c3",
                  label: "Muloyimlik",
                  question: "„bitte“ va muloyim shakl ishlatildimi?",
                  points: 1,
                },
              ],
              explanation:
                "A1 da iltimos „Können Sie bitte …?“ yoki „Ich möchte bitte …“ shaklida bo‘ladi; javob qisqa: „Ja, gern.“",
            },
          ],
        },
      ],
    },
  ],
};
