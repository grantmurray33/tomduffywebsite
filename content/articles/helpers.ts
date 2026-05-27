import type { Article, ArticleContentBlock } from './types';

export function migrationPlaceholder(
  excerpt: string,
  pdfUrl?: string,
): ArticleContentBlock[] {
  const blocks: ArticleContentBlock[] = [
    { type: 'paragraph', text: excerpt },
    {
      type: 'placeholder',
      label: 'Full article body — manual migration required',
      note:
        'Paste the complete article text from the original tomduffycpa.com page or PDF into this article\'s content array in content/articles/data.ts. Do not add legal or tax claims beyond the source material.',
    },
  ];
  if (pdfUrl) {
    blocks.push({
      type: 'paragraph',
      text: `A PDF version of this article was published on the prior site. Reference: ${pdfUrl}`,
    });
  }
  return blocks;
}

export function standardDisclaimer(): ArticleContentBlock {
  return {
    type: 'disclaimer',
    text: 'This article is for general informational purposes only and does not constitute legal or tax advice. Consult qualified counsel regarding your specific situation.',
  };
}

export function defineArticle(
  article: Omit<Article, 'content'> & {
    content?: ArticleContentBlock[];
    useMigrationPlaceholder?: boolean;
  },
): Article {
  const {
    useMigrationPlaceholder = article.contentStatus === 'needs_migration',
    content,
    ...rest
  } = article;

  return {
    ...rest,
    content:
      content ??
      (useMigrationPlaceholder
        ? [
            ...migrationPlaceholder(article.excerpt, article.pdfUrl),
            standardDisclaimer(),
          ]
        : [standardDisclaimer()]),
  };
}
