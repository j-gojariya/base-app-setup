import { Typography } from 'antd';
import { memo } from 'react';

function Slogan() {
  return (
    <Typography.Title level={2}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Typography.Title>
  );
}

export default memo(Slogan);
