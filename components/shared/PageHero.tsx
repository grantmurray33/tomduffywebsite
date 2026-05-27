import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  quote?: { text: string; attribution: string };
}

export function PageHero({ eyebrow, title, lead, quote }: PageHeroProps) {
  return (
    <header className={styles.hero}>
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
