import {
  BellOutlined,
  DownOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Grid,
  Layout,
  Menu,
  Row,
  Typography,
} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { getUserData } from 'store/slices/loginSlice';

const { Header } = Layout;
const { Text } = Typography;

export default function HeaderMenu({ showDrawer }) {
  const userData = useSelector(getUserData);
  const navigate = useNavigate();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const location = useLocation();
  const { pathname } = location;
  const [pageName, setPageName] = useState('');

  useEffect(() => {
    // Extract the page name from the URL
    let name = '';
    const pathParts = pathname.split('/'); // Split the URL into parts
    if (pathParts[1] === 'dashboard' || pathParts[1] === '') {
      name = 'Dashboard';
    } else if (pathParts[1] === 'profile') {
      name = 'Profile';
    } else if (pathParts[1] === 'supply-order') {
      name = 'Supply Order';
    }
    setPageName(name);
  }, [pathname]);

  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const userMenu = (
    <Menu
      className="dropdown-container"
      items={[
        {
          label: <Text>Profile</Text>,
          key: 'Profile',
          onClick: () => navigate('/profile'),
        },
        {
          label: <Text>Logout</Text>,
          key: 'Logout',
          onClick: () => handleSignOut(),
        },
      ]}
    />
  );

  return (
    <Header className="main-haeder">
      <Row align="middle" justify="space-between">
        <Row align="middle" justify="center">
          <Button
            className="mobile-menu p-0 fs-16 "
            onClick={showDrawer}
            type="text"
          >
            <MenuUnfoldOutlined />
          </Button>
          <Typography.Title
            className="mb-0 title text-black fw-bolder"
            level={4}
          >
            {pageName}
          </Typography.Title>
        </Row>
        <Row align="middle">
          <Badge count={50} size="small">
            <Button className="p-0 ml-20" type="text">
              <BellOutlined className="fs-20" />
            </Button>
          </Badge>

          <Row align="middle" className="ml-20 rml-10">
            <Dropdown overlay={userMenu} trigger={['click']}>
              <span className="cursor-pointer fs-16 capital-text">
                <Avatar
                  className={screens.xs ? 'mb-5' : 'mr-10 mb-5'}
                  icon={<UserOutlined />}
                />
                {screens.xs ? <> </> : userData?.firstName}
                <DownOutlined
                  style={{
                    padding: screens.xs ? 0 : '0px 10px',
                  }}
                />
              </span>
            </Dropdown>
          </Row>
        </Row>
      </Row>
    </Header>
  );
}
