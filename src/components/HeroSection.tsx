'use client';

import React, { useState } from 'react';
import { CORPORATE_EMAILS, Language } from '@/data/content';

interface HeroSectionProps {
  language: Language;
  onSelectServiceEmail: (email: string, serviceTitle?: string) => void;
}

export default function HeroSection({ language, onSelectServiceEmail }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs =
    language === 'es'
      ? [
          {
            label: 'Agenciamiento Aduanal',
            href: '#agenciamiento-aduanal',
            email: CORPORATE_EMAILS.customs1,
            desc: 'Liberación nacional e internacional ante DIAN y VUCE con cumplimiento normativo 100% garantizado.',
          },
          {
            label: 'Carga Aérea',
            href: '#transporte-aereo',
            email: CORPORATE_EMAILS.comercial1,
            desc: 'Salidas prioritarias y consolidados IATA desde EE. UU., Asia y Europa hacia los aeropuertos de Colombia.',
          },
          {
            label: 'Carga Marítima',
            href: '#transporte-maritimo',
            email: CORPORATE_EMAILS.comercial1,
            desc: 'Contenedores completos (FCL) y carga consolidada (LCL) conectando Cartagena y Buenaventura con el mundo.',
          },
          {
            label: 'Transporte Terrestre',
            href: '#transporte-terrestre',
            email: CORPORATE_EMAILS.operaciones2,
            desc: 'Distribución nacional puerto-planta, Tránsito Aduanero (DTA), OTM y corredores transfronterizos andinos.',
          },
          {
            label: 'Estudios & Aranceles',
            href: '#consultoria',
            email: CORPORATE_EMAILS.customs1,
            desc: 'Estudios de mercado para internacionalización, clasificación arancelaria a 10 dígitos y capacitaciones ejecutivas.',
          },
        ]
      : [
          {
            label: 'Customs Brokerage',
            href: '#agenciamiento-aduanal',
            email: CORPORATE_EMAILS.customs1,
            desc: 'Full customs clearance before DIAN & VUCE with 100% guaranteed regulatory compliance.',
          },
          {
            label: 'Air Freight',
            href: '#transporte-aereo',
            email: CORPORATE_EMAILS.comercial1,
            desc: 'Priority uplift and weekly IATA consolidations from the USA, Asia, and Europe into Colombia.',
          },
          {
            label: 'Ocean Freight',
            href: '#transporte-maritimo',
            email: CORPORATE_EMAILS.comercial1,
            desc: 'Full Container Load (FCL) and consolidated (LCL) departures linking Cartagena & Buenaventura globally.',
          },
          {
            label: 'Land Transport',
            href: '#transporte-terrestre',
            email: CORPORATE_EMAILS.operaciones2,
            desc: 'Port-to-plant drayage, Customs Transit (DTA), OTM, and cross-border Andean trucking corridors.',
          },
          {
            label: 'Market Studies & Tariffs',
            href: '#consultoria',
            email: CORPORATE_EMAILS.customs1,
            desc: 'Internationalization market studies, 10-digit HS tariff classification, and corporate logistics training.',
          },
        ];

  return (
    <section
      id="top"
      className="relative w-full min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-[#C39541]/40"
    >
      {/* Full-Width Twilight Container Ship + Cargo Jet Photography (Exact Option A) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/brand/hero-expeditors.jpg"
          alt="TRADE LINK LOGISTIC SAS - Global Ocean & Air Operations"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.38) 45%, rgba(0,0,0,0.78) 100%)',
          }}
        />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-10 max-w-[1220px] w-full mx-auto px-4 sm:px-8 py-16 text-center flex flex-col items-center">
        <h1 className="uppercase tracking-[0.03em] leading-[1.12] drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)]">
          <span className="block text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white">
            {language === 'es' ? 'LIDERAZGO GLOBAL EN' : 'GLOBAL LEADERSHIP IN'}
          </span>
          <span
            className="block text-3xl sm:text-5xl lg:text-[54px] font-extrabold mt-1"
            style={{
              background: 'linear-gradient(90deg, #C39541 0%, #F0CC81 50%, #C39541 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {language === 'es'
              ? 'LOGÍSTICA INTEGRAL Y ADUANAS'
              : 'INTEGRATED LOGISTICS & CUSTOMS'}
          </span>
        </h1>

        {/* Expeditors-Style 5-Segment Horizontal Bar */}
        <div className="mt-10 w-full max-w-[1060px] rounded-md overflow-hidden border border-[#C39541] bg-[#000000]/75 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.75)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[#C39541]/60">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <a
                  key={tab.label}
                  href={tab.href}
                  onMouseEnter={() => setActiveTab(idx)}
                  onClick={() => setActiveTab(idx)}
                  className={`py-4 px-3 text-sm sm:text-[15px] font-medium transition-all flex items-center justify-center text-center ${
                    isActive
                      ? 'bg-[#000000] text-white font-semibold shadow-inner'
                      : 'bg-transparent text-white/90 hover:bg-[#000000]/80 hover:text-[#F0CC81]'
                  }`}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-white/90 max-w-2xl font-medium drop-shadow">
          {tabs[activeTab].desc}
        </p>

        {/* CTA Button -> "Contactar Asesor" */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() =>
              onSelectServiceEmail(
                CORPORATE_EMAILS.comercial1,
                language === 'es' ? 'Asesoría Comercial General' : 'General Commercial Advisory'
              )
            }
            className="px-10 py-4 rounded-md bg-[#FF5500] hover:bg-[#e64d00] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base tracking-[0.06em] uppercase shadow-[0_10px_30px_rgba(255,85,0,0.45)] transition-all cursor-pointer"
          >
            {language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}
          </button>
        </div>
      </div>
    </section>
  );
}
