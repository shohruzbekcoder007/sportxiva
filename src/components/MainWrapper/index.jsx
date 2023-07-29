import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

export default function MainWrapper() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}
