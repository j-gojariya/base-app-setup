import { ExportOutlined } from '@ant-design/icons';
import { Button, Grid } from 'antd';
import { memo } from 'react';

function ExportOrderBtn() {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const handleClickExport = () => {};

  return (
    <Button className="ml-10 h-35 export-btn" onClick={handleClickExport}>
      <ExportOutlined className="export-icon" />
      {screens.xs ? '' : <span>Export</span>}
    </Button>
  );
}

export default memo(ExportOrderBtn);
