import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/home'
import NotFound from '../../pages/NotFound'
import Profile from '../../pages/profile'
import Work from '../../pages/work'

function Content() {
  return (
    <div
      className="site-layout-background"
      style={{
        padding: 15,
        height: '100%'
      }}
    >
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Content