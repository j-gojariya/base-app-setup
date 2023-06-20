import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../auth.less';

import PROXY_IQ_IMAGES from 'assets/Images';
import ImageView from 'components/base/ImageView';

import AuthFooter from '../components/AuthFooter';
import Slogan from '../components/Slogan';

function ForgotPassword() {
  const navigate = useNavigate();
  const { ForgotPassword, Background, ProxyIQLogo } = PROXY_IQ_IMAGES.AuthIcon;
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    setLoading(true);
    navigate({
      pathname: '/reset-password',
      state: { userName: 'test@yopmail.com' },
    });
  };
  return (
    <Row className="login forgot-password">
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
          <ImageView alt="ForgotPassword" src={ForgotPassword} />
        </div>
      </Col>

      <Col className="login-form" lg={12} md={24} sm={24} span={12} xs={24}>
        <div className="wrapper">
          <ImageView alt="logo" src={ProxyIQLogo} />
          <Typography.Title level={3}>Forgot your password?</Typography.Title>
          <Typography.Title level={5}>
            {`No worries. We'll send reset instructions to your email.`}
          </Typography.Title>

          <Form
            layout="vertical"
            onFinish={(e) => handleResetPassword(e)}
            requiredMark={false}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
              ]}
            >
              <Input className="input" />
            </Form.Item>

            <Form.Item>
              <Button
                className="primary-btn"
                htmlType="submit"
                loading={loading}
                type="primary"
              >
                Reset password
              </Button>
            </Form.Item>

            <Typography.Title className="signup-text" level={5}>
              <Link to="/login">Back to login</Link>
            </Typography.Title>
          </Form>
        </div>
        <AuthFooter />
      </Col>
    </Row>
  );
}

export default memo(ForgotPassword);
