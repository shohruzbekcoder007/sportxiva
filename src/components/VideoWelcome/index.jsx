import React, { useEffect, useState } from 'react'
import videoBg from "../../media/bg_video_asosiy.mp4"
import { useSelector } from 'react-redux';
import language from '../../utils/language.json'
import { VideoWelcomeDateContainer, VideoWelcomeDateWrapper, VideoWelcomeWrapper } from './styles'

export default function VideoWelcome() {

  const lang = useSelector(state => state.language)

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "September, 7, 2023";

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
    <VideoWelcomeWrapper>
        <video src={videoBg} autoPlay loop muted />
        <VideoWelcomeDateWrapper>
          <VideoWelcomeDateContainer>
            <h3>Festival boshlanishiga qoldi:</h3>
            <p>{days} {language.date_kun[lang]} <span>|</span> {hours} {language.date_soat[lang]} <span>|</span> {minutes} {language.date_minut[lang]} <span>|</span> {seconds} {language.date_sekund[lang]}</p>
          </VideoWelcomeDateContainer>
        </VideoWelcomeDateWrapper>
    </VideoWelcomeWrapper>
  )
}
