import React from 'react'
import Header from '../Header'
import Welcome from '../Welcome'
import VideoWelcome from '../VideoWelcome'
import FestInfo from '../FestInfo'
import Championships from '../Championships'
import DemonstrationSports from '../DemonstrationSports'
import OurHistory from '../OurHistory'
import Sponsors from '../Sponsors'

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
        <Sponsors/>
    </>
  ) 
}
