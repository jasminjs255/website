import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  FileText,
  Download,
  X,
  CheckCircle,
  Building2,
  Anchor,
  Ship,
  Sparkles,
  Printer,
  ChevronRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { downloadPdaPdf, downloadCompanyProfilePdf, downloadTerminalDirectoryPdf, PdaItem } from '../data/pdfGenerator';
import { COMPANY_CONTACT } from '../data/companyData';

interface PdfDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdaPreset?: {
    vesselType: string;
    grossTonnage: number;
    portStayDays: number;
    terminal: string;
    items: PdaItem[];
    totalAmount: number;
  };
}

export const PdfDownloadModal: React.FC<PdfDownloadModalProps> = ({
  isOpen,
  onClose,
  pdaPreset,
}) => {
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  const [activeTab, setActiveTab] = useState<'pda' | 'profile' | 'terminals'>('pda');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Custom fields for PDA
  const [vesselName, setVesselName] = useState('MV Samudera Nusantara');
  const [vesselType, setVesselType] = useState(pdaPreset?.vesselType || 'tug-barge');
  const [grossTonnage, setGrossTonnage] = useState<number>(pdaPreset?.grossTonnage || 3500);
  const [portStayDays, setPortStayDays] = useState<number>(pdaPreset?.portStayDays || 3);
  const [terminal, setTerminal] = useState(pdaPreset?.terminal || 'Terminal LDC East Indonesia');
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [pdfLanguage, setPdfLanguage] = useState<'id' | 'en'>(lang);

  if (!isOpen) return null;

  // Compute items if not passed or modified
  const currentItems: PdaItem[] = pdaPreset?.items || [
    {
      category: isEn ? 'Agency Base Fee' : 'Jasa Keagenan Pokok',
      description: isEn ? 'Inward & Outward CIQP Formalities' : 'Formalitas CIQP (KSOP, Bea Cukai, Imigrasi, Karantina)',
      unit: '1 Call',
      amount: grossTonnage > 15000 ? 22000000 : grossTonnage > 5000 ? 16000000 : 12000000,
    },
    {
      category: isEn ? 'Port Supervision' : 'Supervisi Operasional',
      description: isEn ? `Daily boarding officer & coordination (${portStayDays} Days)` : `Petugas piket sandar & koordinasi lapangan (${portStayDays} Hari)`,
      unit: `${portStayDays} ${isEn ? 'Days' : 'Hari'}`,
      amount: Math.max(0, (portStayDays - 1) * 1250000),
    },
    {
      category: isEn ? 'Potable Water' : 'Suplai Air Tawar',
      description: isEn ? 'Fresh water barge delivery to vessel' : 'Air tawar bersih bertekanan via tongkang/truk',
      unit: '100 Ton',
      amount: 8500000,
    },
    {
      category: isEn ? 'Husbandry' : 'Husbandry & Awak',
      description: isEn ? 'Crew change coordination & launch boat' : 'Pengurusan izin crew change & boat transfer',
      unit: '4 Crew',
      amount: 8800000,
    },
  ];

  const currentTotal = pdaPreset?.totalAmount || currentItems.reduce((acc, curr) => acc + curr.amount, 0);

  const handleDownloadPda = () => {
    try {
      downloadPdaPdf({
        vesselName: vesselName.trim() || undefined,
        vesselType,
        grossTonnage,
        portStayDays,
        terminal,
        clientName: clientName.trim() || undefined,
        companyName: companyName.trim() || undefined,
        items: currentItems,
        totalAmount: currentTotal,
        language: pdfLanguage,
      });
      setDownloadSuccess(isEn ? 'Official PDA PDF successfully downloaded!' : 'PDF Estimasi PDA resmi berhasil diunduh!');
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadProfile = () => {
    try {
      downloadCompanyProfilePdf(pdfLanguage);
      setDownloadSuccess(isEn ? 'Company Profile PDF successfully downloaded!' : 'Brosur Profil Perusahaan PDF berhasil diunduh!');
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownloadTerminals = () => {
    try {
      downloadTerminalDirectoryPdf(pdfLanguage);
      setDownloadSuccess(isEn ? 'Balikpapan Port Directory PDF downloaded!' : 'Panduan Terminal Balikpapan PDF berhasil diunduh!');
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-pdf-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white p-5 sm:p-6 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <FileText className="w-4 h-4" />
              <span>{isEn ? 'Official Documents & PDF Downloads' : 'Pusat Unduhan Dokumen Resmi PDF'}</span>
            </div>
            <h3 id="modal-pdf-title" className="text-xl sm:text-2xl font-extrabold text-white">
              {isEn ? 'Download Maritime PDF Documents' : 'Unduh Dokumen PDF Resmi PT Intan Samudera Agency'}
            </h3>
            <p className="text-xs text-slate-300">
              {isEn
                ? 'Generate verified Proforma Disbursement Accounts, Corporate Profiles, and Port Terminal specifications.'
                : 'Cetak dan unduh langsung estimasi PDA kapal, profil perusahaan resmi berlisensi, dan panduan teknis terminal Balikpapan.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-3 gap-2 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('pda')}
            className={`flex items-center gap-2 pb-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'pda'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Ship className="w-4 h-4" />
            <span>{isEn ? '1. PDA Quotation PDF' : '1. PDF Estimasi PDA Kapal'}</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 pb-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{isEn ? '2. Company Profile PDF (3-Page)' : '2. PDF Profil Perusahaan (3 Hal)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('terminals')}
            className={`flex items-center gap-2 pb-3 px-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'terminals'
                ? 'border-blue-900 text-blue-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Anchor className="w-4 h-4" />
            <span>{isEn ? '3. Port Terminals Directory' : '3. Panduan Terminal Balikpapan'}</span>
          </button>
        </div>

        {/* Success Alert Banner */}
        {downloadSuccess && (
          <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-2.5 flex items-center gap-2 text-xs text-emerald-800 font-semibold animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{downloadSuccess}</span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: PDA ESTIMATE PDF */}
          {activeTab === 'pda' && (
            <div className="space-y-5">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-800 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold">
                    {isEn ? 'Accredited Maritime Proforma Document' : 'Dokumen Estimasi Resmi Siap Cetak & Kirim'}
                  </div>
                  <p className="text-blue-800 leading-relaxed text-[11px]">
                    {isEn
                      ? 'The generated PDF includes official PT Intan Samudera Agency letterhead, SIUPKK and KSOP Balikpapan accreditation notes, unique reference code, itemized port tariffs, and Managing Director verification.'
                      : 'File PDF yang diunduh memuat kop surat resmi PT Intan Samudera Agency, nomor referensi unik, rincian biaya keagenan, catatan kepatuhan KSOP Balikpapan, dan verifikasi Direktur Mr. Jasmin.'}
                  </p>
                </div>
              </div>

              {/* Optional Customization Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {isEn ? 'Vessel Name / Call Sign (Optional)' : 'Nama Kapal / Call Sign (Opsional)'}
                  </label>
                  <input
                    type="text"
                    value={vesselName}
                    onChange={(e) => setVesselName(e.target.value)}
                    placeholder="Contoh: MV Samudera Nusantara"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {isEn ? 'Charterer / Company Name (Optional)' : 'Nama Perusahaan / Operator (Opsional)'}
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Contoh: PT Ocean Shipping Line"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {isEn ? 'Contact Person / Master Name' : 'Nama Pemohon / Nakhoda'}
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Contoh: Capt. Hendra / Operations Desk"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {isEn ? 'Document Language in PDF' : 'Bahasa Dalam Dokumen PDF'}
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setPdfLanguage('id')}
                      className={`flex-1 py-2 px-3 rounded-lg border text-xs font-semibold ${
                        pdfLanguage === 'id'
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      Bahasa Indonesia
                    </button>
                    <button
                      type="button"
                      onClick={() => setPdfLanguage('en')}
                      className={`flex-1 py-2 px-3 rounded-lg border text-xs font-semibold ${
                        pdfLanguage === 'en'
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      English
                    </button>
                  </div>
                </div>
              </div>

              {/* Live Preview Card */}
              <div className="border border-slate-300 rounded-xl p-4 bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-800">
                  <div className="font-bold flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-amber-400" />
                    <span>{isEn ? 'PDF Content Summary' : 'Ringkasan Rincian PDF'}</span>
                  </div>
                  <span className="text-amber-400 font-mono font-bold text-sm">
                    IDR {currentTotal.toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-300 font-mono">
                  <div>
                    <span className="text-slate-500 block text-[10px]">{isEn ? 'Vessel:' : 'Kapal:'}</span>
                    <strong className="text-white">{vesselName || vesselType}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Tonnage:</span>
                    <strong className="text-white">{grossTonnage.toLocaleString('id-ID')} GT</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">{isEn ? 'Stay:' : 'Durasi:'}</span>
                    <strong className="text-white">{portStayDays} {isEn ? 'Days' : 'Hari'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">{isEn ? 'Port:' : 'Lokasi:'}</span>
                    <strong className="text-white truncate block">{terminal}</strong>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 pt-1">
                  {isEn
                    ? 'Includes: Basic CIQP Agency Fee, Port Supervision, Fresh Water & Husbandry items.'
                    : 'Mencakup: Jasa Pokok Keagenan CIQP, Supervisi Lapangan, Air Tawar & Husbandry Kru.'}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDownloadPda}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{isEn ? 'Download Official PDA PDF (IDR / USD)' : 'Unduh Dokumen PDA PDF Resmi (IDR / USD)'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: COMPANY PROFILE PDF */}
          {activeTab === 'profile' && (
            <div className="space-y-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 flex items-start gap-3">
                <Building2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold">
                    {isEn ? 'Comprehensive 3-Page Corporate Brochure' : 'Brosur Profil Perusahaan Resmi 3 Halaman'}
                  </div>
                  <p className="text-amber-900 text-[11px] leading-relaxed">
                    {isEn
                      ? 'Detailed company profile containing corporate vision, leadership profile of Mr. Jasmin, KSOP Class I Balikpapan accreditations, full scope of 6 maritime services, and terminal capabilities.'
                      : 'Dokumen profil korporat lengkap mencakup legalitas SIUPKK, akreditasi KSOP Kelas I Balikpapan, profil Direktur Mr. Jasmin, portofolio 6 layanan utama, serta peta koordinasi terminal Teluk Balikpapan.'}
                  </p>
                </div>
              </div>

              {/* Document Outline Preview */}
              <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200 text-xs">
                <div className="p-4 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">1</span>
                    <div>
                      <strong className="text-slate-900">{isEn ? 'Page 1: Executive Overview & Leadership' : 'Halaman 1: Ikhtisar Eksekutif & Kepemimpinan'}</strong>
                      <p className="text-slate-500 text-[11px]">
                        {isEn ? 'Corporate legalities, Director Mr. Jasmin profile, and KSOP partner accreditations.' : 'Profil legal, kontak Direktur Mr. Jasmin, dan mitra resmi instansi KSOP & Bea Cukai.'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Page 1</span>
                </div>

                <div className="p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">2</span>
                    <div>
                      <strong className="text-slate-900">{isEn ? 'Page 2: Core Maritime Services Portfolio' : 'Halaman 2: Portofolio Layanan Maritim & Logistik'}</strong>
                      <p className="text-slate-500 text-[11px]">
                        {isEn ? 'Port clearance CIQP, stevedoring, crew change, bunker supply, and tug & barge chartering.' : 'Layanan CIQP, stevedoring kargo, crew handling, suplai bunker MGO, dan charter tongkang.'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Page 2</span>
                </div>

                <div className="p-4 bg-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">3</span>
                    <div>
                      <strong className="text-slate-900">{isEn ? 'Page 3: Balikpapan Terminals & Dispatch Desk' : 'Halaman 3: Direktori Terminal Balikpapan & Dispatch'}</strong>
                      <p className="text-slate-500 text-[11px]">
                        {isEn ? 'Specifications of LDC, KRN, WPS, ARC, ILSS, Semayang, and 24/7 hotline.' : 'Draft & panjang dermaga LDC, KRN, WPS, ARC, ILSS, Semayang, dan kontak operasional 24 jam.'}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Page 3</span>
                </div>
              </div>

              {/* Language Selection */}
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg text-xs">
                <span className="font-semibold text-slate-700">
                  {isEn ? 'Select PDF Language:' : 'Pilih Bahasa Dokumen PDF:'}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPdfLanguage('id')}
                    className={`px-3 py-1.5 rounded-md font-semibold ${
                      pdfLanguage === 'id' ? 'bg-blue-900 text-white' : 'bg-white text-slate-700 border'
                    }`}
                  >
                    Bahasa Indonesia
                  </button>
                  <button
                    type="button"
                    onClick={() => setPdfLanguage('en')}
                    className={`px-3 py-1.5 rounded-md font-semibold ${
                      pdfLanguage === 'en' ? 'bg-blue-900 text-white' : 'bg-white text-slate-700 border'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleDownloadProfile}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{isEn ? 'Download Company Profile PDF (3 Pages)' : 'Unduh Brosur Profil Perusahaan PDF (3 Halaman)'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: TERMINALS DIRECTORY PDF */}
          {activeTab === 'terminals' && (
            <div className="space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-800 flex items-start gap-3">
                <Anchor className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold">
                    {isEn ? 'Balikpapan Port & Industrial Terminal Directory' : 'Panduan Resmi Terminal Pelabuhan Balikpapan'}
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {isEn
                      ? 'Single-sheet quick reference guide covering technical specifications, maximum draft, berth length, coordinates, and commodity specialties for 6 primary terminals in Balikpapan waters.'
                      : 'Panduan teknis ringkas memuat spesifikasi kedalaman draft, panjang dermaga, koordinat geografis, serta spesialisasi komoditas pada 6 terminal strategis di Teluk Balikpapan.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">1. Terminal LDC East Indonesia</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 12.0 - 13.5 M · Refinery CPO</div>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">2. Terminal KRN (Apical)</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 11.5 - 13.0 M · Oleochemicals</div>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">3. Terminal WPS (Curah Kering)</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 11.0 - 12.5 M · Batu Bara & Semen</div>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">4. Terminal Agpa Refinery (ARC)</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 10.5 - 12.0 M · Curah Cair</div>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">5. Terminal Interport ILSS</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 7.5 - 9.5 M · Offshore Shorebase</div>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">6. Balikpapan Coal Terminal (BCT)</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 13.0 - 15.0 M · Ekspor Batu Bara</div>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">
                  <div className="font-bold text-slate-900">7. Pelabuhan Semayang</div>
                  <div className="text-[11px] text-amber-700 font-medium">Draft: 8.5 - 10.5 M · Hub Umum Niaga</div>
                </div>
              </div>

              {/* Language Selection */}
              <div className="flex items-center justify-between p-3 bg-slate-100 rounded-lg text-xs">
                <span className="font-semibold text-slate-700">
                  {isEn ? 'Select PDF Language:' : 'Pilih Bahasa Dokumen PDF:'}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setPdfLanguage('id')}
                    className={`px-3 py-1.5 rounded-md font-semibold ${
                      pdfLanguage === 'id' ? 'bg-blue-900 text-white' : 'bg-white text-slate-700 border'
                    }`}
                  >
                    Bahasa Indonesia
                  </button>
                  <button
                    type="button"
                    onClick={() => setPdfLanguage('en')}
                    className={`px-3 py-1.5 rounded-md font-semibold ${
                      pdfLanguage === 'en' ? 'bg-blue-900 text-white' : 'bg-white text-slate-700 border'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleDownloadTerminals}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{isEn ? 'Download Terminal Directory PDF Guide' : 'Unduh Panduan Terminal Pelabuhan PDF'}</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>
              {isEn ? 'Direct Operations Support: ' : 'Layanan Operasional 24 Jam: '}
              <strong className="text-slate-800">{COMPANY_CONTACT.directorName}</strong> ({COMPANY_CONTACT.phoneFormatted})
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 transition-colors"
          >
            {isEn ? 'Close Window' : 'Tutup'}
          </button>
        </div>

      </div>
    </div>
  );
};
