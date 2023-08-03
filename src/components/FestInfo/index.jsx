import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { FestInfoBox, FestInfoContainer, FestInfoCount, FestInfoImageAndText, FestInfoLink, FestInfoLinkBox, FestInfoText } from './styles'
import { countData } from './requests'
import { count_data } from '../../utils/API_urls'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function FestInfo() {
    const lang = useSelector(state => state.language)

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
                    <FestInfoText>{language.Participating[lang]}</FestInfoText>
                </FestInfoImageAndText>
                <FestInfoLinkBox>
                    <FestInfoLink to="countrymembers">
                    {language.View[lang]}
                    </FestInfoLink>
                </FestInfoLinkBox>
            </FestInfoBox>
            <FestInfoBox>
                <FestInfoImageAndText>
                    <img src={require('../../imgs/public_box2.png')} alt="box img 2" />
                    <FestInfoCount>{guest}</FestInfoCount>
                    <FestInfoText>{language.ForeignGuests[lang]}</FestInfoText>
                </FestInfoImageAndText>
                <FestInfoLinkBox>
                    <FestInfoLink to="guests">
                        {language.View[lang]}
                    </FestInfoLink>
                </FestInfoLinkBox>
            </FestInfoBox>
            <FestInfoBox>
                <FestInfoImageAndText>
                    <img src={require('../../imgs/publix_box3.png')} alt="box img 3" />
                    <FestInfoCount>{member}</FestInfoCount>
                    <FestInfoText>{language.ParticipantsCompetition[lang]}</FestInfoText>
                </FestInfoImageAndText>
                <FestInfoLinkBox>
                    <FestInfoLink to="members">
                        {language.View[lang]}
                    </FestInfoLink>
                </FestInfoLinkBox>
            </FestInfoBox>
        </FestInfoContainer>
    </MainWrapper>
  )
}
