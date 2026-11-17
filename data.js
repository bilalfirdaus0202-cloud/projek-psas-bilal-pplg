/**
 * Data Store - Cirebon Rattan Heritage (CV. Ridwan Rattan Export)
 * Data Produk, Varian, Ketersediaan Stok, Tarif Pengiriman, & FAQ Ekspor
 */

const businessProfile = {
  name: "Cirebon Rattan Heritage",
  legalName: "CV. Ridwan Rattan Nusantara",
  founder: "Pak H. Ridwan Mansyur, S.T.",
  tagline: "Fine Handcrafted Indonesian Rattan Furniture — Spesialis Ekspor Cirebon ke Malaysia & Pasar Global",
  address: "Jl. Raya Tegalwangi No. 88, Sentra Industri Rotan Weru, Kabupaten Cirebon, Jawa Barat 45154, Indonesia",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "export@cirebonrattan.id",
  established: 2008,
  monthlyCapacity: "15 - 20 Kontainer (40ft High Cube)",
  factoryArea: "6.500 m² (Workshop, Kiln Dry, Finishing & Packing Center)",
  totalArtisans: "120+ Pengrajin Rotan Lokal Cirebon",
  exportDestinations: "Malaysia (Port Klang, Penang, Johor) & 42+ Negara Global",
  certifications: [
    {
      code: "ATIGA Form D",
      name: "ASEAN Trade in Goods Agreement",
      desc: "Fasilitas Surat Keterangan Asal resmi: Bea Masuk 0% (Zero Import Duty) masuk ke Malaysia."
    },
    {
      code: "SVLK / V-Legal",
      name: "Sistem Verifikasi Legalitas Kelestarian",
      desc: "Menjamin 100% bahan baku rotan berasal dari sumber hutan lestari dan legal di Indonesia."
    },
    {
      code: "MAQIS & ISPM 15",
      name: "Karantina Fumigasi Malaysia & Global",
      desc: "Sertifikat fumigasi standar MAQIS Malaysia bebas hama kutu bubuk kayu untuk kelancaran bea cukai."
    },
    {
      code: "Phytosanitary",
      name: "Badan Karantina Pertanian RI",
      desc: "Sertifikat resmi kesehatan tumbuhan bebas penyakit biologis untuk izin impor Malaysia & dunia."
    }
  ]
};

// Nilai tukar simulasi: 1 USD = Rp 15.500
const USD_RATE = 15500;

const productsData = [
  {
    id: "crh-001",
    name: "The Tegalwangi Lounge Armchair",
    category: "Living",
    status: "ready", // ready | preorder
    stock: 142,
    leadTimeDays: 2, // hari persiapan packing jika ready
    basePriceIdr: 1450000,
    basePriceUsd: 95,
    cbm: 0.45,
    weightKg: 8.5,
    rating: 4.9,
    reviewsCount: 38,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580481077195-c3f99dd74799?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Kursi santai ikonik berbahan rotan alami batang utuh Cirebon dengan anyaman kulit rotan halus (peel weave).",
    description: "Kursi santai premium bergaya Bohemian & Scandinavian. Dirancang dengan sudut sandaran ergonomis 105 derajat dan anyaman tangan pengrajin Desa Tegalwangi. Cocok untuk ruang santai, villa tropis, cafe, dan resort bintang lima.",
    dimensions: "W 72 cm x D 78 cm x H 84 cm (Seat H: 42 cm)",
    material: "Natural Manau Rattan Poles + Grade-A Peel Weave",
    variants: {
      colors: [
        { name: "Natural Honey Clear Coat", priceDiff: 0, preview: "#d97706" },
        { name: "Bleached Nordic Wash", priceDiff: 50000, preview: "#fef3c7" },
        { name: "Dark Smoked Walnut", priceDiff: 75000, preview: "#543821" },
        { name: "Matte Charcoal Black", priceDiff: 75000, preview: "#262626" }
      ],
      weaves: [
        { name: "Standard Classic Peel", priceDiff: 0 },
        { name: "Double Weave Heavy Duty", priceDiff: 85000 },
        { name: "Kubu Grey Weathered", priceDiff: 60000 }
      ],
      cushions: [
        { name: "Tanpa Bantalan (Bawa Sendiri)", priceDiff: 0 },
        { name: "Canvas Off-White (Foam D-28)", priceDiff: 180000 },
        { name: "Sunbrella Outdoor Waterproof", priceDiff: 320000 }
      ]
    },
    features: [
      "Rotan manau solid anti bubuk (MC < 12%)",
      "Kapasitas beban uji hingga 150 kg",
      "Finishing non-toxic water-based eco lacquer",
      "Dilengkapi bantalan kaki anti-gores lantai"
    ]
  },
  {
    id: "crh-002",
    name: "Kuningan Dining Set (1 Table + 4 Chairs)",
    category: "Dining",
    status: "ready",
    stock: 35,
    leadTimeDays: 3,
    basePriceIdr: 5800000,
    basePriceUsd: 380,
    cbm: 1.35,
    weightKg: 34.0,
    rating: 5.0,
    reviewsCount: 24,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Set meja makan bundar diameter 110cm dengan top kaca tempered 8mm dan 4 kursi anyaman rotan ergonomis.",
    description: "Set meja makan mewah untuk interior modern organic. Menggabungkan rangka rotan batang lengkung solid dengan kaca tempered bening tebal 8mm serta 4 kursi makan anyaman kombinasi lidi dan kulit rotan.",
    dimensions: "Meja: Dia 110 x H 76 cm | Kursi: W 54 x D 56 x H 88 cm",
    material: "Selected Natural Rattan + 8mm Tempered Glass",
    variants: {
      colors: [
        { name: "Natural Warm Honey", priceDiff: 0, preview: "#b45309" },
        { name: "Antique Walnut Glaze", priceDiff: 150000, preview: "#451a03" },
        { name: "Organic Raw Matte", priceDiff: 0, preview: "#e2b87f" }
      ],
      weaves: [
        { name: "Open Webbing (Anyaman Mata Nenek)", priceDiff: 0 },
        { name: "Tight Basket Weave", priceDiff: 120000 }
      ],
      cushions: [
        { name: "4x Cushion Linen Cream", priceDiff: 350000 },
        { name: "4x Cushion Velvet Olive", priceDiff: 500000 },
        { name: "Tanpa Bantalan", priceDiff: 0 }
      ]
    },
    features: [
      "Top kaca tempered 8mm tahan panas dan benturan",
      "Rangka kaki laba-laba rotan ekstra kokoh",
      "Ergonomis untuk jam makan keluarga atau restoran",
      "Kemasan knock-down terlindung kardus 5-ply export"
    ]
  },
  {
    id: "crh-003",
    name: "Plumbon Hanging Egg Swing Chair",
    category: "Living",
    status: "ready",
    stock: 60,
    leadTimeDays: 2,
    basePriceIdr: 2250000,
    basePriceUsd: 148,
    cbm: 0.95,
    weightKg: 19.5,
    rating: 4.8,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Kursi gantung ayunan bentuk telur dengan bantalan ekstra empuk, rantai baja & tiang penyangga.",
    description: "Ayunan santai estetik yang sangat laris untuk pasar ekspor Eropa dan Amerika. Memberikan sensasi melayang rileks. Cocok untuk teras semi-outdoor, balkon, sudut baca kamar, maupun area kolam renang villa.",
    dimensions: "Keranjang: W 95 x D 80 x H 125 cm | Tiang Besi: Dia 105 x H 195 cm",
    material: "Alumunium Frame + High-Density All-Weather Synthetic Weave / Natural",
    variants: {
      colors: [
        { name: "Natural Golden Rattan", priceDiff: 0, preview: "#d97706" },
        { name: "Snow White Pure", priceDiff: 60000, preview: "#f8fafc" },
        { name: "Dark Espresso Coffee", priceDiff: 60000, preview: "#291b10" }
      ],
      weaves: [
        { name: "Natural Rattan (Indoor Use)", priceDiff: 0 },
        { name: "Synthetic PE UV-Protected (Outdoor)", priceDiff: 180000 }
      ],
      cushions: [
        { name: "Include Thick Cushion Off-White", priceDiff: 0 },
        { name: "Include Cushion Sage Green", priceDiff: 50000 },
        { name: "Include Cushion Terracotta Orange", priceDiff: 50000 }
      ]
    },
    features: [
      "Sudah termasuk rantai baja gantung & per spring suspension",
      "Mampu menahan beban hingga 180 kg",
      "Kain bantal washable (bisa dilepas cuci)",
      "Tahan cuaca untuk varian outdoor UV-protected"
    ]
  },
  {
    id: "crh-004",
    name: "Sunyaragi Woven Pendant Lamp (Set/Pcs)",
    category: "Lighting",
    status: "ready",
    stock: 320,
    leadTimeDays: 1,
    basePriceIdr: 450000,
    basePriceUsd: 30,
    cbm: 0.15,
    weightKg: 2.2,
    rating: 4.9,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Kap lampu gantung artistik anyaman serat rotan pitrit Cirebon dengan bayangan cahaya eksotis.",
    description: "Kap lampu gantung anyaman tangan yang memancarkan pendaran cahaya hangat dan pola bayangan dramatis. Favorit arsitek interior untuk cafe, restoran bernuansa tropis, dan ruang makan bergaya Japandi.",
    dimensions: "Diameter 55 cm x Tinggi 50 cm",
    material: "Handwoven Natural Rattan Pitrit & Metal Inner Ring",
    variants: {
      colors: [
        { name: "Raw Natural Blonde", priceDiff: 0, preview: "#fed7aa" },
        { name: "Smoked Bamboo Brown", priceDiff: 25000, preview: "#78350f" },
        { name: "Modern Matte Black", priceDiff: 35000, preview: "#1f2937" }
      ],
      weaves: [
        { name: "Bell Shape (Lonceng)", priceDiff: 0 },
        { name: "Dome Shape (Kubah Jumbo Dia 70cm)", priceDiff: 120000 },
        { name: "Cylinder Tube (Silinder)", priceDiff: 15000 }
      ],
      cushions: [
        { name: "Kap Saja (Fitting E27 Standard)", priceDiff: 0 },
        { name: "Include Kabel Tekstil 1.5m + Fitting Kayu", priceDiff: 75000 }
      ]
    },
    features: [
      "Anyaman padat presisi pengrajin senior Cirebon",
      "Kompatibel bohlam LED fitting universal E27 / E26",
      "Ringan dan aman digantung di berbagai jenis plafon",
      "Kemasan nesting compact meminimalkan kubikasi kargo"
    ]
  },
  {
    id: "crh-005",
    name: "Ciremai Modular Daybed & Coffee Table",
    category: "Outdoor",
    status: "preorder",
    stock: 0,
    leadTimeDays: 18, // Pre-order butuh 18 hari
    basePriceIdr: 7500000,
    basePriceUsd: 490,
    cbm: 1.80,
    weightKg: 42.0,
    rating: 5.0,
    reviewsCount: 16,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Sofa santai modular ukuran besar cocok untuk resort, villa tropis, dan teras tepi kolam renang.",
    description: "Daybed santai berkapasitas 3 orang dengan konfigurasi modular. Dibangun menggunakan rangka alumunium tebal anti-karat dan rotan sintetis Rehau Germany Grade tahan sinar ultraviolet dan cipratan air klorin kolam renang.",
    dimensions: "W 210 cm x D 95 cm x H 72 cm + Table Dia 65 cm",
    material: "Alumunium Frame + UV Resistant Polyethylene Weave + QuickDry Foam",
    variants: {
      colors: [
        { name: "Natural Honey Weatherproof", priceDiff: 0, preview: "#d97706" },
        { name: "Driftwood Ash Grey", priceDiff: 150000, preview: "#9ca3af" },
        { name: "Charcoal Slate", priceDiff: 150000, preview: "#374151" }
      ],
      weaves: [
        { name: "Half-Round Ribbed Weave (Heavy Duty)", priceDiff: 0 },
        { name: "Open V-Pattern Weave", priceDiff: 100000 }
      ],
      cushions: [
        { name: "Full QuickDry Foam + Sunbrella Taupe", priceDiff: 650000 },
        { name: "Full QuickDry Foam + Sunbrella Navy", priceDiff: 650000 },
        { name: "Standard Water-repellent Canvas", priceDiff: 0 }
      ]
    },
    features: [
      "Sistem modular dapat diatur lurus atau sudut L-Shape",
      "Busa anti-jamur QuickDry Foam (kering dalam 45 menit)",
      "Garansi ketahanan warna anyaman UV hingga 3 tahun",
      "Dilengkapi meja kopi bundar top rotan kaca 6mm"
    ]
  },
  {
    id: "crh-006",
    name: "Weru Boho Nesting Baskets (Set of 3)",
    category: "Decor",
    status: "ready",
    stock: 250,
    leadTimeDays: 1,
    basePriceIdr: 380000,
    basePriceUsd: 25,
    cbm: 0.12,
    weightKg: 3.0,
    rating: 4.8,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Set keranjang serbaguna 3 ukuran dengan pegangan rotan kokoh dan aksesoris rumbai katun etnik.",
    description: "Keranjang anyaman estetik serbaguna untuk organizer laundry, selimut, mainan anak, atau cover pot tanaman hias (planter). Desain nesting (masuk satu sama lain) sehingga hemat biaya pengiriman kontainer.",
    dimensions: "S (Dia 28 x H 30) | M (Dia 36 x H 35) | L (Dia 44 x H 40 cm)",
    material: "Natural Water Hyacinth + Rattan Core Structure",
    variants: {
      colors: [
        { name: "Natural Honey & White Stripe", priceDiff: 0, preview: "#fde68a" },
        { name: "Monochrome Black Bottom Dip", priceDiff: 20000, preview: "#334155" },
        { name: "Terracotta Earth Accent", priceDiff: 25000, preview: "#c2410c" }
      ],
      weaves: [
        { name: "Zig-Zag Diagonal Weave", priceDiff: 0 },
        { name: "Braided Rope Style", priceDiff: 30000 }
      ],
      cushions: [
        { name: "Open Top Model with Handles", priceDiff: 0 },
        { name: "With Fitted Woven Lid (Tutup)", priceDiff: 60000 }
      ]
    },
    features: [
      "Set 3 pcs saling tumpuk (zero wasted space di kontainer)",
      "Pegangan rotan solid dijahit dengan tali nilon kuat",
      "Kapasitas beban angkut hingga 15 kg per keranjang",
      "Diberi perlakuan anti-jamur oven dry 70°C"
    ]
  },
  {
    id: "crh-007",
    name: "Batik Trusmi Rattan Barstool High",
    category: "Dining",
    status: "ready",
    stock: 85,
    leadTimeDays: 2,
    basePriceIdr: 890000,
    basePriceUsd: 58,
    cbm: 0.24,
    weightKg: 5.5,
    rating: 4.9,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Kursi bar tinggi dengan sandaran anyaman geometris terinspirasi motif mega mendung Cirebon.",
    description: "Kursi bar berprofil ramping dan kokoh untuk area kitchen island, cafe, atau beach bar. Desain sandaran anyaman rotan memberikan sirkulasi udara sejuk saat diduduki dalam waktu lama.",
    dimensions: "W 48 cm x D 50 cm x H 98 cm (Seat Height: 75 cm)",
    material: "Bent Solid Rattan Pole + Handwoven Rattan Bark",
    variants: {
      colors: [
        { name: "Natural Honey Finish", priceDiff: 0, preview: "#d97706" },
        { name: "Dark Walnut Glaze", priceDiff: 35000, preview: "#5b21b6" },
        { name: "Vintage White Wash", priceDiff: 40000, preview: "#f1f5f9" }
      ],
      weaves: [
        { name: "Diamond Geometric Weave", priceDiff: 0 },
        { name: "Fine Square Cannage Weave", priceDiff: 50000 }
      ],
      cushions: [
        { name: "Dudukan Anyam Polos (Tanpa Bantal)", priceDiff: 0 },
        { name: "Bantalan Bulat Leather Sintetis", priceDiff: 95000 },
        { name: "Bantalan Bulat Linen Off-White", priceDiff: 75000 }
      ]
    },
    features: [
      "Pijakan kaki kokoh diperkuat ring rotan dobel",
      "Tinggi 75cm pas untuk meja counter setinggi 100-110 cm",
      "Dapat ditumpuk (stackable) hingga 4 kursi untuk efisiensi",
      "Kaki dilengkapi pelindung nylon glides anti-licin"
    ]
  },
  {
    id: "crh-008",
    name: "Keraton Heritage Woven Headboard King",
    category: "Living",
    status: "preorder",
    stock: 0,
    leadTimeDays: 14, // PO 14 hari
    basePriceIdr: 3200000,
    basePriceUsd: 210,
    cbm: 0.42,
    weightKg: 14.0,
    rating: 5.0,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
    ],
    shortDesc: "Sandaran kepala ranjang anyaman bunga klasik Cirebon berdimensi megah untuk kamar tidur mewah.",
    description: "Headboard ranjang estetik yang menjadi focal point kamar tidur utama villa dan hotel butik. Detail lengkungan motif flora khas keraton Cirebon dikerjakan dengan tingkat presisi tinggi oleh pengrajin maestro.",
    dimensions: "W 180 cm x D 6 cm x H 140 cm (King Size)",
    material: "Full Natural Rattan Mandola Poles & Slimit Weaving",
    variants: {
      colors: [
        { name: "Natural Honey Satin", priceDiff: 0, preview: "#d97706" },
        { name: "Antique Shabby White", priceDiff: 100000, preview: "#f8fafc" },
        { name: "Smoked Caramel Brown", priceDiff: 100000, preview: "#78350f" }
      ],
      weaves: [
        { name: "Mandala Sunburst Flower Pattern", priceDiff: 0 },
        { name: "Royal Crown Arch Pattern", priceDiff: 150000 }
      ],
      cushions: [
        { name: "Ukuran King (Lebar 180cm)", priceDiff: 0 },
        { name: "Ukuran Queen (Lebar 160cm)", priceDiff: -250000 },
        { name: "Ukuran Super King (Lebar 200cm)", priceDiff: 350000 }
      ]
    },
    features: [
      "Struktur sangat kokoh namun berbobot ringan untuk dipasang",
      "Dilengkapi bracket dinding pengait presisi di bagian belakang",
      "Finishing halus tanpa serabut tajam yang merusak sprei",
      "Pengerjaan custom preorder dengan garansi kerapian 100%"
    ]
  }
];

// Data Destinasi Pengiriman (Pelabuhan Ekspor & Domestik - Fokus Utama: Malaysia)
const shippingDestinations = [
  {
    id: "dest-malaysia-klang",
    name: "🇲🇾 Malaysia - Port Klang (Kuala Lumpur & Selangor)",
    country: "Malaysia",
    portName: "Port Klang (Northport / Westport)",
    type: "Ekspor Utama - Malaysia",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 5,
    rateLclPerCbm: 32, // USD per CBM (sekitar RM 145 / CBM)
    rateFcl20ft: 580,  // USD flat
    rateFcl40ft: 980,  // USD flat
    rateAirPerKg: 3.2,
    fumigationRequired: true,
    fumigationFee: 55, // USD flat (Standar MAQIS / ISPM 15)
    notes: "Rute express Selat Malaka dari Pelabuhan Tanjung Priok ke Port Klang. Dilengkapi ATIGA Form D (Bea Masuk 0% ke Malaysia)."
  },
  {
    id: "dest-malaysia-penang",
    name: "🇲🇾 Malaysia - Penang Port (Wilayah Utara & Langkawi)",
    country: "Malaysia",
    portName: "Penang Port (NBCT Container Terminal)",
    type: "Ekspor Utama - Malaysia",
    currency: "USD",
    transitMinDays: 4,
    transitMaxDays: 6,
    rateLclPerCbm: 35,
    rateFcl20ft: 630,
    rateFcl40ft: 1050,
    rateAirPerKg: 3.5,
    fumigationRequired: true,
    fumigationFee: 55,
    notes: "Pintu masuk utama untuk proyek resort, villa tropis di Penang, Langkawi, dan Kedah."
  },
  {
    id: "dest-malaysia-johor",
    name: "🇲🇾 Malaysia - Johor Port / PTP (Wilayah Selatan)",
    country: "Malaysia",
    portName: "Port of Tanjung Pelepas (PTP) / Johor Port",
    type: "Ekspor Utama - Malaysia",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 5,
    rateLclPerCbm: 34,
    rateFcl20ft: 600,
    rateFcl40ft: 1020,
    rateAirPerKg: 3.4,
    fumigationRequired: true,
    fumigationFee: 55,
    notes: "Hub logistik selatan Malaysia dekat Johor Bahru. Sangat efisien untuk pengadaan interior resort & residential."
  },
  {
    id: "dest-singapore",
    name: "🇸🇬 Singapore (Port of Singapore)",
    country: "Singapore",
    portName: "PSA Singapore Port",
    type: "Export - ASEAN",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 6,
    rateLclPerCbm: 38,
    rateFcl20ft: 680,
    rateFcl40ft: 1150,
    rateAirPerKg: 3.8,
    fumigationRequired: true,
    fumigationFee: 65,
    notes: "Rute pelayaran express mingguan via feeder Jakarta Tanjung Priok ke PSA Singapore."
  },
  {
    id: "dest-australia-syd",
    name: "🇦🇺 Australia (Sydney / Melbourne / Brisbane)",
    country: "Australia",
    portName: "Port Botany (Sydney) / Port of Melbourne",
    type: "Export - Oceania",
    currency: "USD",
    transitMinDays: 12,
    transitMaxDays: 18,
    rateLclPerCbm: 95,
    rateFcl20ft: 1480,
    rateFcl40ft: 2450,
    rateAirPerKg: 7.5,
    fumigationRequired: true,
    fumigationFee: 95,
    notes: "Wajib sertifikasi AFAS Treatment Provider terakreditasi AQIS Departemen Pertanian Australia."
  },
  {
    id: "dest-japan-tyo",
    name: "🇯🇵 Jepang (Tokyo / Yokohama / Osaka / Kobe)",
    country: "Japan",
    portName: "Port of Tokyo / Yokohama",
    type: "Export - East Asia",
    currency: "USD",
    transitMinDays: 10,
    transitMaxDays: 15,
    rateLclPerCbm: 78,
    rateFcl20ft: 1280,
    rateFcl40ft: 2180,
    rateAirPerKg: 6.8,
    fumigationRequired: true,
    fumigationFee: 75,
    notes: "Standar inspeksi kebersihan Jepang (JAS & Plant Quarantine). Kemasan dilapisi desiccant anti lembab."
  },
  {
    id: "dest-europe-rot",
    name: "🇪🇺 Eropa (Rotterdam, Belanda / Hamburg, Jerman)",
    country: "European Union",
    portName: "Port of Rotterdam / Hamburg",
    type: "Export - Europe",
    currency: "USD",
    transitMinDays: 24,
    transitMaxDays: 32,
    rateLclPerCbm: 120,
    rateFcl20ft: 1950,
    rateFcl40ft: 3250,
    rateAirPerKg: 9.2,
    fumigationRequired: true,
    fumigationFee: 85,
    notes: "Wajib SVLK (V-Legal Document Indonesia-EU FLEGT VPA) dan sertifikat fumigasi standar ISPM 15."
  },
  {
    id: "dest-usa-west",
    name: "🇺🇸 USA Pantai Barat (Los Angeles / Long Beach, CA)",
    country: "United States",
    portName: "Port of Los Angeles / Long Beach",
    type: "Export - North America",
    currency: "USD",
    transitMinDays: 20,
    transitMaxDays: 28,
    rateLclPerCbm: 135,
    rateFcl20ft: 2250,
    rateFcl40ft: 3750,
    rateAirPerKg: 10.5,
    fumigationRequired: true,
    fumigationFee: 85,
    notes: "Pengiriman langsung trans-pasifik via Pelabuhan Tanjung Priok Jakarta ke Los Angeles."
  },
  {
    id: "dest-domestic",
    name: "🇮🇩 Domestik Indonesia (Jakarta / Surabaya / Bali)",
    country: "Indonesia",
    portName: "Tanjung Priok / Tanjung Perak Hub",
    type: "Domestic",
    currency: "IDR",
    transitMinDays: 2,
    transitMaxDays: 5,
    rateLclPerCbm: 280000,
    rateFcl20ft: 4500000,
    rateFcl40ft: 7500000,
    rateAirPerKg: 35000,
    fumigationRequired: false,
    fumigationFee: 0,
    notes: "Pengiriman darat/laut via armada truk Cirebon Rattan langsung ke gudang pembeli."
  }
];

// Data FAQ Interaktif (Diselaraskan Khusus Pasar Ekspor Malaysia & Global)
const faqData = [
  {
    id: "faq-1",
    category: "ketersediaan",
    categoryName: "Ketersediaan & Stok",
    question: "Apakah semua produk di website ini ready stock atau harus pre-order untuk pengiriman ke Malaysia?",
    answer: "Kami menerapkan sistem ganda yang sangat transparan. Produk dengan label badge hijau <strong>'READY STOCK'</strong> tersedia langsung di gudang ekspor kami di Tegalwangi, Cirebon dan siap dimuat ke kontainer dalam 1-3 hari kerja. Khusus untuk klien di Malaysia (Kuala Lumpur, Penang, Johor), pengiriman ready stock dapat tiba di Port Klang hanya dalam <strong>3 hingga 5 hari berlayar</strong>! Sementara untuk produk berlabel <strong>'PRE-ORDER / MADE TO ORDER'</strong> membutuhkan waktu pengerjaan 10-21 hari kerja sesuai kustomisasi desain."
  },
  {
    id: "faq-2",
    category: "varian",
    categoryName: "Varian & Kustomisasi",
    question: "Apa saja pilihan varian produk yang bisa saya pilih (warna, jenis anyaman, ukuran)?",
    answer: "Setiap model memiliki beragam pilihan varian yang sangat digemari pasar Malaysia (cocok untuk interior tropis, cafe hipster Bangsar, dan resort Langkawi):\n1. <strong>Finishing Warna:</strong> Natural Clear Honey, Bleached Scandinavian Wash, Smoked Walnut, Antique Charcoal Black, dll.\n2. <strong>Jenis Anyaman:</strong> Kulit Rotan (Peel Weave), Rotan Pitrit (Core), Anyaman Kubu Grey alami, hingga Rotan Sintetis PE All-Weather tahan panas dan hujan tropis.\n3. <strong>Bantalan / Cushion:</strong> Kain kanvas lokal busa D-28, linen premium, atau kain Sunbrella® kalis air (waterproof) untuk kolam renang/outdoor.\n4. <strong>Kustomisasi Ukuran:</strong> Kami menerima ukuran khusus (custom dimensions) sesuai denah arsitektur dan spesifikasi ID pembeli."
  },
  {
    id: "faq-3",
    category: "harga",
    categoryName: "Harga & Diskon Grosir",
    question: "Bagaimana cara menghitung total harga dan apakah ada diskon untuk pembelian partai besar / kontainer ke Malaysia?",
    answer: "Harga dihitung secara instan menggunakan kalkulator ekspor kami: (Harga Satuan Varian x Jumlah) - Diskon Grosir + Ongkir. Kami memberikan <strong>Tier Diskon Volume Ekspor Resmi</strong>:\n• <strong>1 - 9 Unit:</strong> Harga Normal (Kategori Sample / Butik)\n• <strong>10 - 49 Unit:</strong> Diskon 5% Otomatis\n• <strong>50 - 99 Unit:</strong> Diskon 12% (Kapasitas Kontainer 20ft)\n• <strong>100+ Unit:</strong> Diskon 18% (Kapasitas Kontainer 40ft High Cube)\nWebsite ini mendukung switch mata uang Rupiah (IDR) dan US Dollar (USD). Harga sangat kompetitif jika dikonversi ke Ringgit Malaysia (MYR)!"
  },
  {
    id: "faq-4",
    category: "pengiriman",
    categoryName: "Biaya Pengiriman ke Malaysia",
    question: "Berapa perkiraan biaya pengiriman ke Malaysia (Port Klang, Penang, Johor)?",
    answer: "Pengiriman dari pabrik Cirebon diberangkatkan melalui Pelabuhan Tanjung Priok (Jakarta) dengan pelayaran langsung (*direct feeder*) ke pelabuhan utama Malaysia dengan tarif sangat terjangkau:\n• <strong>LCL (Less than Container Load):</strong> Mulai <strong>$32 USD / CBM</strong> (sekitar RM 145 / CBM) ke Port Klang.\n• <strong>FCL 20ft Full Container (~30 CBM):</strong> Hanya sekitar <strong>$580 USD</strong> (muat 60-80 unit kursi).\n• <strong>FCL 40ft High Cube (~68 CBM):</strong> Hanya sekitar <strong>$980 USD</strong> (muat 180-240 unit campuran).\n• <strong>Air Cargo Express:</strong> $3.2 USD / kg untuk sampel kilat 1-2 hari ke KLIA (Kuala Lumpur).\nSeluruh pengiriman dilengkapi dokumen pelepasan bea cukai lengkap."
  },
  {
    id: "faq-5",
    category: "estimasi",
    categoryName: "Estimasi Waktu Sampai (ETA)",
    question: "Berapa lama perkiraan barang sampai di Malaysia (Port Klang, Penang, atau Johor)?",
    answer: "Pengiriman ke Malaysia adalah yang paling cepat karena posisi geografis yang bertetangga dekat via Selat Malaka:\n• <strong>Port Klang (Selangor / KL):</strong> Hanya <strong>3 - 5 hari berlayar</strong> dari Pelabuhan Tanjung Priok.\n• <strong>Penang Port (Pulau Pinang & Wilayah Utara):</strong> Sekitar <strong>4 - 6 hari berlayar</strong>.\n• <strong>Johor Port / Port of Tanjung Pelepas:</strong> Sekitar <strong>3 - 5 hari berlayar</strong>.\nTotal waktu sampai di tempat Anda adalah: Lead time persiapan gudang (1-3 hari untuk ready stock) + Hari transit kapal. Nomor kontainer dan Bill of Lading (B/L) akan langsung kami serahkan saat kontainer berlayar (*on board*)."
  },
  {
    id: "faq-6",
    category: "legalitas",
    categoryName: "Legalitas, ATIGA Form D & Karantina MAQIS",
    question: "Apakah ada bea masuk di Malaysia dan apakah dilengkapi sertifikat karantina (Fumigasi, SVLK, Form D)?",
    answer: "Kabar gembira bagi pembeli di Malaysia! Seluruh pengiriman mebel rotan kami disertai <strong>Form D (ASEAN Trade in Goods Agreement - ATIGA)</strong> resmi, yang memberikan fasilitas <strong>BEA MASUK 0% (Zero Import Duty)</strong> saat masuk ke pelabuhan Malaysia! Selain itu, kami menyertakan:\n1. <strong>Sertifikat Fumigasi Standar ISPM 15 & MAQIS:</strong> Menjamin perabot bebas kutu dan bubuk kayu sesuai regulasi Departemen Karantina Malaysia.\n2. <strong>SVLK / V-Legal Indonesia:</strong> Sertifikat legalitas kayu dan rotan kelestarian hutan Indonesia.\n3. <strong>Phytosanitary Certificate:</strong> Dari Badan Karantina Pertanian RI."
  },
  {
    id: "faq-7",
    category: "pembayaran",
    categoryName: "Ketentuan Pembayaran",
    question: "Apa saja metode pembayaran yang diterima untuk transaksi dari Malaysia?",
    answer: "Kami melayani transaksi perbankan internasional yang aman dan legal:\n• <strong>T/T (Telegraphic Transfer):</strong> 40% Deposit saat Purchase Order (PO) disepakati, dan 60% pelunasan setelah kami menyerahkan salinan (*copy*) Bill of Lading (B/L) & dokumen ekspor.\n• <strong>L/C (Irrevocable Letter of Credit at Sight):</strong> Menerima L/C dari bank-bank terkemuka Malaysia (Maybank, CIMB, Public Bank, RHB) untuk order kontainer.\n• <strong>Mata Uang:</strong> Diterima dalam USD, SGD, atau konversi IDR."
  },
  {
    id: "faq-8",
    category: "kemasan",
    categoryName: "Standar Pengemasan (Packaging)",
    question: "Bagaimana standar pengemasan agar produk tidak berjamur atau calar selama perjalanan di laut?",
    answer: "Kami menerapkan standar <strong>4-Tier Export Protective Packaging</strong>:\n1. <em>Kadar Air Terkawal:</em> Rotan di-oven kiln dry dengan Moisture Content (MC) ketat di bawah 12%.\n2. <em>Foam Sheet & Bubble Wrap:</em> Membalut seluruh bingkai dan anyaman dari gesekan.\n3. <em>Corrugated Paper Cardboard:</em> Melindungi sudut tajam dan kaki kursi.\n4. <em>Master Carton Box 5-Ply:</em> Kotak kardus tebal ekspor tahan tindihan di dalam kontena.\n5. <em>Silica Gel Desiccant Bags:</em> Mencegah kelembaban laut tropis sehingga rotan tiba dalam keadaan wangi, kering, dan mulus 100%."
  }
];

// Testimoni Klien Global (Fokus Utama: Malaysia)
const testimonialsData = [
  {
    name: "Dato' Sri Farhan bin Ismail",
    company: "Nusantara Living Sdn. Bhd.",
    country: "Kuala Lumpur, Malaysia",
    flag: "🇲🇾",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    comment: "Kami mengimport 3 kontena 40ft perabot rotan asli Tegalwangi dari Pak Ridwan untuk projek resort dan villa di Langkawi dan hotel butik di KL. Kualiti anyaman sangat halus dan kemas, dokumen ATIGA Form D pelepasan cukai 0% siap sedia, dan kapal sampai di Port Klang tepat waktu dalam 4 hari sahaja!",
    rating: 5
  },
  {
    name: "Puan Noraini Hashim",
    company: "Borneo & Malacca Home Deco",
    country: "Penang, Malaysia",
    flag: "🇲🇾",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "Kerusi ayunan Plumbon dan set meja makan Kuningan Pak Ridwan sangat laris di galeri kami di George Town. Sijil fumigasi MAQIS lengkap, tiada sebarang masalah pelepasan kastam di Penang Port. Sangat mengesyorkan urusan perniagaan dengan Pak Ridwan!",
    rating: 5
  },
  {
    name: "Oliver Weber",
    company: "Nordic Living GmbH",
    country: "Hamburg, Germany",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "Kami mengimpor kontainer kursi rotan Cirebon dari Pak Ridwan setiap tahun untuk jaringan toko kami di Jerman. Sertifikasi SVLK dan kerapian packaging 5-ply sangat luar biasa!",
    rating: 5
  }
];
