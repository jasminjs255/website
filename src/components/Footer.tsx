import React from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { FileDown } from 'lucide-react';
import { downloadCompanyProfilePdf, downloadTerminalDirectoryPdf } from '../data/pdfGenerator';

interface FooterProps {
  onOpenContact: () => void;
  onOpenPdfModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenPdfModal }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].footer;
  const navT = TRANSLATIONS[lang].nav;
  const isEn = lang === 'en';

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Domicile Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white px-2.5 py-1.5 rounded-md flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src="/assets/aistudio/logo_isa_transparent.png"
                  alt="Logo PT Intan Samudera Agency (ISA)"
                  className="h-6 w-auto object-contain"
                />
              </div>
              <span className="text-base font-extrabold tracking-tight">
                PT INTAN SAMUDERA AGENCY
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-md">
              {t.desc}
            </p>

            <div className="text-[11px] text-slate-500 space-y-1">
              <div>{t.portCode} <span className="font-mono text-slate-300">IDBPN</span></div>
              <div>{t.authority} <span className="text-slate-300">KSOP Kelas I Balikpapan</span></div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {t.navTitle}
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#profil" className="hover:text-white transition-colors">{navT.profile}</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">{navT.services}</a>
              </li>
              <li>
                <a href="#terminal-map" className="hover:text-white transition-colors">{navT.terminals}</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">{navT.testimonials}</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">{navT.contactBtn}</a>
              </li>
            </ul>
          </div>

          {/* PDF Downloads Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <FileDown className="w-3.5 h-3.5" />
              <span>{isEn ? 'PDF Documents' : 'Unduhan Dokumen PDF'}</span>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPdfModal ? onOpenPdfModal() : downloadCompanyProfilePdf(lang)}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span>• {isEn ? 'Company Profile PDF' : 'Brosur Profil Perusahaan (PDF)'}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPdfModal ? onOpenPdfModal() : null}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span>• {isEn ? 'PDA Quotation PDF' : 'Estimasi PDA Kapal (PDF)'}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => downloadTerminalDirectoryPdf(lang)}
                  className="hover:text-amber-300 text-left transition-colors flex items-center gap-1.5"
                >
                  <span>• {isEn ? 'Port Terminal Guide PDF' : 'Panduan Terminal Balikpapan (PDF)'}</span>
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenPdfModal && onOpenPdfModal()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white rounded text-[11px] font-semibold transition-colors border border-blue-700/60"
              >
                <FileDown className="w-3.5 h-3.5 text-amber-400" />
                <span>{isEn ? 'Open PDF Download Center' : 'Buka Pusat Unduhan PDF'}</span>
              </button>
            </div>
          </div>

          {/* Direct Executive Contact */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              {t.contactTitle}
            </div>

            <div className="space-y-2.5">
              <div>
                <span className="text-slate-500 block text-[11px]">{t.contactPersonLabel}</span>
                <span className="text-white font-semibold">{COMPANY_CONTACT.directorName}</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">{t.phoneLabel}</span>
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="text-amber-400 font-mono font-semibold hover:underline">
                  {COMPANY_CONTACT.phoneFormatted}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">{t.emailLabel}</span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="text-amber-400 font-mono hover:underline break-all">
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">{t.domicileLabel}</span>
                <span className="text-slate-300">{COMPANY_CONTACT.officeAddress}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded transition-colors"
              >
                {t.ctaBtn}
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} PT INTAN SAMUDERA AGENCY. {t.copyright}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.locationTag}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
