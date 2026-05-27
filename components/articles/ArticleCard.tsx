import Link from 'next/link';
import type { Article } from '@/content/articles';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className={styles.card}>
      <time className={styles.date} dateTime={article.publishedAt}>
        {date}
      </time>
      <h2 className={styles.title}>
        <Link href={`/${article.slug}`}>{article.title}</Link>
      </h2>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <Link href={`/${article.slug}`} className={styles.link}>
        Read article
      </Link>
    </article>
  );
}
