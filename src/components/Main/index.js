import React from 'react'
import Header from '../Header'
import Welcome from '../Welcome'
import VideoWelcome from '../VideoWelcome'
import FestInfo from '../FestInfo'
import Championships from '../Championships'
import DemonstrationSports from '../DemonstrationSports'
import { Outlet } from 'react-router-dom'
import OurHistory from '../OurHistory'
import OurHistory from '../OurHistory'

export default function Main() {
  return (
    <>
        <Header/>
        <Welcome/>
        <VideoWelcome/>
        <FestInfo/>
        <Championships/>
        <DemonstrationSports/>
        <OurHistory/>
    </>
  ) 
}
