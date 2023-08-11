import React, { useEffect, useState } from 'react'
import { NewsWalksLink, NewsWalksSlickImageWrapper, NewsWalksSlickInfo, NewsWalksSlickItem, NewsWalksSlickTitle, NewsWelcomeContainer } from '../News/styles'
import { getTabs } from './requests'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import listlanguage  from '../../utils/language.json'
export default function CulturalEvents(props) {
  const lang = useSelector(state => state.language)

  const [Event, setEvent] = useState([])
  useEffect(() => {
    getTabs(props.title, (response) => {
      setEvent(response.data)
    }, (error) => {
      console.log(error)
    })
  }, [])
// const navigate = useNavigate()
//   function GoInfo(params) {
//     navigate('info', state={params})
//   }
  return (
    <>
        <NewsWelcomeContainer>
        {
         Event.length > 0 && Event.map((item, index) => {
            return (
               <NewsWalksSlickItem key={index}>
                <NewsWalksSlickImageWrapper>
                  <img src={item.image} alt="Uzbekistan_Airways" />
                </NewsWalksSlickImageWrapper>
                <NewsWalksSlickTitle>{item.title}</NewsWalksSlickTitle>
                <NewsWalksSlickInfo>
                  {item.description.slice(0,150)}
                </NewsWalksSlickInfo>
                <NewsWalksLink to={'/info'} state={item}>{listlanguage.more[lang]}</NewsWalksLink>
              </NewsWalksSlickItem>
            )
          })
        }
        </NewsWelcomeContainer>
    </>
  )
}
