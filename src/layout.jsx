import React from 'react'
import Header from './pages/Header'
import footer from './pages/Footer'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>


  )
}

export default layout