import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { FAQS } from '../data/companyData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsData = lang === 'en' ? [
    {
      q: "How fast can port clearance (CIQP) be completed by PT Intan Samudera Agency in Balikpapan?",
      a: "For both domestic and ocean-going international vessels, pre-arrival permits (PPK/SPM) are processed 24-48 hours ahead of your Estimated Time of Arrival (ETA). Upon arrival at the pilot station or fairway, our boarding agents embark alongside CIQP officials (Harbour Master/KSOP, Port Health, Immigration, Customs), concluding inward clearance in approximately 1 to 2 hours."
    },
    {
      q: "Can PT Intan Samudera Agency facilitate crew change for foreign seafarers?",
      a: "Yes, we handle crew changes for both Indonesian nationals and foreign expatriate crew. We coordinate all immigration formalities including OKTB (Official Letter to Transfer Board), sign-on/sign-off endorsements, airport pick-up and transfers to SAMS Sepinggan Balikpapan International Airport, quarantine health checks, and fast launch boat transfers to Balikpapan Bay anchorage."
    },
    {
      q: "How can we obtain an official Proforma Disbursement Account (PDA)?",
      a: "Please provide vessel particulars (Vessel Name, Flag, LOA, Beam, Summer Draft, GRT/NRT, Cargo type/volume, berthing or anchorage plan, and husbandry requirements) via our website form, by emailing opsbpn@intansamudera.com, or directly via WhatsApp to Mr. Jasmin at +6282229357500. An official itemized PDA proforma is issued within 2-4 business hours."
    },
    {
      q: "Do you supply marine tugboats and deck cargo barges in East Kalimantan?",
      a: "Yes. We offer commercial chartering of modern ocean tugboats (1,200 to 3,200 HP), deck barges (230 ft to 330 ft), and shallow-draft Landing Craft Tanks (LCT) designed for heavy machinery, structural steel, quarry aggregates, and industrial materials across Balikpapan and regional Indonesian corridors."
    },
    {
      q: "Can fresh water and MGO bunker fuel be supplied at anchorage?",
      a: "Yes. We deliver certified high-grade Marine Gas Oil (MGO/B35 HSD) via bunker barge at Balikpapan Bay designated anchorages or by road tanker at berth. High-pressure potable fresh water barges are also available for bulk transfer with quality test certificates."
    }
  ] : FAQS;

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">
            {t.kicker}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
