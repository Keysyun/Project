import { Layout } from 'antd';
import React from 'react';
import Sider from './components/sider';
import Header from './components/header';
import Content from './components/content';
import './App.less'


const App = () => (
  <Layout>
    <Header />
    <Layout style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Sider />
      <Layout
        style={{
          padding: '15px',
        }}
      >
        <Content />
      </Layout>
    </Layout>
  </Layout >
);

export default App;