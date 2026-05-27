export type ArticleContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'placeholder'; label: string; note: string }
  | { type: 'disclaimer'; text: string };

export type ArticleContentStatus = 'published' | 'needs_migration';

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  excerpt: string;
  pdfUrl?: string;
  relatedSlugs: string[];
  contentStatus: ArticleContentStatus;
  content: ArticleContentBlock[];
  topics: string[];
}
