import React from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Phone, Mail, ArrowRight, Compass, FileDown } from 'lucide-react';
import { downloadCompanyProfilePdf } from '../data/pdfGenerator';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenPdfModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onOpenPdfModal }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].hero;

  const handleQuickDownloadProfile = () => {
    if (onOpenPdfModal) {
      onOpenPdfModal();
    } else {
      downloadCompanyProfilePdf(lang);
    }
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image Container with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_maritime_vessel_1793086075099.jpg"
          alt="Operasi Kapal Niaga dan Kapal Tunda di Pelabuhan Teluk Balikpapan oleh PT Intan Samudera Agency"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Measured dark scrim gradient ensuring >4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        
        {/* Unboxed editorial trust kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-6">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            {t.kicker1}
          </span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>{t.kicker2}</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>{t.kicker3}</span>
        </div>

        {/* Hero Title & Subhead */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance mb-6">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            {t.description}
          </p>

          {/* Primary Action Button Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Download PDF Trigger Button */}
            <button
              type="button"
              onClick={handleQuickDownloadProfile}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-blue-900/80 hover:bg-blue-800 border border-blue-700/80 rounded-lg transition-colors whitespace-nowrap shadow-xs"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>{lang === 'en' ? 'Download PDF Documents' : 'Unduh Dokumen PDF'}</span>
            </button>

            <a
              href={COMPANY_CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{t.ctaWhatsApp}: {COMPANY_CONTACT.directorName}</span>
            </a>
          </div>

          {/* Direct Operational Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl pt-6 border-t border-slate-800/80">
            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded bg-blue-900/50 text-blue-300 shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-0.5">
                <div className="font-bold text-white text-sm">{COMPANY_CONTACT.directorName}</div>
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-amber-400 hover:underline font-mono text-xs block">
                  {COMPANY_CONTACT.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-slate-800 flex items-start gap-3">
              <div className="p-2 rounded bg-blue-900/50 text-blue-300 shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="text-slate-400">{t.contactEmail}</div>
                <div className="font-bold text-white text-sm">{t.contactEmailSub}</div>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-amber-400 hover:underline font-mono text-xs break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full-width KPI / Metric Strip below hero split */}
      <div className="border-t border-slate-800 bg-slate-950/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
