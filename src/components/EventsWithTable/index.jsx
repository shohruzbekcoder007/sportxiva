import React from 'react'
import { EventsWithTableTitle, EventsWithTableWrapper } from './styles'
import { MainWrapper, Title } from '../../global_styles/styles'
import EventsWithTableTabs from './EventsWithTableTabs'
import CulturalEvents from './CulturalEvents'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'
export default function EventsWithTable() {
  const lang = useSelector(state => state.language)
  
  return (
    <EventsWithTableWrapper>
        <MainWrapper>
            <EventsWithTableTitle><Title>{language.FestivalProgram[lang]}</Title></EventsWithTableTitle>
            <EventsWithTableTabs />
            <EventsWithTableTitle><Title>{language.CulturalEvents[lang]}</Title></EventsWithTableTitle>
            <CulturalEvents title={'/event-first/'}/>
            <EventsWithTableTitle><Title>{language.SportsEvents[lang]}</Title></EventsWithTableTitle>
            <CulturalEvents title={'/event-secon/d'}/>
            <EventsWithTableTitle><Title>{language.NationalFolk[lang]}</Title></EventsWithTableTitle>
            <CulturalEvents title={'/event-third/'}/>
        </MainWrapper>
    </EventsWithTableWrapper>
  )
}
