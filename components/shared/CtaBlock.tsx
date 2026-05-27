import Link from 'next/link';
import styles from './CtaBlock.module.css';

export function CtaBlock() {
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className="eyebrow">Inquiry</p>
          <h2 id="cta-heading" className={styles.title}>
            How can we help you?
          </h2>
          <p className={styles.text}>
            We strive to assist our clients in understanding the morass of
            constantly changing state, local, and international tax laws and
            regulations.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/contact" className="btn btn--primary">
            Contact the firm
          </Link>
          <Link href="/services" className="btn btn--secondary">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
