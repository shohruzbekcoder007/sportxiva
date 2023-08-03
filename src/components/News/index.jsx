import React, { useEffect, useState } from 'react'
import { RegisterTitle } from '../Register/styles'
import { MainWrapper } from '../../global_styles/styles'
import { WelcomeContainer } from '../Welcome/styles'
import img1 from '../../imgs/osh.png'
import { NewsImgCard, NewsRight, NewsWalksLink, NewsWalksSlickImageWrapper, NewsWalksSlickInfo, NewsWalksSlickItem, NewsWalksSlickTitle, NewsWelcomeContainer } from './styles'
import { getNews } from './request'
import { news } from '../../utils/API_urls'

export default function News() {
  const [News, setNews] = useState([])

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
                    {item?.description}
                  </NewsWalksSlickInfo>
                  <NewsWalksLink to={`/info`} state={item} >Batafsil</NewsWalksLink>
                </NewsWalksSlickItem>
              )
            })
          }
        </NewsWelcomeContainer>
      </MainWrapper>
    </div>
  )
}
