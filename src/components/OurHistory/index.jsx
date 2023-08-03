import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { MediaInfo, MediaTile, OurHistoryContainer, OurHistoryItem, OurHistoryTitle } from './styles'
import MediaExample from '../MediaExample'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function OurHistory() {
    const lang = useSelector(state => state.language)

  return (
    <MainWrapper>
        <OurHistoryTitle>
            <Title>{language.OurHistory[lang]}</Title>
        </OurHistoryTitle>
        <OurHistoryContainer>
            <OurHistoryItem>
                <MediaExample/>
                <MediaTile>O’zbekiston tarixi</MediaTile>
            </OurHistoryItem>
            <OurHistoryItem>
                <MediaInfo>
                    <h4>Shonli tarix</h4>
                    <p>Lorem ipsum dolor sit amet consectetur. Maecenas proin lacinia a congue sem maecenas scelerisque faucibus vulputate. Tristique id nisl dui ultrices eget molestie in pellentesque quis. Vitae ut nulla tortor nulla sit sed non ornare elit id ut praesent ut.</p>
                </MediaInfo>
                <MediaExample/>
                <MediaTile>Etnosport tarixi</MediaTile>
            </OurHistoryItem>
            <OurHistoryItem>
                <MediaExample/>
                <MediaTile>Xorazm tarixi</MediaTile>
            </OurHistoryItem>
        </OurHistoryContainer>
    </MainWrapper>
  )
}
