import { Col, Divider, Form, Popover, Row, Steps, Typography } from 'antd';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

import FormItemsFeild from '../components/FormItemsFeild';

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const description = 'You can hover on the dot.';

function SupplyOrderDetail() {
  const [form] = Form.useForm();

  const { orderId } = useParams();
  console.log(orderId);
  return (
    <div className="background-white">
      <Steps
        current={1}
        items={[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
          {
            title: 'Waiting',
            description,
          },
        ]}
        progressDot={customDot}
      />

      <Form
        className="opportunity-detail-edit"
        form={form}
        layout="vertical"
        requiredMark={false}
      >
        <Row align="middle" className="mt-10" justify="space-between">
          <Typography.Title className="mb-0 title-fs20" level={5}>
            Order details
          </Typography.Title>
        </Row>
        <Divider className="mt-5" />
        <Row gutter={20}>
          {[0, 1, 2, 3, 4, 5].map((val) => (
            <Col key={`oreder_${val}`} md={8} sm={24} span={8} xs={24}>
              <FormItemsFeild name={`label_${val}`} />
            </Col>
          ))}
        </Row>
        <Row align="middle" className="mt-10" justify="space-between">
          <Typography.Title className="mb-0 title-fs20" level={5}>
            Patient details
          </Typography.Title>
        </Row>
        <Divider className="mt-5" />
        <Row gutter={20}>
          {[6, 7, 8, 9, 10, 11].map((val) => (
            <Col key={`patient_${val}`} md={8} sm={24} span={8} xs={24}>
              <FormItemsFeild name={`label_${val}`} />
            </Col>
          ))}
        </Row>
        <Row align="middle" className="mt-10" justify="space-between">
          <Typography.Title className="mb-0 title-fs20" level={5}>
            Insurance details
          </Typography.Title>
        </Row>
        <Divider className="mt-5" />
        <Row gutter={20}>
          {[12, 13, 14, 15, 16, 17].map((val) => (
            <Col key={`insurance_${val}`} md={8} sm={24} span={8} xs={24}>
              <FormItemsFeild name={`label_${val}`} />
            </Col>
          ))}
        </Row>
        <Row align="middle" className="mt-10" justify="space-between">
          <Typography.Title className="mb-0 title-fs20" level={5}>
            Vendor details
          </Typography.Title>
        </Row>
        <Divider className="mt-5" />
        <Row gutter={20}>
          {[18, 19, 20, 21, 22, 23].map((val) => (
            <Col key={`vendor_${val}`} md={8} sm={24} span={8} xs={24}>
              <FormItemsFeild name={`label_${val}`} />
            </Col>
          ))}
        </Row>
      </Form>
    </div>
  );
}

export default memo(SupplyOrderDetail);
