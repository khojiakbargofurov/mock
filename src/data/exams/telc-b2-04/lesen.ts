import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 04 · Leseverstehen — 3 Teil, 20 element, 75 ball.
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
        { key: "a", label: "Wenn Algorithmen Bewerbungen sortieren" },
        { key: "b", label: "Weniger Fläche, mehr Ertrag" },
        { key: "c", label: "Das Ehrenamt wird älter" },
        { key: "d", label: "Reparieren statt ersetzen — jetzt mit Recht" },
        { key: "e", label: "Wenn die Sprache zur Hürde wird" },
        { key: "f", label: "Studieren ohne Hörsaal" },
        { key: "g", label: "Streit um die letzte Filiale" },
        { key: "h", label: "Pflege im eigenen Zuhause" },
        { key: "i", label: "Wenn Museen ihre Depots öffnen" },
        { key: "j", label: "Nachtarbeit auf dem Prüfstand" },
      ],
      blocks: [
        {
          id: "b2d-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "Seit einem Jahr gilt in mehreren EU-Staaten die Pflicht, Ersatzteile für Haushaltsgeräte über sieben Jahre bereitzustellen. Erste Auswertungen zeigen ein gemischtes Bild: Die Teile sind verfügbar, aber oft so teuer, dass eine Reparatur wirtschaftlich unsinnig bleibt. Verbraucherverbände fordern deshalb eine Preisgrenze — die Hersteller verweisen auf Lager- und Logistikkosten, die bei alten Modellen überproportional stiegen.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Viele Unternehmen setzen bei der Vorauswahl von Bewerbungen inzwischen Software ein. Sie erkennt Schlüsselbegriffe, Lücken im Lebenslauf und Formulierungen. Was als Entlastung der Personalabteilungen gedacht war, wirft Fragen auf: In einem Test der Universität Mannheim wurden identische Lebensläufe unterschiedlich bewertet, sobald sich Name oder Wohnort änderten. Die Anbieter halten dagegen, dass menschliche Auswahl nicht objektiver sei.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Rund 80 Prozent der Pflegebedürftigen in Deutschland werden zu Hause versorgt, meist von Angehörigen. Der Wunsch, in der eigenen Wohnung zu bleiben, ist nahezu unabhängig von Einkommen und Bildung. Was fehlt, sind Entlastungsangebote: Tagespflege, Kurzzeitpflege, Beratung. Fachleute warnen, dass die häusliche Versorgung genau dann zusammenbricht, wenn die pflegende Person selbst erkrankt — ein Fall, für den es kaum Vorsorge gibt.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Der Anteil der über 60-Jährigen unter den Freiwilligen in Vereinen und Verbänden ist binnen zehn Jahren von 24 auf 38 Prozent gestiegen. Jüngere engagieren sich zwar weiterhin, aber seltener dauerhaft: Sie bevorzugen Projekte mit klarem Anfang und Ende. Für Vorstände bedeutet das Umdenken — wer heute zwölf Jahre Kassenwart sucht, findet niemanden mehr, wohl aber Leute für ein Wochenende.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Wie viele Beschäftigte dauerhaft nachts arbeiten, ist umstritten; die Schätzungen liegen zwischen 1,5 und 2,5 Millionen. Unumstritten ist dagegen, dass Nachtarbeit das Risiko für Herz-Kreislauf-Erkrankungen und Schlafstörungen erhöht. Eine Kommission empfiehlt nun, Nachtschichten stärker zu begrenzen und die Zuschläge zu erhöhen. Kritik kommt aus Kliniken und der Logistik: Ohne Nachtarbeit, heißt es dort, stehe die Versorgung still.",
              },
            ],
          },
          items: [
            {
              id: "b2d-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "d",
              explanation: "Ehtiyot qismlar majburiyati — ta’mirlash huquqi.",
            },
            {
              id: "b2d-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "a",
              explanation: "Dasturlar arizalarni saralaydi.",
            },
            {
              id: "b2d-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "h",
              explanation: "Parvarish uy sharoitida amalga oshiriladi.",
            },
            {
              id: "b2d-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "c",
              explanation: "Ixtiyoriylar orasida keksalar ulushi ortmoqda.",
            },
            {
              id: "b2d-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "j",
              explanation: "Tungi ish va uning oqibatlari muhokamada.",
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
          id: "b2d-l2-b1",
          stimulus: {
            kind: "text",
            title: "Das Ende der Sprechstunde?",
            body: `Wer in einer deutschen Behörde etwas erledigen will, braucht heute meist eines: einen Termin. Was während der Pandemie als Notlösung begann, ist vielerorts zum Regelfall geworden. Die Zahlen sprechen zunächst dafür: In Städten mit reiner Terminvergabe sank die durchschnittliche Wartezeit vor Ort von 47 auf unter zehn Minuten.

Der Verwaltungswissenschaftler Tobias Reinhardt hält diese Zahl allerdings für irreführend. „Wir messen die Zeit im Wartebereich. Die Wartezeit hat sich nur verlagert — sie steckt jetzt im Kalender.“ In einzelnen Großstädten liege die Zeit bis zum nächsten freien Termin für eine Ummeldung bei über sechs Wochen. Wer eine Frist einhalten müsse, gerate dadurch in Schwierigkeiten, ohne dass ihn ein Vorwurf treffe.

Hinzu kommt ein zweiter Effekt, der in den Statistiken nicht auftaucht. Reinhardts Team befragte 1.800 Personen, die einen Behördengang abgebrochen hatten. Der häufigste Grund war nicht die Wartezeit, sondern die Buchung selbst: fehlende Termine, unklare Kategorien, ein Portal, das nach 15 Minuten Inaktivität die Eingaben löscht. „Das System filtert — und zwar nicht nach Dringlichkeit, sondern nach digitaler Routine.“

Ganz ohne Vorteile ist die Umstellung nicht. Beschäftigte berichten von ruhigerem Arbeiten und weniger Konflikten am Schalter; die Zahl der Übergriffe auf Mitarbeitende ist messbar gesunken. Auch komplexe Anliegen lassen sich besser vorbereiten, wenn vorher bekannt ist, worum es geht.

Reinhardt plädiert deshalb nicht für eine Rückkehr zur offenen Sprechstunde für alles, sondern für ein Nebeneinander: feste Termine für aufwendige Fälle, dazu einige Stunden pro Woche ohne Anmeldung. „Eine Verwaltung, die nur noch über ein Portal erreichbar ist, schließt genau die Menschen aus, die sie am dringendsten brauchen.“`,
          },
          items: [
            {
              id: "b2d-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was zeigen die Zahlen zur Wartezeit vor Ort?",
              options: [
                { key: "a", label: "Sie ist deutlich gesunken." },
                { key: "b", label: "Sie ist leicht gestiegen." },
                { key: "c", label: "Sie ist unverändert geblieben." },
              ],
              correct: "a",
              explanation: "„von 47 auf unter zehn Minuten“.",
            },
            {
              id: "b2d-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Warum hält Reinhardt diese Zahl für irreführend?",
              options: [
                { key: "a", label: "Weil die Behörden falsch messen." },
                { key: "b", label: "Weil die Wartezeit nur verlagert wurde." },
                { key: "c", label: "Weil zu wenige Städte erfasst wurden." },
              ],
              correct: "b",
              explanation: "„sie steckt jetzt im Kalender“.",
            },
            {
              id: "b2d-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was war der häufigste Grund für einen Abbruch?",
              options: [
                { key: "a", label: "Die lange Wartezeit vor Ort" },
                { key: "b", label: "Das Verhalten der Mitarbeitenden" },
                { key: "c", label: "Probleme bei der Terminbuchung" },
              ],
              correct: "c",
              explanation:
                "„nicht die Wartezeit, sondern die Buchung selbst“.",
            },
            {
              id: "b2d-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Welchen Vorteil nennt der Text?",
              options: [
                { key: "a", label: "Weniger Konflikte am Schalter" },
                { key: "b", label: "Mehr Personal in den Ämtern" },
                { key: "c", label: "Niedrigere Gebühren" },
              ],
              correct: "a",
              explanation:
                "„ruhigerem Arbeiten und weniger Konflikten … Übergriffe … gesunken“.",
            },
            {
              id: "b2d-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Wofür plädiert Reinhardt?",
              options: [
                { key: "a", label: "Für die Rückkehr zur offenen Sprechstunde" },
                { key: "b", label: "Für eine Kombination aus beidem" },
                { key: "c", label: "Für rein digitale Verwaltung" },
              ],
              correct: "b",
              explanation:
                "„für ein Nebeneinander: feste Termine … dazu einige Stunden ohne Anmeldung“.",
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
        { key: "a", label: "Anerkennungsberatung Pflege" },
        { key: "b", label: "Arbeitsrechtliche Erstberatung" },
        { key: "c", label: "Ausbildung in Teilzeit" },
        { key: "d", label: "Bildungsurlaub: Rhetorik" },
        { key: "e", label: "Elternzeit-Beratung" },
        { key: "f", label: "Existenzgründung im Handwerk" },
        { key: "g", label: "Fachkurs Buchhaltung" },
        { key: "h", label: "Gesundheitskurse der Krankenkasse" },
        { key: "i", label: "Konfliktmoderation im Verein" },
        { key: "j", label: "Mentoring für Berufseinsteigerinnen" },
        { key: "k", label: "Prüfungsvorbereitung C1" },
        { key: "l", label: "Wohnungssuche: Beratung" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2d-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Anerkennungsberatung Pflege",
                body: "Für Pflegefachkräfte mit ausländischem Abschluss: Wir prüfen Ihre Unterlagen, erklären das Verfahren und begleiten Sie bis zum Bescheid. Kostenlos, auch mit Dolmetscher.",
              },
              {
                key: "b",
                title: "Arbeitsrechtliche Erstberatung",
                body: "Kündigung, Abmahnung, Arbeitszeugnis: 30 Minuten Erstberatung durch eine Fachanwältin, 50 €. Termine kurzfristig, auch abends.",
              },
              {
                key: "c",
                title: "Ausbildung in Teilzeit",
                body: "Sie haben ein Kind und möchten eine Ausbildung machen? In Teilzeit ist das möglich — 25 bis 30 Stunden pro Woche, gleiche Abschlussprüfung. Beratung nach Vereinbarung.",
              },
              {
                key: "d",
                title: "Bildungsurlaub: Rhetorik",
                body: "Fünf Tage Präsentation und freies Sprechen, anerkannt als Bildungsurlaub in acht Bundesländern. 480 €, kleine Gruppen.",
              },
              {
                key: "e",
                title: "Elternzeit-Beratung",
                body: "Wie lange, wie aufteilen, was bedeutet das fürs Gehalt? Wir rechnen Ihre Varianten durch. 25 € pro Beratung, online möglich.",
              },
              {
                key: "f",
                title: "Existenzgründung im Handwerk",
                body: "Von der Meisterprüfung zum eigenen Betrieb: Businessplan, Finanzierung, Versicherungen. Kostenfrei für Mitglieder der Handwerkskammer.",
              },
              {
                key: "g",
                title: "Fachkurs Buchhaltung",
                body: "Grundlagen der doppelten Buchführung, sechs Wochen berufsbegleitend, dienstags und donnerstags 18–21 Uhr. 590 €, Bildungsgutschein möglich.",
              },
              {
                key: "h",
                title: "Gesundheitskurse der Krankenkasse",
                body: "Rückenkurs, Stressbewältigung, Ernährung: Bei regelmäßiger Teilnahme erstatten wir bis zu 80 Prozent der Kosten, zweimal im Jahr.",
              },
              {
                key: "i",
                title: "Konfliktmoderation im Verein",
                body: "Wenn im Vorstand oder in der Mannschaft nichts mehr geht: Wir moderieren zwei Sitzungen. Für gemeinnützige Vereine 150 € pauschal.",
              },
              {
                key: "j",
                title: "Mentoring für Berufseinsteigerinnen",
                body: "Erfahrene Fachfrauen begleiten Berufsanfängerinnen ein Jahr lang, monatliche Treffen. Kostenlos, Bewerbung bis 30. Juni.",
              },
              {
                key: "k",
                title: "Prüfungsvorbereitung C1",
                body: "Intensivkurs mit Schwerpunkt Schreiben und Vortrag, vier Wochen, täglich 9–13 Uhr. Voraussetzung: bestandene B2-Prüfung.",
              },
              {
                key: "l",
                title: "Wohnungssuche: Beratung",
                body: "Wir unterstützen bei Bewerbungsmappe, Wohnberechtigungsschein und Gesprächen mit Vermietern. Kostenlos, Anmeldung telefonisch.",
              },
            ],
          },
          items: [
            {
              id: "b2d-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben in Usbekistan als Pflegefachkraft gearbeitet und wollen wissen, wie Ihr Abschluss anerkannt wird.",
              correct: "a",
              explanation: "Tibbiyot hamshiralari uchun tan olish maslahati.",
            },
            {
              id: "b2d-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihr Arbeitgeber hat Ihnen gekündigt und Sie wollen wissen, ob das rechtens ist.",
              correct: "b",
              explanation: "Mehnat huquqi bo‘yicha dastlabki maslahat.",
            },
            {
              id: "b2d-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben eine kleine Tochter und möchten trotzdem eine Ausbildung beginnen.",
              correct: "c",
              explanation: "Yarim kunlik shaklda kasb-hunar ta’limi.",
            },
            {
              id: "b2d-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben die B2-Prüfung bestanden und brauchen für Ihr Studium das nächste Zertifikat.",
              correct: "k",
              explanation: "„Voraussetzung: bestandene B2-Prüfung“ — C1 tayyorgarligi.",
            },
            {
              id: "b2d-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie haben Ihre Meisterprüfung gemacht und überlegen, einen eigenen Betrieb zu eröffnen.",
              correct: "f",
              explanation: "Hunarmandchilikda tadbirkorlik bo‘yicha maslahat.",
            },
            {
              id: "b2d-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie erwarten ein Kind und wissen nicht, wie Sie die Elternzeit aufteilen sollen.",
              correct: "e",
              explanation: "Elternzeit variantlarini hisoblab beradi.",
            },
            {
              id: "b2d-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie möchten Ihre Rückenschmerzen angehen und wissen, dass Ihre Kasse etwas zahlt.",
              correct: "h",
              explanation: "Sug‘urta xarajatning 80% gacha qismini qoplaydi.",
            },
            {
              id: "b2d-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie halten künftig Präsentationen und möchten dafür fünf Tage Bildungsurlaub nutzen.",
              correct: "d",
              explanation: "Ritorika kursi Bildungsurlaub sifatida tan olingan.",
            },
            {
              id: "b2d-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "In Ihrem Sportverein streitet der Vorstand seit Monaten und arbeitet nicht mehr zusammen.",
              correct: "i",
              explanation: "Jamoat tashkilotlari uchun nizo moderatsiyasi.",
            },
            {
              id: "b2d-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen einen Kitaplatz für Ihren zweijährigen Sohn.",
              correct: "x",
              explanation: "Bolalar bog‘chasi joyi haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
