'use client';

import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Language, SITE_CONTENT, ServiceItem } from '@/data/content';

interface ServicesGridProps {
  language: Language;
  onSelectServiceEmail: (email: string, serviceTitle?: string) => void;
}

export default function ServicesGrid({ language, onSelectServiceEmail }: ServicesGridProps) {
  const content = SITE_CONTENT[language];
  const operationsServices = content.services.filter((s) => s.pillar === 'operations');
  const advisoryServices = content.services.filter((s) => s.pillar === 'advisory');

  const renderServiceBlock = (service: ServiceItem) => (
    <article
      key={service.id}
      id={service.id}
      className="group rounded-md bg-[#0A0A0A] border border-[#C39541]/40 hover:border-[#C39541] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.8)]"
    >
      <div>
        {/* Clean Real-World Photography WITHOUT any number/icon box or email box overlay */}
        <div className="relative h-64 overflow-hidden border-b border-[#C39541]/30">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
        </div>

        {/* Content Body */}
        <div className="p-7 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#F0CC81] transition-colors">
              {service.title}
            </h3>
            <p className="text-sm font-semibold text-[#C39541] mt-1">{service.subtitle}</p>
          </div>

          <p className="text-sm text-white/80 leading-relaxed">{service.description}</p>

          {/* Deliverables List */}
          <div className="pt-4 border-t border-white/10 space-y-2.5">
            {service.deliverables.map((item, dIdx) => (
              <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                <CheckCircle2 className="w-4 h-4 text-[#C39541] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer with "Contactar Asesor" CTA */}
      <div className="px-7 py-4 bg-[#000000] border-t border-[#C39541]/30 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {service.specs.slice(0, 2).map((spec, sIdx) => (
            <span
              key={sIdx}
              className="px-2.5 py-1 rounded bg-[#111111] border border-[#C39541]/30 text-[11px] font-semibold text-[#F0CC81]"
            >
              {spec}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onSelectServiceEmail(service.departmentEmail, service.title)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#FF5500] hover:bg-[#e64d00] text-white font-bold text-xs uppercase tracking-wider shadow-[0_6px_20px_rgba(255,85,0,0.35)] transition-all cursor-pointer shrink-0"
        >
          <span>{language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );

  return (
    <div className="bg-[#000000]">
      {/* PILLAR 1: OPERACIONES GLOBALES Y AGENCIAMIENTO ADUANAL (4 Units) */}
      <section id="operaciones" className="py-20 border-b border-[#C39541]/30">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C39541] block">
              {content.operationsSection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide">
              {content.operationsSection.title}
            </h2>
            <p className="text-white/75 text-base leading-relaxed">
              {content.operationsSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operationsServices.map((service) => renderServiceBlock(service))}
          </div>
        </div>
      </section>

      {/* PILLAR 2: ESTUDIOS DE MERCADO, CLASIFICACIÓN ARANCELARIA Y CAPACITACIÓN (3 Units) */}
      <section id="consultoria" className="py-20 border-b border-[#C39541]/30 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C39541] block">
              {content.advisorySection.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide">
              {content.advisorySection.title}
            </h2>
            <p className="text-white/75 text-base leading-relaxed">
              {content.advisorySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service) => renderServiceBlock(service))}
          </div>
        </div>
      </section>
    </div>
  );
}
