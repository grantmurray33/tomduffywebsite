import Image from 'next/image';
import { homeQuote, siteImages } from '@/content/site';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import styles from './HomeQuote.module.css';

export function HomeQuote() {
  return (
    <section className={styles.section} aria-label="Quoted authority">
      <div className={styles.photo} aria-hidden>
        <Image
          src={siteImages.wealth.src}
          alt=""
          fill
          sizes="100vw"
          className={styles.photoImage}
        />
      </div>
      <div className="container">
        <RevealOnScroll>
          <blockquote className={styles.quote}>
            <p className={styles.text}>{homeQuote.text}</p>
            <footer className={styles.attr}>{homeQuote.attribution}</footer>
          </blockquote>
        </RevealOnScroll>
      </div>
    </section>
  );
}
