import Image from 'next/image';
import Link from 'next/link';
import { firm, siteImages } from '@/content/site';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import styles from './HomeContactCta.module.css';

export function HomeContactCta() {
  return (
    <section className={styles.section} aria-labelledby="home-cta-heading">
      <div className="container">
        <RevealOnScroll className={styles.band}>
          <div className={styles.bandPhoto} aria-hidden>
            <Image
              src={siteImages.puertoRico.src}
              alt=""
              fill
              sizes="100vw"
              className={styles.bandImage}
            />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Next step</p>
            <h2 id="home-cta-heading" className={styles.title}>
              Request a consultation
            </h2>
            <p className={styles.text}>{firm.referralOnly}</p>
          </div>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn--primary">
              Request a Consultation
            </Link>
            <a href={firm.phoneHref} className="btn btn--outline-light">
              {firm.phone}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
