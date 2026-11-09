export interface PortTerminal {
  id: string;
  name: string;
  type: string;
  location: string;
  lat: number;
  lng: number;
  maxDraft: string;
  berthLength: string;
  description: string;
  primaryCargo: string;
  mapEmbedUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  kicker: string;
  tagline: string;
  description: string;
  features: string[];
  imageSrc?: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  vesselType: string;
  project: string;
  rating: number;
  date: string;
}

export const COMPANY_CONTACT = {
  name: "PT INTAN SAMUDERA AGENCY",
  tagline: "General Shipping Agency & Maritime Logistics Specialist",
  domicile: "Balikpapan, Kalimantan Timur, Indonesia",
  directorName: "Mr. Jasmin",
  directorRole: "Direktur",
  phone: "+6282229357500",
  phoneFormatted: "+62 822-2935-7500",
  email: "opsbpn@intansamudera.com",
  officeAddress: "Perum Sepinggan Menara Griya Blok C No.9, RT. 063 Kel. Sepinggan, Kec. Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115",
  operationalCoverage: "Terminal LDC East Indonesia, Terminal KRN, Terminal WPS, Terminal ARC, Terminal Interport ILSS, Balikpapan Coal Terminal (BCT), & Pelabuhan Semayang Balikpapan",
  workingHours: "24 Jam / 7 Hari (24/7 Port Clearance & Emergency Response)",
  whatsappLink: "https://wa.me/6282229357500?text=Halo%20Mr.%20Jasmin%2C%20saya%20ingin%20berkoordinasi%20terkait%20layanan%20keagenan%20kapal%20dan%20logistik%20maritim%20di%20Balikpapan%20bersama%20PT%20Intan%20Samudera%20Agency."
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "shipping-agency",
    title: "Shipping Agency & Port Clearance",
    kicker: "Layanan Keagenan Kapal Utama",
    tagline: "Inward & Outward CIQP Clearance dengan jaminan zero-delay operasional.",
    description: "Bertindak sebagai General Agent dan Sub-Agent terpercaya untuk kapal niaga domestik maupun ocean-going internasional. Berkoordinasi intensif dengan KSOP Kelas I Balikpapan, Bea Cukai, Imigrasi, dan Karantina Kesehatan untuk perizinan kapal sandar maupun labuh jangkar.",
    features: [
      "Inward & Outward Port Clearance (CIQP) resmi & transparan",
      "Perhitungan Proforma Disbursement Account (PDA) akurat dan kompetitif",
      "Koordinasi pandu (pilotage), kapal tunda (tugboat), dan alokasi dermaga",
      "Penyelesaian dokumen Surat Persetujuan Berlayar (Port Clearance / SPB)"
    ],
    imageSrc: "/src/assets/images/service_shipping_agency_1794197436631.jpg",
    highlight: true
  },
  {
    id: "cargo-stevedoring",
    title: "Logistik Maritim & Bongkar Muat",
    kicker: "Cargo Handling & Stevedoring",
    tagline: "Penanganan kargo curah, kontainer, dan heavy lift project cargo di Pelabuhan Balikpapan.",
    description: "Pengelolaan stevedoring dan cargo tally profesional di Pelabuhan Semayang dan Kaltim Kariangau Terminal (KKT). Spesialisasi penanganan alat berat pertambangan, material konstruksi IKN, batu bara, serta transshipment Ship-to-Ship (STS) di perairan Teluk Balikpapan.",
    features: [
      "Bongkar muat breakbulk, curah kering/cair, dan kontainer",
      "Heavy-lift cargo handling untuk alat berat tambang & industri migas",
      "Transshipment kargo Ship-to-Ship (STS) di Teluk Balikpapan",
      "Tally independent, marine survey coordination, dan trucking pelabuhan"
    ],
    imageSrc: "/src/assets/images/service_cargo_logistics_1793086075930.jpg"
  },
  {
    id: "vessel-husbandry",
    title: "Vessel Husbandry & Crew Handling",
    kicker: "Pelayanan Awak & Kebutuhan Kapal",
    tagline: "Solusi pergantian awak kapal (crew change) dan kebutuhan perbekalan 24/7.",
    description: "Layanan komprehensif bagi nakhoda dan awak kapal saat berlabuh di Balikpapan. Didukung armada speedboat operasional untuk transfer kru di anchorage, perizinan imigrasi (OKTB/Sign on-off), akomodasi hotel, dan antar jemput Bandara Internasional SAMS Sepinggan Balikpapan.",
    features: [
      "Crew Change (Sign On / Sign Off) untuk WNI dan kru asing (Expatriate)",
      "Pengurusan dokumen OKTB, EPO, landing pass, dan perpanjangan paspor laut",
      "Layanan Cash to Master (CTM) aman dan terpercaya",
      "Penyediaan logistik bahan makanan segar (provisions) & bonded stores"
    ],
    imageSrc: "/src/assets/images/service_vessel_husbandry_1793086076533.jpg"
  },
  {
    id: "tug-barge-charter",
    title: "Tug & Barge / LCT Chartering",
    kicker: "Armada Angkutan Laut & Proyek",
    tagline: "Charter tongkang dan kapal tunda untuk koridor logistik Balikpapan - IKN Nusantara.",
    description: "Penyediaan armada Tugboat (1.200 - 3.200 HP) dan Deck Cargo Barge (230 - 330 ft) serta Landing Craft Tank (LCT) siap operasi. Jalur pengiriman strategis pasokan batu pecah, tiang pancang, pasir cor, dan peralatan berat dari Balikpapan menuju dermaga logistik IKN Sepaku.",
    features: [
      "Time Charter (TC) dan Freight Charter (FC) resmi berlisensi",
      "Tongkang 230 ft, 270 ft, 300 ft, dan 330 ft standar BKI / Class",
      "Armada LCT dengan ramp-door untuk bongkar muat pantai/jetty dangkal",
      "Rute reguler Teluk Balikpapan - Sepaku (IKN Nusantara) & Sulawesi/Jawa"
    ],
    imageSrc: "/src/assets/images/service_tug_barge_charter_1793086076146.jpg"
  },
  {
    id: "bunker-water-supply",
    title: "Bunker & Fresh Water Supply",
    kicker: "Pengisian Bahan Bakar & Air Tawar",
    tagline: "Suplai resmi Marine Gas Oil (MGO/HSD) dan air tawar berkualitas tinggi.",
    description: "Penyaluran bahan bakar minyak (BBM) industri marine berizin resmi dan sertifikat lab, baik melalui tongkang bunker (bunker barge) di anchorage Teluk Balikpapan maupun tangki darat di dermaga. Pengisian air tawar steril dengan kapasitas hingga ratusan ton per panggilan.",
    features: [
      "Bunker MGO / B35 HSD bersertifikat kualitas Pertamina",
      "Pengisian via barge di anchorage atau tank truck di dermaga Semayang",
      "Suplai air tawar steril bertekanan tinggi untuk kapal niaga",
      "Penyediaan pelumas marine (Marine Engine Oil) berbagai grade"
    ]
  },
  {
    id: "technical-emergency",
    title: "Ship Spares & Technical Support",
    kicker: "Dukungan Teknis & Darurat",
    tagline: "Kliring suku cadang dalam transit dan asistensi penyelaman bawah air.",
    description: "Pendampingan teknis saat kapal mengalami kendala permesinan atau inspeksi berkala di perairan Balikpapan. Menangani kepabeanan 'Ship Spare in Transit' dari bandara langsung ke atas kapal, underwater hull inspection, dan pengelolaan limbah kapal (sludge & garbage disposal).",
    features: [
      "Customs clearance Ship Spares in Transit via Bandara Sepinggan",
      "Inspeksi lambung bawah air (Underwater Inspection in Lieu of Drydocking - UWILD)",
      "Pembuangan limbah sampah kapal (Garbage & Slop/Sludge Disposal bersertifikat)",
      "Dukungan darurat 24 jam dengan tim operasional di lapangan"
    ]
  }
];

export const PORT_TERMINALS: PortTerminal[] = [
  {
    id: "ldc-east-indonesia",
    name: "Terminal LDC East Indonesia",
    type: "Terminal Khusus (Tersus) Curah Cair & Refinery CPO",
    location: "Kawasan Industri Kariangau (KIK), Balikpapan Barat",
    lat: -1.1820,
    lng: 116.7820,
    maxDraft: "12.0 - 13.5 Meter LWS",
    berthLength: "Dermaga Dedicated T-Head (Kapal Tanker s/d 45.000 DWT)",
    description: "Terminal industri pengolahan dan ekspor minyak kelapa sawit terpadu milik Louis Dreyfus Company (LDC) di Balikpapan. Dilengkapi sistem pemipaan modern, loading arms otomatis, dan tangki timbun berkapasitas tinggi untuk kapal tanker ekspor maupun interinsuler.",
    primaryCargo: "Crude Palm Oil (CPO), Refined Bleached Deodorized Palm Oil (RBDPO), Palm Olein, Stearin",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.1820,116.7820&hl=id&z=15&output=embed"
  },
  {
    id: "krn-kutai-refinery",
    name: "Terminal Kutai Refinery Nusantara (KRN)",
    type: "Terminal Khusus (Tersus) Refinery & Oleochemicals",
    location: "Kawasan Industri Kariangau, Balikpapan Barat (Apical Group)",
    lat: -1.1765,
    lng: 116.7790,
    maxDraft: "11.5 - 13.0 Meter LWS",
    berthLength: "Multi-Berth Jetty Kompleks Industri CPO",
    description: "Fasilitas jetty dan terminal pengapalan refinery CPO skala dunia milik PT Kutai Refinery Nusantara (KRN) - Apical Group di perairan Teluk Balikpapan. Menangani kapal chemical dan product tanker untuk pasar ekspor global dan domestik.",
    primaryCargo: "CPO, Palm Kernel Oil (PKO), Biodiesel, Glycerine, PFAD",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.1765,116.7790&hl=id&z=15&output=embed"
  },
  {
    id: "wps-wahana-prima-sejati",
    name: "Terminal Wahana Prima Sejati (WPS)",
    type: "Terminal Khusus (Tersus) Curah Kering, Batu Bara & General Cargo",
    location: "Kariangau, Teluk Balikpapan",
    lat: -1.1960,
    lng: 116.7930,
    maxDraft: "11.0 - 12.5 Meter LWS",
    berthLength: "Dermaga Curah Kering & Tongkang Panjang 280 Meter",
    description: "Terminal pelabuhan khusus PT Wahana Prima Sejati (WPS) yang melayani pemuatan batu bara, semen/klinker, agregat konstruksi, dan kargo proyek. Memiliki fasilitas conveyor belt berkecepatan tinggi serta stockpile luas di koridor Teluk Balikpapan.",
    primaryCargo: "Batu Bara (Coal), Semen/Klinker, Pasir & Agregat, General Cargo",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.1960,116.7930&hl=id&z=15&output=embed"
  },
  {
    id: "arc-agpa-refinery",
    name: "Terminal Agpa Refinery Complex (ARC)",
    type: "Terminal Industri Refinery & Petrokimia",
    location: "Kawasan Industri Teluk Balikpapan",
    lat: -1.1680,
    lng: 116.7750,
    maxDraft: "10.5 - 12.0 Meter LWS",
    berthLength: "Dermaga Khusus Manifold Curah Cair",
    description: "Dermaga khusus terminal pengolahan Agpa Refinery Complex (ARC) untuk bongkar muat produk cairan industri minyak nabati dan bahan baku kimia. Terkoneksi langsung dengan fasilitas tangki penyimpanan dan alur pelayaran dalam Teluk Balikpapan.",
    primaryCargo: "Vegetable Oil Derivatives, Industrial Liquid Chemicals, Bio-products",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.1680,116.7750&hl=id&z=15&output=embed"
  },
  {
    id: "interport-ilss",
    name: "Terminal Interport ILSS",
    type: "Offshore Logistics Supply Base & Shorebase",
    location: "Somber / Kariangau, Balikpapan Barat (Indika Energy Group)",
    lat: -1.2280,
    lng: 116.8050,
    maxDraft: "7.5 - 9.5 Meter LWS",
    berthLength: "Shorebase Berthing Wall & Heavy Duty Crane Pad",
    description: "Interport Logistics Supply Base (ILSS) merupakan pusat shorebase dan pangkalan logistik lepas pantai terlengkap di Kalimantan Timur. Menyediakan fasilitas berthing untuk kapal Offshore Supply Vessel (OSV), AHTS, LCT, pipa migas (OCTG), serta alat berat proyek energi dan IKN.",
    primaryCargo: "Oil & Gas Offshore Supply, Tubing OCTG, Pipa Migas, Heavy Equipment, LCT & Tongkang Proyek",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.2280,116.8050&hl=id&z=15&output=embed"
  },
  {
    id: "bct-balikpapan-coal",
    name: "Balikpapan Coal Terminal (BCT)",
    type: "Terminal Khusus (Tersus) Transshipment & Ekspor Batu Bara",
    location: "Tanjung Batu / Kariangau, Teluk Balikpapan",
    lat: -1.2185,
    lng: 116.7915,
    maxDraft: "13.0 - 15.0 Meter LWS",
    berthLength: "Dermaga Curah Kering Berkapasitas Kapal Panamax & Capesize",
    description: "Balikpapan Coal Terminal (BCT) merupakan salah satu terminal penanganan dan pengapalan batu bara terbesar dan tersibuk di Indonesia. Dilengkapi shiploader berkecepatan tinggi, sistem blending batubara otomatis, stockpile raksasa, dan kedalaman alur alami Teluk Balikpapan yang mampu melayani tongkang hingga kapal ocean-going bulk carrier raksasa.",
    primaryCargo: "Batu Bara (Thermal Coal, Coking Coal), Transshipment Tongkang ke Ocean-going Bulker",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.2185,116.7915&hl=id&z=15&output=embed"
  },
  {
    id: "semayang",
    name: "Pelabuhan Semayang",
    type: "Pelabuhan Umum Utama & Hub Kargo / Niaga Balikpapan",
    location: "Jl. Yos Sudarso No. 1, Prapatan, Kota Balikpapan",
    lat: -1.2785,
    lng: 116.8123,
    maxDraft: "8.5 - 10.5 Meter LWS",
    berthLength: "Dermaga Umum 489 Meter & Terminal Penumpang",
    description: "Pelabuhan bersejarah dan pintu gerbang utama pelayaran niaga Kota Balikpapan yang dikelola Pelindo di bawah pengawasan KSOP Kelas I Balikpapan. Melayani kapal kargo umum, ro-ro, kapal kontainer, kapal penumpang, serta kapal suplai offshore perairan Balikpapan.",
    primaryCargo: "General Cargo, Peti Kemas Domestik, Kendaraan/Alat Berat, Kapal Niaga & Penumpang",
    mapEmbedUrl: "https://maps.google.com/maps?q=-1.2785,116.8123&hl=id&z=15&output=embed"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    quote: "Koordinasi keagenan dari tim PT Intan Samudera Agency di Balikpapan sangat responsif dan disiplin. Clearance CIQP untuk kapal tanker kami di anchorage Teluk Balikpapan selesai tepat waktu tanpa ada demurrage. Komunikasi Mr. Jasmin sangat profesional.",
    clientName: "Capt. Hendra Wicaksono",
    role: "Marine Operations Manager",
    company: "PT Borneo Ocean Energy Lines",
    vesselType: "MT Ocean Fortune (Oil Tanker 18.500 DWT)",
    project: "Bunker Coordination & Port Clearance Balikpapan",
    rating: 5,
    date: "Oktober 2026"
  },
  {
    id: "testi-2",
    quote: "Pengiriman logistik material konstruksi dan tiang pancang untuk batch proyek IKN lewat LCT dan tugboat berjalan mulus. Pengurusan izin sandar di Semayang dan koordinasi jetty Sepaku sangat rapi. Sangat merekomendasikan Intan Samudera Agency.",
    clientName: "Bambang Triyono, S.T.",
    role: "Project Logistics Director",
    company: "Konsorsium Infrastruktur Nusantara",
    vesselType: "TB Bima Sakti 08 & Barge 270 ft (Kargo IKN)",
    project: "Sea Freight & Jetty Clearance Koridor IKN",
    rating: 5,
    date: "September 2026"
  },
  {
    id: "testi-3",
    quote: "Crew change untuk 9 orang awak kapal kami termasuk transfer kru asing berjalan sempurna. Dari jemputan Bandara Sepinggan hingga boat transfer ke outer anchorage semuanya terkoordinasi dengan Bea Cukai dan Imigrasi tanpa hambatan.",
    clientName: "Capt. Arvind Sharma",
    role: "Fleet Superintendent",
    company: "Starlight Maritime Singapore Pte Ltd",
    vesselType: "MV Pacific Pioneer (Bulk Carrier 55.000 DWT)",
    project: "Crew Change & Ship Husbandry at Balikpapan",
    rating: 5,
    date: "Agustus 2026"
  },
  {
    id: "testi-4",
    quote: "Kalkulasi PDA dari awal sangat transparan, tidak ada hidden cost. Pelayanan suplai air tawar 250 ton dan bunker MGO di Pelabuhan Semayang dieksekusi dengan standar keselamatan tinggi. Tim ops standby 24 jam penuh.",
    clientName: "Ir. Fajar Suryahadi",
    role: "Head of Chartering & Shipping",
    company: "PT Kaltim Global Maritime Trans",
    vesselType: "MV Mahakam Jaya (General Cargo 8.200 DWT)",
    project: "Port Agency & Fresh Water Bunkering Semayang",
    rating: 5,
    date: "Juli 2026"
  }
];

export const COMPANY_STATS = [
  { value: "24/7", label: "Port Agency & Emergency Ops", detail: "Standby operasional siang & malam" },
  { value: "480+", label: "Vessel Calls Handled", detail: "Tanker, Bulker, Tug & Barge, LCT" },
  { value: "99.8%", label: "On-Time Clearance Rate", detail: "Zero-delay koordinasi CIQP resmi" },
  { value: "100%", label: "Balikpapan & IKN Coverage", detail: "Semayang, KKT Kariangau, STS Bay" }
];

export const FAQS = [
  {
    q: "Berapa lama proses port clearance (CIQP) dapat diselesaikan oleh PT Intan Samudera Agency?",
    a: "Untuk kapal domestik maupun internasional, perizinan pre-arrival (PPK/SPM) diproses 24-48 jam sebelum estimasi tiba (ETA). Setelah kapal tiba di ambang luar atau dermaga, tim agen kami langsung naik bersama petugas CIQP (KSOP, Karantina, Imigrasi, Bea Cukai) sehingga clearance in selesai dalam hitungan 1-2 jam."
  },
  {
    q: "Apakah PT Intan Samudera Agency dapat mengurus pergantian awak kapal (crew change) untuk kru asing?",
    a: "Ya, kami berpengalaman menangani crew change awak kapal WNI dan kru asing (expatriate). Kami mengurus seluruh dokumen OKTB (Official Letter to Transfer Board), surat rekomendasi imigrasi, visa on arrival/transit, penjemputan Bandara SAMS Sepinggan Balikpapan, tes kesehatan karantina, hingga transfer boat ke perairan Teluk Balikpapan."
  },
  {
    q: "Bagaimana cara meminta perhitungan Proforma Disbursement Account (PDA) resmi?",
    a: "Anda dapat mengirimkan data kapal (Nama Kapal, Bendera, LOA, Draft, GRT/NRT, Jenis Muatan, Rencana Tambat/Labuh, serta kebutuhan suplai) melalui formulir di website ini, via email ke opsbpn@intansamudera.com, atau menghubungi Mr. Jasmin langsung di +6282229357500. PDA resmi akan dikirimkan dalam 2-4 jam kerja."
  },
  {
    q: "Apakah tersedia armada tugboat dan tongkang untuk pengiriman proyek ke Ibu Kota Nusantara (IKN)?",
    a: "Tentu. Kami melayani charter tug & barge (ukuran 230 ft hingga 330 ft) dan LCT dengan draft dangkal yang dirancang khusus untuk membawa material konstruksi, tiang pancang, pasir, dan alat berat dari Balikpapan langsung ke jetty-jetty logistik IKN di Sepaku / Teluk Balikpapan."
  },
  {
    q: "Apakah suplai BBM (Bunkering) dan air tawar dapat dilakukan saat kapal di anchorage?",
    a: "Bisa. Kami menyediakan layanan bunker barge untuk pengisian High Speed Diesel (HSD/MGO) di labuh jangkar Teluk Balikpapan serta kapal tongkang air tawar (fresh water barge) berkapasitas besar dengan uji kualitas air."
  }
];
