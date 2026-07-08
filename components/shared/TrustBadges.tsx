import { firmAffiliations } from '@/content/site';
import styles from './TrustBadges.module.css';

interface TrustBadgesProps {
  className?: string;
}

export function TrustBadges({ className = '' }: TrustBadgesProps) {
  return (
    <ul
      className={`${styles.badges} ${className}`.trim()}
      aria-label="Professional affiliations and credentials"
    >
      {firmAffiliations.map((badge) => (
        <li key={badge.label} className={styles.badge}>
          <span className={styles.abbr}>{badge.abbr}</span>
          <span className={styles.label}>{badge.label}</span>
        </li>
      ))}
    </ul>
  );
}
