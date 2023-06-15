import { Grid, Layout } from 'antd';

const { Footer } = Layout;
export default function FooterMenu({ collapsed }) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const footerClassName = `footer ant-footer-inline${
    screens.xs && collapsed ? '-collapsed' : ''
  }`;
  const currentYear = new Date().getFullYear();

  return (
    <Footer className={footerClassName}>
      <div>
        {process.env.REACT_APP_VERSION ? process.env.REACT_APP_VERSION : '0.1'}
      </div>
      {`© ${currentYear} ProxyIQ, LLC`}
    </Footer>
  );
}
