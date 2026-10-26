'use client';

import React, { useState } from 'react';
import { CORPORATE_EMAILS, Language, SITE_CONTENT } from '@/data/content';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import CorridorsAndArchitecture from '@/components/CorridorsAndArchitecture';
import ContactDirectory from '@/components/ContactDirectory';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('es');
  const [selectedEmail, setSelectedEmail] = useState<string>(CORPORATE_EMAILS.comercial1);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>(
    SITE_CONTENT.es.services[0].title
  );

  const handleSelectServiceEmail = (email: string, serviceTitle?: string) => {
    setSelectedEmail(email);
    if (serviceTitle) {
      setSelectedServiceTitle(serviceTitle);
    }
    const formEl = document.getElementById('formulario-contacto');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#000000] text-white">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onSelectServiceEmail={handleSelectServiceEmail}
      />

      <main className="flex-1">
        <HeroSection
          language={language}
          onSelectServiceEmail={handleSelectServiceEmail}
        />

        <ServicesGrid
          language={language}
          onSelectServiceEmail={handleSelectServiceEmail}
        />

        <CorridorsAndArchitecture
          language={language}
          onSelectServiceEmail={handleSelectServiceEmail}
        />

        <ContactDirectory
          language={language}
          selectedEmail={selectedEmail}
          selectedServiceTitle={selectedServiceTitle}
          onSelectEmail={(email, title) => {
            setSelectedEmail(email);
            if (title) setSelectedServiceTitle(title);
          }}
        />
      </main>

      <Footer
        language={language}
        onSelectServiceEmail={handleSelectServiceEmail}
      />
    </div>
  );
}
