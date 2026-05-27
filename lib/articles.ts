import { articles, articleSlugs } from '@/content/articles';
import type { Article } from '@/content/articles';

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return articleSlugs;
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => Boolean(a));
}

export function isArticleSlug(slug: string): boolean {
  return articleSlugs.includes(slug);
}
