'use client';

import React, { useEffect, useState } from 'react';
import { Send, Clock, Building2, ArrowUpRight } from 'lucide-react';
import { CORPORATE_EMAILS, Language, SITE_CONTENT } from '@/data/content';

interface ContactDirectoryProps {
  language: Language;
  selectedEmail: string;
  selectedServiceTitle: string;
  onSelectEmail: (email: string, serviceTitle?: string) => void;
}

export default function ContactDirectory({
  language,
  selectedEmail,
  selectedServiceTitle,
  onSelectEmail,
}: ContactDirectoryProps) {
  const content = SITE_CONTENT[language].contactSection;
  const services = SITE_CONTENT[language].services;

  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceChoice, setServiceChoice] = useState(selectedServiceTitle || services[0].title);
  const [incoterm, setIncoterm] = useState('FOB / CIF (Estándar)');
  const [message, setMessage] = useState('');
  const [submittedPreview, setSubmittedPreview] = useState<string | null>(null);

  useEffect(() => {
    if (selectedServiceTitle) {
      setServiceChoice(selectedServiceTitle);
    }
  }, [selectedServiceTitle]);

  const handleServiceChange = (val: string) => {
    setServiceChoice(val);
    const matched = services.find((s) => s.title === val);
    if (matched) {
      onSelectEmail(matched.departmentEmail, matched.title);
    }
  };

  const handleSelectDepartmentAndScrollForm = (email: string, roleTitle: string) => {
    onSelectEmail(email, roleTitle);
    const formSection = document.getElementById('formulario-contacto');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetMail = selectedEmail || CORPORATE_EMAILS.comercial1;
    const subject = encodeURIComponent(
      `[TRADE LINK LOGISTIC SAS] ${serviceChoice} - ${company || fullName}`
    );
    const body = encodeURIComponent(
      `SOLICITUD CORPORATIVA - TRADE LINK LOGISTIC SAS\n` +
        `----------------------------------------------------\n` +
        `Unidad / Servicio: ${serviceChoice}\n` +
        `Modalidad / Incoterm: ${incoterm}\n\n` +
        `DATOS DEL SOLICITANTE:\n` +
        `• Nombre y Cargo: ${fullName}\n` +
        `• Empresa / NIT: ${company}\n` +
        `• Correo Corporativo: ${senderEmail}\n` +
        `• Teléfono / WhatsApp: ${phone}\n\n` +
        `DETALLE DE LA OPERACIÓN O CONSULTA:\n` +
        `${message}\n` +
        `----------------------------------------------------\n` +
        `Enviado desde tradelinklogistic.com`
    );

    setSubmittedPreview(targetMail);
    window.location.href = `mailto:${targetMail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#000000]">
      {/* SECTION A: INDEPENDENT OFFICIAL DIRECTORY OF DEPARTMENTS */}
      <section id="directorio" className="py-20 border-b border-[#C39541]/30 bg-[#000000]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C39541] block">
              {language === 'es' ? 'ATENCIÓN CORPORATIVA POR ÁREA' : 'CORPORATE DESK DIRECTORY'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide">
              {language === 'es'
                ? 'Directorio Oficial de Departamentos'
                : 'Official Department Directory'}
            </h2>
            <p className="text-white/75 text-base leading-relaxed">{content.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.departments.map((dept) => {
              const isSelected = selectedEmail === dept.email;
              const isPrimary = dept.id === 'comercial1';
              return (
                <div
                  key={dept.id}
                  className={`p-7 rounded-md border transition-all flex flex-col justify-between gap-6 ${
                    isSelected
                      ? 'bg-[#111111] border-[#C39541] shadow-[0_0_25px_rgba(195,149,65,0.25)]'
                      : 'bg-[#0A0A0A] border-[#C39541]/35 hover:border-[#C39541]'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`text-[11px] px-2.5 py-0.5 rounded font-bold uppercase ${
                          isPrimary
                            ? 'bg-[#FF5500] text-white'
                            : 'bg-[#000000] text-[#F0CC81] border border-[#C39541]/50'
                        }`}
                      >
                        {dept.alias}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-white/60">
                        <Clock className="w-3.5 h-3.5 text-[#C39541]" />
                        <span>{dept.sla}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white">{dept.role}</h3>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => handleSelectDepartmentAndScrollForm(dept.email, dept.role)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FF5500] hover:bg-[#e64d00] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>{language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION B: SEPARATED DEDICATED CONTACT FORM SECTION */}
      <section id="formulario-contacto" className="py-20 lg:py-24 bg-[#050505]">
        <div className="max-w-[920px] mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C39541] block">
              {language === 'es' ? 'SOLICITUD DE ASESORÍA Y COTIZACIÓN' : 'ADVISORY & QUOTE REQUEST'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide">
              {content.form.title}
            </h2>
            <p className="text-white/75 text-sm sm:text-base">{content.form.subtitle}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-7 sm:p-10 rounded-md bg-[#0A0A0A] border border-[#C39541]/50 shadow-[0_20px_50px_rgba(0,0,0,0.85)] space-y-6"
          >
            {/* Service & Incoterm */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                  {content.form.serviceLabel}
                </label>
                <select
                  value={serviceChoice}
                  onChange={(e) => handleServiceChange(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white focus:outline-none focus:border-[#F0CC81]"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Facturación y Finanzas">
                    {language === 'es'
                      ? 'Facturación y Pagos (Contabilidad)'
                      : 'Billing & Finance (Accounting)'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                  {content.form.incotermLabel}
                </label>
                <select
                  value={incoterm}
                  onChange={(e) => setIncoterm(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white focus:outline-none focus:border-[#F0CC81]"
                >
                  <option value="EXW (Ex Works)">EXW (Ex Works)</option>
                  <option value="FOB / FCA">FOB / FCA (Free On Board)</option>
                  <option value="CIF / CIP">CIF / CIP (Cost, Insurance & Freight)</option>
                  <option value="DAP / DDP">DAP / DDP (Door to Door)</option>
                  <option value="Consultoría / Estudio / Capacitación">
                    {language === 'es'
                      ? 'Consultoría / Estudio / Capacitación'
                      : 'Advisory / Study / Training'}
                  </option>
                </select>
              </div>
            </div>

            {/* Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                  {content.form.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={content.form.namePlaceholder}
                  className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0CC81]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                  {content.form.companyLabel}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={content.form.companyPlaceholder}
                    className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0CC81]"
                  />
                  <Building2 className="w-4 h-4 text-[#C39541] absolute right-3.5 top-3.5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                  {content.form.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder={content.form.emailPlaceholder}
                  className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0CC81]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                  {content.form.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={content.form.phonePlaceholder}
                  className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0CC81]"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold uppercase text-[#F0CC81] mb-2">
                {content.form.messageLabel}
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={content.form.messagePlaceholder}
                className="w-full px-4 py-3 rounded bg-[#000000] border border-[#C39541]/50 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#F0CC81]"
              />
            </div>

            {/* CTA -> "Contactar Asesor" */}
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-md bg-[#FF5500] hover:bg-[#e64d00] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-[0_10px_30px_rgba(255,85,0,0.4)] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}</span>
            </button>

            {submittedPreview && (
              <div className="p-3 rounded bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs font-semibold text-center">
                {language === 'es'
                  ? '✓ Solicitud preparada exitosamente para envío a su asesor.'
                  : '✓ Request successfully prepared for your advisor.'}
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
