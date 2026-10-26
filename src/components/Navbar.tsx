'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '@/data/content';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onSelectServiceEmail: (email: string, serviceTitle?: string) => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems =
    language === 'es'
      ? [
          { label: 'AGENCIAMIENTO ADUANAL', href: '#agenciamiento-aduanal' },
          { label: 'CARGA AÉREA', href: '#transporte-aereo' },
          { label: 'CARGA MARÍTIMA', href: '#transporte-maritimo' },
          { label: 'TRANSPORTE TERRESTRE', href: '#transporte-terrestre' },
          { label: 'CONSULTORÍA & ACADEMIA', href: '#consultoria' },
          { label: 'CONTACTO', href: '#directorio' },
        ]
      : [
          { label: 'CUSTOMS BROKERAGE', href: '#agenciamiento-aduanal' },
          { label: 'AIR FREIGHT', href: '#transporte-aereo' },
          { label: 'OCEAN FREIGHT', href: '#transporte-maritimo' },
          { label: 'LAND TRANSPORT', href: '#transporte-terrestre' },
          { label: 'ADVISORY & ACADEMY', href: '#consultoria' },
          { label: 'CONTACT', href: '#directorio' },
        ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000] border-b border-[#C39541]/30">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 h-24 flex items-center justify-between gap-6">
        {/* Left: Official Logo on Pure Black + Horizontal Gold Typography (Exact Option A) */}
        <a href="#top" className="flex items-center gap-4 group shrink-0">
          <div className="w-16 h-16 overflow-hidden flex items-center justify-center bg-[#000000]">
            <img
              src="/assets/brand/logo_fondo_negro.jpeg"
              alt="TRADE LINK LOGISTIC SAS"
              className="w-full h-full object-contain scale-125"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="text-xl sm:text-2xl font-extrabold tracking-[0.06em] uppercase"
              style={{
                background: 'linear-gradient(90deg, #C39541 0%, #F0CC81 55%, #C39541 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              TRADE LINK
            </span>
            <span className="text-sm sm:text-base font-bold tracking-[0.12em] text-[#C39541] uppercase">
              LOGISTIC
            </span>
          </div>
        </a>

        {/* Right: Clean Uppercase Navigation Links in White + ES/EN Toggle (Exact Option A) */}
        <div className="hidden xl:flex items-center gap-7 ml-auto">
          <nav className="flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium tracking-[0.08em] text-white/90 hover:text-[#F0CC81] transition-colors uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Subtle Language Selector */}
          <div className="flex items-center border border-[#C39541]/50 rounded overflow-hidden text-[11px] font-semibold">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-2.5 py-1 transition-colors cursor-pointer ${
                language === 'es'
                  ? 'bg-[#C39541] text-[#000000] font-bold'
                  : 'bg-[#000000] text-white/75 hover:text-white'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 transition-colors cursor-pointer ${
                language === 'en'
                  ? 'bg-[#C39541] text-[#000000] font-bold'
                  : 'bg-[#000000] text-white/75 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded border border-[#C39541]/50 text-[#F0CC81]"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#000000] border-t border-[#C39541]/30 px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-semibold tracking-wider text-white hover:text-[#F0CC81] border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 rounded text-xs font-bold ${
                language === 'es' ? 'bg-[#C39541] text-black' : 'border border-white/20 text-white'
              }`}
            >
              ESPAÑOL
            </button>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded text-xs font-bold ${
                language === 'en' ? 'bg-[#C39541] text-black' : 'border border-white/20 text-white'
              }`}
            >
              ENGLISH
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
