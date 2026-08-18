import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B1 · Übungstest 04 · Leseverstehen — 3 Teil, 20 element, 75 ball.
 */
export const LESEN: ExamModule = {
  id: "lesen",
  teile: [
    {
      nr: 1,
      taskType: "zuordnung",
      instruction:
        "Lesen Sie zuerst die 10 Überschriften a–j und danach die fünf Texte. Welche Überschrift passt zu welchem Text? Jede Überschrift kann nur einmal verwendet werden.",
      bank: [
        { key: "a", label: "Wenn der Wecker später klingelt" },
        { key: "b", label: "Ein Zug für den Schulweg" },
        { key: "c", label: "Kochen lernen im Supermarkt" },
        { key: "d", label: "Zweite Chance für alte Handys" },
        { key: "e", label: "Wenn Kollegen zu Nachbarn werden" },
        { key: "f", label: "Der Arzt kommt per Video" },
        { key: "g", label: "Sport ohne Verein" },
        { key: "h", label: "Bücher, die niemandem gehören" },
        { key: "i", label: "Wenn Väter länger zu Hause bleiben" },
        { key: "j", label: "Ein Dorf teilt sich ein Auto" },
      ],
      blocks: [
        {
          id: "b1d-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "In Oberried stehen seit einem Jahr zwei Elektroautos auf dem Dorfplatz. Sie gehören einem Verein, dem inzwischen 64 Haushalte angehören. Wer fahren möchte, bucht über eine App und zahlt pro Stunde. Für den Verein rechnet es sich: Die Autos stehen selten still. Einige Familien haben ihren Zweitwagen inzwischen verkauft — und rechnen vor, dass sie damit rund 200 Euro im Monat sparen.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Auf einem Regal am Marktplatz in Neuruppin stehen etwa 200 Bücher. Jeder darf sich eines nehmen, ohne Ausweis, ohne Frist. Wer will, stellt dafür ein anderes hinein. Betreut wird das Regal von zwei Rentnerinnen, die einmal in der Woche sortieren und Nasses aussortieren. Diebstahl sei kein Thema, sagen sie: „Man kann nichts stehlen, was allen gehört.“",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Ein Krankenhaus im Oberharz bietet seit zwei Jahren Sprechstunden per Video an. Vor allem für die Nachsorge nach einer Operation habe sich das bewährt, sagt die Ärztliche Direktorin: Patientinnen und Patienten sparen sich eine Anfahrt von bis zu 70 Kilometern. Für Erstuntersuchungen sei die Methode dagegen ungeeignet — „vieles sieht man erst, wenn jemand vor einem steht.“",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Der Anteil der Väter, die Elternzeit nehmen, ist auf 27 Prozent gestiegen. Die meisten bleiben allerdings nur zwei Monate zu Hause. Wer länger aussetzt, berichtet häufiger von kritischen Reaktionen im Betrieb. Auffällig ist: In Firmen, in denen bereits ein Vorgesetzter längere Elternzeit genommen hat, entscheiden sich deutlich mehr Männer für sechs Monate oder mehr.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Ein Elektronikhändler in Kiel repariert seit einem Jahr alte Smartphones und verkauft sie mit einem Jahr Garantie weiter. Rund 40 Prozent der Geräte, die Kunden abgeben, lassen sich retten. Der Rest wird zerlegt; Bauteile gehen an Werkstätten. Der Inhaber sagt, das Geschäft trage sich knapp — es gehe ihm aber ohnehin mehr um die Frage, warum funktionierende Technik in Schubladen liegt.",
              },
            ],
          },
          items: [
            {
              id: "b1d-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "j",
              explanation: "Qishloq umumiy mashinalarni birga ishlatadi.",
            },
            {
              id: "b1d-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "h",
              explanation: "Hech kimga tegishli bo‘lmagan ochiq kitob javoni.",
            },
            {
              id: "b1d-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "f",
              explanation: "Shifokor bilan videoaloqa orqali qabul.",
            },
            {
              id: "b1d-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "i",
              explanation: "Otalarning ta’til olishi haqida.",
            },
            {
              id: "b1d-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "d",
              explanation: "Eski telefonlar ta’mirlanib qayta sotiladi.",
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
          id: "b1d-l2-b1",
          stimulus: {
            kind: "text",
            title: "Der zweite Anlauf",
            body: `Mit 19 hat Deniz Aydin seine Ausbildung als Koch abgebrochen. „Ich bin morgens einfach nicht mehr hingegangen“, sagt er heute. Zehn Jahre lang arbeitete er danach in Lagern und auf dem Bau, immer befristet, oft im Schichtdienst.

Den Anstoß gab ein Gespräch mit seiner Schwester. Sie hatte gelesen, dass man eine Ausbildung auch als Erwachsener nachholen kann, und meldete ihn kurzerhand zu einem Beratungstermin an. „Ich wäre allein nie hingegangen. Ich dachte, mit 29 ist der Zug abgefahren.“

Die Beratung ergab, dass er die Ausbildung nicht von vorn beginnen muss: Die zwei Jahre, die er damals absolviert hatte, wurden angerechnet. Statt drei Jahren blieb also nur eines. Trotzdem war es hart. Neben der Berufsschule arbeitete er weiter, allerdings nur noch 20 Stunden pro Woche — finanziell ein Einschnitt, den seine Familie mittragen musste.

Heute arbeitet Aydin in der Küche eines Seniorenheims, unbefristet und mit festen Zeiten. Der Verdienst liegt etwa auf dem Niveau seiner früheren Jobs. „Das Geld ist nicht der Punkt. Der Punkt ist, dass mich niemand mehr nach drei Monaten wieder rauswirft.“

Anderen rät er, sich beraten zu lassen, bevor sie planen: „Ich hätte fast noch einmal drei Jahre gemacht, weil ich es nicht besser wusste.“`,
          },
          items: [
            {
              id: "b1d-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was hat Deniz Aydin mit 19 gemacht?",
              options: [
                { key: "a", label: "Er hat seine Ausbildung abgebrochen." },
                { key: "b", label: "Er hat eine Stelle als Koch angenommen." },
                { key: "c", label: "Er ist ins Ausland gegangen." },
              ],
              correct: "a",
              explanation: "„hat Deniz Aydin seine Ausbildung als Koch abgebrochen“.",
            },
            {
              id: "b1d-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Wer hat den Anstoß für den Neuanfang gegeben?",
              options: [
                { key: "a", label: "Sein früherer Chef" },
                { key: "b", label: "Seine Schwester" },
                { key: "c", label: "Die Agentur für Arbeit" },
              ],
              correct: "b",
              explanation: "Singlisi uni maslahatga yozib qo‘ygan.",
            },
            {
              id: "b1d-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was war das Ergebnis der Beratung?",
              options: [
                { key: "a", label: "Er musste ganz von vorn anfangen." },
                { key: "b", label: "Ihm wurde ein Jahr angerechnet." },
                { key: "c", label: "Ihm wurden zwei Jahre angerechnet." },
              ],
              correct: "c",
              explanation: "Ilgarigi ikki yil hisobga olindi — bir yil qoldi.",
            },
            {
              id: "b1d-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Was sagt er über sein heutiges Gehalt?",
              options: [
                { key: "a", label: "Es ist deutlich höher als früher." },
                { key: "b", label: "Es ist ungefähr gleich geblieben." },
                { key: "c", label: "Es ist stark gesunken." },
              ],
              correct: "b",
              explanation: "„Der Verdienst liegt etwa auf dem Niveau seiner früheren Jobs.“",
            },
            {
              id: "b1d-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Was ist ihm heute am wichtigsten?",
              options: [
                { key: "a", label: "Die Sicherheit der Stelle" },
                { key: "b", label: "Das höhere Gehalt" },
                { key: "c", label: "Die kürzere Arbeitszeit" },
              ],
              correct: "a",
              explanation: "„dass mich niemand mehr nach drei Monaten wieder rauswirft“.",
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
        { key: "a", label: "Erste-Hilfe-Kurs" },
        { key: "b", label: "Gartenpflege im Abo" },
        { key: "c", label: "Küchenmontage" },
        { key: "d", label: "Mitfahrgelegenheit nach Prag" },
        { key: "e", label: "Nachhilfe Deutsch" },
        { key: "f", label: "Nähkurs für Fortgeschrittene" },
        { key: "g", label: "Reifenwechsel & Einlagerung" },
        { key: "h", label: "Schlüsseldienst" },
        { key: "i", label: "Seniorenhandy-Beratung" },
        { key: "j", label: "Tierarztpraxis: Abendsprechstunde" },
        { key: "k", label: "Umzugskartons zu verleihen" },
        { key: "l", label: "Yoga in der Mittagspause" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b1d-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Erste-Hilfe-Kurs",
                body: "Pflichtkurs für den Führerschein und Auffrischung für alle. Samstags 9–16 Uhr, 45 €. Bescheinigung noch am selben Tag.",
              },
              {
                key: "b",
                title: "Gartenpflege im Abo",
                body: "Rasen mähen, Hecke schneiden, Laub räumen — alle zwei Wochen von April bis Oktober. Festpreis 95 € pro Monat.",
              },
              {
                key: "c",
                title: "Küchenmontage",
                body: "Wir bauen Ihre neue Küche auf, auch wenn sie nicht bei uns gekauft wurde. Anschluss von Herd und Spüle inklusive. Termin innerhalb einer Woche.",
              },
              {
                key: "d",
                title: "Mitfahrgelegenheit nach Prag",
                body: "Fahre am Freitagmittag nach Prag und Sonntagabend zurück. Zwei Plätze frei, 25 € pro Strecke, kleines Gepäck möglich.",
              },
              {
                key: "e",
                title: "Nachhilfe Deutsch",
                body: "Studentin hilft Kindern der Klassen 3 bis 8 bei Grammatik und Aufsätzen. 18 € pro Stunde, online oder bei Ihnen zu Hause.",
              },
              {
                key: "f",
                title: "Nähkurs für Fortgeschrittene",
                body: "Sie können bereits nähen und möchten Kleidung selbst zuschneiden? Sechs Abende, mittwochs 18–21 Uhr, 110 €. Eigene Maschine nötig.",
              },
              {
                key: "g",
                title: "Reifenwechsel & Einlagerung",
                body: "Wechsel in 30 Minuten ohne Termin. Auf Wunsch lagern wir Ihre Sommerreifen trocken ein: 40 € pro Saison.",
              },
              {
                key: "h",
                title: "Schlüsseldienst",
                body: "Tür zugefallen? Wir sind in der Regel in 30 Minuten da, rund um die Uhr. Festpreis am Telefon, keine Zuschläge nachts.",
              },
              {
                key: "i",
                title: "Seniorenhandy-Beratung",
                body: "Wir zeigen Ihnen in Ruhe, wie Ihr Telefon funktioniert: Anrufe, Nachrichten, Notruftaste. Kostenlos, dienstags im Seniorenbüro.",
              },
              {
                key: "j",
                title: "Tierarztpraxis: Abendsprechstunde",
                body: "Neu: dienstags und donnerstags bis 21 Uhr. Ideal für Berufstätige. Termine online buchbar.",
              },
              {
                key: "k",
                title: "Umzugskartons zu verleihen",
                body: "Stabile Kisten aus Kunststoff, 1,50 € pro Stück und Woche. Lieferung und Abholung im Stadtgebiet kostenlos.",
              },
              {
                key: "l",
                title: "Yoga in der Mittagspause",
                body: "45 Minuten Yoga, dienstags und donnerstags 12.15 Uhr, direkt im Bürogebäude am Anger. Zehnerkarte 80 €.",
              },
            ],
          },
          items: [
            {
              id: "b1d-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie stehen nachts vor Ihrer Wohnungstür, der Schlüssel liegt drinnen.",
              correct: "h",
              explanation: "Kechayu kunduz ishlaydigan qulf xizmati.",
            },
            {
              id: "b1d-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie machen gerade den Führerschein und brauchen die Bescheinigung schnell.",
              correct: "a",
              explanation: "„Bescheinigung noch am selben Tag“.",
            },
            {
              id: "b1d-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Katze muss zum Arzt, aber Sie arbeiten bis 18 Uhr.",
              correct: "j",
              explanation: "Kechki qabul soat 21:00 gacha.",
            },
            {
              id: "b1d-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Tochter (Klasse 6) hat Probleme mit Aufsätzen.",
              correct: "e",
              explanation: "3–8-sinflar uchun nemis tilidan repetitor.",
            },
            {
              id: "b1d-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie ziehen in zwei Wochen um und möchten keine Kartons kaufen.",
              correct: "k",
              explanation: "Quti ijaraga beriladi, yetkazish bepul.",
            },
            {
              id: "b1d-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten am Wochenende nach Prag und haben kein Auto.",
              correct: "d",
              explanation: "Juma–yakshanba Pragaga birga borish.",
            },
            {
              id: "b1d-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Mutter hat ein neues Telefon bekommen und kommt damit nicht zurecht.",
              correct: "i",
              explanation: "Keksalar uchun bepul telefon maslahati.",
            },
            {
              id: "b1d-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben eine Küche gebraucht gekauft und können sie nicht selbst aufbauen.",
              correct: "c",
              explanation:
                "„auch wenn sie nicht bei uns gekauft wurde“ — o‘rnatish xizmati.",
            },
            {
              id: "b1d-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten im Büro am Anger und möchten mittags etwas für den Rücken tun.",
              correct: "l",
              explanation: "Tushlik tanaffusida shu binoda yoga.",
            },
            {
              id: "b1d-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen einen günstigen Deutschkurs für sich selbst am Abend.",
              correct: "x",
              explanation:
                "Nachhilfe faqat maktab o‘quvchilari uchun — kattalarga kurs yo‘q. Javob x.",
            },
          ],
        },
      ],
    },
  ],
};
