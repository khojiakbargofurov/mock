import type { ExamModule } from "@/lib/exam/types";

/**
 * Goethe A2 · Modellsatz 03 · Lesen — 4 Teil, 20 element, 30 daqiqa.
 * Teil 2 da kasalxona ma'lumot taxtasi, Teil 4 da bolalar va oila e'lonlari.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      hint: "Avval savollarni o‘qing, keyin matndan javobni qidiring.",
      blocks: [
        {
          id: "a2c-l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung",
            body: `Ein Laden ohne Verkäufer

In Nordheim, einem Dorf mit 900 Einwohnern, gab es zehn Jahre lang kein Geschäft. Wer Milch oder Brot brauchte, musste zwölf Kilometer fahren. Seit dem Frühjahr ist das anders: Im alten Feuerwehrhaus steht jetzt ein kleiner Laden — allerdings ohne Personal.

Die Kundinnen und Kunden öffnen die Tür mit einer Karte, die sie einmal im Gemeindeamt bekommen. Drinnen suchen sie ihre Waren aus, scannen sie selbst und bezahlen am Automaten. Geöffnet ist von sechs Uhr morgens bis elf Uhr nachts.

Die Idee kam von Kerstin Vogt, 52, die früher in der Stadt gearbeitet hat. „Am Anfang haben viele gelacht“, erzählt sie. „Heute kommen jeden Tag etwa achtzig Leute.“

Diebstahl sei bisher kaum ein Problem gewesen, sagt Vogt. Im Dorf kenne jeder jeden. Nur die älteren Bewohner täten sich mit der Technik schwer — deshalb hilft samstags eine Nachbarin im Laden.`,
          },
          items: [
            {
              id: "a2c-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Wie war die Situation vorher in Nordheim?",
              options: [
                { key: "a", label: "Es gab kein Geschäft im Ort." },
                { key: "b", label: "Es gab zwei kleine Läden." },
                { key: "c", label: "Ein Bus brachte die Waren." },
              ],
              correct: "a",
              explanation: "„gab es zehn Jahre lang kein Geschäft“.",
            },
            {
              id: "a2c-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Wie kommt man in den Laden?",
              options: [
                { key: "a", label: "Man klingelt." },
                { key: "b", label: "Man öffnet mit einer Karte." },
                { key: "c", label: "Die Tür ist immer offen." },
              ],
              correct: "b",
              explanation: "„öffnen die Tür mit einer Karte“.",
            },
            {
              id: "a2c-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Wann kann man einkaufen?",
              options: [
                { key: "a", label: "Nur vormittags" },
                { key: "b", label: "Von 6 bis 23 Uhr" },
                { key: "c", label: "Rund um die Uhr" },
              ],
              correct: "b",
              explanation: "„von sechs Uhr morgens bis elf Uhr nachts“.",
            },
            {
              id: "a2c-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was sagt Frau Vogt über den Anfang?",
              options: [
                { key: "a", label: "Viele fanden die Idee komisch." },
                { key: "b", label: "Alle waren sofort begeistert." },
                { key: "c", label: "Niemand wollte die Karte." },
              ],
              correct: "a",
              explanation: "„Am Anfang haben viele gelacht.“",
            },
            {
              id: "a2c-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Warum hilft samstags eine Nachbarin?",
              options: [
                { key: "a", label: "Weil samstags viele Kunden kommen." },
                { key: "b", label: "Weil ältere Leute Probleme mit der Technik haben." },
                { key: "c", label: "Weil oft etwas gestohlen wird." },
              ],
              correct: "b",
              explanation:
                "„die älteren Bewohner täten sich mit der Technik schwer — deshalb hilft samstags eine Nachbarin“.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie die Informationstafel im Krankenhaus. Wohin gehen Sie? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      hint: "Har savolda kerakli bo‘lim qaysi qavatda ekanini toping.",
      blocks: [
        {
          id: "a2c-l2-b1",
          stimulus: {
            kind: "text",
            title: "Klinikum Nord · Informationstafel",
            body: `Erdgeschoss — Anmeldung, Notaufnahme, Cafeteria
1. Stock — Röntgen und Labor (Blutabnahme: Mo–Fr 7–10 Uhr)
2. Stock — Kinderstation und Kinderarzt
3. Stock — Chirurgie, Besuchszeiten 15–19 Uhr
4. Stock — Verwaltung: Rechnungen, Bescheinigungen, Fragen zur Krankenkasse
Untergeschoss — Physiotherapie und Schwimmbad (nur mit Termin)`,
          },
          items: [
            {
              id: "a2c-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Sie kommen zum ersten Mal und müssen sich anmelden.",
              options: [
                { key: "a", label: "Erdgeschoss" },
                { key: "b", label: "1. Stock" },
                { key: "c", label: "4. Stock" },
              ],
              correct: "a",
              explanation: "„Erdgeschoss — Anmeldung“.",
            },
            {
              id: "a2c-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Der Arzt hat Blut bei Ihnen bestellt, es ist Dienstag 8 Uhr.",
              options: [
                { key: "a", label: "Untergeschoss" },
                { key: "b", label: "1. Stock" },
                { key: "c", label: "2. Stock" },
              ],
              correct: "b",
              explanation: "Qon topshirish — 1-qavat, Mo–Fr 7–10.",
            },
            {
              id: "a2c-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Ihr Sohn hat hohes Fieber und braucht einen Arzt.",
              options: [
                { key: "a", label: "2. Stock" },
                { key: "b", label: "3. Stock" },
                { key: "c", label: "4. Stock" },
              ],
              correct: "a",
              explanation: "„2. Stock — Kinderstation und Kinderarzt“.",
            },
            {
              id: "a2c-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Sie haben eine Frage zu Ihrer Rechnung.",
              options: [
                { key: "a", label: "Erdgeschoss" },
                { key: "b", label: "3. Stock" },
                { key: "c", label: "4. Stock" },
              ],
              correct: "c",
              explanation: "„4. Stock — Verwaltung: Rechnungen“.",
            },
            {
              id: "a2c-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten Ihre Kollegin besuchen, die operiert wurde.",
              options: [
                { key: "a", label: "1. Stock" },
                { key: "b", label: "3. Stock" },
                { key: "c", label: "Untergeschoss" },
              ],
              correct: "b",
              explanation: "Jarrohlik bo‘limi — 3-qavat, tashrif 15–19.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "mc",
      instruction:
        "Lesen Sie die E-Mail. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2c-l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail von Markus",
            body: `Hallo Bekzod,

wie versprochen die Infos zu unserem Wochenende. Wir fahren am Freitag um 16 Uhr los, nicht erst am Samstag — dann sind wir noch vor dem Dunkeln da.

Die Hütte hat sechs Betten, wir sind zu fünft. Decken sind vorhanden, aber du brauchst dein eigenes Handtuch.

Essen kaufen wir unterwegs zusammen ein, das teilen wir dann durch fünf. Nur Getränke bringt jeder selbst mit.

Und noch etwas: Der Weg zur Hütte ist die letzten zwei Kilometer nicht asphaltiert. Feste Schuhe wären also gut.

Sag Bescheid, ob du am Freitag früher von der Arbeit weg kannst.

Gruß
Markus`,
          },
          items: [
            {
              id: "a2c-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Wann fährt die Gruppe los?",
              options: [
                { key: "a", label: "Am Freitagnachmittag" },
                { key: "b", label: "Am Freitagabend" },
                { key: "c", label: "Am Samstagmorgen" },
              ],
              correct: "a",
              explanation: "„am Freitag um 16 Uhr … nicht erst am Samstag“.",
            },
            {
              id: "a2c-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was muss Bekzod mitbringen?",
              options: [
                { key: "a", label: "Eine Decke" },
                { key: "b", label: "Ein Handtuch" },
                { key: "c", label: "Ein Bett" },
              ],
              correct: "b",
              explanation: "„du brauchst dein eigenes Handtuch“.",
            },
            {
              id: "a2c-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Wie wird das Essen bezahlt?",
              options: [
                { key: "a", label: "Markus bezahlt alles." },
                { key: "b", label: "Jeder kauft für sich ein." },
                { key: "c", label: "Die Kosten werden geteilt." },
              ],
              correct: "c",
              explanation: "„das teilen wir dann durch fünf“.",
            },
            {
              id: "a2c-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Warum empfiehlt Markus feste Schuhe?",
              options: [
                { key: "a", label: "Weil der letzte Weg schlecht ist." },
                { key: "b", label: "Weil es viel regnet." },
                { key: "c", label: "Weil sie wandern gehen." },
              ],
              correct: "a",
              explanation: "Oxirgi ikki kilometr asfaltlanmagan.",
            },
            {
              id: "a2c-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was soll Bekzod antworten?",
              options: [
                { key: "a", label: "Was er kochen möchte" },
                { key: "b", label: "Ob er am Freitag früher gehen kann" },
                { key: "c", label: "Wie viele Getränke er braucht" },
              ],
              correct: "b",
              explanation:
                "„Sag Bescheid, ob du am Freitag früher von der Arbeit weg kannst.“",
            },
          ],
        },
      ],
    },

    {
      nr: 4,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie die Situationen 16 bis 20 und die Anzeigen a bis f. Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal benutzen. Für eine Situation gibt es keine passende Anzeige: Wählen Sie x.",
      hint: "Bir e’lon faqat bitta vaziyatga. Mos kelmasa — x.",
      bank: [
        { key: "a", label: "Kinderbetreuung in den Ferien" },
        { key: "b", label: "Möbel-Transport" },
        { key: "c", label: "Nachbarschaftshilfe für Senioren" },
        { key: "d", label: "Schwimmkurs für Anfänger" },
        { key: "e", label: "Werkzeug ausleihen" },
        { key: "f", label: "Handwerker für kleine Reparaturen" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2c-l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Kinderbetreuung in den Ferien",
                body: "Zwei Wochen Ferienprogramm für Kinder von 6 bis 12 Jahren, täglich 8–16 Uhr, mit Mittagessen. 90 € pro Woche.",
              },
              {
                key: "b",
                title: "Möbel-Transport",
                body: "Wir fahren Ihren Schrank oder Ihr Sofa durch die ganze Stadt. Kleintransporter mit Fahrer, 35 € pro Stunde.",
              },
              {
                key: "c",
                title: "Nachbarschaftshilfe für Senioren",
                body: "Ehrenamtliche begleiten ältere Menschen zum Arzt oder zum Einkaufen. Kostenlos, Anmeldung im Gemeindebüro.",
              },
              {
                key: "d",
                title: "Schwimmkurs für Anfänger",
                body: "Für Erwachsene, die nicht schwimmen können. Kleine Gruppen, dienstags 19 Uhr, zehn Termine, 95 €.",
              },
              {
                key: "e",
                title: "Werkzeug ausleihen",
                body: "Bohrmaschine, Leiter, Farbrolle — leihen Sie sich Werkzeug für ein paar Tage. 3 € pro Tag und Gerät.",
              },
              {
                key: "f",
                title: "Handwerker für kleine Reparaturen",
                body: "Regal aufhängen, Lampe anschließen, Tür einstellen. Auch abends und samstags, 30 € pro Stunde.",
              },
            ],
          },
          items: [
            {
              id: "a2c-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie möchten in Ihrer neuen Wohnung ein Regal aufhängen, haben aber zwei linke Hände.",
              correct: "f",
              explanation: "„Regal aufhängen“ — kichik ta’mirlar ustasi.",
            },
            {
              id: "a2c-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie streichen selbst Ihre Wohnung und brauchen dafür eine Leiter.",
              correct: "e",
              explanation: "Asbob ijaraga beriladi — narvon ham bor.",
            },
            {
              id: "a2c-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihre Mutter ist 78 und kann nicht mehr allein zum Arzt gehen.",
              correct: "c",
              explanation: "Ixtiyoriylar keksalarni shifokorga kuzatib boradi.",
            },
            {
              id: "a2c-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie arbeiten in den Sommerferien und wissen nicht, wo Ihr Sohn (9) tagsüber bleibt.",
              correct: "a",
              explanation: "6–12 yosh uchun ta’til dasturi, 8–16.",
            },
            {
              id: "a2c-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie suchen einen günstigen Deutschkurs am Abend für Ihre Frau.",
              correct: "x",
              explanation: "E’lonlar orasida til kursi yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
