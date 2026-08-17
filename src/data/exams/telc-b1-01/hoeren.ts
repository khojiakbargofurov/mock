import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Hörverstehen — 3 Teil, 20 element, 75 ball.
 * Teil 1 (1×): 5 qisqa matn, richtig/falsch — har biri 5 ball
 * Teil 2 (1×): uzun suhbat, 10 bayonot — har biri 2,5 ball
 * Teil 3 (2×): 5 qisqa xabar, richtig/falsch — har biri 5 ball
 */
export const HOEREN: ExamModule = {
  id: "hoeren",
  teile: [
    {
      nr: 1,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Teil 1 · Sie hören fünf kurze Texte. Sie hören jeden Text einmal. Entscheiden Sie beim Hören: Ist die Aussage richtig oder falsch?",
      hint: "Bayonotni oldindan o‘qing — matn bir marta o‘qiladi.",
      blocks: [
        {
          id: "b1h1-b1",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Radio",
            lines: [
              {
                voice: "female2",
                text: "Wegen Bauarbeiten fährt die Straßenbahnlinie 4 ab Montag nur bis zum Hauptbahnhof. Zwischen Hauptbahnhof und Südfriedhof setzen wir Busse ein. Die Arbeiten dauern voraussichtlich bis Ende September.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-041",
              nr: 41,
              kind: "choice",
              points: 5,
              prompt:
                "Die Straßenbahnlinie 4 fährt ab Montag gar nicht mehr.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Tramvay vokzalgacha yuradi; faqat qolgan qismida avtobus qatnaydi.",
            },
          ],
        },
        {
          id: "b1h1-b2",
          stimulus: {
            kind: "audio",
            situation: "Nachricht auf der Mailbox",
            lines: [
              {
                voice: "male",
                text: "Hallo Frau Kern, hier Praxis Dr. Ludwig. Ihr Termin am Donnerstag um 9 Uhr bleibt bestehen. Bitte bringen Sie diesmal die Ergebnisse vom Labor mit, sonst können wir nicht weiterarbeiten.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-042",
              nr: 42,
              kind: "choice",
              points: 5,
              prompt: "Frau Kern soll Unterlagen zum Termin mitbringen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„bringen Sie … die Ergebnisse vom Labor mit“.",
            },
          ],
        },
        {
          id: "b1h1-b3",
          stimulus: {
            kind: "audio",
            situation: "Durchsage im Kaufhaus",
            lines: [
              {
                voice: "female",
                text: "Liebe Kundinnen und Kunden, unser Restaurant im vierten Stock bleibt diese Woche wegen einer Renovierung geschlossen. Getränke und kleine Snacks bekommen Sie weiterhin im Erdgeschoss.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-043",
              nr: 43,
              kind: "choice",
              points: 5,
              prompt: "Im Kaufhaus kann man diese Woche nichts trinken.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Restoran yopiq, lekin ichimlik va gazak birinchi qavatda bor.",
            },
          ],
        },
        {
          id: "b1h1-b4",
          stimulus: {
            kind: "audio",
            situation: "Ansage am Flughafen",
            lines: [
              {
                voice: "male2",
                text: "Der Flug LH 458 nach München verspätet sich um etwa 40 Minuten. Fluggäste mit Anschlussflügen wenden sich bitte an den Serviceschalter in Halle B.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-044",
              nr: 44,
              kind: "choice",
              points: 5,
              prompt: "Der Flug nach München fällt aus.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Reys bekor qilinmagan, faqat 40 daqiqaga kechikmoqda („verspätet sich“).",
            },
          ],
        },
        {
          id: "b1h1-b5",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einer Kollegin",
            lines: [
              {
                voice: "female",
                text: "Hallo Timur, ich schaffe es morgen nicht ins Büro, mein Sohn ist krank. Könntest du die Präsentation allein halten? Die Folien liegen im gemeinsamen Ordner, ich habe alles fertig gemacht.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-045",
              nr: 45,
              kind: "choice",
              points: 5,
              prompt: "Timur soll die Präsentation ohne die Kollegin halten.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Könntest du die Präsentation allein halten?“ — u ishga kelolmaydi.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "richtig-falsch",
      playCount: 1,
      instruction:
        "Teil 2 · Sie hören ein Gespräch. Sie hören den Text einmal. Entscheiden Sie, ob die Aussagen 46 bis 55 richtig oder falsch sind.",
      hint: "Bayonotlar suhbat tartibida. Eshitayotib belgilab boring.",
      blocks: [
        {
          id: "b1h2-b1",
          stimulus: {
            kind: "audio",
            situation:
              "Radiogespräch mit einer Betreiberin eines Repair-Cafés",
            lines: [
              {
                voice: "male2",
                text: "Frau Neumann, in Ihrem Repair-Café werden kaputte Geräte repariert. Wie ist die Idee entstanden?",
              },
              {
                voice: "female",
                text: "Ich habe früher in einem Elektrogeschäft gearbeitet. Es hat mich jedes Mal geärgert, wenn Kunden ein Gerät wegwerfen wollten, obwohl nur ein Kabel kaputt war. Vor vier Jahren habe ich dann mit zwei Freunden angefangen.",
              },
              { voice: "male2", text: "Wie oft haben Sie geöffnet?" },
              {
                voice: "female",
                text: "Jeden zweiten Samstag, von zehn bis vierzehn Uhr. Öfter geht es nicht, wir arbeiten ja alle ehrenamtlich.",
              },
              { voice: "male2", text: "Was kostet eine Reparatur?" },
              {
                voice: "female",
                text: "Nichts. Wir nehmen kein Geld. Wer möchte, gibt eine Spende, davon kaufen wir Werkzeug und Ersatzteile. Aber niemand muss etwas geben.",
              },
              { voice: "male2", text: "Reparieren Sie die Geräte für die Leute?" },
              {
                voice: "female",
                text: "Nein, das ist wichtig: Wir reparieren gemeinsam mit den Besitzern. Die Leute sollen sehen, wie ein Gerät funktioniert. Manche kommen beim zweiten Mal schon und helfen anderen.",
              },
              { voice: "male2", text: "Was bringen die Leute am häufigsten?" },
              {
                voice: "female",
                text: "Lampen, Toaster und Kaffeemaschinen. Fahrräder machen wir auch, aber Computer nicht — dafür fehlt uns die Zeit.",
              },
              { voice: "male2", text: "Klappt jede Reparatur?" },
              {
                voice: "female",
                text: "Nein, ungefähr ein Drittel der Geräte können wir nicht retten. Meistens, weil es keine Ersatzteile mehr gibt. Das ist das größte Problem.",
              },
              { voice: "male2", text: "Und wie geht es weiter?" },
              {
                voice: "female",
                text: "Ab Herbst bekommen wir Räume von der Stadt, direkt neben der Bibliothek. Dann können wir auch Kurse anbieten, zum Beispiel Nähen und einfache Elektrik.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-046",
              nr: 46,
              kind: "choice",
              points: 2.5,
              prompt: "Frau Neumann hat früher Geräte verkauft.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Ich habe früher in einem Elektrogeschäft gearbeitet.“",
            },
            {
              id: "b1-h-047",
              nr: 47,
              kind: "choice",
              points: 2.5,
              prompt: "Das Repair-Café gibt es seit etwa zehn Jahren.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Vor vier Jahren habe ich … angefangen.“",
            },
            {
              id: "b1-h-048",
              nr: 48,
              kind: "choice",
              points: 2.5,
              prompt: "Das Café ist jeden Samstag geöffnet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„Jeden zweiten Samstag“ — har ikki haftada bir.",
            },
            {
              id: "b1-h-049",
              nr: 49,
              kind: "choice",
              points: 2.5,
              prompt: "Die Mitarbeiter bekommen kein Gehalt.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„wir arbeiten ja alle ehrenamtlich“ — ixtiyoriy.",
            },
            {
              id: "b1-h-050",
              nr: 50,
              kind: "choice",
              points: 2.5,
              prompt: "Für eine Reparatur muss man einen festen Preis zahlen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "Pul olinmaydi; faqat ixtiyoriy xayriya.",
            },
            {
              id: "b1-h-051",
              nr: 51,
              kind: "choice",
              points: 2.5,
              prompt: "Die Besitzer helfen bei der Reparatur mit.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„Wir reparieren gemeinsam mit den Besitzern.“",
            },
            {
              id: "b1-h-052",
              nr: 52,
              kind: "choice",
              points: 2.5,
              prompt: "Computer werden im Repair-Café nicht repariert.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "„aber Computer nicht — dafür fehlt uns die Zeit“.",
            },
            {
              id: "b1-h-053",
              nr: 53,
              kind: "choice",
              points: 2.5,
              prompt: "Fast alle Geräte können repariert werden.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Uchdan bir qismini tuzatib bo‘lmaydi — ehtiyot qism yo‘qligi sabab.",
            },
            {
              id: "b1-h-054",
              nr: 54,
              kind: "choice",
              points: 2.5,
              prompt: "Das größte Problem sind fehlende Ersatzteile.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„weil es keine Ersatzteile mehr gibt. Das ist das größte Problem.“",
            },
            {
              id: "b1-h-055",
              nr: 55,
              kind: "choice",
              points: 2.5,
              prompt: "Im Herbst zieht das Repair-Café in neue Räume.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation:
                "„Ab Herbst bekommen wir Räume von der Stadt, direkt neben der Bibliothek.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "richtig-falsch",
      playCount: 2,
      instruction:
        "Teil 3 · Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Entscheiden Sie: richtig oder falsch?",
      hint: "Bu qismda matn ikki marta o‘qiladi — ikkinchi eshitishda tekshiring.",
      blocks: [
        {
          id: "b1h3-b1",
          stimulus: {
            kind: "audio",
            situation: "Auf dem Anrufbeantworter einer Firma",
            lines: [
              {
                voice: "female2",
                text: "Guten Tag, Sie haben die Firma Vogel erreicht. Unser Büro ist von Montag bis Donnerstag zwischen acht und siebzehn Uhr besetzt, freitags nur bis dreizehn Uhr. Bitte hinterlassen Sie eine Nachricht.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-056",
              nr: 56,
              kind: "choice",
              points: 5,
              prompt: "Am Freitagnachmittag erreicht man niemanden im Büro.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "richtig",
              explanation: "Juma kuni ofis faqat soat 13:00 gacha ishlaydi.",
            },
          ],
        },
        {
          id: "b1h3-b2",
          stimulus: {
            kind: "audio",
            situation: "Werbung im Radio",
            lines: [
              {
                voice: "male",
                text: "Noch bis Sonntag: Bei uns bekommen Sie zwei Winterjacken zum Preis von einer. Das Angebot gilt nur in unseren Filialen, nicht im Onlineshop.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-057",
              nr: 57,
              kind: "choice",
              points: 5,
              prompt: "Das Angebot gilt auch im Internet.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation: "„nicht im Onlineshop“ — faqat do‘konlarda.",
            },
          ],
        },
        {
          id: "b1h3-b3",
          stimulus: {
            kind: "audio",
            situation: "Ansage in der Bibliothek",
            lines: [
              {
                voice: "female",
                text: "Liebe Leserinnen und Leser, wir schließen heute bereits um achtzehn Uhr, weil eine Lesung stattfindet. Bücher können Sie bis siebzehn Uhr dreißig ausleihen.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-058",
              nr: 58,
              kind: "choice",
              points: 5,
              prompt: "Man kann heute bis 18 Uhr Bücher ausleihen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Kitob olish 17:30 gacha; kutubxona 18:00 da yopiladi.",
            },
          ],
        },
        {
          id: "b1h3-b4",
          stimulus: {
            kind: "audio",
            situation: "Nachricht von einem Vermieter",
            lines: [
              {
                voice: "male2",
                text: "Guten Tag, Herr Yusupov, hier ist Ihr Vermieter. Die Heizung wird am Mittwoch zwischen neun und zwölf Uhr geprüft. Es reicht, wenn ein Nachbar aufmacht, Sie müssen nicht selbst zu Hause sein.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-059",
              nr: 59,
              kind: "choice",
              points: 5,
              prompt: "Herr Yusupov muss am Mittwoch zu Hause bleiben.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Qo‘shni eshikni ochsa yetarli — o‘zi uyda bo‘lishi shart emas.",
            },
          ],
        },
        {
          id: "b1h3-b5",
          stimulus: {
            kind: "audio",
            situation: "Ansage im Schwimmbad",
            lines: [
              {
                voice: "female2",
                text: "Achtung, eine Information für unsere Gäste: Das große Becken wird in zehn Minuten für den Schwimmkurs reserviert. Das kleine Becken und die Sauna bleiben für alle geöffnet.",
              },
            ],
          },
          items: [
            {
              id: "b1-h-060",
              nr: 60,
              kind: "choice",
              points: 5,
              prompt: "Die Gäste müssen das Schwimmbad sofort verlassen.",
              options: [
                { key: "richtig", label: "Richtig" },
                { key: "falsch", label: "Falsch" },
              ],
              correct: "falsch",
              explanation:
                "Faqat katta havza band bo‘ladi; kichik havza va sauna ochiq qoladi.",
            },
          ],
        },
      ],
    },
  ],
};
