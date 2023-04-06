import { AboutDetailBlock } from 'components/About/AboutDetailBlock/AboutDetailBlock';
import { AboutDiscount } from 'components/About/AboutDiscount/AboutDiscount';
import { AboutPromo } from 'components/About/AboutPromo/AboutPromo';
import { Advantage } from 'components/shared/Advantage/Advantage';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Testimonials } from 'components/shared/Tesimonials/Tesimonials';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
];
const AboutPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='About'>
      <AboutDetailBlock />
      <AboutPromo />
      <AboutDiscount />
      <Advantage />
      <Testimonials />
      <Subscribe />
    </PublicLayout>
  );
};

export default AboutPage;
