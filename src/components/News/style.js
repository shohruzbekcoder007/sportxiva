
import { styled } from "styled-components";

export const NewsTitle = styled.div `
    padding-top: 270px;
    padding-bottom: 56px;
`

export const NewsPhoto = styled.div `
    width: 100%;
    display: flex;
    gap: 24px;
    img {
        width: 688px;
        height: 458.843px;
        border-radius: 15px;
    }
`

export const NewsTitleName = styled.p `
    color: var(--font-color, #1F1F1F);
    font-family: Nunito Sans;
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`
export const NewsTitleDetailContainer = styled.div `
    width: 688px;
    height: 354px;
`

export const NewsTitleDetail = styled.p `
    color: var(--font-color, #1F1F1F);
    font-family: Nunito Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`


