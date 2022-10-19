import { Menu } from 'antd';
import { getStorageItems } from '@/utils/storegeTools';
import { history } from 'umi';

const Sider: React.FC = () => {
  const pathTo = (event: any) => {
    history.push(event.key);
  };

  return (
    <>
      <div style={{ width: 200 }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          items={getStorageItems('MENU_DATA')}
          onClick={(event) => pathTo(event)}
        />
      </div>
    </>
  );
};

export default Sider;
