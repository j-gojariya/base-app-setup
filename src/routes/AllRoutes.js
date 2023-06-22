import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import SupplyOrderDetail from 'features/supplyOrderDetail/pages/SupplyOrderDetail';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Login = lazy(() => import('features/auth/pages/Login'));
const Signup = lazy(() => import('features/auth/pages/Signup'));
const Dashboard = lazy(() => import('features/dashboard/pages/Dashboard'));
const ForgotPassword = lazy(() => import('features/auth/pages/ForgotPassword'));
const ResetPassword = lazy(() => import('features/auth/pages/ResetPassword'));
const PageNotFound = lazy(() => import('components/layout/PageNotFound'));
const Profile = lazy(() => import('features/profile/pages/Profile'));
const SupplyOrder = lazy(() =>
  import('features/supplyOrder/pages/SupplyOrder'),
);

function AllRoutes() {
  return (
    <Router>
      <Routes>
        {/* public router */}
        <Route element={<PublicRoute component={Login} />} path="/login" />
        <Route element={<PublicRoute component={Signup} />} path="/signup" />
        <Route
          element={<PublicRoute component={ForgotPassword} />}
          path="/forgot-password"
        />
        <Route
          element={<PublicRoute component={ResetPassword} />}
          path="/reset-password"
        />

        {/* private router */}
        <Route element={<PrivateRoute component={Dashboard} />} path="/" />
        <Route element={<PrivateRoute component={Profile} />} path="/profile" />
        <Route
          element={<PrivateRoute component={SupplyOrder} />}
          path="/supply-order"
        />
        <Route
          element={<PrivateRoute component={SupplyOrderDetail} />}
          path="/supply-order/:orderId"
        />

        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
