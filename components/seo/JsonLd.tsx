import { firm } from '@/content/site';
import { getSiteUrl } from '@/lib/metadata';
import type { Article } from '@/content/articles';

export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: firm.name,
    description: firm.description,
    url: siteUrl,
    email: firm.email,
    telephone: firm.phone,
    areaServed: ['United States', 'Puerto Rico'],
    priceRange: '$$$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const siteUrl = getSiteUrl();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: firm.name,
    },
    publisher: {
      '@type': 'Organization',
      name: firm.name,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/${article.slug}`,
    ...(article.pdfUrl ? { associatedMedia: article.pdfUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
