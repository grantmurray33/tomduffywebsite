import Image from 'next/image';
import Link from 'next/link';
import { siteImages } from '@/content/site';
import styles from './HomeVisualBand.module.css';

export function HomeVisualBand() {
  return (
    <section className={styles.section} aria-labelledby="act-60-band-heading">
      <div className={styles.photo}>
        <Image
          src={siteImages.puertoRico.src}
          alt={siteImages.puertoRico.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.photoImage}
        />
      </div>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Puerto Rico Act 60</p>
        <h2 id="act-60-band-heading" className={styles.title}>
          Federal compliance is where the incentive holds.
        </h2>
        <p className={styles.text}>
          Act 60 offers significant tax incentives to U.S. persons who establish
          bona fide residency in Puerto Rico. Those incentives come with
          intricate federal obligations — residency, sourcing, reporting, and
          consistency across filings. That federal side has been Tom Duffy&apos;s
          focus since 2012.
        </p>
        <Link href="/services#puerto-rico-tax-planning" className="btn btn--primary">
          Puerto Rico tax services
        </Link>
      </div>
    </section>
  );
}
