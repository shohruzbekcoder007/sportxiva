import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { FestInfoBox, FestInfoContainer, FestInfoCount, FestInfoImageAndText, FestInfoLink, FestInfoLinkBox, FestInfoText } from './styles'
import { countData } from './requests'
import { count_data } from '../../utils/API_urls'

export default function FestInfo() {

    const [country, setCountry] = useState(0)
    const [member, setMember] = useState(0)
    const [guest, setGuest] = useState(0)

    useEffect(()=> {
        countData(count_data, (response) => {
            setCountry(response.data.country)
            setMember(response.data.member)
            setGuest(response.data.guests)
        }, (error) => {
            console.log(error)
        })
    }, [])

  return (
    <MainWrapper>
        <FestInfoContainer>
            <FestInfoBox>
                <FestInfoImageAndText>
                    <img src={require('../../imgs/public_box1.png')} alt="box img 1" />
                    <FestInfoCount>{country}</FestInfoCount>
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
                    <FestInfoCount>{guest}</FestInfoCount>
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
                    <FestInfoCount>{member}</FestInfoCount>
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
