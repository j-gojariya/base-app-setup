import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { memo } from 'react';
import '../card.less';

const { Text } = Typography;

function CardDetails({ title, mainCount, subTitle, subCount, sign }) {
  return (
    <Card bordered={false}>
      <Text type="secondary">{title}</Text>
      <Typography.Title className="mb-0 mt-0 fs-30" level={3}>
        {mainCount}
      </Typography.Title>
      <Typography.Title className="sub-text mt-0" level={5}>
        {subTitle}
        {subCount > 0 ? (
          <span className="up">
            <CaretUpOutlined /> {subCount}
            {sign}
          </span>
        ) : (
          <span className="down">
            <CaretDownOutlined /> {subCount}
            {sign}
          </span>
        )}
      </Typography.Title>
    </Card>
  );
}

export default memo(CardDetails);
