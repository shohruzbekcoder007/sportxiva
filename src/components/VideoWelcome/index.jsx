import React from 'react'
import { MainWrapper } from '../../global_styles/styles'
import videoBg from "../../media/BUYUK_XIVAGA_SAYOHAT__ICHAN_QAL`AGA_SAYOHAT__XIVA_XONLIGI_HAQIDA.mp4"

export default function VideoWelcome() {
  return (
    // <MainWrapper>
        // controls
        <video src={videoBg} autoPlay loop muted style={{width: "100%", maxHeight: "calc(100vh - 120px)", margin: "0 auto"}}/>
        // <video style={{width: "100%", height: "auto"}} playsinline autoplay loop >
        //     <source src={videoBg} type="video/mp4"/>
        //     Your browser does not support the video tag.
        // </video>
        
    // </MainWrapper>
  )
}
