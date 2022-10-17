import React from 'react'
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom'

const MenuData = [
  {
    key: 'home',
    label: '首页'
  },
  {
    key: 'work',
    label: '工作',
  },
  {
    key: 'profile',
    label: '个人中心'
  }
]

function Sider() {
  const Navigate = useNavigate()
  const handleClick = (e) => {
    Navigate(e.key)
  }

  return (
    <div style={{ width: 200, height: '100%' }} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['home']}
        style={{
          height: '100%',
          borderRight: 0,
        }}
        items={MenuData}
        onClick={e => { handleClick(e) }}
      />
    </div>
  )
}

export default Sider