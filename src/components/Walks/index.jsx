import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { WalksTitle, WalksWrapper } from './styles'
import WalksSlick from '../WalksSlick'

export default function Walks() {
  return (
    <MainWrapper>
        <WalksWrapper>
            <WalksTitle>
                <Title>Sayillar</Title>
                </WalksTitle>
            <WalksSlick/>
        </WalksWrapper>
    </MainWrapper>
  )
}
