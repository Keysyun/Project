import { Menu } from 'antd';
import styles from './index.less';

const Header: React.FC = () => {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <>
      <div className={styles.logo} />
      <Menu
        style={{ marginLeft: 200 }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </>
  );
};
export default Header;
