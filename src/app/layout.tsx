import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TRADE LINK LOGISTIC SAS | Ingeniería Logística Global & Aduanas',
  description:
    'Agenciamiento aduanal, transporte internacional aéreo, marítimo y terrestre, estudios de mercado para la internacionalización, clasificación arancelaria y capacitaciones corporativas.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  keywords: [
    'Trade Link Logistic SAS',
    'tradelinklogistic.com',
    'Agenciamiento Aduanal Colombia',
    'Transporte Internacional Aéreo Marítimo Terrestre',
    'Clasificación Arancelaria DIAN',
    'Estudios de Mercado Internacionalización',
    'Capacitaciones en Logística y Comercio Exterior',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#FFFFFF] selection:bg-[#C39541] selection:text-[#000000]">
        {children}
      </body>
    </html>
  );
}
