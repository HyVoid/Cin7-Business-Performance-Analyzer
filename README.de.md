[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Cin7 Business Performance Analyzer: Excel-Berichtsvorlage und Dashboard für Bestandsrentabilität für Cin7 Core (DEAR) und Omni
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/2e8d2054-0ff2-46b5-9716-405840fa0be8" />


> **Produktübersicht:** **Cin7 Business Performance Analyzer** ist eine leichtgewichtige **Excel-Berichtsvorlage** und ein **Dashboard für Bestandsrentabilität**, entwickelt für Benutzer von **Cin7 Core (ehemals DEAR Inventory)** und **Cin7 Omni**. Das Tool verwandelt rohe **Cin7-CSV-Exporte** (Verkaufsaufträge, Lagerbestand und Wareneingänge) in einen automatisierten **SKU-Bruttomargenrechner**, einen **Betriebskapital-Tracker** und eine **Prüfung von Bestellkostenabweichungen (PO)**, ohne dass externe BI-Software bereitgestellt werden muss.

Unternehmen, die **Cin7 Core** oder **Cin7 Omni** einsetzen, erfassen detaillierte Transaktionsdaten. Die nativen ERP-Exporte halten jedoch Verkaufsleistung, Lagerbestände und Lieferantenpreise in voneinander getrennten Datensilos. **Cin7 Business Performance Analyzer** schließt diese Lücke als strukturiertes **Toolkit zur ERP-Entscheidungsunterstützung**. Indem rohe CSV-Daten in einer einzigen **Excel-Analysearbeitsmappe** standardisiert werden, können Betriebs- und Finanzteams die vollständigen **Herstellkosten der verkauften Waren (COGS)** abstimmen, nicht zugeordneten **Available-to-Promise-Bestand (ATP)** isolieren und operative Ausnahmen innerhalb weniger Minuten kennzeichnen.

Die Berichtsvorlage beantwortet fünf wiederkehrende Fragen des Handels- und Bestandsmanagements:

- **Bruttomarge auf SKU-Ebene:** Welche Produkte erzielen einen positiven Bruttogewinn, nachdem Verkaufserlöse mit gewichteten Durchschnittskosten oder den zuletzt erfassten Einkaufskosten abgeglichen wurden?
- **Nettodeckungsbeitrag nach Vertriebskanal:** Welche E-Commerce-Marktplätze, B2B-Großhandelsportale oder POS-Kanäle erzielen nach Abzug konfigurierbarer Plattformgebühren tatsächlich eine Nettomarge?
- **Betriebskapital und Ladenhüterrisiko:** Wie viel Liquidität ist im vorhandenen Lagerbestand (SOH) gebunden, und welche SKUs werden als überbevorratet, als langsam drehende Ladenhüter oder als schnell drehende Artikel mit Ausverkaufsrisiko eingestuft?
- **Schleichende Lieferantenpreiserhöhungen und PO-Abweichung:** Bei welchen Artikeln sind die Stückkosten der letzten Wareneingänge gegenüber den historischen gewichteten Durchschnittskosten wesentlich gestiegen?
- **Priorisiertes Ausnahmemanagement:** Welche SKUs mit negativer Marge, Nachschubengpässe und Kostensprünge erfordern sofortige Eingriffe bei Preisgestaltung oder Einkauf?

Rohe Cin7-Exporte werden über eigene Eingabeblätter zum Einfügen von Werten (`Import_Sales`, `Import_Inventory`, `Import_Purchases`) übernommen. Automatisierte Berechnungsebenen bereinigen SKU-Kennungen, konsolidieren Bestände aus mehreren Lagern, berechnen die Rentabilität je Verkaufsposition und befüllen ein **Executive-KPI-Dashboard** sowie einen handlungsorientierten **Ausnahmebericht**. Dieser Workflow ergänzt Ihre bestehende Cin7-ERP-Umgebung, ohne die zugrunde liegenden Hauptbücher, Steuerunterlagen und die laufende Auftragsabwicklung zu verändern.

> ### Testen Sie das Cin7-Analyse-Toolkit: interaktive Webdemo oder wiederverwendbare Excel-Vorlage
>
> Prüfen Sie die Berichtsstruktur sofort in Ihrem Browser oder laden Sie die vollständige `.xlsx`-Vorlage für wiederkehrende monatliche Analysen herunter:
>
> - 🌐 **[Interaktive Cin7-Analyse-Webdemo starten (kostenlose Browservorschau – keine Einrichtung)](https://hyvoid.github.io/cin7-excel-reporting-template/)** — Prüfen Sie Beispieltabellen zur SKU-Rentabilität, ABC-Bestandsklassifizierungen und Ausnahmehinweise direkt in Ihrem Browser und ohne Registrierung.
> - 📥 **[Cin7-Excel-Berichtsvorlage herunterladen (.xlsx-Arbeitsmappe für wiederkehrende Analysen und Offline-Prüfungen)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)** — Sie erhalten die vollständige Excel-Arbeitsmappe mit dynamischen Arrays, in die Sie Ihre eigenen Cin7-CSV-Dateien importieren, geschäftliche Schwellenwerte anpassen und historische Betriebsdaten pflegen können.
>
> *Kaufgarantie: Wenn die herunterladbare `.xlsx`-Excel-Arbeitsmappe als kostenpflichtige Lizenz angeboten wird, gilt für jeden Kauf eine 30-tägige Geld-zurück-Garantie ohne Rückfragen.*
>

---

## Was Sie damit verfolgen können: Cin7-Marge, Bestandsbewertung und PO-Kostenkennzahlen

Anstatt voneinander getrennte ERP-Tabellen mit fehleranfälligen Suchformeln manuell zusammenzufügen, können Sie mit dieser strukturierten Zuordnung sechs zentrale operative Dimensionen verfolgen:

| Analysedimension und Suchschwerpunkt | Operatives Problem in nativen Cin7-Exporten | So löst der Analyzer das Problem (Kennzahlen und Ausgabe) |
| :--- | :--- | :--- |
| **Rentabilität und Bruttomargenanalyse auf SKU-Ebene** | Native Cin7-Verkaufsexporte ordnen Produkte nach Umsatz und verbergen dadurch häufig umsatzstarke SKUs, die nach Berücksichtigung der tatsächlichen Einkaufskosten mit negativer oder äußerst geringer Marge verkauft werden. | Gleicht Verkaufserlöse auf Positionsebene mit dem geschätzten **Wareneinsatz (COGS)** ab, um den genauen **Bruttogewinn ($)** und die **Bruttomarge (%)** je SKU im Vergleich zu Ihrem Zielschwellenwert zu berechnen. |
| **Nettodeckungsbeitrag und Gebührenmodellierung über mehrere Kanäle** | Ein Vergleich der Umsätze aus Shopify-Direktvertrieb, Amazon Marketplace und B2B-Großhandel zum Nennwert ignoriert Vermittlungsgebühren, Zahlungsabwicklungskosten und Provisionsstrukturen. | Wendet auf jeden Vertriebskanal einen konfigurierbaren **Plattformgebührenansatz (%)** an und ordnet die Kanäle nach ihrem **Nettodeckungsbeitrag**, sodass Teams erkennen, wo tatsächlich Liquidität erwirtschaftet wird. |
| **Lagerbestand (SOH) über mehrere Lager und ATP-Isolierung** | Momentaufnahmen des Lagerbestands zeigen die gesamte physisch vorhandene Menge, wodurch Vertriebsteams Bestände zusagen können, die bereits offenen Kundenaufträgen zugeordnet sind. | Konsolidiert Bestände mehrerer Standorte und trennt dabei **physischen Bestand** von **zugeordnetem Bestand**. Dadurch werden die tatsächlich **nicht zugeordneten Available-to-Promise-Einheiten (ATP)** und das gebundene Kapital sichtbar. |
| **Bestandsgesundheit, Umschlag und ABC-Klassifizierung** | Hochwertige Langsamdreher und drohende Fehlbestände bleiben in Tausenden von Lagerzeilen verborgen, bis die Liquidität knapp wird oder Bestseller in Rückstand geraten. | Berechnet automatisch **Reichweite in Tagen (DOS)**, **Bestandsumschlag in Tagen** und **ABC-Wertklassen (A/B/C)**, um jede SKU als gesund, langsam drehend, überbevorratet oder ausverkaufsgefährdet zu kategorisieren. |
| **Bestellkostenabweichung (PO) und schleichende Lieferantenpreiserhöhungen** | Schrittweise Preiserhöhungen von Lieferanten verbergen sich in einzelnen Wareneingangspositionen und schmälern Produktmargen bereits Wochen, bevor die Finanzabteilung die Abweichung im monatlichen Abschluss erkennt. | Vergleicht die **gewichteten Durchschnittskosten (WAC)** jeder SKU mit ihrem **zuletzt erfassten Einkaufspreis** und kennzeichnet jeden Stückkostensprung, der Ihre konfigurierte Abweichungstoleranz überschreitet. |
| **Automatisierte Priorisierung nach dem Management-by-Exception-Prinzip** | Betriebsanalysten verbringen Stunden damit, CSV-Datenexporte aus drei Modulen zu filtern, nur um eine wöchentliche Agenda für Einkaufs- und Preisbesprechungen zu erstellen. | Führt negative Margen, Zielverfehlungen bei Margen, Kostensprünge und Bestandswarnungen in einem priorisierten **Ausnahmebericht** mit Schweregraden und empfohlenen Korrekturmaßnahmen zusammen. |

---

## Cin7-CSV-Exporte in Excel analysieren: Schnellstartanleitung in 4 Schritten

Folgen Sie diesem vierstufigen Betriebszyklus, um rohe Cin7-Daten in eine Managementbewertung zu verwandeln. Konfigurieren Sie Ihre Finanzregeln einmal, fügen Sie Ihre neuesten CSV-Exporte ein, prüfen Sie die automatisierten Dashboards und wiederholen Sie den Vorgang wöchentlich oder monatlich.

### Schritt 1: Finanzielle Schwellenwerte, Wechselkurse und ABC-Bestandsregeln konfigurieren
Öffnen Sie die Registerkarte `Parameters`, um die geschäftlichen Annahmen für Ihre Arbeitsmappe festzulegen. Definieren Sie das Symbol Ihrer Basisberichtswährung, **USD- und EUR-Wechselkurse**, den Analysezeitraum (Tage), den Mindestwert für die **Bruttomarge (%)**, Grenzwerte für Ausverkauf und Überbestand auf Basis der **Reichweite in Tagen (DOS)**, **Grenzwerte der ABC-Pareto-Klassifizierung**, den **Warnschwellenwert für Einkaufskostenabweichungen (%)**, Plattformgebührenansätze und das Bruttogewinnbudget für den Zeitraum. Aktualisieren Sie diese Parameter, sobald sich Wechselkurse oder die Margenrichtlinien Ihres Unternehmens ändern.

### Schritt 2: Rohe Cin7-CSV-Exporte für Verkäufe, Lagerbestand (SOH) und Bestellungen importieren
Exportieren Sie Ihre Standardtransaktionsberichte aus **Cin7 Core** oder **Cin7 Omni** im CSV-Format und laden Sie die Datensätze anschließend mit **Werte einfügen** in die drei dafür vorgesehenen Registerkarten für Rohdaten:

- `Import_Sales`: Fügen Sie die Verkaufshistorie auf Auftragspositionsebene ein (SKU, Kanal, verkaufte Menge, Positionserlös, Währung).
- `Import_Inventory`: Fügen Sie aktuelle Momentaufnahmen des Lagerbestands ein (SKU, Lagerstandort, physisch vorhandene Menge, zugeordnete Menge).
- `Import_Purchases`: Fügen Sie historische Wareneingänge und Lieferantenrechnungspositionen ein (SKU, Eingangsdatum, eingegangene Menge, Einkaufspreis pro Einheit, Währung).

Wenn rohe CSV-Eingaben von nachgelagerten Formelblättern getrennt bleiben, werden versehentliche Formelüberschreibungen bei routinemäßigen wöchentlichen Datenaktualisierungen verhindert.

### Schritt 3: Executive-KPI-Dashboard, Kanalmargen und Ausnahmehinweise prüfen
Stellen Sie sicher, dass der Excel-Berechnungsmodus auf **Automatisch** eingestellt ist, damit die Engine für dynamische Arrays alle Analysetabellen aktualisiert:

1. Öffnen Sie `Executive_Dashboard`, um eine konsolidierte Zusammenfassung für die Führungsebene zu Gesamterlös, geschätztem COGS, Bruttogewinn, Bruttomarge %, Budgeterreichung, Gesamtbestandswert, Bestandsumschlag in Tagen, gebundenem Betriebskapital und Ihren **Top 5 der zum Gewinn beitragenden SKUs** zu erhalten.
2. Prüfen Sie `Exception_Report`, um gekennzeichnete SKUs zu priorisieren, die sofortige Preiserhöhungen, Lieferantennachverhandlungen oder Bestandsliquidationen erfordern.
3. Analysieren Sie in `Sales_Analytics` die Aufschlüsselungen der SKU- und Kanalbeiträge, in `Inventory_Analytics` die ABC-/DOS-Matrizen zur Bestandsgesundheit und in `Data_Cleaning` Stammdatenanomalien (wie nicht zugeordnete SKUs oder fehlende Kostendatensätze).

### Schritt 4: Von Browsertests zu wiederkehrenden monatlichen Prüfungen in Excel wechseln
Während Sie mit der **[interaktiven Browservorschau](https://hyvoid.github.io/cin7-excel-reporting-template/)** den analytischen Aufbau in einer einzelnen Sitzung prüfen können, erfordern laufende Bestandskontrolle und Finanzabstimmung dauerhafte lokale Datensätze.

Um diesen Workflow jede Woche oder jeden Monat mit den Daten Ihres eigenen Unternehmens auszuführen, **[laden Sie die wiederverwendbare Cin7-Excel-Berichtsvorlage (.xlsx) herunter](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**. Mit der eigenständigen Excel-Arbeitsmappe kann Ihr Team monatliche Momentaufnahmen für den Margenvergleich von Monat zu Monat archivieren, Schwellenwertparameter offline anpassen und prüffähige `.xlsx`-Dateien an Einkauf, Lager und Geschäftsleitung verteilen.

---

## Geschäftslogik und Methodik

Standardmäßige ERP-Berichte helfen Entscheidungsträgern nicht ausreichend, weil sie operative Protokolle (was in einem einzelnen Modul geschehen ist) anstelle relationaler Stückdeckungsrechnungen (wie Einkaufskosten, Lagerumschlag und Kanalgebühren zusammenwirken) darstellen. **Cin7 Business Performance Analyzer** wendet sechs quantitative Methoden an, um konkrete geschäftliche Probleme zu lösen:

### 1. Relationale SKU-Normalisierung und Drei-Wege-Datenabgleich
- **Geschäftliches Problem:** In Cin7-Exporten enthalten SKU-Codes häufig nachgestellte Leerzeichen, Abweichungen bei der Groß-/Kleinschreibung oder verwaiste Transaktionen (beispielsweise ein in `Import_Sales` verkauftes Produkt ohne entsprechenden Wareneingang in `Import_Purchases` oder Bestandsdatensatz in `Import_Inventory`).
- **Analytische Methode:** Die Ebene `Data_Cleaning` entfernt Formatierungsstörungen (Normalisierung mit `TRIM`/`UPPER`) und führt eine relationale Drei-Wege-Validierung über Verkaufs-, Bestands- und Einkaufstabellen hinweg durch. Sie kennzeichnet ausdrücklich Verkaufspositionen ohne Kostenzuordnung und Nullpreisanomalien, damit Bruttogewinnsummen nicht durch fehlende Kosteneingaben künstlich erhöht werden.

### 2. Doppelte COGS-Bewertung und Einkaufspreisabweichung (WAC gegenüber letzten Kosten)
- **Geschäftliches Problem:** Wenn ausschließlich historische gewichtete Durchschnittskosten (WAC) verwendet werden, bleiben aktuelle Lieferantenpreiserhöhungen in Inflationsphasen verborgen, sodass Vertriebsteams Folgeaufträge zu niedrig bepreisen.
- **Analytische Methode:** Das Toolkit berechnet sowohl die historischen **gewichteten durchschnittlichen Einkaufskosten** ($\sum \text{Total PO Spend} / \sum \text{Total Units Received}$) als auch die **letzten chronologischen Einkaufskosten pro Einheit** je SKU, standardisiert in Ihrer Basisberichtswährung. Durch Messung der prozentualen Differenz ($\frac{\text{Latest Cost} - \text{WAC}}{\text{WAC}}$) isoliert das Modell die voraussichtliche Margenkompression, bevor alte Bestandschargen abverkauft sind.

### 3. Gebührenbereinigte Modellierung des Kanaldeckungsbeitrags
- **Geschäftliches Problem:** E-Commerce- und Omnichannel-Marken steigern häufig den Umsatz über Marktplätze Dritter, verlieren aber netto Liquidität, sobald Plattformprovisionen und Transaktionsgebühren abgezogen werden.
- **Analytische Methode:** Über den Bruttogewinn ($\text{Revenue} - \text{Estimated COGS}$) hinaus zieht die Engine `Sales_Analytics` einen konfigurierbaren **Plattformgebührenansatz** für jeden Vertriebskanal ab. Dies nähert die **Deckungsbeitragsstufe 2 (CM2)** an und ermöglicht der Geschäftsleitung, margenstarke B2B-Großhandelsaufträge direkt mit dem Volumen gebührenintensiver Marktplätze zu vergleichen.

### 4. Isolierung von Available-to-Promise (ATP) gegenüber physischem Lagerbestand
- **Geschäftliches Problem:** Wird der physische Lagerbestand als verkaufbarer Bestand behandelt, führt dies zu Doppelzuordnungen, Lieferrückständen und verzerrten Betriebskapitalquoten. Wenn ein Lager beispielsweise über 100 physische Einheiten verfügt, von denen jedoch 80 offenen Verkaufsaufträgen zugeordnet sind, bleiben vor Abzug des Sicherheitsbestands nur 20 Einheiten frei verfügbar.
- **Analytische Methode:** Bestandsdatensätze mehrerer Lager werden nach SKU zusammengefasst, wobei **physischer Bestand** und **zugeordneter Bestand** strikt getrennt werden ($\text{Unallocated Stock} = \max(0, \text{Physical SOH} - \text{Allocated Units})$). Die Betriebskapitalbewertung wird anschließend sowohl für den gesamten physischen Bestand als auch für gebundene Langsamdreher berechnet.

### 5. Zusammengesetzte ABC-Pareto-Bewertung und Matrix zur Reichweite in Tagen (DOS)
- **Geschäftliches Problem:** Lagerverantwortliche können nicht alle SKUs gleich behandeln. Eine pauschale Bestandsreduzierung führt bei margenstarken Bestsellern zu Fehlbeständen, während Ladenhüter unangetastet bleiben.
- **Analytische Methode:** Das Modell kombiniert die **ABC-Pareto-Wertklassifizierung** (Rangfolge der SKUs nach ihrem kumulierten Beitrag zum Bestandswert; typischerweise A = oberste 70–80 %, B = nächste 15–20 %, C = unterste 5–10 %) mit der **täglichen Absatzgeschwindigkeit** ($\text{Units Sold} / \text{Analysis Period Days}$), um die **Reichweite in Tagen** ($\text{DOS} = \text{Unallocated Stock} / \text{Daily Velocity}$) abzuleiten. Der Abgleich von ABC-Klassen mit DOS-Schwellenwerten identifiziert automatisch kapitalintensive Ladenhüter (`Class A + Overstock/Slow-Moving`) und dringende Nachschubprioritäten (`Class A + Low DOS`).

### 6. Regelbasierte Priorisierung nach dem Management-by-Exception-Prinzip
- **Geschäftliches Problem:** Die manuelle wöchentliche Prüfung von mehr als 5.000 SKU-Zeilen führt zu Entscheidungsmüdigkeit und übersehenen operativen Risiken.
- **Analytische Methode:** `Exception_Report` verwendet deterministische boolesche Logik, um jede aktive SKU anhand der in `Parameters` festgelegten Schwellenwerte zu bewerten. Nur SKUs, die gegen mindestens eine Geschäftsregel verstoßen (negative Marge, Marge unter Zielwert, Ausverkaufsrisiko, Kapitalfalle durch Überbestand oder wesentlicher Kostensprung), erscheinen in der Ausnahmewarteschlange – zusammen mit einer berechneten Prioritätsstufe (`High`, `Medium`, `Low`) und einer vorgeschriebenen operativen Maßnahme.

---

## Warum ich dieses Cin7-Analyseframework entwickelt habe

Ein ERP-System eignet sich hervorragend dazu, Transaktionen aufzuzeichnen, Auftragsworkflows durchzusetzen und Prüfpfade zu pflegen. Operative Transaktionsprotokolle lassen sich jedoch nur selten direkt in geschäftliche Klarheit übersetzen.

Im täglichen Großhandel, in der Fertigung und im E-Commerce beeinträchtigen drei blinde Flecken immer wieder die Liquidität:
1. Eine SKU gilt in Umsatzberichten als Verkaufsschlager, doch ihre vollständigen Einkaufskosten lassen praktisch keinen Bruttogewinn übrig.
2. Ein Lagerbericht weist reichlich Bestand aus, aber 80 % dieser Einheiten sind bereits offenen Großhandelsaufträgen zugeordnet, sodass dem Team bei neuen Zusagen unmittelbare Fehlbestände drohen.
3. Ein Lieferant erhöht beim letzten Auftrag unbemerkt die Stückpreise um 14 %, und die Erhöhung bleibt in den Wareneingangsprotokollen verborgen, bis die vierteljährlichen Bruttomargen sinken.

Ich habe **Cin7 Business Performance Analyzer** entwickelt, um diese drei Datensätze in einem transparenten, wiederholbaren Excel-Framework miteinander zu verbinden. Jede Formel, Kostenannahme und jeder Schwellenwertparameter bleibt für Ihr Team sichtbar und prüfbar. Wenn die Arbeitsmappe eine Ausnahmewarnung auslöst, dient sie Ihren Einkäufern, Planern oder Preisverantwortlichen als strukturierter Hinweis, den zugrunde liegenden Cin7-Datensatz zu untersuchen und evidenzbasiert zu handeln.

---

## Häufige Engpässe bei Cin7-ERP-Berichten gegenüber automatisierter Excel-Analyse

| Engpass bei Cin7-ERP-Berichten | Einschränkungen manueller CSV-Exporte und nativer Berichte (ohne dieses Tool) | Automatisierte Excel-Vorlage und SKU-Abstimmung (mit diesem Tool) |
| :--- | :--- | :--- |
| **Getrennte Verkaufs-, SOH- und PO-Exporte** | Analysten laden separate CSV-Dateien für Verkäufe, Lagerbestand und Einkäufe herunter und verbringen Stunden damit, fehleranfällige `VLOOKUP`- oder `XLOOKUP`-Formeln zu schreiben, die jeden Monat nicht mehr funktionieren. | Ein einheitlicher Workflow zum Einfügen von Werten übernimmt alle drei Cin7-Exporte und stimmt Kennzahlen automatisch anhand einer standardisierten SKU-Stammliste ab. |
| **Umsatzillusion und verborgene negative Margen** | Umsatzberichte würdigen umsatzstarke SKUs, verschleiern jedoch Artikel, die unter Wiederbeschaffungskosten oder unterhalb der Zielschwellen für die Bruttomarge verkauft werden. | Verkaufserlös auf Positionsebene, geschätzte COGS pro Einheit, Bruttogewinn ($) und Bruttomarge (%) werden nebeneinander anhand konfigurierbarer Rentabilitätsziele geprüft. |
| **Überhöhte Lagerverfügbarkeit (SOH gegenüber ATP)** | Teams verwechseln den gesamten physischen Lagerbestand mit verkaufbarem Bestand, was zu Überverkäufen und Kundenlieferrückständen bei bereits gebundenem Bestand führt. | Physischer Bestand und zugeordnete Auftragsmengen werden über alle Lager hinweg getrennt konsolidiert, sodass der tatsächlich **nicht zugeordnete Bestand** für neue Aufträge isoliert wird. |
| **In Ladenhütern gebundenes Betriebskapital** | Kostenintensive SKUs ohne Absatz bleiben in lagerübergreifenden Aufstellungen unbemerkt, belasten die Liquidität und erhöhen die Lagerhaltungskosten. | Automatisierte **Bestandsbewertung ($)**, **Reichweite in Tagen (DOS)**, **Umschlag in Tagen** und **ABC-Klassifizierungen** isolieren langsam drehende und überbevorratete Liquiditätsfallen. |
| **Unbemerkte schleichende Lieferantenpreiserhöhungen (PO-Abweichung)** | Der Vergleich des letzten Rechnungspreises eines Lieferanten mit den historischen Durchschnittskosten erfordert eine manuelle Prüfung jeder einzelnen Position früherer Wareneingänge. | Automatisierte Abweichungsberechnungen vergleichen die **gewichteten Durchschnittskosten (WAC)** mit den **zuletzt erfassten PO-Kosten** und kennzeichnen wesentliche Kostensprünge sofort. |
| **Ungefilterte ERP-Datenexporte und Analyselähmung** | Führungskräfte filtern jeden Montag Tausende Tabellenzeilen manuell, um zu bestimmen, welche Probleme bei Preisgestaltung oder Einkauf zuerst gelöst werden müssen. | Ein konsolidierter **Ausnahmebericht** gruppiert Margendefizite, Ausverkaufswarnungen und PO-Kostenabweichungen mit Prioritätsstufen und empfohlenen Maßnahmen. |

---

## Für wen dieses Tool gedacht ist: rollenspezifische Cin7-Berichtsworkflows und Anwendungsfälle

Dieses Toolkit wurde für bestimmte operative Rollen entwickelt, die eine wiederholbare **Cin7-Berichtsvorlage** oder einen **Bestandsmargenrechner** suchen:

- **Inhaber und Gründer kleiner und mittlerer Unternehmen sowie Fractional CFOs (`Cin7 Executive KPI & Working Capital Dashboard`):**
  - *Operativer Anwendungsfall:* Monatliche Finanzprüfungen durchführen, die Erreichung des Bruttogewinnbudgets überwachen, die gesamte in langsam drehendem Bestand gebundene Liquidität prüfen und die Top 5 der gewinnbringenden SKUs identifizieren, ohne auf eine individuelle BI-Entwicklung zu warten.
- **Bestandsplaner und Lagerbetriebsleiter (`Cin7 Inventory Health, ABC & Replenishment Template`):**
  - *Operativer Anwendungsfall:* Den **Lagerbestand (SOH)** mehrerer Lager mit dem **zugeordneten Bestand** abgleichen, die **Reichweite in Tagen (DOS)** berechnen, Fehlbestände bei Bestsellern der Klasse A vermeiden und Liquidationslisten für gealterte Überbestände erstellen.
- **Beschaffungs- und Einkaufsleiter (`Cin7 Purchase Order Cost Variance & Supplier Audit Sheet`):**
  - *Operativer Anwendungsfall:* Wareneingänge in mehreren Währungen (USD, EUR, Basiswährung) verfolgen, die Inflation der Lieferantenstückkosten (`Latest PO Price vs. WAC`) erkennen und datengestützte Preisnachverhandlungen mit Lieferanten vorbereiten.
- **E-Commerce- und Multichannel-Vertriebsleiter (`Cin7 Channel Profitability & SKU Margin Calculator`):**
  - *Operativer Anwendungsfall:* Die tatsächliche Stückrentabilität von Produkten über Shopify, Amazon, eBay und B2B-Großhandelsportale hinweg unter Berücksichtigung von Plattformgebührenansätzen vergleichen und SKUs mit negativer Marge aus aktiven Katalogen entfernen.
- **ERP-Business-Analysten und Betriebsberater (`Cin7 CSV Data Cleaning & Reconciliation Workbook`):**
  - *Operativer Anwendungsfall:* Improvisierte wöchentliche Tabellenbearbeitung durch eine standardisierte, fehlergeprüfte Excel-Vorlage ersetzen, die fehlerhafte SKU-Exporte bereinigt und in weniger als 15 Minuten präsentationsreife Ausnahmeberichte für die Geschäftsleitung liefert.

### Für wen dieses Toolkit NICHT konzipiert ist
Damit Sie vor dem Herunterladen realistische Erwartungen haben: Diese Arbeitsmappe eignet sich **nicht** für:
- **Unternehmen, die einen vollständigen ERP-Ersatz suchen:** Dies ist eine analytische Ergänzungsebene für bestehende Daten aus Cin7 Core / Cin7 Omni, kein transaktionales Auftragsmanagement- oder Lagerausführungssystem.
- **Teams, die Live-API-Streaming benötigen:** Der Workflow basiert auf regelmäßigen CSV-/Excel-Exporten (wöchentlich, zweiwöchentlich oder monatlich) statt auf einer Echtzeitsynchronisierung über Webhooks.
- **Gesetzlich vorgeschriebene GAAP-/IFRS-Hauptbuchprüfungen:** Gewinnwerte sind operative Schätzungen auf Grundlage erfasster Wareneingänge und konfigurierbarer Plattformgebührenansätze. Sie ersetzen keine vollständigen Abstimmungen der Einstandskosten, die Frachtrechnungen, Zölle, Steuerrückerstattungen, Kundenretouren und die Zuweisung von Lagergemeinkosten berücksichtigen.
- **Automatisierte PO-Ausführung:** Das Toolkit kennzeichnet Ausverkaufsrisiken und Kostenabweichungen zur manuellen Prüfung; es übermittelt Bestellungen nicht automatisch an Lieferanten.

---

## Wann Sie diesen Cin7 Analyzer einsetzen sollten: operative Szenarien mit hoher Wirkung

Teams setzen den **Cin7 Business Performance Analyzer** in der Regel in vier wiederkehrenden Geschäftsworkflows ein:

1. **Wöchentliche Sales-&-Operations-Planning-Besprechungen (S&OP):** Importieren Sie jeden Montagmorgen die Cin7-Exporte der vergangenen 30 oder 90 Tage, um Einkauf, Lager und Vertriebsleitung auf einen gemeinsamen `Exception_Report` auszurichten.
2. **Lieferantenkosten- und Margenprüfung vor einer Nachbestellung:** Prüfen Sie vor der Freigabe einer großen Nachschubbestellung in Cin7, ob aktuelle Lieferantenpreiserhöhungen die prognostizierte Bruttomarge der SKU unter den Schwellenwert Ihres Unternehmens gedrückt haben.
3. **Vierteljährliche Ladenhüterliquidation und SKU-Rationalisierung:** Filtern Sie `Inventory_Analytics` nach den Kennzeichnungen `Overstock` und `Slow-Moving`, um die exakten in stagnierenden SKUs gebundenen Beträge zu bestimmen und durch gezielte Abverkaufsaktionen Betriebskapital freizusetzen.
4. **Jährliche Preislistenanpassungen und Prüfungen von Marktplatzgebühren:** Passen Sie `Channel_Fee_Allowance` und die Wechselkursparameter an, um zu testen, wie sich höhere Marktplatzprovisionen oder Währungsschwankungen auf Ihre SKU-Rentabilität nach Abzug aller Kosten auswirken.

> **Technische Voraussetzungen und Hinweis zur Datenqualität:** Fortgeschrittene Kenntnisse in Excel-Makros oder VBA sind nicht erforderlich. Die Browservorschau wird sofort online ausgeführt, und die `.xlsx`-Arbeitsmappe erfordert lediglich eine Standardversion von Microsoft Excel (mit Unterstützung für Funktionen mit dynamischen Arrays) sowie Grundkenntnisse im Exportieren von CSV-Dateien aus Cin7 und im Einfügen von Werten. Die Genauigkeit der Ausgabe hängt unmittelbar von der Vollständigkeit Ihrer Cin7-Quellexporte und der Gültigkeit Ihrer konfigurierten Wechselkurse und Schwellenwertannahmen ab.

---

## Über den Ersteller

Ich entwickle leichtgewichtige, entscheidungsorientierte Analysetools für Betreiber in Großhandel, Fertigung und E-Commerce, die nicht länger in voneinander getrennten ERP-Tabellen versinken möchten. Jedes Toolkit beruht auf einer zentralen Frage: **Welche konkreten operativen Kennzahlen müssen zusammengeführt werden, damit das Management die nächste Einkaufs-, Preis- oder Bestandsentscheidung mit Zuversicht treffen kann?**

Der **Cin7 Business Performance Analyzer** wendet diese Methodik auf SKU-Rentabilität, Betriebskapitalrisiko und Lieferantenkostenkontrolle an und verschafft Ihrem Team damit sofortige Transparenz auf Grundlage der Cin7-Daten, die Ihnen bereits gehören.

- 🌐 **[Cin7 Web Analyzer in Ihrem Browser ansehen](https://hyvoid.github.io/cin7-excel-reporting-template/)**
- 📥 **[Vollständige wiederverwendbare Excel-Arbeitsmappe (.xlsx) erhalten](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**


---

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Anwender und Mitwirkende</summary>


### Architektur der Arbeitsmappe

Die Arbeitsmappe ist als unidirektionale Datenpipeline mit fünf Funktionsebenen und 12 Arbeitsblättern konzipiert. Rohe Eingaben werden von Berechnungen, analytischen Ausgaben und Managementberichten getrennt, um versehentliches Überschreiben zu vermeiden und den Berechnungsweg leichter nachvollziehbar zu machen.

| Ebene | Arbeitsblatt | Hauptverantwortung | Wichtigste Ausgaben |
|---|---|---|---|
| Navigation | `Instructions` | Erläutert die Struktur der Arbeitsmappe, die Bedienungsreihenfolge und die Ein-/Ausgabekonventionen | Nutzungshinweise |
| Konfiguration | `Parameters` | Zentralisiert Währungseinstellungen, Wechselkurse, Analysezeiträume, Margenschwellen, Bestandsschwellen, Grenzen der ABC-Klassifizierung, Schwellen für Kostenabweichungen und Budgetziele | Gemeinsame Geschäftsannahmen |
| Rohdaten | `Import_Sales` | Enthält exportierte Verkaufstransaktionszeilen | Verkaufsmengen, Preise, Rabatte, Währungen, Kanäle und SKU-Kennungen |
| Rohdaten | `Import_Inventory` | Enthält eine Bestandsmomentaufnahme | Physischer Bestand, reservierter Bestand, eingehender Bestand, Produktattribute und Referenzstückkosten |
| Rohdaten | `Import_Purchases` | Enthält Angaben zu Wareneingängen | Eingegangene Mengen, Einkaufspreise, Lieferanten, Daten und Währungen |
| Datenaufbereitung | `Data_Cleaning` | Standardisiert SKU-Kennungen und konsolidiert Bestandsdatensätze über mehrere Lager hinweg | Kanonische SKU-Liste, konsolidierte Bestandsmengen, Stammdatenstatus |
| Kosten-Engine | `Cost_Engine` | Rechnet Einkaufsbeträge in die Basiswährung um und berechnet Vergleichswerte für Einkaufskosten | Gewichtete durchschnittliche Einkaufskosten, genehmigte Standardstückkosten, letzte Einkaufskosten, Kostenabweichung |
| Margen-Engine | `Margin_Engine` | Normalisiert Verkaufsdatensätze, rechnet Nettoumsätze in die Basiswährung um, ordnet Kosten zu und berechnet die Rentabilität auf Positionsebene | Nettoerlös, Wareneinsatz (COGS), Bruttogewinn, Bruttomarge |
| Bestandsanalyse | `Inventory_Analytics` | Bewertet verfügbaren Bestand, Bestandswert, Absatzgeschwindigkeit, Reichweite in Tagen, Umschlag, ABC-Klassifizierung und Bestandsgesundheit | Bestandsrisiko und Signale für Nachschub oder Überbestand |
| Verkaufsanalyse | `Sales_Analytics` | Aggregiert die Rentabilität nach SKU und Vertriebskanal | SKU-Margenrangfolgen, Rentabilitätsbewertungen, Kanalbeitrag |
| Ausnahmeüberwachung | `Exception_Report` | Konsolidiert Gewinn-, Bestands- und Einkaufskostenausnahmen | Risikoklassifizierung, Risikoschätzungen, empfohlene Maßnahmen |
| Managementberichte | `Executive_Dashboard` | Fasst die Unternehmensleistung und vorrangige Punkte zusammen | Erlös, COGS, Bruttogewinn, Bruttomarge, Budgeterreichung, Bestandswert, Risikoposition und Top 5 der zum Gewinn beitragenden SKUs |

### Datenfluss

```text
Parameters
    │
    ├── Currency and exchange-rate settings
    ├── Analysis period and profitability thresholds
    ├── Inventory and ABC thresholds
    └── Purchase-cost variance threshold and gross-profit budget
            │
            ▼
Raw Cin7 Exports
    ├── Import_Sales
    ├── Import_Inventory
    └── Import_Purchases
            │
            ▼
Data Preparation and Cost Calculation
    ├── Data_Cleaning
    ├── Cost_Engine
    └── Margin_Engine
            │
            ▼
Analytical Outputs
    ├── Inventory_Analytics
    ├── Sales_Analytics
    └── Exception_Report
            │
            ▼
Executive_Dashboard
```

Die vorgesehene Richtung verläuft von den Quelldaten zu den berechneten Ausgaben. Benutzer pflegen die Rohdatenexporte und Geschäftsparameter; nachgelagerte Arbeitsblätter leiten ihre Ergebnisse aus diesen Eingaben ab.

Die Spezifikation der Arbeitsmappe verwendet moderne Excel-Funktionen mit dynamischen Arrays, darunter `UNIQUE`, `FILTER`, `SORT`, `SORTBY`, `XLOOKUP`, `SUMIFS`, `LET`, `SCAN`, `MAP` und `LAMBDA`. Durch Formeln erzeugte Bereiche sind so ausgelegt, dass sie sich bei einer Zunahme der Quelldatensätze oder eindeutigen SKUs automatisch erweitern, soweit die Excel-Kompatibilität und der verfügbare Platz im Arbeitsblatt dies zulassen.

### Ein- und Ausgabevertrag

#### Globale Parameter

Das Arbeitsblatt `Parameters` stellt einen zentralen Konfigurationsbereich bereit. Die Spezifikation sieht 14 Geschäftsparameter in `C4:C17` vor.

| Zelle | Parameter | Beispielstandard | Zweck |
|---|---|---:|---|
| `C4` | Symbol der Basiswährung | Benutzerdefiniert | Steuert Währungsbezeichnungen und Anzeigekonventionen |
| `C5` | Wechselkurs von USD zur Basiswährung | `1.0000` | Rechnet Transaktionen in USD um |
| `C6` | Wechselkurs von EUR zur Basiswährung | `1.0800` | Rechnet Transaktionen in EUR um |
| `C7` | Analysezeitraum in Tagen | `90` | Legt den Beobachtungszeitraum für Verkäufe fest |
| `C8` | Zielwert für die Bruttomarge | `35%` | Definiert das angestrebte Rentabilitätsniveau |
| `C9` | Akzeptable Mindestbruttomarge | `10%` | Identifiziert Produkte mit niedriger Marge |
| `C10` | Plattformgebührensatz des Kanals | `5%` | Schätzt den Kanaldeckungsbeitrag nach der konfigurierten Gebühr |
| `C11` | Warnschwelle für niedrigen Bestand | `15` Tage | Kennzeichnet Bestände mit begrenzter Reichweite in Tagen |
| `C12` | Schwellenwert für Überbestand | `90` Tage | Kennzeichnet Bestände mit übermäßiger Reichweite in Tagen |
| `C13` | Absatzschwelle für langsam drehenden Bestand | `0` Einheiten | Hilft, vorrätige SKUs mit unzureichendem beobachtetem Absatz zu identifizieren |
| `C14` | Kumulierte Wertschwelle der ABC-Klasse A | `70%` | Definiert die erste Klassifizierungsgrenze für den Bestandswert |
| `C15` | Kumulierte Wertschwelle der ABC-Klasse B | `90%` | Definiert die zweite Klassifizierungsgrenze für den Bestandswert |
| `C16` | Schwellenwert für Einkaufskostenabweichungen | `15%` | Kennzeichnet wesentliche Änderungen der Einkaufskosten |
| `C17` | Monatliches Bruttogewinnbudget | `500,000` | Stellt den Zielwert für den Bericht zur Budgeterreichung bereit |

Dies sind Beispielstandardwerte aus der Implementierungsspezifikation, keine allgemeingültigen operativen Vergleichswerte. Sie sollten anhand der tatsächlichen Geschäftspolitik und Berichtsanforderungen des Unternehmens überprüft werden.

**Währungskonvention:** `C4` steuert das angezeigte Symbol der Basiswährung. Die Wechselkurswerte in `C5` und `C6` müssen einheitlich für diese Basiswährung konfiguriert werden. Die Beispielkurse sind keine aktuellen Devisenkurse.

#### Rohdateneingaben

Die Eingabearbeitsblätter sind zur Aufnahme von Quelldatensätzen und nicht für benutzergeführte Berechnungen vorgesehen.

| Arbeitsblatt | Erforderliche Geschäftsfelder |
|---|---|
| `Import_Sales` | Verkaufsauftragsnummer, Verkaufsdatum, Kanal, Kunde, ursprüngliche SKU, Menge, Verkaufspreis pro Einheit, Transaktionswährung, Positionsrabatt |
| `Import_Inventory` | Ursprüngliche SKU, Produktname, Kategorie, Lager, physische Menge, reservierte Menge, eingehende Einkaufsmenge, Referenzstückkosten |
| `Import_Purchases` | Bestellnummer, Eingangsdatum, Lieferant, ursprüngliche SKU, eingegangene Menge, Einkaufspreis pro Einheit, Abrechnungswährung |

Die Quellspezifikation definiert neun Verkaufsfelder, acht Bestandsfelder und sieben Einkaufsfelder. Tatsächliche Cin7-Exporte können andere Spaltennamen verwenden oder zusätzliche Felder enthalten. Daher muss das Importlayout vor der routinemäßigen Verwendung an die vorgesehene Struktur des Quellexports angepasst werden.

#### Wichtigste analytische Ausgaben

| Arbeitsblatt | Zentrale Ausgabefelder |
|---|---|
| `Data_Cleaning` | Standard-SKU, standardisierter Produktname und standardisierte Kategorie, konsolidierte physische/reservierte/eingehende Mengen, Konsistenzstatus der Stammdaten |
| `Cost_Engine` | Gesamte eingegangene Menge, Einkaufsbetrag in Basiswährung, gewichtete durchschnittliche Einkaufsstückkosten, Referenzstückkosten, genehmigte Standardstückkosten, letzte Einkaufsstückkosten, Einkaufskostenabweichung |
| `Margin_Engine` | Normalisierte Auftragsdetails, gültige Verkaufsmenge, angewendeter Wechselkurs, Nettoverkaufserlös, zugeordnete Stückkosten, COGS, Bruttogewinn je Position, Bruttomarge je Position |
| `Inventory_Analytics` | Verfügbarer Bestand, Bestandswert, Verkaufsmenge im Zeitraum, durchschnittlicher Tagesabsatz, Reichweite in Tagen, Umschlag, kumulierter Anteil am Bestandswert, ABC-Klasse, Zustand des Bestands |
| `Sales_Analytics` | SKU-Erlös, COGS, Bruttogewinn, Bruttomarge, Bruttogewinnbeitrag, Rentabilitätsbewertung, Kanalerlöse und -kosten, Kanaldeckungsbeitrag nach konfigurierten Plattformgebühren, Kanalrangfolge |
| `Exception_Report` | SKU-Ausnahmebezeichnungen, Bestands- und Kostenkennzeichnungen, geschätztes Risikovolumen, Prioritätsklassifizierung, empfohlene Managementmaßnahme |
| `Executive_Dashboard` | Gesamtnettoumsatz, COGS, Bruttogewinn, Bruttomarge, Erreichung des Bruttogewinnbudgets, Bestandswert, Bestandsumschlag in Tagen, Risiko durch Langsamdreher und Überbestand, Anzahl hochpriorisierter Ausnahmen, Top 5 der zum Gewinn beitragenden SKUs |

### Entscheidungsrahmen: fünf analytische Fragen

Die Arbeitsmappe ist darauf ausgelegt, fünf operative Fragen miteinander zu verknüpfen, statt jeden Bericht als isoliertes Dashboard zu behandeln.

1. **Sind die zugrunde liegenden Datensätze vergleichbar?** SKU-Normalisierung und konsolidierte Bestandsdaten tragen dazu bei, Inkonsistenzen durch Formatunterschiede und mehrere Lagerdatensätze zu verringern.
2. **Wie hoch ist der geschätzte Bruttogewinnbeitrag jedes Produkts?** Verkaufserlöse werden in die Basiswährung umgerechnet und mit einem berechneten Vergleichswert für die Stückkosten abgeglichen.
3. **Wo ist Betriebskapital gebunden?** Bestandswert, Reichweite in Tagen, Umschlag und ABC-Klassifizierung identifizieren Produkte, die beim Einkauf und bei der Bestandskontrolle unterschiedlich stark beachtet werden sollten.
4. **Welche Ausnahmen erfordern zuerst Maßnahmen?** Signale zu Rentabilität, Bestandsgesundheit und Einkaufskosten werden in einer priorisierten Ausnahmeliste zusammengeführt.
5. **Was sollte das Management zuerst prüfen?** Das Executive Dashboard verbindet Gesamtergebnisse mit Budgeterreichung, Bestandsrisiko und Produkten mit hohem Deckungsbeitrag.

Diese Fragen sind miteinander verbunden, ihre Ergebnisse sind jedoch nicht austauschbar. Bruttogewinn ist nicht dasselbe wie Betriebsergebnis oder Cashflow; Bestandswert ist nicht dasselbe wie erzielbare Liquidität; und eine Schätzung des Kanaldeckungsbeitrags ist keine vollständige Gewinn-und-Verlust-Rechnung auf Kanalebene.

### Analytische Fallen und Korrekturlogik

Die folgenden Beispiele veranschaulichen Entscheidungsrisiken, die das Framework verringern soll. Es handelt sich um Analyseszenarien, nicht um Aussagen über die tatsächlichen Ergebnisse eines bestimmten Unternehmens.

#### Falle 1: Verkaufserlös mit Produktrentabilität gleichsetzen

**Entscheidung:** Den Einkauf für eine umsatzstarke SKU erhöhen.

**Verborgener Fehler:** Die Entscheidung basiert auf Absatzvolumen oder Umsatz, ohne die den verkauften Einheiten zugeordneten Kosten zu prüfen.

Angenommen, ein Produkt erzielt 100.000 Nettoumsatz bei 85.000 zugeordneten COGS. Sein Bruttogewinn beträgt 15.000 und seine Bruttomarge 15 %. Ein zweites Produkt erzielt 60.000 Nettoumsatz bei 30.000 COGS und damit 30.000 Bruttogewinn sowie eine Bruttomarge von 50 %.

| Kennzahl | Produkt A | Produkt B |
|---|---:|---:|
| Nettoumsatz | 100,000 | 60,000 |
| COGS | 85,000 | 30,000 |
| Bruttogewinn | 15,000 | 30,000 |
| Bruttomarge | 15% | 50% |

Der Umsatz allein spricht für Produkt A. Der Bruttogewinnbeitrag spricht für Produkt B.

Der korrigierte Ansatz besteht darin, Umsatz, COGS, Bruttogewinn und Bruttomarge gemeinsam zu bewerten, bevor Bestands- oder Werbeentscheidungen getroffen werden. Bei der Schlussfolgerung müssen weiterhin Nachfrage, Bestandsverfügbarkeit und andere relevante Geschäftskosten berücksichtigt werden.

<details>
<summary>Berechnungsreferenz</summary>

```text
Gross Profit = Net Sales - COGS

Product A:
100,000 - 85,000 = 15,000

Product B:
60,000 - 30,000 = 30,000

Gross Margin = Gross Profit / Net Sales
```

</details>

#### Falle 2: Physischen Bestand mit Available-to-Promise-Bestand gleichsetzen

**Entscheidung:** Einen neuen Kundenauftrag bestätigen, weil der Bestandsbericht 100 vorhandene Einheiten ausweist.

**Verborgener Fehler:** Der Bericht unterscheidet nicht zwischen physischem Bestand und Bestand, der bereits für bestehende Aufträge reserviert ist.

Angenommen, eine SKU verfügt über 100 physische Einheiten, 80 reservierte Einheiten und keine zusätzlichen verfügbaren Einheiten aus eingehendem Bestand. Vor Anwendung einer gesonderten Sicherheitsbestandsrichtlinie verbleiben nur 20 nicht reservierte Einheiten.

| Kennzahl | Menge |
|---|---:|
| Physischer Bestand | 100 |
| Reservierter Bestand | 80 |
| Nicht reservierter physischer Bestand | 20 |

Der korrigierte Ansatz besteht darin, den nicht reservierten Bestand anstelle des physischen Bestands allein zu bewerten. Wenn ein Unternehmen außerdem einen Sicherheitsbestandspuffer aufrechterhalten muss, ist dieser Puffer in die tatsächliche Verfügbarkeitsrichtlinie einzubeziehen, statt anzunehmen, er werde von dieser Berechnung automatisch berücksichtigt.

Dadurch wird verhindert, dass Verkaufszusagen auf Beständen basieren, die bereits anderweitig zugeordnet wurden.

<details>
<summary>Berechnungsreferenz</summary>

```text
Available Physical Stock = Physical Stock - Reserved Stock

100 - 80 = 20 units
```

Die Arbeitsmappe erfasst auch eingehende Einkaufsmengen. Eingehender Bestand sollte jedoch nicht als physisch verfügbar behandelt werden, sofern die operative Richtlinie diese Auslegung nicht ausdrücklich zulässt.

</details>

#### Falle 3: Einen niedrigen Einkaufspreis als Beleg für eine bessere Bestandswirtschaftlichkeit behandeln

**Entscheidung:** Weiter bei einem Lieferanten einkaufen, weil dessen letzter Stückpreis attraktiv erscheint.

**Verborgener Fehler:** Der Vergleich ignoriert die bestehende Kostenbasis, die Wechselkursumrechnung oder die Auswirkungen einer aktuellen Änderung der Einkaufskosten auf die Produktrentabilität.

Angenommen, der vorherige vergleichbare Referenzwert für die Stückkosten beträgt 20 und ein neuer Wareneingang wird in derselben Währung und auf vergleichbarer Basis mit 24 erfasst. Die Stückkosten sind um 20 % gestiegen und überschreiten damit den beispielhaften Abweichungsschwellenwert von 15 %.

| Kennzahl | Wert |
|---|---:|
| Vorheriger Kostenreferenzwert | 20 |
| Letzte Einkaufskosten | 24 |
| Absolute Erhöhung | 4 |
| Relative Erhöhung | 20% |
| Beispielhafter Warnschwellenwert | 15% |

Der korrigierte Ansatz besteht darin, den Einkaufsdatensatz zu prüfen, Kosten auf einheitlicher Währungsbasis zu vergleichen und vor Preisänderungen oder der nächsten Bestellung zu untersuchen, ob die Änderung auf Lieferantenpreise, Währungsschwankungen oder ein Datenqualitätsproblem zurückzuführen ist.

Eine Abweichungswarnung ist ein Hinweis für weitere Untersuchungen, kein Beweis dafür, dass der Lieferant fehlerhaft gehandelt hat oder die Bestellung automatisch abgelehnt werden sollte.

<details>
<summary>Berechnungsreferenz</summary>

```text
Cost Variance Rate =
    (Latest Purchase Cost - Previous Cost Benchmark)
    / Previous Cost Benchmark

(24 - 20) / 20 = 20%
```

Die dokumentierte Ausnahmeregel der Arbeitsmappe verwendet den Absolutwert der Einkaufskostenabweichung, wenn sie mit dem konfigurierten Schwellenwert verglichen wird.

</details>

### Beispielszenario: von exportierten Datensätzen zur Managementbewertung

Betrachten Sie ein hypothetisches Unternehmen mit mehreren Vertriebskanälen und Lagerstandorten. Das Unternehmen exportiert Verkaufspositionen, eine Bestandsmomentaufnahme und Wareneingangsdatensätze aus seinem bestehenden System.

Der Analysezeitraum ist auf 90 Tage festgelegt. Die beispielhafte Zielbruttomarge beträgt 35 %, der Schwellenwert für niedrige Margen 10 %, die Warnschwelle für niedrigen Bestand 15 Reichweitentage und der Schwellenwert für Überbestand 90 Reichweitentage.

Die importierten Datensätze zeigen für eine SKU die folgenden Ergebnisse:

| Eingabe oder Berechnung | Beispielwert |
|---|---:|
| Nettoumsatz im Analysezeitraum | 100,000 |
| Zugeordnete COGS | 85,000 |
| Bruttogewinn | 15,000 |
| Bruttomarge | 15% |
| Physischer Bestand | 500 Einheiten |
| Reservierter Bestand | 100 Einheiten |
| Nicht reservierter physischer Nettobestand | 400 Einheiten |
| Absatz im 90-Tage-Zeitraum | 900 Einheiten |
| Durchschnittlicher Tagesabsatz | 10 Einheiten |
| Reichweite in Tagen | 40 Tage |

Die Bruttomarge liegt unter dem Zielwert von 35 %, aber über dem Mindestschwellenwert von 10 %. Daher muss die Rentabilität der SKU überprüft werden, auch wenn sie nach der konfigurierten Regel nicht zwingend als Ausnahme mit niedriger Marge eingestuft wird.

Die Bestandsposition entspricht etwa 40 Reichweitentagen und liegt damit zwischen den beispielhaften Schwellenwerten für niedrigen Bestand und Überbestand. Dies belegt nicht automatisch, dass der Bestand optimal ist: Beschaffungsvorlaufzeiten, Nachfrageschwankungen und Sicherheitsbestandsanforderungen bleiben relevant.

Die praktische Empfehlung lautet, Preisgestaltung, Rabatte und Kostenannahmen der SKU zu prüfen und gleichzeitig zu kontrollieren, ob die aktuelle Bestandsreichweite der erwarteten Nachfrage entspricht. Wenn das Produkt einen erheblichen Gesamtbruttogewinn beiträgt, kann eine Prüfung der Preisgestaltung oder Lieferantenkosten sinnvoller sein als eine sofortige Entscheidung zur Auslistung.

Das Dashboard unterstützt diese Prüfung, indem es Produktrentabilität, Bestandsrisiko und Ausnahmesignale in einem gemeinsamen Berichtsworkflow zusammenführt. Die endgültige Entscheidung bleibt von verifizierten Quelldaten und den operativen Einschränkungen des Unternehmens abhängig.

### Formelreferenz

Die folgenden Formeln beschreiben die vorgesehene Berechnungslogik der Arbeitsmappe. Es handelt sich um Referenzmuster und nicht um verifizierte Formeln für jede einzelne Zelle einer veröffentlichten Arbeitsmappe. Passen Sie die Spaltenreferenzen vor der Implementierung an das tatsächliche Arbeitsblattlayout an.

<details>
<summary>1. SKU-Standardisierung und Bestandskonsolidierung</summary>

**Zweck:** Abweichungen durch unterschiedliche SKU-Formatierungen verringern und Bestandsdatensätze über Lagerstandorte hinweg konsolidieren.

```excel
=UPPER(TRIM(SKU_Cell))
```

Dieses Normalisierungsmuster entfernt führende und nachgestellte Leerzeichen und vereinheitlicht SKU-Text in Großbuchstaben. Wenden Sie dieselbe Normalisierungskonvention auf Verkaufs-, Bestands- und Einkaufsdatensätze an, bevor Sie Datensätze aus verschiedenen Quellen abgleichen.

```excel
=UNIQUE(Standardized_SKU_Range)
```

Gibt eine Liste eindeutiger normalisierter SKU-Kennungen zurück.

**Muster für die Bestandsaggregation:**

```excel
=SUMIFS(
    Physical_Quantity_Range,
    Standardized_SKU_Range,
    Current_SKU
)
```

Wiederholen Sie die Aggregation für reservierte und eingehende Mengen. Die Aggregationskriterien müssen in allen Quelltabellen denselben normalisierten SKU-Schlüssel verwenden.

**Wichtig:** Die SKU-Normalisierung kann Unterschiede bei der Groß-/Kleinschreibung und umgebende Leerzeichen beheben. Tatsächlich unterschiedliche Produktkennungen, falsche SKU-Zuordnungen oder mehrdeutige Beziehungen in den Produktstammdaten lassen sich damit nicht zuverlässig auflösen. Diese Fälle erfordern eine Prüfung der Quelldaten.

</details>

<details>
<summary>2. Einkaufskostenberechnung</summary>

**Zweck:** Einkaufsbeträge in die konfigurierte Basiswährung umrechnen, gewichtete durchschnittliche Einkaufskosten berechnen und Änderungen der jüngsten Einkaufskosten identifizieren.

**Einkaufsbetrag in Basiswährung:**

```text
Base-Currency Purchase Amount
    = Received Quantity
    × Purchase Unit Price
    × Applicable Exchange Rate
```

Der Wechselkurs muss einer einheitlichen Konvention folgen: Einheiten der Basiswährung je Einheit der Transaktionswährung. Wenn die Quelldaten bereits Werte in der Basiswährung enthalten, dürfen diese Werte nicht ein zweites Mal umgerechnet werden.

**Gewichtete durchschnittliche Einkaufsstückkosten:**

```text
Weighted-Average Unit Cost
    = Total Base-Currency Purchase Amount
    / Total Received Quantity
```

Berechnen Sie Zähler und Nenner für dieselbe definierte Grundgesamtheit gültiger Wareneingänge. Schließen Sie ungültige Datensätze aus und behandeln Sie eine gesamte Menge von null oder eine negative Gesamtmenge entsprechend der dokumentierten Eingaberichtlinie.

**Einkaufskostenabweichung:**

```text
Cost Variance Rate
    = (Latest Unit Cost - Reference Unit Cost)
    / Reference Unit Cost
```

Der konfigurierte Schwellenwert identifiziert wesentliche Abweichungen, die untersucht werden müssen. Referenzkosten von null oder fehlende Referenzkosten sind als nicht verfügbarer Vergleich und nicht als gültige prozentuale Abweichung zu behandeln.

Die Spezifikation unterscheidet zwischen gewichteten durchschnittlichen Einkaufskosten, genehmigten Standardstückkosten und den letzten Einkaufskosten pro Einheit. Ihre Auswahl und Rangfolge sollte in der implementierten Arbeitsmappe ausdrücklich definiert werden; sie dürfen nicht als austauschbar betrachtet werden.

</details>

<details>
<summary>3. Berechnung der Verkaufsmarge</summary>

**Zweck:** Die Rentabilität auf Auftragspositionsebene anhand des Nettoverkaufserlöses und eines zugeordneten Referenzwerts für die Stückkosten berechnen.

```text
Net Sales Revenue
    = Quantity
    × Unit Selling Price
    × (1 - Line Discount Rate)
    × Applicable Exchange Rate
```

Dieses Muster setzt voraus, dass der Rabattsatz als Dezimalzahl dargestellt wird und der exportierte Verkaufspreis pro Einheit vor dem Positionsrabatt gilt. Wenn der Quellexport bereits den Nettopositionserlös enthält, verwenden Sie diesen Wert, statt den Rabatt ein zweites Mal anzuwenden.

```text
Cost of Goods Sold (COGS)
    = Valid Sales Quantity
    × Matched Unit Cost
```

```text
Gross Profit
    = Net Sales Revenue - COGS
```

```text
Gross Margin
    = Gross Profit / Net Sales Revenue
```

Bei einem Nettoverkaufserlös von null ist die Bruttomarge nicht definiert. Die Implementierung sollte einen kontrollierten Leerwert oder einen ausdrücklichen Status zurückgeben, statt durch null zu dividieren.

**Interpretation:** Der Bruttogewinn misst den Betrag, der nach Abzug der zugeordneten Produktkosten verbleibt. Er umfasst für sich allein nicht sämtliche Betriebsausgaben, Abwicklungskosten, Marketingkosten oder sonstigen Aufwendungen, die gegebenenfalls zur Bestimmung der Vollkostenrentabilität erforderlich sind.

</details>

<details>
<summary>4. Bestandsgesundheit und ABC-Klassifizierung</summary>

**Zweck:** Bestandsverfügbarkeit, Reichweite, Wertrisiko und relativen Beitrag zum Bestandswert schätzen.

```text
Unreserved Physical Stock
    = Physical Stock - Reserved Stock
```

Wenn das Unternehmen eine gesonderte Sicherheitsbestandsrichtlinie anwendet, berücksichtigen Sie diese ausdrücklich bei der Bestimmung der operativen Verfügbarkeit.

```text
Average Daily Sales
    = Units Sold During Analysis Period
    / Analysis Period Days
```

```text
Days of Supply
    = Relevant Available Stock
    / Average Daily Sales
```

Wenn der durchschnittliche Tagesabsatz null beträgt, darf die Reichweite in Tagen nicht als null ausgewiesen werden. Verwenden Sie einen kontrollierten Status wie `No Recent Sales` oder eine gleichwertige Ausnahme.

```text
Inventory Value
    = Selected Stock Quantity
    × Selected Unit Cost
```

Die Implementierung muss definieren, welche Mengen- und Kostenbasis für die Bestandsbewertung verwendet wird. Physischer Bestand, nicht reservierter Bestand und eingehender Bestand stellen unterschiedliche operative Konzepte dar und dürfen nicht ohne klare Richtlinie kombiniert werden.

**ABC-Klassifizierung:** Ordnen Sie SKUs nach dem ausgewählten Bestandswert, berechnen Sie den kumulierten Bestandswert als Anteil am Gesamtwert und klassifizieren Sie jede SKU anhand der konfigurierten Grenzen für die Klassen A und B.

Die Beispielkonfiguration verwendet kumulierte Wertschwellen von 70 % und 90 %. Diese Grenzen sind Geschäftseinstellungen und keine allgemeingültigen Standards. Die Berechnung muss außerdem einen leeren Bestandssatz oder einen Gesamtbestandswert von null verarbeiten können, ohne ungültige Prozentwerte zu erzeugen.

</details>

<details>
<summary>5. Ausnahmeüberwachung und Dashboard-Kennzahlen</summary>

**Zweck:** Analytische Ergebnisse in Prüfprioritäten übersetzen.

Die Spezifikation benennt fünf wichtige Ausnahmetypen:

- Bruttogewinn von null.
- Negativer Bruttogewinn.
- Überbestand.
- Ausverkaufsrisiko oder Risiko eines niedrigen Bestands.
- Einkaufskostenabweichung.

Die Arbeitsmappe verwendet konfigurierbare Schwellenwerte, um Ausnahmen zu kennzeichnen. Die genauen Statusbezeichnungen und ihre Rangfolge sollten anhand der endgültigen Implementierung geprüft werden.

**Beispielmuster für den Einkaufskostenschwellenwert:**

```text
IF absolute cost variance exceeds configured threshold:
    Flag for investigation
ELSE:
    No cost-variance alert
```

**Budgeterreichung:**

```text
Gross-Profit Budget Attainment
    = Actual Gross Profit / Gross-Profit Budget Target
```

Wenn das Budgetziel null ist oder fehlt, sollte das Dashboard statt eines ungültigen Verhältnisses einen kontrollierten Status für Nichtverfügbarkeit anzeigen.

**Kanaldeckungsbeitrag:** Die Spezifikation umfasst einen geschätzten Plattformgebührensatz. Eine Berechnung, die nur diese Gebühr vom Bruttogewinn abzieht, ist eine partielle Deckungsbeitragskennzahl und keine vollständige Berechnung des Kanalgewinns. Weitere kanalspezifische Aufwendungen müssen separat einbezogen werden, wenn das Unternehmen einen Vollkostenvergleich der Kanäle benötigt.

</details>

### Validierungsregeln

Die folgenden Regeln beschreiben die Prüfungen, die erforderlich sind, damit die analytischen Ausgaben interpretierbar bleiben. Wenn die Quellspezifikation keinen genauen automatisierten Fehlerstatus definiert, wird das erwartete Verhalten als Implementierungsanforderung und nicht als Behauptung formuliert, dass die Arbeitsmappe es bereits durchsetzt.

| Feld oder Bereich | Validierungsregel | Erwartetes Fehlerverhalten |
|---|---|---|
| Basiswährung | Eine Basiswährung definieren und in allen Berichtsausgaben einheitlich verwenden | Inkonsistente Währungseinstellungen kennzeichnen; Währungen nicht stillschweigend vermischen |
| Wechselkurse | Für jede umzurechnende Fremdwährung einen gültigen, positiven Kurs verlangen | Fehlende oder ungültige Kurse kennzeichnen; betroffene umgerechnete Beträge dürfen nicht als verifiziert behandelt werden |
| Analysezeitraum | Eine positive Anzahl von Tagen verlangen | Zeiträume von null sowie negative oder fehlende Zeiträume ablehnen oder kennzeichnen |
| Margenschwellenwerte | Gültige Prozentwerte verwenden und die vorgesehene Reihenfolge von Ziel- und Mindestschwellenwert sicherstellen | Ungültige Einstellungen zur Prüfung kennzeichnen |
| Kanalgebührensatz | Einen gültigen Satz verlangen, der der erwarteten Prozentkonvention entspricht | Ungültige Werte kennzeichnen, statt unbeabsichtigte negative oder überhöhte Beiträge zuzulassen |
| ABC-Grenzen | Kumulierte Wertschwellen zwischen 0 % und 100 % verlangen, wobei die Grenze A nicht größer als die Grenze B sein darf | Inkonsistente Grenzen kennzeichnen |
| Schwellenwert für Einkaufskostenabweichungen | Einen nicht negativen prozentualen Schwellenwert verlangen | Negative oder nicht numerische Einstellungen kennzeichnen |
| Budgetziel | Einen gültigen numerischen Zielwert für den Bericht zur Zielerreichung verlangen | Bei einem Nenner von null oder einem fehlenden Nenner einen Status für Nichtverfügbarkeit anzeigen |
| Verkaufsmenge | Numerische Mengen validieren und ungültige Datensätze vor der Rentabilitätsberechnung untersuchen | Ungültige Zeilen gemäß der dokumentierten Importrichtlinie ausschließen oder kennzeichnen |
| Verkaufspreis pro Einheit | Numerische Werte und die im Quellexport verwendete Währungskonvention validieren | Ungültige Preise kennzeichnen; fehlende Preise nicht stillschweigend als verifizierte Verkäufe zum Nullpreis interpretieren |
| Positionsrabatt | Numerische Darstellung und zulässigen Geschäftsbereich des Satzes validieren | Ungültige Sätze kennzeichnen; eine doppelte Anwendung des Rabatts vermeiden |
| Einkaufsmenge | Eingegangene Mengen validieren und Mengen von null oder negative Mengen identifizieren, die eine besondere Behandlung erfordern | Datensätze kennzeichnen, die nicht sicher in die gewichteten Durchschnittskosten einbezogen werden können |
| Einkaufspreis pro Einheit | Numerische Werte und Währungskonsistenz validieren | Ungültige Preise kennzeichnen und verhindern, dass sie Kostenreferenzwerte stillschweigend verzerren |
| SKU-Kennungen | Groß-/Kleinschreibung und umgebende Leerzeichen in allen drei Importen einheitlich normalisieren | Fehlende oder nicht übereinstimmende Kennungen kennzeichnen; mehrdeutige Treffer untersuchen |
| Bestandsmengen | Physische, reservierte und eingehende Mengen getrennt validieren | Inkonsistente oder ungültige Bestände kennzeichnen; nicht annehmen, dass eingehender Bestand physisch verfügbar ist |
| Kostenzuordnung | Eine gültige Kostenquelle oder einen ausdrücklich genehmigten Ersatzwert verlangen | Nicht zugeordnete Kosten kennzeichnen; fehlende Kosten nicht als bestätigte Kosten von null interpretieren |
| Bruttomargenberechnung | Nicht durch einen Nettoerlös von null dividieren | Einen kontrollierten Leerwert oder einen ausdrücklichen Status zurückgeben |
| Berechnung der Reichweite in Tagen | Nicht durch einen durchschnittlichen Tagesabsatz von null dividieren | Einen Status „keine aktuellen Verkäufe“ oder einen gleichwertigen Status zurückgeben |
| Ausgabebereiche dynamischer Arrays | Den Formelausgabebereich frei von manuell eingegebenen Werten halten | Die blockierenden Zellen auflösen, ohne den Formelanker zu löschen |
| Importlayout | Quellspalten den erwarteten Felddefinitionen zuordnen | Die Importzuordnung korrigieren, bevor auf nachgelagerte Berechnungen vertraut wird |

### Bekannte Einschränkungen und Kompatibilität

#### Excel-Kompatibilität

Die Spezifikation der Arbeitsmappe beruht auf modernen Funktionen mit dynamischen Arrays, darunter `FILTER`, `UNIQUE`, `SORTBY` und `SCAN`. Sie erfordert Microsoft 365, Excel 2021, Excel 2024 oder eine kompatible WPS-Version, die die erforderlichen Funktionen unterstützt.

Excel 2016, Excel 2019 und frühere Versionen werden von dem spezifizierten Berechnungskonzept nicht unterstützt.

#### Datenvolumen

Die Spezifikation zielt auf bis zu 50.000 Detailzeilen pro Quelltabelle ab, wobei ein kombinierter Gesamtumfang unter 100.000 Zeilen empfohlen wird, um eine reaktionsschnelle Berechnung zu gewährleisten. Die tatsächliche Leistung hängt von der Tabellenkalkulationsanwendung, der Hardware, der Formelkomplexität und dem Umfang der importierten Daten ab.

#### Bearbeitung und Zusammenarbeit

- Sortieren Sie Ausgabebereiche dynamischer Arrays nicht manuell, geben Sie dort nichts ein und überschreiben Sie sie nicht.
- Vermeiden Sie, dass mehrere Benutzer in derselben Arbeitskopie unabhängig Quelldaten einfügen und bearbeiten.
- Bewahren Sie eine separate Kopie der ursprünglichen Exporte auf, damit Importfehler nachverfolgt und korrigiert werden können.
- Prüfen Sie SKU-Treffer, Währungseinstellungen und Annahmen zu Stückkosten, bevor Sie die Ausgaben für Einkaufs- oder Preisentscheidungen verwenden.

#### Interpretation von Kosten und Gewinn

Auf Wareneingängen basierende Kosten stimmen nicht in jedem Fall mit dem vom Rechnungssystem erfassten COGS überein. Fracht, Zölle, Zuweisung von Einstandskosten, Retouren, Lieferantengutschriften, Abschreibungen und Bestandsbewertungsrichtlinien können zu Unterschieden führen.

Die berechnete Marge sollte daher als operatives Analyseergebnis auf Basis der konfigurierten Kostenmethode behandelt werden und nicht automatisch als Ersatz für abgestimmte Finanzberichte.

</details>


---

### Fehlerbehebung

<details>
<summary>Warum zeigt Excel #ÜBERLAUF! an?</summary>

Eine Formel mit dynamischem Array kann nicht erweitert werden, weil eine oder mehrere Zellen ihres Ausgabebereichs belegt sind.

1. Wählen Sie die Zelle aus, die `#SPILL!` anzeigt.
2. Prüfen Sie den angegebenen Ausgabebereich auf manuell eingegebene Werte, Leerzeichen oder andere blockierende Inhalte.
3. Löschen Sie ausschließlich die unbeabsichtigten Inhalte, die den Ausgabebereich blockieren.
4. Erhalten Sie die Formel in der Ankerzelle.
5. Bestätigen Sie, dass sich die Ausgabe wie erwartet erweitert.

Löschen Sie den Formelanker nicht, wenn Sie einen blockierten Ausgabebereich beheben.

</details>

<details>
<summary>Warum weist ein neues Produkt 100 % Bruttomarge oder COGS von null auf?</summary>

Das Produkt fehlt möglicherweise in den Bestandsreferenzdaten, verfügt über keine gültige Wareneingangshistorie oder es fehlt ein konfigurierter Referenzwert für die Stückkosten.

1. Prüfen Sie, ob die SKU im Bestandsimport vorhanden ist.
2. Stellen Sie sicher, dass ihre Kennung mit der normalisierten SKU übereinstimmt, die in Verkaufs- und Einkaufsdatensätzen verwendet wird.
3. Prüfen Sie, ob gültige Wareneingänge für das Produkt vorliegen.
4. Wenn das Produkt über keine Einkaufshistorie verfügt, bestätigen Sie, ob ein legitimer Referenzwert für die Stückkosten verfügbar ist.
5. Berechnen Sie neu und verifizieren Sie die resultierende Marge, bevor Sie sie für Preis- oder Einkaufsentscheidungen verwenden.

Ein Ergebnis mit Kosten von null sollte nicht automatisch als tatsächlich kostenfreies Produkt interpretiert werden.

</details>

<details>
<summary>Warum wirken Summen aus Verkäufen, Einkäufen oder Bestand inkonsistent?</summary>

Prüfen Sie Berichtszeitraum, Transaktionswährung, doppelte Quellzeilen, SKU-Zuordnung und die Granularität jedes importierten Datensatzes. Verkaufs- und Einkaufstabellen sind Datensätze auf Transaktionsebene, während der Bestand eine Momentaufnahme je SKU und Lager darstellt. Werden diese Datensätze summiert oder abgeglichen, ohne ihre unterschiedlichen Detaillierungsgrade zu berücksichtigen, kann dies zu irreführenden Ergebnissen führen.

Vergleichen Sie eine kleine Stichprobe der Quelldatensätze mit der entsprechenden berechneten Ausgabe, bevor Sie sich auf aggregierte Summen verlassen.

</details>

</details>

---


## Weitere Tools dieser Serie

Theseus Workshop entwickelt leichtgewichtige Excel-basierte Geschäftsentscheidungstools für wiederkehrende operative und finanzielle Probleme.

- **Tools zur Baukostenkalkulation** — strukturieren Mengenermittlungen, Kostenannahmen und Projektkalkulationen.
- **Tools für Bestands- und Auftragsrentabilität** — verbinden Bestand, Aufträge, Kosten und die finanzielle Leistung auf Produktebene.
- **Modelle für Finanzplanung und Szenarien** — unterstützen strukturierte Budgetierung, Prognosen und Überprüfungen von Geschäftsentscheidungen.

Entdecken Sie die verfügbaren Projekte im [Theseus Workshop GitHub-Profil](https://github.com/HyVoid).

## Lizenz

Dieses Projekt wird unter der **Apache License 2.0** veröffentlicht. Die vollständigen Lizenzbedingungen finden Sie in der Datei `LICENSE` des Repositories.
