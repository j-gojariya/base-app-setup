import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import PROXY_IQ_IMAGES from 'assets/Images';
import ImageView from 'components/base/ImageView';

import '../auth.less';
import AuthFooter from '../components/AuthFooter';
import Slogan from '../components/Slogan';

function Login() {
  const { LoginImg, Background, ProxyIQLogo } = PROXY_IQ_IMAGES.AuthIcon;

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  // for login
  const handleLogin = async () => {
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

          <Typography.Title level={3}>Login</Typography.Title>
          <Typography.Title level={5}>
            Welcome! Please enter your details.
          </Typography.Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={() => handleLogin()}
            requiredMark={false}
          >
            <Form.Item
              label="Email"
              name="userName"
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
              className="mb-0 "
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password',
                },
              ]}
            >
              <Input.Password className="input" />
            </Form.Item>
            <Form.Item className="forgotpassword-link">
              <Link to="/forgot-password">Forgot Password?</Link>
            </Form.Item>
            <Form.Item>
              <Button
                className="primary-btn"
                htmlType="submit"
                loading={loading}
                type="primary"
              >
                Login
              </Button>
            </Form.Item>

            <Typography.Title className="signup-text" level={5}>
              Don’t have an account? <Link to="/signup">Sign Up</Link>
            </Typography.Title>
          </Form>
        </div>
        <AuthFooter />
      </Col>
    </Row>
  );
}

export default memo(Login);
