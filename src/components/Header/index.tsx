import { PageHeader } from 'antd';
import styles from './index.modules.less';

const Header: React.FC = () => {
  return (
    <>
      <div>
        <div className={styles.logo} />
        <PageHeader
          className={styles.PageHeader}
          onBack={() => null}
          title="Title"
          subTitle="This is a subtitle"
        >
          <div>
            <button
              onClick={() => {
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
