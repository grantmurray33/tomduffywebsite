import { AboutProfile } from '@/components/about/AboutProfile';
import { CtaBlock } from '@/components/shared/CtaBlock';
import { ImageFrame } from '@/components/shared/ImageFrame';
import { TrustBadges } from '@/components/shared/TrustBadges';
import { aboutFirm, firm, siteImages } from '@/content/site';
import { buildMetadata } from '@/lib/metadata';
import styles from './page.module.css';

export const metadata = buildMetadata({
  title: 'About Us',
  description: `${firm.name} — Greater Chicago-based CPA firm specializing in international taxation and Puerto Rico Act 60 planning.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutProfile
        variant="full"
        showCta={false}
        sectionId="about-page-heading"
        eyebrow="The firm"
        title="About Tom Duffy"
      />

      <section className={styles.firm} aria-labelledby="firm-heading">
        <div className={`container ${styles.firmGrid}`}>
          <div>
            <p className="eyebrow">The firm</p>
            <h2 id="firm-heading" className={styles.firmTitle}>
              About the firm
            </h2>
            <p className={styles.paragraph}>{aboutFirm.intro}</p>
            <p className={styles.paragraph}>{aboutFirm.experience}</p>
            <TrustBadges className={styles.badges} />
            <p className={styles.belief}>
              We believe that today there are many individuals and companies
              involved in complicated and technical tax matters that require
              expertise and a specialized knowledge of the tax law.
            </p>
          </div>
          <div className={styles.firmVisual}>
            <ImageFrame
              src={siteImages.taxPlanning.src}
              alt={siteImages.taxPlanning.alt}
              aspect="portrait"
              sizes="(max-width: 900px) 100vw, 360px"
            />
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
