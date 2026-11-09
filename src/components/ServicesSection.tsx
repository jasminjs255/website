import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS, ServiceTranslation } from '../data/translations';
import { ArrowUpRight, Check, Ship, Anchor, Fuel, Users, Wrench, PackageCheck, X } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].services;
  const [selectedService, setSelectedService] = useState<(ServiceTranslation & { imageSrc?: string; highlight?: boolean }) | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'shipping-agency':
        return <Anchor className="w-5 h-5 text-blue-900" />;
      case 'cargo-stevedoring':
        return <PackageCheck className="w-5 h-5 text-blue-900" />;
      case 'vessel-husbandry':
        return <Users className="w-5 h-5 text-blue-900" />;
      case 'tug-barge-charter':
        return <Ship className="w-5 h-5 text-blue-900" />;
      case 'bunker-water-supply':
        return <Fuel className="w-5 h-5 text-blue-900" />;
      default:
        return <Wrench className="w-5 h-5 text-blue-900" />;
    }
  };

  // Merge static images and highlight flags with translated items
  const servicesData = t.items.map((item) => {
    const original = SERVICES_LIST.find((s) => s.id === item.id);
    return {
      ...item,
      imageSrc: original?.imageSrc,
      highlight: original?.highlight,
    };
  });

  return (
    <section id="layanan" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">
              {t.kicker}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          <div className="text-xs font-medium text-slate-500 shrink-0">
            {t.badge}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const hasImage = Boolean(service.imageSrc);

            return (
              <div
                key={service.id}
                className={`bg-slate-50 rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between transition-all hover:border-blue-900/40 hover:shadow-md ${
                  service.highlight ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Image Header if available */}
                {hasImage && (
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-semibold text-amber-300 drop-shadow-sm">{service.kicker}</span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {!hasImage && (
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 bg-blue-100 rounded-lg">
                          {getServiceIcon(service.id)}
                        </div>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-mono">
                          0{index + 1}
                        </span>
                      </div>
                    )}

                    {!hasImage && (
                      <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-1">
                        {service.kicker}
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs font-medium text-slate-500 mb-3 italic">
                      "{service.tagline}"
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Service Feature List */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-semibold text-slate-700 hover:text-blue-900 transition-colors"
                    >
                      {t.viewDetail}
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectServiceForInquiry(service.title)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors"
                    >
                      <span>{t.orderService}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedService.imageSrc && (
              <div className="h-48 w-full rounded-lg overflow-hidden mb-5">
                <img
                  src={selectedService.imageSrc}
                  alt={selectedService.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
              {selectedService.kicker}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {selectedService.title}
            </h3>
            <p className="text-xs font-medium text-slate-500 mb-4 italic">
              {selectedService.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-3">
                {t.modalScope}
              </div>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForInquiry(title);
                }}
                className="w-full sm:w-auto flex-1 px-4 py-2.5 bg-blue-900 text-white font-bold text-xs rounded-lg hover:bg-blue-800 transition-colors text-center"
              >
                {t.modalUseBtn}
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2.5 border border-slate-200 text-slate-700 font-semibold text-xs rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.modalCloseBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
