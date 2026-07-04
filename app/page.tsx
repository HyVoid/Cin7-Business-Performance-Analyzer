'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Download, Upload,
  RotateCcw, Plus, Trash2, Settings, HelpCircle, Briefcase, Layers,
  DollarSign, Percent, ShoppingBag, Boxes, Calendar, ArrowRight, Info
} from 'lucide-react';

// ==========================================
// TYPES
// ==========================================
interface Parameters {
  targetGrossMargin: number;
  deadStockDays: number;
  outOfStockDays: number;
  exchangeRates: { [key: string]: number };
  abcAThreshold: number;
  abcBThreshold: number;
}

interface SaleRow {
  id: string;
  invoiceNo: string;
  invoiceDate: string;
  channel: string;
  sku: string;
  qty: number;
  price: number;
  currency: string;
}

interface InventoryRow {
  id: string;
  sku: string;
  productName: string;
  location: string;
  soh: number;
  unitCost: number;
}

interface PurchaseRow {
  id: string;
  poNo: string;
  sku: string;
  supplier: string;
  qtyOrdered: number;
  unitPrice: number;
  dateReceived: string;
}

interface ParsedCSVPreview {
  tab: 'Sales' | 'Inventory' | 'Purchases';
  fileName: string;
  rowCount: number;
  mode: 'append' | 'overwrite';
  data: any[];
}

// ==========================================
// DEFAULT / SEED DATA
// ==========================================
const DEFAULT_PARAMETERS: Parameters = {
  targetGrossMargin: 0.35,
  deadStockDays: 90,
  outOfStockDays: 15,
  exchangeRates: { AUD: 1.00, USD: 1.51, EUR: 1.63, GBP: 1.92 },
  abcAThreshold: 0.70,
  abcBThreshold: 0.20,
};

const DEFAULT_SALES: SaleRow[] = [
  { id: 's1', invoiceNo: 'INV-2026-001', invoiceDate: '2026-06-20', channel: 'Shopify', sku: 'SKU-YOGA-01', qty: 2, price: 120.00, currency: 'USD' },
  { id: 's2', invoiceNo: 'INV-2026-002', invoiceDate: '2026-06-21', channel: 'Amazon', sku: 'SKU-BLOCK-03', qty: 5, price: 15.00, currency: 'USD' },
  { id: 's3', invoiceNo: 'INV-2026-003', invoiceDate: '2026-06-22', channel: 'B2B Wholesale', sku: 'SKU-MAT-02', qty: 50, price: 35.00, currency: 'AUD' },
  { id: 's4', invoiceNo: 'INV-2026-004', invoiceDate: '2026-06-22', channel: 'Shopify', sku: 'SKU-STRAP-04', qty: 1, price: 12.00, currency: 'GBP' },
  { id: 's5', invoiceNo: 'INV-2026-005', invoiceDate: '2026-06-24', channel: 'Shopify', sku: 'SKU-YOGA-01', qty: 1, price: 0.00, currency: 'AUD' }, // Promo giveaway - negative margin
  { id: 's6', invoiceNo: 'INV-2026-006', invoiceDate: '2026-06-25', channel: 'Amazon', sku: 'SKU-ROLLER-05', qty: 4, price: 45.00, currency: 'USD' },
  { id: 's7', invoiceNo: 'INV-2026-007', invoiceDate: '2026-06-26', channel: 'B2B Wholesale', sku: 'SKU-YOGA-01', qty: 10, price: 75.00, currency: 'AUD' },
  { id: 's8', invoiceNo: 'INV-2026-008', invoiceDate: '2026-06-27', channel: 'Shopify', sku: 'SKU-BOTTLE-06', qty: 2, price: 35.00, currency: 'USD' },
  { id: 's9', invoiceNo: 'INV-2026-009', invoiceDate: '2026-07-01', channel: 'Shopify', sku: 'SKU-WHEEL-09', qty: 1, price: 55.00, currency: 'AUD' }, // Missing Cost SKU
  { id: 's10', invoiceNo: 'INV-2026-003-B', invoiceDate: '2026-07-03', channel: 'B2B Wholesale', sku: 'SKU-ROLLER-05', qty: 20, price: 16.50, currency: 'AUD' }, // Low margin wholesale
];

const DEFAULT_INVENTORY: InventoryRow[] = [
  { id: 'i1', sku: 'SKU-YOGA-01', productName: 'Premium Align Yoga Mat', location: 'Melbourne WH', soh: 120, unitCost: 45.00 },
  { id: 'i2', sku: 'SKU-MAT-02', productName: 'Eco-Friendly Jute Mat', location: 'Melbourne WH', soh: 250, unitCost: 20.00 },
  { id: 'i3', sku: 'SKU-BLOCK-03', productName: 'Cork Yoga Support Block', location: 'FBA Sydney', soh: 80, unitCost: 6.50 },
  { id: 'i4', sku: 'SKU-STRAP-04', productName: 'Organic Cotton Yoga Strap', location: 'FBA Sydney', soh: 15, unitCost: 3.00 },
  { id: 'i5', sku: 'SKU-ROLLER-05', productName: 'High-Density Foam Roller', location: 'Melbourne WH', soh: 150, unitCost: 18.50 },
  { id: 'i6', sku: 'SKU-BOTTLE-06', productName: 'Stainless Steel Insulated Bottle', location: 'Melbourne WH', soh: 310, unitCost: 12.00 },
  { id: 'i7', sku: 'SKU-WHEEL-09', productName: 'Pro Yoga Wheel Back Roller', location: 'Melbourne WH', soh: 0, unitCost: 0.00 }, // Missing cost & stock
  { id: 'i8', sku: 'SKU-DEAD-10', productName: 'Obsolete Strap v1', location: 'Melbourne WH', soh: 85, unitCost: 5.00 }, // SOH > 0, 90D Sales = 0
];

const DEFAULT_PURCHASES: PurchaseRow[] = [
  { id: 'p1', poNo: 'PO-2026-001', sku: 'SKU-YOGA-01', supplier: 'Zen Yoga Co.', qtyOrdered: 200, unitPrice: 43.50, dateReceived: '2026-05-10' },
  { id: 'p2', poNo: 'PO-2026-002', sku: 'SKU-MAT-02', supplier: 'EcoFiber Labs', qtyOrdered: 300, unitPrice: 19.00, dateReceived: '2026-05-12' },
  { id: 'p3', poNo: 'PO-2026-003', sku: 'SKU-BLOCK-03', supplier: 'CorkCraft Ltd', qtyOrdered: 150, unitPrice: 6.00, dateReceived: '2026-05-15' },
  { id: 'p4', poNo: 'PO-2026-004', sku: 'SKU-STRAP-04', supplier: 'WeaveTextiles', qtyOrdered: 50, unitPrice: 2.80, dateReceived: '2026-05-16' },
  { id: 'p5', poNo: 'PO-2026-005', sku: 'SKU-ROLLER-05', supplier: 'FoamTech Ind.', qtyOrdered: 100, unitPrice: 18.00, dateReceived: '2026-05-20' },
  { id: 'p6', poNo: 'PO-2026-006', sku: 'SKU-BOTTLE-06', supplier: 'HydroSteel Co.', qtyOrdered: 400, unitPrice: 11.50, dateReceived: '2026-05-25' },
];

export default function Cin7Analyzer() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [activeTab, setActiveTab] = useState<string>('Dashboard');
  const [parameters, setParameters] = useState<Parameters>(DEFAULT_PARAMETERS);
  const [sales, setSales] = useState<SaleRow[]>(DEFAULT_SALES);
  const [inventory, setInventory] = useState<InventoryRow[]>(DEFAULT_INVENTORY);
  const [purchases, setPurchases] = useState<PurchaseRow[]>(DEFAULT_PURCHASES);
  const [lastSaved, setLastSaved] = useState<string>('');
  const [dashboardChannel, setDashboardChannel] = useState<string>('All');
  const [dashboardTime, setDashboardTime] = useState<string>('All');
  const [exposureHoverCell, setExposureHoverCell] = useState<{ sku: string; channel: string } | null>(null);
  
  const [csvPreview, setCsvPreview] = useState<ParsedCSVPreview | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const updateSaveTimestamp = () => {
    const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false }) + ' ' + new Date().toLocaleDateString('en-US');
    localStorage.setItem('cin7_last_saved', timeStr);
    setLastSaved(timeStr);
  };

  // Load from LocalStorage
  useEffect(() => {
    try {
      const savedParams = localStorage.getItem('cin7_parameters');
      const savedSales = localStorage.getItem('cin7_sales');
      const savedInventory = localStorage.getItem('cin7_inventory');
      const savedPurchases = localStorage.getItem('cin7_purchases');
      const savedTime = localStorage.getItem('cin7_last_saved');

      setTimeout(() => {
        if (savedParams) setParameters(JSON.parse(savedParams));
        if (savedSales) setSales(JSON.parse(savedSales));
        if (savedInventory) setInventory(JSON.parse(savedInventory));
        if (savedPurchases) setPurchases(JSON.parse(savedPurchases));
        if (savedTime) setLastSaved(savedTime);
        else updateSaveTimestamp();
      }, 0);
    } catch (e) {
      console.error('Failed to load local storage data', e);
    }
  }, []);

  // Auto-Save Trigger
  const triggerAutoSave = (
    newParams: Parameters,
    newSales: SaleRow[],
    newInv: InventoryRow[],
    newPurch: PurchaseRow[]
  ) => {
    try {
      localStorage.setItem('cin7_parameters', JSON.stringify(newParams));
      localStorage.setItem('cin7_sales', JSON.stringify(newSales));
      localStorage.setItem('cin7_inventory', JSON.stringify(newInv));
      localStorage.setItem('cin7_purchases', JSON.stringify(newPurch));
      const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false }) + ' ' + new Date().toLocaleDateString('en-US');
      localStorage.setItem('cin7_last_saved', timeStr);
      setLastSaved(timeStr);
    } catch (e) {
      console.error('Auto save failed', e);
    }
  };

  const handleParamChange = (updater: (prev: Parameters) => Parameters) => {
    setParameters((prev) => {
      const next = updater(prev);
      triggerAutoSave(next, sales, inventory, purchases);
      return next;
    });
  };

  const handleSalesChange = (updater: (prev: SaleRow[]) => SaleRow[]) => {
    setSales((prev) => {
      const next = updater(prev);
      triggerAutoSave(parameters, next, inventory, purchases);
      return next;
    });
  };

  const handleInventoryChange = (updater: (prev: InventoryRow[]) => InventoryRow[]) => {
    setInventory((prev) => {
      const next = updater(prev);
      triggerAutoSave(parameters, sales, next, purchases);
      return next;
    });
  };

  const handlePurchasesChange = (updater: (prev: PurchaseRow[]) => PurchaseRow[]) => {
    setPurchases((prev) => {
      const next = updater(prev);
      triggerAutoSave(parameters, sales, inventory, next);
      return next;
    });
  };

  // Reset to default
  const handleResetData = () => {
    if (confirm('Are you sure you want to restore the default workbook configuration? This will clear all manual changes.')) {
      setParameters(DEFAULT_PARAMETERS);
      setSales(DEFAULT_SALES);
      setInventory(DEFAULT_INVENTORY);
      setPurchases(DEFAULT_PURCHASES);
      localStorage.removeItem('cin7_parameters');
      localStorage.removeItem('cin7_sales');
      localStorage.removeItem('cin7_inventory');
      localStorage.removeItem('cin7_purchases');
      const timeStr = new Date().toLocaleTimeString('en-US', { hour12: false }) + ' ' + new Date().toLocaleDateString('en-US');
      localStorage.setItem('cin7_last_saved', timeStr);
      setLastSaved(timeStr);
    }
  };

  // Backup Import/Export
  const handleExportBackup = () => {
    const backup = {
      parameters,
      sales,
      inventory,
      purchases,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cin7_performance_backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.parameters && parsed.sales && parsed.inventory && parsed.purchases) {
          setParameters(parsed.parameters);
          setSales(parsed.sales);
          setInventory(parsed.inventory);
          setPurchases(parsed.purchases);
          triggerAutoSave(parsed.parameters, parsed.sales, parsed.inventory, parsed.purchases);
          alert('Backup restored successfully!');
        } else {
          alert('Invalid backup file structure.');
        }
      } catch (err) {
        alert('Failed to parse backup JSON.');
      }
    };
    reader.readAsText(file);
  };

  // ==========================================
  // BULK CSV IMPORT ENGINE
  // ==========================================
  const parseCSV = (text: string): string[][] => {
    const lines: string[][] = [];
    let row: string[] = [];
    let inQuotes = false;
    let currentValue = '';

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (char === '"') {
        if (inQuotes && nextChar === '"') {
          currentValue += '"';
          i++; // skip next quote
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        row.push(currentValue.trim());
        currentValue = '';
      } else if ((char === '\r' || char === '\n') && !inQuotes) {
        if (char === '\r' && nextChar === '\n') {
          i++; // skip \n
        }
        row.push(currentValue.trim());
        if (row.length > 0 && !(row.length === 1 && row[0] === '')) {
          lines.push(row);
        }
        row = [];
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    if (currentValue || row.length > 0) {
      row.push(currentValue.trim());
      if (row.length > 0 && !(row.length === 1 && row[0] === '')) {
        lines.push(row);
      }
    }
    return lines;
  };

  const findColumnIndex = (headers: string[], aliases: string[]): number => {
    const normalizedHeaders = headers.map(h => h.trim().toLowerCase().replace(/[\s_-]/g, ''));
    for (const alias of aliases) {
      const normalizedAlias = alias.toLowerCase().replace(/[\s_-]/g, '');
      const idx = normalizedHeaders.indexOf(normalizedAlias);
      if (idx !== -1) return idx;
    }
    return -1;
  };

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'Sales' | 'Inventory' | 'Purchases') => {
    const file = e.target.files?.[0];
    if (!file) return;
    processCSVFile(file, type);
    e.target.value = '';
  };

  const processCSVFile = (file: File, type: 'Sales' | 'Inventory' | 'Purchases') => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (!text) return;

      try {
        const rows = parseCSV(text);
        if (rows.length < 2) {
          alert("The CSV file is empty or has no header row.");
          return;
        }

        const headers = rows[0];
        const dataRows = rows.slice(1);

        if (type === 'Sales') {
          const idxInvoice = findColumnIndex(headers, ['invoiceNo', 'invoice no', 'invoice_no', 'invoice', 'invoice#', 'invoice #', 'order id', 'order_id']);
          const idxDate = findColumnIndex(headers, ['invoiceDate', 'invoice date', 'invoice_date', 'date', 'invoice_created', 'created_at', 'created at']);
          const idxChannel = findColumnIndex(headers, ['channel', 'sales channel', 'sales_channel', 'source', 'platform']);
          const idxSku = findColumnIndex(headers, ['sku', 'sku id', 'product sku', 'item code', 'item', 'variant sku']);
          const idxQty = findColumnIndex(headers, ['qty', 'quantity', 'units', 'sales qty', 'sales quantity', 'quantity ordered']);
          const idxPrice = findColumnIndex(headers, ['price', 'unit price', 'unit_price', 'sell price', 'selling price', 'price (local)', 'item price']);
          const idxCurrency = findColumnIndex(headers, ['currency', 'curr', 'monetary unit', 'currency code']);

          const parsedData: SaleRow[] = dataRows.map((r, i) => {
            const rawSku = idxSku !== -1 ? r[idxSku] : '';
            if (!rawSku) return null; // skip empty SKUs
            return {
              id: 'csv_s_' + i + '_' + Date.now(),
              invoiceNo: idxInvoice !== -1 && r[idxInvoice] ? r[idxInvoice] : 'INV-' + (1000 + i),
              invoiceDate: idxDate !== -1 && r[idxDate] ? r[idxDate] : new Date().toISOString().split('T')[0],
              channel: idxChannel !== -1 && r[idxChannel] ? r[idxChannel] : 'Shopify',
              sku: rawSku,
              qty: idxQty !== -1 && r[idxQty] ? (parseInt(r[idxQty].replace(/[^\d-]/g, '')) || 1) : 1,
              price: idxPrice !== -1 && r[idxPrice] ? (parseFloat(r[idxPrice].replace(/[^\d.-]/g, '')) || 0) : 0,
              currency: idxCurrency !== -1 && r[idxCurrency] ? r[idxCurrency].toUpperCase() : 'AUD'
            };
          }).filter(Boolean) as SaleRow[];

          setCsvPreview({
            tab: 'Sales',
            fileName: file.name,
            rowCount: parsedData.length,
            mode: 'append',
            data: parsedData
          });
        } else if (type === 'Inventory') {
          const idxSku = findColumnIndex(headers, ['sku', 'sku id', 'item code', 'item']);
          const idxName = findColumnIndex(headers, ['productName', 'product name', 'product_name', 'title', 'name', 'product description', 'description']);
          const idxLocation = findColumnIndex(headers, ['location', 'warehouse', 'wh', 'stock location', 'inventory location']);
          const idxSoh = findColumnIndex(headers, ['soh', 'stock on hand', 'stock_on_hand', 'quantity', 'qty', 'units available', 'available']);
          const idxCost = findColumnIndex(headers, ['unitCost', 'unit cost', 'unit_cost', 'cost', 'landed cost', 'landing cost']);

          const parsedData: InventoryRow[] = dataRows.map((r, i) => {
            const rawSku = idxSku !== -1 ? r[idxSku] : '';
            if (!rawSku) return null;
            return {
              id: 'csv_i_' + i + '_' + Date.now(),
              sku: rawSku,
              productName: idxName !== -1 && r[idxName] ? r[idxName] : 'Product ' + rawSku,
              location: idxLocation !== -1 && r[idxLocation] ? r[idxLocation] : 'Melbourne WH',
              soh: idxSoh !== -1 && r[idxSoh] ? (parseInt(r[idxSoh].replace(/[^\d-]/g, '')) || 0) : 0,
              unitCost: idxCost !== -1 && r[idxCost] ? (parseFloat(r[idxCost].replace(/[^\d.-]/g, '')) || 0) : 0
            };
          }).filter(Boolean) as InventoryRow[];

          setCsvPreview({
            tab: 'Inventory',
            fileName: file.name,
            rowCount: parsedData.length,
            mode: 'append',
            data: parsedData
          });
        } else if (type === 'Purchases') {
          const idxPo = findColumnIndex(headers, ['poNo', 'po no', 'po_no', 'po', 'purchase order', 'po#', 'po #', 'reference']);
          const idxSku = findColumnIndex(headers, ['sku', 'sku id', 'item code', 'item']);
          const idxSupplier = findColumnIndex(headers, ['supplier', 'vendor', 'source']);
          const idxQty = findColumnIndex(headers, ['qtyOrdered', 'qty ordered', 'quantity ordered', 'units ordered', 'qty_ordered']);
          const idxPrice = findColumnIndex(headers, ['unitPrice', 'unit price', 'unit_price', 'po unit price', 'cost', 'purchase cost']);
          const idxDate = findColumnIndex(headers, ['dateReceived', 'date received', 'received date', 'received_date', 'date', 'received_at']);

          const parsedData: PurchaseRow[] = dataRows.map((r, i) => {
            const rawSku = idxSku !== -1 ? r[idxSku] : '';
            if (!rawSku) return null;
            return {
              id: 'csv_p_' + i + '_' + Date.now(),
              poNo: idxPo !== -1 && r[idxPo] ? r[idxPo] : 'PO-' + (1000 + i),
              sku: rawSku,
              supplier: idxSupplier !== -1 && r[idxSupplier] ? r[idxSupplier] : 'Supplier',
              qtyOrdered: idxQty !== -1 && r[idxQty] ? (parseInt(r[idxQty].replace(/[^\d-]/g, '')) || 0) : 0,
              unitPrice: idxPrice !== -1 && r[idxPrice] ? (parseFloat(r[idxPrice].replace(/[^\d.-]/g, '')) || 0) : 0,
              dateReceived: idxDate !== -1 && r[idxDate] ? r[idxDate] : new Date().toISOString().split('T')[0]
            };
          }).filter(Boolean) as PurchaseRow[];

          setCsvPreview({
            tab: 'Purchases',
            fileName: file.name,
            rowCount: parsedData.length,
            mode: 'append',
            data: parsedData
          });
        }
      } catch (err) {
        console.error(err);
        alert("Failed to parse CSV file. Ensure it is a valid, clean CSV file.");
      }
    };
    reader.readAsText(file);
  };

  const handleExecuteImport = () => {
    if (!csvPreview) return;

    if (csvPreview.tab === 'Sales') {
      const newData = csvPreview.data as SaleRow[];
      if (csvPreview.mode === 'overwrite') {
        handleSalesChange(() => newData);
      } else {
        handleSalesChange(prev => [...prev, ...newData]);
      }
    } else if (csvPreview.tab === 'Inventory') {
      const newData = csvPreview.data as InventoryRow[];
      if (csvPreview.mode === 'overwrite') {
        handleInventoryChange(() => newData);
      } else {
        handleInventoryChange(prev => [...prev, ...newData]);
      }
    } else if (csvPreview.tab === 'Purchases') {
      const newData = csvPreview.data as PurchaseRow[];
      if (csvPreview.mode === 'overwrite') {
        handlePurchasesChange(() => newData);
      } else {
        handlePurchasesChange(prev => [...prev, ...newData]);
      }
    }

    setCsvPreview(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent, type: 'Sales' | 'Inventory' | 'Purchases') => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.name.endsWith('.csv')) {
      processCSVFile(file, type);
    } else {
      alert("Please upload a valid .csv report file.");
    }
  };

  // ==========================================
  // COMPUTE ENGINE (REAL TIME FORMULAS)
  // ==========================================

  // 1. Data Cleaning Engine
  const cleanedSales = useMemo(() => {
    return sales
      .filter(row => row.invoiceNo && row.sku && row.qty > 0)
      .map(row => {
        const rate = parameters.exchangeRates[row.currency] || 1.0;
        const basePrice = row.price * rate;
        const baseRevenue = row.qty * basePrice;
        return {
          ...row,
          rate,
          basePrice,
          baseRevenue
        };
      });
  }, [sales, parameters]);

  // 2. Cost Engine
  const costEngine = useMemo(() => {
    // Unique SKUs from sales and inventory
    const allSkus = Array.from(new Set([
      ...cleanedSales.map(s => s.sku),
      ...inventory.map(i => i.sku)
    ])).filter(Boolean);

    return allSkus.map(sku => {
      const invMatch = inventory.find(i => i.sku === sku);
      const name = invMatch ? invMatch.productName : 'Unknown SKU - No ERP Title';
      const invLandingCost = invMatch ? invMatch.unitCost : 0;

      // Avg PO Cost
      const poMatches = purchases.filter(p => p.sku === sku && p.qtyOrdered > 0);
      const avgPoPrice = poMatches.length > 0
        ? poMatches.reduce((sum, item) => sum + item.unitPrice, 0) / poMatches.length
        : 0;

      // Final Determined Cost Logic
      let finalCost = 0;
      let costSource = 'Missing';
      if (invLandingCost > 0) {
        finalCost = invLandingCost;
        costSource = 'ERP SOH Landing Cost';
      } else if (avgPoPrice > 0) {
        finalCost = avgPoPrice;
        costSource = 'Historical PO Avg';
      }

      return {
        sku,
        name,
        avgPoPrice,
        invLandingCost,
        finalCost,
        costSource
      };
    });
  }, [cleanedSales, inventory, purchases]);

  // 3. Margin Engine
  const marginEngine = useMemo(() => {
    return cleanedSales.map(sale => {
      const costMatch = costEngine.find(c => c.sku === sale.sku);
      const unitCost = costMatch ? costMatch.finalCost : 0;
      const totalCogs = sale.qty * unitCost;
      const grossProfit = sale.baseRevenue - totalCogs;
      const grossMargin = sale.baseRevenue > 0 ? grossProfit / sale.baseRevenue : -1.0;
      const hasLoss = grossProfit < 0;

      return {
        ...sale,
        unitCost,
        totalCogs,
        grossProfit,
        grossMargin,
        hasLoss
      };
    });
  }, [cleanedSales, costEngine]);

  // 4. Inventory Analytics Engine
  const inventoryAnalytics = useMemo(() => {
    const allSkus = Array.from(new Set([
      ...inventory.map(i => i.sku),
      ...cleanedSales.map(s => s.sku)
    ])).filter(Boolean);

    const unsortedAnalytics = allSkus.map(sku => {
      const invMatch = inventory.find(i => i.sku === sku);
      const costMatch = costEngine.find(c => c.sku === sku);

      const name = invMatch ? invMatch.productName : (costMatch ? costMatch.name : 'Unknown Product');
      const location = invMatch ? invMatch.location : 'N/A';
      const soh = invMatch ? invMatch.soh : 0;
      const unitCost = costMatch ? costMatch.finalCost : 0;
      const totalValue = soh * unitCost;

      // Sales last 90 days
      const sales90 = cleanedSales
        .filter(s => s.sku === sku)
        .reduce((sum, item) => sum + item.qty, 0);

      const dailyVelocity = sales90 / 90;

      let doh = 0;
      if (soh > 0) {
        doh = dailyVelocity === 0 ? 999 : soh / dailyVelocity;
      }

      let healthStatus: 'Severe Dead Stock' | 'Stock Risk' | 'Healthy' = 'Healthy';
      if (doh >= parameters.deadStockDays && soh > 0) {
        healthStatus = 'Severe Dead Stock';
      } else if (doh <= parameters.outOfStockDays && soh > 0) {
        healthStatus = 'Stock Risk';
      }

      return {
        sku,
        name,
        location,
        soh,
        unitCost,
        totalValue,
        sales90,
        dailyVelocity,
        doh,
        healthStatus
      };
    });

    // ABC Classification logic
    const totalInvValue = unsortedAnalytics.reduce((sum, item) => sum + item.totalValue, 0);
    const sortedByValue = [...unsortedAnalytics].sort((a, b) => b.totalValue - a.totalValue);

    const result = [];
    let runningCumValue = 0;
    for (let i = 0; i < sortedByValue.length; i++) {
      const item = sortedByValue[i];
      runningCumValue += item.totalValue;
      const cumPct = totalInvValue > 0 ? runningCumValue / totalInvValue : 0;
      let abcClass = 'C-Class (Tail)';

      if (cumPct <= parameters.abcAThreshold) {
        abcClass = 'A-Class (High Value)';
      } else if (cumPct <= (parameters.abcAThreshold + parameters.abcBThreshold)) {
        abcClass = 'B-Class (Medium)';
      }

      result.push({
        ...item,
        abcClass
      });
    }
    return result;
  }, [inventory, costEngine, cleanedSales, parameters]);

  // 5. Exception Report Engine
  const exceptionReport = useMemo(() => {
    const list: { type: string; sku: string; name: string; valueLabel: string; advice: string }[] = [];

    // Negative Margin Sales
    marginEngine.forEach(row => {
      if (row.hasLoss && row.baseRevenue > 0) {
        list.push({
          type: 'Negative Profit Sale',
          sku: row.sku,
          name: costEngine.find(c => c.sku === row.sku)?.name || 'Product',
          valueLabel: `Invoice ${row.invoiceNo}: Gross Margin ${ (row.grossMargin * 100).toFixed(1) }%`,
          advice: 'Revise sell price or re-negotiate landing cost in ERP.'
        });
      }
    });

    // Missing Cost Engine
    costEngine.forEach(row => {
      if (row.finalCost === 0) {
        list.push({
          type: 'Missing Product Cost',
          sku: row.sku,
          name: row.name,
          valueLabel: 'COGS cost value is 0',
          advice: 'Define landing cost or insert recent purchase PO value.'
        });
      }
    });

    // Out of Stock Risk
    inventoryAnalytics.forEach(row => {
      if (row.soh === 0 && row.sales90 > 0) {
        list.push({
          type: 'Out of Stock Anomaly',
          sku: row.sku,
          name: row.name,
          valueLabel: `${row.sales90} sold in last 90D but SOH is 0`,
          advice: 'Initiate priority PO immediately to replenish stock.'
        });
      } else if (row.healthStatus === 'Stock Risk') {
        list.push({
          type: 'Stock Replenish Alert',
          sku: row.sku,
          name: row.name,
          valueLabel: `Only ${row.doh.toFixed(1)} days cover left`,
          advice: 'Review supplier lead-time and submit replenishment PO.'
        });
      }
    });

    // Severe Dead Stock
    inventoryAnalytics.forEach(row => {
      if (row.healthStatus === 'Severe Dead Stock') {
        list.push({
          type: 'Severe Dead Stock',
          sku: row.sku,
          name: row.name,
          valueLabel: `SOH ${row.soh} with zero sales in past 90 days`,
          advice: 'Run marketing campaign, clearance discounts or bundle deals.'
        });
      }
    });

    return list;
  }, [marginEngine, costEngine, inventoryAnalytics]);

  // ==========================================
  // DASHBOARD CALCULATIONS (WITH FILTERS)
  // ==========================================
  const filteredDashboardSales = useMemo(() => {
    return marginEngine.filter(row => {
      const matchChan = dashboardChannel === 'All' || row.channel === dashboardChannel;
      // Simple date filter logic
      let matchTime = true;
      if (dashboardTime === '30D') {
        matchTime = new Date(row.invoiceDate) >= new Date('2026-06-04');
      } else if (dashboardTime === '90D') {
        matchTime = new Date(row.invoiceDate) >= new Date('2026-04-04');
      }
      return matchChan && matchTime;
    });
  }, [marginEngine, dashboardChannel, dashboardTime]);

  const dashboardKPIs = useMemo(() => {
    const totalRev = filteredDashboardSales.reduce((sum, item) => sum + item.baseRevenue, 0);
    const totalCogs = filteredDashboardSales.reduce((sum, item) => sum + item.totalCogs, 0);
    const totalProfit = totalRev - totalCogs;
    const grossMargin = totalRev > 0 ? totalProfit / totalRev : 0;

    const totalInvVal = inventoryAnalytics.reduce((sum, item) => sum + item.totalValue, 0);
    const aClassVal = inventoryAnalytics
      .filter(item => item.abcClass.startsWith('A'))
      .reduce((sum, item) => sum + item.totalValue, 0);
    const aClassShare = totalInvVal > 0 ? aClassVal / totalInvVal : 0;

    const weightedDohNumerator = inventoryAnalytics
      .filter(item => item.soh > 0 && item.doh < 999)
      .reduce((sum, item) => sum + (item.doh * item.totalValue), 0);
    const weightedDohDenominator = inventoryAnalytics
      .filter(item => item.soh > 0 && item.doh < 999)
      .reduce((sum, item) => sum + item.totalValue, 0);

    const averageDoh = weightedDohDenominator > 0 ? weightedDohNumerator / weightedDohDenominator : 0;

    const criticalAnomalies = exceptionReport.length;

    return {
      totalRev,
      totalProfit,
      grossMargin,
      totalInvVal,
      aClassShare,
      averageDoh,
      criticalAnomalies
    };
  }, [filteredDashboardSales, inventoryAnalytics, exceptionReport]);

  const channelPerformance = useMemo(() => {
    const channels = ['Shopify', 'Amazon', 'B2B Wholesale'];
    return channels.map(chan => {
      const chanSales = marginEngine.filter(s => s.channel === chan);
      const rev = chanSales.reduce((sum, item) => sum + item.baseRevenue, 0);
      const cogs = chanSales.reduce((sum, item) => sum + item.totalCogs, 0);
      const profit = rev - cogs;
      const margin = rev > 0 ? profit / rev : 0;
      return { channel: chan, rev, cogs, profit, margin };
    });
  }, [marginEngine]);

  const topSkusSales = useMemo(() => {
    const skuMap: { [key: string]: { sku: string; name: string; rev: number; profit: number; qty: number } } = {};
    filteredDashboardSales.forEach(row => {
      if (!skuMap[row.sku]) {
        skuMap[row.sku] = {
          sku: row.sku,
          name: costEngine.find(c => c.sku === row.sku)?.name || 'Unknown',
          rev: 0,
          profit: 0,
          qty: 0
        };
      }
      skuMap[row.sku].rev += row.baseRevenue;
      skuMap[row.sku].profit += row.grossProfit;
      skuMap[row.sku].qty += row.qty;
    });

    return Object.values(skuMap)
      .sort((a, b) => b.rev - a.rev)
      .slice(0, 5);
  }, [filteredDashboardSales, costEngine]);

  // Maximum value for inline data bars in dashboard SKU table
  const maxSkuRev = useMemo(() => {
    return Math.max(...topSkusSales.map(s => s.rev), 1);
  }, [topSkusSales]);

  // ==========================================
  // EXPOSURE MATRIX DATA (SKU x Channel Quantity)
  // ==========================================
  const exposureMatrix = useMemo(() => {
    const skus = Array.from(new Set(inventory.map(i => i.sku))).slice(0, 6);
    const channels = ['Shopify', 'Amazon', 'B2B Wholesale'];

    return skus.map(sku => {
      const name = inventory.find(i => i.sku === sku)?.productName || sku;
      const cellData = channels.map(channel => {
        const totalQty = cleanedSales
          .filter(s => s.sku === sku && s.channel === channel)
          .reduce((sum, item) => sum + item.qty, 0);
        return { channel, qty: totalQty };
      });
      return { sku, name, cellData };
    });
  }, [inventory, cleanedSales]);

  const maxExposureQty = useMemo(() => {
    let max = 1;
    exposureMatrix.forEach(row => {
      row.cellData.forEach(cell => {
        if (cell.qty > max) max = cell.qty;
      });
    });
    return max;
  }, [exposureMatrix]);

  // Maximum value for totalValue in Inventory Analytics (for inline data bar)
  const maxInvVal = useMemo(() => {
    return Math.max(...inventoryAnalytics.map(i => i.totalValue), 1);
  }, [inventoryAnalytics]);

  return (
    <div className="min-h-screen flex flex-col antialiased bg-[#F5F5F2] text-[#1A1A2E]">
      
      {/* ── STICKY NAVIGATION HEADER (56px) ── */}
      <header className="sticky top-0 h-14 bg-white border-b border-[#E8E8E6] z-50 shadow-apple-nav flex items-center justify-between px-10">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 bg-[#051C2C] rounded-md flex items-center justify-center text-white font-display font-semibold text-sm">
            C7
          </div>
          <span className="font-display font-bold text-lg text-[#051C2C] tracking-tight">
            Cin7 Performance Analyzer
          </span>
          <span className="hidden md:inline text-xs text-[#888888] font-mono pl-4 border-l border-[#E8E8E6]">
            SaaS Accelerator Layer
          </span>
        </div>

        {/* Action Controls & Autosave State */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-2 text-xs text-[#888888] font-mono bg-[#F5F5F2] py-1.5 px-3 rounded-md">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00C853] animate-pulse"></span>
            <span>Last Saved:</span>
            <span className="font-semibold text-[#051C2C]">{lastSaved || 'Syncing...'}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportBackup}
              title="Export JSON Workbook Backup"
              className="flex items-center space-x-1.5 text-xs text-[#051C2C] bg-white border border-[#E8E8E6] py-1.5 px-3 rounded-md hover:bg-[#F5F5F2] transition-colors font-medium"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Export Backup</span>
            </button>
            <label className="flex items-center space-x-1.5 text-xs text-[#051C2C] bg-white border border-[#E8E8E6] py-1.5 px-3 rounded-md hover:bg-[#F5F5F2] transition-colors cursor-pointer font-medium">
              <Upload size={13} />
              <span className="hidden sm:inline">Import Backup</span>
              <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
            </label>
            <button
              onClick={handleResetData}
              title="Reset Data to Factory Workbook Defaults"
              className="flex items-center justify-center p-1.5 text-xs text-[#D32F2F] bg-red-50 rounded-md hover:bg-red-100 transition-colors"
            >
              <RotateCcw size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* ── TABS SELECTOR STRIP (SECONDARY HORIZONTAL NAV) ── */}
      <div className="bg-white border-b border-[#E8E8E6] sticky top-14 z-40 overflow-x-auto">
        <div className="max-w-[1400px] mx-auto px-10 flex space-x-8">
          {[
            { id: 'Dashboard', label: 'Executive Dashboard', icon: Briefcase },
            { id: 'Instructions', label: 'Instructions', icon: Info },
            { id: 'Parameters', label: 'Parameters', icon: Settings },
            { id: 'Import_Sales', label: 'Import Sales', icon: ShoppingBag },
            { id: 'Import_Inventory', label: 'Import Inventory', icon: Boxes },
            { id: 'Import_Purchases', label: 'Import Purchases', icon: Calendar },
            { id: 'Data_Cleaning', label: 'Data Cleaning', icon: Layers },
            { id: 'Cost_Engine', label: 'Cost Engine', icon: DollarSign },
            { id: 'Margin_Engine', label: 'Margin Engine', icon: Percent },
            { id: 'Inventory_Analytics', label: 'Inventory Analytics', icon: Boxes },
            { id: 'Sales_Analytics', label: 'Sales Analytics', icon: TrendingUp },
            { id: 'Exception_Report', label: 'Exception Report', icon: AlertTriangle, badge: exceptionReport.length }
          ].map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 text-[11px] uppercase tracking-wider font-semibold transition-all whitespace-nowrap relative ${
                  isActive
                    ? 'border-[#2251FF] text-[#2251FF]'
                    : 'border-transparent text-[#888888] hover:text-[#051C2C]'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-[#2251FF]' : 'text-[#888888]'} />
                <span>{t.label}</span>
                {t.badge !== undefined && t.badge > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#D32F2F] text-white rounded-full leading-none">
                    {t.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── MAIN WORKSPACE CONTAINER ── */}
      <main className="flex-grow max-w-[1400px] w-full mx-auto px-10 py-10">
        
        {/* ANIMATED PAGE ROUTER ENTRY */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full space-y-8"
          >
            
            {/* 1. EXECUTIVE DASHBOARD SHEET */}
            {activeTab === 'Dashboard' && (
              <>
                {/* Dashboard Page Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-display font-semibold text-[#051C2C] tracking-tight">
                      CEO Performance Dashboard
                    </h1>
                    <p className="text-sm text-[#888888] font-mono mt-1">
                      Direct operational intelligence extracted and normalized from Cin7
                    </p>
                  </div>

                  {/* Slicers */}
                  <div className="flex flex-wrap items-center gap-3 bg-white p-2 rounded-lg shadow-apple-sm border border-[#E8E8E6]">
                    <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-[#888888] font-bold px-2">
                      Channel:
                    </div>
                    {['All', 'Shopify', 'Amazon', 'B2B Wholesale'].map((chan) => (
                      <button
                        key={chan}
                        onClick={() => setDashboardChannel(chan)}
                        className={`text-xs py-1 px-3 rounded-md transition-all font-medium ${
                          dashboardChannel === chan
                            ? 'bg-[#051C2C] text-white shadow-sm'
                            : 'text-[#051C2C] hover:bg-[#F5F5F2]'
                        }`}
                      >
                        {chan}
                      </button>
                    ))}
                    <div className="h-4 w-px bg-[#E8E8E6] mx-2"></div>
                    <div className="flex items-center space-x-2 text-[11px] uppercase tracking-wider text-[#888888] font-bold px-1">
                      Period:
                    </div>
                    {['All', '30D', '90D'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setDashboardTime(t)}
                        className={`text-xs py-1 px-3 rounded-md transition-all font-medium ${
                          dashboardTime === t
                            ? 'bg-[#051C2C] text-white shadow-sm'
                            : 'text-[#051C2C] hover:bg-[#F5F5F2]'
                        }`}
                      >
                        {t === 'All' ? 'All Time' : `${t} History`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── KPI GRID (6 Blocks) ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-5">
                  {[
                    {
                      label: 'Base Revenue',
                      value: `AUD ${dashboardKPIs.totalRev.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                      desc: `Exchange adjusted sales`,
                      icon: DollarSign,
                      highlight: true
                    },
                    {
                      label: 'Gross Profit',
                      value: `AUD ${dashboardKPIs.totalProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                      desc: `Revenue minus base COGS`,
                      icon: TrendingUp,
                      highlight: true
                    },
                    {
                      label: 'Gross Margin',
                      value: `${(dashboardKPIs.grossMargin * 100).toFixed(1)}%`,
                      desc: `Target is ${(parameters.targetGrossMargin * 100).toFixed(0)}%`,
                      icon: Percent,
                      accentBorder: dashboardKPIs.grossMargin < parameters.targetGrossMargin,
                      accentValue: dashboardKPIs.grossMargin < parameters.targetGrossMargin ? '#D32F2F' : undefined
                    },
                    {
                      label: 'Inventory Value',
                      value: `AUD ${dashboardKPIs.totalInvVal.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
                      desc: `A-Class Share: ${(dashboardKPIs.aClassShare * 100).toFixed(0)}%`,
                      icon: Boxes
                    },
                    {
                      label: 'Turnover Cover',
                      value: `${dashboardKPIs.averageDoh.toFixed(0)} Days`,
                      desc: `Warehouse weighted average`,
                      icon: Calendar
                    },
                    {
                      label: 'System Anomalies',
                      value: `${dashboardKPIs.criticalAnomalies} Exceptions`,
                      desc: `Action required items`,
                      icon: AlertTriangle,
                      danger: dashboardKPIs.criticalAnomalies > 0
                    }
                  ].map((kpi, idx) => {
                    const Icon = kpi.icon;
                    return (
                      <div
                        key={idx}
                        className={`bg-white rounded-xl shadow-apple-md p-5 flex flex-col justify-between transition-all hover:translate-y-[-2px] hover:shadow-apple-lg relative overflow-hidden ${
                          kpi.accentBorder ? 'border-l-4 border-[#D32F2F]' : ''
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[11px] uppercase tracking-wider text-[#888888] font-bold font-mono">
                            {kpi.label}
                          </span>
                          <Icon
                            size={16}
                            className={
                              kpi.danger ? 'text-[#D32F2F]' : kpi.highlight ? 'text-[#2251FF]' : 'text-[#888888]'
                            }
                          />
                        </div>
                        <div className="mt-4">
                          <h2
                            className="text-2xl font-display font-semibold tracking-tight text-[#051C2C]"
                            style={kpi.accentValue ? { color: kpi.accentValue } : {}}
                          >
                            {kpi.value}
                          </h2>
                          <p className="text-xs text-[#888888] mt-1">{kpi.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ── INSIGHT / RECOMMENDATION TINTED CARD ── */}
                <div className="bg-[rgba(34,81,255,0.04)] border-l-4 border-[#2251FF] rounded-xl p-5 shadow-apple-sm flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 text-[#2251FF] rounded-lg mt-0.5">
                    <TrendingUp size={18} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-[#051C2C] tracking-tight">
                      SaaS Business Performance bulletin
                    </h3>
                    <ul className="text-xs text-[#1A1A2E] space-y-2 list-disc pl-4 pt-1">
                      {dashboardKPIs.grossMargin < parameters.targetGrossMargin ? (
                        <li className="text-[#D32F2F] font-medium">
                          <strong>Margin Depressed:</strong> The aggregate Gross Margin is current <strong>{(dashboardKPIs.grossMargin * 100).toFixed(1)}%</strong>, below target threshold of <strong>{(parameters.targetGrossMargin * 100).toFixed(0)}%</strong>. Check the B2B Wholesale price matrix.
                        </li>
                      ) : (
                        <li>
                          <strong>Margin Health:</strong> Active margin of <strong>{(dashboardKPIs.grossMargin * 100).toFixed(1)}%</strong> is within target limits. Keep optimizing supplier purchase agreements.
                        </li>
                      )}
                      {exceptionReport.filter(e => e.type === 'Severe Dead Stock').length > 0 && (
                        <li>
                          <strong>Inventory Obstruction:</strong> There are <strong>{exceptionReport.filter(e => e.type === 'Severe Dead Stock').length}</strong> discontinued or slow SKUs with excessive warehouse stock. Launch promotional kits.
                        </li>
                      )}
                      {exceptionReport.filter(e => e.type === 'Missing Product Cost').length > 0 && (
                        <li className="text-[#D32F2F] font-medium">
                          <strong>COGS Vulnerability:</strong> Found <strong>{exceptionReport.filter(e => e.type === 'Missing Product Cost').length}</strong> product rows without proper cost configurations. Margin calculation values are artificially inflated.
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* ── CHARTS SECTION ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Chart 1: Channel Profitability */}
                  <div className="bg-white rounded-xl shadow-apple-md p-6 lg:col-span-2 space-y-6 hover:shadow-apple-lg transition-all">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#051C2C]">
                        Channel Sales & Margin Analysis
                      </h3>
                      <p className="text-xs text-[#888888] font-mono mt-1">
                        Sales revenue volume (AUD) vs realized Gross Margin %
                      </p>
                    </div>

                    {/* Pure Custom Interactive SVG Dual-Axis Chart */}
                    <div className="relative h-64 border-b border-l border-[#E8E8E6] flex items-end px-12 pt-6">
                      {/* Grid Lines */}
                      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-12 py-6">
                        <div className="border-t border-dashed border-[#E8E8E6] w-full"></div>
                        <div className="border-t border-dashed border-[#E8E8E6] w-full"></div>
                        <div className="border-t border-dashed border-[#E8E8E6] w-full"></div>
                      </div>

                      {/* Render columns and paths manually */}
                      <div className="w-full h-full flex justify-around items-end z-10 relative">
                        {channelPerformance.map((item, idx) => {
                          const maxRev = Math.max(...channelPerformance.map(c => c.rev), 1000);
                          const revHeight = (item.rev / maxRev) * 100; // percent
                          const marginPercent = item.margin * 100;
                          // margin y position from top of 200px container
                          const marginY = 180 - (item.margin * 120);

                          return (
                            <div key={idx} className="flex flex-col items-center w-24 relative group">
                              {/* Sales Bar */}
                              <div
                                style={{ height: `${revHeight}%` }}
                                className="w-12 bg-[#051C2C] rounded-t-sm relative group-hover:bg-[#2251FF] transition-colors"
                              >
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#051C2C] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-md font-mono">
                                  Rev: AUD {item.rev.toFixed(0)}
                                  <br />
                                  Margin: {(item.margin * 100).toFixed(1)}%
                                </div>
                              </div>

                              {/* Margin Dot Indicator */}
                              <div
                                style={{ transform: `translateY(-${140 * item.margin}px)` }}
                                className="absolute bottom-0 w-3 h-3 rounded-full bg-[#2251FF] border-2 border-white shadow-sm z-20 group-hover:scale-125 transition-transform"
                              ></div>

                              {/* X Label */}
                              <span className="absolute top-full pt-2 text-[10px] text-[#051C2C] font-semibold uppercase tracking-wider whitespace-nowrap">
                                {item.channel}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="absolute top-2 right-4 flex items-center space-x-4 text-[10px] font-mono">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3 h-3 bg-[#051C2C] rounded-sm inline-block"></span>
                          <span>Sales Revenue</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <span className="w-3 h-3 rounded-full bg-[#2251FF] inline-block"></span>
                          <span>Gross Margin %</span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-2"></div>
                  </div>

                  {/* Chart 2: Capital Allocation (Top 5 SKUs) */}
                  <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6 hover:shadow-apple-lg transition-all">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#051C2C]">
                        Top SKUs Revenue share
                      </h3>
                      <p className="text-xs text-[#888888] font-mono mt-1">
                        Top 5 SKUs sorted by base sales revenue
                      </p>
                    </div>

                    <div className="space-y-4">
                      {topSkusSales.map((item, idx) => {
                        const pct = (item.rev / maxSkuRev) * 100;
                        return (
                          <div key={item.sku} className="space-y-1.5">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="font-semibold text-[#051C2C]">{item.sku}</span>
                              <span className="text-[#888888]">AUD {item.rev.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                            </div>
                            {/* Inline Magnitude Data Bar */}
                            <div className="w-full h-3 bg-[#051C2C]/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="h-full bg-[#2251FF] rounded-full"
                              ></motion.div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ── EXPOSURE MATRIX (Interactive Hover Element) ── */}
                <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6 hover:shadow-apple-lg transition-all">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#051C2C]">
                      Product-Channel Exposure Matrix
                    </h3>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Interactive grid showing total sales units per SKU and Channel. Hover cells to see scale feedback.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#E8E8E6]">
                          <th className="py-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Product / SKU</th>
                          <th className="py-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Shopify</th>
                          <th className="py-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Amazon</th>
                          <th className="py-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">B2B Wholesale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6]">
                        {exposureMatrix.map((row) => (
                          <tr key={row.sku} className="hover:bg-[#F5F5F2]/50 transition-colors">
                            <td className="py-3.5">
                              <div className="font-semibold text-xs text-[#051C2C]">{row.sku}</div>
                              <div className="text-[11px] text-[#888888] truncate max-w-xs">{row.name}</div>
                            </td>
                            {row.cellData.map((cell) => {
                              const opacity = cell.qty > 0 ? Math.min(0.1 + (cell.qty / maxExposureQty) * 0.9, 1) : 0.04;
                              const isHovered = exposureHoverCell?.sku === row.sku && exposureHoverCell?.channel === cell.channel;

                              return (
                                <td
                                  key={cell.channel}
                                  onMouseEnter={() => setExposureHoverCell({ sku: row.sku, channel: cell.channel })}
                                  onMouseLeave={() => setExposureHoverCell(null)}
                                  className="py-3 text-right pr-4"
                                >
                                  <div
                                    style={{
                                      backgroundColor: cell.qty > 0 ? `rgba(34, 81, 255, ${opacity * 0.2})` : 'rgba(5, 28, 44, 0.02)',
                                      color: cell.qty > 0 ? '#2251FF' : '#888888',
                                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                                      filter: isHovered ? 'brightness(0.95)' : 'none',
                                    } as React.CSSProperties}
                                    className="inline-block py-2 px-4 rounded-md font-mono text-xs font-bold transition-all duration-150 cursor-pointer text-center min-w-16"
                                  >
                                    {cell.qty} Units
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* 2. INSTRUCTIONS SHEET */}
            {activeTab === 'Instructions' && (
              <div className="bg-white rounded-xl shadow-apple-md p-8 max-w-4xl mx-auto space-y-6">
                <h1 className="text-3xl font-display font-semibold text-[#051C2C] tracking-tight">
                  Analyzer Quickstart Guide
                </h1>
                <p className="text-[#1A1A2E] leading-relaxed">
                  Welcome to the **Cin7 Business Performance Analyzer**, a premium standalone SaaS wrapper that accelerates and automates Cin7 exported reports into actionable management intelligence.
                </p>

                <div className="border-t border-[#E8E8E6] pt-6 space-y-6">
                  <h3 className="font-display font-bold text-lg text-[#051C2C]">
                    🔄 The Weekly 3-Step Update Routine
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#051C2C] text-white flex items-center justify-center font-bold text-xs">1</div>
                      <h4 className="font-bold text-xs text-[#051C2C]">Export Cin7</h4>
                      <p className="text-xs text-[#888888]">
                        Download standard CSV or Excel files: Sales Invoices, Stock Valuation, and Purchase Order Lines.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#2251FF] text-white flex items-center justify-center font-bold text-xs">2</div>
                      <h4 className="font-bold text-xs text-[#051C2C]">Paste in Workspace</h4>
                      <p className="text-xs text-[#888888]">
                        Navigate to <strong>Import Sales</strong>, <strong>Import Inventory</strong>, and <strong>Import Purchases</strong>. Overwrite rows or type directly.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="w-8 h-8 rounded-full bg-[#00C853] text-white flex items-center justify-center font-bold text-xs">3</div>
                      <h4 className="font-bold text-xs text-[#051C2C]">Decision Cascade</h4>
                      <p className="text-xs text-[#888888]">
                        Formulas trigger in real-time. Look at the <strong>Exception Report</strong> or <strong>Dashboard</strong> for immediate anomalies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[rgba(34,81,255,0.04)] border-l-4 border-[#2251FF] p-5 rounded-lg text-xs space-y-2 text-[#051C2C]">
                  <div className="font-bold flex items-center space-x-1">
                    <Info size={14} />
                    <span>Spreadsheet Core Directives</span>
                  </div>
                  <p>
                    - All formula calculations run locally in memory.
                    <br />- Auto-saves to your local browser storage immediately on any row modification or parameter edit.
                    <br />- Use <strong>Export Backup</strong> to save the database state into a local JSON file. Restore using <strong>Import Backup</strong> anytime.
                  </p>
                </div>
              </div>
            )}

            {/* 3. PARAMETERS SHEET */}
            {activeTab === 'Parameters' && (
              <div className="bg-white rounded-xl shadow-apple-md p-8 max-w-3xl mx-auto space-y-8">
                <div>
                  <h1 className="text-2xl font-display font-semibold text-[#051C2C] tracking-tight">
                    Workbook Constant Parameters
                  </h1>
                  <p className="text-xs text-[#888888] font-mono mt-1">
                    Edit calculations factors. Pale yellow cells represent editable entries.
                  </p>
                </div>

                <div className="space-y-6 border-t border-[#E8E8E6] pt-6">
                  {/* Target Margin */}
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                      <span className="font-semibold text-xs text-[#051C2C] block">Target Gross Margin %</span>
                      <span className="text-xs text-[#888888]">Used to trigger margin alerts (e.g. 0.35)</span>
                    </div>
                    <input
                      type="number"
                      step="0.01"
                      value={parameters.targetGrossMargin}
                      onChange={(e) => handleParamChange(p => ({ ...p, targetGrossMargin: parseFloat(e.target.value) || 0 }))}
                      className="w-full max-w-xs p-2 rounded bg-[#FFFDE7] text-right font-mono font-bold text-xs border border-transparent focus:border-[#2251FF] outline-none"
                    />
                  </div>

                  {/* Dead Stock Days */}
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                      <span className="font-semibold text-xs text-[#051C2C] block">Dead Stock Days Threshold</span>
                      <span className="text-xs text-[#888888]">Days cover over which stock is flagged slow (e.g. 90)</span>
                    </div>
                    <input
                      type="number"
                      value={parameters.deadStockDays}
                      onChange={(e) => handleParamChange(p => ({ ...p, deadStockDays: parseInt(e.target.value) || 0 }))}
                      className="w-full max-w-xs p-2 rounded bg-[#FFFDE7] text-right font-mono font-bold text-xs border border-transparent focus:border-[#2251FF] outline-none"
                    />
                  </div>

                  {/* Out of stock Days */}
                  <div className="grid grid-cols-2 gap-4 items-center">
                    <div>
                      <span className="font-semibold text-xs text-[#051C2C] block">Stock Cover Replenish Days</span>
                      <span className="text-xs text-[#888888]">Days cover under which we warn stockout risk (e.g. 15)</span>
                    </div>
                    <input
                      type="number"
                      value={parameters.outOfStockDays}
                      onChange={(e) => handleParamChange(p => ({ ...p, outOfStockDays: parseInt(e.target.value) || 0 }))}
                      className="w-full max-w-xs p-2 rounded bg-[#FFFDE7] text-right font-mono font-bold text-xs border border-transparent focus:border-[#2251FF] outline-none"
                    />
                  </div>

                  {/* Currency rates */}
                  <div className="space-y-3">
                    <span className="font-semibold text-xs text-[#051C2C] block">Exchange Rates (vs AUD)</span>
                    <div className="grid grid-cols-3 gap-4">
                      {['USD', 'EUR', 'GBP'].map((cur) => (
                        <div key={cur} className="flex items-center space-x-2 bg-[#F5F5F2] p-2 rounded">
                          <span className="text-xs font-bold text-[#051C2C] w-12">{cur}</span>
                          <input
                            type="number"
                            step="0.01"
                            value={parameters.exchangeRates[cur]}
                            onChange={(e) => {
                              const v = parseFloat(e.target.value) || 0;
                              handleParamChange(p => ({
                                ...p,
                                exchangeRates: { ...p.exchangeRates, [cur]: v }
                              }));
                            }}
                            className="w-full bg-[#FFFDE7] text-right p-1 font-mono text-xs rounded border border-transparent focus:border-[#2251FF] outline-none font-bold"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. IMPORT SALES SHEET */}
            {activeTab === 'Import_Sales' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                      Import Sales History (Raw Tab)
                    </h1>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Paste or edit individual sales invoice rows. Updates calculations instantly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newRow: SaleRow = {
                        id: 'new_s_' + Date.now(),
                        invoiceNo: 'INV-' + (sales.length + 101),
                        invoiceDate: new Date().toISOString().split('T')[0],
                        channel: 'Shopify',
                        sku: 'SKU-YOGA-01',
                        qty: 1,
                        price: 50.00,
                        currency: 'AUD'
                      };
                      handleSalesChange(prev => [...prev, newRow]);
                    }}
                    className="flex items-center space-x-1.5 text-xs bg-[#051C2C] text-white py-2 px-4 rounded-md hover:bg-[#2251FF] transition-colors font-medium"
                  >
                    <Plus size={14} />
                    <span>Add Row</span>
                  </button>
                </div>

                {/* Drag-and-Drop / Click CSV Import Box */}
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'Sales')}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                    isDragging 
                      ? 'border-[#2251FF] bg-[rgba(34,81,255,0.04)] scale-[0.99]' 
                      : 'border-[#E8E8E6] hover:border-[#2251FF] hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-[#F5F5F2] rounded-full text-[#2251FF]">
                      <Upload size={20} />
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-[#051C2C] block">Drag and drop your sales report .csv here</span>
                      <span className="text-[11px] text-[#888888]">or click to select file from your device</span>
                    </div>
                    <label className="text-xs text-white bg-[#051C2C] px-4 py-1.5 rounded-md hover:bg-[#2251FF] transition-colors cursor-pointer font-medium shadow-sm">
                      Select CSV File
                      <input 
                        type="file" 
                        accept=".csv" 
                        onChange={(e) => handleCSVUpload(e, 'Sales')} 
                        className="hidden" 
                      />
                    </label>
                    <div className="text-[10px] text-[#888888] font-mono pt-1">
                      Expected headers: invoiceNo, invoiceDate, channel, sku, qty, price, currency (Aliased columns supported)
                    </div>
                  </div>
                </div>

                {/* CSV Import Preview / Commitment Board */}
                {csvPreview && csvPreview.tab === 'Sales' && (
                  <div className="bg-[#2251FF]/5 border border-[#2251FF]/20 rounded-xl p-5 space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-[#2251FF]/10 text-[#2251FF] rounded-md">
                          <CheckCircle size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-[#051C2C]">CSV Parsed Successfully</h3>
                          <p className="text-xs text-gray-500 font-mono">File: {csvPreview.fileName} ({csvPreview.rowCount} records parsed)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setCsvPreview(prev => prev ? { ...prev, mode: 'append' } : null)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            csvPreview.mode === 'append'
                              ? 'bg-[#051C2C] text-white shadow-sm'
                              : 'bg-white border border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Append to Current
                        </button>
                        <button
                          onClick={() => setCsvPreview(prev => prev ? { ...prev, mode: 'overwrite' } : null)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            csvPreview.mode === 'overwrite'
                              ? 'bg-[#D32F2F] text-white shadow-sm'
                              : 'bg-white border border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Overwrite Table
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E8E8E6] overflow-hidden">
                      <div className="bg-[#F5F5F2] px-3 py-2 border-b border-[#E8E8E6] text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                        Sample Data Preview (First 3 Rows)
                      </div>
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-[#E8E8E6] text-[11px] font-mono text-gray-500">
                            <th className="p-2 pl-4">Invoice No</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Channel</th>
                            <th className="p-2">SKU</th>
                            <th className="p-2 text-right">Qty</th>
                            <th className="p-2 text-right pr-4">Price</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                          {csvPreview.data.slice(0, 3).map((row: any, idx: number) => (
                            <tr key={idx} className="hover:bg-slate-50/50">
                              <td className="p-2 pl-4 font-semibold text-[#051C2C]">{row.invoiceNo}</td>
                              <td className="p-2 text-gray-500">{row.invoiceDate}</td>
                              <td className="p-2">{row.channel}</td>
                              <td className="p-2 font-bold text-[#2251FF]">{row.sku}</td>
                              <td className="p-2 text-right">{row.qty}</td>
                              <td className="p-2 text-right pr-4">{row.price.toFixed(2)} {row.currency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setCsvPreview(null)}
                        className="px-4 py-2 border border-[#E8E8E6] text-xs font-semibold rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
                      >
                        Discard
                      </button>
                      <button
                        onClick={handleExecuteImport}
                        className="px-5 py-2 bg-[#2251FF] hover:bg-[#051C2C] text-xs font-semibold text-white rounded-md transition-all shadow-sm"
                      >
                        Confirm and Import {csvPreview.rowCount} Records
                      </button>
                    </div>
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#051C2C]">
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-28">Invoice No</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-32">Date</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-40">Channel</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-44">SKU</th>
                        <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-24 pr-4">Qty</th>
                        <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-32 pr-4">Price (Local)</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-24">Currency</th>
                        <th className="py-2.5 text-center text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-16">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6]">
                      {sales.map((row) => (
                        <tr key={row.id} className="hover:bg-[#F5F5F2]/30">
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.invoiceNo}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, invoiceNo: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            />
                          </td>
                          <td className="py-1">
                            <input
                              type="date"
                              value={row.invoiceDate}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, invoiceDate: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            />
                          </td>
                          <td className="py-1">
                            <select
                              value={row.channel}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, channel: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] font-medium"
                            >
                              <option value="Shopify">Shopify</option>
                              <option value="Amazon">Amazon</option>
                              <option value="B2B Wholesale">B2B Wholesale</option>
                            </select>
                          </td>
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.sku}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, sku: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] font-mono font-bold"
                            />
                          </td>
                          <td className="py-1 pr-4">
                            <input
                              type="number"
                              value={row.qty}
                              onChange={(e) => {
                                const val = parseInt(e.target.value) || 0;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, qty: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] text-right font-mono"
                            />
                          </td>
                          <td className="py-1 pr-4">
                            <input
                              type="number"
                              step="0.01"
                              value={row.price}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value) || 0;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, price: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] text-right font-mono"
                            />
                          </td>
                          <td className="py-1">
                            <select
                              value={row.currency}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleSalesChange(prev => prev.map(r => r.id === row.id ? { ...r, currency: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            >
                              <option value="AUD">AUD</option>
                              <option value="USD">USD</option>
                              <option value="EUR">EUR</option>
                              <option value="GBP">GBP</option>
                            </select>
                          </td>
                          <td className="py-1 text-center">
                            <button
                              onClick={() => {
                                handleSalesChange(prev => prev.filter(r => r.id !== row.id));
                              }}
                              className="p-1.5 text-[#D32F2F] hover:bg-red-50 rounded-md transition-colors"
                            >
                              <Trash2 size={13} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 5. IMPORT INVENTORY SHEET */}
            {activeTab === 'Import_Inventory' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                      Import Stock Snapshot (Raw Tab)
                    </h1>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Directly edit SOH (Stock on Hand) and ERP unit costs.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newRow: InventoryRow = {
                        id: 'new_i_' + Date.now(),
                        sku: 'SKU-NEW-99',
                        productName: 'New Product Name',
                        location: 'Melbourne WH',
                        soh: 100,
                        unitCost: 15.00
                      };
                      handleInventoryChange(prev => [...prev, newRow]);
                    }}
                    className="flex items-center space-x-1.5 text-xs bg-[#051C2C] text-white py-2 px-4 rounded-md hover:bg-[#2251FF] transition-colors font-medium"
                  >
                    <Plus size={14} />
                    <span>Add Row</span>
                  </button>
                </div>

                {/* Drag-and-Drop / Click CSV Import Box */}
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'Inventory')}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                    isDragging 
                      ? 'border-[#2251FF] bg-[rgba(34,81,255,0.04)] scale-[0.99]' 
                      : 'border-[#E8E8E6] hover:border-[#2251FF] hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-[#F5F5F2] rounded-full text-[#2251FF]">
                      <Upload size={20} />
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-[#051C2C] block">Drag and drop your stock report .csv here</span>
                      <span className="text-[11px] text-[#888888]">or click to select file from your device</span>
                    </div>
                    <label className="text-xs text-white bg-[#051C2C] px-4 py-1.5 rounded-md hover:bg-[#2251FF] transition-colors cursor-pointer font-medium shadow-sm">
                      Select CSV File
                      <input 
                        type="file" 
                        accept=".csv" 
                        onChange={(e) => handleCSVUpload(e, 'Inventory')} 
                        className="hidden" 
                      />
                    </label>
                    <div className="text-[10px] text-[#888888] font-mono pt-1">
                      Expected headers: sku, productName, location, soh, unitCost (Aliased columns supported)
                    </div>
                  </div>
                </div>

                {/* CSV Import Preview / Commitment Board */}
                {csvPreview && csvPreview.tab === 'Inventory' && (
                  <div className="bg-[#2251FF]/5 border border-[#2251FF]/20 rounded-xl p-5 space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-[#2251FF]/10 text-[#2251FF] rounded-md">
                          <CheckCircle size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-[#051C2C]">CSV Parsed Successfully</h3>
                          <p className="text-xs text-gray-500 font-mono">File: {csvPreview.fileName} ({csvPreview.rowCount} records parsed)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setCsvPreview(prev => prev ? { ...prev, mode: 'append' } : null)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            csvPreview.mode === 'append'
                              ? 'bg-[#051C2C] text-white shadow-sm'
                              : 'bg-white border border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Append to Current
                        </button>
                        <button
                          onClick={() => setCsvPreview(prev => prev ? { ...prev, mode: 'overwrite' } : null)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            csvPreview.mode === 'overwrite'
                              ? 'bg-[#D32F2F] text-white shadow-sm'
                              : 'bg-white border border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Overwrite Table
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E8E8E6] overflow-hidden">
                      <div className="bg-[#F5F5F2] px-3 py-2 border-b border-[#E8E8E6] text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                        Sample Data Preview (First 3 Rows)
                      </div>
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-[#E8E8E6] text-[11px] font-mono text-gray-500">
                            <th className="p-2 pl-4">SKU</th>
                            <th className="p-2">Product Name</th>
                            <th className="p-2">Location</th>
                            <th className="p-2 text-right">SOH</th>
                            <th className="p-2 text-right pr-4">ERP Unit Cost</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                          {csvPreview.data.slice(0, 3).map((row: any, idx: number) => (
                            <tr key={idx} className="hover:bg-slate-50/50">
                              <td className="p-2 pl-4 font-semibold text-[#051C2C]">{row.sku}</td>
                              <td className="p-2 text-gray-500 truncate max-w-xs">{row.productName}</td>
                              <td className="p-2">{row.location}</td>
                              <td className="p-2 text-right font-bold">{row.soh}</td>
                              <td className="p-2 text-right pr-4 font-bold text-[#2251FF]">AUD {row.unitCost.toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setCsvPreview(null)}
                        className="px-4 py-2 border border-[#E8E8E6] text-xs font-semibold rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
                      >
                        Discard
                      </button>
                      <button
                        onClick={handleExecuteImport}
                        className="px-5 py-2 bg-[#2251FF] hover:bg-[#051C2C] text-xs font-semibold text-white rounded-md transition-all shadow-sm"
                      >
                        Confirm and Import {csvPreview.rowCount} Records
                      </button>
                    </div>
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#051C2C]">
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-44">SKU</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Product Name</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-40">Location</th>
                        <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-28 pr-4">SOH</th>
                        <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-32 pr-4">ERP Cost (AUD)</th>
                        <th className="py-2.5 text-center text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-16">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6]">
                      {inventory.map((row) => (
                        <tr key={row.id} className="hover:bg-[#F5F5F2]/30">
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.sku}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleInventoryChange(prev => prev.map(r => r.id === row.id ? { ...r, sku: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] font-mono font-bold"
                            />
                          </td>
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.productName}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleInventoryChange(prev => prev.map(r => r.id === row.id ? { ...r, productName: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] font-medium"
                            />
                          </td>
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.location}
                              onChange={(e) => {
                                const val = e.target.value;
                                handleInventoryChange(prev => prev.map(r => r.id === row.id ? { ...r, location: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            />
                          </td>
                          <td className="py-1 pr-4">
                            <input
                              type="number"
                              value={row.soh}
                              onChange={(e) => {
                                const val = parseInt(e.target.value) || 0;
                                handleInventoryChange(prev => prev.map(r => r.id === row.id ? { ...r, soh: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] text-right font-mono"
                            />
                          </td>
                          <td className="py-1 pr-4">
                            <input
                              type="number"
                              step="0.01"
                              value={row.unitCost}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value) || 0;
                                handleInventoryChange(prev => prev.map(r => r.id === row.id ? { ...r, unitCost: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] text-right font-mono font-bold"
                            />
                          </td>
                          <td className="py-1 text-center">
                            <button
                              onClick={() => {
                                handleInventoryChange(prev => prev.filter(r => r.id !== row.id));
                              }}
                              className="p-1.5 text-[#D32F2F] hover:bg-red-50 rounded-md transition-colors"
                            >
                              <Trash2 size={13} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 6. IMPORT PURCHASES SHEET */}
            {activeTab === 'Import_Purchases' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                      Import Purchases Logs (Raw Tab)
                    </h1>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Keep records of supplier purchase order prices to populate cost fallbacks.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newRow: PurchaseRow = {
                        id: 'new_p_' + Date.now(),
                        poNo: 'PO-2026-' + (purchases.length + 101),
                        sku: 'SKU-YOGA-01',
                        supplier: 'Zen Supply',
                        qtyOrdered: 100,
                        unitPrice: 40.00,
                        dateReceived: new Date().toISOString().split('T')[0]
                      };
                      handlePurchasesChange(prev => [...prev, newRow]);
                    }}
                    className="flex items-center space-x-1.5 text-xs bg-[#051C2C] text-white py-2 px-4 rounded-md hover:bg-[#2251FF] transition-colors font-medium"
                  >
                    <Plus size={14} />
                    <span>Add Row</span>
                  </button>
                </div>

                {/* Drag-and-Drop / Click CSV Import Box */}
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, 'Purchases')}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                    isDragging 
                      ? 'border-[#2251FF] bg-[rgba(34,81,255,0.04)] scale-[0.99]' 
                      : 'border-[#E8E8E6] hover:border-[#2251FF] hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 bg-[#F5F5F2] rounded-full text-[#2251FF]">
                      <Upload size={20} />
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-[#051C2C] block">Drag and drop your purchases log .csv here</span>
                      <span className="text-[11px] text-[#888888]">or click to select file from your device</span>
                    </div>
                    <label className="text-xs text-white bg-[#051C2C] px-4 py-1.5 rounded-md hover:bg-[#2251FF] transition-colors cursor-pointer font-medium shadow-sm">
                      Select CSV File
                      <input 
                        type="file" 
                        accept=".csv" 
                        onChange={(e) => handleCSVUpload(e, 'Purchases')} 
                        className="hidden" 
                      />
                    </label>
                    <div className="text-[10px] text-[#888888] font-mono pt-1">
                      Expected headers: poNo, sku, supplier, qtyOrdered, unitPrice, dateReceived (Aliased columns supported)
                    </div>
                  </div>
                </div>

                {/* CSV Import Preview / Commitment Board */}
                {csvPreview && csvPreview.tab === 'Purchases' && (
                  <div className="bg-[#2251FF]/5 border border-[#2251FF]/20 rounded-xl p-5 space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-[#2251FF]/10 text-[#2251FF] rounded-md">
                          <CheckCircle size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm text-[#051C2C]">CSV Parsed Successfully</h3>
                          <p className="text-xs text-gray-500 font-mono">File: {csvPreview.fileName} ({csvPreview.rowCount} records parsed)</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setCsvPreview(prev => prev ? { ...prev, mode: 'append' } : null)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            csvPreview.mode === 'append'
                              ? 'bg-[#051C2C] text-white shadow-sm'
                              : 'bg-white border border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Append to Current
                        </button>
                        <button
                          onClick={() => setCsvPreview(prev => prev ? { ...prev, mode: 'overwrite' } : null)}
                          className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                            csvPreview.mode === 'overwrite'
                              ? 'bg-[#D32F2F] text-white shadow-sm'
                              : 'bg-white border border-[#E8E8E6] text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          Overwrite Table
                        </button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-[#E8E8E6] overflow-hidden">
                      <div className="bg-[#F5F5F2] px-3 py-2 border-b border-[#E8E8E6] text-[10px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                        Sample Data Preview (First 3 Rows)
                      </div>
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-slate-50 border-b border-[#E8E8E6] text-[11px] font-mono text-gray-500">
                            <th className="p-2 pl-4">PO No</th>
                            <th className="p-2">SKU</th>
                            <th className="p-2">Supplier</th>
                            <th className="p-2 text-right">Qty Ordered</th>
                            <th className="p-2 text-right pr-4">PO Unit Price</th>
                            <th className="p-2">Date Received</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                          {csvPreview.data.slice(0, 3).map((row: any, idx: number) => (
                            <tr key={idx} className="hover:bg-slate-50/50">
                              <td className="p-2 pl-4 font-semibold text-[#051C2C]">{row.poNo}</td>
                              <td className="p-2 font-bold text-[#2251FF]">{row.sku}</td>
                              <td className="p-2 text-gray-500">{row.supplier}</td>
                              <td className="p-2 text-right font-bold">{row.qtyOrdered}</td>
                              <td className="p-2 text-right pr-4 font-bold">AUD {row.unitPrice.toFixed(2)}</td>
                              <td className="p-2 text-gray-400">{row.dateReceived}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="flex justify-end space-x-3">
                      <button
                        onClick={() => setCsvPreview(null)}
                        className="px-4 py-2 border border-[#E8E8E6] text-xs font-semibold rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
                      >
                        Discard
                      </button>
                      <button
                        onClick={handleExecuteImport}
                        className="px-5 py-2 bg-[#2251FF] hover:bg-[#051C2C] text-xs font-semibold text-white rounded-md transition-all shadow-sm"
                      >
                        Confirm and Import {csvPreview.rowCount} Records
                      </button>
                    </div>
                  </div>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#051C2C]">
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-28">PO No</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-40">SKU</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Supplier</th>
                        <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-24 pr-4">Qty Ordered</th>
                        <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-32 pr-4">PO Unit Price</th>
                        <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-32">Date Received</th>
                        <th className="py-2.5 text-center text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-16">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6]">
                      {purchases.map((row) => (
                        <tr key={row.id} className="hover:bg-[#F5F5F2]/30">
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.poNo}
                              onChange={(e) => {
                                const val = e.target.value;
                                handlePurchasesChange(prev => prev.map(r => r.id === row.id ? { ...r, poNo: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            />
                          </td>
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.sku}
                              onChange={(e) => {
                                const val = e.target.value;
                                handlePurchasesChange(prev => prev.map(r => r.id === row.id ? { ...r, sku: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] font-mono font-bold"
                            />
                          </td>
                          <td className="py-1">
                            <input
                              type="text"
                              value={row.supplier}
                              onChange={(e) => {
                                const val = e.target.value;
                                handlePurchasesChange(prev => prev.map(r => r.id === row.id ? { ...r, supplier: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            />
                          </td>
                          <td className="py-1 pr-4">
                            <input
                              type="number"
                              value={row.qtyOrdered}
                              onChange={(e) => {
                                const val = parseInt(e.target.value) || 0;
                                handlePurchasesChange(prev => prev.map(r => r.id === row.id ? { ...r, qtyOrdered: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] text-right font-mono"
                            />
                          </td>
                          <td className="py-1 pr-4">
                            <input
                              type="number"
                              step="0.01"
                              value={row.unitPrice}
                              onChange={(e) => {
                                const val = parseFloat(e.target.value) || 0;
                                handlePurchasesChange(prev => prev.map(r => r.id === row.id ? { ...r, unitPrice: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF] text-right font-mono"
                            />
                          </td>
                          <td className="py-1">
                            <input
                              type="date"
                              value={row.dateReceived}
                              onChange={(e) => {
                                const val = e.target.value;
                                handlePurchasesChange(prev => prev.map(r => r.id === row.id ? { ...r, dateReceived: val } : r));
                              }}
                              className="w-full bg-[#FFFDE7] p-1.5 text-xs rounded outline-none border border-transparent focus:border-[#2251FF]"
                            />
                          </td>
                          <td className="py-1 text-center">
                            <button
                              onClick={() => {
                                handlePurchasesChange(prev => prev.filter(r => r.id !== row.id));
                              }}
                              className="p-1.5 text-[#D32F2F] hover:bg-red-50 rounded-md transition-colors"
                            >
                              <Trash2 size={13} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 7. DATA CLEANING VIEW */}
            {activeTab === 'Data_Cleaning' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div>
                  <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                    Cleaned Sales Standardized Board (Read-Only Formulated)
                  </h1>
                  <p className="text-xs text-[#888888] font-mono mt-1">
                    Normalized outputs: currency exchanges mapped automatically via parameters list
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-[#E8E8E6]">
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Invoice</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Date</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Channel</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">SKU</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Units</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Clean Price (Local)</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Orig Currency</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Base Revenue (AUD)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6] font-mono text-xs">
                      {cleanedSales.map((row) => (
                        <tr key={row.id} className="hover:bg-slate-50">
                          <td className="p-3 font-semibold text-[#051C2C]">{row.invoiceNo}</td>
                          <td className="p-3 text-gray-500">{row.invoiceDate}</td>
                          <td className="p-3 font-sans font-medium">{row.channel}</td>
                          <td className="p-3 text-[#2251FF] font-bold">{row.sku}</td>
                          <td className="p-3 text-right pr-4 font-bold">{row.qty}</td>
                          <td className="p-3 text-right pr-4">{row.price.toFixed(2)}</td>
                          <td className="p-3 text-gray-400 font-bold">{row.currency}</td>
                          <td className="p-3 text-right pr-4 font-bold text-[#051C2C]">
                            {row.baseRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 8. COST ENGINE VIEW */}
            {activeTab === 'Cost_Engine' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div>
                  <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                    SKU Unit Cost Core Engine (Fallback Resolver)
                  </h1>
                  <p className="text-xs text-[#888888] font-mono mt-1">
                    Prioritization hierarchy: Latest SOH Cost (ERP Landing) &gt; PO Hist Average &gt; 0 Alert
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-[#E8E8E6]">
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">SKU ID</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">ERP Title</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Hist PO Price (AUD)</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Latest SOH Landing</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Determined Cost</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Resolution Strategy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6] text-xs">
                      {costEngine.map((row) => (
                        <tr key={row.sku} className="hover:bg-slate-50">
                          <td className="p-3 font-mono font-bold text-[#051C2C]">{row.sku}</td>
                          <td className="p-3 text-gray-500 font-medium">{row.name}</td>
                          <td className="p-3 text-right pr-4 font-mono">{row.avgPoPrice > 0 ? row.avgPoPrice.toFixed(2) : '-'}</td>
                          <td className="p-3 text-right pr-4 font-mono">{row.invLandingCost > 0 ? row.invLandingCost.toFixed(2) : '-'}</td>
                          <td className="p-3 text-right pr-4 font-mono font-bold text-[#051C2C]">
                            {row.finalCost.toFixed(2)}
                          </td>
                          <td className="p-3">
                            <span className={`inline-block py-1 px-2.5 rounded-full text-[10px] font-bold ${
                              row.finalCost === 0
                                ? 'bg-red-50 text-[#D32F2F]'
                                : row.costSource.includes('Landing')
                                ? 'bg-[#00C853]/10 text-[#00C853]'
                                : 'bg-blue-50 text-blue-600'
                            }`}>
                              {row.costSource}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 9. MARGIN ENGINE VIEW */}
            {activeTab === 'Margin_Engine' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div>
                  <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                    Transaction Margin Engine (Real-Time Margins)
                  </h1>
                  <p className="text-xs text-[#888888] font-mono mt-1">
                    Calculated row-by-row on sales outputs minus determined fallback costs
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-[#E8E8E6]">
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Invoice</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">SKU</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Base Rev (AUD)</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Total COGS (AUD)</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Base Profit</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Margin %</th>
                        <th className="p-3 text-center text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Alert Flag</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6] font-mono text-xs">
                      {marginEngine.map((row) => (
                        <tr key={row.id} className={`hover:bg-slate-50 ${row.hasLoss ? 'bg-[rgba(211,47,47,0.03)]' : ''}`}>
                          <td className="p-3 text-[#051C2C] font-bold">{row.invoiceNo}</td>
                          <td className="p-3 font-bold">{row.sku}</td>
                          <td className="p-3 text-right pr-4">{row.baseRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td className="p-3 text-right pr-4 text-gray-500">{row.totalCogs.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                          <td className={`p-3 text-right pr-4 font-bold ${row.hasLoss ? 'text-[#D32F2F]' : 'text-[#051C2C]'}`}>
                            {row.grossProfit.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </td>
                          <td className={`p-3 text-right pr-4 font-bold ${row.hasLoss ? 'text-[#D32F2F]' : 'text-slate-700'}`}>
                            {(row.grossMargin * 100).toFixed(1)}%
                          </td>
                          <td className="p-3 text-center">
                            {row.hasLoss ? (
                              <span className="inline-block py-0.5 px-2 bg-red-100 text-[#D32F2F] text-[10px] font-bold rounded-full">
                                Loss Anomaly
                              </span>
                            ) : (
                              <span className="inline-block py-0.5 px-2 bg-[#00C853]/10 text-[#00C853] text-[10px] font-bold rounded-full">
                                Compliant
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 10. INVENTORY ANALYTICS VIEW */}
            {activeTab === 'Inventory_Analytics' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div>
                  <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                    Warehouse Stock Health & ABC Classification
                  </h1>
                  <p className="text-xs text-[#888888] font-mono mt-1">
                    Formulated Days on Hand (DOH), ABC sorting (A = Top 70% value, B = Next 20%, C = Tail)
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-[#E8E8E6]">
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">SKU</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Title</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">SOH Unit</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Total Value</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">90D Sales</th>
                        <th className="p-3 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">DOH Cover</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Classification</th>
                        <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Risk Profile</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E8E6] text-xs">
                      {inventoryAnalytics.map((row) => {
                        const valueBarPct = (row.totalValue / maxInvVal) * 100;
                        return (
                          <tr key={row.sku} className="hover:bg-slate-50">
                            <td className="p-3 font-mono font-bold text-[#051C2C]">{row.sku}</td>
                            <td className="p-3 font-sans text-gray-600 max-w-xs truncate">{row.name}</td>
                            <td className="p-3 text-right pr-4 font-mono font-bold">{row.soh}</td>
                            <td className="p-3 text-right pr-4 font-mono font-bold text-[#051C2C] min-w-[140px]">
                              <span>{row.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                              {/* Relative Magnitude Data Bar */}
                              <div className="w-24 h-1.5 bg-[#051C2C]/10 rounded-full ml-auto mt-1 overflow-hidden">
                                <div style={{ width: `${valueBarPct}%` }} className="h-full bg-[#2251FF]"></div>
                              </div>
                            </td>
                            <td className="p-3 text-right pr-4 font-mono text-gray-500">{row.sales90}</td>
                            <td className="p-3 text-right pr-4 font-mono font-bold">
                              {row.doh === 999 ? '999+' : row.doh.toFixed(0)} Days
                            </td>
                            <td className="p-3">
                              <span className={`inline-block py-0.5 px-2 rounded text-[10px] font-bold ${
                                row.abcClass.startsWith('A')
                                  ? 'bg-[#051C2C] text-white'
                                  : row.abcClass.includes('Medium')
                                  ? 'bg-slate-200 text-slate-700'
                                  : 'bg-slate-100 text-slate-400'
                              }`}>
                                {row.abcClass}
                              </span>
                            </td>
                            <td className="p-3 font-semibold">
                              <span className={`inline-block py-0.5 px-2 rounded-full text-[10px] font-bold ${
                                row.healthStatus === 'Severe Dead Stock'
                                  ? 'bg-red-50 text-[#D32F2F]'
                                  : row.healthStatus === 'Stock Risk'
                                  ? 'bg-red-100 text-[#D32F2F]'
                                  : 'bg-[#00C853]/10 text-[#00C853]'
                              }`}>
                                {row.healthStatus === 'Severe Dead Stock' ? 'Excess/Dead' : row.healthStatus}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 11. SALES ANALYTICS VIEW */}
            {activeTab === 'Sales_Analytics' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Panel 1: Channel Performance */}
                <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                  <div>
                    <h2 className="font-display font-bold text-lg text-[#051C2C]">
                      Channel Profitability Breakdown
                    </h2>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Summarized operational revenue vs costs per active sales conduit
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#E8E8E6]">
                          <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Channel</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Revenue (AUD)</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">COGS (AUD)</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Profit</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Margin %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-mono">
                        {channelPerformance.map((row) => (
                          <tr key={row.channel} className="hover:bg-slate-50">
                            <td className="py-3 font-sans font-bold text-[#051C2C]">{row.channel}</td>
                            <td className="py-3 text-right pr-4 font-bold">{row.rev.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                            <td className="py-3 text-right pr-4 text-gray-500">{row.cogs.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                            <td className="py-3 text-right pr-4 font-bold text-[#051C2C]">{row.profit.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                            <td className="py-3 text-right pr-4 font-bold text-[#2251FF]">{(row.margin * 100).toFixed(1)}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Panel 2: Product Performance */}
                <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                  <div>
                    <h2 className="font-display font-bold text-lg text-[#051C2C]">
                      SKU Product Margin Matrix
                    </h2>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Top profit drivers ranked descending by calculated revenue volume
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-[#E8E8E6]">
                          <th className="py-2.5 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">SKU</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Units Sold</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Revenue (Base)</th>
                          <th className="py-2.5 text-right text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono pr-4">Gross Margin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs font-mono">
                        {topSkusSales.map((row) => {
                          const margin = row.rev > 0 ? row.profit / row.rev : 0;
                          return (
                            <tr key={row.sku} className="hover:bg-slate-50">
                              <td className="py-3 font-sans font-bold text-[#051C2C]">
                                <div>{row.sku}</div>
                                <div className="text-[10px] text-[#888888] truncate max-w-[140px] font-normal">{row.name}</div>
                              </td>
                              <td className="py-3 text-right pr-4 font-bold">{row.qty}</td>
                              <td className="py-3 text-right pr-4 font-bold text-[#051C2C]">{row.rev.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                              <td className="py-3 text-right pr-4 font-bold text-[#2251FF]">{(margin * 100).toFixed(1)}%</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* 12. EXCEPTION REPORT SHEET */}
            {activeTab === 'Exception_Report' && (
              <div className="bg-white rounded-xl shadow-apple-md p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-display font-semibold text-[#051C2C]">
                      Operational Exception Reports (Anomaly Monitor)
                    </h1>
                    <p className="text-xs text-[#888888] font-mono mt-1">
                      Identified business anomalies requiring action: negative margin sales, zero costs, and out-of-stock risks
                    </p>
                  </div>
                  <div className="text-xs font-mono bg-red-50 text-[#D32F2F] py-1.5 px-3 rounded-md font-bold">
                    {exceptionReport.length} Alerts Active
                  </div>
                </div>

                {exceptionReport.length === 0 ? (
                  <div className="border border-[#E8E8E6] rounded-xl p-8 text-center space-y-3">
                    <CheckCircle className="text-[#00C853] mx-auto" size={32} />
                    <h4 className="font-display font-bold text-lg text-[#051C2C]">Workbook Compliant</h4>
                    <p className="text-xs text-[#888888]">No margins breaches or data inaccuracies detected inside Cin7 raw records.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-red-50/50 border-b border-[#E8E8E6]">
                          <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#D32F2F] font-mono w-44">Anomaly Class</th>
                          <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono w-32">SKU ID</th>
                          <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Product Name</th>
                          <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Current Violation Value</th>
                          <th className="p-3 text-[11px] uppercase tracking-wider font-semibold text-[#051C2C] font-mono">Actionable Operation Advice</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E6] text-xs">
                        {exceptionReport.map((row, idx) => (
                          <tr key={idx} className="bg-[rgba(211,47,47,0.015)] hover:bg-red-50/20 transition-colors">
                            <td className="p-3 font-semibold text-[#D32F2F]">
                              <span className="flex items-center space-x-1">
                                <AlertTriangle size={13} />
                                <span>{row.type}</span>
                              </span>
                            </td>
                            <td className="p-3 font-mono font-bold text-[#051C2C]">{row.sku}</td>
                            <td className="p-3 text-gray-500 font-medium">{row.name}</td>
                            <td className="p-3 font-mono font-semibold text-[#1A1A2E]">{row.valueLabel}</td>
                            <td className="p-3 font-medium text-[#2251FF] bg-[rgba(34,81,255,0.03)] rounded-md">
                              {row.advice}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

          </motion.div>
        </AnimatePresence>

      </main>

      {/* ── FOOTER CREDIT STRIP ── */}
      <footer className="bg-white border-t border-[#E8E8E6] py-5 mt-auto text-center text-xs text-[#888888] font-mono">
        <div className="max-w-[1400px] mx-auto px-10 flex justify-between items-center flex-wrap gap-2">
          <span>&copy; 2026 Cin7 performance-accelerator applet. All Rights Reserved.</span>
          <span>Designed with Institutional Minimalism &amp; Apple HIG</span>
        </div>
      </footer>
    </div>
  );
}
