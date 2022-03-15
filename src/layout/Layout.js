import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Layout() {
  
  return (
    <>
    <header>
      <Sidebar />
    </header>
      <main className='main-container'>
        <Outlet />
      </main>
    </>
    
  )
}


export default Layout