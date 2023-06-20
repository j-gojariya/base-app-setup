import {
  Button,
  Checkbox,
  Divider,
  Drawer,
  Form,
  Grid,
  Radio,
  Row,
  Typography,
} from 'antd';
import { memo } from 'react';

const statusType = ['Order received	', 'Document received', 'Vendor notified'];
function SupplyOrderFilter({ open, setOpen }) {
  const [form] = Form.useForm();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      className="related-item-drawer brawer-with-btn"
      closable={false}
      closeIcon={null}
      height={screens.xs ? '83vh' : ''}
      onClose={onClose}
      open={open}
      placement={screens.xs ? 'bottom' : 'right'}
      title={
        <Row align="middle" justify="space-between">
          <Typography.Title className="mb-0 " level={3}>
            Filters
          </Typography.Title>
          <Button className="text-orange fs-14 p-0" type="text">
            <strong>Clear All</strong>
          </Button>
        </Row>
      }
    >
      <div>
        <Form className="mt-20" form={form}>
          <div className="mb-20">
            <Row align="middle" justify="space-between">
              <Typography.Title className="mb-0" level={5}>
                Status
              </Typography.Title>
              <Checkbox className="select-all">Select All</Checkbox>
            </Row>
            <Divider className="mt-10 mb-10" />

            <Checkbox.Group className="vertical-box" options={statusType} />
          </div>

          <div className="mb-20">
            <Row align="middle" justify="space-between">
              <Typography.Title className="mb-0" level={5}>
                Created date
              </Typography.Title>
            </Row>
            <Divider className="mt-10 mb-10" />

            <Radio.Group className="vertical-box">
              <Radio checked="today" value="today">
                Today
              </Radio>
              <Radio value="last7days">Last 7 days</Radio>
              <Radio value="lastWeek">Last week</Radio>
              <Radio value="thisMonth">This month</Radio>
              <Radio value="lastMonth">Last month</Radio>
            </Radio.Group>
          </div>
        </Form>
      </div>

      <div className="drawer-btn">
        <Button
          className="drawer-btn-child orange-bordered-btn"
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button className="drawer-btn-child" htmlType="submit" type="primary">
          Apply
        </Button>
      </div>
    </Drawer>
  );
}

export default memo(SupplyOrderFilter);
