import React, { useState } from 'react';
import { PORT_TERMINALS, COMPANY_CONTACT } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { MapPin, Navigation, ExternalLink, Ship, Waves, Compass, Building, Phone, Mail, FileDown } from 'lucide-react';
import { downloadTerminalDirectoryPdf } from '../data/pdfGenerator';

interface PortDirectoryAndMapProps {
  onOpenPdfModal?: () => void;
}

export const PortDirectoryAndMap: React.FC<PortDirectoryAndMapProps> = ({ onOpenPdfModal }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].terminals;
  const isEn = lang === 'en';

  const [activeTerminalId, setActiveTerminalId] = useState<string>('ldc-east-indonesia');

  const activeTerminal = PORT_TERMINALS.find((term) => term.id === activeTerminalId) || PORT_TERMINALS[0];

  const handleDownloadTerminalPdf = () => {
    downloadTerminalDirectoryPdf(lang);
  };

  return (
    <section id="terminal-map" className="py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Download Terminal Guide Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">
              {t.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadTerminalPdf}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md transition-all hover:shadow-lg whitespace-nowrap"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>{isEn ? 'Download Terminal Guide PDF' : 'Unduh Panduan Terminal (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* Terminal Switcher Tabs (7 Terminals) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5 mb-8">
          {PORT_TERMINALS.map((term, idx) => (
            <button
              key={term.id}
              onClick={() => setActiveTerminalId(term.id)}
              className={`p-3 rounded-lg text-xs font-semibold transition-all flex flex-col items-start gap-1 text-left ${
                activeTerminalId === term.id
                  ? 'bg-blue-900 text-white shadow-md ring-2 ring-blue-700'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  activeTerminalId === term.id ? 'bg-blue-800 text-amber-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  0{idx + 1}
                </span>
                <MapPin className={`w-3.5 h-3.5 ${activeTerminalId === term.id ? 'text-amber-400' : 'text-slate-400'}`} />
              </div>
              <span className="font-bold line-clamp-2 leading-tight mt-1">{term.name}</span>
            </button>
          ))}
        </div>

        {/* Map & Port Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Map Embed Frame */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-blue-900" />
                <span className="text-xs font-bold text-slate-900">{activeTerminal.name}</span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${activeTerminal.lat},${activeTerminal.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-700 transition-colors"
              >
                <span>{t.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Maps iframe */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-200">
              <iframe
                title={`Google Map - ${activeTerminal.name}`}
                src={activeTerminal.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-slate-50 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200">
              <div className="flex items-center gap-1 font-mono">
                <Navigation className="w-3 h-3 text-blue-800" />
                <span>{t.coords} {activeTerminal.lat.toFixed(4)}° S, {activeTerminal.lng.toFixed(4)}° E</span>
              </div>
              <div>{t.authority}</div>
            </div>
          </div>

          {/* Terminal Technical Specs Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-5">
              <div>
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block mb-1">
                  {activeTerminal.type}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {activeTerminal.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeTerminal.description}
                </p>
              </div>

              {/* Technical Matrix */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <Waves className="w-3.5 h-3.5 text-blue-900" />
                    <span>{t.draftLabel}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">
                    {activeTerminal.maxDraft}
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1">
                    <Ship className="w-3.5 h-3.5 text-blue-900" />
                    <span>{t.berthLabel}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 font-mono">
                    {activeTerminal.berthLength}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-700 mb-1.5">{t.cargoFocus}</div>
                <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                  {activeTerminal.primaryCargo}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-slate-700 mb-1">{t.locationLabel}</div>
                <div className="text-xs text-slate-500 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{activeTerminal.location}</span>
                </div>
              </div>
            </div>

            {/* Corporate Base Card in Balikpapan */}
            <div className="bg-blue-900 text-white p-5 rounded-xl shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {t.dispatchTitle}
                </span>
              </div>
              <div className="text-xs text-slate-200 leading-relaxed">
                {t.dispatchText}
              </div>
              <div className="pt-2 border-t border-blue-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <a
                  href={`tel:${COMPANY_CONTACT.phone}`}
                  className="flex items-center gap-1.5 font-mono text-white hover:text-amber-300 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{COMPANY_CONTACT.phoneFormatted} (Mr. Jasmin)</span>
                </a>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="flex items-center gap-1.5 font-mono text-white hover:text-amber-300"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{COMPANY_CONTACT.email}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
