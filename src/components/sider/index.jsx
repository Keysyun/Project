import React from 'react'
import { Menu } from 'antd';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function Sider() {
  return (
    <div style={{ width: 200, height: '100%' }} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={items1}
      />
    </div>
  )
}

export default Sider