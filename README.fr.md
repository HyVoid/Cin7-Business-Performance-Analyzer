[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Analyseur de performance commerciale Cin7 : modèle de rapport Excel et tableau de bord de rentabilité des stocks pour Cin7 Core (DEAR) et Omni
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/2e8d2054-0ff2-46b5-9716-405840fa0be8" />


> **Résumé du produit :** **Analyseur de performance commerciale Cin7** est un **modèle de rapport Excel** léger et un **tableau de bord de rentabilité des stocks** conçu pour les utilisateurs de **Cin7 Core (anciennement DEAR Inventory)** et **Cin7 Omni**. Il convertit les **exports CSV Cin7** bruts (commandes de vente, stock disponible et réceptions d'achat) en un **calculateur de marge brute par SKU**, un **suivi du fonds de roulement** et un **audit des écarts de coût des bons de commande (PO)** automatisés, sans déployer de logiciel BI externe.

Les entreprises qui utilisent **Cin7 Core** ou **Cin7 Omni** capturent des données transactionnelles détaillées, mais les exports ERP natifs maintiennent la performance commerciale, les niveaux de stock en entrepôt et les prix fournisseurs dans des silos distincts. **Analyseur de performance commerciale Cin7** comble cette lacune en tant que **boîte à outils d'aide à la décision ERP** structurée. En normalisant les données CSV brutes en un seul **classeur d'analyse Excel**, les équipes opérations et finance peuvent rapprocher le **coût des marchandises vendues (COGS) rendu**, isoler le **stock disponible à la vente (ATP) non alloué** et signaler les exceptions opérationnelles en quelques minutes.

Le modèle de rapport répond à cinq questions commerciales et de gestion des stocks récurrentes :

- **Marge brute par SKU :** Quels produits dégagent une marge brute positive après avoir confronté le chiffre d'affaires aux coûts d'achat moyens pondérés ou au dernier coût enregistré ?
- **Contribution nette par canal de vente :** Quelles places de marché e-commerce, portails de vente en gros B2B ou canaux PDV génèrent une marge nette réelle après déduction des provisions de frais de plateforme configurables ?
- **Exposition du fonds de roulement et du stock dormant :** Combien de trésorerie est immobilisée dans le stock en entrepôt (SOH), et quels SKU se classent comme surstock, stock dormant à rotation lente ou risque de rupture à forte vélocité ?
- **Dérive des prix fournisseurs et écart sur les bons de commande :** Quels articles ont subi des hausses de coût unitaire significatives sur les récentes réceptions d'achat par rapport aux coûts moyens pondérés historiques ?
- **Gestion priorisée des exceptions :** Quels SKU à marge négative, goulots d'étranglement de réapprovisionnement et pics de coût exigent une intervention immédiate sur les prix ou les achats ?

Les exports Cin7 bruts entrent par des feuilles de saisie dédiées en collage de valeurs (`Import_Sales`, `Import_Inventory`, `Import_Purchases`). Les couches de calcul automatisées nettoient les identifiants SKU, consolident le stock multi-entrepôts, calculent la rentabilité par ligne de vente et alimentent un **tableau de bord d'indicateurs clés exécutifs** ainsi qu'un **rapport d'exception** directement exploitable. Ce flux de travail complète votre environnement ERP Cin7 existant tout en laissant intacts les grands livres comptables, les registres fiscaux et l'exécution des commandes en direct.

> ### Essayez la boîte à outils analytique Cin7 : démonstration web interactive ou modèle Excel réutilisable
>
> Évaluez immédiatement la structure du rapport dans votre navigateur, ou téléchargez le modèle `.xlsx` complet pour une analyse mensuelle récurrente :
>
> - 🌐 **[Lancer la démonstration web analytique Cin7 interactive (aperçu navigateur gratuit — aucune configuration)](https://hyvoid.github.io/cin7-excel-reporting-template/)** — Inspectez les exemples de tableaux de rentabilité par SKU, les classifications de stock ABC et les indicateurs d'exception directement dans votre navigateur, sans inscription.
> - 📥 **[Télécharger le modèle de rapport Excel Cin7 (.xlsx) (classeur pour analyses récurrentes et audits hors ligne)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)** — Obtenez le classeur Excel complet à tableaux dynamiques afin d'importer vos propres fichiers CSV Cin7, de personnaliser vos seuils métier et de conserver un historique d'exploitation.
>
> *Garantie commerciale : lorsque le classeur Excel `.xlsx` téléchargeable est proposé sous licence payante, chaque achat est couvert par une garantie de remboursement de 30 jours, sans poser de questions.*
>

---

## Ce qu'il vous aide à suivre : marge, valorisation des stocks et indicateurs de coût des bons de commande Cin7

Au lieu d'assembler manuellement des feuilles de calcul ERP déconnectées à l'aide de formules de recherche fragiles, utilisez ce mappage structuré pour suivre six dimensions opérationnelles essentielles :

| Dimension de suivi et axe de recherche | Point de douleur opérationnel dans les exports Cin7 natifs | Comment l'analyseur le résout (indicateurs et sorties) |
| :--- | :--- | :--- |
| **Rentabilité par SKU et analyse de la marge brute** | Les exports de ventes Cin7 natifs classent les produits par chiffre d'affaires brut, masquant souvent les SKU à fort volume qui se vendent avec des marges négatives ou extrêmement faibles une fois les coûts d'achat réels appliqués. | Confronte le chiffre d'affaires de chaque ligne au **coût des marchandises vendues (COGS)** estimé afin de calculer la **marge brute exacte ($)** et la **marge brute (%)** par SKU au regard de votre seuil cible. |
| **Contribution nette multicanal et modélisation des frais** | Comparer à leur valeur faciale les revenus de Shopify DTC, d'Amazon Marketplace et de la vente en gros B2B ignore les frais de parrainage, le traitement des paiements et les structures de commission. | Applique une **provision pour frais de canal (%)** configurable à chaque canal de vente et classe les canaux par **contribution au profit net**, afin que vos équipes voient où la trésorerie réelle est générée. |
| **Stock disponible (SOH) multi-entrepôts et isolation de l'ATP** | Les rapports d'instantané d'entrepôt affichent le total des unités physiques en stock, ce qui amène les équipes commerciales à sur-promettre un stock déjà alloué à des commandes clients ouvertes. | Consolide le stock multi-sites tout en séparant le **stock physique** du **stock alloué**, exposant les véritables unités **disponibles à la vente (ATP) non allouées** ainsi que le capital immobilisé. |
| **Santé des stocks, rotation et classification ABC** | Les articles à rotation lente de forte valeur et les ruptures imminentes restent enfouis parmi des milliers de lignes d'entrepôt jusqu'à ce que la trésorerie se resserre ou que les best-sellers passent en commande en souffrance. | Calcule automatiquement les **jours de couverture (DOS)**, les **jours de rotation des stocks** et les **paliers de valeur ABC (A/B/C)** afin de catégoriser chaque SKU comme Sain, À rotation lente, Surstock ou Risque de rupture. |
| **Écart de coût des bons de commande (PO) et dérive fournisseur** | Les hausses de prix fournisseurs incrémentielles se cachent dans les lignes de réception d'achat individuelles, érodant les marges produit plusieurs semaines avant que la finance ne repère l'écart lors des clôtures comptables mensuelles. | Compare le **coût moyen pondéré (WAC)** de chaque SKU à son **dernier prix d'achat enregistré**, en signalant tout pic de coût unitaire qui dépasse la tolérance d'écart que vous avez configurée. |
| **Triage automatisé par gestion par exception** | Les analystes opérationnels passent des heures à filtrer les exports CSV de trois modules simplement pour construire un ordre du jour hebdomadaire pour les réunions d'achat et de tarification. | Regroupe les marges négatives, les manques de marge, les pics de coût et les alertes de stock en un **rapport d'exception** unique et priorisé, assorti de classements de gravité et d'actions correctives recommandées. |

---

## Comment analyser les exports CSV Cin7 dans Excel : tutoriel de démarrage rapide en 4 étapes

Suivez ce cycle opérationnel en quatre étapes pour transformer les données Cin7 brutes en revue de direction. Configurez vos règles financières une seule fois, collez vos derniers exports CSV, auditez les tableaux de bord automatisés, puis répétez l'opération selon une cadence hebdomadaire ou mensuelle.

### Étape 1 : Configurer les seuils financiers, les taux de change et les règles ABC des stocks
Ouvrez l'onglet `Parameters` pour établir les hypothèses commerciales qui régissent votre classeur. Définissez le symbole de votre devise de base de reporting, les **taux de change USD et EUR**, la plage de dates d'analyse (en jours), le **seuil minimal de marge brute (%)**, les limites de rupture et de surstock en **jours de couverture (DOS)**, les **seuils de classification Pareto ABC**, le **seuil d'alerte d'écart de coût d'achat (%)**, les provisions pour frais de canal et l'objectif budgétaire de marge brute de la période. Mettez ces paramètres à jour chaque fois que les taux de change ou les politiques de marge de votre entreprise évoluent.

### Étape 2 : Importer les exports CSV bruts de ventes, de stock disponible (SOH) et de bons de commande Cin7
Exportez vos rapports de transactions standards depuis **Cin7 Core** ou **Cin7 Omni** au format CSV, puis utilisez **Collage valeurs** pour charger les enregistrements dans les trois onglets de saisie brute dédiés :

- `Import_Sales` : Collez l'historique des lignes de commande de vente (SKU, canal, quantité vendue, chiffre d'affaires de la ligne, devise).
- `Import_Inventory` : Collez les instantanés de stock en entrepôt actuels (SKU, emplacement d'entrepôt, quantité physique disponible, quantité allouée).
- `Import_Purchases` : Collez les réceptions d'achat historiques et les lignes de facture fournisseur (SKU, date de réception, quantité reçue, prix d'achat unitaire, devise).

Isoler les saisies CSV brutes des feuilles de formules en aval permet d'éviter les écrasements accidentels de formules lors des rafraîchissements de données hebdomadaires de routine.

### Étape 3 : Auditer le tableau de bord d'indicateurs clés exécutifs, les marges par canal et les indicateurs d'exception
Assurez-vous que le mode de calcul d'Excel est réglé sur **Automatique** afin que le moteur de tableaux dynamiques mette à jour toutes les tables analytiques :

1. Ouvrez `Executive_Dashboard` pour une synthèse consolidée de niveau direction générale : chiffre d'affaires total, COGS estimé, marge brute, marge brute en %, atteinte du budget, valorisation totale des stocks, jours de rotation des stocks, fonds de roulement immobilisé et votre **Top 5 des SKU contributeurs au profit**.
2. Consultez `Exception_Report` pour trier les SKU signalés qui exigent une augmentation immédiate des prix, une renégociation fournisseur ou une liquidation de stock.
3. Explorez `Sales_Analytics` pour les ventilations de contribution par SKU et par canal, `Inventory_Analytics` pour les matrices de santé des stocks ABC/DOS, et `Data_Cleaning` pour résoudre les anomalies de données de référence (comme les SKU non mappés ou les enregistrements de coût manquants).

### Étape 4 : Passer des tests dans le navigateur aux revues mensuelles récurrentes dans Excel
Bien que l'**[aperçu navigateur interactif](https://hyvoid.github.io/cin7-excel-reporting-template/)** vous permette d'inspecter la disposition analytique en une seule session, le contrôle continu des stocks et la réconciliation financière exigent des enregistrements locaux persistants.

Pour exécuter ce flux de travail sur les données de votre propre entreprise chaque semaine ou chaque mois, **[téléchargez le modèle de rapport Excel Cin7 réutilisable (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**. Avec le classeur Excel autonome, votre équipe peut archiver des instantanés mensuels pour un suivi de la marge mois par mois, personnaliser les paramètres de seuil hors ligne et distribuer des fichiers `.xlsx` prêts pour l'audit aux achats, à l'entrepôt et à la direction générale.

---

## Logique métier et méthodologie

Les rapports ERP standards déçoivent les décideurs parce qu'ils présentent des journaux opérationnels (ce qui s'est passé dans un seul module) plutôt que l'économie unitaire relationnelle (comment interagissent les coûts d'achat, la vélocité de l'entrepôt et les frais de canal). **Analyseur de performance commerciale Cin7** applique six méthodes quantitatives pour résoudre des problèmes commerciaux précis :

### 1. Normalisation relationnelle des SKU et rapprochement tripartite des données
- **Problème commercial :** Dans les exports Cin7, les codes SKU contiennent fréquemment des espaces de fin, des divergences de casse ou des transactions orphelines (par exemple, un produit vendu dans `Import_Sales` sans réception correspondante dans `Import_Purchases` ni enregistrement de stock dans `Import_Inventory`).
- **Méthode analytique :** La couche `Data_Cleaning` supprime le bruit de formatage (normalisation `TRIM`/`UPPER`) et effectue une validation relationnelle tripartite entre les tables de ventes, de stock et d'achats. Elle signale explicitement les lignes de vente sans coût et les anomalies de prix à zéro, afin que les totaux de marge brute ne soient jamais artificiellement gonflés par des données de coût manquantes.

### 2. Double valorisation du COGS et écart de prix d'achat (WAC vs. dernier coût)
- **Problème commercial :** Se fier uniquement au coût moyen pondéré (WAC) historique masque les récentes hausses de prix fournisseurs en période inflationniste, ce qui amène les équipes commerciales à sous-tarifer les commandes de renouvellement.
- **Méthode analytique :** La boîte à outils calcule à la fois le **coût d'achat moyen pondéré** historique ($\sum \text{Total PO Spend} / \sum \text{Total Units Received}$) et extrait le **dernier coût d'achat unitaire chronologique** par SKU, normalisé dans votre devise de base de reporting. En mesurant l'écart en pourcentage ($\frac{\text{Latest Cost} - \text{WAC}}{\text{WAC}}$), le modèle isole la compression de marge prospective avant que les anciens lots de stock ne soient écoulés.

### 3. Modélisation de la contribution par canal ajustée des frais
- **Problème commercial :** Les marques e-commerce et omnicanal font souvent croître leur chiffre d'affaires brut sur des places de marché tierces tout en perdant de la trésorerie nette une fois les commissions de plateforme et les frais de transaction déduits.
- **Méthode analytique :** Au-delà de la marge brute ($\text{Revenue} - \text{Estimated COGS}$), le moteur `Sales_Analytics` déduit une **provision pour frais de plateforme** configurable, propre à chaque canal de vente. Cela approche la **marge de contribution de niveau 2 (CM2)** et permet à la direction de comparer directement les commandes de vente en gros B2B à forte marge face au volume de place de marché à frais élevés.

### 4. Isolation du disponible à la vente (ATP) face au stock physique disponible
- **Problème commercial :** Traiter les comptages physiques d'entrepôt comme un stock vendable conduit à une double allocation, à des commandes en souffrance et à des ratios de fonds de roulement faussés. Par exemple, si un entrepôt détient 100 unités physiques mais que 80 unités sont engagées sur des commandes clients ouvertes, il ne reste que 20 unités librement disponibles avant déduction du stock de sécurité.
- **Méthode analytique :** Les enregistrements de stock multi-entrepôts sont agrégés par SKU tout en séparant strictement le **stock physique** du **stock alloué** ($\text{Unallocated Stock} = \max(0, \text{Physical SOH} - \text{Allocated Units})$). La valorisation du fonds de roulement est ensuite calculée à la fois sur les avoirs physiques totaux et sur le stock à rotation lente immobilisé.

### 5. Matrice composite de valorisation Pareto ABC et de jours de couverture (DOS)
- **Problème commercial :** Les responsables d'entrepôt ne peuvent pas traiter tous les SKU de la même manière : réduire le stock de façon uniforme affame les best-sellers à forte marge tout en laissant le stock dormant intact.
- **Méthode analytique :** Le modèle associe la **classification de valeur Pareto ABC** (classement des SKU par contribution cumulée à la valeur du stock, généralement A = les 70–80 % supérieurs, B = les 15–20 % suivants, C = les 5–10 % inférieurs) à la **vélocité quotidienne des ventes** ($\text{Units Sold} / \text{Analysis Period Days}$) pour en déduire les **jours de couverture** ($\text{DOS} = \text{Unallocated Stock} / \text{Daily Velocity}$). Le croisement des paliers ABC avec les seuils de DOS permet de repérer automatiquement le stock dormant à fort capital (`Class A + Overstock/Slow-Moving`) face aux priorités de réapprovisionnement urgentes (`Class A + Low DOS`).

### 6. Triage par gestion par exception fondé sur des règles
- **Problème commercial :** Passer en revue manuellement plus de 5 000 lignes de SKU chaque semaine provoque une fatigue décisionnelle et des risques opérationnels manqués.
- **Méthode analytique :** L'onglet `Exception_Report` utilise une logique booléenne déterministe pour évaluer chaque SKU actif au regard des seuils de `Parameters`. Seuls les SKU qui enfreignent une ou plusieurs règles commerciales (Marge négative, Marge sous la cible, Risque de rupture, Piège de capital en surstock ou Pic de coût significatif) apparaissent dans la file d'exception, accompagnés d'un niveau de priorité calculé (`High`, `Medium`, `Low`) et d'une action opérationnelle prescrite.

---

## Pourquoi j'ai conçu ce cadre analytique Cin7

Un système ERP excelle dans l'enregistrement des transactions, l'application des flux de commandes et la tenue des pistes d'audit. Cependant, les journaux de transactions opérationnels se traduisent rarement directement en clarté commerciale.

Dans les opérations quotidiennes de vente en gros, de fabrication et d'e-commerce, trois angles morts nuisent régulièrement à la trésorerie :
1. Un SKU se classe parmi les meilleures ventes dans les rapports de revenus, alors que son coût d'achat rendu ne laisse pratiquement aucune marge brute.
2. Un rapport d'entrepôt montre un stock disponible abondant, alors que 80 % de ces unités sont déjà allouées à des commandes de gros ouvertes — laissant l'équipe exposée à des ruptures immédiates sur les nouveaux engagements.
3. Un fournisseur augmente discrètement ses prix unitaires de 14 % sur le dernier bon de commande, et la hausse reste enfouie dans les journaux de réception jusqu'à ce que les marges brutes trimestrielles chutent.

J'ai conçu **Analyseur de performance commerciale Cin7** pour relier ces trois ensembles de données au sein d'un cadre Excel transparent et reproductible. Chaque formule, hypothèse de coût et paramètre de seuil reste visible et auditable par votre équipe. Lorsque le classeur déclenche une alerte d'exception, il sert d'invite structurée invitant vos acheteurs, planificateurs ou responsables tarification à examiner l'enregistrement Cin7 sous-jacent et à agir sur la base de preuves.

---

## Goulots d'étranglement courants du reporting ERP Cin7 face à l'analyse Excel automatisée

| Goulot d'étranglement du reporting ERP Cin7 | Limites de l'export CSV manuel et des rapports natifs (sans cet outil) | Modèle Excel automatisé et rapprochement des SKU (avec cet outil) |
| :--- | :--- | :--- |
| **Exports de ventes, de SOH et de PO déconnectés** | Les analystes téléchargent séparément les CSV de ventes, de stock disponible et d'achats, passant des heures à écrire des formules `VLOOKUP` ou `XLOOKUP` fragiles qui cassent chaque mois. | Un flux de travail unifié en collage de valeurs ingère les trois exports Cin7 et rapproche automatiquement les indicateurs sur une liste de référence SKU normalisée. |
| **Illusion du chiffre d'affaires et marges négatives cachées** | Les rapports de ventes brutes célèbrent les SKU à fort volume tout en masquant les articles vendus en dessous du coût de remplacement ou en dessous des seuils de marge brute cibles. | Le chiffre d'affaires par ligne, le COGS unitaire estimé, la marge brute ($) et la marge brute (%) sont audités côte à côte au regard de cibles de rentabilité configurables. |
| **Disponibilité en entrepôt surestimée (SOH vs. ATP)** | Les équipes confondent le stock physique total de l'entrepôt avec le stock vendable, déclenchant des surventes et des commandes en souffrance sur du stock déjà engagé. | Le stock physique et les quantités allouées aux commandes sont consolidés séparément sur tous les entrepôts, isolant le véritable **stock non alloué** pour les nouvelles commandes. |
| **Fonds de roulement immobilisé dans le stock dormant** | Les SKU à coût élevé et à vélocité nulle passent inaperçus dans les listes multi-entrepôts, drainant la trésorerie et gonflant les coûts de détention. | La **valorisation des stocks ($)**, les **jours de couverture (DOS)**, les **jours de rotation** et les **classifications ABC** automatisés isolent les pièges de trésorerie à rotation lente et en surstock. |
| **Dérive des prix fournisseurs inaperçue (écart sur les PO)** | Comparer le dernier prix facturé d'un fournisseur au coût moyen historique exige une inspection manuelle, ligne par ligne, des réceptions d'achat passées. | Les calculs d'écart automatisés comparent le **coût moyen pondéré (WAC)** au **dernier coût de PO enregistré**, signalant instantanément les pics de coût significatifs. |
| **Exports de données ERP non filtrés et paralysie de l'analyse** | Les responsables filtrent manuellement des milliers de lignes de feuilles de calcul chaque lundi pour déterminer quels incendies tarifaires ou d'achat éteindre en premier. | Un **rapport d'exception** consolidé regroupe les déficits de marge, les alertes de rupture et les écarts de coût des PO, avec classements de priorité et actions recommandées. |

---

## À qui ceci s'adresse : flux de travail de reporting Cin7 par rôle et cas d'usage

Cette boîte à outils est conçue pour des rôles opérationnels précis à la recherche d'un **modèle de reporting Cin7** ou d'un **calculateur de marge des stocks** reproductible :

- **Dirigeants de PME, fondateurs et directeurs financiers fractionnés (`Tableau de bord des indicateurs clés exécutifs et du fonds de roulement Cin7`) :**
  - *Cas d'usage opérationnel :* Mener des revues financières mensuelles, suivre l'atteinte du budget de marge brute, auditer la trésorerie totale immobilisée dans les stocks à rotation lente et identifier le top 5 des SKU générateurs de profit sans attendre un développement BI sur mesure.
- **Planificateurs de stock et responsables des opérations d'entrepôt (`Modèle de santé des stocks, d'ABC et de réapprovisionnement Cin7`) :**
  - *Cas d'usage opérationnel :* Auditer le **stock disponible (SOH)** multi-entrepôts face au **stock alloué**, calculer les **jours de couverture (DOS)**, prévenir les ruptures sur les best-sellers de classe A et constituer des listes de liquidation pour le surstock ancien.
- **Responsables des achats et des approvisionnements (`Feuille d'écart de coût des bons de commande et d'audit fournisseurs Cin7`) :**
  - *Cas d'usage opérationnel :* Suivre les réceptions d'achat multidevises (USD, EUR, devise de base), repérer l'inflation du coût unitaire fournisseur (`Dernier prix de PO vs. WAC`) et préparer des renégociations de prix fournisseurs étayées par les données.
- **Responsables des ventes e-commerce et multicanal (`Calculateur de rentabilité par canal et de marge par SKU Cin7`) :**
  - *Cas d'usage opérationnel :* Comparer la véritable économie unitaire des produits sur Shopify, Amazon, eBay et les portails de vente en gros B2B après prise en compte des provisions pour frais de canal, et retirer les SKU à marge négative des catalogues actifs.
- **Analystes métier ERP et consultants en opérations (`Classeur de nettoyage et de rapprochement des données CSV Cin7`) :**
  - *Cas d'usage opérationnel :* Remplacer le traitement ad hoc des feuilles de calcul hebdomadaires par un modèle Excel standardisé et contrôlé contre les erreurs, qui nettoie les exports de SKU dégradés et produit des rapports d'exception prêts pour le comité de direction en moins de 15 minutes.

### Pour qui cette boîte à outils n'est pas conçue
Pour définir des attentes précises avant votre téléchargement, ce classeur ne sert **pas** :
- **Les entreprises cherchant un remplacement ERP complet :** Il s'agit d'une couche analytique compagnon pour les données Cin7 Core / Cin7 Omni existantes, et non d'un système transactionnel de gestion des commandes ou d'exécution d'entrepôt.
- **Les équipes exigeant un flux API en direct :** Le flux de travail repose sur des exports CSV/Excel périodiques (hebdomadaires, bimensuels ou mensuels) plutôt que sur une synchronisation par webhook en temps réel.
- **Les audits de grand livre légaux GAAP/IFRS :** Les chiffres de profit représentent des estimations opérationnelles fondées sur les réceptions d'achat enregistrées et les provisions de frais de canal configurables ; ils ne remplacent pas les réconciliations comptables complètes du coût rendu couvrant les factures de fret, les droits de douane, les remboursements de taxes, les retours clients et les allocations de frais généraux d'entrepôt.
- **L'exécution automatisée des bons de commande :** La boîte à outils signale les risques de rupture et les exceptions de coût pour examen humain ; elle ne transmet pas automatiquement les bons de commande aux fournisseurs.

---

## Quand utiliser cet analyseur Cin7 : scénarios opérationnels à fort impact

Les équipes déploient généralement l'**Analyseur de performance commerciale Cin7** dans le cadre de quatre flux de travail métier récurrents :

1. **Réunions hebdomadaires de planification des ventes et des opérations (S&OP) :** Importez les 30 ou 90 derniers jours d'exports Cin7 chaque lundi matin pour aligner les responsables des achats, de l'entrepôt et des ventes autour d'un `Exception_Report` unique.
2. **Audits de coût fournisseur et de marge avant réapprovisionnement :** Avant d'approuver un bon de commande de réapprovisionnement important dans Cin7, vérifiez si les récentes hausses de prix fournisseurs ont fait passer la marge brute projetée du SKU en dessous du seuil de votre entreprise.
3. **Liquidation trimestrielle du stock dormant et rationalisation des SKU :** Filtrez `Inventory_Analytics` à l'aide des indicateurs `Overstock` et `Slow-Moving` pour identifier les montants exacts immobilisés dans les SKU stagnants, libérant ainsi du fonds de roulement grâce à des promotions de déstockage ciblées.
4. **Réinitialisations annuelles des tarifs et revues des frais de place de marché :** Ajustez les paramètres `Channel_Fee_Allowance` et de taux de change afin de tester la résistance de la rentabilité SKU finale face aux hausses de commission des places de marché ou aux fluctuations de devises.

> **Prérequis techniques et note sur la qualité des données :** Aucune connaissance avancée des macros Excel ou du VBA n'est requise. L'aperçu navigateur s'exécute instantanément en ligne, et le classeur `.xlsx` n'exige que Microsoft Excel standard (prenant en charge les fonctions de tableaux dynamiques) ainsi qu'une familiarité de base avec l'export de fichiers CSV depuis Cin7 et le collage de valeurs. La précision des sorties dépend directement de l'exhaustivité de vos exports sources Cin7 et de la validité de vos taux de change et hypothèses de seuil configurés.

---

## À propos du créateur

Je conçois des outils analytiques légers et orientés décision pour les opérateurs du commerce de gros, de la fabrication et de l'e-commerce qui en ont assez de se noyer dans des feuilles de calcul ERP déconnectées. Chaque boîte à outils est construite autour d'une question directrice : **Quels chiffres opérationnels précis doivent être réunis pour que la direction puisse prendre la prochaine décision d'achat, de tarification ou de stock avec confiance ?**

L'**Analyseur de performance commerciale Cin7** applique cette méthodologie à la rentabilité par SKU, à l'exposition du fonds de roulement et au contrôle des coûts fournisseurs — offrant à votre équipe une visibilité immédiate à partir des données Cin7 que vous possédez déjà.

- 🌐 **[Prévisualiser l'analyseur web Cin7 dans votre navigateur](https://hyvoid.github.io/cin7-excel-reporting-template/)**
- 📥 **[Obtenir le classeur Excel complet réutilisable (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**


---

## Détails techniques

<details>
<summary>Pour les relecteurs techniques, les praticiens d'Excel et les collaborateurs</summary>


### Architecture du classeur

Le classeur est conçu comme un pipeline de données à sens unique, avec cinq couches fonctionnelles et 12 feuilles de calcul. Les saisies brutes sont séparées des calculs, des sorties analytiques et du reporting de gestion afin de réduire les écrasements accidentels et de rendre le chemin de calcul plus facile à inspecter.

| Couche | Feuille de calcul | Responsabilité principale | Sorties clés |
|---|---|---|---|
| Navigation | `Instructions` | Expliquer la structure du classeur, la séquence opératoire et les conventions d'entrée/sortie | Conseils d'utilisation |
| Configuration | `Parameters` | Centraliser les paramètres de devise, les taux de change, les périodes d'analyse, les seuils de marge, les seuils de stock, les limites de classification ABC, les seuils d'écart de coût et les objectifs budgétaires | Hypothèses métier partagées |
| Données brutes | `Import_Sales` | Contenir les lignes de transactions de vente exportées | Quantités, prix, remises, devises, canaux et identifiants SKU des ventes |
| Données brutes | `Import_Inventory` | Contenir un instantané des stocks | Stock physique, stock réservé, stock entrant, attributs produit et coûts unitaires de référence |
| Données brutes | `Import_Purchases` | Contenir le détail des réceptions d'achat | Quantités reçues, prix d'achat, fournisseurs, dates et devises |
| Préparation des données | `Data_Cleaning` | Normaliser les identifiants SKU et consolider les enregistrements de stock entre entrepôts | Liste canonique des SKU, quantités de stock consolidées, statut des données de référence |
| Moteur de coût | `Cost_Engine` | Convertir les montants d'achat en devise de base et calculer les références de coût d'achat | Coût d'achat moyen pondéré, coût unitaire standard approuvé, dernier coût d'achat, écart de coût |
| Moteur de marge | `Margin_Engine` | Normaliser les enregistrements de vente, convertir les ventes nettes en devise de base, apparier les coûts et calculer la rentabilité par ligne | Chiffre d'affaires net, coût des marchandises vendues (COGS), marge brute, marge brute en % |
| Analyse des stocks | `Inventory_Analytics` | Évaluer le stock disponible, la valeur des stocks, la vélocité des ventes, les jours de couverture, la rotation, la classification ABC et la santé des stocks | Exposition au stock et signaux de réapprovisionnement ou de surstock |
| Analyse des ventes | `Sales_Analytics` | Agréger la rentabilité par SKU et par canal de vente | Classements de marge par SKU, notations de rentabilité, contribution par canal |
| Suivi des exceptions | `Exception_Report` | Consolider les exceptions de profit, de stock et de coût d'achat | Classification des risques, estimations d'exposition, actions recommandées |
| Reporting de gestion | `Executive_Dashboard` | Synthétiser la performance au niveau de l'entreprise et les éléments prioritaires | Chiffre d'affaires, COGS, marge brute, marge brute en %, atteinte du budget, valeur des stocks, exposition au risque et Top 5 des SKU contributeurs au profit |

### Flux de données

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

La direction prévue va des données source vers les sorties calculées. Les utilisateurs conservent la main sur les exports bruts et les paramètres métier ; les feuilles en aval dérivent leurs résultats de ces entrées.

Les spécifications du classeur utilisent des fonctions modernes de tableaux dynamiques Excel, notamment `UNIQUE`, `FILTER`, `SORT`, `SORTBY`, `XLOOKUP`, `SUMIFS`, `LET`, `SCAN`, `MAP` et `LAMBDA`. Les plages générées par formules sont conçues pour s'étendre automatiquement lorsque le nombre d'enregistrements source ou de SKU distincts augmente, sous réserve de la compatibilité d'Excel et de l'espace disponible dans la feuille.

### Contrat d'entrée et de sortie

#### Paramètres globaux

La feuille `Parameters` fournit une zone de configuration centralisée. La spécification place 14 paramètres métier dans `C4:C17`.

| Cellule | Paramètre | Exemple de valeur par défaut | Objectif |
|---|---|---:|---|
| `C4` | Symbole de la devise de base | Défini par l'utilisateur | Contrôle les libellés de devise et les conventions d'affichage |
| `C5` | Taux de change USD vers devise de base | `1.0000` | Convertit les transactions libellées en USD |
| `C6` | Taux de change EUR vers devise de base | `1.0800` | Convertit les transactions libellées en EUR |
| `C7` | Période d'analyse en jours | `90` | Définit la période d'observation des ventes |
| `C8` | Référence de marge brute cible | `35%` | Définit le niveau de rentabilité cible |
| `C9` | Marge brute minimale acceptable | `10%` | Identifie les produits à faible marge |
| `C10` | Taux de frais de plateforme du canal | `5%` | Estime la contribution du canal après les frais configurés |
| `C11` | Seuil d'alerte de stock bas | `15` days | Signale les stocks dont les jours de couverture sont limités |
| `C12` | Seuil de surstock | `90` days | Signale les stocks dont les jours de couverture sont excessifs |
| `C13` | Seuil de ventes du stock à rotation lente | `0` units | Aide à identifier les SKU en stock dont les ventes observées sont insuffisantes |
| `C14` | Seuil de valeur cumulée de la classe A ABC | `70%` | Définit la première limite de classification de la valeur des stocks |
| `C15` | Seuil de valeur cumulée de la classe B ABC | `90%` | Définit la deuxième limite de classification de la valeur des stocks |
| `C16` | Seuil d'écart de coût d'achat | `15%` | Signale les changements significatifs du coût d'achat |
| `C17` | Objectif budgétaire mensuel de marge brute | `500,000` | Fournit la cible utilisée dans le reporting d'atteinte du budget |

Ces valeurs sont des exemples de paramètres par défaut issus de la spécification d'implémentation, et non des références opérationnelles universelles. Elles doivent être revues au regard des politiques commerciales réelles de votre entreprise et de ses exigences de reporting.

**Convention de devise :** `C4` contrôle le symbole de devise de base affiché. Les valeurs de taux de change saisies dans `C5` et `C6` doivent être configurées de manière cohérente avec cette devise de base. Les taux donnés en exemple ne sont pas des cotations de change en direct.

#### Saisies de données brutes

Les feuilles de saisie sont destinées à contenir les enregistrements source plutôt que des calculs maintenus par l'utilisateur.

| Feuille de calcul | Champs métier requis |
|---|---|
| `Import_Sales` | Numéro de commande de vente, date de vente, canal, client, SKU d'origine, quantité, prix de vente unitaire, devise de la transaction, taux de remise de ligne |
| `Import_Inventory` | SKU d'origine, nom du produit, catégorie, entrepôt, quantité physique, quantité réservée, quantité d'achat entrante, coût unitaire de référence |
| `Import_Purchases` | Numéro de bon de commande, date de réception, fournisseur, SKU d'origine, quantité reçue, prix d'achat unitaire, devise de règlement |

La spécification source définit neuf champs de ventes, huit champs de stock et sept champs d'achat. Les exports Cin7 réels peuvent utiliser des noms de colonnes différents ou inclure des champs supplémentaires. La disposition de l'import doit donc être alignée sur la structure d'export source prévue avant toute utilisation courante.

#### Principales sorties analytiques

| Feuille de calcul | Principaux champs de sortie |
|---|---|
| `Data_Cleaning` | SKU standard, nom et catégorie de produit standard, quantités physiques/réservées/entrantes consolidées, statut de cohérence des données de référence |
| `Cost_Engine` | Quantité totale reçue, montant d'achat en devise de base, coût d'achat unitaire moyen pondéré, coût unitaire de référence, coût unitaire standard approuvé, dernier coût d'achat unitaire, écart de coût d'achat |
| `Margin_Engine` | Détails de commande normalisés, quantité de vente valide, taux de change appliqué, chiffre d'affaires net des ventes, coût unitaire apparié, COGS, marge brute de la ligne, marge brute de la ligne en % |
| `Inventory_Analytics` | Stock disponible, valeur des stocks, quantité vendue sur la période, ventes quotidiennes moyennes, jours de couverture, rotation, part cumulée de la valeur des stocks, classe ABC, statut de santé des stocks |
| `Sales_Analytics` | Chiffre d'affaires par SKU, COGS, marge brute, marge brute en %, contribution à la marge brute, notation de rentabilité, chiffre d'affaires et coûts par canal, contribution du canal après les frais de plateforme configurés, classement des canaux |
| `Exception_Report` | Libellés d'exception par SKU, indicateurs de stock et de coût, exposition au risque estimée, classification de priorité, action de gestion recommandée |
| `Executive_Dashboard` | Ventes nettes totales, COGS, marge brute, marge brute en %, atteinte du budget de marge brute, valeur des stocks, jours de rotation des stocks, exposition à la rotation lente et au surstock, nombre d'exceptions de haute priorité, Top 5 des SKU contributeurs au profit |

### Cadre décisionnel : cinq questions analytiques

Le classeur est conçu pour relier cinq questions opérationnelles plutôt que de traiter chaque rapport comme un tableau de bord isolé.

1. **Les enregistrements sous-jacents sont-ils comparables ?** La normalisation des SKU et les données de stock consolidées aident à réduire les incohérences causées par les différences de formatage et les enregistrements multi-entrepôts.
2. **Quelle est la contribution estimée à la marge brute de chaque produit ?** Le chiffre d'affaires est normalisé dans la devise de base, puis confronté à une référence de coût unitaire calculée.
3. **Où le fonds de roulement est-il immobilisé ?** La valeur des stocks, les jours de couverture, la rotation et la classification ABC identifient les produits qui méritent différents niveaux d'attention en matière d'achat et de contrôle des stocks.
4. **Quelles exceptions exigent une action en priorité ?** Les signaux de rentabilité, de santé des stocks et de coût d'achat sont consolidés en une liste d'exceptions priorisée.
5. **Que doit examiner la direction en premier ?** Le tableau de bord exécutif combine les résultats globaux avec l'atteinte du budget, l'exposition des stocks et les produits à forte contribution.

Ces questions sont liées, mais leurs sorties ne sont pas interchangeables. La marge brute n'est pas la même chose que le résultat d'exploitation ou le flux de trésorerie ; la valeur des stocks n'est pas la même chose que la trésorerie récupérable ; et une estimation de contribution par canal ne constitue pas un compte de résultat complet au niveau du canal.

### Pièges analytiques et logique corrective

Les exemples suivants illustrent les risques décisionnels que le cadre vise à réduire. Il s'agit de scénarios analytiques, et non d'affirmations sur les résultats réels d'une entreprise particulière.

#### Piège 1 : Confondre le chiffre d'affaires avec la rentabilité produit

**Décision :** Augmenter les achats pour un SKU à fort chiffre d'affaires.

**Faille cachée :** La décision s'appuie sur le volume des ventes ou le chiffre d'affaires sans vérifier le coût affecté aux unités vendues.

Supposons qu'un produit génère 100,000 de ventes nettes et que son COGS apparié s'élève à 85,000. Sa marge brute est de 15,000 et sa marge brute de 15 %. Un deuxième produit génère 60,000 de ventes nettes contre 30,000 de COGS, dégageant 30,000 de marge brute et une marge brute de 50 %.

| Indicateur | Produit A | Produit B |
|---|---:|---:|
| Ventes nettes | 100,000 | 60,000 |
| COGS | 85,000 | 30,000 |
| Marge brute | 15,000 | 30,000 |
| Marge brute en % | 15% | 50% |

Le chiffre d'affaires seul oriente vers le produit A. La contribution à la marge brute oriente vers le produit B.

L'approche corrigée consiste à évaluer ensemble le chiffre d'affaires, le COGS, la marge brute et la marge brute en % avant de prendre des décisions de stock ou de promotion. La conclusion doit néanmoins tenir compte de la demande, de la disponibilité du stock et des autres coûts commerciaux pertinents.

<details>
<summary>Référence de calcul</summary>

```text
Gross Profit = Net Sales - COGS

Product A:
100,000 - 85,000 = 15,000

Product B:
60,000 - 30,000 = 30,000

Gross Margin = Gross Profit / Net Sales
```

</details>

#### Piège 2 : Confondre le stock physique avec le stock disponible à la vente

**Décision :** Confirmer une nouvelle commande client parce que le rapport de stock indique 100 unités disponibles.

**Faille cachée :** Le rapport ne distingue pas le stock physique du stock déjà réservé pour des commandes existantes.

Supposons qu'un SKU dispose de 100 unités physiques, de 80 unités réservées et d'aucune unité disponible supplémentaire issue du stock entrant. Seules 20 unités restent non réservées avant l'application de toute politique de stock de sécurité distincte.

| Indicateur | Quantité |
|---|---:|
| Stock physique | 100 |
| Stock réservé | 80 |
| Stock physique non réservé | 20 |

L'approche corrigée consiste à évaluer le stock non réservé plutôt que le stock physique seul. Si votre entreprise doit également préserver un tampon de stock de sécurité, ce tampon doit être intégré à sa politique réelle de disponibilité plutôt que d'être supposé reflété automatiquement par ce calcul.

Cela évite que les engagements commerciaux reposent sur un stock déjà alloué ailleurs.

<details>
<summary>Référence de calcul</summary>

```text
Available Physical Stock = Physical Stock - Reserved Stock

100 - 80 = 20 units
```

Le classeur enregistre également les quantités d'achat entrantes, mais le stock entrant ne doit pas être considéré comme physiquement disponible, à moins que la politique d'exploitation ne l'autorise explicitement.

</details>

#### Piège 3 : Considérer un prix d'achat bas comme la preuve d'une meilleure économie de stock

**Décision :** Continuer d'acheter auprès d'un fournisseur parce que son dernier prix unitaire paraît attractif.

**Faille cachée :** La comparaison ignore la référence de coût existante, la conversion de devise ou l'effet d'un récent changement de coût d'achat sur la rentabilité du produit.

Supposons que la référence de coût unitaire comparable précédente soit de 20 et qu'une nouvelle réception soit enregistrée à 24 dans la même devise et sur une base comparable. Le coût unitaire a augmenté de 20 %, dépassant le seuil d'écart de 15 % donné en exemple.

| Indicateur | Valeur |
|---|---:|
| Référence de coût précédente | 20 |
| Dernier coût d'achat | 24 |
| Augmentation absolue | 4 |
| Augmentation relative | 20% |
| Seuil d'alerte donné en exemple | 15% |

L'approche corrigée consiste à vérifier l'enregistrement d'achat, à comparer les coûts sur une base de devise cohérente et à déterminer si le changement reflète une tarification fournisseur, un mouvement de devise ou un problème de qualité des données, avant de modifier les prix ou de passer la commande suivante.

Une alerte d'écart est une invite à enquêter, et non la preuve que le fournisseur a agi de manière incorrecte ou que l'achat doit être automatiquement rejeté.

<details>
<summary>Référence de calcul</summary>

```text
Cost Variance Rate =
    (Latest Purchase Cost - Previous Cost Benchmark)
    / Previous Cost Benchmark

(24 - 20) / 20 = 20%
```

La règle d'exception documentée du classeur utilise la valeur absolue de l'écart de coût d'achat lors de sa comparaison avec le seuil configuré.

</details>

### Scénario d'exemple : des enregistrements exportés à la revue de direction

Considérons une entreprise hypothétique disposant de plusieurs canaux de vente et emplacements d'entrepôt. L'entreprise exporte les lignes de vente, un instantané des stocks et les enregistrements de réception d'achat depuis son système existant.

La période d'analyse est fixée à 90 jours. La marge brute cible d'exemple est de 35 %, le seuil de faible marge de 10 %, l'alerte de stock bas de 15 jours de couverture et le seuil de surstock de 90 jours de couverture.

Les enregistrements importés donnent les résultats suivants pour un SKU :

| Entrée ou calcul | Exemple de valeur |
|---|---:|
| Ventes nettes sur la période d'analyse | 100,000 |
| COGS apparié | 85,000 |
| Marge brute | 15,000 |
| Marge brute en % | 15% |
| Stock physique | 500 units |
| Stock réservé | 100 units |
| Stock physique non réservé net | 400 units |
| Ventes sur la période de 90 jours | 900 units |
| Ventes quotidiennes moyennes | 10 units |
| Jours de couverture | 40 days |

La marge brute est inférieure à la cible de 35 %, mais supérieure au seuil minimal de 10 %. Le SKU nécessite donc une revue de rentabilité, même s'il n'est pas nécessairement classé comme une exception de faible marge au regard de la règle configurée.

La position de stock représente environ 40 jours de couverture, ce qui se situe entre les seuils d'exemple de stock bas et de surstock. Cela n'établit pas automatiquement que le niveau de stock est optimal : les délais d'approvisionnement, la variabilité de la demande et les exigences de stock de sécurité restent déterminants.

La recommandation pratique consiste à examiner la tarification, les remises et les hypothèses de coût du SKU, tout en vérifiant si la couverture de stock actuelle est adaptée à la demande attendue. Si le produit contribue de manière substantielle à la marge brute totale, une revue des prix ou du coût fournisseur peut être plus appropriée qu'une décision de retrait immédiat.

Le tableau de bord facilite cette revue en plaçant la rentabilité produit, l'exposition des stocks et les signaux d'exception dans un flux de reporting commun. La décision finale reste tributaire des données source vérifiées et des contraintes d'exploitation de l'entreprise.

### Référence des formules

Les formules ci-dessous décrivent la logique de calcul prévue du classeur. Ce sont des modèles de référence plutôt que des formules vérifiées cellule par cellule issues d'un classeur publié. Adaptez les références de colonnes à la disposition réelle de la feuille avant l'implémentation.

<details>
<summary>1. Normalisation des SKU et consolidation des stocks</summary>

**Objectif :** Réduire les discordances causées par les différences de formatage des SKU et consolider les enregistrements de stock entre les emplacements d'entrepôt.

```excel
=UPPER(TRIM(SKU_Cell))
```

Ce modèle de normalisation supprime les espaces de début et de fin et met le texte des SKU en majuscules. Appliquez la même convention de normalisation aux enregistrements de ventes, de stock et d'achats avant de rapprocher les enregistrements entre sources.

```excel
=UNIQUE(Standardized_SKU_Range)
```

Renvoie une liste distincte d'identifiants SKU normalisés.

**Modèle d'agrégation des stocks :**

```excel
=SUMIFS(
    Physical_Quantity_Range,
    Standardized_SKU_Range,
    Current_SKU
)
```

Répétez l'agrégation pour les quantités réservées et les quantités entrantes. Les critères d'agrégation doivent utiliser la même clé SKU normalisée dans toutes les tables source.

**Important :** La normalisation des SKU peut résoudre les différences de casse et les espaces environnants. Elle ne peut pas résoudre de manière fiable des identifiants produit réellement différents, des affectations de SKU incorrectes ou des relations de données de référence produit ambiguës. Ces cas exigent une revue des données source.

</details>

<details>
<summary>2. Calcul du coût d'achat</summary>

**Objectif :** Convertir les montants d'achat dans la devise de base configurée, calculer un coût d'achat moyen pondéré et identifier les changements survenus dans les coûts d'achat récents.

**Montant d'achat en devise de base :**

```text
Base-Currency Purchase Amount
    = Received Quantity
    × Purchase Unit Price
    × Applicable Exchange Rate
```

Le taux de change doit suivre une convention cohérente : unités de devise de base par unité de devise de transaction. Si les données source contiennent déjà des valeurs en devise de base, ne convertissez pas ces valeurs une seconde fois.

**Coût d'achat unitaire moyen pondéré :**

```text
Weighted-Average Unit Cost
    = Total Base-Currency Purchase Amount
    / Total Received Quantity
```

Calculez le numérateur et le dénominateur sur la même population définie de réceptions d'achat valides. Excluez les enregistrements invalides et traitez les quantités totales nulles ou négatives conformément à la politique de saisie documentée.

**Écart de coût d'achat :**

```text
Cost Variance Rate
    = (Latest Unit Cost - Reference Unit Cost)
    / Reference Unit Cost
```

Le seuil configuré identifie les écarts significatifs à investiguer. Un coût de référence nul ou manquant doit être traité comme une comparaison indisponible, et non comme un écart en pourcentage valide.

La spécification distingue le coût d'achat moyen pondéré, un coût unitaire standard approuvé et le dernier coût d'achat unitaire. Leur sélection et leur ordre de priorité doivent être définis explicitement dans le classeur implémenté ; ils ne doivent pas être supposés interchangeables.

</details>

<details>
<summary>3. Calcul de la marge commerciale</summary>

**Objectif :** Calculer la rentabilité par ligne de commande à l'aide du chiffre d'affaires net des ventes et d'une référence de coût unitaire affectée.

```text
Net Sales Revenue
    = Quantity
    × Unit Selling Price
    × (1 - Line Discount Rate)
    × Applicable Exchange Rate
```

Ce modèle suppose que le taux de remise est exprimé en décimal et que le prix de vente unitaire exporté est avant remise de ligne. Si l'export source fournit déjà le chiffre d'affaires net de la ligne, utilisez cette valeur au lieu d'appliquer la remise une seconde fois.

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

La marge brute n'est pas définie lorsque le chiffre d'affaires net des ventes est nul. L'implémentation doit renvoyer un vide contrôlé ou un statut explicite plutôt que de diviser par zéro.

**Interprétation :** La marge brute mesure le montant restant après déduction du coût produit affecté. Elle n'inclut pas, en soi, l'ensemble des frais d'exploitation, des coûts de traitement des commandes, des coûts marketing ou d'autres charges pouvant être nécessaires pour déterminer une rentabilité complètement chargée.

</details>

<details>
<summary>4. Santé des stocks et classification ABC</summary>

**Objectif :** Estimer la disponibilité des stocks, la couverture, l'exposition de valeur et la contribution relative à la valeur des stocks.

```text
Unreserved Physical Stock
    = Physical Stock - Reserved Stock
```

Si votre entreprise applique une politique de stock de sécurité distincte, utilisez-la explicitement pour déterminer la disponibilité opérationnelle.

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

Lorsque les ventes quotidiennes moyennes sont nulles, les jours de couverture ne doivent pas être rapportés comme zéro. Utilisez un statut contrôlé tel que `No Recent Sales` ou une exception équivalente.

```text
Inventory Value
    = Selected Stock Quantity
    × Selected Unit Cost
```

L'implémentation doit définir quelle quantité et quelle base de coût sont utilisées pour la valorisation des stocks. Le stock physique, le stock non réservé et le stock entrant représentent des concepts opérationnels différents et ne doivent pas être combinés sans politique claire.

**Classification ABC :** Classez les SKU selon la mesure de valeur des stocks retenue, calculez la valeur cumulée des stocks en proportion du total, puis classez chaque SKU à l'aide des limites configurées des classes A et B.

L'exemple de configuration utilise des seuils de valeur cumulée de 70 % et 90 %. Ces limites sont des paramètres métier, et non des normes universelles. Le calcul doit également gérer un ensemble de stocks vide ou une valeur totale de stock nulle sans produire de pourcentages invalides.

</details>

<details>
<summary>5. Suivi des exceptions et indicateurs du tableau de bord</summary>

**Objectif :** Traduire les résultats analytiques en priorités de revue.

La spécification identifie cinq grands types d'exceptions :

- Marge brute nulle.
- Marge brute négative.
- Surstock.
- Risque de rupture ou de stock bas.
- Écart de coût d'achat.

Le classeur utilise des seuils configurables pour signaler les exceptions. Les libellés de statut exacts et leur ordre de priorité doivent être vérifiés par rapport à l'implémentation finale.

**Exemple de modèle de seuil de coût d'achat :**

```text
IF absolute cost variance exceeds configured threshold:
    Flag for investigation
ELSE:
    No cost-variance alert
```

**Atteinte du budget :**

```text
Gross-Profit Budget Attainment
    = Actual Gross Profit / Gross-Profit Budget Target
```

Lorsque la cible budgétaire est nulle ou manquante, le tableau de bord doit afficher un statut d'indisponibilité contrôlé plutôt qu'un ratio invalide.

**Contribution par canal :** La spécification inclut un taux de frais de plateforme estimé. Un calcul qui soustrait uniquement ces frais de la marge brute constitue une mesure de contribution partielle, et non un calcul complet du profit par canal. D'autres dépenses spécifiques au canal doivent être incluses séparément si votre entreprise a besoin d'une comparaison complètement chargée par canal.

</details>

### Règles de validation

Les règles suivantes décrivent les contrôles nécessaires pour garder les sorties analytiques interprétables. Lorsque la spécification source ne définit pas d'état d'erreur automatisé précis, le comportement attendu est énoncé comme une exigence d'implémentation plutôt que comme l'affirmation que le classeur l'applique déjà.

| Champ ou zone | Règle de validation | Comportement d'erreur attendu |
|---|---|---|
| Devise de base | Définir une devise de base et l'utiliser de manière cohérente dans toutes les sorties de reporting | Signaler les paramètres de devise incohérents ; ne pas mélanger silencieusement les devises |
| Taux de change | Exiger un taux valide et positif pour chaque devise étrangère nécessitant une conversion | Signaler les taux manquants ou invalides ; les montants convertis concernés ne doivent pas être considérés comme vérifiés |
| Période d'analyse | Exiger un nombre de jours positif | Rejeter ou signaler les périodes nulles, négatives ou manquantes |
| Seuils de marge | Utiliser des valeurs de pourcentage valides et garantir l'ordre prévu entre le seuil cible et le seuil minimal | Signaler les paramètres invalides pour revue |
| Taux de frais de canal | Exiger un taux valide, cohérent avec la convention de pourcentage attendue | Signaler les valeurs invalides plutôt que d'autoriser des contributions négatives ou gonflées involontaires |
| Limites ABC | Exiger des seuils de valeur cumulée compris entre 0 % et 100 %, la limite A ne devant pas être supérieure à la limite B | Signaler les limites incohérentes |
| Seuil d'écart de coût d'achat | Exiger un seuil de pourcentage non négatif | Signaler les paramètres négatifs ou non numériques |
| Cible budgétaire | Exiger une cible numérique valide pour le reporting d'atteinte | Afficher un statut d'indisponibilité lorsque le dénominateur est nul ou manquant |
| Quantité vendue | Valider les quantités numériques et investiguer les enregistrements invalides avant de calculer la rentabilité | Exclure ou signaler les lignes invalides selon la politique d'import documentée |
| Prix de vente unitaire | Valider les valeurs numériques et la convention de devise utilisée par l'export source | Signaler les prix invalides ; ne pas interpréter silencieusement les prix manquants comme des ventes à prix zéro vérifiées |
| Taux de remise de ligne | Valider la représentation numérique du taux et la plage métier autorisée | Signaler les taux invalides ; éviter d'appliquer la remise deux fois |
| Quantité achetée | Valider les quantités reçues et repérer les quantités nulles ou négatives exigeant un traitement spécial | Signaler les enregistrements qui ne peuvent pas être inclus en toute sécurité dans le coût moyen pondéré |
| Prix d'achat unitaire | Valider les valeurs numériques et la cohérence des devises | Signaler les prix invalides et empêcher qu'ils ne faussent silencieusement les références de coût |
| Identifiants SKU | Normaliser la casse et les espaces environnants de manière cohérente dans les trois imports | Signaler les identifiants manquants ou non appariés ; investiguer les correspondances ambiguës |
| Quantités de stock | Valider séparément les quantités physiques, réservées et entrantes | Signaler les soldes incohérents ou invalides ; ne pas supposer que le stock entrant est physiquement disponible |
| Appariement des coûts | Exiger une source de coût valide ou un repli explicitement approuvé | Signaler les coûts non appariés ; ne pas interpréter un coût manquant comme un coût zéro confirmé |
| Calcul de la marge brute | Ne pas diviser par un chiffre d'affaires net nul | Renvoyer un vide contrôlé ou un statut explicite |
| Calcul des jours de couverture | Ne pas diviser par des ventes quotidiennes moyennes nulles | Renvoyer un statut d'absence de ventes récentes ou un statut équivalent |
| Plages de sortie des tableaux dynamiques | Garder la zone de débordement des formules libre de toute valeur saisie manuellement | Résoudre les cellules bloquantes sans supprimer la cellule d'ancrage de la formule |
| Disposition de l'import | Faire correspondre les colonnes source aux définitions de champs attendues | Corriger le mappage d'import avant de vous appuyer sur les calculs en aval |

### Limites connues et compatibilité

#### Compatibilité Excel

Les spécifications du classeur reposent sur des fonctions modernes de tableaux dynamiques, notamment `FILTER`, `UNIQUE`, `SORTBY` et `SCAN`. Elles nécessitent Microsoft 365, Excel 2021, Excel 2024 ou une version WPS compatible prenant en charge les fonctions nécessaires.

Excel 2016, Excel 2019 et les versions antérieures ne sont pas pris en charge par la conception de calcul spécifiée.

#### Volume de données

La spécification cible jusqu'à 50 000 lignes de détail par table source, avec un total combiné recommandé inférieur à 100 000 lignes afin de maintenir des performances de calcul réactives. Les performances réelles dépendent de l'application tableur, du matériel, de la complexité des formules et de la taille des données importées.

#### Édition et collaboration

- Ne triez pas manuellement, ne saisissez pas de données et n'écrasez pas les plages de débordement des tableaux dynamiques.
- Évitez que plusieurs utilisateurs collent et modifient indépendamment les données source dans la même copie de travail.
- Conservez une copie séparée des exports d'origine afin que les erreurs d'import puissent être tracées et corrigées.
- Vérifiez les correspondances de SKU, les paramètres de devise et les hypothèses de coût unitaire avant d'utiliser les sorties pour des décisions d'achat ou de tarification.

#### Interprétation du coût et du profit

Les coûts fondés sur les réceptions d'achat peuvent ne pas correspondre au COGS reconnu par le système comptable dans toutes les situations. Le fret, les droits de douane, l'allocation du coût rendu, les retours, les avoirs fournisseurs, les dépréciations et les politiques de valorisation des stocks peuvent créer des écarts.

La marge calculée doit donc être traitée comme un résultat analytique opérationnel fondé sur la méthode de coût configurée, et non automatiquement comme un substitut aux états financiers réconciliés.

</details>


---

### Dépannage

<details>
<summary>Pourquoi Excel affiche-t-il #SPILL! ?</summary>

Une formule de tableau dynamique ne peut pas s'étendre parce qu'une ou plusieurs cellules de sa plage de sortie sont occupées.

1. Sélectionnez la cellule affichant `#SPILL!`.
2. Inspectez la plage de débordement indiquée à la recherche de valeurs saisies manuellement, d'espaces ou d'autres contenus bloquants.
3. Ne supprimez que les contenus involontaires qui bloquent la plage de débordement.
4. Préservez la formule dans la cellule d'ancrage.
5. Confirmez que la sortie s'étend comme prévu.

N'effacez pas la cellule d'ancrage de la formule lorsque vous résolvez une plage de débordement bloquée.

</details>

<details>
<summary>Pourquoi un nouveau produit affiche-t-il 100 % de marge brute ou un COGS nul ?</summary>

Le produit peut être absent des données de référence des stocks, n'avoir aucun historique de réception d'achat valide ou ne pas disposer d'un coût unitaire de référence configuré.

1. Vérifiez si le SKU existe dans l'import de stock.
2. Confirmez que son identifiant correspond au SKU normalisé utilisé par les enregistrements de ventes et d'achats.
3. Vérifiez s'il existe des réceptions d'achat valides pour le produit.
4. Si le produit n'a pas d'historique d'achat, vérifiez si un coût unitaire de référence légitime est disponible.
5. Recalculez et vérifiez la marge obtenue avant de l'utiliser pour des décisions de tarification ou d'achat.

Un résultat à coût zéro ne doit pas être interprété automatiquement comme un produit réellement sans coût.

</details>

<details>
<summary>Pourquoi les totaux de ventes, d'achats ou de stocks semblent-ils incohérents ?</summary>

Vérifiez la période de reporting, la devise de la transaction, les lignes source en double, l'appariement des SKU et le niveau de détail de chaque jeu de données importé. Les tables de ventes et d'achats sont des enregistrements au niveau de la transaction, tandis que le stock est un instantané par SKU et par entrepôt. Additionner ou rapprocher ces jeux de données sans respecter leurs niveaux de détail différents peut produire des résultats trompeurs.

Comparez un petit échantillon d'enregistrements source avec la sortie calculée correspondante avant de vous fier aux totaux agrégés.

</details>

</details>

---


## Autres outils de cette série

Theseus Workshop développe des outils de décision métier légers fondés sur Excel pour des problèmes opérationnels et financiers récurrents.

- **Outils d'estimation des coûts de construction** — organisez les métrés, les hypothèses de coût et les estimations de projet.
- **Outils de rentabilité des stocks et des commandes** — reliez les stocks, les commandes, les coûts et la performance financière par produit.
- **Modèles de planification financière et de scénarios** — soutenez une budgétisation structurée, des prévisions et des revues de décision métier.

Explorez les projets disponibles sur le [profil GitHub Theseus Workshop](https://github.com/HyVoid).

## Licence

Ce projet est publié sous **Apache License 2.0**. Consultez le fichier `LICENSE` du dépôt pour les termes complets de la licence.
