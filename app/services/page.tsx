import Link from 'next/link';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { PageHero } from '@/components/shared/PageHero';
import { getServicesInListingOrder } from '@/content/services';
import { firm } from '@/content/site';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Services',
  description: `Tax planning and compliance services offered by ${firm.name}, including domestic tax, international tax, Puerto Rico Act 60 planning, and foreign trust reporting.`,
  path: '/services',
});

export default function ServicesPage() {
  const listed = getServicesInListingOrder();

  return (
    <>
      <PageHero
        eyebrow="Practice areas"
        title="Services"
        variant="services"
        lead="We focus on guiding clients through complex tax planning, compliance, and wealth preservation strategies tailored to each client's circumstances."
      />

      <section className={styles.list} aria-label="Practice areas">
        <div className="container">
          {listed.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className={styles.item}
            >
              <p className={styles.index}>
                {String(index + 1).padStart(2, '0')}
              </p>
              <div className={styles.body}>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
                <p className={styles.overview}>{service.overview}</p>
                <ul className={styles.highlights}>
                  {service.highlights.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className={styles.link}
                >
                  Learn more
                </Link>
              </div>
            </article>
          ))}

          <article id="tax-insights" className={styles.item}>
            <p className={styles.index}>06</p>
            <div className={styles.body}>
              <h2 className={styles.title}>Tax Insights &amp; Articles</h2>
              <p className={styles.description}>
                Technical articles on Puerto Rico, international tax, and U.S.
                compliance.
              </p>
              <p className={styles.overview}>
                Tom Duffy has been published in Tax Notes, Bloomberg Tax, The
                Journal of Taxation, and The Journal of International Taxation
                on sophisticated federal tax issues encountered in practice.
              </p>
              <Link href="/articles" className={styles.link}>
                Read insights
              </Link>
            </div>
          </article>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
