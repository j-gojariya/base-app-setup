import { Grid } from 'antd';
import Sider from 'antd/es/layout/Sider';

import PROXY_IQ_IMAGES from 'assets/Images';
import ImageView from 'components/base/ImageView';

import FooterMenu from './Footer';
import MenuItems from './MenuItems';

export default function Sidebar({
  collapsed,
  setCollpased,
  initialHeaderMenu,
  handleClickItem,
}) {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const { ProxyIQLogo } = PROXY_IQ_IMAGES.AuthIcon;

  return (
    <Sider
      breakpoint="lg"
      className="sidebar desktop-sidebar"
      collapsed={screens.xs && collapsed}
      collapsedWidth="0"
      onBreakpoint={() => {}}
      onCollapse={(collapsed) => {
        setCollpased(collapsed);
      }}
      width="250px"
    >
      <ImageView alt="logo" className="logo" src={ProxyIQLogo} />
      <MenuItems
        handleClickItem={handleClickItem}
        initialHeaderMenu={initialHeaderMenu}
      />
      <FooterMenu />
    </Sider>
  );
}
