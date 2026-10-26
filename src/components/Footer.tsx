'use client';

import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CORPORATE_EMAILS, Language, SITE_CONTENT } from '@/data/content';

interface FooterProps {
  language: Language;
  onSelectServiceEmail?: (email: string, serviceTitle?: string) => void;
}

export default function Footer({ language, onSelectServiceEmail }: FooterProps) {
  const content = SITE_CONTENT[language];

  return (
    <footer className="bg-[#000000] border-t border-[#C39541]/40 text-white/75">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Official Brand Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 overflow-hidden bg-[#000000]">
                <img
                  src="/assets/brand/logo_fondo_negro.jpeg"
                  alt="TRADE LINK LOGISTIC SAS"
                  className="w-full h-full object-contain scale-125"
                />
              </div>
              <div>
                <span className="block text-xl font-extrabold tracking-[0.06em] text-[#F0CC81]">
                  TRADE LINK
                </span>
                <span className="block text-xs font-bold tracking-[0.2em] text-[#C39541]">
                  LOGISTIC S.A.S
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
              {content.footer.tagline}
            </p>

            <div className="pt-2 space-y-1 text-xs text-white/65">
              <p className="text-[#F0CC81] font-semibold">{content.footer.headquarters}</p>
              <p>{content.footer.ports}</p>
            </div>
          </div>

          {/* Col 2: 7 Business Units */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#C39541] font-extrabold">
              {language === 'es' ? 'UNIDADES DE NEGOCIO' : 'BUSINESS UNITS'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {content.services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="hover:text-[#F0CC81] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C39541]" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Action CTA */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#C39541] font-extrabold">
              {language === 'es' ? 'ATENCIÓN INMEDIATA' : 'IMMEDIATE ASSISTANCE'}
            </h4>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {language === 'es'
                ? 'Conéctese con nuestro equipo de especialistas en comercio internacional, transporte multimodal y aduanas.'
                : 'Connect with our specialists in international trade, multimodal freight, and customs brokerage.'}
            </p>
            <a
              href="#formulario-contacto"
              onClick={(e) => {
                if (onSelectServiceEmail) {
                  e.preventDefault();
                  onSelectServiceEmail(CORPORATE_EMAILS.comercial1, 'Contacto General');
                }
              }}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded bg-[#FF5500] hover:bg-[#e64d00] text-white font-extrabold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(255,85,0,0.35)] transition-all"
            >
              <span>{language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C39541]" />
            <span>{content.footer.legalNote}</span>
          </div>
          <div>© 2026 TRADE LINK LOGISTIC SAS. {content.footer.rights}</div>
        </div>
      </div>
    </footer>
  );
}
