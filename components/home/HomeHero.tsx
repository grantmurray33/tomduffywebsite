import Image from 'next/image';
import Link from 'next/link';
import { firm, siteImages } from '@/content/site';
import styles from './HomeHero.module.css';

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-heading">
      <div className={styles.backdrop} aria-hidden>
        <Image
          src={siteImages.puertoRico.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.backdropImage}
        />
      </div>
      <div className={styles.overlay} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{firm.shortName}</p>
          <h1 id="home-hero-heading" className={styles.headline}>
            Tax minimization and wealth preservation, planned with precision.
          </h1>
          <p className={styles.lede}>
            {firm.tagline} Specialized guidance on the U.S. federal dimensions of
            Puerto Rico&apos;s Act 60 incentive regime, alongside domestic,
            international, and foreign trust matters.
          </p>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn--primary">
              Request a Consultation
            </Link>
            <Link href="/services" className="btn btn--outline-light">
              View services
            </Link>
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.mediaFrame}>
            <Image
              src={siteImages.puertoRico.src}
              alt={siteImages.puertoRico.alt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 480px"
              className={styles.mediaImage}
            />
          </div>
          <aside className={styles.aside} aria-label="Practice notes">
            <p className={styles.asideLabel}>Practice focus</p>
            <p className={styles.asideText}>
              Federal Act 60 compliance guidance since 2012. Licensed CPA in
              Illinois and Florida.
            </p>
            <p className={styles.asideNotice}>{firm.referralOnly}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
