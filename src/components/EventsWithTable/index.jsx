import React from 'react'
import { EventsWithTableTitle, EventsWithTableWrapper } from './styles'
import { MainWrapper, Title } from '../../global_styles/styles'
import EventsWithTableTabs from './EventsWithTableTabs'
import CulturalEvents from './CulturalEvents'

export default function EventsWithTable() {
  return (
    <EventsWithTableWrapper>
        <MainWrapper>
            <EventsWithTableTitle><Title>Festival dasturi</Title></EventsWithTableTitle>
            <EventsWithTableTabs />
            <EventsWithTableTitle><Title>Madaniy tadbirlar</Title></EventsWithTableTitle>
            <CulturalEvents title={'/event-first/'}/>
            <EventsWithTableTitle><Title>Sport tadbirlari</Title></EventsWithTableTitle>
            <CulturalEvents title={'/event-secon/d'}/>
            <EventsWithTableTitle><Title>Milliy xalq o’yinlar</Title></EventsWithTableTitle>
            <CulturalEvents title={'/event-third/'}/>
        </MainWrapper>
    </EventsWithTableWrapper>
  )
}
