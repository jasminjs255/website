import React from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Shield, Award, CheckCircle2, MapPin, Phone, Mail, FileDown } from 'lucide-react';
import { downloadCompanyProfilePdf } from '../data/pdfGenerator';

interface CompanyProfileSectionProps {
  onOpenPdfModal?: () => void;
}

export const CompanyProfileSection: React.FC<CompanyProfileSectionProps> = ({ onOpenPdfModal }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].profile;
  const isEn = lang === 'en';

  const handleDownloadProfile = () => {
    if (onOpenPdfModal) {
      onOpenPdfModal();
    } else {
      downloadCompanyProfilePdf(lang);
    }
  };

  return (
    <section id="profil" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Download PDF Quick Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">
              {t.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {t.title}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {t.lead}
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={handleDownloadProfile}
              className="inline-flex items-center gap-2 px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all hover:shadow-lg whitespace-nowrap"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>{isEn ? 'Download Company Profile PDF' : 'Unduh Brosur Profil Perusahaan (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Corporate Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">
                {t.body1Title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.body1Text}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.body2Text}
              </p>

              {/* Operational Pillars */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                {t.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Balikpapan Advantage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-blue-900 font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>{t.complianceTitle}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.complianceText}
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-blue-900 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>{t.zeroDemurrageTitle}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.zeroDemurrageText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Leadership & Executive Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-950 to-slate-900 text-white p-6 sm:p-8 rounded-xl shadow-md border border-blue-900">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {t.execKicker}
                </div>
                <div className="bg-white px-2 py-1 rounded shadow-xs">
                  <img
                    src="/assets/aistudio/logo_isa_transparent.png"
                    alt="Logo ISA"
                    className="h-5 w-auto object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">Mr. Jasmin</h3>
              <div className="text-xs text-blue-200 mb-6 font-medium">Direktur / Managing Director</div>

              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {t.execLead}
              </p>

              <div className="space-y-3 pt-4 border-t border-blue-900/60 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[11px]">{t.execDirectPhone}</div>
                    <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-white font-mono font-semibold hover:underline">
                      {COMPANY_CONTACT.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[11px]">{t.execDirectEmail}</div>
                    <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-white font-mono font-semibold hover:underline break-all">
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-slate-400 text-[11px]">{t.execLocation}</div>
                    <div className="text-slate-200">{t.execLocationVal}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-900/60 space-y-2">
                <a
                  href={COMPANY_CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.execButton}</span>
                </a>

                <button
                  type="button"
                  onClick={handleDownloadProfile}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900/80 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs transition-colors border border-blue-700/60"
                >
                  <FileDown className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isEn ? 'Download Corporate Brochure PDF' : 'Unduh Dokumen Profil Resmi (PDF)'}</span>
                </button>
              </div>
            </div>

            {/* Quick Accreditation Box */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 text-xs text-slate-600">
              <div className="font-bold text-slate-900 mb-2">{t.authorityTitle}</div>
              <ul className="space-y-1.5 list-disc list-inside">
                {t.authorities.map((auth, idx) => (
                  <li key={idx}>{auth}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
