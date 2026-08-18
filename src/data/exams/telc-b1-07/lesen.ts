import type { ExamModule } from "@/lib/exam/types";

/** telc B1 · Übungstest 07 · Leseverstehen — 3 Teil, 20 element, 75 ball. */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      bank: [
        { key: "a", label: "Wenn der Betrieb die Kita bezahlt" },
        { key: "b", label: "Ein Museum zum Anfassen" },
        { key: "c", label: "Alte Bäume, neue Regeln" },
        { key: "d", label: "Wenn Patienten selbst messen" },
        { key: "e", label: "Sprachkurs im Betrieb" },
        { key: "f", label: "Wohnung tauschen statt umziehen" },
        { key: "g", label: "Weniger Fleisch in der Kantine" },
        { key: "h", label: "Ein Chor für alle Generationen" },
        { key: "i", label: "Wenn Nachbarn Werkzeug teilen" },
        { key: "j", label: "Fahrrad fahren im Winter" },
      ],
      blocks: [
        {
          id: "b1g-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "In einem Kellerraum in Dortmund stehen inzwischen über 200 Geräte: Bohrmaschinen, Leitern, Dampfreiniger, sogar ein Anhänger. Wer im Verein Mitglied ist, zahlt 30 Euro im Jahr und kann alles ausleihen. Die Idee kam einem Rentner, der feststellte, dass in seiner Straße acht Haushalte je eine Bohrmaschine besaßen — und jede davon vielleicht zehn Minuten im Jahr benutzt wurde.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Eine Klinik in Bielefeld gibt Patientinnen und Patienten mit Bluthochdruck seit einem Jahr Messgeräte mit nach Hause. Die Werte werden automatisch an die Praxis übertragen. Ärztinnen sehen so, wie sich der Druck über Wochen entwickelt, statt nur einen einzelnen Wert in der Sprechstunde zu messen. Die Zahl der Medikamentenänderungen ist dadurch gestiegen — nach Einschätzung der Klinik ein gutes Zeichen.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Ein Metallbetrieb in Hagen bietet seinen Beschäftigten seit zwei Jahren Deutschunterricht an — zwei Stunden pro Woche, davon eine als Arbeitszeit. Unterrichtet wird nicht allgemeines Deutsch, sondern das, was im Betrieb gebraucht wird: Arbeitsaufträge, Sicherheitsregeln, Krankmeldungen. Die Zahl der Missverständnisse in der Produktion sei deutlich gesunken, berichtet die Betriebsleitung.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Wer in einer großen Wohnung lebt, aber nur noch zu zweit ist, findet oft keine kleinere in derselben Gegend — und bleibt deshalb. Eine Wohnungsgenossenschaft in Hannover vermittelt nun Tauschpartner: Die eine Partei zieht in die kleine Wohnung, die andere in die große, die Mieten bleiben jeweils an die Wohnung gebunden. Im ersten Jahr kamen 34 Tausche zustande.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "In den Kantinen einer Stadtverwaltung steht seit einem halben Jahr das vegetarische Gericht an erster Stelle und kostet einen Euro weniger. Verboten wurde nichts. Trotzdem hat sich der Anteil der fleischlosen Essen von einem Viertel auf fast die Hälfte erhöht. Beschwerden gab es kaum — auffällig war nur, dass sie fast alle in den ersten drei Wochen eingingen.",
              },
            ],
          },
          items: [
            {
              id: "b1g-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "i",
              explanation: "Qo‘shnilar asboblarni birgalikda ishlatadi.",
            },
            {
              id: "b1g-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "d",
              explanation: "Bemorlar bosimni uyda o‘zi o‘lchaydi.",
            },
            {
              id: "b1g-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "e",
              explanation: "Korxonada nemis tili darslari.",
            },
            {
              id: "b1g-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "f",
              explanation: "Ko‘chish o‘rniga kvartira almashish.",
            },
            {
              id: "b1g-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "g",
              explanation: "Oshxonada go‘shtsiz taomlar ulushi oshdi.",
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
          id: "b1g-l2-b1",
          stimulus: {
            kind: "text",
            title: "Ein Jahr ohne Chef",
            body: `In der Tischlerei Vogt in Münster gibt es seit einem Jahr keine Werkstattleitung mehr. Als der langjährige Meister in Rente ging, entschied sich die Inhaberin gegen eine Nachbesetzung. „Ich wollte ausprobieren, ob die Leute das selbst können. Ehrlich gesagt hatte ich Zweifel.“

Heute verteilen die neun Beschäftigten ihre Aufträge in einer Runde am Montagmorgen. Wer welche Arbeit übernimmt, entscheidet die Gruppe. Urlaub trägt jeder selbst ein; nur wenn zu wenige da wären, wird gesprochen.

Reibungslos lief es nicht von Anfang an. In den ersten Monaten blieben unbeliebte Aufgaben liegen — vor allem das Aufräumen und die Materialbestellung. Gelöst wurde das mit einem einfachen Plan: Diese Aufgaben rotieren jetzt wöchentlich.

Was die Inhaberin überrascht hat, ist etwas anderes. Die Zahl der Fehler ist nicht gestiegen, sondern leicht gesunken. „Wenn du selbst zusagst, dass eine Küche am Freitag fertig ist, dann ist sie am Freitag fertig.“

Ob das Modell für jeden Betrieb passt, bezweifelt sie. „Wir sind neun Leute und kennen uns seit Jahren. Bei fünfzig Beschäftigten würde ich das nicht so machen.“`,
          },
          items: [
            {
              id: "b1g-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Warum gibt es keine Werkstattleitung mehr?",
              options: [
                { key: "a", label: "Die Inhaberin wollte es ausprobieren." },
                { key: "b", label: "Die Beschäftigten haben es verlangt." },
                { key: "c", label: "Der Betrieb wollte Geld sparen." },
              ],
              correct: "a",
              explanation: "„Ich wollte ausprobieren, ob die Leute das selbst können.“",
            },
            {
              id: "b1g-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Wie werden die Aufträge verteilt?",
              options: [
                { key: "a", label: "Von der Inhaberin" },
                { key: "b", label: "In einer Runde am Montag" },
                { key: "c", label: "Per Software" },
              ],
              correct: "b",
              explanation: "„in einer Runde am Montagmorgen“.",
            },
            {
              id: "b1g-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Welches Problem gab es am Anfang?",
              options: [
                { key: "a", label: "Zu viele Aufträge" },
                { key: "b", label: "Streit über den Urlaub" },
                { key: "c", label: "Unbeliebte Aufgaben blieben liegen." },
              ],
              correct: "c",
              explanation: "Yig‘ishtirish va material buyurtmasi qolib ketardi.",
            },
            {
              id: "b1g-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Wie wurde das gelöst?",
              options: [
                { key: "a", label: "Die Aufgaben wechseln jede Woche." },
                { key: "b", label: "Ein neuer Meister wurde eingestellt." },
                { key: "c", label: "Eine Firma übernimmt das Aufräumen." },
              ],
              correct: "a",
              explanation: "„Diese Aufgaben rotieren jetzt wöchentlich.“",
            },
            {
              id: "b1g-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Was sagt die Inhaberin über größere Betriebe?",
              options: [
                { key: "a", label: "Dort funktioniert es genauso." },
                { key: "b", label: "Dort würde sie es nicht so machen." },
                { key: "c", label: "Dort braucht man zwei Leitungen." },
              ],
              correct: "b",
              explanation: "„Bei fünfzig Beschäftigten würde ich das nicht so machen.“",
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
        { key: "a", label: "Aquakurs für Schwangere" },
        { key: "b", label: "Werkzeugverleih im Verein" },
        { key: "c", label: "Chorprobe: offener Abend" },
        { key: "d", label: "Dachbodenentrümpelung" },
        { key: "e", label: "Fahrradanhänger zu verleihen" },
        { key: "f", label: "Fotokurs für Anfänger" },
        { key: "g", label: "Hilfe bei der Steuererklärung" },
        { key: "h", label: "Katzenbetreuung im Urlaub" },
        { key: "i", label: "Konversationskurs Deutsch" },
        { key: "j", label: "Möbel aufbauen" },
        { key: "k", label: "Nähmaschinen-Reparatur" },
        { key: "l", label: "Wanderung mit Kinderwagen" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1g-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Aquakurs für Schwangere",
                body: "Sanftes Training im warmen Wasser, dienstags 17 Uhr. Zehn Termine, 85 €, viele Krankenkassen erstatten einen Teil.",
              },
              {
                key: "b",
                title: "Werkzeugverleih im Verein",
                body: "Bohrmaschine, Leiter, Dampfreiniger und mehr. Mitgliedschaft 30 € im Jahr, danach Ausleihe kostenlos.",
              },
              {
                key: "c",
                title: "Chorprobe: offener Abend",
                body: "Einmal im Monat können Interessierte unverbindlich mitsingen. Donnerstags 19 Uhr, keine Anmeldung, keine Kosten.",
              },
              {
                key: "d",
                title: "Dachbodenentrümpelung",
                body: "Wir räumen Dachböden und Keller, sortieren Brauchbares aus und entsorgen den Rest. Festpreis nach Besichtigung, ab 200 €.",
              },
              {
                key: "e",
                title: "Fahrradanhänger zu verleihen",
                body: "Anhänger für Kinder oder Einkäufe, 5 € pro Tag. Abholung im Stadtteil West, Kaution 50 €.",
              },
              {
                key: "f",
                title: "Fotokurs für Anfänger",
                body: "Drei Abende zu Kameraeinstellungen und Bildaufbau. 65 €, eigene Kamera nötig, Handy reicht nicht.",
              },
              {
                key: "g",
                title: "Hilfe bei der Steuererklärung",
                body: "Lohnsteuerhilfeverein: Wir erstellen Ihre Erklärung, wenn Sie nur Einkünfte aus nichtselbstständiger Arbeit haben. Beitrag ab 70 € im Jahr.",
              },
              {
                key: "h",
                title: "Katzenbetreuung im Urlaub",
                body: "Tägliche Besuche bei Ihnen zu Hause: füttern, Katzenklo, Zuwendung. 11 € pro Besuch, Schlüsselübergabe vorher.",
              },
              {
                key: "i",
                title: "Konversationskurs Deutsch",
                body: "Sprechen üben ab Niveau B1, mittwochs 18–19.30 Uhr. Zehn Termine 60 €, kleine Gruppen von maximal acht Personen.",
              },
              {
                key: "j",
                title: "Möbel aufbauen",
                body: "Schrank, Bett, Küche: Wir bauen Ihre neuen Möbel auf, auch abends. 35 € pro Stunde, Werkzeug bringen wir mit.",
              },
              {
                key: "k",
                title: "Nähmaschinen-Reparatur",
                body: "Wir reinigen und reparieren alle Marken, auch alte Modelle. Kostenvoranschlag 15 €, wird bei Reparatur angerechnet.",
              },
              {
                key: "l",
                title: "Wanderung mit Kinderwagen",
                body: "Sonntags 10 Uhr, etwa 6 Kilometer auf festen Wegen. Für Eltern mit Babys, kostenlos, Treffpunkt am Waldparkplatz.",
              },
            ],
          },
          items: [
            {
              id: "b1g-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind im sechsten Monat schwanger und möchten etwas für den Rücken tun.",
              correct: "a",
              explanation: "Homilador ayollar uchun suvdagi mashqlar.",
            },
            {
              id: "b1g-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie brauchen einmal im Jahr eine Bohrmaschine und möchten keine kaufen.",
              correct: "b",
              explanation: "Asbob ijarasi — yillik a’zolik bilan.",
            },
            {
              id: "b1g-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben nur Einkünfte aus Ihrer Arbeit und brauchen Hilfe bei der Steuer.",
              correct: "g",
              explanation:
                "„nur Einkünfte aus nichtselbstständiger Arbeit“ — aynan shu holat.",
            },
            {
              id: "b1g-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie fahren zwei Wochen weg und Ihr Tier soll zu Hause bleiben.",
              correct: "h",
              explanation: "Mushukni uyda boqib turish xizmati.",
            },
            {
              id: "b1g-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben eine neue Küche gekauft und können sie nicht selbst aufbauen.",
              correct: "j",
              explanation: "Mebel yig‘ish xizmati, kechqurun ham ishlaydi.",
            },
            {
              id: "b1g-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben B1 und möchten vor allem das Sprechen üben.",
              correct: "i",
              explanation: "B1 dan boshlab suhbat kursi.",
            },
            {
              id: "b1g-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten mit Ihrem Baby am Wochenende an die frische Luft und andere Eltern treffen.",
              correct: "l",
              explanation: "Aravacha bilan yakshanba sayri.",
            },
            {
              id: "b1g-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten ausprobieren, ob Singen in der Gruppe Ihnen liegt.",
              correct: "c",
              explanation: "Ochiq kecha — majburiyatsiz sinab ko‘rish.",
            },
            {
              id: "b1g-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie transportieren jede Woche große Einkäufe, haben aber kein Auto.",
              correct: "e",
              explanation: "Velosiped tirkamasi ijaraga beriladi.",
            },
            {
              id: "b1g-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen einen günstigen Handwerker für eine Wasserleitung.",
              correct: "x",
              explanation: "Santexnika ishlari haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
