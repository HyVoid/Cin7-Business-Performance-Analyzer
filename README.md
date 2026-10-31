[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Cin7 Business Performance Analyzer: Excel Reporting Template & Inventory Profitability Dashboard for Cin7 Core (DEAR) & Omni
<img width="2880" height="1228" alt="image" src="https://github.com/user-attachments/assets/2e8d2054-0ff2-46b5-9716-405840fa0be8" />


> **Product Summary:** **Cin7 Business Performance Analyzer** is a lightweight **Excel reporting template** and **inventory profitability dashboard** built for **Cin7 Core (formerly DEAR Inventory)** and **Cin7 Omni** users. It converts raw **Cin7 CSV exports** (sales orders, stock on hand, and purchase receipts) into an automated **SKU gross margin calculator**, **working capital tracker**, and **purchase order (PO) cost variance audit** without deploying external BI software.

Companies running **Cin7 Core** or **Cin7 Omni** capture granular transaction data, yet native ERP exports keep sales performance, warehouse stock levels, and supplier pricing in separate silos. **Cin7 Business Performance Analyzer** bridges that gap as a structured **ERP decision-support toolkit**. By standardizing raw CSV data into a single **Excel analysis workbook**, operations and finance teams can reconcile **landed Cost of Goods Sold (COGS)**, isolate **unallocated Available-to-Promise (ATP) inventory**, and flag operational exceptions in minutes.

The reporting template answers five recurring commercial and inventory management questions:

- **SKU-Level Gross Margin:** Which products generate positive gross profit after matching sales revenue against weighted-average or latest recorded purchase costs?
- **Net Sales Channel Contribution:** Which e-commerce marketplaces, B2B wholesale portals, or POS channels drive real net margin after deducting configurable platform fee allowances?
- **Working Capital & Dead Stock Exposure:** How much cash is trapped in warehouse stock on hand (SOH), and which SKUs classify as overstocked, slow-moving dead stock, or high-velocity stockout risks?
- **Supplier Price Creep & PO Variance:** Which items have experienced material unit-cost increases on recent purchase receipts compared to historical weighted-average costs?
- **Prioritized Exception Management:** Which negative-margin SKUs, replenishment bottlenecks, and cost spikes require immediate pricing or purchasing intervention?

Raw Cin7 exports enter through dedicated paste-values input sheets (`Import_Sales`, `Import_Inventory`, `Import_Purchases`). Automated calculation layers clean SKU identifiers, consolidate multi-warehouse inventory, calculate sales-line profitability, and populate an **Executive KPI Dashboard** alongside an actionable **Exception Report**. This workflow complements your existing Cin7 ERP environment while leaving underlying accounting ledgers, tax records, and live order fulfillment untouched.

> ### Try the Cin7 Analytics Toolkit: Interactive Web Demo or Reusable Excel Template
>
> Evaluate the reporting structure immediately in your browser, or download the full `.xlsx` template for recurring monthly analysis:
>
> - 🌐 **[Launch the Interactive Cin7 Analytics Web Demo (Free Browser Preview — Zero Setup)](https://hyvoid.github.io/cin7-excel-reporting-template/)** — Inspect sample SKU profitability tables, ABC inventory classifications, and exception flags directly in your browser without registration.
> - 📥 **[Download the Cin7 Excel Reporting Template (.xlsx Workbook for Recurring Analysis & Offline Audits)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)** — Get the full dynamic-array Excel workbook to import your own Cin7 CSV files, customize business thresholds, and maintain historical operating records.
>
> *Commercial Assurance: Where the downloadable `.xlsx` Excel workbook is offered as a paid license, every purchase is backed by a 30-day, no-questions-asked money-back guarantee.*
>

---

## What It Helps You Track: Cin7 Margin, Inventory Valuation & PO Cost Metrics

Instead of manually stitching together disconnected ERP spreadsheets with fragile lookup formulas, use this structured mapping to track six core operational dimensions:

| Tracking Dimension & Search Focus | Operational Pain Point in Native Cin7 Exports | How the Analyzer Solves It (Metrics & Output) |
| :--- | :--- | :--- |
| **SKU-Level Profitability & Gross Margin Analysis** | Native Cin7 sales exports rank products by top-line revenue, often hiding high-volume SKUs that sell at negative or razor-thin margins once actual purchase costs are applied. | Matches line-item sales revenue against estimated **Cost of Goods Sold (COGS)** to calculate exact **gross profit ($)** and **gross margin (%)** per SKU against your target threshold. |
| **Multichannel Net Contribution & Fee Modeling** | Comparing Shopify DTC, Amazon Marketplace, and B2B wholesale revenue at face value ignores referral fees, payment processing, and commission structures. | Applies a configurable **channel-fee allowance (%)** to each sales channel, ranking channels by **net profit contribution** so teams see where real cash is generated. |
| **Multi-Warehouse Stock on Hand (SOH) & ATP Isolation** | Warehouse snapshot reports display total physical units on hand, causing sales teams to over-commit stock that is already allocated to open customer orders. | Consolidates multi-location inventory while separating **Physical Stock** from **Allocated Stock**, exposing true **Unallocated Available-to-Promise (ATP)** units and tied-up capital. |
| **Inventory Health, Turnover & ABC Classification** | High-value slow movers and imminent stockouts remain buried across thousands of warehouse rows until cash flow tightens or bestsellers go on backorder. | Automatically calculates **Days of Supply (DOS)**, **inventory turnover days**, and **ABC value tiers (A/B/C)** to categorize every SKU as Healthy, Slow-Moving, Overstock, or Stockout Risk. |
| **Purchase Order (PO) Cost Variance & Supplier Creep** | Incremental supplier price hikes sit inside individual purchase receipt lines, eroding product margins weeks before finance spots the variance in monthly accounting closes. | Benchmarks each SKU's **Weighted-Average Cost (WAC)** against its **Latest Recorded Purchase Price**, flagging any unit-cost spike that exceeds your configured variance tolerance. |
| **Automated Management-by-Exception Triaging** | Operations analysts spend hours filtering CSV dumps across three modules just to build a weekly agenda for purchasing and pricing meetings. | Aggregates negative margins, margin misses, cost spikes, and stock warnings into one prioritized **Exception Report** with severity rankings and recommended corrective actions. |

---

## How to Analyze Cin7 CSV Exports in Excel: 4-Step Quick Start Tutorial

Follow this four-step operating cycle to transform raw Cin7 data into an executive review. Configure your financial rules once, paste your latest CSV exports, audit the automated dashboards, and repeat on a weekly or monthly cadence.

### Step 1: Configure Financial Thresholds, Currency Rates & ABC Inventory Rules
Open the `Parameters` tab to establish the commercial assumptions governing your workbook. Set your base reporting currency symbol, **USD and EUR foreign exchange rates**, analysis date range (days), minimum **gross-margin threshold (%)**, **Days of Supply (DOS)** stockout and overstock limits, **ABC Pareto classification cutoffs**, **purchase-cost variance alert threshold (%)**, channel fee allowances, and period gross-profit budget target. Update these parameters whenever exchange rates or company margin policies shift.

### Step 2: Import Raw Cin7 Sales, Stock on Hand (SOH) & Purchase Order CSV Exports
Export your standard transaction reports from **Cin7 Core** or **Cin7 Omni** to CSV format, then use **Paste Values** to load the records into the three dedicated raw-input tabs:

- `Import_Sales`: Paste order-line sales history (SKU, channel, quantity sold, line revenue, currency).
- `Import_Inventory`: Paste current warehouse inventory snapshots (SKU, warehouse location, physical quantity on hand, allocated quantity).
- `Import_Purchases`: Paste historical purchase receipts and supplier invoice lines (SKU, receipt date, quantity received, unit purchase price, currency).

Keeping raw CSV inputs isolated from downstream formula sheets prevents accidental formula overwrites during routine weekly data refreshes.

### Step 3: Audit the Executive KPI Dashboard, Channel Margins & Exception Flags
Ensure Excel calculation mode is set to **Automatic** so the dynamic-array engine updates all analytical tables:

1. Open `Executive_Dashboard` for a consolidated C-level summary of total revenue, estimated COGS, gross profit, gross margin %, budget attainment, total inventory valuation, inventory turnover days, tied-up working capital, and your **Top 5 Profit-Contributing SKUs**.
2. Review `Exception_Report` to triage flagged SKUs requiring immediate price increases, supplier renegotiation, or inventory liquidation.
3. Drill into `Sales_Analytics` for SKU and channel contribution breakdowns, `Inventory_Analytics` for ABC/DOS stock health matrices, and `Data_Cleaning` to resolve master-data anomalies (such as unmapped SKUs or missing cost records).

### Step 4: Transition from Browser Testing to Recurring Monthly Reviews in Excel
While the **[Interactive Browser Preview](https://hyvoid.github.io/cin7-excel-reporting-template/)** lets you inspect the analytical layout in a single session, ongoing inventory control and financial reconciliation require persistent local records.

To run this workflow on your own company data every week or month, **[Download the Reusable Cin7 Excel Reporting Template (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**. With the standalone Excel workbook, your team can archive monthly snapshots for month-over-month margin tracking, customize threshold parameters offline, and distribute audit-ready `.xlsx` files across purchasing, warehouse, and executive leadership.

---

## The Business Logic & Methodology

Standard ERP reports fail decision-makers because they present operational logs (what happened in a single module) rather than relational unit economics (how purchasing costs, warehouse velocity, and channel fees interact). **Cin7 Business Performance Analyzer** applies six quantitative methods to solve specific commercial problems:

### 1. Relational SKU Normalization & Three-Way Data Matching
- **Commercial Problem:** In Cin7 exports, SKU codes frequently contain trailing spaces, case-sensitivity mismatches, or orphan transactions (e.g., a product sold in `Import_Sales` that lacks a corresponding receipt in `Import_Purchases` or stock record in `Import_Inventory`).
- **Analytical Method:** The `Data_Cleaning` layer strips formatting noise (`TRIM`/`UPPER` normalization) and performs three-way relational validation across sales, inventory, and purchasing tables. It explicitly flags uncosted sales lines and zero-price anomalies so gross profit totals are never artificially inflated by missing cost inputs.

### 2. Dual-Valuation COGS & Purchase Price Variance (WAC vs. Latest Cost)
- **Commercial Problem:** Relying solely on historical Weighted-Average Cost (WAC) masks recent supplier price increases during inflationary periods, leading sales teams to underprice renewal orders.
- **Analytical Method:** The toolkit calculates both the historical **Weighted-Average Purchase Cost** ($\sum \text{Total PO Spend} / \sum \text{Total Units Received}$) and extracts the **Latest Chronological Unit Purchase Cost** per SKU, standardized into your base reporting currency. By measuring the percentage spread ($\frac{\text{Latest Cost} - \text{WAC}}{\text{WAC}}$), the model isolates forward-looking margin compression before old inventory batches sell through.

### 3. Fee-Adjusted Channel Contribution Modeling
- **Commercial Problem:** E-commerce and omnichannel brands frequently scale top-line revenue on third-party marketplaces while losing net cash once platform commissions and transaction fees are deducted.
- **Analytical Method:** Beyond gross profit ($\text{Revenue} - \text{Estimated COGS}$), the `Sales_Analytics` engine deducts a configurable **Platform Fee Allowance** specific to each sales channel. This approximates **Contribution Margin Level 2 (CM2)**, allowing leadership to compare high-margin B2B wholesale orders directly against high-fee marketplace volume.

### 4. Available-to-Promise (ATP) Isolation vs. Physical Stock on Hand
- **Commercial Problem:** Treating physical warehouse counts as sellable inventory leads to double-allocation, backorders, and distorted working-capital ratios. For example, if a warehouse holds 100 physical units but 80 units are committed to open sales orders, only 20 units remain freely available prior to safety-stock deductions.
- **Analytical Method:** Multi-warehouse inventory records are aggregated by SKU while strictly segregating **Physical Stock** from **Allocated Stock** ($\text{Unallocated Stock} = \max(0, \text{Physical SOH} - \text{Allocated Units})$). Working capital valuation is then computed across both total physical holdings and tied-up slow-moving stock.

### 5. Composite ABC Pareto Valuation & Days of Supply (DOS) Matrix
- **Commercial Problem:** Warehouse managers cannot treat all SKUs equally; cutting inventory across the board starves high-margin bestsellers while leaving dead stock untouched.
- **Analytical Method:** The model pairs **ABC Pareto Value Classification** (ranking SKUs by cumulative inventory value contribution, typically A = top 70–80%, B = next 15–20%, C = bottom 5–10%) with **Daily Sales Velocity** ($\text{Units Sold} / \text{Analysis Period Days}$) to derive **Days of Supply** ($\text{DOS} = \text{Unallocated Stock} / \text{Daily Velocity}$). Cross-referencing ABC tiers with DOS thresholds automatically pinpoints high-capital dead stock (`Class A + Overstock/Slow-Moving`) versus urgent replenishment priorities (`Class A + Low DOS`).

### 6. Rule-Based Management-by-Exception Triaging
- **Commercial Problem:** Reviewing 5,000+ SKU rows manually each week causes decision fatigue and missed operational risks.
- **Analytical Method:** The `Exception_Report` uses deterministic boolean logic to evaluate every active SKU against your `Parameters` thresholds. Only SKUs violating one or more commercial rules (Negative Margin, Below-Target Margin, Stockout Risk, Overstock Capital Trap, or Material Cost Spike) surface in the exception queue, paired with a calculated priority tier (`High`, `Medium`, `Low`) and a prescribed operational action.

---

## Why I Built This Cin7 Analytical Framework

An ERP system excels at recording transactions, enforcing order workflows, and maintaining audit trails. However, operational transaction logs rarely translate directly into commercial clarity.

In daily wholesale, manufacturing, and e-commerce operations, three blind spots repeatedly hurt cash flow:
1. A SKU ranks as a top seller in revenue reports, yet its landed purchase cost leaves virtually zero gross profit.
2. A warehouse report shows ample stock on hand, yet 80% of those units are already allocated to open wholesale orders—leaving the team exposed to immediate stockouts on new commitments.
3. A supplier quietly raises unit prices by 14% on the latest purchase order, and the increase stays buried in receiving logs until quarterly gross margins drop.

I built **Cin7 Business Performance Analyzer** to connect those three datasets inside a transparent, repeatable Excel framework. Every formula, cost assumption, and threshold parameter remains visible and auditable by your team. When the workbook triggers an exception warning, it serves as a structured prompt for your buyers, planners, or pricing managers to investigate the underlying Cin7 record and act with evidence.

---

## Common Cin7 ERP Reporting Bottlenecks vs. Automated Excel Analysis

| Cin7 ERP Reporting Bottleneck | Manual CSV Export & Native Report Limitations (Without This Tool) | Automated Excel Template & SKU Reconciliation (With This Tool) |
| :--- | :--- | :--- |
| **Disconnected Sales, SOH & PO Exports** | Analysts download separate Sales, Stock on Hand, and Purchase CSVs, spending hours writing fragile `VLOOKUP` or `XLOOKUP` formulas that break every month. | A unified paste-values workflow ingests all three Cin7 exports and automatically reconciles metrics across a standardized SKU master list. |
| **Revenue Illusion & Hidden Negative Margins** | Top-line sales reports celebrate high-volume SKUs while masking items sold below replacement cost or below target gross margin thresholds. | Line-level sales revenue, estimated unit COGS, gross profit ($), and gross margin (%) are audited side-by-side against configurable profitability targets. |
| **Overstated Warehouse Availability (SOH vs. ATP)** | Teams mistake total physical warehouse stock for sellable inventory, triggering overselling and customer backorders on committed stock. | Physical stock and allocated order quantities are consolidated separately across all warehouses, isolating true **Unallocated Stock** for new orders. |
| **Working Capital Trapped in Dead Stock** | High-cost, zero-velocity SKUs sit unnoticed in multi-warehouse listings, draining cash flow and inflating holding costs. | Automated **Inventory Valuation ($)**, **Days of Supply (DOS)**, **Turnover Days**, and **ABC classifications** isolate slow-moving and overstocked cash traps. |
| **Unnoticed Supplier Price Creep (PO Variance)** | Comparing a supplier's latest invoice price against historical average cost requires manual line-by-line inspection across past purchase receipts. | Automated variance calculations benchmark **Weighted-Average Cost (WAC)** against the **Latest Recorded PO Cost**, flagging material cost spikes instantly. |
| **Unfiltered ERP Data Dumps & Analysis Paralysis** | Managers manually filter thousands of spreadsheet rows each Monday to figure out which pricing or purchasing fires to put out first. | A consolidated **Exception Report** groups margin deficits, stockout alerts, and PO cost variances with priority rankings and recommended actions. |

---

## Who This Is For: Role-Specific Cin7 Reporting Workflows & Use Cases

This toolkit is engineered for specific operational roles searching for a repeatable **Cin7 reporting template** or **inventory margin calculator**:

- **SMB Owners, Founders & Fractional CFOs (`Cin7 Executive KPI & Working Capital Dashboard`):**
  - *Operational Use Case:* Conducting monthly financial reviews, monitoring gross-profit budget attainment, auditing total cash tied up in slow-moving inventory, and identifying the top 5 profit-driving SKUs without waiting on custom BI development.
- **Inventory Planners & Warehouse Operations Managers (`Cin7 Inventory Health, ABC & Replenishment Template`):**
  - *Operational Use Case:* Auditing multi-warehouse **Stock on Hand (SOH)** versus **Allocated Stock**, calculating **Days of Supply (DOS)**, preventing stockouts on A-class bestsellers, and building liquidation lists for aged overstock.
- **Procurement & Purchasing Managers (`Cin7 Purchase Order Cost Variance & Supplier Audit Sheet`):**
  - *Operational Use Case:* Tracking multi-currency purchase receipts (USD, EUR, base currency), spotting supplier unit-cost inflation (`Latest PO Price vs. WAC`), and preparing data-backed vendor price renegotiations.
- **E-Commerce & Multichannel Sales Managers (`Cin7 Channel Profitability & SKU Margin Calculator`):**
  - *Operational Use Case:* Comparing true product unit economics across Shopify, Amazon, eBay, and B2B wholesale portals after accounting for channel fee allowances, and pruning negative-margin SKUs from active catalogs.
- **ERP Business Analysts & Operations Consultants (`Cin7 CSV Data Cleaning & Reconciliation Workbook`):**
  - *Operational Use Case:* Replacing ad-hoc weekly spreadsheet wrangling with a standardized, error-checked Excel template that cleans dirty SKU exports and delivers boardroom-ready exception reports in under 15 minutes.

### Who This Toolkit Is NOT Designed For
To set accurate expectations before you download, this workbook does **not** serve:
- **Companies seeking a full ERP replacement:** This is an analytical companion layer for existing Cin7 Core / Cin7 Omni data, not a transactional order-management or warehouse-execution system.
- **Teams requiring live API streaming:** The workflow relies on periodic CSV/Excel exports (weekly, bi-weekly, or monthly) rather than real-time webhook synchronization.
- **Statutory GAAP/IFRS general-ledger audits:** Profit figures represent operational estimates based on recorded purchase receipts and configurable channel fee allowances; they do not replace full landed-cost accounting reconciliations covering freight bills, customs duties, tax rebates, customer returns, and warehouse overhead allocations.
- **Automated PO execution:** The toolkit flags stockout risks and cost exceptions for human review; it does not automatically transmit purchase orders to suppliers.

---

## When to Use This Cin7 Analyzer: High-Impact Operational Scenarios

Teams typically deploy the **Cin7 Business Performance Analyzer** during four recurring business workflows:

1. **Weekly Sales & Operations Planning (S&OP) Meetings:** Import the past 30 or 90 days of Cin7 exports every Monday morning to align purchasing, warehouse, and sales leads around a single `Exception_Report`.
2. **Pre-Reorder Supplier Cost & Margin Audits:** Before approving a large replenishment purchase order in Cin7, check whether recent supplier price hikes have pushed the SKU's projected gross margin below your company threshold.
3. **Quarterly Dead-Stock Liquidation & SKU Rationalization:** Filter `Inventory_Analytics` by `Overstock` and `Slow-Moving` flags to identify exact dollar amounts trapped in stagnant SKUs, freeing up working capital via targeted clearance promotions.
4. **Annual Price-List Resets & Marketplace Fee Reviews:** Adjust the `Channel_Fee_Allowance` and exchange rate parameters to stress-test how marketplace commission increases or currency swings impact your bottom-line SKU profitability.

> **Technical Prerequisites & Data Quality Note:** No advanced Excel macro or VBA knowledge is required. The browser preview runs instantly online, and the `.xlsx` workbook requires only standard Microsoft Excel (supporting dynamic-array functions) and basic familiarity with exporting CSV files from Cin7 and pasting values. Output accuracy depends directly on the completeness of your Cin7 source exports and the validity of your configured exchange rates and threshold assumptions.

---

## About the Creator

I design lightweight, decision-focused analytical tools for wholesale, manufacturing, and e-commerce operators who are tired of drowning in disconnected ERP spreadsheets. Every toolkit is built around one governing question: **What exact operational numbers must be brought together so management can make the next purchasing, pricing, or inventory decision with confidence?**

The **Cin7 Business Performance Analyzer** applies this methodology to SKU profitability, working-capital exposure, and supplier cost control—giving your team immediate visibility from the Cin7 data you already own.

- 🌐 **[Preview the Cin7 Web Analyzer in Your Browser](https://hyvoid.github.io/cin7-excel-reporting-template/)**
- 📥 **[Get the Full Reusable Excel Workbook (.xlsx)](https://theseusworkshop.com/l/ykwzbo?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=cin7-excel-reporting-template)**


---

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>


### Workbook Architecture

The workbook is designed as a one-way data pipeline with five functional layers and 12 worksheets. Raw inputs are separated from calculations, analytical outputs, and management reporting to reduce accidental overwrites and make the calculation path easier to inspect.

| Layer | Worksheet | Primary Responsibility | Key Outputs |
|---|---|---|---|
| Navigation | `Instructions` | Explain the workbook structure, operating sequence, and input/output conventions | Usage guidance |
| Configuration | `Parameters` | Centralize currency settings, exchange rates, analysis periods, margin thresholds, inventory thresholds, ABC classification boundaries, cost-variance thresholds, and budget targets | Shared business assumptions |
| Raw data | `Import_Sales` | Hold exported sales transaction lines | Sales quantities, prices, discounts, currencies, channels, and SKU identifiers |
| Raw data | `Import_Inventory` | Hold an inventory snapshot | Physical stock, reserved stock, incoming stock, product attributes, and reference unit costs |
| Raw data | `Import_Purchases` | Hold purchase-receipt details | Received quantities, purchase prices, suppliers, dates, and currencies |
| Data preparation | `Data_Cleaning` | Standardize SKU identifiers and consolidate inventory records across warehouses | Canonical SKU list, consolidated stock quantities, master-data status |
| Cost engine | `Cost_Engine` | Convert purchase amounts to the base currency and calculate purchasing-cost benchmarks | Weighted-average purchase cost, approved standard unit cost, latest purchase cost, cost variance |
| Margin engine | `Margin_Engine` | Normalize sales records, convert net sales to the base currency, match costs, and calculate line-level profitability | Net revenue, cost of goods sold (COGS), gross profit, gross margin |
| Inventory analysis | `Inventory_Analytics` | Evaluate available stock, inventory value, sales velocity, days of supply, turnover, ABC classification, and inventory health | Stock exposure and replenishment or overstock signals |
| Sales analysis | `Sales_Analytics` | Aggregate profitability by SKU and sales channel | SKU margin rankings, profitability ratings, channel contribution |
| Exception monitoring | `Exception_Report` | Consolidate profit, inventory, and purchase-cost exceptions | Risk classification, exposure estimates, recommended actions |
| Management reporting | `Executive_Dashboard` | Summarize company-level performance and priority items | Revenue, COGS, gross profit, gross margin, budget attainment, inventory value, risk exposure, and Top 5 profit-contributing SKUs |

### Data Flow

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

The intended direction is from source data to calculated outputs. Users maintain the raw exports and business parameters; downstream worksheets derive their results from those inputs.

The workbook specification uses modern Excel dynamic-array functions, including `UNIQUE`, `FILTER`, `SORT`, `SORTBY`, `XLOOKUP`, `SUMIFS`, `LET`, `SCAN`, `MAP`, and `LAMBDA`. Formula-generated ranges are designed to expand automatically when source records or distinct SKUs increase, subject to Excel compatibility and available worksheet space.

### Input and Output Contract

#### Global Parameters

The `Parameters` worksheet provides a centralized configuration area. The specification places 14 business parameters in `C4:C17`.

| Cell | Parameter | Example Default | Purpose |
|---|---|---:|---|
| `C4` | Base currency symbol | User-defined | Controls currency labels and display conventions |
| `C5` | USD-to-base-currency exchange rate | `1.0000` | Converts USD-denominated transactions |
| `C6` | EUR-to-base-currency exchange rate | `1.0800` | Converts EUR-denominated transactions |
| `C7` | Analysis period in days | `90` | Sets the sales observation period |
| `C8` | Target gross-margin benchmark | `35%` | Defines the target profitability level |
| `C9` | Minimum acceptable gross margin | `10%` | Identifies low-margin products |
| `C10` | Channel platform-fee rate | `5%` | Estimates channel contribution after the configured fee |
| `C11` | Low-stock warning threshold | `15` days | Flags inventory with limited days of supply |
| `C12` | Overstock threshold | `90` days | Flags inventory with excessive days of supply |
| `C13` | Slow-moving inventory sales threshold | `0` units | Helps identify stocked SKUs with insufficient observed sales |
| `C14` | ABC A-class cumulative value threshold | `70%` | Defines the first inventory-value classification boundary |
| `C15` | ABC B-class cumulative value threshold | `90%` | Defines the second inventory-value classification boundary |
| `C16` | Purchase-cost variance threshold | `15%` | Flags material changes in purchasing cost |
| `C17` | Monthly gross-profit budget target | `500,000` | Provides the target used in budget-attainment reporting |

These are example defaults from the implementation specification, not universal operating benchmarks. They should be reviewed against the company's actual commercial policies and reporting requirements.

**Currency convention:** `C4` controls the displayed base-currency symbol. The exchange-rate values in `C5` and `C6` must be configured consistently with that base currency. The example rates are not live foreign-exchange quotes.

#### Raw Data Inputs

The input worksheets are intended to hold source records rather than user-maintained calculations.

| Worksheet | Required Business Fields |
|---|---|
| `Import_Sales` | Sales order number, sales date, channel, customer, original SKU, quantity, unit selling price, transaction currency, line discount rate |
| `Import_Inventory` | Original SKU, product name, category, warehouse, physical quantity, reserved quantity, incoming purchase quantity, reference unit cost |
| `Import_Purchases` | Purchase order number, receipt date, supplier, original SKU, received quantity, purchase unit price, settlement currency |

The source specification defines nine sales fields, eight inventory fields, and seven purchase fields. Actual Cin7 exports may use different column names or include additional fields. The import layout must therefore be aligned with the intended source-export structure before routine use.

#### Key Analytical Outputs

| Worksheet | Principal Output Fields |
|---|---|
| `Data_Cleaning` | Standard SKU, standard product name and category, consolidated physical/reserved/incoming quantities, master-data consistency status |
| `Cost_Engine` | Total received quantity, base-currency purchase amount, weighted-average purchase unit cost, reference unit cost, approved standard unit cost, latest purchase unit cost, purchase-cost variance |
| `Margin_Engine` | Normalized order details, valid sales quantity, applied exchange rate, net sales revenue, matched unit cost, COGS, line gross profit, line gross margin |
| `Inventory_Analytics` | Available inventory, inventory value, period sales quantity, average daily sales, days of supply, turnover, cumulative inventory-value share, ABC class, inventory-health status |
| `Sales_Analytics` | SKU revenue, COGS, gross profit, gross margin, gross-profit contribution, profitability rating, channel revenue and costs, channel contribution after configured platform fees, channel ranking |
| `Exception_Report` | SKU exception labels, inventory and cost flags, estimated risk exposure, priority classification, recommended management action |
| `Executive_Dashboard` | Total net sales, COGS, gross profit, gross margin, gross-profit budget attainment, inventory value, inventory-turnover days, slow-moving and overstock exposure, high-priority exception count, Top 5 profit-contributing SKUs |

### Decision Framework: Five Analytical Questions

The workbook is designed to connect five operational questions rather than treat each report as an isolated dashboard.

1. **Are the underlying records comparable?** SKU normalization and consolidated inventory data help reduce inconsistencies caused by formatting differences and multiple warehouse records.
2. **What is each product's estimated gross-profit contribution?** Sales revenue is normalized to the base currency and matched against a calculated unit-cost benchmark.
3. **Where is working capital tied up?** Inventory value, days of supply, turnover, and ABC classification identify products that deserve different levels of purchasing and stock-control attention.
4. **Which exceptions need action first?** Profitability, inventory-health, and purchase-cost signals are consolidated into a prioritized exception list.
5. **What should management review first?** The executive dashboard combines overall results with budget attainment, inventory exposure, and high-contribution products.

These questions are connected, but their outputs are not interchangeable. Gross profit is not the same as operating profit or cash flow; inventory value is not the same as recoverable cash; and a channel contribution estimate is not a complete channel-level profit-and-loss statement.

### Analytical Traps and Corrective Logic

The following examples illustrate the decision risks the framework is intended to reduce. They are analytical scenarios, not claims about any particular company's actual results.

#### Trap 1: Treating Sales Revenue as Product Profitability

**Decision:** Increase purchasing for a high-revenue SKU.

**Hidden flaw:** The decision relies on sales volume or revenue without checking the cost assigned to the units sold.

Suppose a product generates 100,000 in net sales and has 85,000 in matched COGS. Its gross profit is 15,000 and its gross margin is 15%. A second product generates 60,000 in net sales against 30,000 in COGS, producing 30,000 in gross profit and a 50% gross margin.

| Metric | Product A | Product B |
|---|---:|---:|
| Net sales | 100,000 | 60,000 |
| COGS | 85,000 | 30,000 |
| Gross profit | 15,000 | 30,000 |
| Gross margin | 15% | 50% |

Revenue alone points toward Product A. Gross-profit contribution points toward Product B.

The corrected approach is to evaluate revenue, COGS, gross profit, and gross margin together before making inventory or promotional decisions. The conclusion still needs to account for demand, stock availability, and other relevant commercial costs.

<details>
<summary>Calculation reference</summary>

```text
Gross Profit = Net Sales - COGS

Product A:
100,000 - 85,000 = 15,000

Product B:
60,000 - 30,000 = 30,000

Gross Margin = Gross Profit / Net Sales
```

</details>

#### Trap 2: Treating Physical Stock as Available-to-Promise Stock

**Decision:** Confirm a new customer order because the inventory report shows 100 units on hand.

**Hidden flaw:** The report does not distinguish physical stock from stock already reserved for existing orders.

Suppose a SKU has 100 physical units, 80 reserved units, and no additional available units from incoming stock. Only 20 units remain unreserved before applying any separate safety-stock policy.

| Metric | Quantity |
|---|---:|
| Physical stock | 100 |
| Reserved stock | 80 |
| Unreserved physical stock | 20 |

The corrected approach is to evaluate unreserved inventory rather than physical stock alone. If a business also needs to preserve a safety-stock buffer, that buffer must be incorporated into its actual availability policy rather than assumed to be reflected automatically by this calculation.

This prevents sales commitments from being based on stock that has already been allocated elsewhere.

<details>
<summary>Calculation reference</summary>

```text
Available Physical Stock = Physical Stock - Reserved Stock

100 - 80 = 20 units
```

The workbook also records incoming purchase quantities, but incoming stock should not be treated as physically available unless the operating policy explicitly permits that interpretation.

</details>

#### Trap 3: Treating a Low Purchase Price as Proof of Better Inventory Economics

**Decision:** Continue buying from a supplier because its latest unit price appears attractive.

**Hidden flaw:** The comparison ignores the existing cost baseline, exchange-rate conversion, or the effect of a recent purchasing-cost change on product profitability.

Suppose the previous comparable unit-cost benchmark is 20 and a new receipt is recorded at 24 in the same currency and on a comparable basis. The unit cost has increased by 20%, exceeding the example 15% variance threshold.

| Metric | Value |
|---|---:|
| Previous cost benchmark | 20 |
| Latest purchase cost | 24 |
| Absolute increase | 4 |
| Relative increase | 20% |
| Example alert threshold | 15% |

The corrected approach is to verify the purchase record, compare costs on a consistent currency basis, and investigate whether the change reflects supplier pricing, currency movement, or a data-quality issue before changing prices or placing the next order.

A variance alert is a prompt for investigation, not proof that the supplier has acted incorrectly or that the purchase should automatically be rejected.

<details>
<summary>Calculation reference</summary>

```text
Cost Variance Rate =
    (Latest Purchase Cost - Previous Cost Benchmark)
    / Previous Cost Benchmark

(24 - 20) / 20 = 20%
```

The workbook's documented exception rule uses the absolute value of purchase-cost variance when comparing it with the configured threshold.

</details>

### Example Scenario: From Exported Records to a Management Review

Consider a hypothetical business with multiple sales channels and warehouse locations. The business exports sales lines, an inventory snapshot, and purchase-receipt records from its existing system.

The analysis period is set to 90 days. The example target gross margin is 35%, the low-margin threshold is 10%, the low-stock warning is 15 days of supply, and the overstock threshold is 90 days of supply.

The imported records show the following results for one SKU:

| Input or Calculation | Example Value |
|---|---:|
| Net sales in the analysis period | 100,000 |
| Matched COGS | 85,000 |
| Gross profit | 15,000 |
| Gross margin | 15% |
| Physical stock | 500 units |
| Reserved stock | 100 units |
| Net unreserved physical stock | 400 units |
| Sales during the 90-day period | 900 units |
| Average daily sales | 10 units |
| Days of supply | 40 days |

The gross margin is below the 35% target but above the 10% minimum threshold. The SKU therefore requires profitability review even though it is not necessarily classified as a low-margin exception under the configured rule.

The inventory position represents approximately 40 days of supply, which falls between the example low-stock and overstock thresholds. That does not automatically establish that the inventory level is optimal: purchase lead times, demand variability, and safety-stock requirements still matter.

The practical recommendation is to review the SKU's pricing, discounts, and cost assumptions while checking whether current stock coverage is appropriate for expected demand. If the product contributes substantial total gross profit, a pricing or supplier-cost review may be more appropriate than an immediate delisting decision.

The dashboard supports this review by placing product profitability, inventory exposure, and exception signals in a common reporting workflow. The final decision remains dependent on verified source data and the company's operating constraints.

### Formula Reference

The formulas below describe the workbook's intended calculation logic. They are reference patterns rather than verified cell-by-cell formulas from a released workbook. Adapt column references to the actual worksheet layout before implementation.

<details>
<summary>1. SKU Standardization and Inventory Consolidation</summary>

**Purpose:** Reduce mismatches caused by SKU formatting differences and consolidate stock records across warehouse locations.

```excel
=UPPER(TRIM(SKU_Cell))
```

This normalization pattern removes leading and trailing spaces and standardizes SKU text to uppercase. Apply the same normalization convention to sales, inventory, and purchase records before matching records across sources.

```excel
=UNIQUE(Standardized_SKU_Range)
```

Returns a distinct list of normalized SKU identifiers.

**Inventory aggregation pattern:**

```excel
=SUMIFS(
    Physical_Quantity_Range,
    Standardized_SKU_Range,
    Current_SKU
)
```

Repeat the aggregation for reserved quantities and incoming quantities. The aggregation criteria must use the same normalized SKU key across all source tables.

**Important:** SKU normalization can resolve differences in capitalization and surrounding spaces. It cannot reliably resolve genuinely different product identifiers, incorrect SKU assignments, or ambiguous product-master relationships. Those require source-data review.

</details>

<details>
<summary>2. Purchase Cost Calculation</summary>

**Purpose:** Convert purchase amounts to the configured base currency, calculate a weighted-average purchase cost, and identify changes in recent purchase costs.

**Base-currency purchase amount:**

```text
Base-Currency Purchase Amount
    = Received Quantity
    × Purchase Unit Price
    × Applicable Exchange Rate
```

The exchange rate must follow one consistent convention: base-currency units per unit of transaction currency. If the source data already contains base-currency values, do not convert those values a second time.

**Weighted-average purchase unit cost:**

```text
Weighted-Average Unit Cost
    = Total Base-Currency Purchase Amount
    / Total Received Quantity
```

Calculate the numerator and denominator over the same defined population of valid purchase receipts. Exclude invalid records and handle zero or negative total quantities according to the documented input policy.

**Purchase-cost variance:**

```text
Cost Variance Rate
    = (Latest Unit Cost - Reference Unit Cost)
    / Reference Unit Cost
```

The configured threshold identifies material deviations for investigation. A zero or missing reference cost must be treated as an unavailable comparison, not as a valid percentage variance.

The specification distinguishes weighted-average purchase cost, an approved standard unit cost, and the latest purchase unit cost. Their selection and precedence should be defined explicitly in the implemented workbook; they should not be assumed to be interchangeable.

</details>

<details>
<summary>3. Sales Margin Calculation</summary>

**Purpose:** Calculate order-line profitability using net sales revenue and an assigned unit-cost benchmark.

```text
Net Sales Revenue
    = Quantity
    × Unit Selling Price
    × (1 - Line Discount Rate)
    × Applicable Exchange Rate
```

This pattern assumes the discount rate is represented as a decimal and that the exported unit selling price is before the line discount. If the source export already provides net line revenue, use that value instead of applying the discount a second time.

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

Gross margin is undefined when net sales revenue is zero. The implementation should return a controlled blank or explicit status instead of dividing by zero.

**Interpretation:** Gross profit measures the amount remaining after the assigned product cost. It does not, by itself, include every operating expense, fulfillment cost, marketing cost, or other expense that may be needed to determine fully loaded profitability.

</details>

<details>
<summary>4. Inventory Health and ABC Classification</summary>

**Purpose:** Estimate inventory availability, coverage, value exposure, and relative inventory-value contribution.

```text
Unreserved Physical Stock
    = Physical Stock - Reserved Stock
```

If the business maintains a separate safety-stock policy, use it explicitly when determining operational availability.

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

When average daily sales are zero, days of supply should not be reported as zero. Use a controlled status such as `No Recent Sales` or an equivalent exception.

```text
Inventory Value
    = Selected Stock Quantity
    × Selected Unit Cost
```

The implementation must define which quantity and cost basis are used for inventory valuation. Physical stock, unreserved stock, and incoming stock represent different operational concepts and should not be combined without a clear policy.

**ABC classification:** Rank SKUs by the selected inventory-value measure, calculate cumulative inventory value as a proportion of the total, and classify each SKU using the configured A- and B-class boundaries.

The example configuration uses 70% and 90% cumulative-value thresholds. These boundaries are business settings, not universal standards. The calculation must also handle an empty inventory set or a zero total inventory value without producing invalid percentages.

</details>

<details>
<summary>5. Exception Monitoring and Dashboard Metrics</summary>

**Purpose:** Translate analytical results into review priorities.

The specification identifies five major exception types:

- Zero gross profit.
- Negative gross profit.
- Overstock.
- Stockout or low-stock risk.
- Purchase-cost variance.

The workbook uses configurable thresholds to flag exceptions. Exact status labels and precedence should be verified against the final implementation.

**Example purchase-cost threshold pattern:**

```text
IF absolute cost variance exceeds configured threshold:
    Flag for investigation
ELSE:
    No cost-variance alert
```

**Budget attainment:**

```text
Gross-Profit Budget Attainment
    = Actual Gross Profit / Gross-Profit Budget Target
```

When the budget target is zero or missing, the dashboard should display a controlled unavailable status rather than an invalid ratio.

**Channel contribution:** The specification includes an estimated platform-fee rate. A calculation that subtracts only that fee from gross profit is a partial contribution measure, not a complete channel profit calculation. Other channel-specific expenses must be included separately if the business needs a fully loaded channel comparison.

</details>

### Validation Rules

The following rules describe the checks needed to keep the analytical outputs interpretable. Where the source specification does not define a precise automated error state, the expected behavior is stated as an implementation requirement rather than a claim that the workbook already enforces it.

| Field or Area | Validation Rule | Expected Error Behavior |
|---|---|---|
| Base currency | Define one base currency and use it consistently across reporting outputs | Flag inconsistent currency settings; do not silently mix currencies |
| Exchange rates | Require a valid, positive rate for every foreign currency that needs conversion | Flag missing or invalid rates; affected converted amounts should not be treated as verified |
| Analysis period | Require a positive number of days | Reject or flag zero, negative, or missing periods |
| Margin thresholds | Use valid percentage values and ensure the intended ordering of target and minimum thresholds | Flag invalid settings for review |
| Channel fee rate | Require a valid rate consistent with the expected percentage convention | Flag invalid values rather than allowing unintended negative or inflated contributions |
| ABC boundaries | Require cumulative-value thresholds between 0% and 100%, with the A boundary no greater than the B boundary | Flag inconsistent boundaries |
| Purchase-cost variance threshold | Require a non-negative percentage threshold | Flag negative or non-numeric settings |
| Budget target | Require a valid numeric target for attainment reporting | Display an unavailable status when the denominator is zero or missing |
| Sales quantity | Validate numeric quantities and investigate invalid records before calculating profitability | Exclude or flag invalid rows according to the documented import policy |
| Unit selling price | Validate numeric values and the currency convention used by the source export | Flag invalid prices; do not silently interpret missing prices as verified zero-price sales |
| Line discount rate | Validate the rate's numeric representation and permitted business range | Flag invalid rates; avoid applying the discount twice |
| Purchase quantity | Validate received quantities and identify zero or negative quantities requiring special treatment | Flag records that cannot be safely included in weighted-average cost |
| Purchase unit price | Validate numeric values and currency consistency | Flag invalid prices and prevent them from silently distorting cost benchmarks |
| SKU identifiers | Normalize casing and surrounding spaces consistently across all three imports | Flag missing or unmatched identifiers; investigate ambiguous matches |
| Inventory quantities | Validate physical, reserved, and incoming quantities separately | Flag inconsistent or invalid balances; do not assume incoming stock is physically available |
| Cost matching | Require a valid cost source or an explicitly approved fallback | Flag unmatched costs; do not interpret missing cost as confirmed zero cost |
| Gross-margin calculation | Do not divide by zero net revenue | Return a controlled blank or explicit status |
| Days-of-supply calculation | Do not divide by zero average daily sales | Return a no-recent-sales or equivalent status |
| Dynamic-array output ranges | Keep the formula spill area clear of manually entered values | Resolve the blocking cells without deleting the formula anchor |
| Import layout | Match source columns to the expected field definitions | Correct the import mapping before relying on downstream calculations |

### Known Limitations and Compatibility

#### Excel Compatibility

The workbook specification relies on modern dynamic-array functions, including `FILTER`, `UNIQUE`, `SORTBY`, and `SCAN`. It requires Microsoft 365, Excel 2021, Excel 2024, or a compatible WPS version supporting the necessary functions.

Excel 2016, Excel 2019, and earlier versions are not supported by the specified calculation design.

#### Data Volume

The specification targets up to 50,000 detail rows per source table, with a recommended combined total below 100,000 rows to maintain responsive calculation performance. Actual performance depends on the spreadsheet application, hardware, formula complexity, and the size of the imported data.

#### Editing and Collaboration

- Do not manually sort, type into, or overwrite dynamic-array spill ranges.
- Avoid having multiple users independently paste and modify source data in the same working copy.
- Keep a separate copy of the original exports so that import errors can be traced and corrected.
- Review SKU matches, currency settings, and unit-cost assumptions before using the outputs for purchasing or pricing decisions.

#### Cost and Profit Interpretation

Purchase-receipt-based costs may not match the accounting system's recognized COGS in every situation. Freight, duties, landed-cost allocation, returns, supplier credits, write-offs, and inventory valuation policies can create differences.

The calculated margin should therefore be treated as an operational analytical result based on the configured cost method, not automatically as a substitute for reconciled financial statements.

</details>


---

### Troubleshooting

<details>
<summary>Why does Excel show #SPILL!?</summary>

A dynamic-array formula cannot expand because one or more cells in its output range are occupied.

1. Select the cell displaying `#SPILL!`.
2. Inspect the indicated spill range for manually entered values, spaces, or other blocking content.
3. Clear only the unintended contents blocking the spill range.
4. Preserve the formula in the anchor cell.
5. Confirm that the output expands as expected.

Do not clear the formula anchor when troubleshooting a blocked spill range.

</details>

<details>
<summary>Why does a new product show 100% gross margin or zero COGS?</summary>

The product may be missing from the inventory reference data, have no valid purchase-receipt history, or lack a configured reference unit cost.

1. Check whether the SKU exists in the inventory import.
2. Confirm that its identifier matches the normalized SKU used by sales and purchasing records.
3. Check whether valid purchase receipts exist for the product.
4. If the product has no purchase history, confirm whether a legitimate reference unit cost is available.
5. Recalculate and verify the resulting margin before using it for pricing or purchasing decisions.

A zero-cost result should not automatically be interpreted as a genuinely cost-free product.

</details>

<details>
<summary>Why do sales, purchase, or inventory totals look inconsistent?</summary>

Check the reporting period, transaction currency, duplicate source rows, SKU matching, and the grain of each imported dataset. Sales and purchase tables are transaction-level records, while inventory is a snapshot by SKU and warehouse. Summing or matching these datasets without respecting their different levels of detail can produce misleading results.

Compare a small sample of source records with the corresponding calculated output before relying on aggregate totals.

</details>

</details>

---


## Other Tools in This Series

Theseus Workshop develops lightweight Excel-based business decision tools for recurring operational and financial problems.

- **[project-time-tracking-excel-template](https://github.com/HyVoid/project-time-tracking-excel-template)** — Which projects are drifting on time cost or margin? — Analyze project labor cost allocation and profitability across active project portfolios.
- **[Caf-audit-tool-for-efficient-reviews](https://github.com/HyVoid/Caf-audit-tool-for-efficient-reviews)** — Which operational dimension is costing the most revenue and does the financial leakage demand immediate intervention? — Convert structured cafe observations into a weighted diagnostic score financial leakage estimate and prioritized corrective action list.
- **[Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit](https://github.com/HyVoid/Restaurant-Menu-Configuration-Modifier-Pricing-Toolkit)** — Is the menu consistently priced across all modifier combinations and sizes or are there hidden pricing errors waiting to surface? — Centralize restaurant menu configuration modifier pricing rules and POS-ready menu data into one governed source of truth.
- **[wedding-planner](https://github.com/HyVoid/wedding-planner)** — Which wedding planning tasks costs and timelines need coordination? — Coordinate vendor management task tracking and budget control across wedding planning workflows.
- **[manufacturing-capacity-planning-template](https://github.com/HyVoid/manufacturing-capacity-planning-template)** — Is labor capacity being utilized efficiently or does the operation need different staffing or scheduling? — Transform production plans and labor data into capacity utilization labor cost allocation and staffing decisions.
- **[employee-performance-dashboard-excel](https://github.com/HyVoid/employee-performance-dashboard-excel)** — Which employees and projects are at risk of delivery failure and where should management intervene before deadlines pass? — Connect annual work planning execution tracking weighted performance evaluation and management reporting into one continuous operational workflow.
- **[rental-property-management-excel-template](https://github.com/HyVoid/rental-property-management-excel-template)** — Which units are losing revenue through undetected vacancy and which turnovers need immediate action? — Transform booking records into live occupancy status vacancy intelligence and operational alerts across an entire rental portfolio.
- **[workforce-planning-payroll-excel-dashboard](https://github.com/HyVoid/workforce-planning-payroll-excel-dashboard)** — Is the organization burning through annual workforce capacity faster than planned and which departments need intervention before overtime costs spiral? — Consolidate payroll spending annual contracted hours overtime ratios and workforce utilization into one cross-department capacity planning framework.
- **[warehouse-billing-excel-template](https://github.com/HyVoid/warehouse-billing-excel-template)** — Are warehouse billing charges accurate and traceable to underlying operational records? — Calculate warehouse storage, handling, and transport charges into auditable customer billing statements.
- **[commercial-hvac-plumbing-bid-estimator](https://github.com/HyVoid/commercial-hvac-plumbing-bid-estimator)** — What is a defensible, auditable bid price for this commercial MEP project? — Estimate and track commercial MEP project costs from takeoff to final bid submission.
- **[landed-cost-calculator-excel](https://github.com/HyVoid/landed-cost-calculator-excel)** — Why does the SKU-level landed cost from my ERP differ from the freight forwarder's API, and which allocation method is causing the margin erosion? — Reconcile and benchmark landed cost calculations against a practitioner template to trace SKU-level cost allocation differences to their underlying accounting logic.
- **[hoa-budget-accounting-spreadsheet](https://github.com/HyVoid/hoa-budget-accounting-spreadsheet)** — Are our HOA funds being allocated correctly and are we on track with our budget? — Categorize transactions and generate budget variance reports for HOA financial management.
- **[homeowner-management-excel-template](https://github.com/HyVoid/homeowner-management-excel-template)** — What is my true total cost of homeownership, including all hidden expenses? — Calculate the total cost of homeownership by integrating mortgage, utilities, maintenance, and capital improvements.
- **[crew-scheduling-excel-template](https://github.com/HyVoid/crew-scheduling-excel-template)** — Will my current crew be able to handle the workload when project dates shift and overlap? — Forecast crew demand and staffing gaps across a 12-month horizon to support capacity planning decisions.
- **[Schedule-Driven-Construction-Cash-Curve-Workbook](https://github.com/HyVoid/Schedule-Driven-Construction-Cash-Curve-Workbook)** — How will my construction project's cash flow and planned progress unfold over time based on the schedule? — Convert construction schedules and bid-item registers into automated S-curves, time-phased cost forecasts, and planned progress trackers.
- **[shop-floor-mrp-kanban-excel-system](https://github.com/HyVoid/shop-floor-mrp-kanban-excel-system)** — Will our shift-level welding schedule run without line-stop material shortages? — Calculate BOM-driven material requirements and Kanban replenishment signals from shift-level production schedules.

Explore the available projects on the [Theseus Workshop GitHub profile](https://github.com/HyVoid).

## License

This project is released under the **Apache License 2.0**. See the repository's `LICENSE` file for the complete license terms.
