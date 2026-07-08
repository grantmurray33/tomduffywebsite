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
          <p className="eyebrow">What we do</p>
          <h2 id="home-services-heading" className={styles.title}>
            Comprehensive tax advisory
          </h2>
          <p className={styles.lead}>
            We advise high-net-worth individuals and businesses on complex
            domestic and international tax matters — with deep specialization in
            Puerto Rico incentive planning and U.S. federal compliance.
          </p>
        </RevealOnScroll>

        <ul className={styles.grid}>
          {homeServiceCards.map((card, index) => (
            <RevealOnScroll key={card.href + card.title} as="li" delay={index * 80}>
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
