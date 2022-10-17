import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'

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

function Header() {
  const Navigate = useNavigate()
  const handleClick = (e) => {
    Navigate(e.key)
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo}>LOGO</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={MenuData}
        onClick={e => handleClick(e)}
      />
    </div>
  )
}

export default Header