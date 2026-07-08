'use client';

import { useEffect, useState } from 'react';
import styles from './ReadingProgress.module.css';

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReduced) return;

    const update = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const articleTop = scrollTop + rect.top;
      const articleHeight = article.offsetHeight;
      const viewport = window.innerHeight;
      const scrolled = scrollTop - articleTop + viewport * 0.25;
      const total = articleHeight - viewport * 0.5;
      const pct = Math.min(100, Math.max(0, (scrolled / total) * 100));
      setProgress(pct);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
