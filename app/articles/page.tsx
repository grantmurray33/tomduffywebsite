import { ArticleCard } from '@/components/articles/ArticleCard';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { PageHero } from '@/components/shared/PageHero';
import { articlesQuote, firm } from '@/content/site';
import { getAllArticles } from '@/lib/articles';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Articles',
  description: `Tax articles and insights on Puerto Rico Act 60, international tax, and U.S. compliance from ${firm.name}.`,
  path: '/articles',
});

export default function ArticlesPage() {
  const allArticles = getAllArticles();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Articles"
        quote={articlesQuote}
      />

      <section className={styles.list} aria-label="Article listing">
        <div className="container container--narrow">
          {allArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
