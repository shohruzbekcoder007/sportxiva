import React, { useEffect, useState } from 'react'
import videoBg from "../../media/BUYUK_XIVAGA_SAYOHAT__ICHAN_QAL`AGA_SAYOHAT__XIVA_XONLIGI_HAQIDA.mp4"
import { VideoWelcomeDateContainer, VideoWelcomeDateWrapper, VideoWelcomeWrapper } from './styles'
import { MainWrapper } from '../../global_styles/styles'

export default function VideoWelcome() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August, 10, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainWrapper>
      <VideoWelcomeWrapper>
          <video src={videoBg} autoPlay loop muted />
          <VideoWelcomeDateWrapper>
            <VideoWelcomeDateContainer>
              <h3>Festival boshlanishiga qoldi:</h3>
              <p>{days} kun <span>|</span> {hours} soat <span>|</span> {minutes} minut <span>|</span> {seconds} sekund</p>
            </VideoWelcomeDateContainer>
          </VideoWelcomeDateWrapper>
      </VideoWelcomeWrapper>
    </MainWrapper>
  )
}
