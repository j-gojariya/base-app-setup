import './mainLayout.less';

import { DashboardOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Drawer, Grid, Layout, Typography } from 'antd';
import { useState } from 'react';

import HeaderMenu from 'components/layout/Header';
import MenuItems from 'components/layout/MenuItems';
import Sidebar from 'components/layout/Sidebar';

/* eslint-disable */
const initialHeaderMenu = [
  {
    name: 'Dashboard',
    path: '/',
    key: 'dashboard',
    icon: <DashboardOutlined />,
  },
  {
    name: 'Supply Order',
    path: '/supply-order',
    key: 'supply-order',
    icon: <OrderedListOutlined />,
  },
];
const { Content } = Layout;

export default function MainLayout({ children }) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollpased] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleClickForDrawerMenuItems = () => {
    setCollpased(true);
    onClose();
  };
  const handleClickMenuItems = () => {
    setCollpased(true);
  };

  return (
    <Layout className="layout">
      <Sidebar
        collapsed={collapsed}
        setCollpased={setCollpased}
        initialHeaderMenu={initialHeaderMenu}
        handleClickItem={handleClickMenuItems}
      />
      <Drawer
        title={<img src={'StrAlignLogo'} alt="" className="logo" />}
        placement="left"
        onClose={onClose}
        open={open}
        className="layout sidebar-drawer"
        closeIcon={<></>}
      >
        <div className="sidebar">
          {screens.xs && (
            <Typography.Title level={5} className="menu-title">
              Menu
            </Typography.Title>
          )}
          <MenuItems
            initialHeaderMenu={initialHeaderMenu}
            handleClickItem={handleClickForDrawerMenuItems}
          />
        </div>
      </Drawer>
      <Layout>
        <HeaderMenu showDrawer={showDrawer} />
        <Content className="main" id="main">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
