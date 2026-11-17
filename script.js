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
/**
 * Main Application Logic - Cirebon Rattan Heritage
 * UI Orchestration, Catalog Filter & Search, Modal Detail, FAQ Accordion & Toasts
 */

// State Aplikasi Global
const appState = {
  currentCategory: "all",
  currentAvailability: "all",
  searchQuery: "",
  selectedProductForModal: null,
  activeFaqCategory: "all",
  faqSearchQuery: ""
};

// Inisialisasi Saat DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Data Default Kalkulator
  initDefaultCalculatorItems();

  // 2. Setup Event Listeners
  setupNavbar();
  setupCatalogFilters();
  setupFaqAccordion();
  setupCalculatorEventListeners();
  setupCurrencyToggle();

  // 3. Render Komponen Utama
  renderCatalog();
  renderCalculator();
  renderFaq();
  renderTestimonials();
  renderCertifications();

  // 4. Inisialisasi Icon Lucide
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Setup Mobile Menu & Scroll Effect
function setupNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navbar = document.getElementById("main-nav");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("shadow-md");
      navbar.classList.add("nav-glass");
    } else {
      navbar.classList.remove("shadow-md");
    }
  });
}

// Currency Switcher (IDR / USD)
function setupCurrencyToggle() {
  const currencyBtns = document.querySelectorAll(".currency-toggle-btn");
  currencyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedCurrency = btn.getAttribute("data-currency");
      calculatorState.currency = selectedCurrency;

      // Update active state visual pada button
      currencyBtns.forEach(b => {
        if (b.getAttribute("data-currency") === selectedCurrency) {
          b.classList.add("bg-amber-800", "text-white");
          b.classList.remove("bg-transparent", "text-gray-700");
        } else {
          b.classList.remove("bg-amber-800", "text-white");
          b.classList.add("bg-transparent", "text-gray-700");
        }
      });

      // Update harga di katalog dan kalkulator
      renderCatalog();
      renderCalculator();
      showToast(`Mata uang diubah ke ${selectedCurrency}`, "info");
    });
  });
}

// Render Sertifikasi Usaha (Fitur 1)
function renderCertifications() {
  const container = document.getElementById("certifications-container");
  if (!container) return;

  container.innerHTML = businessProfile.certifications.map(cert => `
    <div class="p-4 bg-white/80 rounded-xl border border-amber-200/80 shadow-sm hover:border-amber-400 transition">
      <div class="flex items-center gap-2 mb-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        <h4 class="font-bold text-amber-950 text-sm">${cert.code}</h4>
      </div>
      <p class="text-xs font-semibold text-gray-800 mb-1">${cert.name}</p>
      <p class="text-[11px] text-gray-500 leading-relaxed">${cert.desc}</p>
    </div>
  `).join("");
}

// Render Testimonials
function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container) return;

  container.innerHTML = testimonialsData.map(testi => `
    <div class="p-6 bg-white rounded-2xl border border-amber-100 shadow-sm card-hover-effect flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <img src="${testi.avatar}" alt="${testi.name}" class="w-11 h-11 rounded-full object-cover border-2 border-amber-200">
            <div>
              <h5 class="font-bold text-sm text-gray-900">${testi.name}</h5>
              <p class="text-xs text-gray-500">${testi.company} • ${testi.country} ${testi.flag}</p>
            </div>
          </div>
          <div class="text-amber-500 text-xs tracking-wider">
            ${'★'.repeat(testi.rating)}
          </div>
        </div>
        <p class="text-xs text-gray-600 italic leading-relaxed">
          "${testi.comment}"
        </p>
      </div>
      <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
        <span>✓ Verified Global Buyer</span>
        <span class="text-gray-400 font-normal">FCL Container Order</span>
      </div>
    </div>
  `).join("");
}

// Setup Event Listeners untuk Filter Katalog
function setupCatalogFilters() {
  // Category Tabs
  const catTabs = document.querySelectorAll(".cat-tab-btn");
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("tab-active", "bg-amber-900", "text-white"));
      catTabs.forEach(t => t.classList.add("bg-white", "text-gray-600"));
      
      tab.classList.remove("bg-white", "text-gray-600");
      tab.classList.add("tab-active", "bg-amber-900", "text-white");

      appState.currentCategory = tab.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Availability Radio / Buttons
  const availFilters = document.querySelectorAll(".avail-filter-btn");
  availFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      availFilters.forEach(b => b.classList.remove("bg-amber-700", "text-white"));
      availFilters.forEach(b => b.classList.add("bg-amber-50", "text-amber-900"));

      btn.classList.remove("bg-amber-50", "text-amber-900");
      btn.classList.add("bg-amber-700", "text-white");

      appState.currentAvailability = btn.getAttribute("data-avail");
      renderCatalog();
    });
  });

  // Search Input
  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderCatalog();
    });
  }
}

// Render Produk Katalog (Fitur 2: Ketersediaan & Fitur 3: Varian)
function renderCatalog() {
  const container = document.getElementById("products-grid");
  const countBadge = document.getElementById("catalog-count-badge");
  if (!container) return;

  const isUsd = calculatorState.currency === "USD";

  // Filter Data
  const filteredProducts = productsData.filter(prod => {
    // 1. Kategori
    const matchCategory = appState.currentCategory === "all" || prod.category.toLowerCase() === appState.currentCategory.toLowerCase();

    // 2. Ketersediaan
    const matchAvail = appState.currentAvailability === "all" || prod.status === appState.currentAvailability;

    // 3. Search Query
    const matchSearch = appState.searchQuery === "" || 
      prod.name.toLowerCase().includes(appState.searchQuery) ||
      prod.shortDesc.toLowerCase().includes(appState.searchQuery) ||
      prod.material.toLowerCase().includes(appState.searchQuery) ||
      prod.variants.colors.some(c => c.name.toLowerCase().includes(appState.searchQuery));

    return matchCategory && matchAvail && matchSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filteredProducts.length} Produk Ditampilkan`;
  }

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-2xl border border-dashed border-amber-200">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto text-amber-400 mb-3"></i>
        <h3 class="text-lg font-bold text-gray-800">Tidak ada produk yang cocok</h3>
        <p class="text-xs text-gray-500 mt-1 max-w-sm mx-auto">Coba ubah kata kunci pencarian atau ganti filter kategori dan ketersediaan stok.</p>
        <button onclick="resetCatalogFilters()" class="mt-4 px-4 py-2 bg-amber-800 text-white rounded-lg text-xs font-semibold hover:bg-amber-900 transition">
          Reset Filter Katalog
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  container.innerHTML = filteredProducts.map(prod => {
    const isReady = prod.status === "ready";
    const priceFormatted = isUsd ? `$${prod.basePriceUsd}` : `Rp ${prod.basePriceIdr.toLocaleString("id-ID")}`;
    
    return `
      <div class="bg-white rounded-2xl border border-amber-100 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between group">
        <!-- Image & Stock Badge -->
        <div class="relative overflow-hidden aspect-[4/3] bg-amber-50">
          <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          
          <!-- Stock Status Badge (Fitur 2: Ketersediaan) -->
          <div class="absolute top-3 left-3">
            ${isReady ? `
              <span class="inline-flex items-center gap-1.5 pl-6 pr-3 py-1 bg-emerald-500/95 text-white font-bold text-[11px] rounded-full shadow-md badge-ready-pulse backdrop-blur-sm">
                Ready Stock (${prod.stock} unit)
              </span>
            ` : `
              <span class="inline-flex items-center gap-1 px-3 py-1 bg-amber-600/95 text-white font-bold text-[11px] rounded-full shadow-md backdrop-blur-sm">
                <i data-lucide="clock" class="w-3 h-3"></i> Pre-Order (${prod.leadTimeDays} Hari)
              </span>
            `}
          </div>

          <!-- Category Badge -->
          <div class="absolute top-3 right-3">
            <span class="px-2.5 py-1 bg-black/60 text-white font-medium text-[10px] rounded-md backdrop-blur-sm uppercase tracking-wide">
              ${prod.category}
            </span>
          </div>

          <!-- Quick Action Overlay -->
          <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button onclick="openProductDetailModal('${prod.id}')" class="px-3.5 py-2 bg-white text-gray-900 rounded-lg text-xs font-bold shadow-lg hover:bg-amber-50 transition flex items-center gap-1.5">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Lihat Varian
            </button>
          </div>
        </div>

        <!-- Product Content (Fitur 3: Varian) -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
              <span>CBM: <strong>${prod.cbm} m³</strong></span>
              <span>Berat: <strong>${prod.weightKg} kg</strong></span>
              <span class="flex items-center text-amber-500 font-bold">★ ${prod.rating}</span>
            </div>

            <h4 class="font-bold text-gray-900 text-base group-hover:text-amber-800 transition line-clamp-1 mb-1">
              ${prod.name}
            </h4>

            <p class="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
              ${prod.shortDesc}
            </p>

            <!-- Varian Preview Badges (Fitur 3) -->
            <div class="space-y-1.5 mb-4 py-2 border-y border-amber-50 text-[11px]">
              <div class="flex items-center gap-1 text-gray-600">
                <span class="text-gray-400 font-medium w-14 shrink-0">Warna:</span>
                <div class="flex items-center gap-1 overflow-x-auto">
                  ${prod.variants.colors.map(c => `
                    <span class="inline-block w-3.5 h-3.5 rounded-full border border-gray-300 shadow-inner" style="background-color: ${c.preview}" title="${c.name}"></span>
                  `).join("")}
                  <span class="text-gray-400 text-[10px] ml-1">(${prod.variants.colors.length} opsi)</span>
                </div>
              </div>
              <div class="flex items-center gap-1 text-gray-600">
                <span class="text-gray-400 font-medium w-14 shrink-0">Anyaman:</span>
                <span class="font-medium text-amber-900 truncate">${prod.variants.weaves[0].name} +${prod.variants.weaves.length - 1} varian</span>
              </div>
            </div>
          </div>

          <!-- Bottom: Price & Action Buttons -->
          <div>
            <div class="flex items-baseline justify-between mb-3">
              <div>
                <span class="text-[10px] uppercase font-bold text-gray-400 block tracking-wider">Mulai Dari (FOB Cirebon)</span>
                <span class="text-lg font-black text-amber-950 font-serif-luxury">${priceFormatted}</span>
                <span class="text-[10px] text-gray-500">/ pcs</span>
              </div>
              <span class="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold border border-emerald-200">
                Diskon Grosir s.d 18%
              </span>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <button onclick="openProductDetailModal('${prod.id}')" class="w-full py-2 px-3 border border-amber-800 text-amber-800 hover:bg-amber-50 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1">
                <i data-lucide="sliders" class="w-3.5 h-3.5"></i> Varian
              </button>
              <button onclick="quickAddToCalculator('${prod.id}')" class="w-full py-2 px-3 bg-amber-800 hover:bg-amber-900 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 shadow-sm">
                <i data-lucide="calculator" class="w-3.5 h-3.5"></i> Hitung Ongkir
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function resetCatalogFilters() {
  appState.currentCategory = "all";
  appState.currentAvailability = "all";
  appState.searchQuery = "";

  const searchInput = document.getElementById("catalog-search-input");
  if (searchInput) searchInput.value = "";

  const catTabs = document.querySelectorAll(".cat-tab-btn");
  catTabs.forEach((t, i) => {
    if (i === 0) {
      t.classList.add("tab-active", "bg-amber-900", "text-white");
    } else {
      t.classList.remove("tab-active", "bg-amber-900", "text-white");
      t.classList.add("bg-white", "text-gray-600");
    }
  });

  renderCatalog();
}

// Buka Modal Detail & Pilihan Varian Interaktif
function openProductDetailModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  appState.selectedProductForModal = {
    product: product,
    selectedColor: product.variants.colors[0],
    selectedWeave: product.variants.weaves[0],
    selectedCushion: product.variants.cushions[0],
    qty: 1
  };

  renderProductModalContent();

  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeProductDetailModal() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Render Konten di Dalam Modal Detail Produk
function renderProductModalContent() {
  const container = document.getElementById("modal-product-content");
  if (!container || !appState.selectedProductForModal) return;

  const { product, selectedColor, selectedWeave, selectedCushion, qty } = appState.selectedProductForModal;
  const isUsd = calculatorState.currency === "USD";

  // Hitung harga total satuan varian
  const totalDiffIdr = selectedColor.priceDiff + selectedWeave.priceDiff + selectedCushion.priceDiff;
  const unitPriceIdr = product.basePriceIdr + totalDiffIdr;
  const unitPriceUsd = Math.round(unitPriceIdr / USD_RATE);

  const priceFormatted = isUsd ? `$${unitPriceUsd}` : `Rp ${unitPriceIdr.toLocaleString("id-ID")}`;
  const totalSubtotalFormatted = isUsd ? `$${unitPriceUsd * qty}` : `Rp ${(unitPriceIdr * qty).toLocaleString("id-ID")}`;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Sisi Kiri: Gambar & Gallery -->
      <div>
        <div class="rounded-xl overflow-hidden aspect-[4/3] bg-amber-50 border border-amber-200 mb-3">
          <img id="modal-main-image" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        </div>
        <div class="grid grid-cols-3 gap-2">
          ${product.gallery.map((img, i) => `
            <button onclick="document.getElementById('modal-main-image').src='${img}'" class="aspect-video rounded-lg overflow-hidden border border-amber-200 hover:border-amber-600 focus:border-amber-700 transition">
              <img src="${img}" class="w-full h-full object-cover">
            </button>
          `).join("")}
        </div>

        <div class="mt-4 p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs space-y-1.5 text-gray-700">
          <p><strong>Dimensi:</strong> ${product.dimensions}</p>
          <p><strong>Material:</strong> ${product.material}</p>
          <p><strong>Kubikasi / Berat:</strong> ${product.cbm} CBM / ${product.weightKg} kg per unit</p>
          <p><strong>Kapasitas Kontainer 40ft:</strong> ±${Math.floor(65 / product.cbm)} unit muat maksimal</p>
        </div>
      </div>

      <!-- Sisi Kanan: Spesifikasi & Pemilih Varian -->
      <div class="flex flex-col justify-between">
        <div>
          <!-- Status Badge -->
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs uppercase font-bold text-amber-800 tracking-wider">${product.category} FURNITURE</span>
            ${product.status === "ready" ? `
              <span class="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                ✓ Ready Stock (${product.stock} pcs di Gudang Cirebon)
              </span>
            ` : `
              <span class="px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">
                ⏱ Pre-Order (${product.leadTimeDays} Hari Produksi)
              </span>
            `}
          </div>

          <h3 class="text-xl font-bold font-serif-luxury text-amber-950 mb-2">${product.name}</h3>
          <p class="text-xs text-gray-600 mb-4 leading-relaxed">${product.description}</p>

          <!-- Varian 1: Warna Finishing -->
          <div class="mb-3">
            <label class="block text-xs font-bold text-gray-800 mb-1.5">
              1. Pilih Warna / Finishing Rotan: <span class="text-amber-800 font-semibold">${selectedColor.name}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.colors.map(col => `
                <button onclick="updateModalVariant('color', '${col.name}')" class="px-2.5 py-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition ${selectedColor.name === col.name ? 'border-amber-800 bg-amber-50 text-amber-900 font-bold shadow-sm' : 'border-gray-200 hover:border-amber-300 text-gray-700'}">
                  <span class="w-3 h-3 rounded-full border border-gray-400" style="background-color: ${col.preview}"></span>
                  ${col.name} ${col.priceDiff > 0 ? `(+${isUsd ? '$' + Math.round(col.priceDiff/USD_RATE) : 'Rp ' + col.priceDiff.toLocaleString()})` : ''}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Varian 2: Jenis Anyaman -->
          <div class="mb-3">
            <label class="block text-xs font-bold text-gray-800 mb-1.5">
              2. Pilih Jenis Anyaman: <span class="text-amber-800 font-semibold">${selectedWeave.name}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.weaves.map(weave => `
                <button onclick="updateModalVariant('weave', '${weave.name}')" class="px-2.5 py-1.5 rounded-lg border text-xs transition ${selectedWeave.name === weave.name ? 'border-amber-800 bg-amber-50 text-amber-900 font-bold shadow-sm' : 'border-gray-200 hover:border-amber-300 text-gray-700'}">
                  ${weave.name} ${weave.priceDiff > 0 ? `(+${isUsd ? '$' + Math.round(weave.priceDiff/USD_RATE) : 'Rp ' + weave.priceDiff.toLocaleString()})` : ''}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Varian 3: Bantalan / Cushion / Ukuran -->
          <div class="mb-4">
            <label class="block text-xs font-bold text-gray-800 mb-1.5">
              3. Opsi Bantalan / Spesifikasi: <span class="text-amber-800 font-semibold">${selectedCushion.name}</span>
            </label>
            <div class="flex flex-wrap gap-2">
              ${product.variants.cushions.map(cush => `
                <button onclick="updateModalVariant('cushion', '${cush.name}')" class="px-2.5 py-1.5 rounded-lg border text-xs transition ${selectedCushion.name === cush.name ? 'border-amber-800 bg-amber-50 text-amber-900 font-bold shadow-sm' : 'border-gray-200 hover:border-amber-300 text-gray-700'}">
                  ${cush.name} ${cush.priceDiff !== 0 ? `(${cush.priceDiff > 0 ? '+' : ''}${isUsd ? '$' + Math.round(cush.priceDiff/USD_RATE) : 'Rp ' + cush.priceDiff.toLocaleString()})` : ''}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Bagian Bawah: Kuantiti & Subtotal Real-Time -->
        <div class="pt-4 border-t border-gray-200">
          <div class="flex items-center justify-between mb-4">
            <div>
              <span class="text-[11px] text-gray-500 block">Harga Satuan Varian Terpilih:</span>
              <span class="text-xl font-black text-amber-950 font-serif-luxury">${priceFormatted}</span>
            </div>

            <!-- Qty Counter -->
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-gray-700">Jumlah:</span>
              <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <button onclick="updateModalQty(-1)" class="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-amber-100 hover:text-amber-900">-</button>
                <span class="w-10 text-center font-bold text-sm text-gray-800">${qty}</span>
                <button onclick="updateModalQty(1)" class="w-8 h-8 flex items-center justify-center font-bold text-gray-600 hover:bg-amber-100 hover:text-amber-900">+</button>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between bg-amber-100/60 p-2.5 rounded-lg border border-amber-200 text-xs mb-3">
            <span class="text-gray-700">Estimasi Subtotal (${qty} unit):</span>
            <span class="font-bold text-amber-950 text-sm font-mono">${totalSubtotalFormatted}</span>
          </div>

          <div class="flex gap-2">
            <button onclick="addModalProductToCalculator()" class="flex-1 py-3 px-4 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2">
              <i data-lucide="plus-circle" class="w-4 h-4"></i> Tambah ke Simulasi Kalkulator
            </button>
            <button onclick="closeProductDetailModal()" class="py-3 px-4 border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-xs rounded-xl transition">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Handler Perubahan Varian di Modal
function updateModalVariant(type, valueName) {
  if (!appState.selectedProductForModal) return;
  const prod = appState.selectedProductForModal.product;

  if (type === "color") {
    appState.selectedProductForModal.selectedColor = prod.variants.colors.find(c => c.name === valueName);
  } else if (type === "weave") {
    appState.selectedProductForModal.selectedWeave = prod.variants.weaves.find(w => w.name === valueName);
  } else if (type === "cushion") {
    appState.selectedProductForModal.selectedCushion = prod.variants.cushions.find(c => c.name === valueName);
  }

  renderProductModalContent();
}

function updateModalQty(delta) {
  if (!appState.selectedProductForModal) return;
  const newQty = appState.selectedProductForModal.qty + delta;
  if (newQty >= 1 && newQty <= 999) {
    appState.selectedProductForModal.qty = newQty;
    renderProductModalContent();
  }
}

function addModalProductToCalculator() {
  if (!appState.selectedProductForModal) return;
  const { product, selectedColor, selectedWeave, selectedCushion, qty } = appState.selectedProductForModal;

  addItemToCalculator(product, selectedColor.name, selectedWeave.name, selectedCushion.name, qty);
  closeProductDetailModal();

  // Scroll halus ke kalkulator jika diinginkan
  const calcSection = document.getElementById("kalkulator");
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: "smooth" });
  }
}

function quickAddToCalculator(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  addItemToCalculator(
    product,
    product.variants.colors[0].name,
    product.variants.weaves[0].name,
    product.variants.cushions[0].name,
    1
  );

  const calcSection = document.getElementById("kalkulator");
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Setup FAQ Accordion & Category Filter (Fitur 7)
function setupFaqAccordion() {
  const faqTabs = document.querySelectorAll(".faq-tab-btn");
  faqTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      faqTabs.forEach(t => {
        t.classList.remove("bg-amber-800", "text-white");
        t.classList.add("bg-white", "text-gray-700");
      });

      tab.classList.remove("bg-white", "text-gray-700");
      tab.classList.add("bg-amber-800", "text-white");

      appState.activeFaqCategory = tab.getAttribute("data-faq-cat");
      renderFaq();
    });
  });

  const faqSearchInput = document.getElementById("faq-search-input");
  if (faqSearchInput) {
    faqSearchInput.addEventListener("input", (e) => {
      appState.faqSearchQuery = e.target.value.toLowerCase().trim();
      renderFaq();
    });
  }
}

// Render FAQ (Fitur 7)
function renderFaq() {
  const container = document.getElementById("faq-accordion-container");
  if (!container) return;

  const filteredFaqs = faqData.filter(faq => {
    const matchCat = appState.activeFaqCategory === "all" || faq.category === appState.activeFaqCategory;
    const matchSearch = appState.faqSearchQuery === "" || 
      faq.question.toLowerCase().includes(appState.faqSearchQuery) ||
      faq.answer.toLowerCase().includes(appState.faqSearchQuery);

    return matchCat && matchSearch;
  });

  if (filteredFaqs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-gray-500 text-xs">
        Tidak ditemukan pertanyaan yang cocok dengan "${appState.faqSearchQuery}". Silakan tanyakan langsung ke Pak Ridwan via WhatsApp.
      </div>
    `;
    return;
  }

  container.innerHTML = filteredFaqs.map((faq, index) => `
    <div class="border border-amber-200/80 rounded-xl bg-white overflow-hidden shadow-sm hover:border-amber-400 transition">
      <button onclick="toggleFaqAccordion('faq-ans-${faq.id}')" class="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-sm hover:text-amber-800 transition">
        <span class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-900 text-xs flex items-center justify-center shrink-0">
            ${index + 1}
          </span>
          <span>${faq.question}</span>
        </span>
        <i data-lucide="chevron-down" id="faq-icon-${faq.id}" class="w-4 h-4 text-amber-800 shrink-0 transition-transform duration-300"></i>
      </button>

      <div id="faq-ans-${faq.id}" class="hidden p-4 sm:p-5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-amber-50/20">
        <div class="py-1">
          ${faq.answer.replace(/\n/g, "<br>")}
        </div>
        <div class="mt-3 pt-2 border-t border-amber-100/60 flex items-center justify-between text-[11px] text-gray-400">
          <span>Kategori: <strong class="text-amber-800">${faq.categoryName}</strong></span>
          <span class="text-emerald-700 font-semibold">✓ Informasi Resmi Pak Ridwan</span>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function toggleFaqAccordion(contentId) {
  const content = document.getElementById(contentId);
  if (!content) return;

  const isHidden = content.classList.contains("hidden");
  content.classList.toggle("hidden");

  const iconId = contentId.replace("faq-ans-", "faq-icon-");
  const icon = document.getElementById(iconId);
  if (icon) {
    if (isHidden) {
      icon.classList.add("rotate-180");
    } else {
      icon.classList.remove("rotate-180");
    }
  }
}

// Toast Notification Helper
function showToast(message, type = "info") {
  let toastContainer = document.getElementById("toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `toast-item p-3.5 rounded-xl text-xs font-semibold shadow-lg border flex items-center gap-2.5 max-w-sm ${
    type === "success" ? "bg-emerald-900 text-white border-emerald-700" :
    type === "warning" ? "bg-amber-900 text-white border-amber-700" :
    "bg-gray-900 text-white border-gray-700"
  }`;

  const iconSvg = type === "success" ? "check-circle" : type === "warning" ? "alert-triangle" : "info";
  toast.innerHTML = `
    <i data-lucide="${iconSvg}" class="w-4 h-4 shrink-0"></i>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}
