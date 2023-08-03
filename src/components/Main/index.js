import React from 'react'
// import Header from '../Header'
import Welcome from '../Welcome'
import VideoWelcome from '../VideoWelcome'
import FestInfo from '../FestInfo'
import Championships from '../Championships'
import DemonstrationSports from '../DemonstrationSports'
import OurHistory from '../OurHistory'
import Sponsors from '../Sponsors'
import Walks from '../Walks'
import FolkGames from '../FolkGames'
// import Footer from '../Footer'

export default function Main() {
  return (
    <>
        {/* <Header/> */}
        <VideoWelcome/>
        <Welcome/>
        <FestInfo/>
        <Championships/>
        <DemonstrationSports/>
        <OurHistory/>
        <Sponsors/>
        <Walks/>
        <FolkGames/>
        {/* <Footer/> */}
    </>
  ) 
}
