import { Advantage } from 'components/shared/Advantage/Advantage';
import { Banner } from 'components/landing/Banner/Banner';
import { BrandLogo } from 'components/shared/BrandLogo/BrandLogo';
import { Discount } from 'components/landing/Discount/Discount';
import { Info } from 'components/landing/Info/Info';
import { LatestNews } from 'components/landing/LatestNews/LatestNews';
import { NewArrivals } from 'components/landing/NewArrivals/NewArrivals';
import { TopCategories } from 'components/landing/TopCategories/TopCategories';
import { Trending } from 'components/landing/Trending/Trending';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Layout } from 'layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Trending />
      <BrandLogo />
      <Discount />
      <Advantage />
      <TopCategories />
      <Info />
      <NewArrivals />
      <LatestNews />
      <Subscribe />
    </Layout>
  );
}
