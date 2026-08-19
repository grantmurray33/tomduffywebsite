import Image from 'next/image';
import Link from 'next/link';
import {
  aboutTom,
  articlesQuote,
  homeQuote,
  siteImages,
  tomDuffyPhoto,
} from '@/content/site';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import { TrustBadges } from '@/components/shared/TrustBadges';
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
  const paragraphs = aboutTom.bioExtended.split('\n\n');
  const chapters = [
    paragraphs.slice(0, 3),
    paragraphs.slice(3, 6),
    paragraphs.slice(6),
  ];

  return (
    <>
      <section className={styles.intro} aria-labelledby={sectionId}>
        <div className={`container ${styles.introGrid}`}>
          <RevealOnScroll className={styles.figure}>
            <div className={styles.photoMain}>
              <Image
                src={tomDuffyPhoto.src}
                alt={tomDuffyPhoto.alt}
                width={tomDuffyPhoto.width}
                height={tomDuffyPhoto.height}
                className={styles.photo}
                sizes="(max-width: 768px) 100vw, 280px"
                priority
              />
            </div>
            <p className={styles.caption}>
              <span>{aboutTom.name}</span>
              <span>{aboutTom.role}</span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll className={styles.introCopy} delay={80}>
            <p className="eyebrow">{eyebrow}</p>
            {isFull ? (
              <h1 id={sectionId} className={styles.title}>
                {title}
              </h1>
            ) : (
              <h2 id={sectionId} className={styles.title}>
                {title}
              </h2>
            )}
            <p className={styles.summary}>{aboutTom.summary}</p>
            <TrustBadges className={styles.badges} />
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
          </RevealOnScroll>
        </div>
      </section>

      {isFull && (
        <section className={styles.bio} aria-label="Biography">
          <div className={`container ${styles.bioWrap}`}>
            <ul className={styles.facts} aria-label="Practice facts">
              <li>
                <strong>Since 2012</strong>
                <span>Act 60 federal compliance guidance</span>
              </li>
              <li>
                <strong>Illinois &amp; Florida</strong>
                <span>Licensed CPA</span>
              </li>
              <li>
                <strong>Published in</strong>
                <span>
                  Tax Notes, Bloomberg Tax, The Journal of Taxation, and The
                  Journal of International Taxation
                </span>
              </li>
            </ul>

            <div className={styles.bioLayout}>
              <article className={styles.chapter}>
                <div className={styles.prose}>
                  <p className="eyebrow">Biography</p>
                  {chapters[0].map((paragraph, index) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className={index === 0 ? styles.leadPara : styles.paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <aside className={styles.rail}>
                  <p className={styles.railLabel}>Puerto Rico</p>
                  <figure className={styles.shot}>
                    <div className={styles.shotFrame}>
                      <Image
                        src={siteImages.puertoRico.src}
                        alt={siteImages.puertoRico.alt}
                        fill
                        sizes="380px"
                        className={styles.shotImage}
                      />
                    </div>
                    <figcaption>Act 60 · federal compliance</figcaption>
                  </figure>
                  <div className={styles.year}>
                    <p className={styles.yearValue}>2012</p>
                    <p className={styles.yearText}>
                      Federal Act 60 compliance guidance from the inception of
                      the modern incentive regime
                    </p>
                  </div>
                </aside>
              </article>

              <article className={styles.chapter}>
                <div className={styles.prose}>
                  {chapters[1].map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <aside className={styles.rail}>
                  <blockquote className={styles.pullquote}>
                    <p>&ldquo;{homeQuote.text}&rdquo;</p>
                    <footer>{homeQuote.attribution}</footer>
                  </blockquote>
                  <figure className={styles.shot}>
                    <div className={styles.shotFrame}>
                      <Image
                        src={siteImages.wealth.src}
                        alt={siteImages.wealth.alt}
                        fill
                        sizes="380px"
                        className={styles.shotImage}
                      />
                    </div>
                    <figcaption>Wealth preservation</figcaption>
                  </figure>
                </aside>
              </article>

              <article className={styles.chapter}>
                <div className={styles.prose}>
                  {chapters[2].map((paragraph, index) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className={
                        index === chapters[2].length - 1
                          ? styles.closing
                          : styles.paragraph
                      }
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <aside className={styles.rail}>
                  <blockquote className={styles.pullquote}>
                    <p>&ldquo;{articlesQuote.text}&rdquo;</p>
                    <footer>{articlesQuote.attribution}</footer>
                  </blockquote>
                  <figure className={styles.shot}>
                    <div className={styles.shotFrame}>
                      <Image
                        src={siteImages.beach.src}
                        alt={siteImages.beach.alt}
                        fill
                        sizes="380px"
                        className={styles.shotImage}
                      />
                    </div>
                    <figcaption>Puerto Rico</figcaption>
                  </figure>
                  <div className={styles.callout}>
                    <p className={styles.calloutLabel}>Published in</p>
                    <p className={styles.calloutText}>
                      Tax Notes, Bloomberg Tax, The Journal of Taxation, and The
                      Journal of International Taxation
                    </p>
                  </div>
                </aside>
              </article>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
