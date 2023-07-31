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
            <EventsWithTableTabs/>
            <EventsWithTableTitle><Title>Madaniy tadbirlar</Title></EventsWithTableTitle>
            <CulturalEvents/>
            <EventsWithTableTitle><Title>Sport tadbirlari</Title></EventsWithTableTitle>
            <CulturalEvents/>
            <EventsWithTableTitle><Title>Milliy xalq o’yinlar</Title></EventsWithTableTitle>
            <CulturalEvents/>
        </MainWrapper>
    </EventsWithTableWrapper>
  )
}
