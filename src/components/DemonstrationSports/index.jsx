import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { DemonstrationSportsContainer, DemonstrationSportsImgWrapper, DemonstrationSportsList, DemonstrationSportsListItem, DemonstrationSportsTitle, DemonstrationSportsWrapper } from './styles'
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'
import { events } from '../../utils/API_urls'
import { getEvents } from './request'

export default function DemonstrationSports() {
    const lang = useSelector(state => state.language)
    const [tablist, setTablist] = React.useState([])

    React.useEffect(() => {
        getEvents(events, (response) => {
            setTablist(response.data)
        }, (error) => {
            console.log(error)
        })
    }, [])

  return (
    <DemonstrationSportsWrapper>
        <MainWrapper>
        <DemonstrationSportsTitle>
            <Title>{language.Demonstration[lang]}</Title>
        </DemonstrationSportsTitle>
        <DemonstrationSportsContainer>
            <DemonstrationSportsList>

                {
                    tablist.length > 0 && tablist.map((item, index) => {
                        return (
                            <DemonstrationSportsListItem className="animation-info">
                            <span>0{item.id}</span>
                            <h5>{item[`name_${lang}`]}</h5>
                            <DemonstrationSportsImgWrapper className="animation-img">
                                <img src={item.image} alt="ozbek-jang-sanati" />
                            </DemonstrationSportsImgWrapper>
                        </DemonstrationSportsListItem>
                        )
                    })
                }
            </DemonstrationSportsList>
        </DemonstrationSportsContainer>
    </MainWrapper>
    </DemonstrationSportsWrapper>
  )
}
