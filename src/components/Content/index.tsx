import styles from './index.less';

const Content: React.FC = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
