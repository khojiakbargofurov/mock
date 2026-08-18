import type { ExamModule } from "@/lib/exam/types";

/**
 * telc B2 · Übungstest 05 · Leseverstehen — 3 Teil, 20 element, 75 ball.
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
        { key: "a", label: "Wenn Wissen mit der Rente verschwindet" },
        { key: "b", label: "Zwischen Anspruch und Wirklichkeit" },
        { key: "c", label: "Ehrenamt mit Vertrag" },
        { key: "d", label: "Wenn der Kurs den Abschluss ersetzt" },
        { key: "e", label: "Regionale Ware, höhere Preise" },
        { key: "f", label: "Homeoffice verändert die Innenstädte" },
        { key: "g", label: "Prüfungen, die niemand mehr braucht" },
        { key: "h", label: "Wenn Maschinen die Sprache lernen" },
        { key: "i", label: "Studieren in Teilzeit" },
        { key: "j", label: "Werkstätten öffnen sich" },
      ],
      blocks: [
        {
          id: "b2e-l1-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "1",
                title: "Text 1",
                body: "In den kommenden zehn Jahren gehen in vielen Betrieben die geburtenstarken Jahrgänge in den Ruhestand. Was dabei verloren geht, lässt sich schwer beziffern: Erfahrungswissen, informelle Abläufe, Kontakte zu Lieferanten. Betriebe, die früh Tandems aus älteren und jüngeren Beschäftigten bilden, kommen deutlich besser durch den Übergang. Häufiger jedoch beginnt die Übergabe erst wenige Wochen vor dem letzten Arbeitstag.",
              },
              {
                key: "2",
                title: "Text 2",
                body: "Seit die Zahl der Beschäftigten im Büro dauerhaft gesunken ist, verändern sich die Zentren der Großstädte. Mittagsangebote und Copyshops verlieren Kundschaft, während Wohnraum entsteht, wo bisher Schreibtische standen. Stadtplanerinnen sehen darin eine Chance — allerdings nur, wenn Umbauten genehmigt werden. Bislang scheitern viele Projekte an Vorschriften, die für Bürogebäude andere Anforderungen vorsehen als für Wohnungen.",
              },
              {
                key: "3",
                title: "Text 3",
                body: "Wer sich in einer Feuerwehr oder einem Rettungsdienst engagiert, unterschreibt heute meist eine Vereinbarung: Sie regelt Stunden, Fortbildungen, Versicherung und die Frage, wer für Schäden haftet. Was nach Bürokratie klingt, hat Gründe. Ohne klare Regeln entstanden immer wieder Streitfälle, etwa wenn Freiwillige während eines Einsatzes verunglückten. Kritiker warnen dagegen vor einer Professionalisierung, die Ehrenamtliche abschrecke.",
              },
              {
                key: "4",
                title: "Text 4",
                body: "Nur etwa sieben Prozent der Studierenden in Deutschland sind offiziell in einem Teilzeitstudium eingeschrieben — tatsächlich arbeitet aber weit mehr als die Hälfte neben dem Studium. Das führt zu einer Schieflage: Wer formal in Vollzeit studiert, verliert bei Überschreiten der Regelstudienzeit Ansprüche auf Förderung, obwohl der Alltag längst dem eines Teilzeitstudiums entspricht. Hochschulen fordern deshalb flexiblere Modelle.",
              },
              {
                key: "5",
                title: "Text 5",
                body: "Was noch vor wenigen Jahren als unmöglich galt, ist heute Alltag: Programme übersetzen Texte, fassen Protokolle zusammen und formulieren E-Mails. In Behörden und Kanzleien wird die Technik längst eingesetzt. Fachleute weisen jedoch auf eine Schwäche hin, die sich hartnäckig hält: Die Systeme klingen sicher, auch wenn sie falsch liegen. Wer sie einsetzt, braucht deshalb genug Fachwissen, um Fehler überhaupt zu bemerken.",
              },
            ],
          },
          items: [
            {
              id: "b2e-l-001",
              nr: 1,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 1",
              correct: "a",
              explanation: "Pensiyaga chiqish bilan tajriba yo‘qoladi.",
            },
            {
              id: "b2e-l-002",
              nr: 2,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 2",
              correct: "f",
              explanation: "Homeoffice shahar markazlarini o‘zgartirmoqda.",
            },
            {
              id: "b2e-l-003",
              nr: 3,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 3",
              correct: "c",
              explanation: "Ixtiyoriylar endi shartnoma imzolaydi.",
            },
            {
              id: "b2e-l-004",
              nr: 4,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 4",
              correct: "i",
              explanation: "Yarim kunlik o‘qish va uning rasmiy holati.",
            },
            {
              id: "b2e-l-005",
              nr: 5,
              kind: "zuordnung",
              points: 5,
              prompt: "Text 5",
              correct: "h",
              explanation: "Dasturlar tilni «o‘rganib» matn yozadi.",
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
          id: "b2e-l2-b1",
          stimulus: {
            kind: "text",
            title: "Zwei Jahre Vier-Tage-Woche — eine Bilanz",
            body: `Als die Softwarefirma Nordlicht vor zwei Jahren die Vier-Tage-Woche einführte, war das Interesse groß. Inzwischen ist die Aufmerksamkeit verschwunden — und genau das, sagt Geschäftsführerin Ruth Aslan, sei das eigentlich Interessante: „Es ist normal geworden. Niemand redet mehr darüber.“

Die Zahlen fallen nüchterner aus, als es die frühen Berichte vermuten ließen. Der Umsatz stieg im ersten Jahr um vier Prozent, im zweiten stagnierte er. Die Krankheitstage sanken deutlich, allerdings vor allem bei den Beschäftigten ohne Kinder; bei Eltern blieb der Wert nahezu unverändert. „Wer vorher schon zwei Schichten hatte — Beruf und Familie —, dem nimmt ein freier Freitag nicht so viel ab, wie wir gehofft hatten.“

Deutlicher wirkte sich die Umstellung auf die Personalgewinnung aus. Auf ausgeschriebene Stellen bewerben sich heute etwa dreimal so viele Menschen wie zuvor, bei gleichem Gehalt. Aslan warnt jedoch davor, das als reinen Erfolg zu lesen: Ein Teil der Bewerbungen sei fachlich unpassend, die Vorauswahl koste zusätzliche Zeit.

Nicht alles ließ sich halten. Die ursprüngliche Regel, dass alle freitags freihaben, wurde nach acht Monaten aufgegeben. Kunden erreichten niemanden, Termine stauten sich zum Wochenanfang. Heute rotiert der freie Tag; jeweils ein Viertel des Teams ist an einem anderen Wochentag nicht da.

Ob das Modell übertragbar ist, lässt Aslan offen. „Wir planen unsere Termine selbst. In einer Klinik oder im Handel wäre das etwas völlig anderes — und ich finde es unredlich, so zu tun, als wüssten wir das nicht.“`,
          },
          items: [
            {
              id: "b2e-l-006",
              nr: 6,
              kind: "choice",
              points: 5,
              prompt: "Was findet Ruth Aslan heute bemerkenswert?",
              options: [
                { key: "a", label: "Dass das Modell zur Normalität geworden ist" },
                { key: "b", label: "Dass die Presse weiter berichtet" },
                { key: "c", label: "Dass andere Firmen es kopiert haben" },
              ],
              correct: "a",
              explanation: "„Es ist normal geworden. Niemand redet mehr darüber.“",
            },
            {
              id: "b2e-l-007",
              nr: 7,
              kind: "choice",
              points: 5,
              prompt: "Wie entwickelte sich der Umsatz?",
              options: [
                { key: "a", label: "Er stieg in beiden Jahren stark." },
                { key: "b", label: "Er stieg zuerst, danach nicht mehr." },
                { key: "c", label: "Er ging deutlich zurück." },
              ],
              correct: "b",
              explanation: "Birinchi yili 4% o‘sdi, ikkinchi yili turg‘un qoldi.",
            },
            {
              id: "b2e-l-008",
              nr: 8,
              kind: "choice",
              points: 5,
              prompt: "Was zeigt sich bei den Krankheitstagen?",
              options: [
                { key: "a", label: "Sie sanken bei allen gleich stark." },
                { key: "b", label: "Sie sanken vor allem bei Beschäftigten ohne Kinder." },
                { key: "c", label: "Sie stiegen bei Eltern an." },
              ],
              correct: "b",
              explanation: "Ota-onalarda ko‘rsatkich deyarli o‘zgarmagan.",
            },
            {
              id: "b2e-l-009",
              nr: 9,
              kind: "choice",
              points: 5,
              prompt: "Warum wurde die ursprüngliche Regel geändert?",
              options: [
                { key: "a", label: "Weil die Beschäftigten mehr arbeiten wollten" },
                { key: "b", label: "Weil freitags niemand erreichbar war" },
                { key: "c", label: "Weil der Betriebsrat es verlangte" },
              ],
              correct: "b",
              explanation: "„Kunden erreichten niemanden, Termine stauten sich.“",
            },
            {
              id: "b2e-l-010",
              nr: 10,
              kind: "choice",
              points: 5,
              prompt: "Wie äußert sich Aslan zur Übertragbarkeit?",
              options: [
                { key: "a", label: "Sie hält das Modell überall für möglich." },
                { key: "b", label: "Sie lässt die Frage bewusst offen." },
                { key: "c", label: "Sie hält es außerhalb der IT für unmöglich." },
              ],
              correct: "b",
              explanation: "„lässt Aslan offen“ — u aniq javob bermaydi.",
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
        { key: "a", label: "Antidiskriminierungsstelle" },
        { key: "b", label: "Berufsbegleitendes Studium" },
        { key: "c", label: "Betriebliches Eingliederungsmanagement" },
        { key: "d", label: "Coaching: beruflicher Wiedereinstieg" },
        { key: "e", label: "Datenschutz-Schulung" },
        { key: "f", label: "Erbrechtliche Beratung" },
        { key: "g", label: "Gründungszuschuss: Infoabend" },
        { key: "h", label: "Interkulturelles Training" },
        { key: "i", label: "Patientenberatung" },
        { key: "j", label: "Schuldnerberatung" },
        { key: "k", label: "Sprachmittlung bei Terminen" },
        { key: "l", label: "Weiterbildung Projektleitung" },
        { key: "x", label: "Keine Anzeige passt" },
      ],
      blocks: [
        {
          id: "b2e-l3-b1",
          stimulus: {
            kind: "anzeigen",
            entries: [
              {
                key: "a",
                title: "Antidiskriminierungsstelle",
                body: "Sie wurden bei der Wohnungs- oder Stellensuche benachteiligt? Wir beraten vertraulich, prüfen rechtliche Schritte und begleiten auf Wunsch. Kostenlos.",
              },
              {
                key: "b",
                title: "Berufsbegleitendes Studium",
                body: "Bachelor Wirtschaftsinformatik, Präsenz an zwei Samstagen im Monat, Rest online. Auch ohne Abitur mit dreijähriger Berufserfahrung.",
              },
              {
                key: "c",
                title: "Betriebliches Eingliederungsmanagement",
                body: "Nach längerer Krankheit zurück in den Betrieb: Wir moderieren das Gespräch zwischen Beschäftigten, Arbeitgeber und Arzt. Freiwillig und vertraulich.",
              },
              {
                key: "d",
                title: "Coaching: beruflicher Wiedereinstieg",
                body: "Für Personen nach längerer Familienphase: Standortbestimmung, Bewerbungsstrategie, Übungsgespräche. Acht Termine, für Arbeitsuchende kostenfrei.",
              },
              {
                key: "e",
                title: "Datenschutz-Schulung",
                body: "Pflichtschulung für Beschäftigte mit Kundendaten. Zwei Stunden online, Nachweis für die Personalakte. 60 € pro Person, ab fünf Personen Rabatt.",
              },
              {
                key: "f",
                title: "Erbrechtliche Beratung",
                body: "Testament, Pflichtteil, Erbengemeinschaft: Erstberatung durch eine Fachanwältin, 90 €. Termine auch abends.",
              },
              {
                key: "g",
                title: "Gründungszuschuss: Infoabend",
                body: "Welche Förderung gibt es bei einer Gründung aus der Arbeitslosigkeit? Kostenloser Infoabend, jeden ersten Mittwoch, Anmeldung erbeten.",
              },
              {
                key: "h",
                title: "Interkulturelles Training",
                body: "Für Teams mit Beschäftigten aus mehreren Ländern: Missverständnisse erkennen, Kommunikation verbessern. Ein Tag, im Betrieb, 1.200 € pauschal.",
              },
              {
                key: "i",
                title: "Patientenberatung",
                body: "Unabhängige Beratung zu Behandlungsfehlern, Kassenleistungen und Zweitmeinung. Telefonisch und persönlich, kostenlos.",
              },
              {
                key: "j",
                title: "Schuldnerberatung",
                body: "Kostenlose Beratung bei Zahlungsrückständen, Verhandlung mit Gläubigern, Begleitung bei der Privatinsolvenz. Offene Sprechstunde mittwochs.",
              },
              {
                key: "k",
                title: "Sprachmittlung bei Terminen",
                body: "Geschulte Sprachmittlerinnen begleiten Sie zu Arzt- oder Behördenterminen. Für Russisch, Arabisch, Türkisch und Ukrainisch. Kostenlos, Anmeldung nötig.",
              },
              {
                key: "l",
                title: "Weiterbildung Projektleitung",
                body: "Sechs Monate berufsbegleitend, mit anerkanntem Zertifikat. 1.900 €, Bildungsgutschein und Bildungsurlaub möglich.",
              },
            ],
          },
          items: [
            {
              id: "b2e-l-011",
              nr: 11,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie kehren nach acht Monaten Krankheit in Ihren Betrieb zurück und möchten die Bedingungen klären.",
              correct: "c",
              explanation: "Uzoq kasallikdan keyin ishga qaytish bo‘yicha moderatsiya.",
            },
            {
              id: "b2e-l-012",
              nr: 12,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie waren fünf Jahre zu Hause bei den Kindern und wissen nicht, wie Sie wieder einsteigen sollen.",
              correct: "d",
              explanation: "Oilaviy tanaffusdan keyin qaytish uchun kouching.",
            },
            {
              id: "b2e-l-013",
              nr: 13,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Bei einer Wohnungsbesichtigung wurde Ihnen wegen Ihres Namens abgesagt.",
              correct: "a",
              explanation: "Kamsitishga qarshi maslahat markazi.",
            },
            {
              id: "b2e-l-014",
              nr: 14,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Ihre Mutter spricht kaum Deutsch und hat nächste Woche einen wichtigen Arzttermin.",
              correct: "k",
              explanation: "Tibbiy va rasmiy uchrashuvlarda til vositachiligi.",
            },
            {
              id: "b2e-l-015",
              nr: 15,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie arbeiten seit Jahren im Betrieb und möchten künftig Projekte leiten.",
              correct: "l",
              explanation: "Loyiha boshqaruvi bo‘yicha malaka oshirish.",
            },
            {
              id: "b2e-l-016",
              nr: 16,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind arbeitslos und überlegen, sich selbstständig zu machen — kennen aber die Förderung nicht.",
              correct: "g",
              explanation: "Ishsizlikdan tadbirkorlikka o‘tish bo‘yicha bepul kecha.",
            },
            {
              id: "b2e-l-017",
              nr: 17,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Nach dem Tod Ihres Vaters streiten Sie mit Ihren Geschwistern über das Haus.",
              correct: "f",
              explanation: "Meros huquqi bo‘yicha maslahat (Erbengemeinschaft).",
            },
            {
              id: "b2e-l-018",
              nr: 18,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "In Ihrem Team arbeiten Menschen aus sechs Ländern, und es gibt ständig Missverständnisse.",
              correct: "h",
              explanation: "Madaniyatlararo trening — jamoa uchun.",
            },
            {
              id: "b2e-l-019",
              nr: 19,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie sind unsicher, ob eine geplante Operation wirklich nötig ist.",
              correct: "i",
              explanation: "Mustaqil bemor maslahati, ikkinchi fikr bo‘yicha.",
            },
            {
              id: "b2e-l-020",
              nr: 20,
              kind: "zuordnung",
              points: 2.5,
              prompt:
                "Sie suchen eine Kinderbetreuung für die Zeit einer Weiterbildung.",
              correct: "x",
              explanation: "Bolalar parvarishi haqida e’lon yo‘q — javob x.",
            },
          ],
        },
      ],
    },
  ],
};
