import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import FullPageLayout from 'layouts/FullPageLayout';
import { getCurrentToken } from 'store/slices/loginSlice';

function PublicRoute({ component: Component }) {
  const token = useSelector(getCurrentToken);

  return token ? (
    <Navigate to="/dashboard" />
  ) : (
    <FullPageLayout>
      <Component />
    </FullPageLayout>
  );
}

export default PublicRoute;
