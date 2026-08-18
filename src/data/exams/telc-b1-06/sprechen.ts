import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 06 · Mündliche Prüfung — 3 Teil, 75 ball. */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihre Gesprächspartnerin noch nicht. Stellen Sie sich vor und stellen Sie ihr Fragen.",
      blocks: [
        {
          id: "b1f-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "female",
                text: "Guten Tag. Mein Name ist Elena Costa, ich komme aus Rumänien und arbeite in der Pflege. Seit sechs Jahren bin ich in Deutschland. Und Sie?",
              },
              {
                voice: "female",
                text: "Und warum machen Sie die Prüfung? Brauchen Sie das Zertifikat für die Arbeit?",
              },
            ],
          },
          items: [
            {
              id: "b1f-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf" },
                { key: "familie", label: "Familie" },
                { key: "ziel", label: "Warum die Prüfung?" },
                { key: "frage", label: "Fragen an die Partnerin" },
              ],
              sample: `Guten Tag, Frau Costa. Ich heiße Kerim Aslan, ich bin in Duisburg geboren, meine Eltern kommen aus der Türkei. Heute wohne ich in Erfurt.

Ich arbeite in einer Halle bei einer Logistikfirma, seit acht Jahren derselbe Betrieb.

Ich bin verheiratet und habe zwei Kinder; meine Tochter studiert schon.

Die Prüfung mache ich, weil ich den Realschulabschluss nachhole. Für die Stelle als Vorarbeiter brauche ich beides — den Abschluss und das Zertifikat.

Darf ich Sie auch etwas fragen? War es schwierig, Ihre Ausbildung anerkennen zu lassen? Und arbeiten Sie im Schichtdienst?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Barcha nuqtalar bo‘yicha gapirdingizmi va kamida ikkita savol berdingizmi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question: "Turli tuzilmalar va bog‘lovchilar ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question: "Fe’l shakllari va so‘z tartibi asosan to‘g‘rimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Talaffuz",
                  question: "Tinglovchi qayta so‘ramasdan tushunadimi?",
                  points: 3,
                },
              ],
              explanation:
                "„seit acht Jahren derselbe Betrieb“ — qisqa, ammo ma’lumotga boy ifoda.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Gespräch über ein Thema. Lesen Sie den kurzen Text. Berichten Sie über Ihre Erfahrungen, sagen Sie Ihre Meinung und reagieren Sie auf Ihre Partnerin.",
      blocks: [
        {
          id: "b1f-sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Immer mehr Erwachsene holen einen Schulabschluss nach oder machen mit über vierzig noch eine Ausbildung. Eine Untersuchung zeigt: Die meisten tun das nicht wegen des Gehalts, sondern weil sie eine sicherere Stelle möchten. Kritisch ist vor allem die Zeit — Beruf, Familie und Unterricht müssen zusammenpassen.`,
          },
          items: [
            {
              id: "b1f-sp-063",
              nr: 63,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "erfahrung", label: "Ihre Erfahrung" },
                { key: "vorteile", label: "Vorteile" },
                { key: "nachteile", label: "Nachteile" },
                { key: "meinung", label: "Ihre Meinung" },
                { key: "heimat", label: "Wie ist es in Ihrem Heimatland?" },
              ],
              sample: `Das Thema betrifft mich gerade direkt: Ich hole mit 52 den Realschulabschluss nach, zwei Abende pro Woche und samstags.

Der größte Vorteil ist für mich die Sicherheit. Ohne Abschluss komme ich im Betrieb nicht weiter, egal wie gut ich arbeite. Mit dem Abschluss kann ich mich auf eine feste Stelle als Vorarbeiter bewerben.

Die Nachteile merke ich jeden Tag. Ich habe kaum noch freie Abende, und meine Frau muss vieles allein machen. Zweimal wollte ich aufhören — ehrlich gesagt vor allem wegen Mathematik.

In der Türkei, woher meine Eltern kommen, gibt es so etwas kaum. Wer die Schule abbricht, hat später fast keine Möglichkeit mehr, das nachzuholen. Das finde ich hier wirklich gut gelöst.

Meiner Meinung nach müsste man solche Kurse noch stärker mit der Arbeitszeit verbinden. Ein freier Nachmittag pro Woche würde vielen helfen.

Wie ist das bei Ihnen? Hat Ihr Betrieb Sie bei der Weiterbildung unterstützt?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Tajriba, ijobiy va salbiy tomonlar hamda fikringiz bormi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Ifoda boyligi",
                  question: "Fikr bildirish iboralari va misollar ishlatildimi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "To‘g‘rilik",
                  question: "O‘tgan zamon va ergash gaplar to‘g‘ri tuzildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Muloqot",
                  question: "Hamkoringizga savol berdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "„ehrlich gesagt“ — o‘z qiyinchiligingizni tabiiy tan olish; imtihonda samimiylik yaxshi baholanadi.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. In Ihrem Haus soll ein Raum im Keller neu genutzt werden. Planen Sie das gemeinsam mit Ihrer Partnerin.",
      blocks: [
        {
          id: "b1f-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "female",
                text: "Ich würde daraus einen Fahrradkeller machen. Im Hausflur stehen ständig Räder im Weg.",
              },
              {
                voice: "female",
                text: "Und die Kosten? Vielleicht zahlt einfach jede Partei fünfzig Euro?",
              },
            ],
          },
          items: [
            {
              id: "b1f-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "nutzung", label: "🏠 Wofür nutzen wir den Raum?" },
                { key: "kosten", label: "💶 Kosten und Aufteilung" },
                { key: "arbeit", label: "🔧 Wer räumt auf und streicht?" },
                { key: "regeln", label: "📋 Regeln für die Nutzung" },
                { key: "info", label: "📣 Wie informieren wir das Haus?" },
              ],
              sample: `Ein Fahrradkeller ist sinnvoll, da stimme ich Ihnen zu. Ich würde aber vorschlagen, den Raum zu teilen: eine Hälfte für Fahrräder, die andere als Abstellfläche für Kinderwagen. Im Haus wohnen vier Familien mit kleinen Kindern.

Bei den Kosten bin ich vorsichtig. Fünfzig Euro pro Partei sind für einige viel — Frau Prinz zum Beispiel bekommt nur ihre Rente. Wie wäre es, wenn wir zuerst nachfragen, ob die Hausverwaltung die Farbe bezahlt? Dann bliebe für uns nur die Arbeit.

Aufräumen und streichen könnten wir an einem Samstag gemeinsam machen. Wenn acht Leute kommen, sind wir in vier Stunden fertig.

Als Regeln würde ich festhalten: nur ein Fahrrad pro Person, keine kaputten Räder, und der Schlüssel hängt bei zwei Nachbarn.

Informieren würde ich mit einem Aushang im Treppenhaus und zusätzlich persönlich bei den älteren Nachbarn — die lesen den Aushang oft nicht.

Also: geteilte Nutzung, erst bei der Verwaltung nachfragen, Arbeitseinsatz am Samstag, klare Regeln, Aushang plus persönliche Info. Sind Sie einverstanden?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (foydalanish, xarajat, ish, qoidalar, xabar) kelishildimi?",
                  points: 10,
                },
                {
                  id: "c2",
                  label: "Muzokara",
                  question: "Hamkorning ikkala taklifiga munosabat bildirdingizmi?",
                  points: 7,
                },
                {
                  id: "c3",
                  label: "Til vositalari",
                  question: "Taklif va kelishuv iboralari ishlatildimi?",
                  points: 5,
                },
                {
                  id: "c4",
                  label: "Yakun",
                  question: "Oxirida kelishuvni umumlashtirdingizmi?",
                  points: 3,
                },
              ],
              explanation:
                "Aniq odamni misol qilib keltirish („Frau Prinz … nur ihre Rente“) e’tirozni ishonarli qiladi.",
            },
          ],
        },
      ],
    },
  ],
};
