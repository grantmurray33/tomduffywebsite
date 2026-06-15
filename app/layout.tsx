import type { Metadata } from 'next';
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { OrganizationJsonLd } from '@/components/seo/JsonLd';
import { firm } from '@/content/site';
import { buildMetadata } from '@/lib/metadata';
import './globals.css';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif-loaded',
  display: 'swap',
});

const sans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-loaded',
  display: 'swap',
});

export const metadata: Metadata = buildMetadata({
  title: firm.name,
  description: firm.description,
  path: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className={`${sans.className} ${serif.variable}`}>
        <OrganizationJsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
