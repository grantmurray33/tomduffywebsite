import Image from 'next/image';
import Link from 'next/link';
import { whyWorkWithTom, tomDuffyPhoto } from '@/content/site';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import styles from './HomeWhy.module.css';

export function HomeWhy() {
  return (
    <section className={styles.section} aria-labelledby="why-tom-heading">
      <div className={`container ${styles.grid}`}>
        <RevealOnScroll className={styles.intro}>
          <div className={styles.portrait}>
            <div className={styles.portraitMain}>
              <Image
                src={tomDuffyPhoto.src}
                alt={tomDuffyPhoto.alt}
                width={tomDuffyPhoto.width}
                height={tomDuffyPhoto.height}
                className={styles.portraitImage}
                sizes="280px"
              />
            </div>
          </div>
          <p className="eyebrow">{whyWorkWithTom.eyebrow}</p>
          <h2 id="why-tom-heading" className={styles.title}>
            {whyWorkWithTom.title}
          </h2>
          <p className={styles.lead}>{whyWorkWithTom.lead}</p>
          <Link href="/about" className="btn btn--secondary">
            About Tom Duffy
          </Link>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <ul className={styles.list} aria-label="Reasons to work with Tom">
            {whyWorkWithTom.items.map((item) => (
              <li key={item} className={styles.item}>
                <span className={styles.check} aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
