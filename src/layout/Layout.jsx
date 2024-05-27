import React from 'react'
import Navbar from '../companent/Navbar'
import Footer from '../companent/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
