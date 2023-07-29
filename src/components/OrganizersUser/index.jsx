import { MainWrapper, Title } from "../../global_styles/styles";
import { WelcomeContainer } from "../Welcome/styles";
import { OrganizersContainer, OrganizersPhoto, OrganizersTitle, OrganizersUserinfo, OrganizersUserName } from "./style";


export default function OrganizersUser() {
    return (
    <MainWrapper>
        <OrganizersTitle>
          <Title>Tashkilotchilar</Title>
        </OrganizersTitle>
        <WelcomeContainer>
            <OrganizersContainer>
                <OrganizersPhoto>

                    <img  src={require('../../imgs/AbdulloAripov.png')} alt="photo_1" />
                    <OrganizersUserName>Abdulla Aripov</OrganizersUserName>
                    <OrganizersUserinfo>O'zbekiston Respublikasi bosh vaziri, Tashkiliy qo'mita raisi</OrganizersUserinfo>
                </OrganizersPhoto>
                <OrganizersPhoto>

                    <img  src={require('../../imgs/AbdulloAripov.png')} alt="photo_1" />
                    <OrganizersUserName>Abdulla Aripov</OrganizersUserName>
                    <OrganizersUserinfo>O'zbekiston Respublikasi bosh vaziri, Tashkiliy qo'mita raisi</OrganizersUserinfo>
                </OrganizersPhoto>
                <OrganizersPhoto>

                    <img  src={require('../../imgs/AbdulloAripov.png')} alt="photo_1" />
                    <OrganizersUserName>Abdulla Aripov</OrganizersUserName>
                    <OrganizersUserinfo>O'zbekiston Respublikasi bosh vaziri, Tashkiliy qo'mita raisi</OrganizersUserinfo>
                </OrganizersPhoto>
                <OrganizersPhoto>

                    <img  src={require('../../imgs/AbdulloAripov.png')} alt="photo_1" />
                    <OrganizersUserName>Abdulla Aripov</OrganizersUserName>
                    <OrganizersUserinfo>O'zbekiston Respublikasi bosh vaziri, Tashkiliy qo'mita raisi</OrganizersUserinfo>
                </OrganizersPhoto>

            </OrganizersContainer>
            
        </WelcomeContainer>
    </MainWrapper>
    )
}