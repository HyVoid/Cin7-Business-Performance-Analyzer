[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Cin7 Business Performance Analyzer: Excel-rapportagesjabloon & winstgevendheidsdashboard voor voorraad voor Cin7 Core (DEAR) & Omni
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/2e8d2054-0ff2-46b5-9716-405840fa0be8" />


> **Productsamenvatting:** **Cin7 Business Performance Analyzer** is een lichtgewicht **Excel-rapportagesjabloon** en **dashboard voor voorraadwinstgevendheid**, gebouwd voor gebruikers van **Cin7 Core (voorheen DEAR Inventory)** en **Cin7 Omni**. Het zet ruwe **Cin7 CSV-exporten** (verkooporders, voorhanden voorraad en inkoopontvangsten) om in een geautomatiseerde **SKU-brutomargecalculator**, **werkkapitaaltracker** en **audit van de kostprijsafwijking op inkooporders (PO)**, zonder externe BI-software uit te rollen.

Bedrijven die met **Cin7 Core** of **Cin7 Omni** werken, leggen gedetailleerde transactiegegevens vast, maar native ERP-exporten houden verkoopprestaties, magazijnvoorraadniveaus en leveranciersprijzen in afzonderlijke silo's. **Cin7 Business Performance Analyzer** overbrugt die kloof als een gestructureerde **ERP-beslissingsondersteuningstoolkit**. Door ruwe CSV-gegevens te standaardiseren tot één **Excel-analysewerkboek** kunnen operationele en financiële teams de **landed Cost of Goods Sold (COGS)** reconciliëren, de **niet-toegewezen Available-to-Promise (ATP)-voorraad** isoleren en operationele uitzonderingen binnen enkele minuten markeren.

Het rapportagesjabloon beantwoordt vijf terugkerende commerciële en voorraadbeheervragen:

- **Winstgevendheid op SKU-niveau & brutomargeanalyse:** welke producten genereren een positieve brutowinst nadat de verkoopomzet is afgezet tegen de gewogen gemiddelde of laatst vastgelegde inkoopkosten?
- **Nettowinstbijdrage per verkoopkanaal & kostenmodellering:** welke e-commerce marketplaces, B2B-groothandelsportals of POS-kanalen leveren werkelijk netto marge op na aftrek van configureerbare platformkostenvergoedingen?
- **Werkkapitaal & blootstelling aan dode voorraad:** hoeveel geld zit vast in de voorhanden magazijnvoorraad (SOH), en welke SKU's classificeren als overvoorraad, langzaam roterende dode voorraad of snel bewegend voorraaduitputtingsrisico?
- **Leveranciersprijsstijging & PO-afwijking:** bij welke artikelen zijn de eenheidskosten op recente inkoopontvangsten materieel gestegen ten opzichte van de historische gewogen gemiddelde kosten?
- **Geprioriteerd uitzonderingsmanagement:** welke SKU's met negatieve marge, aanvullingsknelpunten en kostenpieken vereisen onmiddellijk ingrijpen op prijs of inkoop?

Ruwe Cin7-exporten komen binnen via speciale plak-waarden-invoerbladen (`Import_Sales`, `Import_Inventory`, `Import_Purchases`). Geautomatiseerde berekeningslagen schonen SKU-identificatoren op, consolideren de voorraad over meerdere magazijnen, berekenen de winstgevendheid van verkoopregels en vullen een **Executive KPI Dashboard** aan naast een actiegericht **Exception Report**. Deze workflow vormt een aanvulling op uw bestaande Cin7 ERP-omgeving en laat de onderliggende boekhoudkundige grootboeken, belastingadministratie en live orderafhandeling onaangetast.

> ### Probeer de Cin7-analysetoolkit: interactieve webdemo of herbruikbaar Excel-sjabloon
>
> Beoordeel de rapportagestructuur direct in uw browser, of download het volledige `.xlsx`-sjabloon voor terugkerende maandelijkse analyses:
>
> - 🌐 **[Start de interactieve Cin7-analysewebdemo (gratis browserpreview — zonder installatie)](https://hyvoid.github.io/cin7-excel-reporting-template/)** — Bekijk voorbeeldtabellen met SKU-winstgevendheid, ABC-voorraadclassificaties en uitzonderingsvlaggen direct in uw browser, zonder registratie.
> - 📥 **[Download het Cin7 Excel-rapportagesjabloon (.xlsx-werkboek voor terugkerende analyses & offline audits)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)** — Ontvang het volledige Excel-werkboek met dynamische arrays om uw eigen Cin7 CSV-bestanden te importeren, bedrijfsdrempels aan te passen en historische operationele gegevens bij te houden.
>
> *Commerciële zekerheid: waar het downloadbare `.xlsx` Excel-werkboek als betaalde licentie wordt aangeboden, wordt elke aankoop gedekt door een geld-terug-garantie van 30 dagen, zonder vragen.*
>

---

## Wat het u helpt bijhouden: Cin7-marge, voorraadwaardering & PO-kostprijsmetrics

In plaats van losgekoppelde ERP-spreadsheets handmatig aan elkaar te knopen met breekbare zoekformules, gebruikt u deze gestructureerde mapping om zes kernoperationele dimensies te volgen:

| Volgdimensie & zoekfocus | Operationeel knelpunt in native Cin7-exporten | Hoe de analyzer het oplost (metrics & output) |
| :--- | :--- | :--- |
| **Winstgevendheid op SKU-niveau & brutomargeanalyse** | Native Cin7-verkoopexporten rangschikken producten op omzet, waarbij vaak hoogvolume-SKU's verborgen blijven die tegen negatieve of flinterdunne marges verkopen zodra de werkelijke inkoopkosten worden toegepast. | Zet de omzet per orderregel af tegen de geschatte **kosten van verkochte goederen (COGS)** om de exacte **brutowinst ($)** en **brutomarge (%)** per SKU te berekenen ten opzichte van uw doeldrempel. |
| **Nettowinstbijdrage per kanaal & kostenmodellering** | Het vergelijken van Shopify DTC, Amazon Marketplace en B2B-groothandelsomzet op nominale waarde negeert verwijzingskosten, betalingsverwerking en commissiestructuren. | Past per verkoopkanaal een configureerbare **kanaalvergoeding voor platformkosten (%)** toe en rangschikt kanalen op **netto winstbijdrage**, zodat teams zien waar werkelijk geld wordt gegenereerd. |
| **Voorhanden voorraad (SOH) over meerdere magazijnen & ATP-isolatie** | Magazijnmomentopnames tonen het totale aantal fysieke eenheden in voorraad, waardoor verkoopteams voorraad toezeggen die al aan openstaande klantorders is toegewezen. | Consolideert de voorraad over meerdere locaties en scheidt daarbij **Fysieke Voorraad** van **Toegewezen Voorraad**, waardoor de werkelijke **niet-toegewezen Available-to-Promise (ATP)**-eenheden en het vastgezette kapitaal zichtbaar worden. |
| **Voorraadgezondheid, omloopsnelheid & ABC-classificatie** | Hoogwaardige langzaam roterende artikelen en dreigende voorraaduitputting blijven verborgen tussen duizenden magazijnrijen totdat de kasstroom krapper wordt of bestsellers niet meer leverbaar zijn. | Berekent automatisch **Days of Supply (DOS)**, **voorraadomloopdagen** en **ABC-waardeklassen (A/B/C)** om elke SKU te categoriseren als Gezond, Langzaam Roterend, Overvoorraad of Voorraaduitputtingsrisico. |
| **Kostenafwijking op inkooporders (PO) & leveranciersprijsstijging** | Incrementele leveranciersprijsverhogingen zitten verstopt in afzonderlijke regels van inkoopontvangsten en hollen productmarges wekenlang uit voordat finance de afwijking bij maandafsluitingen opmerkt. | Toetst de **gewogen gemiddelde kostprijs (WAC)** van elke SKU aan de **laatst vastgelegde inkoopprijs** en markeert elke eenheidskostenpiek die uw geconfigureerde afwijkingstolerantie overschrijdt. |
| **Geautomatiseerde triage via management by exception** | Operationeel analisten besteden uren aan het filteren van CSV-dumps over drie modules om een wekelijkse agenda voor inkoop- en prijsvergaderingen op te bouwen. | Aggregeert negatieve marges, margetekorten, kostenpieken en voorraadwaarschuwingen tot één geprioriteerd **Exception Report** met ernstrangschikkingen en aanbevolen corrigerende acties. |

---

## Cin7 CSV-exporten analyseren in Excel: 4-staps snelstarttutorial

Volg deze vierstaps werkcyclus om ruwe Cin7-gegevens om te zetten in een managementreview. Configureer uw financiële regels eenmaal, plak uw nieuwste CSV-exporten, controleer de geautomatiseerde dashboards en herhaal dit wekelijks of maandelijks.

### Stap 1: Configureer financiële drempels, valutakoersen & ABC-voorraadregels
Open het tabblad `Parameters` om de commerciële uitgangspunten vast te leggen die uw werkboek sturen. Stel uw basisvalutasymbool in, de **USD- en EUR-wisselkoersen**, het analysedatumbereik (dagen), de minimale **brutomargedrempel (%)**, de **Days of Supply (DOS)**-limieten voor voorraaduitputting en overvoorraad, de **ABC Pareto-classificatiegrenzen**, de **waarschuwingsdrempel voor inkoopkostenafwijking (%)**, de kanaalkostenvergoedingen en de brutowinstbudgetdoelstelling voor de periode. Werk deze parameters bij zodra wisselkoersen of het marginebeleid van uw bedrijf wijzigen.

### Stap 2: Importeer ruwe Cin7-exporten van verkoop, voorhanden voorraad (SOH) & inkooporders
Exporteer uw standaard transactierapporten vanuit **Cin7 Core** of **Cin7 Omni** naar CSV-formaat en gebruik **Waarden plakken** om de records in de drie speciale ruwe-invoertabbladen te laden:

- `Import_Sales`: plak de verkoophistorie per orderregel (SKU, kanaal, verkochte hoeveelheid, omzet per regel, valuta).
- `Import_Inventory`: plak de huidige magazijnvoorraadmomentopnames (SKU, magazijnlocatie, fysieke hoeveelheid in voorraad, toegewezen hoeveelheid).
- `Import_Purchases`: plak historische inkoopontvangsten en leveranciersfactuurregels (SKU, ontvangstdatum, ontvangen hoeveelheid, inkoopprijs per eenheid, valuta).

Door ruwe CSV-invoer gescheiden te houden van de downstream formulebladen voorkomt u dat formules per ongeluk worden overschreven tijdens routinematige wekelijkse gegevensverversingen.

### Stap 3: Controleer het Executive KPI-dashboard, de kanaalmarges & de uitzonderingsvlaggen
Zorg ervoor dat de Excel-berekeningsmodus op **Automatisch** staat, zodat de dynamische-arrayengine alle analytische tabellen bijwerkt:

1. Open `Executive_Dashboard` voor een geconsolideerde samenvatting op directieniveau van de totale omzet, geschatte COGS, brutowinst, brutomarge %, budgetrealisatie, totale voorraadwaardering, voorraadomloopdagen, vastgezet werkkapitaal en uw **Top 5 winstbijdragende SKU's**.
2. Doorloop `Exception_Report` om gemarkeerde SKU's te triëren die onmiddellijk een prijsverhoging, heronderhandeling met leveranciers of voorraadliquidatie vereisen.
3. Duik in `Sales_Analytics` voor uitsplitsingen van de bijdrage per SKU en kanaal, `Inventory_Analytics` voor ABC/DOS-voorraadgezondheidsmatrices en `Data_Cleaning` om stamdata-afwijkingen op te lossen (zoals niet-gekoppelde SKU's of ontbrekende kostprijsrecords).

### Stap 4: Van browsertesten naar terugkerende maandelijkse reviews in Excel
Hoewel de **[interactieve browserpreview](https://hyvoid.github.io/cin7-excel-reporting-template/)** u in één sessie de analytische lay-out laat bekijken, vereisen doorlopende voorraadbeheersing en financiële reconciliatie blijvende lokale gegevens.

Om deze workflow elke week of maand op uw eigen bedrijfsgegevens uit te voeren, **[downloadt u het herbruikbare Cin7 Excel-rapportagesjabloon (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**. Met het zelfstandige Excel-werkboek kan uw team maandelijkse momentopnamen archiveren voor maand-op-maandmargetracking, drempelparameters offline aanpassen en auditklare `.xlsx`-bestanden distribueren over inkoop, magazijn en directie.

---

## De bedrijfslogica & methodologie

Standaard ERP-rapporten schieten tekort voor besluitvormers omdat ze operationele logboeken presenteren (wat er in één module gebeurde) in plaats van relationele unit economics (hoe inkoopkosten, magazijnsnelheid en kanaaltarieven elkaar beïnvloeden). **Cin7 Business Performance Analyzer** past zes kwantitatieve methoden toe om specifieke commerciële problemen op te lossen:

### 1. Relationele SKU-normalisatie & drievoudige gegevenskoppeling
- **Commercieel probleem:** In Cin7-exporten bevatten SKU-codes vaak volgspaties, verschillen in hoofdlettergebruik of verweesde transacties (bijv. een product dat in `Import_Sales` is verkocht maar geen bijbehorende ontvangst in `Import_Purchases` of voorraadrecord in `Import_Inventory` heeft).
- **Analytische methode:** De laag `Data_Cleaning` verwijdert opmaakruis (`TRIM`/`UPPER`-normalisatie) en voert een drievoudige relationele validatie uit over de verkoop-, voorraad- en inkooptabellen. Ze markeert expliciet verkoopregels zonder kostprijs en afwijkingen met prijs nul, zodat brutowinsttotalen nooit kunstmatig worden opgeblazen door ontbrekende kostprijsinvoer.

### 2. Dubbele waardering van COGS & inkoopprijsafwijking (WAC vs. laatste kostprijs)
- **Commercieel probleem:** Uitsluitend vertrouwen op de historische gewogen gemiddelde kostprijs (WAC) verhult recente leveranciersprijsverhogingen in inflatoire periodes, waardoor verkoopteams verlengingsorders te laag prijzen.
- **Analytische methode:** De toolkit berekent zowel de historische **gewogen gemiddelde inkoopkostprijs** ($\sum \text{Totale PO-uitgaven} / \sum \text{Totaal Ontvangen Eenheden}$) als de **laatst chronologische eenheidsinkoopkostprijs** per SKU, gestandaardiseerd naar uw basisrapportagevaluta. Door de procentuele spreiding te meten ($\frac{\text{Laatste Kostprijs} - \text{WAC}}{\text{WAC}}$) isoleert het model vooruitkijkende margeverkrapping voordat oude voorraadbatches zijn uitverkocht.

### 3. Kostengecorrigeerde kanaalbijdragemodellering
- **Commercieel probleem:** E-commerce- en omnichannelmerken schalen de omzet op marketplaces van derden vaak op, terwijl ze netto geld verliezen zodra platformcommissies en transactiekosten zijn afgetrokken.
- **Analytische methode:** Naast de brutowinst ($\text{Omzet} - \text{Geschatte COGS}$) trekt de engine `Sales_Analytics` een configureerbare **platformkostenvergoeding** af die specifiek is voor elk verkoopkanaal. Dit benadert de **dekkingsbijdrage niveau 2 (CM2)**, waardoor het management hoogmarge B2B-groothandelsorders direct kan vergelijken met marketplacevolume met hoge kosten.

### 4. Available-to-Promise (ATP)-isolatie versus fysieke voorhanden voorraad
- **Commercieel probleem:** Fysieke magazijntellingen als verkoopbare voorraad behandelen leidt tot dubbele toewijzing, backorders en verstoorde werkkapitaalratio's. Als een magazijn bijvoorbeeld 100 fysieke eenheden heeft maar 80 eenheden zijn toegewezen aan openstaande verkooporders, blijven er vóór aftrek van veiligheidsvoorraad nog slechts 20 eenheden vrij beschikbaar.
- **Analytische methode:** Voorraadrecords over meerdere magazijnen worden per SKU geaggregeerd, waarbij **Fysieke Voorraad** strikt wordt gescheiden van **Toegewezen Voorraad** ($\text{Niet-toegewezen Voorraad} = \max(0, \text{Fysieke SOH} - \text{Toegewezen Eenheden})$). De waardering van het werkkapitaal wordt vervolgens berekend over zowel de totale fysieke voorraad als de vastgezette langzaam roterende voorraad.

### 5. Samengestelde ABC Pareto-waardering & Days of Supply (DOS)-matrix
- **Commercieel probleem:** Magazijnmanagers kunnen niet alle SKU's gelijk behandelen; over de hele linie voorraad afschalen laat hoogmarge bestsellers verhongeren terwijl dode voorraad onaangeroerd blijft.
- **Analytische methode:** Het model combineert de **ABC Pareto-waardeclassificatie** (SKU's rangschikken op cumulatieve bijdrage aan de voorraadwaarde, doorgaans A = top 70–80%, B = volgende 15–20%, C = onderste 5–10%) met de **dagelijkse verkoopsnelheid** ($\text{Verkochte Eenheden} / \text{Dagen in Analyseperiode}$) om **Days of Supply** af te leiden ($\text{DOS} = \text{Niet-toegewezen Voorraad} / \text{Dagelijkse Snelheid}$). Door ABC-klassen te kruisen met DOS-drempels worden automatisch dode voorraad met veel kapitaal (`Klasse A + Overvoorraad/Langzaam Roterend`) en urgente aanvullingsprioriteiten (`Klasse A + Lage DOS`) aangewezen.

### 6. Regelgebaseerde triage via management by exception
- **Commercieel probleem:** Het handmatig doornemen van 5.000+ SKU-rijen per week veroorzaakt beslissingsmoeheid en gemiste operationele risico's.
- **Analytische methode:** Het `Exception_Report` gebruikt deterministische booleaanse logica om elke actieve SKU te toetsen aan uw drempels in `Parameters`. Alleen SKU's die een of meer commerciële regels overtreden (Negatieve Marge, Onder Doelmarge, Voorraaduitputtingsrisico, Kapitaalval door Overvoorraad of Materiële Kostenpiek) verschijnen in de uitzonderingswachtrij, vergezeld van een berekende prioriteitsklasse (`High`, `Medium`, `Low`) en een voorgeschreven operationele actie.

---

## Waarom ik dit Cin7-analytische raamwerk heb gebouwd

Een ERP-systeem is uitstekend in het vastleggen van transacties, het afdwingen van orderworkflows en het onderhouden van audittrails. Operationele transactielogboeken vertalen zich echter zelden rechtstreeks naar commerciële helderheid.

In dagelijkse groothandels-, productie- en e-commerceoperaties schaden drie blinde vlekken de kasstroom keer op keer:
1. Een SKU staat in omzetrapporten te boek als topseller, terwijl de landed inkoopkostprijs vrijwel geen brutowinst overlaat.
2. Een magazijnrapport toont ruim voldoende voorraad, terwijl 80% van die eenheden al is toegewezen aan openstaande groothandelsorders — waardoor het team bij nieuwe toezeggingen onmiddellijk met voorraaduitputting te maken krijgt.
3. Een leverancier verhoogt stilletjes de eenheidsprijzen met 14% op de laatste inkooporder, en die verhoging blijft verborgen in ontvangstlogboeken totdat de kwartaalmarges dalen.

Ik heb **Cin7 Business Performance Analyzer** gebouwd om die drie datasets met elkaar te verbinden binnen een transparant, herhaalbaar Excel-raamwerk. Elke formule, kostenveronderstelling en drempelparameter blijft zichtbaar en controleerbaar voor uw team. Wanneer het werkboek een uitzonderingswaarschuwing activeert, dient die als een gestructureerde aansporing voor uw inkopers, planners of pricingmanagers om het onderliggende Cin7-record te onderzoeken en met bewijs te handelen.

---

## Veelvoorkomende Cin7 ERP-rapportageknelpunten versus geautomatiseerde Excel-analyse

| Knelpunt in de Cin7 ERP-rapportage | Beperkingen van handmatige CSV-export & native rapporten (zonder dit hulpmiddel) | Geautomatiseerd Excel-sjabloon & SKU-reconciliatie (met dit hulpmiddel) |
| :--- | :--- | :--- |
| **Losgekoppelde verkoop-, SOH- & PO-exporten** | Analisten downloaden afzonderlijke verkoop-, voorraad- en inkoop-CSV's en besteden uren aan het schrijven van breekbare `VLOOKUP`- of `XLOOKUP`-formules die elke maand stukgaan. | Eén uniforme plak-waarden-workflow neemt alle drie de Cin7-exporten op en reconcileert de metrics automatisch over een gestandaardiseerde SKU-stamlijst. |
| **Omzetillusie & verborgen negatieve marges** | Rapporten over de bovenste omzetlijn vieren hoogvolume-SKU's, terwijl ze verhullen welke artikelen onder de vervangingskostprijs of onder de brutomargedrempels worden verkocht. | Verkoopomzet per regel, geschatte eenheids-COGS, brutowinst ($) en brutomarge (%) worden naast elkaar gecontroleerd tegen configureerbare winstgevendheidsdoelen. |
| **Overschatte magazijnbeschikbaarheid (SOH vs. ATP)** | Teams verwarren de totale fysieke magazijnvoorraad met verkoopbare voorraad, wat leidt tot oververkoop en backorders op reeds toegewezen voorraad. | Fysieke voorraad en toegewezen orderhoeveelheden worden afzonderlijk geconsolideerd over alle magazijnen, waardoor de werkelijke **Niet-toegewezen Voorraad** voor nieuwe orders wordt geïsoleerd. |
| **Werkkapitaal vastgezet in dode voorraad** | Dure SKU's zonder omloopsnelheid blijven onopgemerkt in magazijnlijsten over meerdere locaties, wat de kasstroom draineert en de voorraadkosten opdrijft. | Geautomatiseerde **Voorraadwaardering ($)**, **Days of Supply (DOS)**, **Omloopdagen** en **ABC-classificaties** isoleren langzaam roterende en overtollige kapitaalvallen. |
| **Onopgemerkte leveranciersprijsstijging (PO-afwijking)** | Het vergelijken van de laatste factuurprijs van een leverancier met de historische gemiddelde kostprijs vereist handmatige inspectie van eerdere inkoopontvangsten, regel voor regel. | Geautomatiseerde afwijkingsberekeningen toetsen de **gewogen gemiddelde kostprijs (WAC)** aan de **laatst vastgelegde PO-kostprijs** en markeren materiële kostenpieken onmiddellijk. |
| **Ongecontroleerde ERP-gegevensdumps & analyseverlamming** | Managers filteren elke maandag handmatig duizenden spreadsheetrijen om te bepalen welke prijs- of inkoopbranden als eerste moeten worden geblust. | Een geconsolideerd **Exception Report** groepeert margetekorten, voorraaduitputtingswaarschuwingen en PO-kostenafwijkingen met prioriteitsrangschikkingen en aanbevolen acties. |

---

## Voor wie dit is: rolspecifieke Cin7-rapportageworkflows & gebruiksscenario's

Deze toolkit is ontwikkeld voor specifieke operationele rollen die op zoek zijn naar een herhaalbaar **Cin7-rapportagesjabloon** of een **voorraadmargecalculator**:

- **MKB-eigenaren, oprichters & parttime CFO's (`Cin7 Executive KPI & werkkapitaaldashboard`):**
  - *Operationeel gebruiksscenario:* maandelijkse financiële reviews uitvoeren, de realisatie van het brutowinstbudget bewaken, het totale bedrag aan geld controleren dat vastzit in langzaam roterende voorraad en de top 5 winstdrijvende SKU's identificeren zonder te wachten op maatwerk BI-ontwikkeling.
- **Voorraadplanners & operationeel magazijnmanagers (`Cin7-sjabloon voor voorraadgezondheid, ABC & aanvulling`):**
  - *Operationeel gebruiksscenario:* de **voorhanden voorraad (SOH)** over meerdere magazijnen controleren versus de **toegewezen voorraad**, **Days of Supply (DOS)** berekenen, voorraaduitputting op bestsellers van klasse A voorkomen en liquidatielijsten opbouwen voor verouderde overvoorraad.
- **Inkoop- & purchasingmanagers (`Cin7-werkblad voor PO-kostenafwijking & leveranciersaudit`):**
  - *Operationeel gebruiksscenario:* inkoopontvangsten in meerdere valuta's (USD, EUR, basisvaluta) volgen, inflatie van de leverancierseenheidskosten opsporen (`Laatste PO-prijs vs. WAC`) en onderbouwde prijsheronderhandelingen met leveranciers voorbereiden.
- **E-commerce- & multichannel-verkoopmanagers (`Cin7-calculator voor kanaalwinstgevendheid & SKU-marge`):**
  - *Operationeel gebruiksscenario:* de werkelijke unit economics van producten vergelijken over Shopify, Amazon, eBay en B2B-groothandelsportals na verwerking van kanaalkostenvergoedingen, en SKU's met negatieve marge uit actieve catalogi verwijderen.
- **ERP-bedrijfsanalisten & operationeel consultants (`Cin7-werkboek voor CSV-gegevensopruiming & reconciliatie`):**
  - *Operationeel gebruiksscenario:* ad-hoc spreadsheetgeworstel vervangen door een gestandaardiseerd, foutgecontroleerd Excel-sjabloon dat vervuilde SKU-exporten schoonmaakt en in minder dan 15 minuten directieklare uitzonderingsrapporten oplevert.

### Voor wie deze toolkit niet is ontworpen
Om de verwachtingen vóór het downloaden correct te stellen: dit werkboek is **niet** bedoeld voor:
- **Bedrijven die een volledige ERP-vervanging zoeken:** dit is een analytische aanvullingslaag voor bestaande Cin7 Core / Cin7 Omni-gegevens, geen transactioneel orderbeheer- of magazijnuitvoeringssysteem.
- **Teams die live API-streaming nodig hebben:** de workflow werkt met periodieke CSV-/Excel-exporten (wekelijks, tweewekelijks of maandelijks) in plaats van realtime webhooksynchronisatie.
- **Wettelijke GAAP/IFRS-controles van het grootboek:** de winstcijfers zijn operationele schattingen op basis van vastgelegde inkoopontvangsten en configureerbare kanaalkostenvergoedingen; ze vervangen geen volledige reconciliatie van de landed-cost-boekhouding met vrachtbrieven, invoerrechten, belastingteruggaven, klantretouren en toerekening van magazijnkosten.
- **Geautomatiseerde PO-uitvoering:** de toolkit markeert voorraaduitputtingsrisico's en kostenuitzonderingen voor menselijke beoordeling; zij verstuurt niet automatisch inkooporders naar leveranciers.

---

## Wanneer u deze Cin7-analyzer gebruikt: operationele scenario's met grote impact

Teams zetten de **Cin7 Business Performance Analyzer** doorgaans in tijdens vier terugkerende bedrijfsworkflows:

1. **Wekelijkse Sales & Operations Planning (S&OP)-vergaderingen:** importeer elke maandagochtend de afgelopen 30 of 90 dagen aan Cin7-exporten om inkoop, magazijn en verkoop rond één `Exception_Report` op één lijn te brengen.
2. **Kosten- & margeaudits bij leveranciers vóór herbestelling:** controleer vóór goedkeuring van een grote aanvullingsinkooporder in Cin7 of recente leveranciersprijsverhogingen de geprojecteerde brutomarge van de SKU onder uw bedrijfsdrempel hebben geduwd.
3. **Driemaandelijkse liquidatie van dode voorraad & SKU-rationalisatie:** filter `Inventory_Analytics` op de markeringen `Overstock` en `Slow-Moving` om de exacte bedragen te identificeren die vastzitten in stagnerende SKU's, en maak werkkapitaal vrij via gerichte opruimingsacties.
4. **Jaarlijkse prijslijstresets & reviews van marketplacetarieven:** pas de parameters `Channel_Fee_Allowance` en de wisselkoersen aan om te testen hoe commissieverhogingen op marketplaces of valutaschommelingen uw SKU-winstegevendheid op de bottom line beïnvloeden.

> **Technische vereisten & opmerking over gegevenskwaliteit:** er is geen geavanceerde kennis van Excel-macro's of VBA vereist. De browserpreview draait direct online en het `.xlsx`-werkboek vereist alleen standaard Microsoft Excel (met ondersteuning voor dynamische-arrayfuncties) en basiskennis van het exporteren van CSV-bestanden uit Cin7 en het plakken van waarden. De nauwkeurigheid van de uitvoer hangt rechtstreeks af van de volledigheid van uw Cin7-bronexporten en van de geldigheid van uw geconfigureerde wisselkoersen en drempelaannames.

---

## Over de maker

Ik ontwerp lichtgewicht, beslissingsgerichte analytische hulpmiddelen voor groothandels-, productie- en e-commerceoperatoren die het zat zijn om te verdrinken in losgekoppelde ERP-spreadsheets. Elke toolkit is opgebouwd rond één sturende vraag: **welke exacte operationele cijfers moeten bij elkaar worden gebracht zodat het management de volgende inkoop-, prijs- of voorraadbeslissing met vertrouwen kan nemen?**

De **Cin7 Business Performance Analyzer** past deze methodologie toe op SKU-winstgevendheid, werkkapitaalblootstelling en beheersing van leverancierskosten — zodat uw team onmiddellijk inzicht krijgt uit de Cin7-gegevens die u al bezit.

- 🌐 **[Bekijk de Cin7-webanalyzer in uw browser](https://hyvoid.github.io/cin7-excel-reporting-template/)**
- 📥 **[Ontvang het volledige herbruikbare Excel-werkboek (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**


---

## Technische details

<details>
<summary>Voor technische reviewers, Excel-beoefenaars en medewerkers</summary>


### Werkboekarchitectuur

Het werkblad is ontworpen als een eenrichtingsdatapijplijn met vijf functionele lagen en 12 werkbladen. Ruwe invoer is gescheiden van berekeningen, analytische uitvoer en managementrapportage, om onbedoeld overschrijven te verminderen en het berekeningspad makkelijker inspecteerbaar te maken.

| Laag | Werkblad | Primaire verantwoordelijkheid | Belangrijkste uitvoer |
|---|---|---|---|
| Navigatie | `Instructions` | Legt de werkboekstructuur, de werkvolgorde en de invoer-/uitvoerconventies uit | Gebruiksrichtlijnen |
| Configuratie | `Parameters` | Centraliseert valutainstellingen, wisselkoersen, analyseperiodes, margedrempels, voorraaddrempels, ABC-classificatiegrenzen, kostenafwijkingsdrempels en budgetdoelstellingen | Gedeelde bedrijfsuitgangspunten |
| Ruwe gegevens | `Import_Sales` | Bevat geëxporteerde verkooptransactieregels | Verkoophoeveelheden, prijzen, kortingen, valuta's, kanalen en SKU-identificatoren |
| Ruwe gegevens | `Import_Inventory` | Bevat een voorraadmomentopname | Fysieke voorraad, gereserveerde voorraad, inkomende voorraad, productattributen en referentie-eenheidskosten |
| Ruwe gegevens | `Import_Purchases` | Bevat details van inkoopontvangsten | Ontvangen hoeveelheden, inkoopprijzen, leveranciers, datums en valuta's |
| Gegevensvoorbereiding | `Data_Cleaning` | Standaardiseert SKU-identificatoren en consolideert voorraadrecords over magazijnen | Canonieke SKU-lijst, geconsolideerde voorraadhoeveelheden, stamdatastatus |
| Kostenengine | `Cost_Engine` | Zet inkoopbedragen om naar de basisvaluta en berekent inkoopkostenbenchmarks | Gewogen gemiddelde inkoopkostprijs, goedgekeurde standaardeenheidskostprijs, laatste inkoopkostprijs, kostenafwijking |
| Margineengine | `Margin_Engine` | Normaliseert verkooprecords, zet nettoverkoop om naar de basisvaluta, koppelt kosten en berekent de winstgevendheid per regel | Netto-omzet, kosten van verkochte goederen (COGS), brutowinst, brutomarge |
| Voorraadanalyse | `Inventory_Analytics` | Evalueert beschikbare voorraad, voorraadwaarde, verkoopsnelheid, voorraaddekking, omloopsnelheid, ABC-classificatie en voorraadgezondheid | Voorraadblootstelling en signalen voor aanvulling of overvoorraad |
| Verkoopanalyse | `Sales_Analytics` | Aggregeert de winstgevendheid per SKU en verkoopkanaal | SKU-margerangschikkingen, winstgevendheidsbeoordelingen, kanaalbijdrage |
| Uitzonderingsbewaking | `Exception_Report` | Consolideert uitzonderingen op winst, voorraad en inkoopkosten | Risicoclassificatie, blootstellingsramingen, aanbevolen acties |
| Managementrapportage | `Executive_Dashboard` | Vat de prestaties op bedrijfsniveau en de prioriteitsitems samen | Omzet, COGS, brutowinst, brutomarge, budgetrealisatie, voorraadwaarde, risicoblootstelling en Top 5 winstbijdragende SKU's |

### Gegevensstroom

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

De beoogde richting loopt van brongegevens naar berekende uitvoer. Gebruikers onderhouden de ruwe exporten en de bedrijfsparameters; de downstream werkbladen leiden hun resultaten af van die invoer.

De werkboekspecificatie gebruikt moderne dynamische-arrayfuncties van Excel, waaronder `UNIQUE`, `FILTER`, `SORT`, `SORTBY`, `XLOOKUP`, `SUMIFS`, `LET`, `SCAN`, `MAP` en `LAMBDA`. Door formules gegenereerde bereiken zijn ontworpen om automatisch uit te breiden wanneer het aantal bronrecords of afzonderlijke SKU's toeneemt, afhankelijk van de Excel-compatibiliteit en de beschikbare ruimte op het werkblad.

### Invoer- en uitvoercontract

#### Globale parameters

Het werkblad `Parameters` biedt een gecentraliseerd configuratiegebied. De specificatie plaatst 14 bedrijfsparameters in `C4:C17`.

| Cel | Parameter | Voorbeeldstandaard | Doel |
|---|---|---:|---|
| `C4` | Symbool van de basisvaluta | Door gebruiker gedefinieerd | Stuurt valutalabels en weergaveconventies |
| `C5` | Wisselkoers USD naar basisvaluta | `1.0000` | Converteert transacties in USD |
| `C6` | Wisselkoers EUR naar basisvaluta | `1.0800` | Converteert transacties in EUR |
| `C7` | Analyseperiode in dagen | `90` | Stelt de observatieperiode voor verkoop in |
| `C8` | Doel-brutomargebenchmark | `35%` | Bepaalt het beoogde winstgevendheidsniveau |
| `C9` | Minimaal aanvaardbare brutomarge | `10%` | Identificeert producten met een lage marge |
| `C10` | Kanaaltarief voor platformkosten | `5%` | Schat de kanaalbijdrage na het geconfigureerde tarief |
| `C11` | Waarschuwingsdrempel voor lage voorraad | `15` dagen | Markeert voorraad met een beperkte voorraaddekking |
| `C12` | Overvoorraaddrempel | `90` dagen | Markeert voorraad met een excessieve voorraaddekking |
| `C13` | Verkoopdrempel voor langzaam roterende voorraad | `0` eenheden | Helpt voorraad-SKU's met onvoldoende waargenomen verkoop te identificeren |
| `C14` | ABC cumulatieve waardedrempel klasse A | `70%` | Bepaalt de eerste classificatiegrens voor voorraadwaarde |
| `C15` | ABC cumulatieve waardedrempel klasse B | `90%` | Bepaalt de tweede classificatiegrens voor voorraadwaarde |
| `C16` | Drempel voor inkoopkostenafwijking | `15%` | Markeert materiële wijzigingen in de inkoopkostprijs |
| `C17` | Maandelijkse brutowinstbudgetdoelstelling | `500,000` | Levert het doel dat in de budgetrealisatierapportage wordt gebruikt |

Dit zijn voorbeeldstandaarden uit de implementatiespecificatie, geen universele operationele benchmarks. Ze moeten worden getoetst aan het feitelijke commerciële beleid en de rapportagevereisten van het bedrijf.

**Valutaconventie:** `C4` stuurt het weergegeven symbool van de basisvaluta. De wisselkoerswaarden in `C5` en `C6` moeten consistent met die basisvaluta worden geconfigureerd. De voorbeeldkoersen zijn geen live valutanoteringen.

#### Ruwe gegevensinvoer

De invoerwerkbladen zijn bedoeld om bronrecords te bevatten in plaats van door de gebruiker onderhouden berekeningen.

| Werkblad | Vereiste bedrijfsvelden |
|---|---|
| `Import_Sales` | Verkoopordernummer, verkoopdatum, kanaal, klant, oorspronkelijke SKU, hoeveelheid, verkoopprijs per eenheid, transactievaluta, kortingspercentage per regel |
| `Import_Inventory` | Oorspronkelijke SKU, productnaam, categorie, magazijn, fysieke hoeveelheid, gereserveerde hoeveelheid, inkomende inkoophoeveelheid, referentie-eenheidskostprijs |
| `Import_Purchases` | Inkoopordernummer, ontvangstdatum, leverancier, oorspronkelijke SKU, ontvangen hoeveelheid, inkoopprijs per eenheid, afrekenvaluta |

De bronsspecificatie definieert negen verkoopvelden, acht voorraadvelden en zeven inkoopvelden. Werkelijke Cin7-exporten kunnen andere kolomnamen gebruiken of extra velden bevatten. De importlay-out moet daarom vóór routinematig gebruik worden afgestemd op de beoogde structuur van de bronexport.

#### Belangrijkste analytische uitvoer

| Werkblad | Belangrijkste uitvoervelden |
|---|---|
| `Data_Cleaning` | Standaard-SKU, standaardproductnaam en -categorie, geconsolideerde fysieke/gereserveerde/inkomende hoeveelheden, status van de stamdataconsistentie |
| `Cost_Engine` | Totaal ontvangen hoeveelheid, inkoopbedrag in basisvaluta, gewogen gemiddelde inkoopprijs per eenheid, referentie-eenheidskostprijs, goedgekeurde standaardeenheidskostprijs, laatste inkoopprijs per eenheid, inkoopkostenafwijking |
| `Margin_Engine` | Genormaliseerde orderdetails, geldige verkoophoeveelheid, toegepaste wisselkoers, netto verkoopomzet, gekoppelde eenheidskostprijs, COGS, brutowinst per regel, brutomarge per regel |
| `Inventory_Analytics` | Beschikbare voorraad, voorraadwaarde, verkoophoeveelheid in de periode, gemiddelde dagelijkse verkoop, voorraaddekking in dagen, omloopsnelheid, cumulatief aandeel in de voorraadwaarde, ABC-klasse, status van de voorraadgezondheid |
| `Sales_Analytics` | SKU-omzet, COGS, brutowinst, brutomarge, brutowinstbijdrage, winstgevendheidsbeoordeling, kanaalopbrengsten en -kosten, kanaalbijdrage na geconfigureerde platformkosten, kanaalrangschikking |
| `Exception_Report` | SKU-uitzonderingslabels, voorraad- en kostenmarkeringen, geschatte risicoblootstelling, prioriteitsclassificatie, aanbevolen managementactie |
| `Executive_Dashboard` | Totale nettoverkoop, COGS, brutowinst, brutomarge, realisatie van het brutowinstbudget, voorraadwaarde, voorraadomloopdagen, blootstelling aan langzaam roterende en overtollige voorraad, aantal uitzonderingen met hoge prioriteit, Top 5 winstbijdragende SKU's |

### Beslissingsraamwerk: vijf analytische vragen

Het werkblad is ontworpen om vijf operationele vragen met elkaar te verbinden in plaats van elk rapport als een geïsoleerd dashboard te behandelen.

1. **Zijn de onderliggende records vergelijkbaar?** SKU-normalisatie en geconsolideerde voorraadgegevens helpen inconsistenties te verminderen die worden veroorzaakt door opmaakverschillen en meerdere magazijnrecords.
2. **Wat is de geschatte brutowinstbijdrage van elk product?** De verkoopomzet wordt genormaliseerd naar de basisvaluta en afgezet tegen een berekende eenheidskostenbenchmark.
3. **Waar zit werkkapitaal vast?** Voorraadwaarde, voorraaddekking, omloopsnelheid en ABC-classificatie wijzen producten aan die een verschillend niveau van inkoop- en voorraadbeheersingsaandacht verdienen.
4. **Welke uitzonderingen vereisen als eerste actie?** Signalen over winstgevendheid, voorraadgezondheid en inkoopkosten worden samengevoegd tot een geprioriteerde uitzonderingslijst.
5. **Wat moet het management als eerste beoordelen?** Het executive dashboard combineert de totale resultaten met budgetrealisatie, voorraadblootstelling en producten met een hoge bijdrage.

Deze vragen hangen samen, maar hun uitvoer is niet onderling uitwisselbaar. Brutowinst is niet hetzelfde als bedrijfsresultaat of kasstroom; voorraadwaarde is niet hetzelfde als inbaar geld; en een schatting van de kanaalbijdrage is geen volledige resultatenrekening op kanaalniveau.

### Analytische valkuilen en corrigerende logica

De volgende voorbeelden illustreren de beslissingsrisico's die het raamwerk beoogt te verkleinen. Het zijn analytische scenario's, geen beweringen over de werkelijke resultaten van een bepaald bedrijf.

#### Valkuil 1: verkoopomzet beschouwen als productwinstgevendheid

**Beslissing:** verhoog de inkoop voor een SKU met een hoge omzet.

**Verborgen gebrek:** de beslissing steunt op verkoopvolume of omzet zonder de kostprijs te controleren die aan de verkochte eenheden is toegewezen.

Stel dat een product 100.000 netto-omzet genereert en 85.000 aan gekoppelde COGS heeft. De brutowinst bedraagt 15.000 en de brutomarge 15%. Een tweede product genereert 60.000 netto-omzet tegen 30.000 COGS, wat 30.000 brutowinst en een brutomarge van 50% oplevert.

| Metric | Product A | Product B |
|---|---:|---:|
| Netto-omzet | 100,000 | 60,000 |
| COGS | 85,000 | 30,000 |
| Brutowinst | 15,000 | 30,000 |
| Brutomarge | 15% | 50% |

Op basis van omzet alleen wijst alles naar Product A. De brutowinstbijdrage wijst naar Product B.

De gecorrigeerde aanpak is om omzet, COGS, brutowinst en brutomarge samen te beoordelen voordat voorraad- of promotiebeslissingen worden genomen. De conclusie moet nog steeds rekening houden met de vraag, de voorraadbeschikbaarheid en andere relevante commerciële kosten.

<details>
<summary>Rekenreferentie</summary>

```text
Gross Profit = Net Sales - COGS

Product A:
100,000 - 85,000 = 15,000

Product B:
60,000 - 30,000 = 30,000

Gross Margin = Gross Profit / Net Sales
```

</details>

#### Valkuil 2: fysieke voorraad beschouwen als Available-to-Promise-voorraad

**Beslissing:** bevestig een nieuwe klantorder omdat het voorraadrapport 100 eenheden in voorraad toont.

**Verborgen gebrek:** het rapport maakt geen onderscheid tussen fysieke voorraad en voorraad die al voor bestaande orders is gereserveerd.

Stel dat een SKU 100 fysieke eenheden heeft, 80 gereserveerde eenheden en geen aanvullende beschikbare eenheden uit inkomende voorraad. Dan blijven er vóór toepassing van een afzonderlijk veiligheidsvoorraadbeleid nog slechts 20 eenheden ongereserveerd.

| Metric | Hoeveelheid |
|---|---:|
| Fysieke voorraad | 100 |
| Gereserveerde voorraad | 80 |
| Ongereserveerde fysieke voorraad | 20 |

De gecorrigeerde aanpak is om de ongereserveerde voorraad te beoordelen in plaats van uitsluitend de fysieke voorraad. Als een bedrijf ook een veiligheidsvoorraadbuffer moet aanhouden, dan moet die buffer expliciet in het feitelijke beschikbaarheidsbeleid worden opgenomen, in plaats van te veronderstellen dat deze automatisch in deze berekening is verwerkt.

Dit voorkomt dat verkooptoezeggingen worden gebaseerd op voorraad die al elders is toegewezen.

<details>
<summary>Rekenreferentie</summary>

```text
Available Physical Stock = Physical Stock - Reserved Stock

100 - 80 = 20 units
```

Het werkboek legt ook inkomende inkoophoeveelheden vast, maar inkomende voorraad mag niet als fysiek beschikbaar worden behandeld tenzij het operationele beleid die interpretatie expliciet toestaat.

</details>

#### Valkuil 3: een lage inkoopprijs beschouwen als bewijs van betere voorraadeconomie

**Beslissing:** blijf bij een leverancier inkopen omdat de laatste eenheidsprijs aantrekkelijk lijkt.

**Verborgen gebrek:** de vergelijking houdt geen rekening met de bestaande kostenbasis, de valutaomrekening of het effect van een recente wijziging in de inkoopkosten op de productwinstgevendheid.

Stel dat de vorige vergelijkbare eenheidskostenbenchmark 20 is en dat een nieuwe ontvangst is vastgelegd op 24 in dezelfde valuta en op een vergelijkbare basis. De eenheidskostprijs is met 20% gestegen en overschrijdt daarmee de voorbeeld-afwijkingsdrempel van 15%.

| Metric | Waarde |
|---|---:|
| Vorige kostenbenchmark | 20 |
| Laatste inkoopkostprijs | 24 |
| Absolute stijging | 4 |
| Relatieve stijging | 20% |
| Voorbeeld-waarschuwingsdrempel | 15% |

De gecorrigeerde aanpak is om het inkooprecord te verifiëren, kosten op een consistente valutabasis te vergelijken en te onderzoeken of de wijziging het gevolg is van leveranciersprijzen, valutabewegingen of een probleem met de gegevenskwaliteit, voordat prijzen worden aangepast of de volgende order wordt geplaatst.

Een afwijkingswaarschuwing is een aansporing tot onderzoek, geen bewijs dat de leverancier onjuist heeft gehandeld of dat de inkoop automatisch moet worden afgewezen.

<details>
<summary>Rekenreferentie</summary>

```text
Cost Variance Rate =
    (Latest Purchase Cost - Previous Cost Benchmark)
    / Previous Cost Benchmark

(24 - 20) / 20 = 20%
```

De gedocumenteerde uitzonderingsregel van het werkboek gebruikt de absolute waarde van de inkoopkostenafwijking bij vergelijking met de geconfigureerde drempel.

</details>

### Voorbeeldscenario: van geëxporteerde records naar een managementreview

Beschouw een hypothetisch bedrijf met meerdere verkoopkanalen en magazijnlocaties. Het bedrijf exporteert verkoopregels, een voorraadmomentopname en inkoopontvangstrecords uit zijn bestaande systeem.

De analyseperiode is ingesteld op 90 dagen. De voorbeeld-doelbrutomarge is 35%, de laagmargedrempel is 10%, de waarschuwing voor lage voorraad is 15 dagen voorraaddekking en de overvoorraaddrempel is 90 dagen voorraaddekking.

De geïmporteerde records tonen de volgende resultaten voor één SKU:

| Invoer of berekening | Voorbeeldwaarde |
|---|---:|
| Netto-omzet in de analyseperiode | 100,000 |
| Gekoppelde COGS | 85,000 |
| Brutowinst | 15,000 |
| Brutomarge | 15% |
| Fysieke voorraad | 500 eenheden |
| Gereserveerde voorraad | 100 eenheden |
| Netto ongereserveerde fysieke voorraad | 400 eenheden |
| Verkoop tijdens de periode van 90 dagen | 900 eenheden |
| Gemiddelde dagelijkse verkoop | 10 eenheden |
| Voorraaddekking | 40 dagen |

De brutomarge ligt onder de doelstelling van 35% maar boven de minimumdrempel van 10%. De SKU vereist daarom een winstgevendheidsreview, ook al wordt hij volgens de geconfigureerde regel niet noodzakelijkerwijs als laagmarge-uitzondering geclassificeerd.

De voorraadpositie vertegenwoordigt ongeveer 40 dagen voorraaddekking, wat tussen de voorbeelddrempels voor lage voorraad en overvoorraad in ligt. Dat betekent niet automatisch dat het voorraadniveau optimaal is: inkooplevertijden, vraagvariabiliteit en veiligheidsvoorraadvereisten blijven van belang.

De praktische aanbeveling is om de prijsstelling, kortingen en kostenveronderstellingen van de SKU te reviewen en daarbij te controleren of de huidige voorraaddekking passend is voor de verwachte vraag. Als het product een aanzienlijke totale brutowinst bijdraagt, is een review van de prijsstelling of van de leverancierskosten wellicht passender dan een onmiddellijke beslissing om het product uit te faseren.

Het dashboard ondersteunt deze review door productwinstgevendheid, voorraadblootstelling en uitzonderingssignalen in één gemeenschappelijke rapportageworkflow onder te brengen. De uiteindelijke beslissing blijft afhankelijk van geverifieerde brongegevens en van de operationele beperkingen van het bedrijf.

### Formulereferentie

De onderstaande formules beschrijven de beoogde berekeningslogica van het werkboek. Het zijn referentiepatronen en geen per cel geverifieerde formules uit een uitgebracht werkboek. Pas kolomverwijzingen vóór implementatie aan de feitelijke lay-out van het werkblad aan.

<details>
<summary>1. SKU-standaardisatie en voorraadconsolidatie</summary>

**Doel:** verminder mismatches die worden veroorzaakt door verschillen in SKU-opmaak en consolideer voorraadrecords over magazijnlocaties.

```excel
=UPPER(TRIM(SKU_Cell))
```

Dit normalisatiepatroon verwijdert voorloop- en volgspaties en zet SKU-tekst om naar hoofdletters. Pas dezelfde normalisatieconventie toe op verkoop-, voorraad- en inkooprecords voordat records uit verschillende bronnen aan elkaar worden gekoppeld.

```excel
=UNIQUE(Standardized_SKU_Range)
```

Geeft een lijst met unieke, genormaliseerde SKU-identificatoren.

**Aggregatiepatroon voor voorraad:**

```excel
=SUMIFS(
    Physical_Quantity_Range,
    Standardized_SKU_Range,
    Current_SKU
)
```

Herhaal de aggregatie voor gereserveerde hoeveelheden en inkomende hoeveelheden. De aggregatiecriteria moeten in alle brontabellen dezelfde genormaliseerde SKU-sleutel gebruiken.

**Belangrijk:** SKU-normalisatie kan verschillen in hoofdlettergebruik en omliggende spaties oplossen. Zij kan niet op betrouwbare wijze werkelijk afwijkende productidentificatoren, onjuiste SKU-toewijzingen of ambigue product-stamrelaties oplossen. Daarvoor is een review van de brongegevens nodig.

</details>

<details>
<summary>2. Berekening van de inkoopkosten</summary>

**Doel:** zet inkoopbedragen om naar de geconfigureerde basisvaluta, bereken een gewogen gemiddelde inkoopkostprijs en identificeer wijzigingen in recente inkoopkosten.

**Inkoopbedrag in basisvaluta:**

```text
Base-Currency Purchase Amount
    = Received Quantity
    × Purchase Unit Price
    × Applicable Exchange Rate
```

De wisselkoers moet één consistente conventie volgen: basisvaluta-eenheden per eenheid transactievaluta. Als de brongegevens al waarden in basisvaluta bevatten, zet die waarden dan niet een tweede keer om.

**Gewogen gemiddelde inkoopprijs per eenheid:**

```text
Weighted-Average Unit Cost
    = Total Base-Currency Purchase Amount
    / Total Received Quantity
```

Bereken teller en noemer over dezelfde gedefinieerde populatie van geldige inkoopontvangsten. Sluit ongeldige records uit en behandel totale hoeveelheden van nul of negatieve hoeveelheden volgens het gedocumenteerde invoerbeleid.

**Inkoopkostenafwijking:**

```text
Cost Variance Rate
    = (Latest Unit Cost - Reference Unit Cost)
    / Reference Unit Cost
```

De geconfigureerde drempel identificeert materiële afwijkingen voor onderzoek. Een referentiekostprijs van nul of een ontbrekende referentiekostprijs moet als een niet-beschikbare vergelijking worden behandeld, niet als een geldige procentuele afwijking.

De specificatie onderscheidt de gewogen gemiddelde inkoopkostprijs, een goedgekeurde standaardeenheidskostprijs en de laatste inkoopprijs per eenheid. Hun selectie en onderlinge voorrang moeten expliciet in het geïmplementeerde werkboek worden gedefinieerd; er mag niet van worden uitgegaan dat ze onderling uitwisselbaar zijn.

</details>

<details>
<summary>3. Berekening van de verkoopmarge</summary>

**Doel:** bereken de winstgevendheid van orderregels met behulp van de netto verkoopomzet en een toegewezen eenheidskostenbenchmark.

```text
Net Sales Revenue
    = Quantity
    × Unit Selling Price
    × (1 - Line Discount Rate)
    × Applicable Exchange Rate
```

Dit patroon gaat ervan uit dat het kortingspercentage als decimaal is weergegeven en dat de geëxporteerde verkoopprijs per eenheid vóór de korting per regel is. Als de bronexport al een netto-omzet per regel levert, gebruik dan die waarde in plaats van de korting een tweede keer toe te passen.

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

De brutomarge is ongedefinieerd wanneer de netto verkoopomzet nul is. De implementatie moet een gecontroleerde lege waarde of een expliciete status retourneren in plaats van door nul te delen.

**Interpretatie:** de brutowinst meet het bedrag dat overblijft na de toegewezen productkostprijs. Zij omvat op zichzelf niet alle bedrijfskosten, fulfilmentkosten, marketingkosten of andere kosten die nodig kunnen zijn om de volledig doorbelaste winstgevendheid te bepalen.

</details>

<details>
<summary>4. Voorraadgezondheid en ABC-classificatie</summary>

**Doel:** schat de voorraadbeschikbaarheid, de dekking, de waardeblootstelling en de relatieve bijdrage aan de voorraadwaarde.

```text
Unreserved Physical Stock
    = Physical Stock - Reserved Stock
```

Als het bedrijf een afzonderlijk veiligheidsvoorraadbeleid hanteert, gebruik dat dan expliciet bij het bepalen van de operationele beschikbaarheid.

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

Wanneer de gemiddelde dagelijkse verkoop nul is, mag de voorraaddekking niet als nul worden gerapporteerd. Gebruik een gecontroleerde status zoals `No Recent Sales` of een equivalente uitzondering.

```text
Inventory Value
    = Selected Stock Quantity
    × Selected Unit Cost
```

De implementatie moet definiëren welke hoeveelheid en welke kostenbasis voor de voorraadwaardering worden gebruikt. Fysieke voorraad, ongereserveerde voorraad en inkomende voorraad vertegenwoordigen verschillende operationele concepten en mogen niet zonder een duidelijk beleid worden gecombineerd.

**ABC-classificatie:** rangschik SKU's op de gekozen maatstaf voor voorraadwaarde, bereken de cumulatieve voorraadwaarde als aandeel van het totaal en classificeer elke SKU met behulp van de geconfigureerde grenzen voor klasse A en B.

De voorbeeldconfiguratie gebruikt cumulatieve waardedrempels van 70% en 90%. Deze grenzen zijn bedrijfsinstellingen, geen universele normen. De berekening moet ook een lege voorraadset of een totale voorraadwaarde van nul aankunnen zonder ongeldige percentages te produceren.

</details>

<details>
<summary>5. Uitzonderingsbewaking en dashboardmetrics</summary>

**Doel:** zet analytische resultaten om in reviewprioriteiten.

De specificatie identificeert vijf hoofdtypen uitzonderingen:

- Brutowinst van nul.
- Negatieve brutowinst.
- Overvoorraad.
- Voorraaduitputting of risico op lage voorraad.
- Inkoopkostenafwijking.

Het werkboek gebruikt configureerbare drempels om uitzonderingen te markeren. De exacte statuslabels en de onderlinge voorrang moeten aan de hand van de uiteindelijke implementatie worden geverifieerd.

**Voorbeeldpatroon voor de drempel op inkoopkosten:**

```text
IF absolute cost variance exceeds configured threshold:
    Flag for investigation
ELSE:
    No cost-variance alert
```

**Budgetrealisatie:**

```text
Gross-Profit Budget Attainment
    = Actual Gross Profit / Gross-Profit Budget Target
```

Wanneer de budgetdoelstelling nul of ontbrekend is, moet het dashboard een gecontroleerde niet-beschikbaar-status weergeven in plaats van een ongeldige ratio.

**Kanaalbijdrage:** de specificatie bevat een geschat platformkostentarief. Een berekening die alleen dat tarief van de brutowinst aftrekt, is een gedeeltelijke bijdragemeting en geen volledige berekening van de kanaalwinst. Andere kanaalspecifieke kosten moeten afzonderlijk worden meegenomen als het bedrijf een volledig doorbelaste kanaalvergelijking nodig heeft.

</details>

### Validatieregels

De volgende regels beschrijven de controles die nodig zijn om de analytische uitvoer interpreteerbaar te houden. Waar de bronsspecificatie geen precieze geautomatiseerde fouttoestand definieert, is het verwachte gedrag geformuleerd als een implementatievereiste in plaats van als een bewering dat het werkboek dit al afdwingt.

| Veld of gebied | Validatieregel | Verwacht foutgedrag |
|---|---|---|
| Basisvaluta | Definieer één basisvaluta en gebruik deze consistent in alle rapportage-uitvoer | Markeer inconsistente valutainstellingen; meng valuta's niet stilletjes |
| Wisselkoersen | Vereis een geldige, positieve koers voor elke vreemde valuta die omrekening nodig heeft | Markeer ontbrekende of ongeldige koersen; getroffen omgerekende bedragen mogen niet als geverifieerd worden behandeld |
| Analyseperiode | Vereis een positief aantal dagen | Wijs periodes van nul, negatieve of ontbrekende periodes af of markeer ze |
| Margedrempels | Gebruik geldige percentagewaarden en zorg voor de beoogde ordening van doel- en minimumdrempels | Markeer ongeldige instellingen voor review |
| Kanaaltarief | Vereis een geldig tarief dat consistent is met de verwachte percentageconventie | Markeer ongeldige waarden in plaats van onbedoeld negatieve of opgeblazen bijdragen toe te staan |
| ABC-grenzen | Vereis cumulatieve waardedrempels tussen 0% en 100%, waarbij de A-grens niet groter is dan de B-grens | Markeer inconsistente grenzen |
| Drempel voor inkoopkostenafwijking | Vereis een niet-negatieve percentagedrempel | Markeer negatieve of niet-numerieke instellingen |
| Budgetdoelstelling | Vereis een geldige numerieke doelstelling voor de realisatierapportage | Toon een niet-beschikbaar-status wanneer de noemer nul of ontbrekend is |
| Verkoophoeveelheid | Valideer numerieke hoeveelheden en onderzoek ongeldige records voordat de winstgevendheid wordt berekend | Sluit of markeer ongeldige rijen volgens het gedocumenteerde importbeleid |
| Verkoopprijs per eenheid | Valideer numerieke waarden en de valutaconventie die de bronexport gebruikt | Markeer ongeldige prijzen; interpreteer ontbrekende prijzen niet stilletjes als geverifieerde verkoop tegen nulprijs |
| Kortingspercentage per regel | Valideer de numerieke weergave van het percentage en het toegestane bedrijfsbereik | Markeer ongeldige percentages; voorkom dat de korting twee keer wordt toegepast |
| Inkoophoeveelheid | Valideer ontvangen hoeveelheden en identificeer hoeveelheden van nul of negatieve hoeveelheden die bijzondere behandeling vereisen | Markeer records die niet veilig in de gewogen gemiddelde kostprijs kunnen worden opgenomen |
| Inkoopprijs per eenheid | Valideer numerieke waarden en valutaconsistentie | Markeer ongeldige prijzen en voorkom dat zij de kostenbenchmarks stilletjes verstoren |
| SKU-identificatoren | Normaliseer hoofdlettergebruik en omliggende spaties consistent in alle drie de imports | Markeer ontbrekende of niet-gekoppelde identificatoren; onderzoek ambigue overeenkomsten |
| Voorraadhoeveelheden | Valideer fysieke, gereserveerde en inkomende hoeveelheden afzonderlijk | Markeer inconsistente of ongeldige saldi; ga er niet van uit dat inkomende voorraad fysiek beschikbaar is |
| Kostenkoppeling | Vereis een geldige kostenbron of een expliciet goedgekeurde terugvaloptie | Markeer niet-gekoppelde kosten; interpreteer ontbrekende kosten niet als bevestigde nulkosten |
| Berekening van de brutomarge | Deel niet door een netto-omzet van nul | Retourneer een gecontroleerde lege waarde of een expliciete status |
| Berekening van de voorraaddekking | Deel niet door een gemiddelde dagelijkse verkoop van nul | Retourneer een status zoals geen recente verkoop of een equivalent |
| Uitvoerbereiken van dynamische arrays | Houd het spillgebied van de formule vrij van handmatig ingevoerde waarden | Los de blokkerende cellen op zonder de formule-anker te verwijderen |
| Importlay-out | Koppel bronkolommen aan de verwachte velddefinities | Corrigeer de importmapping voordat u op downstream berekeningen vertrouwt |

### Bekende beperkingen en compatibiliteit

#### Excel-compatibiliteit

De werkboekspecificatie is gebaseerd op moderne dynamische-arrayfuncties, waaronder `FILTER`, `UNIQUE`, `SORTBY` en `SCAN`. Ze vereist Microsoft 365, Excel 2021, Excel 2024 of een compatibele WPS-versie die de benodigde functies ondersteunt.

Excel 2016, Excel 2019 en eerdere versies worden niet ondersteund door het gespecificeerde berekeningsontwerp.

#### Gegevensvolume

De specificatie richt zich op maximaal 50.000 detailrijen per brontabel, met een aanbevolen gecombineerd totaal onder de 100.000 rijen om een responsieve berekeningsprestatie te behouden. De werkelijke prestaties hangen af van de spreadsheettoepassing, de hardware, de complexiteit van de formules en de omvang van de geïmporteerde gegevens.

#### Bewerken en samenwerken

- Sorteer, typ in of overschrijf de spillbereiken van dynamische arrays niet handmatig.
- Voorkom dat meerdere gebruikers onafhankelijk van elkaar brongegevens plakken en wijzigen in dezelfde werkversie.
- Bewaar een aparte kopie van de oorspronkelijke exporten, zodat importfouten kunnen worden getraceerd en gecorrigeerd.
- Controleer SKU-koppelingen, valutainstellingen en eenheidskostenveronderstellingen voordat u de uitvoer gebruikt voor inkoop- of prijsbeslissingen.

#### Interpretatie van kosten en winst

Kosten op basis van inkoopontvangsten komen mogelijk niet in elke situatie overeen met de COGS die het boekhoudsysteem erkent. Vracht, invoerrechten, landed-cost-toerekening, retouren, leverancierskredieten, afschrijvingen en het voorraadwaarderingsbeleid kunnen verschillen veroorzaken.

De berekende marge moet daarom worden beschouwd als een operationeel analytisch resultaat op basis van de geconfigureerde kostenmethode, en niet automatisch als vervanging van gereconcilieerde financiële overzichten.

</details>


---

### Probleemoplossing

<details>
<summary>Waarom toont Excel #SPILL!?</summary>

Een dynamische-arrayformule kan niet uitbreiden omdat een of meer cellen in het uitvoerbereik bezet zijn.

1. Selecteer de cel waarin `#SPILL!` wordt weergegeven.
2. Inspecteer het aangegeven spillbereik op handmatig ingevoerde waarden, spaties of andere blokkerende inhoud.
3. Wis alleen de onbedoelde inhoud die het spillbereik blokkeert.
4. Behoud de formule in de anker-cel.
5. Bevestig dat de uitvoer zoals verwacht uitbreidt.

Wis de formule-anker niet bij het oplossen van een geblokkeerd spillbereik.

</details>

<details>
<summary>Waarom toont een nieuw product 100% brutomarge of nul COGS?</summary>

Het product ontbreekt mogelijk in de voorraadreferentiegegevens, heeft geen geldige historie van inkoopontvangsten of beschikt niet over een geconfigureerde referentie-eenheidskostprijs.

1. Controleer of de SKU in de voorraadimport voorkomt.
2. Bevestig dat de identificator overeenkomt met de genormaliseerde SKU die door verkoop- en inkooprecords wordt gebruikt.
3. Controleer of er geldige inkoopontvangsten voor het product bestaan.
4. Als het product geen inkoophistorie heeft, controleer dan of een legitieme referentie-eenheidskostprijs beschikbaar is.
5. Herbereken en verifieer de resulterende marge voordat u deze gebruikt voor prijs- of inkoopbeslissingen.

Een uitkomst met nulkosten mag niet automatisch worden geïnterpreteerd als een product dat werkelijk geen kosten heeft.

</details>

<details>
<summary>Waarom lijken de verkoop-, inkoop- of voorraadtotalen inconsistent?</summary>

Controleer de rapportageperiode, de transactievaluta, dubbele bronrijen, de SKU-koppeling en het detailniveau van elke geïmporteerde dataset. Verkoop- en inkooptabellen zijn records op transactieniveau, terwijl voorraad een momentopname per SKU en magazijn is. Het optellen of koppelen van deze datasets zonder rekening te houden met hun verschillende detailniveaus kan misleidende resultaten opleveren.

Vergelijk een kleine steekproef van bronrecords met de bijbehorende berekende uitvoer voordat u op geaggregeerde totalen vertrouwt.

</details>

</details>

---


## Andere hulpmiddelen in deze serie

Theseus Workshop ontwikkelt lichtgewicht, op Excel gebaseerde bedrijfsbeslissingshulpmiddelen voor terugkerende operationele en financiële problemen.

- **Construction Cost Estimation Tools** — organiseren van hoeveelheidsopnames, kostenveronderstellingen en projectramingen.
- **Inventory and Order Profitability Tools** — voorraad, orders, kosten en financiële prestaties op productniveau met elkaar verbinden.
- **Financial Planning and Scenario Models** — ondersteuning van gestructureerde budgettering, forecasting en reviews van bedrijfsbeslissingen.

Ontdek de beschikbare projecten op het [Theseus Workshop GitHub-profiel](https://github.com/HyVoid).

## Licentie

Dit project is uitgebracht onder de **Apache License 2.0**. Zie het `LICENSE`-bestand van de repository voor de volledige licentievoorwaarden.
