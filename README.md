
# Cin7 Business Performance Analyzer: Excel Reporting Template & Inventory Profitability Dashboard for Cin7 Core (DEAR) & Omni

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
> - 🌐 **[Launch the Interactive Cin7 Analytics Web Demo (Free Browser Preview — Zero Setup)](#placeholder-web-demo-url)** — Inspect sample SKU profitability tables, ABC inventory classifications, and exception flags directly in your browser without registration.
> - 📥 **[Download the Cin7 Excel Reporting Template (.xlsx Workbook for Recurring Analysis & Offline Audits)](#placeholder-excel-download-url)** — Get the full dynamic-array Excel workbook to import your own Cin7 CSV files, customize business thresholds, and maintain historical operating records.
>
> *Commercial Assurance: Where the downloadable `.xlsx` Excel workbook is offered as a paid license, every purchase is backed by a 30-day, no-questions-asked money-back guarantee.*
>
> *(Note: Replace `#placeholder-web-demo-url` and `#placeholder-excel-download-url` with your live production URLs before publishing.)*

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
While the **[Interactive Browser Preview](#placeholder-web-demo-url)** lets you inspect the analytical layout in a single session, ongoing inventory control and financial reconciliation require persistent local records.

To run this workflow on your own company data every week or month, **[Download the Reusable Cin7 Excel Reporting Template (.xlsx)](#placeholder-excel-download-url)**. With the standalone Excel workbook, your team can archive monthly snapshots for month-over-month margin tracking, customize threshold parameters offline, and distribute audit-ready `.xlsx` files across purchasing, warehouse, and executive leadership.

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

- 🌐 **[Preview the Cin7 Web Analyzer in Your Browser](#placeholder-web-demo-url)**
- 📥 **[Get the Full Reusable Excel Workbook (.xlsx)](#placeholder-excel-download-url)**


---

<details>
<summary><h2>Technical Details</h2></summary>

*For technical reviewers, Excel practitioners, and collaborators*

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

- **Construction Cost Estimation Tools** — organize quantity takeoffs, cost assumptions, and project estimates.
- **Inventory and Order Profitability Tools** — connect stock, orders, costs, and product-level financial performance.
- **Financial Planning and Scenario Models** — support structured budgeting, forecasting, and business decision reviews.

Explore the available projects on the [Theseus Workshop GitHub profile](https://github.com/HyVoid).

## License

This project is released under the **Apache License 2.0**. See the repository's `LICENSE` file for the complete license terms.
