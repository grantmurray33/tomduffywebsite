import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { PageHero } from '@/components/shared/PageHero';
import { getServiceBySlug, getServicesInListingOrder, services } from '@/content/services';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getServicesInListingOrder().filter((item) => item.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        lead={service.overview}
        variant="services"
      />

      <section className={styles.content}>
        <div className={`container ${styles.layout}`}>
          <div>
            <h2 className={styles.subheading}>Areas of focus</h2>
            <ul className={styles.highlights}>
              {service.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn btn--primary">
              Request a Consultation
            </Link>
          </div>

          <aside className={styles.related} aria-label="Other practice areas">
            <p className={styles.relatedLabel}>Other practice areas</p>
            <ul>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
