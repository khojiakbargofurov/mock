import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 06 · Leseverstehen — 3 Teil, 20 element, 75 ball. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      bank: [
        { key: "a", label: "Ein Kiosk, der Nachrichten verkauft und Zeit schenkt" },
        { key: "b", label: "Werkstatt auf Rädern" },
        { key: "c", label: "Wenn Kollegen die Sprache erklären" },
        { key: "d", label: "Schule ohne Noten" },
        { key: "e", label: "Wohnen bleibt teuer — aber anders" },
        { key: "f", label: "Gemüse direkt vom Feld" },
        { key: "g", label: "Wenn der Chef mitfährt" },
        { key: "h", label: "Zweites Leben für Möbel" },
        { key: "i", label: "Pausenhof ohne Handy" },
        { key: "j", label: "Ferien, die niemand plant" },
      ],
      blocks: [
        {
          id: "b1f-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Etwa hundert Familien in und um Kirchdorf beziehen ihr Gemüse inzwischen direkt von einem Hof. Sie zahlen im Voraus einen festen Monatsbeitrag und bekommen dafür jede Woche eine Kiste — was gerade wächst. Wer Kohl nicht mag, hat Pech. Genau das sei der Punkt, sagt der Landwirt: Das Risiko trage nicht mehr er allein, sondern alle gemeinsam. Ein schlechtes Jahr bedeute dann weniger Inhalt, nicht den Ruin.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "In einem Möbelhaus in Kassel steht seit einem Jahr eine Abteilung für zurückgegebene und beschädigte Ware. Sofas mit einem Fleck, Schränke mit einer Delle: Statt entsorgt zu werden, gehen sie mit 40 bis 70 Prozent Nachlass in den Verkauf. Die Nachfrage übersteigt das Angebot deutlich. Eine Mitarbeiterin sagt, viele Kundinnen und Kunden kämen inzwischen zuerst in diese Abteilung — und erst danach in den regulären Bereich.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Ein Handwerksbetrieb in Bremen hat zwölf Beschäftigte aus sieben Ländern. Damit die Verständigung auf der Baustelle funktioniert, wurden vier Kollegen zu sogenannten Sprachlotsen geschult. Sie übersetzen nicht, sondern erklären Fachwörter, Sicherheitsregeln und Formulare in einfacher Sprache. Der Betrieb berichtet von weniger Fehlern und deutlich weniger Nachfragen bei der Verwaltung.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "An einer Realschule in Lübeck bleiben die Handys seit zwei Jahren in einem Schrank im Sekretariat. Anfangs gab es Protest, auch von Eltern, die ihre Kinder erreichen wollten. Heute berichten Lehrkräfte von lauteren, aber lebendigeren Pausen. Eine Untersuchung der Schule zeigt außerdem: Die Zahl der Konflikte über Fotos und Nachrichten ist deutlich gesunken.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Der Mietanstieg hat sich in vielen Städten verlangsamt — allerdings nicht, weil Wohnungen billiger würden. Vielmehr ziehen weniger Menschen um: Wer einen alten Vertrag hat, bleibt. Neue Mietverträge sind dagegen weiter deutlich teurer als der Durchschnitt. Fachleute sprechen von einem festgefahrenen Markt, der besonders junge Haushalte und Familien mit Kindern trifft.",
              },
            ],
          },
          items: [
            {
              id: "b1f-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "f",
              explanation: "Sabzavot to‘g‘ridan-to‘g‘ri fermadan olinadi.",
            },
            {
              id: "b1f-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "h",
              explanation: "Shikastlangan mebel arzon narxda qayta sotiladi.",
            },
            {
              id: "b1f-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "c",
              explanation: "Hamkasblar «Sprachlotse» sifatida tilni tushuntiradi.",
            },
            {
              id: "b1f-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "i",
              explanation: "Maktabda telefonlar tanaffusda ham yig‘ib qo‘yiladi.",
            },
            {
              id: "b1f-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "e",
              explanation: "Ijara bozori qotib qolgan — narx baribir qimmat.",
            },
          ],
        },
      ],
    },

    {
      nr: 2,
      taskType: "mc",
      instruction:
        "Lesen Sie den Text und die Aufgaben 6 bis 10. Wählen Sie die richtige Lösung a, b oder c.",
      blocks: [
        {
          id: "b1f-l2-b1",
          stimulus: {
            kind: "text",
            title: "Mit 52 noch einmal die Schulbank",
            body: `Zwei Abende pro Woche, dazu jeder zweite Samstag: So sieht das Leben von Kerim Aslan seit anderthalb Jahren aus. Der 52-Jährige holt den Realschulabschluss nach — 35 Jahre nachdem er die Schule ohne Abschluss verlassen hat.

„Ich habe damals gearbeitet, weil zu Hause Geld fehlte“, erzählt er. Später war es nie der richtige Moment: erst die Kinder, dann die Schichtarbeit. Den Ausschlag gab schließlich sein Betrieb. Als eine Stelle als Vorarbeiter frei wurde, hieß es: ohne Abschluss nicht möglich.

Leicht ist es nicht. Mathematik sei die größte Hürde, sagt Aslan, Englisch die zweitgrößte. Zweimal wollte er aufhören. Geblieben ist er, weil seine Tochter — selbst Studentin — mit ihm lernt. „Sie erklärt mir Gleichungen, ich erkläre ihr das Leben. Das ist ein fairer Tausch.“

Der Kurs ist kostenlos, die Bücher zahlt er selbst. Was er unterschätzt hat, ist die Zeit: Neben Vollzeitarbeit bleiben kaum freie Abende. „Meine Frau trägt das mit. Ohne sie ginge das nicht.“

Ob er die Stelle bekommt, ist offen — sie könnte längst besetzt sein. Bereuen würde er es trotzdem nicht: „Ich mache das jetzt auch für mich.“`,
          },
          items: [
            {
              id: "b1f-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Warum hat Kerim Aslan die Schule damals verlassen?",
              options: [
                { key: "a", label: "Weil die Familie Geld brauchte" },
                { key: "b", label: "Weil er keine Lust mehr hatte" },
                { key: "c", label: "Weil er ins Ausland ging" },
              ],
              correct: "a",
              explanation: "„weil zu Hause Geld fehlte“.",
            },
            {
              id: "b1f-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Was war der entscheidende Anstoß?",
              options: [
                { key: "a", label: "Ein Gespräch mit seiner Tochter" },
                { key: "b", label: "Eine freie Stelle im Betrieb" },
                { key: "c", label: "Der Verlust seiner Arbeit" },
              ],
              correct: "b",
              explanation: "Vorarbeiter lavozimi diplomsiz mumkin emas edi.",
            },
            {
              id: "b1f-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Welches Fach fällt ihm am schwersten?",
              options: [
                { key: "a", label: "Englisch" },
                { key: "b", label: "Deutsch" },
                { key: "c", label: "Mathematik" },
              ],
              correct: "c",
              explanation: "„Mathematik sei die größte Hürde“.",
            },
            {
              id: "b1f-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Warum hat er nicht aufgegeben?",
              options: [
                { key: "a", label: "Weil seine Tochter mit ihm lernt" },
                { key: "b", label: "Weil der Kurs kostenlos ist" },
                { key: "c", label: "Weil der Chef es verlangt hat" },
              ],
              correct: "a",
              explanation: "Qizi u bilan birga o‘qiydi — shu sabab qoldi.",
            },
            {
              id: "b1f-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Wie sieht er das Ergebnis?",
              options: [
                { key: "a", label: "Er macht es nur wegen der Stelle." },
                { key: "b", label: "Er macht es inzwischen auch für sich selbst." },
                { key: "c", label: "Er bereut die Entscheidung." },
              ],
              correct: "b",
              explanation: "„Ich mache das jetzt auch für mich.“",
            },
          ],
        },
      ],
    },

    {
      nr: 3,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie die Situationen 11 bis 20 und die Anzeigen a bis l. Welche Anzeige passt zu welcher Situation? Jede Anzeige kann nur einmal verwendet werden. Gibt es keine passende Anzeige, wählen Sie x.",
      bank: [
        { key: "a", label: "Abendschule: Schulabschluss nachholen" },
        { key: "b", label: "Ausbildungsplatz: Anlagenmechanik" },
        { key: "c", label: "Balkonkraftwerk installieren" },
        { key: "d", label: "Elektro-Fachbetrieb: Notdienst" },
        { key: "e", label: "Gebrauchte Waschmaschinen" },
        { key: "f", label: "Hebamme mit freien Terminen" },
        { key: "g", label: "Kleingarten zu verpachten" },
        { key: "h", label: "Nachhilfe Mathematik online" },
        { key: "i", label: "Pflegeberatung zu Hause" },
        { key: "j", label: "Schreibservice: Bewerbungen" },
        { key: "k", label: "Tanzkurs für Anfänger" },
        { key: "l", label: "Übersetzung: Zeugnisse" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1f-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Abendschule: Schulabschluss nachholen",
                body: "Realschulabschluss in 18 Monaten, zwei Abende pro Woche plus Samstag. Kostenfrei, Bücher etwa 90 €. Einstieg zweimal im Jahr.",
              },
              {
                key: "b",
                title: "Ausbildungsplatz: Anlagenmechanik",
                body: "Wir bilden aus: Heizung, Sanitär, Klima. Ab September, auch für Bewerber über 25. Führerschein von Vorteil, kein Muss.",
              },
              {
                key: "c",
                title: "Balkonkraftwerk installieren",
                body: "Wir montieren kleine Solaranlagen für den Balkon, inklusive Anmeldung beim Netzbetreiber. Ab 190 € Arbeitslohn.",
              },
              {
                key: "d",
                title: "Elektro-Fachbetrieb: Notdienst",
                body: "Kein Strom, Sicherung fliegt raus? Wir kommen rund um die Uhr, auch am Wochenende. Anfahrt 45 €, dann nach Aufwand.",
              },
              {
                key: "e",
                title: "Gebrauchte Waschmaschinen",
                body: "Geprüfte Geräte mit einem Jahr Garantie, ab 160 €. Lieferung und Anschluss für 40 € möglich, alte Maschine nehmen wir mit.",
              },
              {
                key: "f",
                title: "Hebamme mit freien Terminen",
                body: "Betreuung vor und nach der Geburt, Hausbesuche im Stadtgebiet. Kosten übernimmt die Krankenkasse. Bitte früh melden.",
              },
              {
                key: "g",
                title: "Kleingarten zu verpachten",
                body: "300 m² mit Laube und Wasseranschluss, 180 € Pacht im Jahr. Vereinsmitgliedschaft nötig, Übernachten nicht erlaubt.",
              },
              {
                key: "h",
                title: "Nachhilfe Mathematik online",
                body: "Für Klasse 5 bis 10, auch Prüfungsvorbereitung für Erwachsene. 45 Minuten 20 €, Termine flexibel am Abend.",
              },
              {
                key: "i",
                title: "Pflegeberatung zu Hause",
                body: "Wir kommen zu Ihnen, prüfen den Pflegegrad und erklären, welche Leistungen möglich sind. Kostenlos für Versicherte.",
              },
              {
                key: "j",
                title: "Schreibservice: Bewerbungen",
                body: "Wir formulieren Anschreiben und Lebenslauf mit Ihnen gemeinsam, auf Wunsch auch auf Deutsch und Englisch. 60 € pauschal.",
              },
              {
                key: "k",
                title: "Tanzkurs für Anfänger",
                body: "Standard und Latein, sechs Abende, freitags 19–20.30 Uhr. 90 € pro Person, Anmeldung nur paarweise.",
              },
              {
                key: "l",
                title: "Übersetzung: Zeugnisse",
                body: "Beglaubigte Übersetzungen von Schul- und Arbeitszeugnissen. Usbekisch, Russisch, Türkisch. Bearbeitung in drei bis fünf Werktagen.",
              },
            ],
          },
          items: [
            {
              id: "b1f-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind 34 und möchten eine Ausbildung im Handwerk beginnen.",
              correct: "b",
              explanation: "„auch für Bewerber über 25“.",
            },
            {
              id: "b1f-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Für das Anerkennungsverfahren brauchen Sie Ihr Schulzeugnis auf Deutsch, amtlich bestätigt.",
              correct: "l",
              explanation: "Tasdiqlangan tarjima xizmati.",
            },
            {
              id: "b1f-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Am Sonntagabend fällt bei Ihnen der Strom aus und die Sicherung hilft nicht.",
              correct: "d",
              explanation: "Kechayu kunduz ishlaydigan elektr shoshilinch xizmati.",
            },
            {
              id: "b1f-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Waschmaschine ist kaputt, Sie haben wenig Geld und kein Auto.",
              correct: "e",
              explanation: "Ishlatilgan mashina, yetkazish va ulash xizmati bilan.",
            },
            {
              id: "b1f-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie bereiten sich als Erwachsener auf eine Matheprüfung vor und können nur abends.",
              correct: "h",
              explanation: "„auch Prüfungsvorbereitung für Erwachsene“, kechqurun.",
            },
            {
              id: "b1f-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Mutter braucht mehr Hilfe im Alltag, und Sie wissen nicht, was die Kasse zahlt.",
              correct: "i",
              explanation: "Uy sharoitida parvarish bo‘yicha bepul maslahat.",
            },
            {
              id: "b1f-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten Ihren Schulabschluss nachholen, arbeiten aber Vollzeit.",
              correct: "a",
              explanation: "Kechki maktab — haftada ikki kecha va shanba.",
            },
            {
              id: "b1f-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten Gemüse anbauen und suchen ein Stück Land in der Nähe.",
              correct: "g",
              explanation: "Kleingarten ijaraga beriladi.",
            },
            {
              id: "b1f-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie erwarten ein Kind und suchen Betreuung vor und nach der Geburt.",
              correct: "f",
              explanation: "Doya xizmati, sug‘urta qoplaydi.",
            },
            {
              id: "b1f-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen einen Kindergartenplatz für Ihren zweijährigen Sohn.",
              correct: "x",
              explanation: "Bog‘cha haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
