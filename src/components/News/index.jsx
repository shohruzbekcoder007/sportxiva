import React, { useEffect, useState } from 'react'
import { RegisterTitle } from '../Register/styles'
import { MainWrapper } from '../../global_styles/styles'
import { WelcomeContainer } from '../Welcome/styles'
import img1 from '../../imgs/osh.png'
import { NewsImgCard, NewsRight, NewsWalksLink, NewsWalksSlickImageWrapper, NewsWalksSlickInfo, NewsWalksSlickItem, NewsWalksSlickTitle, NewsWelcomeContainer } from './styles'
import { getNews } from './request'
import { news } from '../../utils/API_urls'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function News() {
  const [News, setNews] = useState([])

  const lang = useSelector(state => state.language)

  useEffect(() => {
    getNews(news, (response) => {
      setNews(response.data)
      console.log(response);
    }, (error) => {
      console.log(error)
    })
  }, [])
  return (
    <div>
      <MainWrapper>
        <RegisterTitle>
          <h1>Yangiliklar</h1>
        </RegisterTitle>
        <WelcomeContainer>
          <NewsImgCard >
            <img src={News[News.length-1]?.image} alt="" />
          </NewsImgCard>
          <NewsRight>
            <h1>{News[News.length-1]?.name}</h1>
            <p>{News[News.length-1]?.description}</p>
          </NewsRight>
        </WelcomeContainer>

        <NewsWelcomeContainer>
          {
           News.length > 0 && News.map(item => {
              return (
                <NewsWalksSlickItem key={item.id}>
                  <NewsWalksSlickImageWrapper>
                    <img src={item?.image} alt="Uzbekistan_Airways" />
                  </NewsWalksSlickImageWrapper>
                  <NewsWalksSlickTitle>{item?.name}</NewsWalksSlickTitle>
                  <NewsWalksSlickInfo>
                    {item?.description.slice(0,150)}
                  </NewsWalksSlickInfo>
                  <NewsWalksLink to={`/info`} state={item}>{language.more[lang]}</NewsWalksLink>
                </NewsWalksSlickItem>
              )
            })
          }
        </NewsWelcomeContainer>
      </MainWrapper>
    </div>
  )
}
