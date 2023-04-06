import { Registration } from 'components/Registration/Registration';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Check in',
    path: '/registration',
  },
];
const RegistrationPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Registration'>
      <Registration />
      <Subscribe />
    </PublicLayout>
  );
};

export default RegistrationPage;
