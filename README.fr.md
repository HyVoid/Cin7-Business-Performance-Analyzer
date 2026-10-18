[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Analyseur de performance commerciale Cin7

## Transformez les exports Cin7 en décisions de stock, de rentabilité et de gestion — avec une version navigateur gratuite ou un classeur Excel réutilisable.

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange.svg)

**Une couche analytique opérationnelle réutilisable qui transforme les exports Cin7 bruts en connaissances sur le stock, la marge et la performance commerciale — sans installer de logiciel, sans construire de pile BI et sans reconcevoir les flux de travail existants.**

**Aucune inscription. Aucune installation. Gratuit dans votre navigateur.**

Essayez gratuitement la version navigateur. Si vous avez besoin de la version Excel, vous pouvez l'acheter avec une garantie de remboursement de 30 jours, sans questions.
>
> 🌐 **Ouvrir dans le navigateur** → [*démo HTML en direct*](https://hyvoid.github.io/Cin7-Business-Performance-Analyzer/)
> 📥 **Télécharger Excel** → *version du classeur Excel*
>
> Disponible en deux formats :
>
> * Version navigateur (HTML)
> * Version Excel (.xlsx)

---

## Ce qu'il aide à suivre

* Quels SKU génèrent du profit et lesquels consomment du fonds de roulement.
* La valeur du stock, la performance de rotation et le risque de vieillissement dans une vue opérationnelle unique.
* Le chiffre d'affaires, le coût et la contribution à la rentabilité au niveau des canaux.
* Les produits proches de la rupture de stock face aux produits accumulant un excédent de stock.
* La performance de marge brute par SKU, catégorie et canal de vente.
* Les exceptions opérationnelles qui nécessitent une intervention de la direction.

---

## Flux de travail de démarrage rapide

### 1. Configurer les hypothèses opérationnelles une seule fois

Ouvrez la feuille **Parameters** et définissez les hypothèses commerciales clés telles que :

* la méthode de valorisation des stocks,
* les seuils de vieillissement,
* les paramètres de classification ABC,
* les seuils de rentabilité,
* les règles d'alerte d'exception.

Cette configuration est généralement effectuée une seule fois et réutilisée.

---

### 2. Importer les exports Cin7 existants

Exportez les rapports standard directement depuis Cin7 et collez-les dans :

* `Import_Sales`
* `Import_Inventory`
* `Import_Purchases`

Aucune connexion à une base de données n'est requise.

Aucune restructuration des données n'est requise.

Les données peuvent aussi être copiées depuis des systèmes comptables, des exports ERP ou des feuilles de calcul existantes.

---

### 3. Examiner immédiatement les sorties de gestion

Naviguez vers :

* Analyses de stock
* Analyses des ventes
* Rapports d'exception
* Tableau de bord exécutif

Tous les calculs, classements, classifications et alertes se mettent à jour automatiquement.

Aucune formule manuelle.

Aucune reconstruction de tableau croisé dynamique.

Aucune maintenance de rapport.

---

### 4. Rafraîchir périodiquement

Répétez le processus d'export-collage chaque semaine, chaque mois, ou à chaque revue de direction.

Le cadre analytique reste inchangé.

Les données commerciales se mettent à jour.

---

**Définissez quelques paramètres clés. Déposez les données existantes. Obtenez l'analyse. Rafraîchissez au besoin.**

---

## Pourquoi j'ai conçu ceci

La plupart des problèmes d'implémentation ERP ne sont en réalité pas des problèmes ERP.

Dans beaucoup d'entreprises utilisant des systèmes comme Cin7, les transactions de stock, les transactions d'achat, les transactions de vente et les transactions de coûts existent déjà. Le problème est que la direction ne peut pas facilement convertir ces transactions en décisions commerciales.

Les questions de gestion typiques deviennent étonnamment difficiles :

* Quel SKU génère réellement du profit ?
* Quel stock consomme la trésorerie ?
* Quel canal de vente contribue la marge la plus élevée ?
* Quels produits créent un risque de rupture de stock ?
* La rotation des stocks s'améliore-t-elle ou se dégrade-t-elle ?

La solution habituelle est :

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

Cela crée un échec analytique caché :

> les données opérationnelles existent, mais la visibilité de la direction n'existe pas.

Par exemple :

| Avant                                                              | Après                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Le SKU A a généré 250 000 $ de chiffre d'affaires et semblait un meilleur performer | Le SKU A n'a généré que 8 % de marge brute et immobilisé 28 % du capital de stock |
| Le canal B affichait le volume de ventes le plus élevé                           | Le canal C a produit la marge de contribution la plus élevée                        |
| Le stock semblait sain                                          | 41 % de la valeur du stock n'avait pas bougé depuis 180 jours                          |

L'objectif de ce projet n'était pas de construire un tableau de bord de plus.

L'objectif était de productiser le processus de raisonnement qu'utilisent les opérateurs expérimentés lorsqu'ils convertissent des transactions ERP en décisions commerciales, et de rendre ce processus reproductible.

---

## Problèmes d'analyse ERP résolus par cet outil

| Problème                           | Sans cet outil                            | Avec cet outil                                  |
| --------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| Rentabilité des SKU peu claire         | Le chiffre d'affaires est confondu avec la rentabilité        | La véritable contribution de marge des SKU devient visible    |
| Exposition au capital de stock cachée | Le stock excédentaire s'accumule inaperçu       | La valeur et le vieillissement du stock deviennent mesurables     |
| Performance des canaux mal comprise | Les classements de chiffre d'affaires pilotent les décisions             | Les classements de profit pilotent les décisions                 |
| Rotation des stocks inconnue        | Ruptures et surstock surviennent simultanément | La rotation et la santé du stock deviennent mesurables |
| Les rapports de gestion sont manuels    | Plusieurs exports et feuilles de calcul requis   | Rapports de gestion automatisés                  |
| Exceptions opérationnelles manquées     | Problèmes découverts après la clôture financière    | Exceptions identifiées immédiatement               |

---

## À qui ceci s'adresse

Cet outil est conçu pour :

* Les opérateurs et administrateurs Cin7.
* Les responsables de stock et de chaîne d'approvisionnement.
* Les responsables des opérations.
* Les responsables financiers.
* Les propriétaires d'entreprise et PDG.
* Les grossistes, distributeurs et entreprises e-commerce à forte intensité de stock.

Cet outil est particulièrement utile lorsque :

* les données ERP existent,
* les rapports existent,
* mais la visibilité de la direction reste faible.

Cet outil n'est **pas conçu pour** :

* remplacer les systèmes ERP,
* les implémentations BI d'entreprise,
* les projets d'entrepôt de données,
* l'exécution de flux de travail transactionnels.

**Aucune expertise tableur n'est requise. Ouvrez la version navigateur ou utilisez le classeur Excel et commencez à analyser immédiatement.**

---

## À propos

Je conçois des trackers opérationnels légers et des outils d'aide à la décision pour des situations où il y a tout simplement trop de pièces mobiles pour les garder toutes en tête de façon fiable.

La question par laquelle je commence habituellement est :

> *Quelles informations doivent exister en un seul endroit pour que la prochaine décision commerciale puisse être prise avec confiance ?*

L'**Analyseur de performance commerciale Cin7** est un exemple de cette approche : transformer les transactions opérationnelles en raisonnement de gestion réutilisable.

---

## Détails techniques

<details>
<summary>Pour les relecteurs techniques, les praticiens d'Excel et les collaborateurs</summary>

---

### Architecture du classeur

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

| Feuille           | Fonction             |
| ------------------- | -------------------- |
| Instructions        | Guide de l'utilisateur        |
| Parameters          | Configuration        |
| Import_Sales        | Imports de ventes        |
| Import_Inventory    | Imports de stock    |
| Import_Purchases    | Imports d'achats     |
| Data_Cleaning       | Standardisation      |
| Cost_Engine         | Coût de stock    |
| Margin_Engine       | Moteur de rentabilité |
| Inventory_Analytics | Analyse de stock   |
| Sales_Analytics     | Analyse du chiffre d'affaires     |
| Exception_Report    | Détection d'exception  |
| Executive_Dashboard | Reporting exécutif  |

---

### Trois pièges qui capturent même les responsables de stock expérimentés

---

#### Piège 1 — Le chiffre d'affaires est confondu avec la rentabilité

Une décision d'achat a été prise.

La décision s'appuyait sur les classements de chiffre d'affaires des ventes.

| SKU | Chiffre d'affaires  | Marge brute |
| --- | -------- | ------------ |
| A   | 500 000 $ | 8 %           |
| B   | 300 000 $ | 42 %          |

La direction a augmenté les achats du SKU A.

Le raisonnement était incorrect car le chiffre d'affaires n'égale pas la contribution au profit.

L'approche corrigée évalue :

```text
Revenue
− Product Cost
− Channel Cost
− Inventory Carrying Cost
```

Résultat :

Le SKU B devient la cible d'investissement préférée.

<details>
<summary>Logique de formule</summary>

```excel
Gross Profit = Revenue - COGS

Gross Margin % =
Gross Profit / Revenue

Contribution Rank =
RANK(Gross Profit)
```

</details>

---

#### Piège 2 — La quantité de stock est confondue avec le risque de stock

Une décision de réapprovisionnement a été prise.

La décision s'appuyait sur la quantité en stock.

Cependant :

| SKU | Unités | Valeur    | Jours en stock |
| --- | ----- | -------- | ----------------- |
| A   | 500   | 8 000 $   | 20                |
| B   | 500   | 125 000 $ | 280               |

Le raisonnement a échoué car l'exposition au capital dépend de la valeur et du vieillissement du stock.

Approche correcte :

```text
Inventory Risk
=
Inventory Value
× Aging Factor
× Turnover Factor
```

Résultat :

Le SKU B devient la priorité opérationnelle.

<details>
<summary>Logique de formule</summary>

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

#### Piège 3 — Le chiffre d'affaires du canal est confondu avec la performance du canal

Une décision d'allocation marketing a été prise.

| Canal   | Chiffre d'affaires  | Marge |
| --------- | -------- | ------ |
| Amazon    | 500 000 $ | 12 %    |
| Gros | 350 000 $ | 33 %    |

La recommandation favorisait Amazon.

Le raisonnement a échoué car les classements de chiffre d'affaires ignoraient l'économie de contribution.

Approche correcte :

```text
Net Contribution
=
Revenue
− Product Cost
− Channel Cost
− Operational Cost
```

Résultat :

Le canal Gros est devenu le canal de croissance préféré.

<details>
<summary>Logique de formule</summary>

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

### Scénario d'exemple

Un distributeur exploite :

* 2 300 SKU actifs
* 5 canaux de vente
* 4,2 M$ de valeur de stock
* un chiffre d'affaires mensuel de 1,1 M$

Après import des exports Cin7 :

| Métrique                    | Résultat      |
| ------------------------- | ----------- |
| Valeur du stock           | 4,18 M$      |
| Stock de plus de 180 jours   | 1,36 M$      |
| SKU à marge négative      | 74          |
| SKU à risque de rupture        | 128         |
| Canal le plus rentable        | Gros   |
| Canal le moins performant | Marketplace |

L'analyse a identifié :

* 32 % du capital de stock était piégé dans des articles à rotation lente.
* 18 % du chiffre d'affaires provenait de produits à marge négative.
* Un canal de vente générait un chiffre d'affaires élevé mais des marges de contribution sous l'objectif.

Actions de la direction :

* réduire les achats de SKU à faible marge,
* liquider le stock excédentaire,
* prioriser les canaux rentables,
* réviser les politiques de réapprovisionnement.

Impact de la décision :

* rotation des stocks améliorée,
* exposition au fonds de roulement réduite,
* visibilité accrue de la rentabilité opérationnelle.

---

### Référence des formules

<details>
<summary>Moteur de coût</summary>

```excel
FIFO Cost
Weighted Average Cost
Inventory Valuation
COGS Allocation
```

</details>

<details>
<summary>Moteur de marge</summary>

```excel
Revenue
COGS
Gross Profit
Gross Margin %
Contribution Analysis
```

</details>

<details>
<summary>Analyses de stock</summary>

```excel
Inventory Days
Turnover Ratio
ABC Classification
Aging Analysis
Safety Stock Indicators
```

</details>

---

### Règles de validation

| Champ            | Règle                  | Comportement d'erreur |
| ---------------- | --------------------- | -------------- |
| SKU              | Ne peut pas être vide       | Signalé       |
| Quantité         | Doit être numérique       | Rejeté       |
| Coût             | Doit être positif      | Signalé        |
| Date de transaction | Date valide requise   | Rejeté       |
| Canal          | Doit exister dans le mapping | Signalé        |
| Valeur du stock  | Ne peut pas être négative    | Exception      |
| Marge           | Hors seuil     | Alerte          |
| Jours de stock   | Dépassement de la limite     | Exception      |

</details>

---

## Autres outils de cette série

* **Moteur de planification de stock DTC** — décisions de réapprovisionnement et de stock de sécurité.
* **Simulateur d'allocation de budget marketing** — optimisation de l'allocation budgétaire.
* **Système d'estimation des coûts de construction** — estimation des coûts et analyse d'appel d'offres.
* **Classeur de contrôle des opérations financières** — visibilité financière opérationnelle.

D'autres outils sont disponibles via les releases GitHub et notre [site web](https://www.theseusworkshop.com/).

---

## Licence

Ce projet est sous licence **Apache License 2.0**.

Voir le fichier LICENSE pour plus de détails.
