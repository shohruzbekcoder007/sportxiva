import { styled } from "styled-components";


export const OrganizersTitle = styled.div `
    padding-top: 270px;
    padding-bottom: 56px;


`
export const OrganizersContainer = styled.div `
    display: flex;
    gap: 20px;
    padding-bottom: 150px;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const OrganizersPhoto = styled.div `
    width: 330px;
    img {
        width: 332px;
        height: 236px;
        border-radius: 15px;
    }
`

export const OrganizersUserName = styled.p `
    width: 332px;
    padding-top: 24px;
    padding-bottom: 16px;
    color: var(--font, #1F1F1F);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    
`

export const OrganizersUserinfo = styled.p `
    width: 339px;
    color: var(--font, #1F1F1F);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`