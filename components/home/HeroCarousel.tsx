'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { firm, homeHeroSlides } from '@/content/site';
import styles from './HeroCarousel.module.css';

const INTERVAL_MS = 7000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActive(index);
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeHeroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className={styles.hero}
      aria-label="Featured services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className={styles.background} aria-hidden>
        <Image
          src="/beach.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.inner}`}>
        <p className={styles.firmName}>{firm.shortName}</p>

        <div className={styles.slides}>
          {homeHeroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={
                index === active ? styles.slideActive : styles.slide
              }
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${homeHeroSlides.length}`}
              aria-hidden={index !== active}
            >
              <p className={styles.eyebrow}>{slide.eyebrow}</p>
              <h1 className={styles.headline}>{slide.headline}</h1>
              <p className={styles.description}>{slide.description}</p>
              <div className={styles.actions}>
                <Link href={slide.cta.href} className="btn btn--light">
                  {slide.cta.label}
                </Link>
                <Link href="/contact" className="btn btn--outline-light">
                  Contact us
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <div
            className={styles.dots}
            role="tablist"
            aria-label="Hero slides"
          >
            {homeHeroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`Show: ${slide.eyebrow}`}
                className={
                  index === active ? styles.dotActive : styles.dot
                }
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <p className={styles.tagline}>{firm.tagline}</p>
        </div>
      </div>
    </section>
  );
}
