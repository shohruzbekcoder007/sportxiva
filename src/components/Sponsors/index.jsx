import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import SponsorsSlick from '../SponsorsSlick'
import { SponsorsTitle, SponsorsWrapper } from './styles'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function Sponsors() {
  const lang = useSelector(state => state.language)

  return (
    <MainWrapper>
      <SponsorsWrapper>
        <SponsorsTitle>
          <Title>{language.Sponsors[lang]}</Title>
        </SponsorsTitle>
        <SponsorsSlick/>
      </SponsorsWrapper>
    </MainWrapper>
  )
}
