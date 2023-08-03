import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { RegisterTitle } from '../Register/styles'
import {NewsInfoImg, NewsInfoText } from './styles'
import { useLocation } from 'react-router'
export default function NewsInfo() {
  const { state } = useLocation()
  const [NewsInfo, setNewsInfo] = useState(state)
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
