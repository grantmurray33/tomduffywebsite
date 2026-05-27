import Image from 'next/image';
import Link from 'next/link';
import { aboutTom, tomDuffyPhoto } from '@/content/site';
import styles from './AboutProfile.module.css';

interface AboutProfileProps {
  variant?: 'preview' | 'full';
  showCta?: boolean;
  sectionId?: string;
  eyebrow?: string;
  title?: string;
}

export function AboutProfile({
  variant = 'preview',
  showCta = variant === 'preview',
  sectionId = 'about-tom-heading',
  eyebrow = 'Principal',
  title = aboutTom.headline,
}: AboutProfileProps) {
  const isFull = variant === 'full';

  return (
    <section
      className={styles.section}
      aria-labelledby={sectionId}
    >
      <div className="container">
        <div className={styles.grid}>
          <figure className={styles.figure}>
            <div className={styles.frame}>
              <Image
                src={tomDuffyPhoto.src}
                alt={tomDuffyPhoto.alt}
                width={tomDuffyPhoto.width}
                height={tomDuffyPhoto.height}
                className={styles.photo}
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 40vw, 360px"
                priority={variant === 'preview'}
              />
            </div>
            <figcaption className={styles.caption}>
              <span className={styles.captionName}>{aboutTom.name}</span>
              <span className={styles.captionRole}>{aboutTom.role}</span>
            </figcaption>
          </figure>

          <div className={styles.content}>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={sectionId} className={styles.title}>
              {title}
            </h2>

            <p className={styles.summary}>{aboutTom.summary}</p>

            {isFull &&
              aboutTom.bioExtended.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}

            <ul className={styles.credentials} aria-label="Credentials">
              {aboutTom.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {showCta && (
              <Link href="/about" className="btn btn--primary">
                About the firm
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
