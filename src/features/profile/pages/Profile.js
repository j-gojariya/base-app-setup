import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getUserData } from 'store/slices/loginSlice';

function Profile() {
  const userData = useSelector(getUserData);

  return <div>Profile : {userData?.firstName}</div>;
}
export default memo(Profile);
