# Cin7 Business Performance Analyzer

### Turn Cin7 exports into inventory, profitability, and management decisions — with a free browser version or a reusable Excel workbook.

![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-green.svg)
![Tool](https://img.shields.io/badge/Tool-Decision%20Support-orange.svg)

**A reusable operational analytics layer that transforms raw Cin7 exports into inventory, margin, and business performance insights — without installing software, building a BI stack, or redesigning existing workflows.**

> ## **No signup. No installation. Free.**
>
> 🌐 **Open in Browser** → *HTML Live Demo*
> 📥 **Download Excel** → *Excel Workbook Release*
>
> Available in two formats:
>
> * Browser version (HTML)
> * Excel version (.xlsx)

---

## Screenshots

### Browser Version

<!-- screenshot: browser version -->

*Interactive management dashboard showing inventory exposure, SKU profitability, channel performance, and operational exceptions.*

### Excel Version

<!-- screenshot: excel version -->

*Reusable Excel decision workbook converting Cin7 exports into executive management analytics.*

---

## What It Helps You Track

* Which SKUs generate profit versus which consume working capital.
* Inventory value, turnover performance, and aging risk in one operational view.
* Channel-level revenue, cost, and profitability contribution.
* Products approaching stockout versus products accumulating excess inventory.
* Gross margin performance by SKU, category, and sales channel.
* Operational exceptions that require management intervention.

---

# Quick Start Workflow

### 1. Configure operating assumptions once

Open the **Parameters** worksheet and define key business assumptions such as:

* inventory valuation method,
* aging thresholds,
* ABC classification parameters,
* profitability thresholds,
* exception alert rules.

This configuration is typically performed once and reused.

---

### 2. Import existing Cin7 exports

Export standard reports directly from Cin7 and paste them into:

* `Import_Sales`
* `Import_Inventory`
* `Import_Purchases`

No database connection is required.

No data restructuring is required.

Data can also be copied from accounting systems, ERP exports, or existing spreadsheets.

---

### 3. Review management outputs immediately

Navigate to:

* Inventory Analytics
* Sales Analytics
* Exception Reports
* Executive Dashboard

All calculations, rankings, classifications, and alerts update automatically.

No manual formulas.

No pivot table rebuilding.

No report maintenance.

---

### 4. Refresh periodically

Repeat the export-and-paste process weekly, monthly, or whenever management reviews occur.

The analytical framework remains unchanged.

The business data updates.

---

**Set a few key parameters. Drop in existing data. Get the analysis. Refresh when needed.**

---

# Why I Built This

Most ERP implementation problems are not actually ERP problems.

In many businesses using systems like Cin7, inventory transactions, purchasing transactions, sales transactions, and costing transactions already exist. The problem is that management cannot easily convert those transactions into business decisions.

Typical management questions become surprisingly difficult:

* Which SKU actually generates profit?
* Which inventory consumes cash flow?
* Which sales channel contributes the highest margin?
* Which products create stockout risk?
* Is inventory turnover improving or deteriorating?

The usual solution is:

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

This creates a hidden analytical failure:

> operational data exists, but management visibility does not.

For example:

| Before                                                              | After                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| SKU A generated $250,000 revenue and appeared to be a top performer | SKU A generated only 8% gross margin and tied up 28% of inventory capital |
| Channel B showed the highest sales volume                           | Channel C produced the highest contribution margin                        |
| Inventory appeared healthy                                          | 41% of inventory value had not moved in 180 days                          |

The purpose of this project was not to build another dashboard.

The purpose was to productize the reasoning process experienced operators use when converting ERP transactions into business decisions, and make that process repeatable.

---

# Common ERP Analytics Problems This Solves

| Problem                           | Without This Tool                            | With This Tool                                  |
| --------------------------------- | -------------------------------------------- | ----------------------------------------------- |
| SKU profitability unclear         | Revenue is mistaken for profitability        | True SKU margin contribution becomes visible    |
| Inventory capital exposure hidden | Excess inventory accumulates unnoticed       | Inventory value and aging become measurable     |
| Channel performance misunderstood | Revenue rankings drive decisions             | Profit rankings drive decisions                 |
| Inventory turnover unknown        | Stockouts and overstock occur simultaneously | Turnover and inventory health become measurable |
| Management reporting is manual    | Multiple exports and spreadsheets required   | Automated management reporting                  |
| Operational exceptions missed     | Problems discovered after financial close    | Exceptions identified immediately               |

---

# Who This Is For

This tool is designed for:

* Cin7 operators and administrators.
* Inventory and supply chain managers.
* Operations managers.
* Finance managers.
* Business owners and CEOs.
* Inventory-heavy wholesalers, distributors, and ecommerce businesses.

This tool is especially useful when:

* ERP data exists,
* reporting exists,
* but management visibility remains poor.

This tool is **not designed for**:

* replacing ERP systems,
* enterprise BI implementations,
* data warehouse projects,
* transactional workflow execution.

**No spreadsheet expertise is required. Open the browser version or use the Excel workbook and begin analyzing immediately.**

---

# About

I build lightweight operational trackers and decision-support tools for situations where there are simply too many moving parts to hold in your head reliably.

The question I usually start with is:

> *What information must exist in one place so that the next business decision can be made confidently?*

The **Cin7 Business Performance Analyzer** is one example of that approach: transforming operational transactions into reusable management reasoning.

---

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

---

### Workbook Architecture

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

| Worksheet           | Function             |
| ------------------- | -------------------- |
| Instructions        | User guidance        |
| Parameters          | Configuration        |
| Import_Sales        | Sales imports        |
| Import_Inventory    | Inventory imports    |
| Import_Purchases    | Purchase imports     |
| Data_Cleaning       | Standardization      |
| Cost_Engine         | Inventory costing    |
| Margin_Engine       | Profitability engine |
| Inventory_Analytics | Inventory analysis   |
| Sales_Analytics     | Revenue analysis     |
| Exception_Report    | Exception detection  |
| Executive_Dashboard | Executive reporting  |

---

### Three Traps That Catch Even Experienced Inventory Managers

---

#### Trap 1 — Revenue Is Mistaken For Profitability

A purchasing decision was made.

The decision relied on sales revenue rankings.

| SKU | Revenue  | Gross Margin |
| --- | -------- | ------------ |
| A   | $500,000 | 8%           |
| B   | $300,000 | 42%          |

Management increased purchases of SKU A.

The reasoning was incorrect because revenue does not equal profit contribution.

The corrected approach evaluates:

```text
Revenue
− Product Cost
− Channel Cost
− Inventory Carrying Cost
```

Result:

SKU B becomes the preferred investment target.

<details>
<summary>Formula logic</summary>

```excel
Gross Profit = Revenue - COGS

Gross Margin % =
Gross Profit / Revenue

Contribution Rank =
RANK(Gross Profit)
```

</details>

---

#### Trap 2 — Inventory Quantity Is Mistaken For Inventory Risk

A replenishment decision was made.

The decision relied on stock quantity.

However:

| SKU | Units | Value    | Days in Inventory |
| --- | ----- | -------- | ----------------- |
| A   | 500   | $8,000   | 20                |
| B   | 500   | $125,000 | 280               |

The reasoning failed because capital exposure depends on inventory value and aging.

Correct approach:

```text
Inventory Risk
=
Inventory Value
× Aging Factor
× Turnover Factor
```

Result:

SKU B becomes the operational priority.

<details>
<summary>Formula logic</summary>

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

#### Trap 3 — Channel Revenue Is Mistaken For Channel Performance

A marketing allocation decision was made.

| Channel   | Revenue  | Margin |
| --------- | -------- | ------ |
| Amazon    | $500,000 | 12%    |
| Wholesale | $350,000 | 33%    |

The recommendation favored Amazon.

The reasoning failed because revenue rankings ignored contribution economics.

Correct approach:

```text
Net Contribution
=
Revenue
− Product Cost
− Channel Cost
− Operational Cost
```

Result:

Wholesale became the preferred growth channel.

<details>
<summary>Formula logic</summary>

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

### Example Scenario

A distributor operates:

* 2,300 active SKUs
* 5 sales channels
* $4.2M inventory value
* monthly revenue of $1.1M

After importing Cin7 exports:

| Metric                    | Result      |
| ------------------------- | ----------- |
| Inventory value           | $4.18M      |
| Inventory over 180 days   | $1.36M      |
| Negative-margin SKUs      | 74          |
| Stockout-risk SKUs        | 128         |
| Top profit channel        | Wholesale   |
| Lowest-performing channel | Marketplace |

Analysis identified:

* 32% of inventory capital was trapped in slow-moving stock.
* 18% of revenue came from negative-margin products.
* One sales channel generated high revenue but below-target contribution margins.

Management actions:

* reduce purchasing on low-margin SKUs,
* liquidate excess inventory,
* prioritize profitable channels,
* revise replenishment policies.

Decision impact:

* improved inventory turnover,
* reduced working capital exposure,
* increased operating profitability visibility.

---

### Formula Reference

<details>
<summary>Cost Engine</summary>

```excel
FIFO Cost
Weighted Average Cost
Inventory Valuation
COGS Allocation
```

</details>

<details>
<summary>Margin Engine</summary>

```excel
Revenue
COGS
Gross Profit
Gross Margin %
Contribution Analysis
```

</details>

<details>
<summary>Inventory Analytics</summary>

```excel
Inventory Days
Turnover Ratio
ABC Classification
Aging Analysis
Safety Stock Indicators
```

</details>

---

### Validation Rules

| Field            | Rule                  | Error Behavior |
| ---------------- | --------------------- | -------------- |
| SKU              | Cannot be blank       | Flagged        |
| Quantity         | Must be numeric       | Rejected       |
| Cost             | Must be positive      | Flagged        |
| Transaction Date | Valid date required   | Rejected       |
| Channel          | Must exist in mapping | Flagged        |
| Inventory Value  | Cannot be negative    | Exception      |
| Margin           | Outside threshold     | Alert          |
| Inventory Days   | Exceeds limit         | Exception      |

</details>

---

## Other Tools in This Series

* **DTC Inventory Planning Engine** — inventory replenishment and safety stock decisions.
* **Marketing Budget Allocation Simulator** — budget allocation optimization.
* **Construction Estimating System** — cost estimation and bid analysis.
* **Financial Operations Control Workbook** — operational finance visibility.

More tools available via GitHub releases and Gumroad.

---

## License

This project is licensed under the **Apache License 2.0**.

See the LICENSE file for details.
