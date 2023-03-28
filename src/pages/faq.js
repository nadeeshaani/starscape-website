import { Faq } from 'components/Faq/Faq';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'FAQ',
    path: '/faq',
  },
];
const CartPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='FAQ'>
      <Faq />
      <Subscribe />
    </PublicLayout>
  );
};

export default CartPage;
