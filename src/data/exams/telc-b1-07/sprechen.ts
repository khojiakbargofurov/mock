import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 07 · Mündliche Prüfung — 3 Teil, 75 ball. */
export const SPRECHEN: ExamModule = {
  id: "sprechen",
  teile: [
    {
      nr: 1,
      taskType: "sprechen",
      instruction:
        "Teil 1 · Kontaktaufnahme. Sie kennen Ihren Gesprächspartner noch nicht. Stellen Sie sich vor und stellen Sie ihm Fragen.",
      blocks: [
        {
          id: "b1g-sp1-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringiz o‘zini tanishtiradi va savol beradi",
            lines: [
              {
                voice: "male",
                text: "Guten Tag. Ich heiße Samir Haddad, ich komme aus Syrien und arbeite als Krankenpfleger. Seit fünf Jahren lebe ich in Erfurt. Und Sie?",
              },
              {
                voice: "male",
                text: "Und was machen Sie in Ihrer Freizeit — bleibt neben Arbeit und Kurs überhaupt Zeit?",
              },
            ],
          },
          items: [
            {
              id: "b1g-sp-062",
              nr: 62,
              kind: "sprechen",
              points: 25,
              prepSec: 30,
              speakSec: 180,
              cards: [
                { key: "person", label: "Name, Herkunft, Wohnort" },
                { key: "beruf", label: "Beruf" },
                { key: "freizeit", label: "Freizeit" },
                { key: "ziel", label: "Pläne" },
                { key: "frage", label: "Fragen an den Partner" },
              ],
              sample: `Guten Tag, Herr Haddad. Mein Name ist Kerim Aslan. Ich bin in Duisburg geboren, meine Eltern kommen aus der Türkei. Seit sechs Jahren wohne ich in Erfurt.

Ich arbeite in einer Logistikhalle, im Schichtdienst. Daneben hole ich gerade meinen Schulabschluss nach — zwei Abende pro Woche und samstags.

Viel Freizeit bleibt da ehrlich gesagt nicht. Wenn ich Zeit habe, spiele ich Schach oder gehe mit meiner Frau spazieren.

Mein Ziel ist der Abschluss im Sommer und danach eine Stelle als Vorarbeiter.

Darf ich Sie auch etwas fragen? Arbeiten Sie auch in Schichten? Und wie haben Sie damals Deutsch gelernt?`,
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
                "„Daneben …“ — ikkita parallel faoliyatni bog‘lashning aniq usuli.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "sprechen",
      instruction:
        "Teil 2 · Gespräch über ein Thema. Lesen Sie den kurzen Text. Berichten Sie über Ihre Erfahrungen, sagen Sie Ihre Meinung und reagieren Sie auf Ihren Partner.",
      blocks: [
        {
          id: "b1g-sp2-b1",
          stimulus: {
            kind: "text",
            title: "Impulstext",
            body: `Teilen statt besitzen: In vielen Städten gibt es inzwischen Verleihstationen für Werkzeug, Lastenräder oder Partygeschirr. Befürworter sagen, das spare Geld und Platz. Andere geben zu bedenken, dass geteilte Dinge oft schneller kaputtgehen und dass man nicht immer bekommt, was man gerade braucht.`,
          },
          items: [
            {
              id: "b1g-sp-063",
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
              sample: `Ich habe damit gute Erfahrungen gemacht. Als wir letztes Jahr renoviert haben, habe ich eine Bohrmaschine und eine Leiter im Verleih geholt. Zusammen hätte das im Laden über zweihundert Euro gekostet.

Der größte Vorteil ist für mich der Platz. Unsere Wohnung hat keinen großen Keller — wo soll ich eine Leiter hinstellen, die ich zweimal im Jahr brauche?

Nachteile gibt es aber auch. Einmal war genau das Gerät weg, das ich brauchte, und ich musste eine Woche warten. Wer beruflich damit arbeitet, kann sich das nicht leisten.

In der Türkei, woher meine Familie kommt, ist das anders organisiert. Dort fragt man einfach den Nachbarn oder den Onkel. Ein Verein dafür wäre dort eher ungewöhnlich.

Meiner Meinung nach passt Teilen gut zu Dingen, die man selten braucht. Bei Sachen für den Alltag würde ich lieber selbst etwas kaufen.

Wie ist das bei Ihnen? Würden Sie so etwas nutzen?`,
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
                "Farqlangan xulosa („bei Dingen, die man selten braucht“) B1 da eng yaxshi baholanadigan shakl.",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "sprechen",
      instruction:
        "Teil 3 · Gemeinsam eine Aufgabe lösen. Ihr Betrieb möchte für die Beschäftigten einen Deutschkurs anbieten. Planen Sie ihn gemeinsam mit Ihrem Partner.",
      blocks: [
        {
          id: "b1g-sp3-b1",
          stimulus: {
            kind: "audio",
            situation: "Hamkoringizning takliflari (TTS o‘qiydi)",
            lines: [
              {
                voice: "male",
                text: "Ich würde den Kurs nach Feierabend machen, so ab 17 Uhr. Während der Arbeitszeit fehlen die Leute in der Produktion.",
              },
              {
                voice: "male",
                text: "Und die Kosten sollten die Teilnehmer selbst tragen — dann kommen nur die, die es wirklich wollen. Was meinen Sie?",
              },
            ],
          },
          items: [
            {
              id: "b1g-sp-064",
              nr: 64,
              kind: "sprechen",
              points: 25,
              prepSec: 60,
              speakSec: 210,
              cards: [
                { key: "zeit", label: "🕔 Wann?" },
                { key: "inhalt", label: "📚 Welche Inhalte?" },
                { key: "kosten", label: "💶 Wer zahlt?" },
                { key: "gruppe", label: "👥 Wie groß ist die Gruppe?" },
                { key: "info", label: "📣 Wie informieren wir?" },
              ],
              sample: `Nach Feierabend klingt einfach, funktioniert aber bei uns nicht. Die Hälfte der Kollegen hat Schicht — wer um 14 Uhr anfängt, ist um 17 Uhr mitten in der Arbeit. Wie wäre es, wenn wir den Kurs in die Übergabezeit legen und eine Stunde als Arbeitszeit anrechnen?

Beim Inhalt würde ich nicht allgemeines Deutsch nehmen, sondern das, was wir täglich brauchen: Arbeitsaufträge, Sicherheitsregeln, Krankmeldung, Gespräch mit dem Meister.

Bei den Kosten muss ich Ihnen widersprechen. Wenn jeder selbst zahlt, kommen genau die nicht, die es am nötigsten haben. Ich würde vorschlagen, dass der Betrieb den Kurs zahlt und die Teilnehmer die Hälfte der Zeit einbringen.

Die Gruppe sollte klein sein, höchstens zehn Leute, sonst spricht niemand.

Informieren würde ich mit einem Aushang in der Halle und zusätzlich mündlich in der Frühbesprechung — den Aushang lesen nicht alle.

Also: in der Übergabezeit, Fachthemen aus dem Betrieb, Betrieb zahlt, Zeit hälftig geteilt, zehn Leute, Aushang plus Ansage. Passt das?`,
              criteria: [
                {
                  id: "c1",
                  label: "Vazifani bajarish",
                  question:
                    "Beshta nuqta (vaqt, mazmun, xarajat, guruh, xabar) kelishildimi?",
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
                "„kommen genau die nicht, die es am nötigsten haben“ — ijtimoiy dalil muzokarada juda ta’sirli.",
            },
          ],
        },
      ],
    },
  ],
};
