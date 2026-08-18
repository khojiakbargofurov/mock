import type { ExamModule } from "@/lib/exam/types";

/** Goethe A2 · Modellsatz 07 · Lesen — 4 Teil, 20 element, 30 daqiqa. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text. Wählen Sie für die Aufgaben 1 bis 5 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2g-l1-b1",
          stimulus: {
            kind: "text",
            title: "Aus der Zeitung",
            body: `Eine Klasse, ein Garten

An einer Grundschule in Weimar gehört seit zwei Jahren eine Gartenstunde zum Stundenplan. Jede Klasse hat ein eigenes Beet hinter dem Schulgebäude. Die Kinder säen, gießen und ernten selbst.

Die Idee kam von einer Lehrerin, die im Unterricht gemerkt hatte, dass viele Kinder nicht wussten, wo Kartoffeln wachsen. „Manche dachten, sie kommen aus dem Supermarkt.“

Geerntet wird alles gemeinsam. Was reif ist, wird am selben Tag in der Schulküche verarbeitet — meistens zu Suppe oder Salat.

Nicht alles gelingt. Im ersten Sommer war es sehr heiß, und die Hälfte der Pflanzen ging ein. „Das gehört dazu“, sagt die Lehrerin. „Die Kinder lernen, dass man nicht alles planen kann.“

Inzwischen kommen auch Eltern, die vorher nie in der Schule waren. Zwei von ihnen helfen jetzt regelmäßig im Garten mit.`,
          },
          items: [
            {
              id: "a2g-l-001",
              nr: 1,
              kind: "choice",
              points: 1,
              prompt: "Was ist neu an der Schule?",
              options: [
                { key: "a", label: "Eine Gartenstunde im Stundenplan" },
                { key: "b", label: "Eine neue Schulküche" },
                { key: "c", label: "Ein Ausflug aufs Land" },
              ],
              correct: "a",
              explanation: "„gehört … eine Gartenstunde zum Stundenplan“.",
            },
            {
              id: "a2g-l-002",
              nr: 2,
              kind: "choice",
              points: 1,
              prompt: "Warum hatte die Lehrerin die Idee?",
              options: [
                { key: "a", label: "Weil die Kinder nicht gern essen" },
                { key: "b", label: "Weil viele Kinder wenig über Pflanzen wussten" },
                { key: "c", label: "Weil die Schule Geld brauchte" },
              ],
              correct: "b",
              explanation: "Bolalar kartoshka qayerda o‘sishini bilmagan.",
            },
            {
              id: "a2g-l-003",
              nr: 3,
              kind: "choice",
              points: 1,
              prompt: "Was passiert mit der Ernte?",
              options: [
                { key: "a", label: "Sie wird verkauft." },
                { key: "b", label: "Die Kinder nehmen sie mit nach Hause." },
                { key: "c", label: "Sie wird in der Schulküche verarbeitet." },
              ],
              correct: "c",
              explanation: "„am selben Tag in der Schulküche verarbeitet“.",
            },
            {
              id: "a2g-l-004",
              nr: 4,
              kind: "choice",
              points: 1,
              prompt: "Was war im ersten Sommer das Problem?",
              options: [
                { key: "a", label: "Es war zu heiß." },
                { key: "b", label: "Es hat zu viel geregnet." },
                { key: "c", label: "Die Kinder hatten keine Lust." },
              ],
              correct: "a",
              explanation: "„war es sehr heiß, und die Hälfte der Pflanzen ging ein“.",
            },
            {
              id: "a2g-l-005",
              nr: 5,
              kind: "choice",
              points: 1,
              prompt: "Was hat sich außerdem verändert?",
              options: [
                { key: "a", label: "Eltern kommen jetzt in die Schule." },
                { key: "b", label: "Die Schule hat mehr Lehrer." },
                { key: "c", label: "Der Unterricht ist kürzer." },
              ],
              correct: "a",
              explanation: "Ilgari maktabga kelmagan ota-onalar endi yordam beradi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie den Plan des Freizeitzentrums. Wohin gehen Sie? Wählen Sie für die Aufgaben 6 bis 10 die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "a2g-l2-b1",
          stimulus: {
            kind: "text",
            title: "Freizeitzentrum Ost · Übersicht",
            body: `Halle A — Fußball und Basketball, Vereinstraining Mo–Do 17–21 Uhr
Halle B — Freies Spielen für Familien, Sa und So 10–16 Uhr
Raum 1 — Kreativwerkstatt: Malen und Töpfern, Mi 16–19 Uhr
Raum 2 — Musikproben, nur mit Anmeldung
Café im Erdgeschoss — täglich 9–20 Uhr, warme Küche bis 18 Uhr
Beratung (1. Stock) — Fragen zu Mitgliedschaft, Beiträgen und Kursen, Di und Do 10–15 Uhr`,
          },
          items: [
            {
              id: "a2g-l-006",
              nr: 6,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten am Sonntag mit Ihren Kindern Ball spielen.",
              options: [
                { key: "a", label: "Halle A" },
                { key: "b", label: "Halle B" },
                { key: "c", label: "Raum 1" },
              ],
              correct: "b",
              explanation: "„Freies Spielen für Familien, Sa und So“.",
            },
            {
              id: "a2g-l-007",
              nr: 7,
              kind: "choice",
              points: 1,
              prompt: "Sie haben eine Frage zu Ihrem Mitgliedsbeitrag.",
              options: [
                { key: "a", label: "Beratung, 1. Stock" },
                { key: "b", label: "Café" },
                { key: "c", label: "Raum 2" },
              ],
              correct: "a",
              explanation: "„Fragen zu Mitgliedschaft, Beiträgen und Kursen“.",
            },
            {
              id: "a2g-l-008",
              nr: 8,
              kind: "choice",
              points: 1,
              prompt: "Ihre Tochter möchte mittwochs töpfern.",
              options: [
                { key: "a", label: "Raum 1" },
                { key: "b", label: "Raum 2" },
                { key: "c", label: "Halle A" },
              ],
              correct: "a",
              explanation: "„Kreativwerkstatt: Malen und Töpfern, Mi“.",
            },
            {
              id: "a2g-l-009",
              nr: 9,
              kind: "choice",
              points: 1,
              prompt: "Sie möchten um 19 Uhr etwas Warmes essen.",
              options: [
                { key: "a", label: "Im Café" },
                { key: "b", label: "In Halle B" },
                { key: "c", label: "Nirgends im Haus" },
              ],
              correct: "c",
              explanation: "Issiq ovqat 18:00 gacha — 19:00 da yo‘q.",
            },
            {
              id: "a2g-l-010",
              nr: 10,
              kind: "choice",
              points: 1,
              prompt: "Ihre Band sucht einen Raum zum Proben.",
              options: [
                { key: "a", label: "Halle A" },
                { key: "b", label: "Raum 2" },
                { key: "c", label: "Café" },
              ],
              correct: "b",
              explanation: "„Raum 2 — Musikproben, nur mit Anmeldung“.",
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
          id: "a2g-l3-b1",
          stimulus: {
            kind: "text",
            title: "E-Mail vom Arbeitgeber",
            body: `Liebe Kolleginnen und Kollegen,

ab dem 1. September gelten neue Arbeitszeiten. Die Frühschicht beginnt künftig um 6 Uhr statt um 5.30 Uhr, die Spätschicht endet um 22 Uhr.

Die Pausen bleiben gleich: 30 Minuten Mittagspause, zweimal 15 Minuten kurze Pause.

Wer aus familiären Gründen Probleme mit den neuen Zeiten hat, meldet sich bitte bis zum 15. August bei Frau Renz. Wir suchen dann gemeinsam eine Lösung.

Der Dienstplan für September hängt ab Montag aus. Bitte prüfen Sie Ihre Zeiten und geben Sie Fehler sofort weiter.

Mit freundlichen Grüßen
Die Geschäftsleitung`,
          },
          items: [
            {
              id: "a2g-l-011",
              nr: 11,
              kind: "choice",
              points: 1,
              prompt: "Was ändert sich bei der Frühschicht?",
              options: [
                { key: "a", label: "Sie beginnt später." },
                { key: "b", label: "Sie beginnt früher." },
                { key: "c", label: "Sie fällt weg." },
              ],
              correct: "a",
              explanation: "5:30 o‘rniga 6:00 — kechroq.",
            },
            {
              id: "a2g-l-012",
              nr: 12,
              kind: "choice",
              points: 1,
              prompt: "Was gilt für die Pausen?",
              options: [
                { key: "a", label: "Sie werden kürzer." },
                { key: "b", label: "Sie bleiben unverändert." },
                { key: "c", label: "Sie werden länger." },
              ],
              correct: "b",
              explanation: "„Die Pausen bleiben gleich.“",
            },
            {
              id: "a2g-l-013",
              nr: 13,
              kind: "choice",
              points: 1,
              prompt: "Was sollen Beschäftigte mit Problemen tun?",
              options: [
                { key: "a", label: "Sich bei Frau Renz melden" },
                { key: "b", label: "Einen Antrag schreiben" },
                { key: "c", label: "Zum Betriebsrat gehen" },
              ],
              correct: "a",
              explanation: "„meldet sich bitte … bei Frau Renz“.",
            },
            {
              id: "a2g-l-014",
              nr: 14,
              kind: "choice",
              points: 1,
              prompt: "Bis wann soll man sich melden?",
              options: [
                { key: "a", label: "Bis zum 15. August" },
                { key: "b", label: "Bis zum 1. September" },
                { key: "c", label: "Bis Montag" },
              ],
              correct: "a",
              explanation: "„bis zum 15. August“.",
            },
            {
              id: "a2g-l-015",
              nr: 15,
              kind: "choice",
              points: 1,
              prompt: "Was soll man mit dem Dienstplan machen?",
              options: [
                { key: "a", label: "Ihn unterschreiben" },
                { key: "b", label: "Ihn prüfen" },
                { key: "c", label: "Ihn kopieren" },
              ],
              correct: "b",
              explanation: "„Bitte prüfen Sie Ihre Zeiten.“",
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
      bank: [
        { key: "a", label: "Fahrradwerkstatt für alle" },
        { key: "b", label: "Deutsch-Lerncafé" },
        { key: "c", label: "Möbelabholung" },
        { key: "d", label: "Kinderbetreuung stundenweise" },
        { key: "e", label: "Handarbeitsgruppe" },
        { key: "f", label: "Hilfe im Haushalt" },
        { key: "x", label: "Kein Text passt" },
      ],
      blocks: [
        {
          id: "a2g-l4-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Fahrradwerkstatt für alle",
                body: "Samstags 10–14 Uhr können Sie Ihr Rad selbst reparieren. Werkzeug und Beratung kostenlos, Ersatzteile gegen Spende.",
              },
              {
                key: "b",
                title: "Deutsch-Lerncafé",
                body: "Montags 17–19 Uhr: gemeinsam Hausaufgaben machen, Texte lesen, sprechen üben. Kostenlos, ohne Anmeldung, alle Niveaus.",
              },
              {
                key: "c",
                title: "Möbelabholung",
                body: "Wir holen gut erhaltene Möbel bei Ihnen ab und geben sie an Familien weiter, die wenig Geld haben. Abholung kostenlos.",
              },
              {
                key: "d",
                title: "Kinderbetreuung stundenweise",
                body: "Für Termine bei Ärzten oder Ämtern betreuen wir Ihr Kind (ab 1 Jahr) bis zu drei Stunden. 3 Euro pro Stunde, Anmeldung einen Tag vorher.",
              },
              {
                key: "e",
                title: "Handarbeitsgruppe",
                body: "Nähen, Stricken, Reparieren — donnerstags 15–18 Uhr im Nachbarschaftszentrum. Material vorhanden, Teilnahme frei.",
              },
              {
                key: "f",
                title: "Hilfe im Haushalt",
                body: "Für ältere Menschen: Einkaufen, Putzen, Wäsche. Zwei Stunden pro Woche, 12 Euro pro Stunde, feste Betreuungsperson.",
              },
            ],
          },
          items: [
            {
              id: "a2g-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie haben einen Termin beim Amt und niemanden für Ihre zweijährige Tochter.",
              correct: "d",
              explanation: "Idoradagi uchrashuvlar uchun soatbay bolalar parvarishi.",
            },
            {
              id: "a2g-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie ziehen um und möchten Ihr altes Sofa nicht wegwerfen.",
              correct: "c",
              explanation: "Mebelni olib ketib, muhtoj oilalarga beradi.",
            },
            {
              id: "a2g-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie möchten Ihr Deutsch üben und Hilfe bei den Hausaufgaben bekommen.",
              correct: "b",
              explanation: "Bepul Lerncafé, barcha darajalar uchun.",
            },
            {
              id: "a2g-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Ihre Mutter ist 80 und schafft das Einkaufen nicht mehr allein.",
              correct: "f",
              explanation: "Keksalar uchun uy ishlarida yordam.",
            },
            {
              id: "a2g-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 1,
              prompt:
                "Sie suchen einen günstigen Sportkurs für Ihren Sohn (8).",
              correct: "x",
              explanation: "Bolalar sport kursi haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
