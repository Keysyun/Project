import { PageHeader } from 'antd';
import styles from './index.modules.less';
import { history } from 'umi';
import Cookies from 'react-cookies';

const Header: React.FC = () => {
  let Title = history.location.pathname.slice(1).toUpperCase();
  return (
    <>
      <div>
        <div className={styles.logo} />
        <PageHeader
          className={styles.PageHeader}
          onBack={() => history.goBack()}
          title={Title}
          subTitle="This is a subtitle"
        >
          <div>
            <button
              onClick={() => {
                Cookies.remove('isLogin');
                location.replace('/login');
              }}
            >
              退出登录
            </button>
          </div>
        </PageHeader>
      </div>
    </>
  );
};
export default Header;
