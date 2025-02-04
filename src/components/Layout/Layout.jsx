import React from 'react'
import style from "../Layout/Layout.module.scss"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
 './Layout.module.scss'

export default function Layout() {
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
