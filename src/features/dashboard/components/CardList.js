import { Col, Row } from 'antd';
import { memo } from 'react';

import CardDetails from './CardDetails';

function CardList() {
  return (
    <Row gutter={16}>
      <Col md={6} sm={24} span={6} xs={24}>
        <CardDetails
          mainCount="345"
          sign="%"
          subCount="22.2"
          subTitle="compare to last month"
          title="Supply orders this month"
        />
      </Col>
      <Col md={6} sm={24} span={6} xs={24}>
        <CardDetails
          mainCount="34"
          sign="%"
          subCount="43.2"
          subTitle="compare to last week"
          title="Supply orders this week"
        />
      </Col>
      <Col md={6} sm={24} span={6} xs={24}>
        <CardDetails
          mainCount="28"
          sign="%"
          subCount="-23.5"
          subTitle="compare to last week"
          title="Active supply orders"
        />
      </Col>
      <Col md={6} sm={24} span={6} xs={24}>
        <CardDetails
          mainCount="32"
          sign="%"
          subCount="3.5"
          subTitle="compare to last week"
          title="Available vendors"
        />
      </Col>
    </Row>
  );
}

export default memo(CardList);
