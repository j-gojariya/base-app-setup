import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';

import { getCurrentToken } from '../store/slices/loginSlice';

function PrivateRoute({ component: Component }) {
  const token = useSelector(getCurrentToken);

  return token ? (
    <MainLayout>
      <Component />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
