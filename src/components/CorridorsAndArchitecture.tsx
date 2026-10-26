'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CORPORATE_EMAILS, Language, SITE_CONTENT } from '@/data/content';
import Globe3D from './Globe3D';

interface CorridorsAndArchitectureProps {
  language: Language;
  onSelectServiceEmail: (email: string, serviceTitle?: string) => void;
}

export default function CorridorsAndArchitecture({
  language,
  onSelectServiceEmail,
}: CorridorsAndArchitectureProps) {
  const corridorsContent = SITE_CONTENT[language].corridorsSection;

  return (
    <div className="bg-[#000000]">
      {/* GLOBAL TRADE CORRIDORS + TECH BLUE WORLD GLOBE */}
      <section id="corredores" className="py-20 border-b border-[#C39541]/30">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C39541] block">
              {language === 'es' ? 'RED DE CORREDORES INTERNACIONALES' : 'GLOBAL TRADE CORRIDORS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wide">
              {corridorsContent.title}
            </h2>
            <p className="text-white/75 text-base leading-relaxed">{corridorsContent.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left (5 cols): Interactive Tech Blue World Globe + Continent Mesh */}
            <div className="lg:col-span-5 rounded-md bg-[#050914] border border-[#C39541]/40 p-4 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
              <Globe3D language={language} />
            </div>

            {/* Right (7 cols): Strategic Trade Corridors Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {corridorsContent.corridors.map((c) => (
                <div
                  key={c.code}
                  className="p-6 rounded-md bg-[#0A0A0A] border border-[#C39541]/40 hover:border-[#C39541] transition-all flex flex-col justify-between gap-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-[#C39541]">{c.frequency}</span>
                      <span className="text-[11px] font-mono text-[#38BDF8]">{c.coords}</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mt-1">
                        {c.origin} <span className="text-[#C39541]">↔</span> {c.destination}
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs sm:text-sm">
                      <div>
                        <span className="text-white/50 block text-xs uppercase">
                          {language === 'es' ? 'Modalidad' : 'Mode'}
                        </span>
                        <span className="text-white font-medium">{c.mode}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block text-xs uppercase">
                          {language === 'es' ? 'Tránsito Estimado' : 'Transit Time'}
                        </span>
                        <span className="text-[#F0CC81] font-bold">{c.transitTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        onSelectServiceEmail(
                          CORPORATE_EMAILS.comercial1,
                          `${c.origin} - ${c.destination}`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#FF5500] hover:bg-[#e64d00] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>{language === 'es' ? 'Contactar Asesor' : 'Contact Advisor'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
