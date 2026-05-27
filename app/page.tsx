import { HeroCarousel } from '@/components/home/HeroCarousel';
import { HomeServices } from '@/components/home/HomeServices';
import { AboutProfile } from '@/components/about/AboutProfile';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { HomeContactCta } from '@/components/home/HomeContactCta';

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <HomeServices />
      <AboutProfile
        variant="preview"
        eyebrow="Why clients trust us"
        title="A firm built on deep tax expertise"
      />
      <FeaturedArticles />
      <HomeContactCta />
    </>
  );
}
