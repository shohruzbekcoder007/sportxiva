import { MainWrapper, Title } from "../../global_styles/styles";
import { WelcomeContainer } from "../Welcome/styles";
import { OrgUsersUrl } from "./requests";
import { OrganizersContainer, OrganizersPhoto, OrganizersTitle, OrganizersUserinfo, OrganizersUserName } from "./style";
import * as React from 'react';
import { organizers } from "../../utils/API_urls";
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'

export default function OrganizersUser() {
  const lang = useSelector(state => state.language)

    const [rows, setRows] = React.useState([])
    React.useEffect(() => {
        OrgUsersUrl(organizers, (response) => {
            setRows(response.data)
        }, (error) => {
            console.log(error)
        })
        }, [])
    return (
    <MainWrapper>
        <OrganizersTitle>
          <Title>{language.Organizers[lang]}</Title>
        </OrganizersTitle>
        <WelcomeContainer>
            <OrganizersContainer>
                {
                    rows.map((elem, index) => {
                        return (
                            <OrganizersPhoto key={index}>
                                <img  src={elem.image} alt="photo_1" />
                                <OrganizersUserName>{elem.full_name}</OrganizersUserName>
                                <OrganizersUserinfo>{elem.title}</OrganizersUserinfo>
                            </OrganizersPhoto>
                        )
                    })
                }
            </OrganizersContainer>
            
        </WelcomeContainer>
    </MainWrapper>
    )
}