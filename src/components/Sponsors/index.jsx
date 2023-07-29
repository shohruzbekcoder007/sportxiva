import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import SponsorsSlick from '../SponsorsSlick'
import { SponsorsTitle, SponsorsWrapper } from './styles'

export default function Sponsors() {
  return (
    <MainWrapper>
      <SponsorsWrapper>
        <SponsorsTitle>
          <Title>Homiylar</Title>
        </SponsorsTitle>
        <SponsorsSlick/>
      </SponsorsWrapper>
    </MainWrapper>
  )
}
