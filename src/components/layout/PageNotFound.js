import { memo } from 'react';
import { Navigate } from 'react-router-dom';

function PageNotFound() {
  return <Navigate replace to="/" />;
}

export default memo(PageNotFound);
