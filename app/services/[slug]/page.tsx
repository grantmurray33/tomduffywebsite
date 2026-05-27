import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { PageHero } from '@/components/shared/PageHero';
import { getServiceBySlug, services } from '@/content/services';
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

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        lead={service.overview}
      />

      <section className={styles.content}>
        <div className="container container--narrow">
          <h2 className={styles.subheading}>Areas of focus</h2>
          <ul className={styles.highlights}>
            {service.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--primary">
            Contact us
          </Link>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
