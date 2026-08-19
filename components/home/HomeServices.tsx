import Link from 'next/link';
import { homeServiceCards } from '@/content/site';
import { ServiceIcon, type ServiceIconName } from '@/components/icons/LineIcons';
import { RevealOnScroll } from '@/components/shared/RevealOnScroll';
import styles from './HomeServices.module.css';

export function HomeServices() {
  return (
    <section className={styles.section} aria-labelledby="home-services-heading">
      <div className="container">
        <RevealOnScroll className={styles.header}>
          <p className="eyebrow">Practice areas</p>
          <h2 id="home-services-heading" className={styles.title}>
            Six areas of focus
          </h2>
          <p className={styles.lead}>
            Advisory for individuals and businesses with complex U.S. tax
            matters — with particular depth in Puerto Rico Act 60 federal
            compliance.
          </p>
        </RevealOnScroll>

        <ul className={styles.grid}>
          {homeServiceCards.map((card, index) => (
            <RevealOnScroll key={card.title} as="li" delay={index * 70}>
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
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
