import { Typography } from 'antd';
import { memo } from 'react';

function AuthFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Typography.Title className="footer" level={5}>
      {`© ${currentYear} ProxyIQ, LLC`}
    </Typography.Title>
  );
}

export default memo(AuthFooter);
