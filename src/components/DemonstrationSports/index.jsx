import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { DemonstrationSportsContainer, DemonstrationSportsImgWrapper, DemonstrationSportsList, DemonstrationSportsListItem, DemonstrationSportsTitle, DemonstrationSportsWrapper } from './styles'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function DemonstrationSports() {
    const lang = useSelector(state => state.language)

  return (
    <DemonstrationSportsWrapper>
        <MainWrapper>
        <DemonstrationSportsTitle>
            <Title>{language.Demonstration[lang]}</Title>
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
                    <h5>{language.BirdHunting[lang]}</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/mas_1540.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>03</span>
                    <h5>{language.Kopkari[lang]}</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/IMG_20211117_235855_401.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>04</span>
                    <h5>{language.Archery[lang]}</h5>
                    <DemonstrationSportsImgWrapper className="animation-img">
                        <img src={require('../../imgs/IMG_20211117_235855_401.png')} alt="ozbek-jang-sanati" />
                    </DemonstrationSportsImgWrapper>
                </DemonstrationSportsListItem>
                <DemonstrationSportsListItem className="animation-info">
                    <span>05</span>
                    <h5>{language.MartialArts[lang]}</h5>
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
