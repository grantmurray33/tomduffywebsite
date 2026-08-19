import Link from 'next/link';
import { firm, homeServiceCards, navLinks } from '@/content/site';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.name}>{firm.name}</p>
          <p className={styles.tagline}>{firm.tagline}</p>
          <p className={styles.location}>{firm.location}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <p className={styles.columnLabel}>Navigate</p>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.nav} aria-label="Services">
          <p className={styles.columnLabel}>Services</p>
          <ul>
            {homeServiceCards.map((card) => (
              <li key={card.title}>
                <Link href={card.href}>{card.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <p className={styles.columnLabel}>Contact</p>
          <a href={firm.phoneHref}>{firm.phone}</a>
          <a href={`mailto:${firm.email}`}>{firm.email}</a>
          <p className={styles.referral}>{firm.referralOnly}</p>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <p>
          &copy; {year} {firm.name}. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          This website is for general informational purposes only and does not
          constitute tax or legal advice.
        </p>
      </div>
    </footer>
  );
}
