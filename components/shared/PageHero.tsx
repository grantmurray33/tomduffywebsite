import styles from './PageHero.module.css';

export type PageHeroVariant =
  | 'default'
  | 'services'
  | 'articles'
  | 'contact'
  | 'about';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  quote?: { text: string; attribution: string };
  variant?: PageHeroVariant;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  quote,
  variant = 'default',
}: PageHeroProps) {
  return (
    <header className={`${styles.hero} ${styles[variant]}`}>
      <div className={styles.background} aria-hidden />
      <div className="container container--narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {quote && (
          <blockquote className={styles.quote}>
            <p>&ldquo;{quote.text}&rdquo;</p>
            <footer>— {quote.attribution}</footer>
          </blockquote>
        )}
      </div>
    </header>
  );
}
