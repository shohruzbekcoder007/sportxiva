import React from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { FestInfoBox, FestInfoContainer, FestInfoCount, FestInfoImageAndText, FestInfoLink, FestInfoLinkBox, FestInfoText } from './styles'

export default function FestInfo() {
  return (
    <MainWrapper>
        <FestInfoContainer>
            <FestInfoBox>
                <FestInfoImageAndText>
                    <img src={require('../../imgs/public_box1.png')} alt="box img 1" />
                    <FestInfoCount>65</FestInfoCount>
                    <FestInfoText>Festivalda ishtirok etuvchi davlatlar</FestInfoText>
                </FestInfoImageAndText>
                <FestInfoLinkBox>
                    <FestInfoLink to="/">
                        Ko’rish
                    </FestInfoLink>
                </FestInfoLinkBox>
            </FestInfoBox>
            <FestInfoBox>
                <FestInfoImageAndText>
                    <img src={require('../../imgs/public_box2.png')} alt="box img 2" />
                    <FestInfoCount>1578</FestInfoCount>
                    <FestInfoText>Xorijiy mehmonlar</FestInfoText>
                </FestInfoImageAndText>
                <FestInfoLinkBox>
                    <FestInfoLink to="/">
                        Ko’rish
                    </FestInfoLink>
                </FestInfoLinkBox>
            </FestInfoBox>
            <FestInfoBox>
                <FestInfoImageAndText>
                    <img src={require('../../imgs/publix_box3.png')} alt="box img 3" />
                    <FestInfoCount>400</FestInfoCount>
                    <FestInfoText>Musoboqa ishtirokchilari</FestInfoText>
                </FestInfoImageAndText>
                <FestInfoLinkBox>
                    <FestInfoLink to="/">
                        Ko’rish
                    </FestInfoLink>
                </FestInfoLinkBox>
            </FestInfoBox>
        </FestInfoContainer>
    </MainWrapper>
  )
}
