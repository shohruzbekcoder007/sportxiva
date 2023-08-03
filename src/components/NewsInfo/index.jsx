import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { RegisterTitle } from '../Register/styles'
import img1 from '../../imgs/osh.png'
import {NewsInfoImg, NewsInfoText } from './styles'
import { getNews } from './request'
import { news } from '../../utils/API_urls'
import { useLocation, useParams } from 'react-router'
export default function NewsInfo() {
  const { state } = useLocation()
  const [NewsInfo, setNewsInfo] = useState(state)
  console.log(state);
  // const {id} = useParams()
  // useEffect(() => {
  //   getNews(news,id, (response) => {
  //     setNewsInfo(response.data)
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }, [])
  return (
    <div>
      <MainWrapper>
      <RegisterTitle>
          <h1>{NewsInfo?.name}</h1>
        </RegisterTitle>
         <div style={{height: '100vh'}}>
         <NewsInfoImg src={NewsInfo?.image} alt="" />
         <NewsInfoText>{NewsInfo?.description}</NewsInfoText>  
         </div>
      </MainWrapper>
    </div>
  )
}
