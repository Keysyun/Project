import Content from '@/components/Content';
import Header from '@/components/Header';
import Sider from '@/components/Side';
import { Layout } from 'antd';
import styles from './index.less';

const App: React.FC = ({ children }) => (
  <Layout>
    <Header />
    <Layout className={styles.content}>
      <Sider />
      <Layout className={styles.cantainer}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  </Layout>
);

export default App;
