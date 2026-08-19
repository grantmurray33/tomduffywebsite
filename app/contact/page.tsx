import { ContactForm } from '@/components/contact/ContactForm';
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
      <PageHero
        eyebrow="Contact"
        title="Request a consultation"
        variant="contact"
        lead="Thank you for your interest in our firm. New clients are currently accepted by referral only."
      />

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.formCol}>
            <p className="eyebrow">Inquiry</p>
            <h2 className={styles.formTitle}>Consultation request</h2>
            <p className={styles.formLead}>
              Share a brief note on the matter and how you were referred. We
              will respond if the engagement is a fit.
            </p>
            <ContactForm />
          </div>

          <aside className={styles.aside}>
            <p className={styles.notice}>{firm.referralOnly}</p>
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
              <div>
                <p className={styles.label}>Location</p>
                <p className={styles.valuePlain}>{firm.location}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
