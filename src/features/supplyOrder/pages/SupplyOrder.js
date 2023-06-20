import { Row } from 'antd';
import { memo } from 'react';

import SupplyOrderList from '../components/SupplyOrderList';
import '../supplyOrder.less';

function SupplyOrder() {
  return (
    <div className="idea background-white">
      <Row align="middle" className="header">
        <SupplyOrderList />
      </Row>
    </div>
  );
}

export default memo(SupplyOrder);
