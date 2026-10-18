[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Cin7 Business Performance Analyzer

## Verander Cin7-exporten in voorraad-, winstgevendheids- en managementbeslissingen — met een gratis browserversie of een herbruikbaar Excel-werkboek.

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange.svg)

**Een herbruikbare operationele analyselaag die ruwe Cin7-exporten omzet in inzichten over voorraad, marge en bedrijfsprestaties — zonder software te installeren, een BI-stack te bouwen of bestaande workflows te herontwerpen.**

**Geen registratie. Geen installatie. Gratis in uw browser.**

Probeer de browserversie gratis. Als u de Excel-versie nodig heeft, kunt u die kopen met 30 dagen geld-terug-garantie, zonder vragen.
>
> 🌐 **Open in browser** → [*HTML-livedemo*](https://hyvoid.github.io/Cin7-Business-Performance-Analyzer/)
> 📥 **Download Excel** → *Excel-werkboekrelease*
>
> Beschikbaar in twee formaten:
>
> * Browserversie (HTML)
> * Excel-versie (.xlsx)

---

## Wat het helpt volgen

* Welke SKU's winst genereren en welke werkkapitaal verbruiken.
* Voorraadwaarde, omzettempo en verouderingsrisico in één operationeel overzicht.
* Omzet, kosten en winstgevendheidsbijdrage op kanaalniveau.
* Producten die de voorraad dreigen uit te putten versus producten die overtollige voorraad accumuleren.
* Bruto-margeprestaties per SKU, categorie en verkoopkanaal.
* Operationele uitzonderingen die managementingrijpen vereisen.

---

## Snelstartworkflow

### 1. Configureer operationele veronderstellingen eenmalig

Open het werkblad **Parameters** en definieer de belangrijkste bedrijfsveronderstellingen zoals:

* voorraadwaarderingsmethode,
* verouderingsdrempels,
* ABC-classificatieparameters,
* winstgevendheidsdrempels,
* uitzonderingswaarschuwingsregels.

Deze configuratie wordt doorgaans eenmalig uitgevoerd en herbruikt.

---

### 2. Importeer bestaande Cin7-exporten

Exporteer standaardrapporten direct uit Cin7 en plak ze in:

* `Import_Sales`
* `Import_Inventory`
* `Import_Purchases`

Geen databaseverbinding vereist.

Geen gegevensherstructurering vereist.

Gegevens kunnen ook worden gekopieerd uit boekhoudsystemen, ERP-exporten of bestaande spreadsheets.

---

### 3. Beoordel managementoutput direct

Navigeer naar:

* Voorraadanalyse
* Verkoopanalyse
* Uitzonderingsrapporten
* Executive Dashboard

Alle berekeningen, rangschikkingen, classificaties en waarschuwingen worden automatisch bijgewerkt.

Geen handmatige formules.

Geen draaitabellen opnieuw opbouwen.

Geen rapportonderhoud.

---

### 4. Vernieuw periodiek

Herhaal het exporteer-en-plakproces wekelijks, maandelijks of wanneer managementreviews plaatsvinden.

Het analytische kader blijft ongewijzigd.

De bedrijfsgegevens worden bijgewerkt.

---

**Stel een paar sleutelparameters in. Laat bestaande gegevens vallen. Krijg de analyse. Vernieuw wanneer nodig.**

---

## Waarom ik dit heb gebouwd

De meeste ERP-implementatieproblemen zijn in feite geen ERP-problemen.

In veel bedrijven die systemen zoals Cin7 gebruiken, bestaan voorraadtransacties, inkooptransacties, verkooptransacties en kostprijstransacties al. Het probleem is dat het management die transacties niet gemakkelijk kan omzetten in bedrijfsbeslissingen.

Typische managementvragen worden verrassend moeilijk:

* Welke SKU genereert werkelijk winst?
* Welke voorraad verbruikt kasstroom?
* Welk verkoopkanaal levert de hoogste marge?
* Welke producten creëren voorraaduitputtingsrisico?
* Verbetert of verslechtert de voorraadomzet?

De gebruikelijke oplossing is:

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

Dit creëert een verborgen analytisch falen:

> operationele gegevens bestaan, maar managementzichtbaarheid bestaat niet.

Bijvoorbeeld:

| Vooraf                                                              | Na                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| SKU A genereerde $250.000 omzet en leek een toppresteerder | SKU A genereerde slechts 8% bruto-marge en bond 28% van het voorraadkapitaal |
| Kanaal B vertoonde het hoogste verkoopvolume                           | Kanaal C produceerde de hoogste bijdrage-marge                        |
| De voorraad leek gezond                                          | 41% van de voorraadwaarde had zich 180 dagen niet bewogen                          |

Het doel van dit project was niet om nog een dashboard te bouwen.

Het doel was om het redeneerproces dat ervaren operateurs gebruiken bij het omzetten van ERP-transacties in bedrijfsbeslissingen te produceren, en dat proces reproduceerbaar te maken.

---

## ERP-analyseproblemen die dit oplost

| Probleem                           | Zonder dit hulpmiddel                            | Met dit hulpmiddel                                  |
| --------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| SKU-winstgevendheid onduidelijk         | Omzet wordt verward met winstgevendheid        | Ware SKU-margebijdrage wordt zichtbaar    |
| Voorraadkapitaal-blootstelling verborgen | Overtollige voorraad accumuleert onopgemerkt       | Voorraadwaarde en veroudering worden meetbaar     |
| Kanaalprestaties verkeerd begrepen | Omzetrangschikkingen sturen beslissingen             | Winstrangschikkingen sturen beslissingen                 |
| Voorraadomzet onbekend        | Voorraaduitputting en overvoorraad treden gelijktijdig op | Omzet en voorraadgezondheid worden meetbaar |
| Managementrapportage is handmatig    | Meerdere exporten en spreadsheets vereist   | Geautomatiseerde managementrapportage                  |
| Operationele uitzonderingen gemist     | Problemen ontdekt na financiële afsluiting    | Uitzonderingen onmiddellijk geïdentificeerd               |

---

## Voor wie dit is

Dit hulpmiddel is ontworpen voor:

* Cin7-operateurs en -beheerders.
* Voorraad- en supply chain-managers.
* Operationele managers.
* Financiële managers.
* Bedrijfseigenaren en CEO's.
* Voorraadintensieve groothandels, distributeurs en e-commercebedrijven.

Dit hulpmiddel is bijzonder nuttig wanneer:

* ERP-gegevens bestaan,
* rapportage bestaat,
* maar managementzichtbaarheid zwak blijft.

Dit hulpmiddel is **niet ontworpen voor**:

* vervangen van ERP-systemen,
* enterprise-BI-implementaties,
* datawarehouse-projecten,
* transactionele workflow-uitvoering.

**Geen spreadsheet-expertise vereist. Open de browserversie of gebruik het Excel-werkboek en begin onmiddellijk met analyseren.**

---

## Over

Ik bouw lichtgewicht operationele trackers en beslissingsondersteunende hulpmiddelen voor situaties waarin er simpelweg te veel bewegende delen zijn om ze allemaal betrouwbaar in uw hoofd te houden.

De vraag waarmee ik meestal begin, is:

> *Welke informatie moet op één plek bestaan zodat de volgende bedrijfsbeslissing met vertrouwen kan worden genomen?*

De **Cin7 Business Performance Analyzer** is één voorbeeld van die benadering: operationele transacties omzetten in herbruikbaar managementredeneren.

---

## Technische details

<details>
<summary>Voor technische reviewers, Excel-beoefenaars en medewerkers</summary>

---

### Werkboekarchitectuur

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

| Werkblad           | Functie             |
| ------------------- | -------------------- |
| Instructions        | Gebruikershandleiding        |
| Parameters          | Configuratie        |
| Import_Sales        | Verkoopimports        |
| Import_Inventory    | Voorraadimports    |
| Import_Purchases    | Inkoopimports     |
| Data_Cleaning       | Standaardisatie      |
| Cost_Engine         | Voorraadkosten    |
| Margin_Engine       | Winstgevendheidsengine |
| Inventory_Analytics | Voorraadanalyse   |
| Sales_Analytics     | Omzetanalyse     |
| Exception_Report    | Uitzonderingsdetectie  |
| Executive_Dashboard | Executive-rapportage  |

---

### Drie valkuilen die zelfs ervaren voorraadmanagers vangen

---

#### Valkuil 1 — Omzet wordt verward met winstgevendheid

Een inkoopbeslissing werd genomen.

De beslissing steunde op verkoopomzetrangschikkingen.

| SKU | Omzet  | Bruto-marge |
| --- | -------- | ------------ |
| A   | $500.000 | 8%           |
| B   | $300.000 | 42%          |

Het management verhoogde de inkopen van SKU A.

De redenering was onjuist omdat omzet niet gelijk is aan winstbijdrage.

De gecorrigeerde aanpak evalueert:

```text
Revenue
− Product Cost
− Channel Cost
− Inventory Carrying Cost
```

Resultaat:

SKU B wordt het voorkeursinvesteringsdoel.

<details>
<summary>Formulelogica</summary>

```excel
Gross Profit = Revenue - COGS

Gross Margin % =
Gross Profit / Revenue

Contribution Rank =
RANK(Gross Profit)
```

</details>

---

#### Valkuil 2 — Voorraadhoeveelheid wordt verward met voorraadrisico

Een aanvulbeslissing werd genomen.

De beslissing steunde op de voorraadhoeveelheid.

Echter:

| SKU | Eenheden | Waarde    | Dagen in voorraad |
| --- | ----- | -------- | ----------------- |
| A   | 500   | $8.000   | 20                |
| B   | 500   | $125.000 | 280               |

De redenering faalde omdat kapitaalblootstelling afhangt van voorraadwaarde en veroudering.

Juiste aanpak:

```text
Inventory Risk
=
Inventory Value
× Aging Factor
× Turnover Factor
```

Resultaat:

SKU B wordt de operationele prioriteit.

<details>
<summary>Formulelogica</summary>

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

#### Valkuil 3 — Kanaalomzet wordt verward met kanaalprestaties

Een marketingtoewijzingsbeslissing werd genomen.

| Kanaal   | Omzet  | Marge |
| --------- | -------- | ------ |
| Amazon    | $500.000 | 12%    |
| Groothandel | $350.000 | 33%    |

De aanbeveling bevoordeelde Amazon.

De redenering faalde omdat omzetrangschikkingen de bijdrage-economie negeerden.

Juiste aanpak:

```text
Net Contribution
=
Revenue
− Product Cost
− Channel Cost
− Operational Cost
```

Resultaat:

Groothandel werd het voorkeursgroeikanaal.

<details>
<summary>Formulelogica</summary>

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

### Voorbeeldscenario

Een distributeur exploiteert:

* 2.300 actieve SKU's
* 5 verkoopkanalen
* $4,2 mln. voorraadwaarde
* maandelijkse omzet van $1,1 mln.

Na import van Cin7-exporten:

| Metriek                    | Resultaat      |
| ------------------------- | ----------- |
| Voorraadwaarde           | $4,18 mln.      |
| Voorraad ouder dan 180 dagen   | $1,36 mln.      |
| Negatieve-marge-SKU's      | 74          |
| Voorraaduitputtingsrisico-SKU's        | 128         |
| Topwinstkanaal        | Groothandel   |
| Slechtst presterende kanaal | Marketplace |

De analyse identificeerde:

* 32% van het voorraadkapitaal zat vast in langzaam roterende voorraad.
* 18% van de omzet kwam uit producten met negatieve marge.
* Eén verkoopkanaal genereerde hoge omzet maar bijdrage-marges onder de doelstelling.

Managementacties:

* inkopen van laag-marge-SKU's verminderen,
* overtollige voorraad liquideren,
* winstgevende kanalen prioriteren,
* aanvulingsbeleid herzien.

Beslissingsimpact:

* verbeterde voorraadomzet,
* verminderde werkkapitaalblootstelling,
* verhoogde zichtbaarheid van operationele winstgevendheid.

---

### Formulereferentie

<details>
<summary>Kostenengine</summary>

```excel
FIFO Cost
Weighted Average Cost
Inventory Valuation
COGS Allocation
```

</details>

<details>
<summary>Margineengine</summary>

```excel
Revenue
COGS
Gross Profit
Gross Margin %
Contribution Analysis
```

</details>

<details>
<summary>Voorraadanalyse</summary>

```excel
Inventory Days
Turnover Ratio
ABC Classification
Aging Analysis
Safety Stock Indicators
```

</details>

---

### Validatieregels

| Veld            | Regel                  | Foutgedrag |
| ---------------- | --------------------- | -------------- |
| SKU              | Mag niet leeg zijn       | Gemarkeerd       |
| Hoeveelheid         | Moet numeriek zijn       | Afgewezen       |
| Kosten             | Moet positief zijn      | Gemarkeerd        |
| Transactiedatum | Geldige datum vereist   | Afgewezen       |
| Kanaal          | Moet bestaan in mapping | Gemarkeerd        |
| Voorraadwaarde  | Mag niet negatief zijn    | Uitzondering      |
| Marge           | Buiten drempel     | Waarschuwing          |
| Voorraaddagen   | Overschrijdt limiet     | Uitzondering      |

</details>

---

## Andere hulpmiddelen in deze serie

* **DTC-voorraadplanningengine** — beslissingen over aanvulling en veiligheidsvoorraad.
* **Marketingbudgettoewijzingssimulator** — optimalisatie van budgettoewijzing.
* **Construction Estimating-systeem** — kostenschatting en offerte-analyse.
* **Financial Operations Control-werkboek** — operationele financiële zichtbaarheid.

Meer hulpmiddelen beschikbaar via GitHub-releases en onze [website](https://www.theseusworkshop.com/).

---

## Licentie

Dit project is gelicentieerd onder de **Apache License 2.0**.

Zie het LICENSE-bestand voor details.
