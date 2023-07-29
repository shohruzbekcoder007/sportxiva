import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { WalksTitle, WalksWrapper } from './styles'
import FolkGamesSlick from '../FolkGamesSlick'

export default function FolkGames() {
  return (
    <MainWrapper>
        <WalksWrapper>
            <WalksTitle>
                <Title>Milliy xalq o’yinlari</Title>
                </WalksTitle>
            <FolkGamesSlick/>
        </WalksWrapper>
    </MainWrapper>
  )
}
