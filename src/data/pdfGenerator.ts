/**
 * PDF Generator Utility for PT INTAN SAMUDERA AGENCY
 * Generates official Proforma Disbursement Account (PDA) quotations,
 * Corporate Profile, and Port Terminal Guides using jsPDF.
 */

import { jsPDF } from 'jspdf';
import { COMPANY_CONTACT, PORT_TERMINALS, SERVICES_LIST } from './companyData';

export interface PdaItem {
  category: string;
  description: string;
  unit?: string;
  amount: number;
}

export interface PdaPdfData {
  vesselName?: string;
  vesselType: string;
  grossTonnage: number;
  portStayDays: number;
  terminal: string;
  clientName?: string;
  companyName?: string;
  items: PdaItem[];
  totalAmount: number;
  notes?: string;
  language?: 'id' | 'en';
}

// Helper to format currency
const formatIDR = (num: number): string => {
  return 'IDR ' + num.toLocaleString('id-ID');
};

const formatUSD = (num: number): string => {
  // Approximate USD rate for maritime reference (1 USD ~ 16,000 IDR)
  const usd = Math.round(num / 16000);
  return 'USD ~' + usd.toLocaleString('en-US');
};

/**
 * Generate and download an official Proforma Disbursement Account (PDA) PDF
 */
export const downloadPdaPdf = (data: PdaPdfData) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const isEn = data.language === 'en';
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  // Generate Reference Number
  const today = new Date();
  const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
  const refNo = `ISA-PDA/${dateStr}/${Math.floor(1000 + Math.random() * 9000)}`;

  // Header Background Banner
  doc.setFillColor(15, 39, 74); // Deep Navy (#0f274a)
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Gold accent line
  doc.setFillColor(217, 119, 6); // Amber Gold
  doc.rect(0, 38, pageWidth, 2, 'F');

  // Company Header Text
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('PT INTAN SAMUDERA AGENCY', margin, 14);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(203, 213, 225); // Slate 300
  doc.text('GENERAL SHIPPING AGENCY & MARITIME LOGISTICS SPECIALIST', margin, 19.5);
  doc.text('Accredited by KSOP Kelas I Balikpapan · ISPS Code Compliant', margin, 24);
  doc.text('Balikpapan, East Kalimantan, Indonesia · Tel/WhatsApp: +62 822-2935-7500', margin, 28.5);
  doc.text('Official Email: opsbpn@intansamudera.com · 24/7 Operations Center', margin, 33);

  // Document Badge on Right
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth - margin - 42, 8, 42, 22, 2, 2, 'F');
  doc.setTextColor(15, 39, 74);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.text('OFFICIAL PDA', pageWidth - margin - 37, 14);
  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('PORT OF BALIKPAPAN', pageWidth - margin - 40, 19);
  doc.text('CODE: IDBPN', pageWidth - margin - 32, 24);

  // Title Section
  let y = 47;
  doc.setTextColor(15, 39, 74);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text(
    isEn
      ? 'PROFORMA DISBURSEMENT ACCOUNT (PDA) ESTIMATE'
      : 'ESTIMASI PROFORMA DISBURSEMENT ACCOUNT (PDA)',
    margin,
    y
  );

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(
    isEn
      ? `Ref: ${refNo}  |  Date: ${today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}  |  Port: Balikpapan Bay (IDBPN)`
      : `No. Ref: ${refNo}  |  Tanggal: ${today.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}  |  Pelabuhan: Balikpapan (IDBPN)`,
    margin,
    y
  );

  // Vessel Particulars & Client Information Card
  y += 6;
  doc.setFillColor(248, 250, 252); // Slate 50
  doc.setDrawColor(226, 232, 240); // Slate 200
  doc.roundedRect(margin, y, contentWidth, 29, 2, 2, 'FD');

  const col1 = margin + 4;
  const col2 = margin + contentWidth / 2 + 2;
  const cardStartY = y + 5;

  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text(isEn ? 'Vessel Name / Type:' : 'Nama Kapal / Jenis:', col1, cardStartY);
  doc.text(isEn ? 'Gross Tonnage (GT):' : 'Tonase Kotor (GT):', col1, cardStartY + 5);
  doc.text(isEn ? 'Estimated Port Stay:' : 'Estimasi Durasi Labuh:', col1, cardStartY + 10);
  doc.text(isEn ? 'Destination Terminal:' : 'Terminal / Titik Sandar:', col1, cardStartY + 15);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  const vesselDisplay = data.vesselName ? `${data.vesselName} (${data.vesselType.toUpperCase()})` : data.vesselType.toUpperCase();
  doc.text(vesselDisplay, col1 + 35, cardStartY);
  doc.text(`${data.grossTonnage.toLocaleString('id-ID')} GT`, col1 + 35, cardStartY + 5);
  doc.text(`${data.portStayDays} ${isEn ? 'Days' : 'Hari'}`, col1 + 35, cardStartY + 10);
  doc.text(data.terminal, col1 + 35, cardStartY + 15);

  // Right column of card
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(71, 85, 105);
  doc.text(isEn ? 'Principal / Client:' : 'Pemilik / Pencharter:', col2, cardStartY);
  doc.text(isEn ? 'Company / Operator:' : 'Perusahaan / Operator:', col2, cardStartY + 5);
  doc.text(isEn ? 'Appointed Agent:' : 'Agen Pelaksana:', col2, cardStartY + 10);
  doc.text(isEn ? 'Operations Desk:' : 'Penanggung Jawab:', col2, cardStartY + 15);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(data.clientName || (isEn ? 'Master / Chief Officer' : 'Nakhoda / Pihak Kapal'), col2 + 35, cardStartY);
  doc.text(data.companyName || (isEn ? 'Commercial Shipping Partner' : 'Mitra Pelayaran Niaga'), col2 + 35, cardStartY + 5);
  doc.text('PT INTAN SAMUDERA AGENCY', col2 + 35, cardStartY + 10);
  doc.text('Mr. Jasmin (+62 822-2935-7500)', col2 + 35, cardStartY + 15);

  // Table Header
  y += 35;
  doc.setFillColor(15, 39, 74);
  doc.rect(margin, y, contentWidth, 7.5, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text(isEn ? 'NO.' : 'NO.', margin + 3, y + 5);
  doc.text(isEn ? 'ITEM / SERVICE DESCRIPTION' : 'URAIAN JASA & LAYANAN OPERASIONAL', margin + 14, y + 5);
  doc.text(isEn ? 'QUANTITY / UNIT' : 'KUANTITAS / UNIT', margin + 115, y + 5);
  doc.text(isEn ? 'ESTIMATED AMOUNT' : 'ESTIMASI BIAYA (IDR)', pageWidth - margin - 3, y + 5, { align: 'right' });

  // Table Body Rows
  y += 7.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);

  data.items.forEach((item, index) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, y, contentWidth, 7, 'F');
    }

    doc.setTextColor(71, 85, 105);
    doc.text(String(index + 1), margin + 4, y + 4.8);

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.text(item.category + ':', margin + 14, y + 4.8);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    doc.text(item.description, margin + 48, y + 4.8);

    doc.setTextColor(100, 116, 139);
    doc.text(item.unit || '-', margin + 115, y + 4.8);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 39, 74);
    doc.text(formatIDR(item.amount), pageWidth - margin - 3, y + 4.8, { align: 'right' });

    // Bottom border for each row
    doc.setDrawColor(241, 245, 249);
    doc.line(margin, y + 7, pageWidth - margin, y + 7);

    y += 7;
  });

  // Total Section
  y += 2;
  doc.setFillColor(238, 242, 255); // Indigo 50
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(margin, y, contentWidth, 14, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? 'TOTAL ESTIMATED AGENCY & HUSBANDRY COST:' : 'TOTAL ESTIMASI BIAYA KEAGENAN & OPERASIONAL:',
    margin + 4,
    y + 6
  );

  doc.setFontSize(10);
  doc.setTextColor(180, 83, 9); // Amber 700
  doc.text(formatIDR(data.totalAmount), pageWidth - margin - 4, y + 6, { align: 'right' });

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(
    isEn
      ? `Indicative Foreign Currency Reference: ${formatUSD(data.totalAmount)} (Exchange rates may fluctuate)`
      : `Referensi Valuta Asing Indikatif: ${formatUSD(data.totalAmount)} (Mengikuti kurs resmi transaksi perbankan)`,
    margin + 4,
    y + 11
  );

  // Notes & Statutory Disclaimer
  y += 18;
  doc.setFillColor(254, 252, 232); // Amber 50
  doc.setDrawColor(254, 240, 138); // Amber 200
  doc.roundedRect(margin, y, contentWidth, 23, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(146, 64, 14); // Amber 800
  doc.text(isEn ? 'IMPORTANT STATUTORY & OPERATIONAL CONDITIONS:' : 'CATATAN OPERASIONAL & KETENTUAN RESMI:', margin + 4, y + 5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(120, 53, 15);
  const notes = isEn
    ? [
        '1. Official Port Dues (Tarif Labuh, Tambat, Pandu, dan Tunda) are billed by Pelindo / KSOP strictly per official Ship Particulars & actual hours.',
        '2. This preliminary estimate is non-binding until confirmed with vessel Certificate of Registry, International Tonnage Certificate, and final ETA notice.',
        '3. 24/7 dedicated boarding officer and launch boat are stationed at Balikpapan Bay to expedite CIQP formalities immediately on arrival.',
      ]
    : [
        '1. Tarif jasa pelabuhan resmi (Labuh, Tambat, Pandu, dan Tunda Pelindo/KSOP) dihitung resmi sesuai ship particulars resmi pada invoice proforma final.',
        '2. Estimasi ini merupakan acuan awal sebelum kapal tiba (pre-arrival). Mohon kirimkan ETA update (72/48/24 jam) beserta manifest dan crew list.',
        '3. Petugas keagenan PT Intan Samudera Agency bersiaga 24 jam dengan armada speedboat di Balikpapan untuk proses CIQP zero-delay.',
      ];

  notes.forEach((note, idx) => {
    doc.text(note, margin + 4, y + 9.5 + idx * 4);
  });

  // Signatures & Stamp Block
  y += 27;
  const sigBoxWidth = (contentWidth - 10) / 2;

  // Left: Instructions & Bank Remittance
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(15, 39, 74);
  doc.text(isEn ? 'REMITTANCE INSTRUCTIONS:' : 'INSTRUKSI PEMBAYARAN OPERASIONAL:', margin, y + 4);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(71, 85, 105);
  doc.text('PT INTAN SAMUDERA AGENCY', margin, y + 9);
  doc.text('Bank: Bank Mandiri / BCA Kantor Cabang Balikpapan', margin, y + 13);
  doc.text('Account Name: PT INTAN SAMUDERA AGENCY', margin, y + 17);
  doc.text('Ref Code: ' + refNo, margin, y + 21);

  // Right: Signature & Stamp
  const sigX = margin + sigBoxWidth + 10;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(71, 85, 105);
  doc.text(
    isEn ? 'Balikpapan, Authorized by Management:' : 'Balikpapan, Dikeluarkan secara resmi oleh:',
    sigX,
    y + 4
  );
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 39, 74);
  doc.text('PT INTAN SAMUDERA AGENCY', sigX, y + 8);

  // Digital Verification Stamp Graphic
  doc.setDrawColor(217, 119, 6);
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(sigX + 45, y + 10, 36, 15, 1, 1, 'FD');
  doc.setFontSize(6);
  doc.setTextColor(180, 83, 9);
  doc.text('VERIFIED DOCUMENT', sigX + 47, y + 15);
  doc.text('PORT CLEARANCE DESK', sigX + 47, y + 19);
  doc.text('BALIKPAPAN 24/7', sigX + 47, y + 23);

  // Signatory name
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Mr. Jasmin', sigX, y + 23);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(100, 116, 139);
  doc.text(isEn ? 'Managing Director / Operations Head' : 'Direktur / Kepala Operasional Balikpapan', sigX, y + 27);

  // Footer on bottom
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);

  doc.setFontSize(6.5);
  doc.setTextColor(148, 163, 184);
  doc.text(
    'PT INTAN SAMUDERA AGENCY · Perum Sepinggan Menara Griya Blok C No.9, RT. 063 Balikpapan Selatan · Tel: +62 822-2935-7500',
    margin,
    pageHeight - 7
  );
  doc.text(
    `Page 1 of 1 · Generated: ${today.toISOString().slice(0, 16).replace('T', ' ')} UTC`,
    pageWidth - margin,
    pageHeight - 7,
    { align: 'right' }
  );

  // Trigger browser download
  const filename = `ISA_PDA_Estimate_${data.vesselType.replace(/[^a-zA-Z0-9]/g, '_')}_${dateStr}.pdf`;
  doc.save(filename);
};

/**
 * Generate and download the comprehensive Corporate Profile PDF (3 Pages)
 */
export const downloadCompanyProfilePdf = (language: 'id' | 'en' = 'id') => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const isEn = language === 'en';
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  // ---------------- PAGE 1: COVER & EXECUTIVE OVERVIEW ----------------
  // Header Navy
  doc.setFillColor(15, 39, 74);
  doc.rect(0, 0, pageWidth, 55, 'F');
  doc.setFillColor(217, 119, 6);
  doc.rect(0, 55, pageWidth, 3, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('PT INTAN SAMUDERA AGENCY', margin, 20);

  doc.setFontSize(10);
  doc.setTextColor(251, 191, 36); // Amber
  doc.text('GENERAL SHIPPING AGENCY & MARITIME LOGISTICS SPECIALIST', margin, 28);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(203, 213, 225);
  doc.text('Official Representative for Ship Owners, Charterers & Marine Operators', margin, 35);
  doc.text('Operating Across Balikpapan Bay & Kariangau Industrial Zone Corridor', margin, 41);
  doc.text('Accredited by KSOP Kelas I Balikpapan · 24/7 Operations Command', margin, 47);

  // Executive Badge
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(pageWidth - margin - 48, 12, 48, 30, 2, 2, 'F');
  doc.setTextColor(15, 39, 74);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('COMPANY PROFILE', pageWidth - margin - 45, 20);
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('EDITION 2026', pageWidth - margin - 45, 26);
  doc.text('PORT CODE: IDBPN', pageWidth - margin - 45, 31);
  doc.setTextColor(180, 83, 9);
  doc.text('BALIKPAPAN HUB', pageWidth - margin - 45, 37);

  let y = 68;

  // Executive Summary Card
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? '1. EXECUTIVE OVERVIEW & STRATEGIC ADVANTAGE' : '1. IKHTISAR EKSEKUTIF & KEUNGGULAN STRATEGIS',
    margin,
    y
  );

  y += 6;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const overviewText = isEn
    ? 'PT INTAN SAMUDERA AGENCY is an accredited general shipping agency and maritime logistics company headquartered in the strategic hub of Balikpapan, East Kalimantan. Acting as a trusted local agent and sub-agent for premier domestic and international shipping lines, we guarantee zero-delay port turnaround, seamless CIQP clearance (Customs, Immigration, Quarantine, Port Authority), and end-to-end marine supply support.'
    : 'PT INTAN SAMUDERA AGENCY adalah perusahaan jasa keagenan kapal (shipping agency) dan logistik maritim resmi yang berbasis di Balikpapan, Kalimantan Timur. Bertindak sebagai mitra terpercaya bagi pemilik kapal (Ship Owner), penyewa (Charterer), dan operator pelayaran internasional maupun domestik, kami menjamin kepatuhan jadwal sandar, efisiensi biaya tambat kapal, serta kelancaran koordinasi CIQP (Customs, Immigration, Quarantine, KSOP Balikpapan).';

  const splitOverview = doc.splitTextToSize(overviewText, contentWidth);
  doc.text(splitOverview, margin, y);
  y += splitOverview.length * 4.5 + 4;

  // Key Metrics Banner (4 columns)
  const metricBoxW = (contentWidth - 9) / 4;
  const metrics = [
    { num: '24/7', label: isEn ? 'Port Operations' : 'Operasional Non-Stop', desc: isEn ? 'Always on standby' : 'Bersiaga siang & malam' },
    { num: '480+', label: isEn ? 'Vessel Calls' : 'Panggilan Kapal', desc: isEn ? 'Tankers, bulk, barges' : 'Tanker, bulker, tongkang' },
    { num: '99.8%', label: isEn ? 'On-Time Clearance' : 'Ketepatan Waktu', desc: isEn ? 'Zero demurrage target' : 'Bebas demurrage' },
    { num: '6 Hubs', label: isEn ? 'Terminals Covered' : 'Terminal Balikpapan', desc: isEn ? 'Semayang, LDC, KRN, etc.' : 'LDC, KRN, Semayang, dll' },
  ];

  metrics.forEach((m, idx) => {
    const boxX = margin + idx * (metricBoxW + 3);
    doc.setFillColor(241, 245, 249);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(boxX, y, metricBoxW, 19, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 39, 74);
    doc.text(m.num, boxX + metricBoxW / 2, y + 6, { align: 'center' });

    doc.setFontSize(6.8);
    doc.setTextColor(71, 85, 105);
    doc.text(m.label, boxX + metricBoxW / 2, y + 11, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(5.8);
    doc.setTextColor(148, 163, 184);
    doc.text(m.desc, boxX + metricBoxW / 2, y + 15, { align: 'center' });
  });

  y += 26;

  // Leadership & Corporate Structure
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? '2. LEADERSHIP & OPERATIONAL GOVERNANCE' : '2. KEPEMIMPINAN & TATA KELOLA OPERASIONAL',
    margin,
    y
  );

  y += 6;
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, y, contentWidth, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 39, 74);
  doc.text('Mr. Jasmin — Direktur / Managing Director', margin + 5, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  const leadDesc = isEn
    ? 'Direct operational leadership overseeing all marine clearance protocols, master liaisons, and agency dispatches. Every port call is monitored around the clock to guarantee swift vessel boarding at the fairway pilot station or anchorage.'
    : 'Memimpin langsung seluruh kegiatan operasional keagenan kapal dan hubungan dengan pemilik kapal. Menjamin setiap kapal yang masuk ke perairan Teluk Balikpapan mendapat pendampingan langsung dari agen lapangan bersertifikasi dan responsif.';
  const splitLead = doc.splitTextToSize(leadDesc, contentWidth - 10);
  doc.text(splitLead, margin + 5, y + 13);

  // Contact points within leadership
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(180, 83, 9);
  doc.text(`Direct Hotline / WhatsApp: ${COMPANY_CONTACT.phoneFormatted}`, margin + 5, y + 26);
  doc.text(`Ops Email: ${COMPANY_CONTACT.email}`, margin + 5, y + 31);
  doc.setTextColor(71, 85, 105);
  doc.text(`Office: ${COMPANY_CONTACT.officeAddress}`, margin + 5, y + 35);

  y += 45;

  // Accreditations & Port Partners
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? '3. STATUTORY ACCREDITATION & BALIKPAPAN AUTHORITIES' : '3. AKREDITASI RESMI & INSTANSI KEPELABUHANAN',
    margin,
    y
  );

  y += 6;
  const authorities = [
    isEn ? '1. Port Authority & Harbour Master (KSOP) Class I Balikpapan' : '1. Kantor Kesyahbandaran dan Otoritas Pelabuhan (KSOP) Kelas I Balikpapan',
    isEn ? '2. Customs & Excise Office (KPPBC) Balikpapan' : '2. Kantor Pengawasan dan Pelayanan Bea dan Cukai (KPPBC) Balikpapan',
    isEn ? '3. Port Health & Quarantine Authority Balikpapan' : '3. Balai Karantina Kesehatan & Karantina Pertanian Balikpapan',
    isEn ? '4. Directorate General of Immigration Class I TPI Balikpapan' : '4. Kantor Imigrasi Kelas I TPI Balikpapan',
    isEn ? '5. PT Pelabuhan Indonesia (Persero) Regional IV Balikpapan' : '5. PT Pelindo (Persero) Regional IV Cabang Balikpapan',
  ];

  authorities.forEach((auth, idx) => {
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 6, 'F');
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    doc.text(auth, margin + 4, y + 4.2);
    y += 7;
  });

  // Page 1 Footer
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
  doc.setFontSize(6.5);
  doc.setTextColor(148, 163, 184);
  doc.text('PT INTAN SAMUDERA AGENCY · BALIKPAPAN CORPORATE PROFILE', margin, pageHeight - 7);
  doc.text(`Page 1 of 3`, pageWidth - margin, pageHeight - 7, { align: 'right' });

  // ---------------- PAGE 2: CORE MARITIME SERVICES SCOPE ----------------
  doc.addPage();

  // Top Slim Header
  doc.setFillColor(15, 39, 74);
  doc.rect(0, 0, pageWidth, 22, 'F');
  doc.setFillColor(217, 119, 6);
  doc.rect(0, 22, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('PT INTAN SAMUDERA AGENCY', margin, 12);
  doc.setFontSize(7.5);
  doc.setTextColor(203, 213, 225);
  doc.text(
    isEn
      ? 'CORE MARITIME LOGISTICS & SHIPPING AGENCY SERVICES'
      : 'CAKUPAN LAYANAN KEAGENAN KAPAL & LOGISTIK MARITIM',
    margin,
    18
  );

  y = 31;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? '4. COMPREHENSIVE PORT & SHIPPING SERVICES' : '4. PORTFOLIO LAYANAN TERPADU KEPELABUHANAN',
    margin,
    y
  );

  y += 7;

  // 6 Services detailed cards (2 columns layout)
  const cardW = (contentWidth - 6) / 2;
  const cardH = 68;

  SERVICES_LIST.forEach((svc, index) => {
    const colIndex = index % 2;
    const rowIndex = Math.floor(index / 2);
    const cardX = margin + colIndex * (cardW + 6);
    const cardY = y + rowIndex * (cardH + 6);

    // Card background
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(cardX, cardY, cardW, cardH, 2, 2, 'FD');

    // Accent line on card
    doc.setFillColor(15, 39, 74);
    doc.rect(cardX, cardY, cardW, 2, 'F');

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 39, 74);
    doc.text(`${index + 1}. ${svc.title}`, cardX + 3.5, cardY + 7);

    // Subtitle
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(6.8);
    doc.setTextColor(180, 83, 9);
    doc.text(svc.tagline.slice(0, 60) + (svc.tagline.length > 60 ? '...' : ''), cardX + 3.5, cardY + 11.5);

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(71, 85, 105);
    const splitDesc = doc.splitTextToSize(svc.description, cardW - 7);
    doc.text(splitDesc.slice(0, 3), cardX + 3.5, cardY + 17);

    // Key Features bullet list
    let featY = cardY + 31;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(15, 39, 74);
    doc.text(isEn ? 'Key Capabilities:' : 'Fitur Utama Layanan:', cardX + 3.5, featY);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(51, 65, 85);
    svc.features.slice(0, 4).forEach((feat) => {
      featY += 4.5;
      const bulletText = `• ${feat}`;
      const splitBullet = doc.splitTextToSize(bulletText, cardW - 7);
      doc.text(splitBullet.slice(0, 2), cardX + 3.5, featY);
    });
  });

  // Page 2 Footer
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
  doc.setFontSize(6.5);
  doc.setTextColor(148, 163, 184);
  doc.text('PT INTAN SAMUDERA AGENCY · BALIKPAPAN CORPORATE PROFILE', margin, pageHeight - 7);
  doc.text(`Page 2 of 3`, pageWidth - margin, pageHeight - 7, { align: 'right' });

  // ---------------- PAGE 3: PORT TERMINALS & CONTACT ----------------
  doc.addPage();

  // Top Slim Header
  doc.setFillColor(15, 39, 74);
  doc.rect(0, 0, pageWidth, 22, 'F');
  doc.setFillColor(217, 119, 6);
  doc.rect(0, 22, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('PT INTAN SAMUDERA AGENCY', margin, 12);
  doc.setFontSize(7.5);
  doc.setTextColor(203, 213, 225);
  doc.text(
    isEn
      ? 'BALIKPAPAN PORT TERMINALS & OPERATIONAL INFRASTRUCTURE'
      : 'DIREKTORI TERMINAL PELABUHAN & INFRASTRUKTUR BALIKPAPAN',
    margin,
    18
  );

  y = 31;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? '5. BALIKPAPAN TERMINALS DIRECTORY & BERTH PARTICULARS' : '5. DIREKTORI TERMINAL INDUSTRI & DERMAGA BALIKPAPAN',
    margin,
    y
  );

  y += 7;

  // Table of Terminals
  doc.setFillColor(15, 39, 74);
  doc.rect(margin, y, contentWidth, 7, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7);
  doc.text(isEn ? 'TERMINAL NAME' : 'NAMA TERMINAL / FASILITAS', margin + 3, y + 4.8);
  doc.text(isEn ? 'TERMINAL TYPE' : 'TIPE FASILITAS', margin + 50, y + 4.8);
  doc.text(isEn ? 'MAX DRAFT' : 'DRAFT MAKS', margin + 98, y + 4.8);
  doc.text(isEn ? 'PRIMARY CARGO / COMMODITY' : 'KOMODITAS UTAMA', margin + 130, y + 4.8);

  y += 7;
  PORT_TERMINALS.forEach((term, idx) => {
    const isEven = idx % 2 === 0;
    if (isEven) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, y, contentWidth, 14, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(15, 23, 42);
    doc.text(term.name, margin + 3, y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(100, 116, 139);
    doc.text(term.location.slice(0, 32), margin + 3, y + 9);

    doc.setTextColor(71, 85, 105);
    doc.text(term.type.slice(0, 30), margin + 50, y + 5);
    doc.text(term.berthLength.slice(0, 32), margin + 50, y + 9);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(180, 83, 9);
    doc.text(term.maxDraft, margin + 98, y + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.2);
    doc.setTextColor(51, 65, 85);
    const cargoSplit = doc.splitTextToSize(term.primaryCargo, 50);
    doc.text(cargoSplit.slice(0, 2), margin + 130, y + 5);

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, y + 14, pageWidth - margin, y + 14);

    y += 14;
  });

  y += 6;

  // 6. Direct Contact & Dispatch Center Card
  doc.setFillColor(238, 242, 255);
  doc.setDrawColor(199, 210, 254);
  doc.roundedRect(margin, y, contentWidth, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn ? '6. OFFICIAL OPERATIONS CONTACT & NOTICE REQUIREMENTS' : '6. KONTAK RESMI OPERASIONAL & KETENTUAN PEMBERITAHUAN',
    margin + 5,
    y + 7
  );

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(51, 65, 85);
  const noticeMsg = isEn
    ? 'For prompt vessel clearance and PPK/SPM registration with KSOP Class I Balikpapan, please transmit ETA notices (72, 48, 24, and 12 hours prior) along with Last Port Clearance, Crew List, Cargo Manifest, and Ship Particulars to our dedicated operations desk.'
    : 'Untuk percepatan penerbitan izin labuh/sandar dan registrasi PPK/SPM pada KSOP Kelas I Balikpapan, mohon kirimkan ETA notice (72, 48, 24, dan 12 jam) beserta Last Port Clearance, Crew List, Cargo Manifest, dan Ship Particulars kepada pusat operasional kami.';

  const splitNotice = doc.splitTextToSize(noticeMsg, contentWidth - 10);
  doc.text(splitNotice, margin + 5, y + 13);

  // Bottom 2 columns of contact
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(180, 83, 9);
  doc.text(`Contact Person: ${COMPANY_CONTACT.directorName} (Direktur)`, margin + 5, y + 27);
  doc.text(`24/7 Phone / WhatsApp: ${COMPANY_CONTACT.phoneFormatted}`, margin + 5, y + 32);

  doc.setTextColor(15, 39, 74);
  doc.text(`Official Ops Email: ${COMPANY_CONTACT.email}`, margin + 95, y + 27);
  doc.text(`Operational Coverage: 24 Hours / 7 Days a Week`, margin + 95, y + 32);

  // Page 3 Footer
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
  doc.setFontSize(6.5);
  doc.setTextColor(148, 163, 184);
  doc.text('PT INTAN SAMUDERA AGENCY · BALIKPAPAN CORPORATE PROFILE', margin, pageHeight - 7);
  doc.text(`Page 3 of 3`, pageWidth - margin, pageHeight - 7, { align: 'right' });

  // Trigger download
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  doc.save(`PT_Intan_Samudera_Agency_Company_Profile_${dateStr}.pdf`);
};

/**
 * Generate and download the Balikpapan Port & Terminal Directory PDF Guide (1 Page Quick Reference)
 */
export const downloadTerminalDirectoryPdf = (language: 'id' | 'en' = 'id') => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const isEn = language === 'en';
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;

  // Header Navy
  doc.setFillColor(15, 39, 74);
  doc.rect(0, 0, pageWidth, 35, 'F');
  doc.setFillColor(217, 119, 6);
  doc.rect(0, 35, pageWidth, 2, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('PT INTAN SAMUDERA AGENCY', margin, 14);

  doc.setFontSize(8.5);
  doc.setTextColor(251, 191, 36);
  doc.text(
    isEn
      ? 'BALIKPAPAN PORT TERMINALS & BERTHING SPECIFICATIONS GUIDE'
      : 'PANDUAN SPESIFIKASI TERMINAL & DERMAGA PELABUHAN BALIKPAPAN',
    margin,
    20
  );

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(203, 213, 225);
  doc.text('Port Code: IDBPN · Harbor Master: KSOP Kelas I Balikpapan · 24/7 Agency Desk', margin, 26);
  doc.text('Direct Operations: Mr. Jasmin (+62 822-2935-7500) · opsbpn@intansamudera.com', margin, 31);

  let y = 44;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 39, 74);
  doc.text(
    isEn
      ? 'KEY COMMERCIAL & INDUSTRIAL TERMINALS IN BALIKPAPAN WATERS'
      : 'TERMINAL INDUSTRI & DERMAGA UMUM UTAMA DI PERAIRAN BALIKPAPAN',
    margin,
    y
  );

  y += 6;

  PORT_TERMINALS.forEach((term, index) => {
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(margin, y, contentWidth, 31, 1.5, 1.5, 'FD');

    // Title & Type
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 39, 74);
    doc.text(`${index + 1}. ${term.name}`, margin + 4, y + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(180, 83, 9);
    doc.text(term.type, margin + 4, y + 10.5);

    // Location & description
    doc.setTextColor(71, 85, 105);
    doc.text(`Location: ${term.location} (Lat: ${term.lat}, Lng: ${term.lng})`, margin + 4, y + 15);

    const splitDesc = doc.splitTextToSize(term.description, contentWidth - 8);
    doc.text(splitDesc.slice(0, 2), margin + 4, y + 19.5);

    // Specs bar
    doc.setFillColor(241, 245, 249);
    doc.rect(margin + 2, y + 24, contentWidth - 4, 5.5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(15, 39, 74);
    doc.text(`Draft: ${term.maxDraft}`, margin + 5, y + 27.8);
    doc.text(`Berth: ${term.berthLength.slice(0, 35)}`, margin + 45, y + 27.8);
    doc.setTextColor(180, 83, 9);
    doc.text(`Cargo: ${term.primaryCargo.slice(0, 50)}`, margin + 100, y + 27.8);

    y += 33.5;
  });

  // Footer
  doc.setDrawColor(203, 213, 225);
  doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
  doc.setFontSize(6.5);
  doc.setTextColor(148, 163, 184);
  doc.text('PT INTAN SAMUDERA AGENCY · BALIKPAPAN PORT TERMINAL DIRECTORY', margin, pageHeight - 7);
  doc.text(`Page 1 of 1`, pageWidth - margin, pageHeight - 7, { align: 'right' });

  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  doc.save(`Balikpapan_Port_Terminals_Directory_${dateStr}.pdf`);
};
