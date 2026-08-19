import Link from 'next/link';
import { firm } from '@/content/site';
import styles from './CtaBlock.module.css';

export function CtaBlock() {
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.band}>
          <div>
            <p className={styles.eyebrow}>Inquiry</p>
            <h2 id="cta-heading" className={styles.title}>
              How can we help you?
            </h2>
            <p className={styles.text}>
              Whether you are navigating Puerto Rico incentive planning,
              international tax compliance, or a complex IRS matter, we are here
              to advise.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn--primary">
              Request a Consultation
            </Link>
            <a href={firm.phoneHref} className="btn btn--outline-light">
              {firm.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
