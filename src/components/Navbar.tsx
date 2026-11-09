import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Menu, X, Phone, Globe, FileDown } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenPdfModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenPdfModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang].nav;

  const navLinks = [
    { label: t.profile, href: '#profil' },
    { label: t.services, href: '#layanan' },
    { label: t.terminals, href: '#terminal-map' },
    { label: t.testimonials, href: '#testimoni' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          
          {/* Zone 1: Single text element wordmark with official logo */}
          <a href="#" className="flex items-center gap-3 text-slate-900 whitespace-nowrap shrink-0 group">
            <img
              src="/assets/aistudio/logo_isa_transparent.png"
              alt="Logo PT Intan Samudera Agency (ISA)"
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="border-l border-slate-200 pl-3">
              <span className="text-sm sm:text-base lg:text-lg font-bold tracking-tight text-slate-950 block leading-tight">
                PT INTAN SAMUDERA AGENCY
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-blue-900 block">
                Shipping & Maritime Logistics · Balikpapan
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-2 decoration-blue-800"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & download & language toggle button */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            
            {/* Download PDF Button */}
            {onOpenPdfModal && (
              <button
                type="button"
                onClick={onOpenPdfModal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors whitespace-nowrap"
                title={lang === 'en' ? 'Download Official PDF Documents' : 'Unduh Dokumen PDF Resmi'}
              >
                <FileDown className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'en' ? 'Download PDF' : 'Unduh PDF'}</span>
              </button>
            )}

            {/* Language Selector Segmented Control */}
            <div
              className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs font-semibold"
              role="group"
              aria-label="Language Selector"
            >
              <div className="pl-2 pr-1 text-slate-500">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'id'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  lang === 'en'
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English Language"
              >
                EN
              </button>
            </div>

            <a
              href={`tel:${COMPANY_CONTACT.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-blue-900 px-2.5 py-2 rounded-md hover:bg-slate-100 transition-colors whitespace-nowrap"
              title="Hubungi via Telepon"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>{COMPANY_CONTACT.phoneFormatted}</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all shadow-sm hover:shadow whitespace-nowrap shrink-0"
            >
              {t.contactBtn}
            </button>
          </div>

          {/* Mobile hamburger & mobile actions */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Quick Download PDF icon on mobile header */}
            {onOpenPdfModal && (
              <button
                type="button"
                onClick={onOpenPdfModal}
                className="p-2 rounded-md text-blue-900 bg-blue-50 border border-blue-200"
                title="Unduh PDF"
              >
                <FileDown className="w-4 h-4 text-amber-600" />
              </button>
            )}

            {/* Compact Mobile Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-md p-0.5 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded ${lang === 'id' ? 'bg-blue-900 text-white' : 'text-slate-600'}`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-blue-900 text-white' : 'text-slate-600'}`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            {onOpenPdfModal && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPdfModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors"
              >
                <FileDown className="w-4 h-4 text-amber-600" />
                <span>{lang === 'en' ? 'Download PDF Documents' : 'Unduh Dokumen PDF (PDA & Profil)'}</span>
              </button>
            )}

            <div className="px-3 text-xs text-slate-500">
              {t.contactPerson}: <strong className="text-slate-800">{COMPANY_CONTACT.directorName}</strong> ({COMPANY_CONTACT.phoneFormatted})
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full text-center px-4 py-3 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors"
            >
              {t.drawerContactBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
