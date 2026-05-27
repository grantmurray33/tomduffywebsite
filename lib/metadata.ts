import type { Metadata } from 'next';
import { firm } from '@/content/site';

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.tomduffycpa.com';
  return url.replace(/\/$/, '');
}

export function buildMetadata({
  title,
  description,
  path = '',
  type = 'website',
}: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
  const fullTitle =
    title === firm.shortName || title === firm.name
      ? `${firm.name} | ${firm.tagline}`
      : `${title} | ${firm.shortName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: firm.name,
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: { index: true, follow: true },
  };
}
