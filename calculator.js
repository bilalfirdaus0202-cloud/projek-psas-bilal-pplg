/**
 * Calculator Engine - Cirebon Rattan Heritage
 * Fitur 4 (Total Harga & Diskon), Fitur 5 (Biaya Pengiriman), Fitur 6 (Estimasi Sampai / ETA)
 */

const calculatorState = {
  items: [], // { product, color, weave, cushion, qty, unitPriceIdr, unitPriceUsd }
  destinationId: "dest-malaysia-klang",
  shippingMode: "auto", // auto | lcl | fcl20 | fcl40 | air
  currency: "USD",      // IDR | USD
  incoterm: "CIF"       // CIF (Termasuk Ongkir) | FOB (Port Tanjung Priok Saja)
};

// Inisialisasi item awal saat pertama buka website agar pengguna langsung melihat simulasi live
function initDefaultCalculatorItems() {
  const defaultProd1 = productsData.find(p => p.id === "crh-001"); // Lounge Chair
  const defaultProd2 = productsData.find(p => p.id === "crh-004"); // Pendant Lamp

  if (defaultProd1 && defaultProd2) {
    calculatorState.items = [
      {
        id: "item-" + Date.now() + "-1",
        productId: defaultProd1.id,
        name: defaultProd1.name,
        color: defaultProd1.variants.colors[0].name,
        weave: defaultProd1.variants.weaves[0].name,
        cushion: defaultProd1.variants.cushions[1].name,
        qty: 12, // Tier 5% discount
        unitPriceIdr: defaultProd1.basePriceIdr + defaultProd1.variants.cushions[1].priceDiff,
        unitPriceUsd: Math.round((defaultProd1.basePriceIdr + defaultProd1.variants.cushions[1].priceDiff) / USD_RATE),
        cbmPerUnit: defaultProd1.cbm,
        weightPerUnit: defaultProd1.weightKg,
        isPreorder: defaultProd1.status === "preorder",
        leadTimeDays: defaultProd1.leadTimeDays,
        image: defaultProd1.image
      },
      {
        id: "item-" + Date.now() + "-2",
        productId: defaultProd2.id,
        name: defaultProd2.name,
        color: defaultProd2.variants.colors[0].name,
        weave: defaultProd2.variants.weaves[0].name,
        cushion: defaultProd2.variants.cushions[0].name,
        qty: 20,
        unitPriceIdr: defaultProd2.basePriceIdr,
        unitPriceUsd: defaultProd2.basePriceUsd,
        cbmPerUnit: defaultProd2.cbm,
        weightPerUnit: defaultProd2.weightKg,
        isPreorder: defaultProd2.status === "preorder",
        leadTimeDays: defaultProd2.leadTimeDays,
        image: defaultProd2.image
      }
    ];
  }
}

// Tambah Produk ke Simulasi Kalkulator
function addItemToCalculator(product, colorName, weaveName, cushionName, qty = 1) {
  // Hitung perbedaan harga varian
  const colorObj = product.variants.colors.find(c => c.name === colorName) || product.variants.colors[0];
  const weaveObj = product.variants.weaves.find(w => w.name === weaveName) || product.variants.weaves[0];
  const cushionObj = product.variants.cushions.find(cu => cu.name === cushionName) || product.variants.cushions[0];

  const totalDiffIdr = (colorObj ? colorObj.priceDiff : 0) + (weaveObj ? weaveObj.priceDiff : 0) + (cushionObj ? cushionObj.priceDiff : 0);
  const unitPriceIdr = product.basePriceIdr + totalDiffIdr;
  const unitPriceUsd = Math.round(unitPriceIdr / USD_RATE);

  // Periksa apakah item dengan varian yang persis sama sudah ada di keranjang kalkulator
  const existingIndex = calculatorState.items.findIndex(item => 
    item.productId === product.id &&
    item.color === colorName &&
    item.weave === weaveName &&
    item.cushion === cushionName
  );

  if (existingIndex > -1) {
    calculatorState.items[existingIndex].qty += qty;
  } else {
    calculatorState.items.push({
      id: "item-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
      productId: product.id,
      name: product.name,
      color: colorName,
      weave: weaveName,
      cushion: cushionName,
      qty: qty,
      unitPriceIdr: unitPriceIdr,
      unitPriceUsd: unitPriceUsd,
      cbmPerUnit: product.cbm,
      weightPerUnit: product.weightKg,
      isPreorder: product.status === "preorder",
      leadTimeDays: product.leadTimeDays,
      image: product.image
    });
  }

  renderCalculator();
  showToast(`Berhasil menambahkan ${qty}x ${product.name} ke Simulasi Kalkulator!`, "success");
}

// Hapus Item
function removeCalculatorItem(itemId) {
  calculatorState.items = calculatorState.items.filter(item => item.id !== itemId);
  renderCalculator();
  showToast("Item berhasil dihapus dari simulasi.", "info");
}

// Update Kuantiti Item
function updateCalculatorItemQty(itemId, newQty) {
  const qty = parseInt(newQty, 10);
  if (isNaN(qty) || qty <= 0) {
    removeCalculatorItem(itemId);
    return;
  }
  const item = calculatorState.items.find(i => i.id === itemId);
  if (item) {
    item.qty = qty;
    renderCalculator();
  }
}

// Preset Quick Buttons untuk testing cepat (Fokus Ekspor Malaysia)
function applyQuickPreset(presetType) {
  if (presetType === "sample") {
    const prod = productsData[0]; // 1 pcs sample
    calculatorState.items = [{
      id: "preset-sample",
      productId: prod.id,
      name: prod.name,
      color: prod.variants.colors[0].name,
      weave: prod.variants.weaves[0].name,
      cushion: prod.variants.cushions[1].name,
      qty: 2,
      unitPriceIdr: prod.basePriceIdr + prod.variants.cushions[1].priceDiff,
      unitPriceUsd: Math.round((prod.basePriceIdr + prod.variants.cushions[1].priceDiff) / USD_RATE),
      cbmPerUnit: prod.cbm,
      weightPerUnit: prod.weightKg,
      isPreorder: false,
      leadTimeDays: prod.leadTimeDays,
      image: prod.image
    }];
    calculatorState.destinationId = "dest-malaysia-klang";
    calculatorState.shippingMode = "lcl";
    showToast("Preset Contoh Sample (2 Pcs ke Port Klang, Malaysia) diterapkan!", "success");
  } else if (presetType === "container20") {
    const prod1 = productsData[0];
    const prod2 = productsData[6]; // Barstool
    calculatorState.items = [
      {
        id: "preset-c20-1",
        productId: prod1.id,
        name: prod1.name,
        color: prod1.variants.colors[0].name,
        weave: prod1.variants.weaves[0].name,
        cushion: prod1.variants.cushions[0].name,
        qty: 40,
        unitPriceIdr: prod1.basePriceIdr,
        unitPriceUsd: prod1.basePriceUsd,
        cbmPerUnit: prod1.cbm,
        weightPerUnit: prod1.weightKg,
        isPreorder: false,
        leadTimeDays: 5,
        image: prod1.image
      },
      {
        id: "preset-c20-2",
        productId: prod2.id,
        name: prod2.name,
        color: prod2.variants.colors[0].name,
        weave: prod2.variants.weaves[0].name,
        cushion: prod2.variants.cushions[0].name,
        qty: 30,
        unitPriceIdr: prod2.basePriceIdr,
        unitPriceUsd: prod2.basePriceUsd,
        cbmPerUnit: prod2.cbm,
        weightPerUnit: prod2.weightKg,
        isPreorder: false,
        leadTimeDays: 5,
        image: prod2.image
      }
    ];
    calculatorState.destinationId = "dest-malaysia-penang";
    calculatorState.shippingMode = "fcl20";
    showToast("Preset Kontainer 20ft (70 Pcs ke Penang Port, Malaysia) diterapkan!", "success");
  } else if (presetType === "container40") {
    const prod1 = productsData[0];
    const prod2 = productsData[3];
    calculatorState.items = [
      {
        id: "preset-c40-1",
        productId: prod1.id,
        name: prod1.name,
        color: prod1.variants.colors[1].name,
        weave: prod1.variants.weaves[0].name,
        cushion: prod1.variants.cushions[1].name,
        qty: 80,
        unitPriceIdr: prod1.basePriceIdr + prod1.variants.colors[1].priceDiff,
        unitPriceUsd: Math.round((prod1.basePriceIdr + prod1.variants.colors[1].priceDiff) / USD_RATE),
        cbmPerUnit: prod1.cbm,
        weightPerUnit: prod1.weightKg,
        isPreorder: false,
        leadTimeDays: 7,
        image: prod1.image
      },
      {
        id: "preset-c40-2",
        productId: prod2.id,
        name: prod2.name,
        color: prod2.variants.colors[0].name,
        weave: prod2.variants.weaves[0].name,
        cushion: prod2.variants.cushions[0].name,
        qty: 150,
        unitPriceIdr: prod2.basePriceIdr,
        unitPriceUsd: prod2.basePriceUsd,
        cbmPerUnit: prod2.cbm,
        weightPerUnit: prod2.weightKg,
        isPreorder: false,
        leadTimeDays: 5,
        image: prod2.image
      }
    ];
    calculatorState.destinationId = "dest-malaysia-klang";
    calculatorState.shippingMode = "fcl40";
    showToast("Preset Kontainer 40ft High Cube (230 Pcs ke Port Klang / KL, Malaysia) diterapkan!", "success");
  }
  renderCalculator();
}

// Fungsi Inti Kalkulasi Total Harga, Diskon, Ongkir & ETA
function computeCalculation() {
  const isUsd = calculatorState.currency === "USD";
  const destination = shippingDestinations.find(d => d.id === calculatorState.destinationId) || shippingDestinations[0];

  // 1. Total Unit, CBM & Berat
  let totalUnits = 0;
  let totalCbm = 0;
  let totalWeight = 0;
  let grossProductTotalIdr = 0;
  let grossProductTotalUsd = 0;
  let maxLeadTimeDays = 2; // Default 2 hari jika ready stock
  let hasPreorder = false;

  calculatorState.items.forEach(item => {
    totalUnits += item.qty;
    totalCbm += item.cbmPerUnit * item.qty;
    totalWeight += item.weightPerUnit * item.qty;
    grossProductTotalIdr += item.unitPriceIdr * item.qty;
    grossProductTotalUsd += item.unitPriceUsd * item.qty;

    if (item.isPreorder) {
      hasPreorder = true;
      if (item.leadTimeDays > maxLeadTimeDays) {
        maxLeadTimeDays = item.leadTimeDays;
      }
    }
  });

  // Bulatkan CBM 2 desimal
  totalCbm = Math.round(totalCbm * 100) / 100;
  totalWeight = Math.round(totalWeight * 10) / 10;

  // 2. Diskon Volume Tiering (Fitur 4)
  let discountPercent = 0;
  let discountTierName = "Sample / Boutique Tier (Harga Standar)";
  if (totalUnits >= 100) {
    discountPercent = 18;
    discountTierName = "Master Distributor / FCL 40ft (Diskon 18%)";
  } else if (totalUnits >= 50) {
    discountPercent = 12;
    discountTierName = "Wholesale Container 20ft (Diskon 12%)";
  } else if (totalUnits >= 10) {
    discountPercent = 5;
    discountTierName = "Commercial / Hospitality (Diskon 5%)";
  }

  const discountAmountIdr = Math.round(grossProductTotalIdr * (discountPercent / 100));
  const discountAmountUsd = Math.round(grossProductTotalUsd * (discountPercent / 100));

  const netProductTotalIdr = grossProductTotalIdr - discountAmountIdr;
  const netProductTotalUsd = grossProductTotalUsd - discountAmountUsd;

  // 3. Rekomendasi Moda Pengiriman
  let effectiveShippingMode = calculatorState.shippingMode;
  let recommendedModeText = "";

  if (effectiveShippingMode === "auto") {
    if (totalCbm >= 55) {
      effectiveShippingMode = "fcl40";
      recommendedModeText = "Direkomendasikan Full Container 40ft HC (Muatan > 55 CBM)";
    } else if (totalCbm >= 24) {
      effectiveShippingMode = "fcl20";
      recommendedModeText = "Direkomendasikan Full Container 20ft (Muatan 24 - 30 CBM)";
    } else {
      effectiveShippingMode = "lcl";
      recommendedModeText = "Direkomendasikan Sea Freight LCL per CBM (Hemat untuk muatan < 24 CBM)";
    }
  }

  // 4. Biaya Pengiriman (Fitur 5)
  let shippingCostIdr = 0;
  let shippingCostUsd = 0;
  let shippingDetailNote = "";

  if (destination.currency === "IDR") {
    // Domestik
    if (effectiveShippingMode === "fcl40") {
      shippingCostIdr = destination.rateFcl40ft;
      shippingDetailNote = "Sewa Truk Tronton Ekspedisi Kontainer 40ft Cirebon - Gudang Tujuan";
    } else if (effectiveShippingMode === "fcl20") {
      shippingCostIdr = destination.rateFcl20ft;
      shippingDetailNote = "Sewa Truk Fuso Ekspedisi Kontainer 20ft Cirebon - Gudang Tujuan";
    } else if (effectiveShippingMode === "air") {
      shippingCostIdr = Math.max(1, totalWeight) * destination.rateAirPerKg;
      shippingDetailNote = `Air Cargo Domestik Express (${totalWeight} Kg)`;
    } else {
      // LCL
      const billableCbm = Math.max(1, totalCbm);
      shippingCostIdr = billableCbm * destination.rateLclPerCbm;
      shippingDetailNote = `Konsolidasi LCL Darat/Laut (${billableCbm} CBM @ Rp ${destination.rateLclPerCbm.toLocaleString("id-ID")}/CBM)`;
    }
    shippingCostUsd = Math.round(shippingCostIdr / USD_RATE);
  } else {
    // Ekspor Luar Negeri
    if (effectiveShippingMode === "fcl40") {
      shippingCostUsd = destination.rateFcl40ft;
      shippingDetailNote = `Ocean Freight FCL 40ft HC to ${destination.portName}`;
    } else if (effectiveShippingMode === "fcl20") {
      shippingCostUsd = destination.rateFcl20ft;
      shippingDetailNote = `Ocean Freight FCL 20ft to ${destination.portName}`;
    } else if (effectiveShippingMode === "air") {
      shippingCostUsd = Math.round(Math.max(1, totalWeight) * destination.rateAirPerKg);
      shippingDetailNote = `International Air Cargo Sample Express (${totalWeight} Kg @ $${destination.rateAirPerKg}/Kg)`;
    } else {
      // LCL
      const billableCbm = Math.max(1, totalCbm);
      shippingCostUsd = Math.round(billableCbm * destination.rateLclPerCbm);
      shippingDetailNote = `Sea Freight LCL (${billableCbm} CBM @ $${destination.rateLclPerCbm}/CBM) to ${destination.portName}`;
    }
    shippingCostIdr = shippingCostUsd * USD_RATE;
  }

  // Biaya Dokumen Karantina & Fumigasi AFAS
  let fumigationFeeUsd = 0;
  let fumigationFeeIdr = 0;
  if (destination.fumigationRequired) {
    if (totalUnits >= 50) {
      // Gratis untuk pesanan kontainer
      fumigationFeeUsd = 0;
      fumigationFeeIdr = 0;
    } else {
      fumigationFeeUsd = destination.fumigationFee;
      fumigationFeeIdr = fumigationFeeUsd * USD_RATE;
    }
  }

  // Biaya Export Handling & SVLK V-Legal
  const exportHandlingUsd = destination.currency === "IDR" ? 0 : 45; // USD flat
  const exportHandlingIdr = exportHandlingUsd * USD_RATE;

  // Total Biaya Pengiriman & Handling Keseluruhan
  const totalFreightAndDocsIdr = shippingCostIdr + fumigationFeeIdr + exportHandlingIdr;
  const totalFreightAndDocsUsd = shippingCostUsd + fumigationFeeUsd + exportHandlingUsd;

  // Grand Total Akhir (FOB vs CIF)
  const isCif = calculatorState.incoterm === "CIF";
  const grandTotalIdr = isCif ? (netProductTotalIdr + totalFreightAndDocsIdr) : netProductTotalIdr;
  const grandTotalUsd = isCif ? (netProductTotalUsd + totalFreightAndDocsUsd) : netProductTotalUsd;

  // 5. Perhitungan Estimasi Waktu Sampai / ETA (Fitur 6)
  const today = new Date();
  
  // Lead time persiapan: jika ready stock butuh 2-3 hari packing & fumigasi. Jika pre-order sesuai maxLeadTime.
  const prepDays = maxLeadTimeDays;
  
  // Transit laut/udara
  let transitDaysMin = destination.transitMinDays;
  let transitDaysMax = destination.transitMaxDays;
  if (effectiveShippingMode === "air") {
    transitDaysMin = 3;
    transitDaysMax = 6;
  }

  const totalDaysMin = prepDays + transitDaysMin;
  const totalDaysMax = prepDays + transitDaysMax;

  // Hitung perkiraan tanggal sampai kalender nyata
  const etaDateMin = new Date(today.getTime() + totalDaysMin * 24 * 60 * 60 * 1000);
  const etaDateMax = new Date(today.getTime() + totalDaysMax * 24 * 60 * 60 * 1000);

  const dateOptions = { day: "numeric", month: "short", year: "numeric" };
  const formattedEtaRange = `${etaDateMin.toLocaleDateString("id-ID", dateOptions)} - ${etaDateMax.toLocaleDateString("id-ID", dateOptions)}`;

  return {
    totalUnits,
    totalCbm,
    totalWeight,
    hasPreorder,
    maxLeadTimeDays,
    grossProductTotalIdr,
    grossProductTotalUsd,
    discountPercent,
    discountTierName,
    discountAmountIdr,
    discountAmountUsd,
    netProductTotalIdr,
    netProductTotalUsd,
    destination,
    effectiveShippingMode,
    recommendedModeText,
    shippingCostIdr,
    shippingCostUsd,
    shippingDetailNote,
    fumigationFeeIdr,
    fumigationFeeUsd,
    exportHandlingIdr,
    exportHandlingUsd,
    totalFreightAndDocsIdr,
    totalFreightAndDocsUsd,
    grandTotalIdr,
    grandTotalUsd,
    prepDays,
    transitDaysMin,
    transitDaysMax,
    totalDaysMin,
    totalDaysMax,
    formattedEtaRange,
    isUsd,
    isCif
  };
}

// Render Tampilan Kalkulator
function renderCalculator() {
  const calcItemsList = document.getElementById("calc-items-list");
  const destSelect = document.getElementById("calc-destination-select");
  const modeSelect = document.getElementById("calc-mode-select");
  const incotermSelect = document.getElementById("calc-incoterm-select");

  if (!calcItemsList) return;

  // Set nilai select input
  if (destSelect) destSelect.value = calculatorState.destinationId;
  if (modeSelect) modeSelect.value = calculatorState.shippingMode;
  if (incotermSelect) incotermSelect.value = calculatorState.incoterm;

  const result = computeCalculation();

  // Render Daftar Barang
  if (calculatorState.items.length === 0) {
    calcItemsList.innerHTML = `
      <div class="text-center py-10 px-4 border-2 border-dashed border-amber-200 rounded-xl bg-amber-50/50">
        <i data-lucide="package-open" class="w-12 h-12 mx-auto text-amber-500/70 mb-3"></i>
        <h4 class="font-bold text-gray-700">Simulasi Masih Kosong</h4>
        <p class="text-xs text-gray-500 max-w-sm mx-auto mt-1 mb-4">Pilih produk dari katalog di atas dan klik tombol "Tambah ke Simulasi" untuk menghitung harga & ongkir ekspor.</p>
        <button onclick="applyQuickPreset('sample')" class="px-3 py-1.5 bg-amber-700 hover:bg-amber-800 text-white rounded-lg text-xs font-semibold shadow-sm transition">
          Muat Contoh Simulasi Cepat
        </button>
      </div>
    `;
  } else {
    calcItemsList.innerHTML = calculatorState.items.map(item => {
      const itemSubtotalIdr = item.unitPriceIdr * item.qty;
      const itemSubtotalUsd = item.unitPriceUsd * item.qty;
      const priceFormatted = result.isUsd ? `$${itemSubtotalUsd.toLocaleString()}` : `Rp ${itemSubtotalIdr.toLocaleString("id-ID")}`;
      const unitPriceFormatted = result.isUsd ? `$${item.unitPriceUsd}` : `Rp ${item.unitPriceIdr.toLocaleString("id-ID")}`;

      return `
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 bg-white rounded-xl border border-amber-100 shadow-sm hover:border-amber-300 transition">
          <div class="flex items-center gap-3">
            <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-lg border border-amber-100 shrink-0">
            <div>
              <div class="flex items-center gap-2">
                <h5 class="font-bold text-sm text-gray-900 leading-tight">${item.name}</h5>
                ${item.isPreorder ? '<span class="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-800 font-semibold rounded">PO</span>' : '<span class="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 font-semibold rounded">Ready</span>'}
              </div>
              <p class="text-xs text-gray-500 mt-0.5">
                <span class="font-medium text-amber-900">${item.color}</span> • <span>${item.weave}</span>
              </p>
              <p class="text-[11px] text-gray-400">
                ${unitPriceFormatted}/unit • Vol: ${(item.cbmPerUnit * item.qty).toFixed(2)} CBM • Berat: ${(item.weightPerUnit * item.qty).toFixed(1)} kg
              </p>
            </div>
          </div>

          <div class="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <!-- Quantity Control -->
            <div class="flex items-center border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
              <button onclick="updateCalculatorItemQty('${item.id}', ${item.qty - 1})" class="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-amber-100 hover:text-amber-800 transition font-bold text-sm">-</button>
              <input type="number" min="1" max="999" value="${item.qty}" onchange="updateCalculatorItemQty('${item.id}', this.value)" class="w-12 text-center text-xs font-bold bg-transparent focus:outline-none text-gray-800">
              <button onclick="updateCalculatorItemQty('${item.id}', ${item.qty + 1})" class="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-amber-100 hover:text-amber-800 transition font-bold text-sm">+</button>
            </div>

            <!-- Subtotal -->
            <div class="text-right min-w-[90px]">
              <span class="block font-bold text-sm text-amber-900">${priceFormatted}</span>
            </div>

            <!-- Delete -->
            <button onclick="removeCalculatorItem('${item.id}')" title="Hapus item" class="p-1.5 text-gray-400 hover:text-red-500 transition rounded-lg hover:bg-red-50">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // Update Summary Box (Fitur 4: Total Harga)
  const currencySymbol = result.isUsd ? "$" : "Rp ";
  const formatVal = (valIdr, valUsd) => {
    return result.isUsd ? `$${valUsd.toLocaleString()}` : `Rp ${valIdr.toLocaleString("id-ID")}`;
  };

  document.getElementById("calc-summary-units").textContent = `${result.totalUnits} Unit`;
  document.getElementById("calc-summary-cbm").textContent = `${result.totalCbm.toFixed(2)} CBM`;
  document.getElementById("calc-summary-weight").textContent = `${result.totalWeight.toFixed(1)} Kg`;

  document.getElementById("calc-gross-total").textContent = formatVal(result.grossProductTotalIdr, result.grossProductTotalUsd);
  document.getElementById("calc-discount-tier").textContent = result.discountTierName;
  document.getElementById("calc-discount-val").textContent = `-${formatVal(result.discountAmountIdr, result.discountAmountUsd)}`;
  document.getElementById("calc-net-products").textContent = formatVal(result.netProductTotalIdr, result.netProductTotalUsd);

  // Update Shipping Section (Fitur 5: Biaya Pengiriman)
  document.getElementById("calc-shipping-detail").textContent = result.shippingDetailNote;
  document.getElementById("calc-shipping-cost").textContent = formatVal(result.shippingCostIdr, result.shippingCostUsd);
  document.getElementById("calc-fumigation-cost").textContent = result.fumigationFeeUsd === 0 ? "GRATIS (Kontainer Tier)" : formatVal(result.fumigationFeeIdr, result.fumigationFeeUsd);
  document.getElementById("calc-handling-cost").textContent = result.exportHandlingUsd === 0 ? "Rp 0" : formatVal(result.exportHandlingIdr, result.exportHandlingUsd);

  const freightTotalEl = document.getElementById("calc-freight-total");
  if (freightTotalEl) {
    freightTotalEl.textContent = formatVal(result.totalFreightAndDocsIdr, result.totalFreightAndDocsUsd);
  }

  // Grand Total
  document.getElementById("calc-grand-total").textContent = formatVal(result.grandTotalIdr, result.grandTotalUsd);
  document.getElementById("calc-incoterm-badge").textContent = result.isCif ? "CIF (Cost, Insurance & Freight Included)" : "FOB (Tanjung Priok Port Loading Only)";

  // Update ETA (Fitur 6: Estimasi Waktu Sampai)
  document.getElementById("calc-eta-leadtime").textContent = `${result.prepDays} Hari (${result.hasPreorder ? "Produksi Pre-Order" : "Ready Stock QC & Packing"})`;
  document.getElementById("calc-eta-transit").textContent = `${result.transitDaysMin} - ${result.transitDaysMax} Hari (${result.effectiveShippingMode.toUpperCase()} Transit)`;
  document.getElementById("calc-eta-total-days").textContent = `${result.totalDaysMin} - ${result.totalDaysMax} Hari Kalender`;
  document.getElementById("calc-eta-range").textContent = result.formattedEtaRange;
  document.getElementById("calc-eta-port-dest").textContent = result.destination.portName;

  // Refresh icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Handler Perubahan Dropdown Destinasi & Moda Pengiriman
function setupCalculatorEventListeners() {
  const destSelect = document.getElementById("calc-destination-select");
  const modeSelect = document.getElementById("calc-mode-select");
  const incotermSelect = document.getElementById("calc-incoterm-select");

  if (destSelect) {
    // Populate options jika belum
    if (destSelect.options.length <= 1) {
      destSelect.innerHTML = shippingDestinations.map(d => `
        <option value="${d.id}">${d.name} (${d.type})</option>
      `).join("");
      destSelect.value = calculatorState.destinationId;
    }

    destSelect.addEventListener("change", (e) => {
      calculatorState.destinationId = e.target.value;
      renderCalculator();
    });
  }

  if (modeSelect) {
    modeSelect.addEventListener("change", (e) => {
      calculatorState.shippingMode = e.target.value;
      renderCalculator();
    });
  }

  if (incotermSelect) {
    incotermSelect.addEventListener("change", (e) => {
      calculatorState.incoterm = e.target.value;
      renderCalculator();
    });
  }
}

// Buka Modal Cetak Proforma Invoice / Export Quotation
function openProformaInvoiceModal() {
  const result = computeCalculation();
  const modal = document.getElementById("invoice-modal");
  const invoiceContent = document.getElementById("invoice-printable-content");

  if (!modal || !invoiceContent) return;

  const invoiceNo = `CRH-QUO-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}-${Math.floor(1000 + Math.random() * 9000)}`;
  const dateFormatted = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const formatVal = (valIdr, valUsd) => result.isUsd ? `$${valUsd.toLocaleString()}` : `Rp ${valIdr.toLocaleString("id-ID")}`;

  invoiceContent.innerHTML = `
    <!-- Header Invoice -->
    <div class="flex justify-between items-start border-b-2 border-amber-800 pb-6 mb-6">
      <div>
        <span class="text-xs font-bold tracking-widest text-amber-700 uppercase">OFFICIAL EXPORT PROFORMA INVOICE</span>
        <h2 class="text-2xl font-black font-serif-luxury text-amber-950">${businessProfile.name}</h2>
        <p class="text-xs text-gray-600 mt-1">${businessProfile.legalName}</p>
        <p class="text-xs text-gray-500 max-w-sm mt-0.5">${businessProfile.address}</p>
        <p class="text-xs text-gray-500 mt-1">Telp / WA: ${businessProfile.phone} | Email: ${businessProfile.email}</p>
      </div>
      <div class="text-right">
        <div class="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded font-mono font-bold text-sm mb-2">
          ${invoiceNo}
        </div>
        <p class="text-xs text-gray-500">Tanggal: <strong>${dateFormatted}</strong></p>
        <p class="text-xs text-gray-500">Incoterms: <strong>${calculatorState.incoterm} (${calculatorState.incoterm === "CIF" ? "Cost, Freight & Fumigation" : "Port Tanjung Priok"})</strong></p>
        <p class="text-xs text-gray-500">Port of Loading: <strong>Tanjung Priok, Jakarta (IDJKT)</strong></p>
        <p class="text-xs text-amber-900 font-bold">Port of Discharge: <strong>${result.destination.portName}</strong></p>
      </div>
    </div>

    <!-- Legal Certifications Bar -->
    <div class="grid grid-cols-4 gap-2 py-2 px-3 bg-amber-50/70 rounded-lg border border-amber-200 text-center text-[10px] text-amber-950 font-semibold mb-6">
      <div>✓ SVLK V-Legal Certified</div>
      <div>✓ AFAS / AQIS Fumigated</div>
      <div>✓ Phytosanitary Cleared</div>
      <div>✓ ISPM 15 Packing</div>
    </div>

    <!-- Items Table -->
    <div class="overflow-x-auto mb-6">
      <table class="w-full text-left text-xs border border-gray-200">
        <thead class="bg-amber-900 text-white uppercase text-[10px] tracking-wider">
          <tr>
            <th class="p-2.5">No</th>
            <th class="p-2.5">Deskripsi Produk & Varian</th>
            <th class="p-2.5 text-center">Status</th>
            <th class="p-2.5 text-center">Qty</th>
            <th class="p-2.5 text-right">Harga Satuan</th>
            <th class="p-2.5 text-right">Vol (CBM)</th>
            <th class="p-2.5 text-right">Subtotal (${calculatorState.currency})</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          ${calculatorState.items.map((item, idx) => `
            <tr class="hover:bg-amber-50/40">
              <td class="p-2.5 font-mono text-gray-500">${idx + 1}</td>
              <td class="p-2.5">
                <div class="font-bold text-gray-800">${item.name}</div>
                <div class="text-[11px] text-gray-500">${item.color} | ${item.weave} | ${item.cushion}</div>
              </td>
              <td class="p-2.5 text-center">
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${item.isPreorder ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'}">
                  ${item.isPreorder ? 'PO (14H)' : 'Ready'}
                </span>
              </td>
              <td class="p-2.5 text-center font-bold">${item.qty}</td>
              <td class="p-2.5 text-right font-mono">${formatVal(item.unitPriceIdr, item.unitPriceUsd)}</td>
              <td class="p-2.5 text-right font-mono">${(item.cbmPerUnit * item.qty).toFixed(2)}</td>
              <td class="p-2.5 text-right font-mono font-bold text-gray-900">${formatVal(item.unitPriceIdr * item.qty, item.unitPriceUsd * item.qty)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Calculation Breakdown -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-4 mb-6">
      <!-- Info Pengiriman & ETA -->
      <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs">
        <h4 class="font-bold text-amber-900 mb-2 flex items-center gap-1.5">
          <i data-lucide="ship" class="w-4 h-4 text-amber-700"></i> Rincian Pengiriman & Logistik Ekspor
        </h4>
        <ul class="space-y-1.5 text-gray-600">
          <li>• Destinasi: <strong>${result.destination.name}</strong></li>
          <li>• Moda Kargo: <strong>${result.effectiveShippingMode.toUpperCase()} (${result.shippingDetailNote})</strong></li>
          <li>• Total Kubikasi Kargo: <strong>${result.totalCbm.toFixed(2)} CBM</strong></li>
          <li>• Total Estimasi Berat: <strong>${result.totalWeight.toFixed(1)} Kg</strong></li>
          <li>• Perkiraan Waktu Tiba (ETA): <strong class="text-emerald-700">${result.formattedEtaRange}</strong> (${result.totalDaysMin}-${result.totalDaysMax} Hari)</li>
        </ul>
      </div>

      <!-- Financial Totals -->
      <div class="space-y-2 text-xs">
        <div class="flex justify-between text-gray-600">
          <span>Subtotal Nilai Produk (${result.totalUnits} Unit):</span>
          <span class="font-mono font-semibold">${formatVal(result.grossProductTotalIdr, result.grossProductTotalUsd)}</span>
        </div>
        <div class="flex justify-between text-emerald-700">
          <span>${result.discountTierName}:</span>
          <span class="font-mono font-semibold">-${formatVal(result.discountAmountIdr, result.discountAmountUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-800 font-semibold border-t pt-2">
          <span>Total Produk Bersih:</span>
          <span class="font-mono">${formatVal(result.netProductTotalIdr, result.netProductTotalUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>Ocean/Air Freight:</span>
          <span class="font-mono">${formatVal(result.shippingCostIdr, result.shippingCostUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>Sertifikasi Fumigasi AFAS & Karantina:</span>
          <span class="font-mono">${result.fumigationFeeUsd === 0 ? "GRATIS" : formatVal(result.fumigationFeeIdr, result.fumigationFeeUsd)}</span>
        </div>
        <div class="flex justify-between text-gray-600">
          <span>Export Declaration & V-Legal SVLK:</span>
          <span class="font-mono">${formatVal(result.exportHandlingIdr, result.exportHandlingUsd)}</span>
        </div>
        <div class="flex justify-between text-base font-black text-amber-950 bg-amber-100/70 p-3 rounded-lg border border-amber-300 mt-2">
          <span>GRAND TOTAL (${calculatorState.incoterm}):</span>
          <span class="font-mono">${formatVal(result.grandTotalIdr, result.grandTotalUsd)}</span>
        </div>
      </div>
    </div>

    <!-- Footer Signature & Notes -->
    <div class="border-t border-gray-200 pt-4 text-[11px] text-gray-500 flex justify-between items-end">
      <div>
        <p class="font-bold text-gray-700 mb-1">Ketentuan Transaksi Ekspor:</p>
        <p>1. Penawaran harga ini berlaku selama 30 hari kalender sejak tanggal diterbitkan.</p>
        <p>2. Pembayaran: T/T 40% Deposit, 60% Against Bill of Lading (B/L) copy atau L/C at sight.</p>
        <p>3. Packing: Standar 5-Ply Master Carton Box + Foam wrapping + Desiccant Moisture Absorber.</p>
      </div>
      <div class="text-center min-w-[180px]">
        <p class="text-xs text-gray-500 mb-10">Cirebon, ${dateFormatted}<br>Authorized Signature,</p>
        <p class="font-bold text-amber-950 underline">${businessProfile.founder}</p>
        <p class="text-[10px] text-gray-500">Managing Director & Founder</p>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeProformaInvoiceModal() {
  const modal = document.getElementById("invoice-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Kirim Order Langsung ke WhatsApp Pak Ridwan
function sendOrderToWhatsApp() {
  const result = computeCalculation();
  if (calculatorState.items.length === 0) {
    showToast("Silakan tambahkan minimal 1 produk sebelum menghubungi WhatsApp.", "warning");
    return;
  }

  const formatVal = (valIdr, valUsd) => result.isUsd ? `$${valUsd.toLocaleString()}` : `Rp ${valIdr.toLocaleString("id-ID")}`;

  let itemsListText = "";
  calculatorState.items.forEach((item, idx) => {
    itemsListText += `${idx + 1}. *${item.name}* (${item.qty} unit)\n   Varian: ${item.color}, ${item.weave}, ${item.cushion}\n   Subtotal: ${formatVal(item.unitPriceIdr * item.qty, item.unitPriceUsd * item.qty)}\n`;
  });

  const message = `Halo Pak Ridwan (${businessProfile.name}),\n\nSaya tertarik dengan produk rotan ekspor Anda setelah melihat simulasi di website. Berikut detail rencana pesanan saya:\n\n*DAFTAR PRODUK & VARIAN:*\n${itemsListText}\n*RINCIAN PENGIRIMAN & HARGA:*\n• Total Unit: ${result.totalUnits} Unit (${result.totalCbm.toFixed(2)} CBM)\n• Destinasi: ${result.destination.name}\n• Moda Kargo: ${result.effectiveShippingMode.toUpperCase()}\n• Diskon: ${result.discountTierName}\n• Biaya Pengiriman & Fumigasi: ${formatVal(result.totalFreightAndDocsIdr, result.totalFreightAndDocsUsd)}\n• *ESTIMASI GRAND TOTAL (${calculatorState.incoterm}):* ${formatVal(result.grandTotalIdr, result.grandTotalUsd)}\n• *Estimasi Barang Sampai (ETA):* ${result.formattedEtaRange} (${result.totalDaysMin}-${result.totalDaysMax} hari)\n\nMohon konfirmasi ketersediaan stok, jadwal muat kontainer terdekat, serta proforma invoice resmi. Terima kasih banyak!\n\n_Dikirim otomatis via Website Kalkulator Ekspor Cirebon Rattan Heritage_`;

  const encodedUrl = `https://wa.me/${businessProfile.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(encodedUrl, "_blank");
}
