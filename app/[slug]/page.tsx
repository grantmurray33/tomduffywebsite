import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleBody } from '@/components/articles/ArticleBody';
import { RelatedArticles } from '@/components/articles/RelatedArticles';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { ArticleJsonLd } from '@/components/seo/JsonLd';
import {
  getArticleBySlug,
  getArticleSlugs,
  getRelatedArticles,
} from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/${slug}`,
    type: 'article',
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.relatedSlugs);
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <ArticleJsonLd article={article} />

      <article>
        <header className={styles.header}>
          <div className="container container--narrow">
            <Link href="/articles" className={styles.back}>
              ← All articles
            </Link>
            <time className={styles.date} dateTime={article.publishedAt}>
              {date}
            </time>
            <h1 className={styles.title}>{article.title}</h1>
            {article.contentStatus === 'needs_migration' && (
              <p className={styles.migrationNote} role="status">
                This article is being migrated. The introduction below is from
                the published summary; the full body will be added from the
                original source.
              </p>
            )}
            {article.pdfUrl && (
              <p className={styles.pdf}>
                <a
                  href={article.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View PDF version
                </a>
              </p>
            )}
          </div>
        </header>

        <div className="container container--narrow">
          <ArticleBody blocks={article.content} />
        </div>

        <RelatedArticles articles={related} />
      </article>

      <CtaBlock />
    </>
  );
}
