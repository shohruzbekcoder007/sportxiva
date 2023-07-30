import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { DemonstrationSportsContainer, DemonstrationSportsImgWrapper, DemonstrationSportsList, DemonstrationSportsListItem, DemonstrationSportsTitle, DemonstrationSportsWrapper } from './styles'

export default function DemonstrationSports() {
  return (
    <DemonstrationSportsWrapper>
        <MainWrapper>
        <DemonstrationSportsTitle>
            <Title>Ko’rgazmali sportlar</Title>
        </DemonstrationSportsTitle>
        <DemonstrationSportsContainer>
            <DemonstrationSportsList>
                <DemonstrationSportsListItem className="animation-info">
                    <span>01</span>
                    <h5>Bel olish va uch kurash</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/ozbek-jang-sanati-0-0-0-0-1629875866.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>02</span>
                    <h5>Qush ovi</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/mas_1540.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>03</span>
                    <h5>Ko’pkari</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/IMG_20211117_235855_401.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>04</span>
                    <h5>Kamondan o’q otish</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/IMG_20211117_235855_401.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>05</span>
                    <h5>Turon yakka kurashi</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/ozbek-jang-sanati-0-0-0-0-1629875866.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
            </DemonstrationSportsList>
        </DemonstrationSportsContainer>
    </MainWrapper>
    </DemonstrationSportsWrapper>
  )
}
