import Image from 'next/image';
import styles from './PageHero.module.css';

export type PageHeroVariant =
  | 'default'
  | 'services'
  | 'articles'
  | 'contact'
  | 'about';

const variantImage: Record<
  Exclude<PageHeroVariant, 'default' | 'about'>,
  { src: string; position: string }
> = {
  services: { src: '/images/hero/hero-tax-planning.jpg', position: 'center 40%' },
  articles: { src: '/images/hero/hero-wealth.jpg', position: 'center 30%' },
  contact: { src: '/images/hero/hero-puerto-rico.jpg', position: 'center 45%' },
};

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
  const image =
    variant === 'services' || variant === 'articles' || variant === 'contact'
      ? variantImage[variant]
      : null;

  return (
    <header className={`${styles.hero} ${styles[variant]}`}>
      <div className={styles.background} aria-hidden>
        {image && (
          <Image
            src={image.src}
            alt=""
            fill
            sizes="100vw"
            className={styles.backgroundImage}
            style={{ objectPosition: image.position }}
            priority
          />
        )}
      </div>
      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
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
