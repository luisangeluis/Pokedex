import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <header>SOY EL HEADER</header>
        <Outlet />
    </> 
  )
}

export default MainLayout