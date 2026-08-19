import { HomeHero } from '@/components/home/HomeHero';
import { HomeFacts } from '@/components/home/HomeFacts';
import { HomeServices } from '@/components/home/HomeServices';
import { HomeVisualBand } from '@/components/home/HomeVisualBand';
import { HomeWhy } from '@/components/home/HomeWhy';
import { HomeQuote } from '@/components/home/HomeQuote';
import { HomeContactCta } from '@/components/home/HomeContactCta';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeFacts />
      <HomeServices />
      <HomeVisualBand />
      <HomeWhy />
      <HomeQuote />
      <HomeContactCta />
      <FeaturedArticles />
    </>
  );
}
