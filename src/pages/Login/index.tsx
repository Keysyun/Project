import { Button, Form, Input, message, Spin } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './index.modules.less';
import { queryProductList } from '@/services/product';
import { setStorageItems } from '@/utils/storegeTools';
import { history } from 'umi';
import Cookies from 'react-cookies';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    if (values.username == 'admin' && values.password == 'admin') {
      setLoading(true);
      queryProductList().then((res) => {
        Cookies.save('isLogin', true);
        setStorageItems('MENU_DATA', res);
        setLoading(false);
        history.push('/home');
        message.success('登录成功！');
      });
    } else {
      message.error('密码错误！');
    }
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.container}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名！' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ width: '100%' }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
