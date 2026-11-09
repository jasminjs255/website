import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Star, Ship } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].testimonials;

  const testimonialsData = TESTIMONIALS.map((item) => {
    if (lang === 'en') {
      if (item.id === 'testi-1') {
        return {
          ...item,
          quote: "The agency coordination from PT Intan Samudera Agency in Balikpapan was exceptionally responsive and disciplined. CIQP clearance for our tanker at Balikpapan Bay anchorage was finished on schedule without demurrage. Mr. Jasmin's communication was top tier.",
          project: "Bunker Coordination & Port Clearance Balikpapan",
          date: "October 2026"
        };
      }
      if (item.id === 'testi-2') {
        return {
          ...item,
          quote: "Maritime cargo logistics and steel piling delivery via LCT and ocean tugs went seamlessly. Berthing permits at Semayang and jetty coordination were handled meticulously. Highly recommend Intan Samudera Agency.",
          project: "Sea Freight & Jetty Clearance Balikpapan Corridor",
          date: "September 2026"
        };
      }
      if (item.id === 'testi-3') {
        return {
          ...item,
          quote: "Crew change for 9 seafarers including international crew went flawlessly. From airport pick-up at Sepinggan to launch boat transfer to outer anchorage, everything was cleared with Customs and Immigration without delay.",
          project: "Crew Change & Ship Husbandry at Balikpapan",
          date: "August 2026"
        };
      }
      if (item.id === 'testi-4') {
        return {
          ...item,
          quote: "Initial PDA calculation was clear and transparent with zero hidden costs. Delivery of 250 metric tons of fresh water and MGO bunker at Port of Semayang was executed under high safety standards. 24/7 ops standby.",
          project: "Port Agency & Fresh Water Bunkering Semayang",
          date: "July 2026"
        };
      }
    }
    return item;
  });

  return (
    <section id="testimoni" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors shadow-2xs"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-slate-600 font-medium">{item.date}</span>
                </div>

                {/* Vessel Badge / Project */}
                <div className="flex items-center gap-1.5 text-xs text-blue-900 font-semibold mb-3">
                  <Ship className="w-3.5 h-3.5" />
                  <span>{item.vesselType}</span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Company */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-950">
                    {item.clientName}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {item.role} · <strong className="font-semibold text-slate-700">{item.company}</strong>
                  </div>
                </div>

                <div className="text-[11px] font-medium text-slate-600 bg-white px-2 py-1 rounded border border-slate-200 shrink-0">
                  {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-12 p-6 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold text-amber-400 mb-1">
              {t.trustBannerTitle}
            </div>
            <p className="text-xs text-slate-300 max-w-2xl">
              {t.trustBannerText}
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 shrink-0">
            {t.portCode}
          </div>
        </div>

      </div>
    </section>
  );
};
