import React from 'react'
import { Menu } from 'antd'
import styles from './index.less'

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function Header() {
  return (
    <div className='header'>
      <div className={styles.logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </div>
  )
}

export default Header