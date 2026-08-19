import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className="container container--narrow">
        <p className="eyebrow">404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn--primary">
            Return home
          </Link>
          <Link href="/contact" className="btn btn--secondary">
            Contact the firm
          </Link>
        </div>
      </div>
    </section>
  );
}
