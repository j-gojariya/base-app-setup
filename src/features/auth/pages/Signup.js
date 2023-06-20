import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import PROXY_IQ_IMAGES from 'assets/Images';
import ImageView from 'components/base/ImageView';

import '../auth.less';
import AuthFooter from '../components/AuthFooter';
import Slogan from '../components/Slogan';

function Signup() {
  const { LoginImg, Background, ProxyIQLogo } = PROXY_IQ_IMAGES.AuthIcon;

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [tnc, setTnc] = useState(false);

  // for login
  const handleSignup = async () => {
    setLoading(true);
  };

  return (
    <Row className="signup login">
      <Col
        lg={12}
        md={0}
        sm={0}
        span={12}
        style={{ backgroundImage: `url(${Background})` }}
        xs={0}
      >
        <div className="login-left">
          <Slogan />
          <ImageView alt="LoginImg" src={LoginImg} />
        </div>
      </Col>
      <Col className="login-form" lg={12} md={24} sm={24} span={12} xs={24}>
        <div className="wrapper">
          <ImageView alt="logo" src={ProxyIQLogo} />

          <Typography.Title level={3}>Sign Up</Typography.Title>
          <Typography.Title level={5}>
            Start your journey with ProxyIQ
          </Typography.Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={(e) => {
              handleSignup(e);
            }}
            requiredMark={false}
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
              ]}
            >
              <Input className="input" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password',
                },
                {
                  min: 8,
                  message: 'Please enter more than 8 characters',
                },
              ]}
              tooltip={{
                title: 'Passowrd should be 8 characters long',
                icon: <InfoCircleOutlined />,
              }}
            >
              <Input.Password className="input" />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="ConfirmPassword"
              rules={[
                {
                  required: true,
                  message: 'Please input your password',
                },
                {
                  min: 8,
                  message: 'Please enter more than 8 characters',
                },
              ]}
            >
              <Input.Password className="input" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox onChange={(e) => setTnc(e.target.checked)} value={tnc}>
                <span className="tandc">
                  I agree to <a href="/terms-of-service">Terms of service</a>{' '}
                  and <a href="/privacy-policy">Privacy policy</a>
                </span>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                className="primary-btn"
                disabled={!tnc}
                htmlType="submit"
                loading={loading}
                type="primary"
              >
                Sign Up
              </Button>
            </Form.Item>

            <Typography.Title className="signup-text" level={5}>
              Already have an account? <Link to="/login">Login</Link>
            </Typography.Title>
          </Form>
        </div>
        <AuthFooter />
      </Col>
    </Row>
  );
}

export default memo(Signup);
