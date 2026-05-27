import Link from 'next/link';
import { homeServiceCards } from '@/content/site';
import { ServiceIcon, type ServiceIconName } from '@/components/icons/LineIcons';
import styles from './HomeServices.module.css';

export function HomeServices() {
  return (
    <section className={styles.section} aria-labelledby="home-services-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">What we do</p>
          <h2 id="home-services-heading" className={styles.title}>
            Comprehensive tax advisory
          </h2>
          <p className={styles.lead}>
            We assist clients in understanding complex and technical tax matters
            that require specialized knowledge of the law.
          </p>
        </div>

        <ul className={styles.grid}>
          {homeServiceCards.map((card) => (
            <li key={card.href + card.title}>
              <Link href={card.href} className={styles.card}>
                <span className={styles.iconWrap}>
                  <ServiceIcon
                    name={card.icon as ServiceIconName}
                    className={styles.icon}
                  />
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
                <span className={styles.cardLink}>Learn more</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
