import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { DemonstrationSportsContainer, DemonstrationSportsList, DemonstrationSportsListItem, DemonstrationSportsTitle } from './styles'

export default function DemonstrationSports() {
  return (
    <MainWrapper>
        <DemonstrationSportsTitle>
            <Title>Ko’rgazmali sportlar</Title>
        </DemonstrationSportsTitle>
        <DemonstrationSportsContainer>
            <DemonstrationSportsList>
                <DemonstrationSportsListItem>
                    <span>01</span>
                    <h5>Bel olish va uch kurash</h5>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem>
                    <span>02</span>
                    <h5>Qush ovi</h5>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem>
                    <span>03</span>
                    <h5>Ko’pkari</h5>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem>
                    <span>04</span>
                    <h5>Kamondan o’q otish</h5>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem>
                    <span>05</span>
                    <h5>Turon yakka kurashi</h5>
                </DemonstrationSportsListItem>
            </DemonstrationSportsList>
        </DemonstrationSportsContainer>
    </MainWrapper>
  )
}
