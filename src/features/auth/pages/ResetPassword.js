import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { useState } from 'react';
import OTPInput from 'react-otp-input';
import { Link } from 'react-router-dom';

import PROXY_IQ_IMAGES from 'assets/Images';
import ImageView from 'components/base/ImageView';

import '../auth.less';
import AuthFooter from '../components/AuthFooter';
import Slogan from '../components/Slogan';

function ResetPassword() {
  const { ForgotPassword, Background, ProxyIQLogo } = PROXY_IQ_IMAGES.AuthIcon;
  const [form] = Form.useForm();
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  // Function to handle resend code
  const resendConfirmationCode = async () => {
    setResetLoading(true);
  };

  // Function to confirmation code submit
  const confirmReset = async () => {
    setLoading(true);
  };

  const handleChange = (otpValue) => {
    setOtp(otpValue);
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
            form={form}
            layout="vertical"
            onFinish={confirmReset}
            requiredMark={false}
          >
            <Form.Item
              className="otp"
              name="code"
              rules={[
                {
                  required: true,
                  message: 'Please enter your verification code.',
                },
              ]}
            >
              <OTPInput
                key="code"
                className="signup otp-input"
                id="code"
                name="code"
                numInputs={6}
                onChange={handleChange}
                renderInput={(props) => <input {...props} />}
                separator={<span style={{ color: 'white' }}> ---</span>}
                shouldAutoFocus
                value={otp}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter your password',
                },
                {
                  min: 8,
                  message: 'Please enter more than 8 characters',
                },
              ]}
            >
              <Input.Password className="input" />
            </Form.Item>

            <Row gutter={10}>
              <Col span={12}>
                <Button
                  className="primary-btn"
                  htmlType="button"
                  loading={resetLoading}
                  onClick={resendConfirmationCode}
                  type="primary"
                >
                  Resend Code
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  className="primary-btn"
                  htmlType="submit"
                  loading={loading}
                  type="primary"
                >
                  Submit
                </Button>
              </Col>
            </Row>

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

export default ResetPassword;
