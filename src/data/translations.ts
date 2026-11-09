export interface ServiceTranslation {
  id: string;
  title: string;
  kicker: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface TerminalTranslation {
  id: string;
  name: string;
  type: string;
  location: string;
  maxDraft: string;
  berthLength: string;
  description: string;
  primaryCargo: string;
}

export interface TestimonialTranslation {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  vesselType: string;
  project: string;
  date: string;
}

export interface FaqTranslation {
  q: string;
  a: string;
}

export const TRANSLATIONS = {
  id: {
    nav: {
      profile: "Profil Perusahaan",
      services: "Layanan Logistik",
      calculator: "Kalkulator PDA",
      terminals: "Terminal Balikpapan",
      testimonials: "Testimoni",
      contactBtn: "Hubungi Operasional",
      contactPerson: "Kontak",
      drawerContactBtn: "Hubungi Operasional / Kirim Permintaan"
    },
    hero: {
      kicker1: "General Shipping Agency Balikpapan",
      kicker2: "KSOP Kelas I Balikpapan Accredited",
      kicker3: "Perairan Teluk Balikpapan",
      title: "Mitra Keagenan Kapal & Solusi Logistik Maritim Andal di Balikpapan",
      description: "PT Intan Samudera Agency melayani perizinan Inward & Outward Port Clearance (CIQP), stevedoring bongkar muat kargo, pergantian awak kapal (crew change), bunker supply, serta penyewaan tug & barge untuk koridor maritim Balikpapan.",
      ctaPrimary: "Ajukan Port Call / Permintaan Penawaran",
      ctaWhatsApp: "WhatsApp",
      contactPhone: "Telepon / WhatsApp Langsung",
      contactEmail: "Email Resmi Operasional",
      contactEmailSub: "Operasional Balikpapan",
      stats: [
        { value: "24/7", label: "Port Agency & Emergency Ops", detail: "Standby operasional siang & malam" },
        { value: "480+", label: "Panggilan Kapal Dilayani", detail: "Tanker, Bulker, Tug & Barge, LCT" },
        { value: "99.8%", label: "Tingkat Ketepatan Clearance", detail: "Zero-delay koordinasi CIQP resmi" },
        { value: "100%", label: "Cakupan Terminal Balikpapan", detail: "Semayang, LDC, KRN, WPS, ARC, ILSS" }
      ]
    },
    profile: {
      kicker: "Profil Perusahaan & Komitmen Operasional",
      title: "Keagenan Kapal dan Ekspedisi Maritim Berbasis di Jantung Maritim Balikpapan",
      lead: "PT INTAN SAMUDERA AGENCY didirikan dengan dedikasi untuk memberikan layanan keagenan kapal (general agent & sub-agent) serta logistik maritim yang transparan, cepat, dan berstandar keselamatan tinggi di seluruh wilayah perairan Teluk Balikpapan.",
      body1Title: "Pintu Gerbang Logistik Laut Kalimantan Timur",
      body1Text: "Kota Balikpapan merupakan simpul maritim terpenting di Kalimantan Timur dengan intensitas lalu lintas kapal niaga, tanker minyak nabati, tongkang batu bara, dan kapal suplai lepas pantai. Beroperasi langsung di area Pelabuhan Semayang, kawasan industri Kariangau, dan Teluk Balikpapan, PT Intan Samudera Agency bertindak sebagai representasi resmi pemilik kapal (Ship Owner), penyewa (Charterer), serta operator pelayaran.",
      body2Text: "Kami menempatkan armada kapal tunda, kapal transfer awak, dan tim operasional lapangan bersertifikasi untuk menjamin kepatuhan jadwal sandar, izin persetujuan berlayar (SPB), dan efisiensi biaya tambat kapal Anda.",
      pillars: [
        "Izin Resmi SIUPKK & Kemitraan KSOP Balikpapan",
        "Jaringan Terintegrasi CIQP 24 Jam Non-Stop",
        "Dukungan Armada Speedboat Operasional Sendiri",
        "Akuntabilitas Proforma Disbursement Account (PDA)"
      ],
      complianceTitle: "Kepatuhan Regulasi & Keselamatan",
      complianceText: "Menjunjung tinggi standar ISPS Code, keselamatan pelayaran permenhub, dan kepatuhan penuh perpajakan serta kepabeanan Republik Indonesia.",
      zeroDemurrageTitle: "Disiplin Waktu Zero-Demurrage",
      zeroDemurrageText: "Percepatan proses izin tambat, pandu tunda, dan clearance in/out guna menghemat operational cost dan mencegah biaya demurrage bagi pemilik kapal.",
      execKicker: "Manajemen & Kontak Eksekutif",
      execLead: "Dipimpin langsung oleh Mr. Jasmin, memastikan setiap kapal yang masuk ke perairan Balikpapan mendapat asistensi langsung dari tim operasional berpengalaman, profesional serta dapat diandalkan.",
      execDirectPhone: "Telepon / WhatsApp Langsung:",
      execDirectEmail: "Email Koordinasi Operasional:",
      execLocation: "Pusat Koordinasi Lapangan:",
      execLocationVal: "Balikpapan Selatan, Kalimantan Timur",
      execButton: "Hubungi Mr. Jasmin Sekarang",
      authorityTitle: "Koordinasi Instansi Pelabuhan Balikpapan:",
      authorities: [
        "Kantor Kesyahbandaran dan Otoritas Pelabuhan (KSOP) Kelas I Balikpapan",
        "Kantor Pengawasan dan Pelayanan Bea dan Cukai (KPPBC) Balikpapan",
        "Kantor Imigrasi Kelas I TPI Balikpapan",
        "Balai Karantina Kesehatan & Karantina Hewan Ikan Tumbuhan Balikpapan",
        "PT Pelindo (Persero) Regional IV Cabang Balikpapan"
      ]
    },
    services: {
      kicker: "Layanan Terpadu Kepelabuhanan & Maritim",
      title: "Solusi Logistik & Keagenan Kapal Menyeluruh di Balikpapan",
      subtitle: "Mulai dari penyambutan kapal dari ambang luar, pengurusan izin labuh dan sandar, penyediaan perbekalan, hingga charter armada pengangkut kargo.",
      badge: "Standar Keselamatan Internasional & Kepatuhan KSOP",
      viewDetail: "Lihat Rincian Layanan",
      orderService: "Pesan Layanan",
      modalScope: "Cakupan Operasional & Spesifikasi:",
      modalUseBtn: "Gunakan Layanan Ini di Formulir",
      modalCloseBtn: "Tutup",
      items: [
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
          ]
        },
        {
          id: "cargo-stevedoring",
          title: "Logistik Maritim & Bongkar Muat",
          kicker: "Cargo Handling & Stevedoring",
          tagline: "Penanganan kargo curah, kontainer, dan heavy lift project cargo di Pelabuhan Balikpapan.",
          description: "Pengelolaan stevedoring dan cargo tally profesional di Pelabuhan Semayang dan terminal-terminal industri Balikpapan. Spesialisasi penanganan alat berat pertambangan, material industri, batu bara, serta transshipment Ship-to-Ship (STS) di perairan Teluk Balikpapan.",
          features: [
            "Bongkar muat breakbulk, curah kering/cair, dan kontainer",
            "Heavy-lift cargo handling untuk alat berat tambang & industri migas",
            "Transshipment kargo Ship-to-Ship (STS) di Teluk Balikpapan",
            "Tally independent, marine survey coordination, dan trucking pelabuhan"
          ]
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
          ]
        },
        {
          id: "tug-barge-charter",
          title: "Tug & Barge / LCT Chartering",
          kicker: "Armada Angkutan Laut & Proyek",
          tagline: "Charter tongkang dan kapal tunda untuk koridor logistik maritim Balikpapan.",
          description: "Penyediaan armada Tugboat (1.200 - 3.200 HP) dan Deck Cargo Barge (230 - 330 ft) serta Landing Craft Tank (LCT) siap operasi. Jalur pengiriman strategis pasokan kargo umum, tiang pancang, pasir, dan peralatan berat di perairan Kalimantan Timur dan sekitarnya.",
          features: [
            "Time Charter (TC) dan Freight Charter (FC) resmi berlisensi",
            "Tongkang 230 ft, 270 ft, 300 ft, dan 330 ft standar BKI / Class",
            "Armada LCT dengan ramp-door untuk bongkar muat pantai/jetty dangkal",
            "Rute reguler Teluk Balikpapan, Jawa & Sulawesi"
          ]
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
      ]
    },
    calculator: {
      kicker: "Simulasi Operasional & Transparansi Biaya",
      title: "Kalkulator Estimasi Proforma Disbursement Account (PDA)",
      subtitle: "Hitung perkiraan kebutuhan koordinasi pelabuhan, formalitas CIQP KSOP Balikpapan, dan kebutuhan pendukung kapal Anda sebelum berlabuh.",
      step1: "1. Tipe Kapal / Armada",
      step2: "2. Lokasi Sandar / Labuh di Balikpapan",
      step3: "3. Layanan Tambahan yang Dibutuhkan",
      gtLabel: "Gross Tonnage (GT)",
      stayLabel: "Estimasi Sandar/Labuh",
      daysUnit: "Hari",
      ciqpIncluded: "Formalitas CIQP (KSOP, Bea Cukai, Imigrasi, Karantina)",
      ciqpBase: "Termasuk Dasar",
      freshWater: "Suplai Air Tawar Bersih Kapal (Fresh Water)",
      crewChange: "Pergantian Kru / Crew Change (Antar-Jemput + Boat Transfer)",
      bunkerCoord: "Koordinasi Bunker MGO / HSD",
      cargoCoord: "Bongkar Muat / Stevedoring",
      summaryTitle: "Rincian Estimasi PDA Proforma",
      agencyBaseFee: "Jasa Keagenan Pokok & Formalitas CIQP:",
      stayFee: "Operasional Supervisi",
      freshWaterFee: "Suplai Air Tawar",
      crewFee: "Crew Handling & Boat",
      bunkerFee: "Asistensi Bunkering & Dokumen:",
      cargoFee: "Supervisi Stevedoring & Tally:",
      totalLabel: "Perkiraan Biaya Keagenan & Dukungan:",
      estimateDisclaimer: "*Estimasi Awal",
      tariffNote: "Tarif resmi pelabuhan (jasa labuh, tambat, pandu, tunda dari Pelindo/KSOP) dihitung resmi sesuai ship particulars resmi pada invoice proforma final.",
      applyBtn: "Gunakan Data Ini Pada Formulir Kontak"
    },
    terminals: {
      kicker: "Wilayah Kerja & Integrasi Google Maps",
      title: "Direktori Terminal Pelabuhan Balikpapan",
      subtitle: "PT Intan Samudera Agency melayani keagenan kapal dan bongkar muat di 7 titik dermaga industri utama dan pelabuhan umum Balikpapan:",
      openInMaps: "Buka di Google Maps",
      coords: "Koordinat:",
      authority: "Balikpapan Port Authority: KSOP Kelas I Balikpapan",
      draftLabel: "Kedalaman Draft:",
      berthLabel: "Panjang Dermaga:",
      cargoFocus: "Fokus Komoditas & Muatan:",
      locationLabel: "Alamat / Wilayah:",
      dispatchTitle: "Pusat Operasional Lapangan",
      dispatchText: "Tim operasional lapangan PT Intan Samudera Agency bersiaga 24/7 di Balikpapan untuk naik ke kapal, inspeksi dokumen CIQP, dan koordinasi pandu tunda."
    },
    testimonials: {
      kicker: "Bukti Kinerja & Kepercayaan Klien",
      title: "Testimoni Pemilik Kapal, Operator, & Kontraktor",
      subtitle: "Reputasi kami dibangun di atas ketepatan waktu port clearance, efisiensi biaya tambat, dan respon cepat 24 jam dalam menangani kapal niaga di Balikpapan.",
      trustBannerTitle: "Mitra Terpercaya Bagi Ship Owner Domestik & Internasional",
      trustBannerText: "Telah melayani ratusan kapal curah kering (batu bara/nikel), kapal tanker CPO/minyak, armada tongkang, dan kapal suplai lepas pantai di Balikpapan.",
      portCode: "Balikpapan Port Authority Code: IDBPN"
    },
    contact: {
      kicker: "Koordinasi Bisnis & Permintaan Resmi",
      title: "Formulir Kontak Profesional Keagenan & Logistik",
      subtitle: "Hubungi manajemen PT Intan Samudera Agency untuk permintaan jadwal port call, kalkulasi PDA proforma, charter armada tongkang, atau konsultasi logistik maritim di Balikpapan.",
      cardTitle: "Kontak Resmi & Manajemen",
      directorLabel: "Contact Person (24 Jam):",
      directorRoleText: "Penanggung Jawab Operasional & Hubungan Pemilik Kapal",
      waDirect: "WhatsApp Langsung (24 Jam)",
      emailLabel: "Official Ops Email:",
      emailSub: "Untuk pengiriman Dokumen Kapal, Crew List, Manifest, & Permintaan Proforma PDA",
      addressLabel: "Alamat Kantor Operasional:",
      hoursLabel: "Waktu Layanan Pelabuhan:",
      noticeTitle: "Notice for Ship Masters & Foreign Owners:",
      noticeText: "Please forward ETA updates (72 / 48 / 24 hours prior) along with Last Port Clearance, Crew List, and Cargo Manifest to opsbpn@intansamudera.com for immediate PPK/SPM processing at Balikpapan port authorities.",
      formTitle: "Formulir Permintaan Penawaran & Port Call",
      formSubtitle: "Silakan isi rincian kapal atau rencana logistik Anda di Balikpapan.",
      serviceTypeLabel: "Jenis Layanan Maritim",
      terminalLabel: "Terminal / Titik Labuh di Balikpapan",
      vesselNameLabel: "Nama Kapal / IMO / Call Sign",
      vesselPlaceholder: "Contoh: MV Oceanic Pioneer / TB Bima 08",
      etaLabel: "Estimasi Tiba (ETA Balikpapan)",
      fullNameLabel: "Nama Lengkap Anda",
      companyLabel: "Nama Perusahaan / Organisasi",
      companyPlaceholder: "PT / Shipping Line / Charterer",
      emailInputLabel: "Email Perusahaan",
      phoneInputLabel: "Nomor Telepon / WhatsApp",
      messageLabel: "Rincian Kebutuhan Operasional / Kargo / Catatan",
      messagePlaceholder: "Tuliskan detail spesifikasi kapal, tonase, kebutuhan kru, bunkering, atau instruksi khusus...",
      fastResponseNote: "Respon cepat resmi langsung dari operasional Balikpapan.",
      submitBtn: "Kirim Permintaan Resmi",
      submittingBtn: "Mengirim Data...",
      successTitle: "Permintaan Koordinasi Berhasil Diterima",
      refLabel: "Nomor Referensi:",
      summaryTitle: "Ringkasan Informasi yang Diteruskan:",
      forwardWaBtn: "Teruskan Langsung ke WhatsApp Mr. Jasmin (+6282229357500)",
      newInquiryBtn: "Kirim Permintaan Baru",
      errName: "Mohon lengkapi Nama Lengkap Anda.",
      errCompany: "Mohon cantumkan Nama Perusahaan / Organisasi.",
      errEmail: "Mohon masukkan alamat email yang valid.",
      errPhone: "Mohon masukkan nomor telepon/WhatsApp yang valid (minimal 9 digit)."
    },
    faq: {
      kicker: "Pertanyaan Umum & Prosedur Port Agency",
      title: "Informasi Operasional Pelabuhan Balikpapan",
      subtitle: "Panduan praktis perizinan kapal, syarat dokumen CIQP, dan koordinasi logistik maritim bersama PT Intan Samudera Agency."
    },
    footer: {
      desc: "Perusahaan jasa keagenan kapal (shipping agency) dan logistik maritim resmi yang berbasis di Balikpapan, Kalimantan Timur. Melayani perizinan CIQP, stevedoring kargo, pergantian awak kapal, suplai bunker & air tawar, serta charter armada laut perairan Balikpapan.",
      portCode: "Kode Pelabuhan Balikpapan:",
      authority: "Wilayah Hukum Otoritas Pelabuhan:",
      navTitle: "Navigasi Halaman",
      contactTitle: "Kontak & Operasional",
      contactPersonLabel: "Contact Person:",
      phoneLabel: "Telepon / WhatsApp 24 Jam:",
      emailLabel: "Email Resmi Operasional:",
      domicileLabel: "Domisili Operasional:",
      ctaBtn: "Kirim Permintaan Port Call",
      copyright: "Seluruh hak cipta dilindungi undang-undang.",
      locationTag: "Balikpapan, Kalimantan Timur · Indonesia Maritime Shipping Agency"
    }
  },
  en: {
    nav: {
      profile: "Company Profile",
      services: "Maritime Services",
      calculator: "PDA Estimator",
      terminals: "Balikpapan Terminals",
      testimonials: "Testimonials",
      contactBtn: "Contact Operations",
      contactPerson: "Contact",
      drawerContactBtn: "Contact Operations / Request Port Call"
    },
    hero: {
      kicker1: "General Shipping Agency Balikpapan",
      kicker2: "KSOP Class I Balikpapan Accredited",
      kicker3: "Balikpapan Bay Waters",
      title: "Trusted Shipping Agency & Maritime Logistics Partner in Balikpapan",
      description: "PT Intan Samudera Agency provides Inward & Outward Port Clearance (CIQP), cargo stevedoring, crew handling & crew change, bunker supply, and tug & barge chartering for the Balikpapan maritime corridor.",
      ctaPrimary: "Request Port Call / Rate Proposal",
      ctaWhatsApp: "WhatsApp",
      contactPhone: "Direct Phone / WhatsApp",
      contactEmail: "Official Ops Email",
      contactEmailSub: "Balikpapan Operations",
      stats: [
        { value: "24/7", label: "Port Agency & Emergency Ops", detail: "Day & night operational standby" },
        { value: "480+", label: "Vessel Calls Handled", detail: "Tankers, Bulkers, Tugs & Barges, LCT" },
        { value: "99.8%", label: "On-Time Clearance Rate", detail: "Zero-delay official CIQP coordination" },
        { value: "100%", label: "Balikpapan Terminals Covered", detail: "Semayang, LDC, KRN, WPS, ARC, ILSS" }
      ]
    },
    profile: {
      kicker: "Company Profile & Operational Commitment",
      title: "Premier Shipping Agency & Marine Logistics Based in Balikpapan's Maritime Hub",
      lead: "PT INTAN SAMUDERA AGENCY was established with dedication to delivering transparent, swift, and safety-compliant shipping agency (General Agent & Sub-Agent) and maritime logistics services across Balikpapan Bay.",
      body1Title: "Strategic Maritime Gateway of East Kalimantan",
      body1Text: "The city of Balikpapan is the most crucial maritime hub in East Kalimantan, with dense marine traffic comprising merchant vessels, CPO & chemical tankers, coal barges, and offshore supply vessels. Operating directly across Port of Semayang, Kariangau industrial terminals, and Balikpapan Bay anchorage, PT Intan Samudera Agency acts as the authorized representative for Ship Owners, Charterers, and Ship Managers worldwide.",
      body2Text: "We deploy dedicated tugboats, fast launch boats for crew change, and certified field agency teams to ensure punctuality of berthing schedules, speedy issuance of Port Clearance (SPB), and optimal vessel turnaround.",
      pillars: [
        "Official SIUPKK License & KSOP Class I Balikpapan Accreditation",
        "24/7 Integrated CIQP Port Clearance Network",
        "Dedicated Speedboat & Launch Boat Fleet",
        "Transparent Proforma Disbursement Account (PDA) Standards"
      ],
      complianceTitle: "Regulatory Compliance & Maritime Safety",
      complianceText: "Upholding strict ISPS Code standards, Ministry of Transportation safety regulations, and full compliance with Indonesian customs and tax authorities.",
      zeroDemurrageTitle: "Zero-Demurrage Operational Discipline",
      zeroDemurrageText: "Expediting pilotage, berthing permits, and inward/outward CIQP clearance to eliminate idle port time and protect ship owners from demurrage penalties.",
      execKicker: "Executive Contact & Leadership",
      execLead: "Led directly by Mr. Jasmin, ensuring every vessel calling at Balikpapan waters receives prompt, professional, and dependable on-site operational support.",
      execDirectPhone: "Direct Phone / WhatsApp:",
      execDirectEmail: "Operations Coordination Email:",
      execLocation: "Field Operations Center:",
      execLocationVal: "South Balikpapan, East Kalimantan",
      execButton: "Contact Mr. Jasmin Now",
      authorityTitle: "Balikpapan Port Authority Coordination:",
      authorities: [
        "Port Authority & Harbour Master (KSOP) Class I Balikpapan",
        "Customs & Excise Office (KPPBC) Balikpapan",
        "Immigration Office Class I TPI Balikpapan",
        "Port Health & Quarantine Authority Balikpapan",
        "PT Pelindo (Persero) Regional IV Balikpapan Branch"
      ]
    },
    services: {
      kicker: "Integrated Port & Maritime Solutions",
      title: "Comprehensive Marine Logistics & Vessel Agency in Balikpapan",
      subtitle: "From vessel reception at the fairway pilot station, inward/outward CIQP clearance, provisions and bunker delivery, to cargo barge chartering.",
      badge: "International Safety Standards & KSOP Compliance",
      viewDetail: "View Service Details",
      orderService: "Request Service",
      modalScope: "Operational Scope & Specifications:",
      modalUseBtn: "Apply This Service to Form",
      modalCloseBtn: "Close",
      items: [
        {
          id: "shipping-agency",
          title: "Shipping Agency & Port Clearance",
          kicker: "Core Vessel Agency",
          tagline: "Inward & Outward CIQP Clearance with zero-delay operational guarantee.",
          description: "Serving as trusted General Agent and Sub-Agent for domestic merchant vessels and ocean-going foreign tonnage. Daily direct coordination with KSOP Class I Balikpapan, Customs, Immigration, and Quarantine for anchorage and berthing clearances.",
          features: [
            "Official & transparent Inward/Outward Port Clearance (CIQP)",
            "Accurate and competitive Proforma Disbursement Accounts (PDA)",
            "Pilotage booking, escort tugs, and berth allocation oversight",
            "Prompt Port Clearance (Surat Persetujuan Berlayar / SPB) issuance"
          ]
        },
        {
          id: "cargo-stevedoring",
          title: "Maritime Cargo & Stevedoring Logistics",
          kicker: "Cargo Handling & Stevedoring",
          tagline: "Professional handling for bulk cargo, containers, and heavy lift project cargo in Balikpapan.",
          description: "Professional stevedoring management and independent cargo tally at Port of Semayang and Balikpapan industrial jetties. Specialized in mining heavy machinery, industrial structural steel, coal, and Ship-to-Ship (STS) transshipment in Balikpapan Bay.",
          features: [
            "Breakbulk, dry/liquid bulk, and container stevedoring",
            "Heavy-lift handling for mining equipment & energy machinery",
            "Ship-to-Ship (STS) transshipment in sheltered Balikpapan Bay",
            "Independent tally, marine survey coordination, and port trucking"
          ]
        },
        {
          id: "vessel-husbandry",
          title: "Vessel Husbandry & Crew Handling",
          kicker: "Husbandry & Ship Support",
          tagline: "24/7 crew change turnaround, provisions, and offshore marine husbanding.",
          description: "Comprehensive care for masters and marine crew calling at Balikpapan. Supported by dedicated offshore crew transfer launch boats, OKTB immigration processing for foreign crew, hotel accommodation, and direct airport transfers to SAMS Sepinggan International Airport.",
          features: [
            "Crew Change (Sign On / Sign Off) for Indonesian and foreign seafarers",
            "Immigration OKTB, shore pass, emergency medical evacuation, and passport renewal",
            "Secure Cash to Master (CTM) delivery onboard",
            "Fresh provisions, bonded stores, and marine technical supplies"
          ]
        },
        {
          id: "tug-barge-charter",
          title: "Tug & Barge / LCT Chartering",
          kicker: "Marine Fleet & Cargo Transport",
          tagline: "Reliable tug and barge charters for East Kalimantan coastal corridors.",
          description: "Providing modern ocean-going tugboats (1,200 - 3,200 HP), Class-certified deck cargo barges (230 - 330 ft), and ramp-door Landing Craft Tanks (LCT). Strategic transport routes for building aggregates, heavy machinery, and industrial project cargo.",
          features: [
            "Licensed Time Charter (TC) and Freight Charter (FC) contracts",
            "230 ft, 270 ft, 300 ft, and 330 ft barges meeting Class/BKI standards",
            "LCT vessels with shallow draft and bow ramp doors for beach/jetty landings",
            "Regular coastal routes across Balikpapan, Java & Sulawesi"
          ]
        },
        {
          id: "bunker-water-supply",
          title: "Bunker & Fresh Water Supply",
          kicker: "Marine Fuel & Fresh Water Bunkering",
          tagline: "Certified Marine Gas Oil (MGO/HSD) and laboratory-tested potable water.",
          description: "Supply of officially licensed industrial marine fuel (MGO/B35 HSD) with quality certificates, delivered via certified bunker barge at Balikpapan Bay anchorage or tank truck at berth. High-pressure delivery of potable fresh water up to hundreds of metric tons per call.",
          features: [
            "Certified MGO / B35 HSD bunker meeting Pertamina marine specs",
            "Anchorage delivery via bunker barge or berth delivery via tank trucks",
            "Sterile potable fresh water supply with high pumping flow rates",
            "Marine engine lubricants (cylinder & system oils) in all grades"
          ]
        },
        {
          id: "technical-emergency",
          title: "Ship Spares & Technical Support",
          kicker: "Technical Support & Emergency Response",
          tagline: "Customs clearance for spares in transit and underwater diving hull inspections.",
          description: "Immediate technical liaison when vessels encounter engine trouble or require mandatory periodic inspections in Balikpapan. Handling 'Ship Spares in Transit' customs clearance from Sepinggan Airport directly to shipboard, diving surveys (UWILD), and certified waste disposal.",
          features: [
            "Expedited customs clearance for Ship Spares in Transit via airport",
            "Underwater Inspection in Lieu of Drydocking (UWILD) by Class-approved divers",
            "Certified shipboard garbage, sludge, and slop disposal with KSOP manifests",
            "24/7 technical hotline and rapid operational boarding assistance"
          ]
        }
      ]
    },
    calculator: {
      kicker: "Operational Simulation & Cost Transparency",
      title: "Proforma Disbursement Account (PDA) Estimator",
      subtitle: "Calculate an early operational estimate for Balikpapan port clearance, KSOP CIQP formalities, and husbandry services before your vessel calls.",
      step1: "1. Vessel Type & Fleet Category",
      step2: "2. Berthing / Anchorage Location in Balikpapan",
      step3: "3. Ancillary Marine Services Required",
      gtLabel: "Gross Tonnage (GT)",
      stayLabel: "Estimated Port Stay",
      daysUnit: "Days",
      ciqpIncluded: "CIQP Formalities (KSOP, Customs, Immigration, Quarantine)",
      ciqpBase: "Included Base",
      freshWater: "Potable Fresh Water Supply",
      crewChange: "Crew Change (Airport Transfer & Launch Boat)",
      bunkerCoord: "MGO / HSD Bunker Coordination",
      cargoCoord: "Stevedoring / Cargo Supervision",
      summaryTitle: "Estimated Proforma PDA Breakdown",
      agencyBaseFee: "Agency Basic Fee & CIQP Formalities:",
      stayFee: "Operational Supervision",
      freshWaterFee: "Fresh Water Supply",
      crewFee: "Crew Handling & Launch Boat",
      bunkerFee: "Bunkering Assistance & Documentation:",
      cargoFee: "Stevedoring Supervision & Tally:",
      totalLabel: "Estimated Agency & Support Cost:",
      estimateDisclaimer: "*Preliminary Estimate",
      tariffNote: "Official statutory port dues (anchorage, berthage, pilotage, and towage by Pelindo/KSOP) are billed strictly according to official vessel particulars on final proforma.",
      applyBtn: "Apply This Data to Contact Form"
    },
    terminals: {
      kicker: "Operational Locations & Google Maps Integration",
      title: "Balikpapan Marine Terminals Directory",
      subtitle: "PT Intan Samudera Agency provides vessel agency and cargo handling across 7 major industrial terminals and the public port in Balikpapan:",
      openInMaps: "Open in Google Maps",
      coords: "Coordinates:",
      authority: "Balikpapan Port Authority: KSOP Class I Balikpapan",
      draftLabel: "Draft Depth:",
      berthLabel: "Berth Length:",
      cargoFocus: "Primary Cargo & Commodities:",
      locationLabel: "Address / Zone:",
      dispatchTitle: "Field Operations Command",
      dispatchText: "PT Intan Samudera Agency's field agents are on 24/7 duty in Balikpapan to board vessels, expedite CIQP clearance, and coordinate pilotage and towage."
    },
    testimonials: {
      kicker: "Track Record & Client Confidence",
      title: "Client Testimonials from Ship Owners & Operators",
      subtitle: "Our reputation is built on timely port clearance, demurrage avoidance, and proactive 24/7 communication for commercial vessels calling at Balikpapan.",
      trustBannerTitle: "Trusted Partner for Domestic & International Tonnage",
      trustBannerText: "Proudly serving dry bulk carriers (coal/nickel), CPO/product tankers, project barges, and offshore supply vessels calling at Balikpapan waters.",
      portCode: "Balikpapan Port Authority Code: IDBPN"
    },
    contact: {
      kicker: "Business Coordination & Port Enquiries",
      title: "Professional Shipping Agency Contact Form",
      subtitle: "Get in touch with PT Intan Samudera Agency management for port call appointments, proforma PDA requests, tug & barge charters, or maritime logistics in Balikpapan.",
      cardTitle: "Official Contact & Operations",
      directorLabel: "Contact Person (24 Hours):",
      directorRoleText: "Operations Management & Principal Relations",
      waDirect: "Direct WhatsApp (24/7)",
      emailLabel: "Official Ops Email:",
      emailSub: "For Ship Particulars, Crew Lists, Cargo Manifests, and Proforma PDA requests",
      addressLabel: "Operational Office Address:",
      hoursLabel: "Port Service Coverage:",
      noticeTitle: "Notice for Ship Masters & Foreign Owners:",
      noticeText: "Please forward ETA updates (72 / 48 / 24 hours prior) along with Last Port Clearance, Crew List, and Cargo Manifest to opsbpn@intansamudera.com for immediate PPK/SPM processing at Balikpapan port authorities.",
      formTitle: "Port Call & Quotation Request Form",
      formSubtitle: "Please provide vessel particulars and your planned operational scope in Balikpapan.",
      serviceTypeLabel: "Service Category",
      terminalLabel: "Destination Terminal / Anchorage in Balikpapan",
      vesselNameLabel: "Vessel Name / IMO / Call Sign",
      vesselPlaceholder: "e.g. MV Oceanic Pioneer / TB Bima 08",
      etaLabel: "Estimated Time of Arrival (ETA Balikpapan)",
      fullNameLabel: "Your Full Name",
      companyLabel: "Company / Organization Name",
      companyPlaceholder: "Shipping Line / Charterer / Operator",
      emailInputLabel: "Corporate Email Address",
      phoneInputLabel: "Phone / WhatsApp Number",
      messageLabel: "Operational Requirements / Cargo Details / Special Instructions",
      messagePlaceholder: "State your vessel GRT/DWT, LOA, draft, crew change needs, bunkering volume, or cargo details...",
      fastResponseNote: "Prompt official response directly from our Balikpapan dispatch desk.",
      submitBtn: "Submit Official Inquiry",
      submittingBtn: "Submitting Details...",
      successTitle: "Coordination Request Received Successfully",
      refLabel: "Reference ID:",
      summaryTitle: "Summary of Submitted Details:",
      forwardWaBtn: "Forward Directly to Mr. Jasmin on WhatsApp (+6282229357500)",
      newInquiryBtn: "Submit Another Request",
      errName: "Please provide your full name.",
      errCompany: "Please state your company or organization name.",
      errEmail: "Please provide a valid email address.",
      errPhone: "Please provide a valid phone or WhatsApp number (min. 9 digits)."
    },
    faq: {
      kicker: "Frequently Asked Questions & Agency Procedures",
      title: "Balikpapan Port Operations Guide",
      subtitle: "Practical guidance for vessel clearances, CIQP documentation, and maritime support with PT Intan Samudera Agency."
    },
    footer: {
      desc: "Officially licensed general shipping agency and maritime logistics company based in Balikpapan, East Kalimantan. Providing CIQP clearances, stevedoring, crew change, bunker & water supply, and marine charters across Balikpapan Bay.",
      portCode: "Balikpapan Port Code:",
      authority: "Governing Port Authority:",
      navTitle: "Navigation",
      contactTitle: "Contact & Operations",
      contactPersonLabel: "Contact Person:",
      phoneLabel: "24/7 Phone / WhatsApp:",
      emailLabel: "Official Operations Email:",
      domicileLabel: "Operational Office:",
      ctaBtn: "Request Port Call",
      copyright: "All rights reserved.",
      locationTag: "Balikpapan, East Kalimantan · Indonesia Maritime Shipping Agency"
    }
  }
};
