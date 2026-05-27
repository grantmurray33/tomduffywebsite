import { CtaBlock } from '@/components/shared/CtaBlock';
import { PageHero } from '@/components/shared/PageHero';
import { firm } from '@/content/site';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description: `Contact ${firm.name}. ${firm.referralOnly}`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Contact Us" />

      <section className={styles.content}>
        <div className="container container--narrow">
          <p className={styles.notice}>{firm.referralOnly}</p>
          <p className={styles.intro}>
            Thank you for your interest in our firm.
          </p>

          <div className={styles.details}>
            <div>
              <p className={styles.label}>Email</p>
              <a href={`mailto:${firm.email}`} className={styles.value}>
                {firm.email}
              </a>
            </div>
            <div>
              <p className={styles.label}>Phone</p>
              <a href={firm.phoneHref} className={styles.value}>
                {firm.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
