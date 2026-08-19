import Link from 'next/link';
import type { Article } from '@/content/articles';
import styles from './RelatedArticles.module.css';

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className={styles.related} aria-labelledby="related-heading">
      <div className="container">
        <h2 id="related-heading" className={styles.heading}>
          Related articles
        </h2>
        <ul className={styles.list}>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link href={`/${article.slug}`} className={styles.card}>
                <span className={styles.label}>Continue reading</span>
                <span className={styles.title}>{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
