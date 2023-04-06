import { Login } from 'components/Login/Login';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Log In',
    path: '/login',
  },
];
const LoginPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Log In'>
      <Login />
      <Subscribe />
    </PublicLayout>
  );
};

export default LoginPage;
