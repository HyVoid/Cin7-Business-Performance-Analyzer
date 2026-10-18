[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Cin7 Business Performance Analyzer

## Cin7-Exporte in Inventar-, Rentabilitäts- und Managemententscheidungen verwandeln — mit einer kostenlosen Browser-Version oder einer wiederverwendbaren Excel-Arbeitsmappe.

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange.svg)

**Eine wiederverwendbare operative Analyseschicht, die rohe Cin7-Exporte in Inventar-, Margen- und Business-Performance-Erkenntnisse verwandelt — ohne Softwareinstallation, ohne BI-Stack und ohne Neugestaltung bestehender Workflows.**

**Keine Registrierung. Keine Installation. Kostenlos im Browser.**

Testen Sie die Browser-Version kostenlos. Wenn Sie die Excel-Version benötigen, können Sie sie mit 30-tägiger Geld-zurück-Garantie ohne Fragen erwerben.
>
> 🌐 **Im Browser öffnen** → [*HTML-Live-Demo*](https://hyvoid.github.io/Cin7-Business-Performance-Analyzer/)
> 📥 **Excel herunterladen** → *Excel-Arbeitsmappen-Release*
>
> In zwei Formaten verfügbar:
>
> * Browser-Version (HTML)
> * Excel-Version (.xlsx)

---

## Was es zu verfolgen hilft

* Welche SKUs Gewinn generieren und welche Betriebskapital verbrauchen.
* Inventarwert, Umschlagperformance und Alterungsrisiko in einer operativen Ansicht.
* Umsatz, Kosten und Rentabilitätsbeitrag auf Kanalebene.
* Produkte, die sich der Lagerleere nähern, gegenüber Produkten mit überschüssigem Inventar.
* Bruttomargenperformance nach SKU, Kategorie und Vertriebskanal.
* Operative Ausnahmen, die Managementeingriffe erfordern.

---

## Schnellstart-Workflow

### 1. Betriebsannahmen einmal konfigurieren

Öffnen Sie das **Parameters**-Arbeitsblatt und definieren Sie die zentralen Geschäftsannahmen wie:

* Inventarbewertungsmethode,
* Alterungsschwellen,
* ABC-Klassifizierungsparameter,
* Rentabilitätsschwellen,
* Ausnahme-Warnregeln.

Diese Konfiguration wird typischerweise einmal durchgeführt und wiederverwendet.

---

### 2. Bestehende Cin7-Exporte importieren

Exportieren Sie Standardberichte direkt aus Cin7 und fügen Sie sie ein in:

* `Import_Sales`
* `Import_Inventory`
* `Import_Purchases`

Keine Datenbankverbindung erforderlich.

Keine Datenrestrukturierung erforderlich.

Daten können auch aus Buchhaltungssystemen, ERP-Exporten oder bestehenden Tabellenkalkulationen kopiert werden.

---

### 3. Managementausgaben sofort prüfen

Navigieren Sie zu:

* Inventaranalyse
* Verkaufsanalyse
* Ausnahmeberichte
* Executive Dashboard

Alle Berechnungen, Rangfolgen, Klassifizierungen und Warnungen aktualisieren sich automatisch.

Keine manuellen Formeln.

Keine Neuerstellung von Pivot-Tabellen.

Keine Berichtspflege.

---

### 4. Regelmäßig aktualisieren

Wiederholen Sie den Export-und-Einfügen-Prozess wöchentlich, monatlich oder wann immer Management-Reviews stattfinden.

Das analytische Framework bleibt unverändert.

Die Geschäftsdaten aktualisieren sich.

---

**Einige wenige Schlüsselparameter setzen. Bestehende Daten einfügen. Die Analyse erhalten. Bei Bedarf aktualisieren.**

---

## Warum ich dies gebaut habe

Die meisten ERP-Implementierungsprobleme sind eigentlich keine ERP-Probleme.

In vielen Unternehmen, die Systeme wie Cin7 nutzen, existieren Inventartransaktionen, Einkaufstransaktionen, Verkaufstransaktionen und Kostenrechnungstransaktionen bereits. Das Problem ist, dass das Management diese Transaktionen nicht leicht in Geschäftsentscheidungen umwandeln kann.

Typische Managementfragen werden überraschend schwierig:

* Welche SKU generiert tatsächlich Gewinn?
* Welches Inventar verbraucht Cashflow?
* Welcher Vertriebskanal trägt die höchste Marge bei?
* Welche Produkte erzeugen Lagerleerisiko?
* Verbessert oder verschlechtert sich der Inventarumschlag?

Die übliche Lösung ist:

```text
Export report
    ↓
Copy data
    ↓
Merge spreadsheets
    ↓
Calculate manually
    ↓
Build presentation
    ↓
Repeat next month
```

Dies erzeugt ein verborgenes analytisches Versagen:

> Betriebsdaten existieren, aber Managementtransparenz existiert nicht.

Zum Beispiel:

| Vorher                                                              | Nachher                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| SKU A erzielte $250.000 Umsatz und schien ein Top-Performer | SKU A erzielte nur 8 % Bruttomarge und band 28 % des Inventarkapitals |
| Kanal B zeigte das höchste Verkaufsvolumen                           | Kanal C erzielte die höchste Beitragsmarge                        |
| Das Inventar erschien gesund                                          | 41 % des Inventarwerts hatten sich 180 Tage nicht bewegt                          |

Der Zweck dieses Projekts war nicht, ein weiteres Dashboard zu bauen.

Der Zweck war, den Reasoning-Prozess zu produzieren, den erfahrene Operatoren nutzen, wenn sie ERP-Transaktionen in Geschäftsentscheidungen umwandeln, und diesen Prozess wiederholbar zu machen.

---

## ERP-Analyseprobleme, die dies löst

| Problem                           | Ohne dieses Tool                            | Mit diesem Tool                                  |
| --------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| SKU-Rentabilität unklar         | Umsatz wird mit Rentabilität verwechselt        | Wahrer SKU-Margenbeitrag wird sichtbar    |
| Inventarkapital-Exposure verborgen | Überschüssiges Inventar sammelt sich unbemerkt       | Inventarwert und Alterung werden messbar     |
| Kanalperformance missverstanden | Umsatzrankings treiben Entscheidungen             | Gewinnrankings treiben Entscheidungen                 |
| Inventarumschlag unbekannt        | Lagerleere und Überbestand treten gleichzeitig auf | Umschlag und Inventargesundheit werden messbar |
| Managementberichte sind manuell    | Mehrere Exporte und Tabellenkalkulationen erforderlich   | Automatisierte Managementberichte                  |
| Operative Ausnahmen übersehen     | Probleme werden nach Finanzabschluss entdeckt    | Ausnahmen werden sofort identifiziert               |

---

## Für wen dies ist

Dieses Tool ist konzipiert für:

* Cin7-Operatoren und -Administratoren.
* Inventar- und Supply-Chain-Manager.
* Operative Manager.
* Finanzmanager.
* Geschäftsinhaber und CEOs.
* Inventarlastige Großhändler, Distributoren und E-Commerce-Unternehmen.

Dieses Tool ist besonders nützlich, wenn:

* ERP-Daten existieren,
* Berichterstattung existiert,
* aber Managementtransparenz weiterhin schwach bleibt.

Dieses Tool ist **nicht konzipiert für**:

* Ersatz von ERP-Systemen,
* Enterprise-BI-Implementierungen,
* Data-Warehouse-Projekte,
* transaktionale Workflow-Ausführung.

**Keine Tabellenkalkulations-Expertise erforderlich. Öffnen Sie die Browser-Version oder nutzen Sie die Excel-Arbeitsmappe und beginnen Sie sofort mit der Analyse.**

---

## Über

Ich baue leichtgewichtige operative Tracker und Decision-Support-Tools für Situationen, in denen es schlicht zu viele bewegliche Teile gibt, um sie alle zuverlässig im Kopf zu behalten.

Die Frage, mit der ich üblicherweise beginne, ist:

> *Welche Informationen müssen an einem Ort existieren, damit die nächste Geschäftsentscheidung zuversichtlich getroffen werden kann?*

Der **Cin7 Business Performance Analyzer** ist ein Beispiel für diesen Ansatz: operative Transaktionen in wiederverwendbares Management-Reasoning zu verwandeln.

---

## Technische Details

<details>
<summary>Für technische Reviewer, Excel-Praktiker und Mitarbeiter</summary>

---

### Arbeitsmappen-Architektur

```text
Cin7 Export Files
        ↓
Import Layer
        ↓
Data Cleaning Layer
        ↓
Calculation Engines
        ↓
Business Analytics
        ↓
Executive Dashboard
```

| Arbeitsblatt           | Funktion             |
| ------------------- | -------------------- |
| Instructions        | Benutzerführung        |
| Parameters          | Konfiguration        |
| Import_Sales        | Verkaufsimporte        |
| Import_Inventory    | Inventarimporte    |
| Import_Purchases    | Einkaufsimporte     |
| Data_Cleaning       | Standardisierung      |
| Cost_Engine         | Inventarkosten    |
| Margin_Engine       | Rentabilitäts-Engine |
| Inventory_Analytics | Inventaranalyse   |
| Sales_Analytics     | Umsatzanalyse     |
| Exception_Report    | Ausnahmenerkennung  |
| Executive_Dashboard | Executive Reporting  |

---

### Drei Fallen, die selbst erfahrene Inventarmanager fangen

---

#### Falle 1 — Umsatz wird mit Rentabilität verwechselt

Eine Einkaufsentscheidung wurde getroffen.

Die Entscheidung stützte sich auf Verkaufsumsatz-Rankings.

| SKU | Umsatz  | Bruttomarge |
| --- | -------- | ------------ |
| A   | $500.000 | 8 %           |
| B   | $300.000 | 42 %          |

Das Management erhöhte die Einkäufe von SKU A.

Das Reasoning war falsch, weil Umsatz nicht gleich Gewinnbeitrag ist.

Der korrigierte Ansatz bewertet:

```text
Revenue
− Product Cost
− Channel Cost
− Inventory Carrying Cost
```

Ergebnis:

SKU B wird zum bevorzugten Investitionsziel.

<details>
<summary>Formel-Logik</summary>

```excel
Gross Profit = Revenue - COGS

Gross Margin % =
Gross Profit / Revenue

Contribution Rank =
RANK(Gross Profit)
```

</details>

---

#### Falle 2 — Inventarmen werden mit Inventarisiko verwechselt

Eine Nachschubentscheidung wurde getroffen.

Die Entscheidung stützte sich auf die Lagermenge.

Jedoch:

| SKU | Einheiten | Wert    | Tage im Inventar |
| --- | ----- | -------- | ----------------- |
| A   | 500   | $8.000   | 20                |
| B   | 500   | $125.000 | 280               |

Das Reasoning scheiterte, weil die Kapitalexposure von Inventarwert und Alterung abhängt.

Richtiger Ansatz:

```text
Inventory Risk
=
Inventory Value
× Aging Factor
× Turnover Factor
```

Ergebnis:

SKU B wird zur operativen Priorität.

<details>
<summary>Formel-Logik</summary>

```excel
Inventory Value =
Quantity * Unit Cost

Inventory Days =
Inventory Value /
Average Daily COGS

ABC Classification =
PERCENTRANK()
```

</details>

---

#### Falle 3 — Kanalumsatz wird mit Kanalperformance verwechselt

Eine Marketingallokationsentscheidung wurde getroffen.

| Kanal   | Umsatz  | Marge |
| --------- | -------- | ------ |
| Amazon    | $500.000 | 12 %    |
| Großhandel | $350.000 | 33 %    |

Die Empfehlung begünstigte Amazon.

Das Reasoning scheiterte, weil Umsatzrankings die Beitragsökonomie ignorierten.

Richtiger Ansatz:

```text
Net Contribution
=
Revenue
− Product Cost
− Channel Cost
− Operational Cost
```

Ergebnis:

Großhandel wurde zum bevorzugten Wachstumskanal.

<details>
<summary>Formel-Logik</summary>

```excel
Channel Profit =
Revenue
- COGS
- Channel Expenses

Profit Rank =
RANK(Channel Profit)
```

</details>

---

### Beispielszenario

Ein Distributor betreibt:

* 2.300 aktive SKUs
* 5 Vertriebskanäle
* $4,2 Mio. Inventarwert
* monatlichen Umsatz von $1,1 Mio.

Nach dem Import der Cin7-Exporte:

| Metrik                    | Ergebnis      |
| ------------------------- | ----------- |
| Inventarwert           | $4,18 Mio.      |
| Inventar über 180 Tage   | $1,36 Mio.      |
| Negativmargen-SKUs      | 74          |
| Lagerleerisiko-SKUs        | 128         |
| Top-Gewinnkanal        | Großhandel   |
| Leistungsschwächster Kanal | Marketplace |

Die Analyse identifizierte:

* 32 % des Inventarkapitals waren in langsam drehendem Bestand gebunden.
* 18 % des Umsatzes kamen aus Negativmargenprodukten.
* Ein Vertriebskanal erzielte hohen Umsatz, aber Beitragsmargen unter dem Zielwert.

Managementmaßnahmen:

* Einkäufe bei Niedrigmargen-SKUs reduzieren,
* überschüssiges Inventar liquidieren,
* profitable Kanäle priorisieren,
* Nachschubrichtlinien überarbeiten.

Entscheidungsauswirkung:

* verbesserter Inventarumschlag,
* reduziertes Betriebskapital-Exposure,
* erhöhte Transparenz der Betriebsrentabilität.

---

### Formelreferenz

<details>
<summary>Kosten-Engine</summary>

```excel
FIFO Cost
Weighted Average Cost
Inventory Valuation
COGS Allocation
```

</details>

<details>
<summary>Margen-Engine</summary>

```excel
Revenue
COGS
Gross Profit
Gross Margin %
Contribution Analysis
```

</details>

<details>
<summary>Inventaranalyse</summary>

```excel
Inventory Days
Turnover Ratio
ABC Classification
Aging Analysis
Safety Stock Indicators
```

</details>

---

### Validierungsregeln

| Feld            | Regel                  | Fehlerverhalten |
| ---------------- | --------------------- | -------------- |
| SKU              | Darf nicht leer sein       | Markiert       |
| Menge         | Muss numerisch sein       | Abgewiesen       |
| Kosten             | Muss positiv sein      | Markiert        |
| Transaktionsdatum | Gültiges Datum erforderlich   | Abgewiesen       |
| Kanal          | Muss im Mapping existieren | Markiert        |
| Inventarwert  | Darf nicht negativ sein    | Ausnahme      |
| Marge           | Außerhalb der Schwelle     | Warnung          |
| Inventartage   | Überschreitet Limit     | Ausnahme      |

</details>

---

## Weitere Tools dieser Serie

* **DTC-Inventarplanungs-Engine** — Entscheidungen zu Nachschub und Sicherheitsbestand.
* **Marketing-Budget-Allokationssimulator** — Optimierung der Budgetallokation.
* **Construction-Estimating-System** — Kostenschätzung und Angebotsanalyse.
* **Financial-Operations-Control-Workbook** — operative Finanztransparenz.

Weitere Tools verfügbar über GitHub-Releases und unsere [Website](https://www.theseusworkshop.com/).

---

## Lizenz

Dieses Projekt ist lizenziert unter der **Apache License 2.0**.

Siehe die LICENSE-Datei für Details.
