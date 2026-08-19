import { homeFacts } from '@/content/site';
import styles from './HomeFacts.module.css';

export function HomeFacts() {
  return (
    <section className={styles.section} aria-label="Practice facts">
      <div className={`container ${styles.grid}`}>
        {homeFacts.map((fact) => (
          <div key={fact.label} className={styles.item}>
            <p className={styles.value}>{fact.value}</p>
            <p className={styles.label}>{fact.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
