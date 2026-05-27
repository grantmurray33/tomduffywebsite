import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import styles from './FeaturedArticles.module.css';

const FEATURED_COUNT = 3;

export function FeaturedArticles() {
  const featured = getAllArticles().slice(0, FEATURED_COUNT);

  return (
    <section className={styles.section} aria-labelledby="featured-articles-heading">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="eyebrow">Tax insights</p>
            <h2 id="featured-articles-heading" className={styles.title}>
              Featured articles
            </h2>
          </div>
          <Link href="/articles" className={styles.viewAll}>
            View all articles
          </Link>
        </div>

        <ul className={styles.grid}>
          {featured.map((article) => {
            const date = new Date(article.publishedAt).toLocaleDateString(
              'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' },
            );
            return (
              <li key={article.slug}>
                <article className={styles.card}>
                  <time dateTime={article.publishedAt} className={styles.date}>
                    {date}
                  </time>
                  <h3 className={styles.cardTitle}>
                    <Link href={`/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className={styles.excerpt}>{article.excerpt}</p>
                  <Link href={`/${article.slug}`} className={styles.readMore}>
                    Read article
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
