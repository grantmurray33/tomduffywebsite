import Link from 'next/link';
import { firm } from '@/content/site';
import styles from './HomeContactCta.module.css';

export function HomeContactCta() {
  return (
    <section className={styles.section} aria-labelledby="home-cta-heading">
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Start a conversation</p>
            <h2 id="home-cta-heading" className={styles.title}>
              Ready to discuss your tax planning needs?
            </h2>
            <p className={styles.text}>
              We strive to assist our clients in understanding the morass of
              constantly changing state, local, and international tax laws and
              regulations.
            </p>
            <p className={styles.notice}>{firm.referralOnly}</p>
          </div>

          <div className={styles.contact}>
            <a href={`mailto:${firm.email}`} className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>{firm.email}</span>
            </a>
            <a href={firm.phoneHref} className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <span className={styles.contactValue}>{firm.phone}</span>
            </a>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn--light">
                Contact the firm
              </Link>
              <Link href="/services" className="btn btn--outline-light">
                View services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
