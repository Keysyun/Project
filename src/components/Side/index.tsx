import { Menu } from 'antd';
import { queryProductList } from '@/services/product';

const Sider: React.FC = () => {
  const MenuData = async () => {
    return await queryProductList();
  };
  console.log(
    MenuData().then((res) => {
      console.log(res);
    }),
  );
  return (
    <>
      <div style={{ width: 200 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          items={[
            {
              key: '1',
              label: '首页',
            },
          ]}
        />
      </div>
    </>
  );
};

export default Sider;
