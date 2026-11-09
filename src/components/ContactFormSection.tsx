import React, { useState, useEffect } from 'react';
import { COMPANY_CONTACT } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Ship, Building2, FileDown } from 'lucide-react';
import { downloadPdaPdf } from '../data/pdfGenerator';

interface ContactFormProps {
  initialService?: string;
  prefilledEstimate?: string;
}

interface FormDataState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  terminal: string;
  vesselName: string;
  etaDate: string;
  message: string;
}

export const ContactFormSection: React.FC<ContactFormProps> = ({ initialService, prefilledEstimate }) => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].contact;

  const [formData, setFormData] = useState<FormDataState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: initialService || 'Shipping Agency & Port Clearance',
    terminal: 'Terminal LDC East Indonesia',
    vesselName: '',
    etaDate: '',
    message: prefilledEstimate || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Update when props change (e.g. from service click or calculator)
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (prefilledEstimate) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n[PDA / Estimate]: ${prefilledEstimate}` : `[PDA / Estimate]: ${prefilledEstimate}`,
      }));
    }
  }, [prefilledEstimate]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 9;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage(t.errName);
      return;
    }
    if (!formData.companyName.trim()) {
      setErrorMessage(t.errCompany);
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMessage(t.errEmail);
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMessage(t.errPhone);
      return;
    }

    setIsSubmitting(true);

    // Simulate immediate, deterministic submission
    setTimeout(() => {
      const generatedRef = `ISA-BPN-${Date.now().toString().slice(-6)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleDownloadSubmittedPdf = () => {
    downloadPdaPdf({
      vesselName: formData.vesselName || 'Vessel Inquiry',
      vesselType: formData.serviceType,
      grossTonnage: 3500,
      portStayDays: 3,
      terminal: formData.terminal,
      clientName: formData.fullName,
      companyName: formData.companyName,
      items: [
        {
          category: 'Service Request',
          description: formData.serviceType,
          unit: '1 Inquiry',
          amount: 12000000,
        },
        {
          category: 'Port Handling',
          description: `Clearance & Coordination at ${formData.terminal}`,
          unit: 'Inward/Outward',
          amount: 2500000,
        },
      ],
      totalAmount: 14500000,
      notes: formData.message,
      language: lang,
    });
  };

  // WhatsApp pre-filled bridge
  const buildWhatsAppUrl = () => {
    const greeting = lang === 'en'
      ? `Dear Mr. Jasmin (PT Intan Samudera Agency),\n\nI would like to request operational port agency and marine support in Balikpapan:\n`
      : `Halo Mr. Jasmin (PT Intan Samudera Agency),\n\nSaya ingin berkoordinasi terkait kebutuhan operasional maritim di Balikpapan:\n`;

    const labels = lang === 'en' ? {
      ref: '• Ref ID:',
      name: '• Name:',
      comp: '• Company:',
      srv: '• Service:',
      vsl: '• Vessel / Cargo:',
      eta: '• ETA:',
      term: '• Terminal:',
      email: '• Email:',
      msg: '• Message:',
      thanks: 'Thank you.'
    } : {
      ref: '• No. Ref:',
      name: '• Nama:',
      comp: '• Perusahaan:',
      srv: '• Layanan:',
      vsl: '• Kapal / Muatan:',
      eta: '• Estimasi Tiba (ETA):',
      term: '• Terminal:',
      email: '• Email:',
      msg: '• Pesan:',
      thanks: 'Terima kasih.'
    };

    const text = encodeURIComponent(
      `${greeting}` +
      `${labels.ref} ${referenceId}\n` +
      `${labels.name} ${formData.fullName}\n` +
      `${labels.comp} ${formData.companyName}\n` +
      `${labels.srv} ${formData.serviceType}\n` +
      `${labels.vsl} ${formData.vesselName || '-'}\n` +
      `${labels.eta} ${formData.etaDate || '-'}\n` +
      `${labels.term} ${formData.terminal}\n` +
      `${labels.email} ${formData.email}\n` +
      `${labels.msg} ${formData.message || '-'}\n\n` +
      `${labels.thanks}`
    );
    return `https://wa.me/6282229357500?text=${text}`;
  };

  const serviceOptions = lang === 'en' ? [
    { value: "Shipping Agency & Port Clearance", label: "Shipping Agency & Port Clearance (CIQP)" },
    { value: "Logistik Maritim & Bongkar Muat", label: "Maritime Logistics & Cargo Handling (Stevedoring)" },
    { value: "Vessel Husbandry & Crew Handling", label: "Vessel Husbandry & Crew Change" },
    { value: "Tug & Barge / LCT Chartering", label: "Tug & Barge / LCT Chartering" },
    { value: "Bunker & Fresh Water Supply", label: "Bunker MGO/HSD & Potable Fresh Water Supply" },
    { value: "Ship Spares & Technical Support", label: "Ship Spares in Transit & Technical Assistance" },
    { value: "General Port Inquiry", label: "General Port / Other Inquiries" },
  ] : [
    { value: "Shipping Agency & Port Clearance", label: "Shipping Agency & Port Clearance (CIQP)" },
    { value: "Logistik Maritim & Bongkar Muat", label: "Logistik Maritim & Bongkar Muat (Stevedoring)" },
    { value: "Vessel Husbandry & Crew Handling", label: "Vessel Husbandry & Crew Change (Awak Kapal)" },
    { value: "Tug & Barge / LCT Chartering", label: "Tug & Barge / LCT Chartering" },
    { value: "Bunker & Fresh Water Supply", label: "Bunker MGO/HSD & Suplai Air Tawar" },
    { value: "Ship Spares & Technical Support", label: "Ship Spares in Transit & Underwater Inspection" },
    { value: "Konsultasi & Koordinasi Lainnya", label: "Konsultasi / Koordinasi Lainnya" },
  ];

  return (
    <section id="kontak" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Operational Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Executive Contact Card */}
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-sm space-y-5">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Building2 className="w-5 h-5 text-blue-900" />
                <span className="text-sm font-bold text-slate-900">{t.cardTitle}</span>
              </div>

              {/* Director Details */}
              <div className="p-4 rounded-lg bg-blue-50/60 border border-blue-100 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-blue-900">
                  {t.directorLabel}
                </div>
                <div className="text-base font-bold text-slate-900">
                  {COMPANY_CONTACT.directorName}
                </div>
                <div className="text-xs text-slate-600">
                  {t.directorRoleText}
                </div>
                <div className="pt-2 flex flex-col gap-1.5 font-mono text-xs">
                  <a
                    href={`tel:${COMPANY_CONTACT.phone}`}
                    className="flex items-center gap-2 text-blue-950 font-bold hover:text-blue-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-900" />
                    <span>{COMPANY_CONTACT.phoneFormatted}</span>
                  </a>
                  <a
                    href={COMPANY_CONTACT.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-700 font-semibold hover:underline"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.waDirect}</span>
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {t.emailLabel}
                </div>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="font-mono text-sm font-bold text-blue-900 hover:underline block break-all"
                >
                  {COMPANY_CONTACT.email}
                </a>
                <div className="text-[11px] text-slate-500">
                  {t.emailSub}
                </div>
              </div>

              {/* Operational Domicile & Hours */}
              <div className="space-y-3 text-xs text-slate-600 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">{t.addressLabel}</span>
                    <p className="mt-0.5 text-slate-600">{COMPANY_CONTACT.officeAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">{t.hoursLabel}</span>
                    <p className="mt-0.5 text-slate-600">{COMPANY_CONTACT.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Port Notice */}
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{t.noticeTitle}</span>
              </div>
              <p className="text-amber-900 leading-relaxed text-[11px]">
                {t.noticeText}
              </p>
            </div>

          </div>

          {/* Right Column: Professional Submission Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-base font-bold text-slate-900">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {t.formSubtitle}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* 1. Service Type & Target Terminal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.serviceTypeLabel} <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.terminalLabel}
                    </label>
                    <select
                      value={formData.terminal}
                      onChange={(e) => setFormData({ ...formData, terminal: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="Terminal LDC East Indonesia">1. Terminal LDC East Indonesia</option>
                      <option value="Terminal Kutai Refinery Nusantara (KRN)">2. Terminal Kutai Refinery Nusantara (KRN)</option>
                      <option value="Terminal Wahana Prima Sejati (WPS)">3. Terminal Wahana Prima Sejati (WPS)</option>
                      <option value="Terminal Agpa Refinery Complex (ARC)">4. Terminal Agpa Refinery Complex (ARC)</option>
                      <option value="Terminal Interport ILSS">5. Terminal Interport ILSS</option>
                      <option value="Balikpapan Coal Terminal (BCT)">6. Balikpapan Coal Terminal (BCT)</option>
                      <option value="Pelabuhan Semayang">7. Pelabuhan Semayang</option>
                    </select>
                  </div>
                </div>

                {/* 2. Vessel Name & ETA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.vesselNameLabel}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder={t.vesselPlaceholder}
                        value={formData.vesselName}
                        onChange={(e) => setFormData({ ...formData, vesselName: e.target.value })}
                        className="w-full px-3 py-2 pl-9 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                      />
                      <Ship className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.etaLabel}
                    </label>
                    <input
                      type="date"
                      value={formData.etaDate}
                      onChange={(e) => setFormData({ ...formData, etaDate: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                {/* 3. User & Company Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.fullNameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.fullNameLabel}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.companyLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.companyPlaceholder}
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      required
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.emailInputLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.phoneInputLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+62 8..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 font-mono"
                    />
                  </div>
                </div>

                {/* 4. Message / Inquiry Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 leading-relaxed"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500">
                    {t.fastResponseNote}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? t.submittingBtn : t.submitBtn}</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success / Confirmation State */
              <div className="py-6 space-y-6 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-emerald-950">
                      {t.successTitle}
                    </h4>
                    <p className="text-xs text-emerald-800 mt-0.5">
                      {t.refLabel} <strong className="font-mono">{referenceId}</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 text-xs space-y-2 text-slate-700">
                  <div className="font-bold text-slate-900 pb-2 border-b border-slate-200">
                    {t.summaryTitle}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-left">
                    <div><span className="text-slate-500">{lang === 'en' ? 'Principal:' : 'Pemohon:'}</span> {formData.fullName} ({formData.companyName})</div>
                    <div><span className="text-slate-500">{lang === 'en' ? 'Service:' : 'Layanan:'}</span> {formData.serviceType}</div>
                    <div><span className="text-slate-500">{lang === 'en' ? 'Vessel:' : 'Kapal:'}</span> {formData.vesselName || '-'}</div>
                    <div><span className="text-slate-500">{lang === 'en' ? 'Terminal:' : 'Terminal:'}</span> {formData.terminal}</div>
                    <div><span className="text-slate-500">Email:</span> {formData.email}</div>
                    <div><span className="text-slate-500">{lang === 'en' ? 'Phone:' : 'Telepon:'}</span> {formData.phone}</div>
                  </div>
                  {formData.message && (
                    <div className="pt-2 text-slate-600 border-t border-slate-200 text-left">
                      <span className="text-slate-500 font-semibold">{lang === 'en' ? 'Notes:' : 'Catatan:'}</span> {formData.message}
                    </div>
                  )}
                </div>

                {/* Direct Action Bridge to WhatsApp Mr. Jasmin & Download PDF */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md text-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t.forwardWaBtn}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleDownloadSubmittedPdf}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md text-center"
                    >
                      <FileDown className="w-4 h-4 text-amber-400" />
                      <span>{lang === 'en' ? 'Download PDF Summary' : 'Unduh Ringkasan PDF'}</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        serviceType: 'Shipping Agency & Port Clearance',
                        terminal: 'Terminal LDC East Indonesia',
                        vesselName: '',
                        etaDate: '',
                        message: '',
                      });
                    }}
                    className="w-full text-center text-xs font-semibold text-slate-600 hover:text-slate-900 py-2"
                  >
                    {t.newInquiryBtn}
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
