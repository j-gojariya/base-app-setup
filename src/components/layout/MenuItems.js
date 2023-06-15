import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function MenuItems({ initialHeaderMenu, handleClickItem }) {
  return (
    <Menu mode="inline" theme="dark">
      {initialHeaderMenu?.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} id={item.key}>
          <Link onClick={() => handleClickItem()} to={item.path}>
            {item.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

export default MenuItems;
