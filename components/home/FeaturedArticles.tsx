import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import styles from './FeaturedArticles.module.css';

const FEATURED_COUNT = 3;

export function FeaturedArticles() {
  const featured = getAllArticles().slice(0, FEATURED_COUNT);

  return (
    <section className={styles.section} aria-labelledby="featured-articles-heading">
      <div className="container">
        <RevealOnScroll className={styles.header}>
          <div>
            <p className="eyebrow">Tax insights</p>
            <h2 id="featured-articles-heading" className={styles.title}>
              Featured articles
            </h2>
          </div>
          <Link href="/articles" className={styles.viewAll}>
            View all articles
          </Link>
        </RevealOnScroll>

        <ul className={styles.grid}>
          {featured.map((article, index) => {
            const date = new Date(article.publishedAt).toLocaleDateString(
              'en-US',
              { year: 'numeric', month: 'long', day: 'numeric' },
            );
            return (
              <RevealOnScroll key={article.slug} as="li" delay={index * 80}>
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
              </RevealOnScroll>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
