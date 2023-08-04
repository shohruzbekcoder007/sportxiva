import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { RegisterTitle } from '../Register/styles'
import {InfoWrapper, NewsInfoImg, NewsInfoImgText, NewsInfoText } from './styles'
import { useLocation } from 'react-router'
export default function NewsInfo() {
  const { state } = useLocation()
  const [NewsInfo, setNewsInfo] = useState(state)
  return (
    <InfoWrapper>
      <MainWrapper>
      <RegisterTitle>
          <h1>{NewsInfo?.name}</h1>
      </RegisterTitle>
         <NewsInfoImgText>
          <NewsInfoImg src={NewsInfo?.image} alt="" />
          <NewsInfoText>{NewsInfo?.description}</NewsInfoText>  
         </NewsInfoImgText>
      </MainWrapper>
    </InfoWrapper>
  )
}
