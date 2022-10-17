import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/home'

function Content() {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 24,
        margin: '24px 0 0 0',
        minHeight: 280,
        height: '100%'
      }}
    >
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default Content