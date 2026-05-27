import Link from 'next/link';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { PageHero } from '@/components/shared/PageHero';
import { services } from '@/content/services';
import { firm } from '@/content/site';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Services',
  description: `Tax planning and compliance services offered by ${firm.name}, including domestic tax, international tax, Puerto Rico Act 60 planning, and foreign trust reporting.`,
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Practice areas"
        title="Services"
        lead="We focus on guiding clients through complex tax planning, compliance, and wealth preservation strategies tailored to each client's circumstances."
      />

      <section className={styles.list}>
        <div className="container">
          <ul>
            {services.map((service) => (
              <li key={service.slug} className={styles.item}>
                <Link href={`/services/${service.slug}`}>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <span className={styles.link}>Learn more</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
