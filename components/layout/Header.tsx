'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firm, navLinks } from '@/content/site';
import styles from './Header.module.css';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoName}>{firm.shortName}</span>
          <span className={styles.logoSub}>CPA, P.A. &amp; P.C.</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`)
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className={`btn btn--primary ${styles.cta}`}>
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={open ? styles.mobileNav : styles.mobileNavHidden}
        aria-label="Mobile"
        hidden={!open}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`btn btn--primary ${styles.mobileCta}`}
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
