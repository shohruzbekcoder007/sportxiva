import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const FestInfoContainer = styled.div`
    padding: 150px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1150px){
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        padding: 50px 0;
    }
`

export const FestInfoBox = styled.div`
    max-width: 451px;
    min-height: 439px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 952px){
        min-height: auto;
    }
`

export const FestInfoImageAndText = styled.div`
    text-align: center;
    img {
        width: 120px;
        height: 120px;
        display: inline-block;
    }
`

export const FestInfoCount = styled.p`
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    color: ${props => props.theme.text.font};
    margin-top: 24px;
    margin-bottom: 12px;
`

export const FestInfoText = styled.p`
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${props => props.theme.text.font};
    @media (max-width: 952px){
        padding-bottom: 20px;
    }
`

export const FestInfoLinkBox = styled.div`
    text-align: center;
    transition: all .3s;
    :hover {
        color: #fff;
        background-color: ${props => props.theme.color.color2};
        transition: all .3s;
    }
`

export const FestInfoLink = styled(NavLink)`
    display: inline-block;
    padding: 15px 105px;
    color: ${props => props.theme.color.color2};
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    flex-shrink: 0;
    border-radius: 12px;
    background-color: ${props => props.theme.text.bg};
    width: max-content;
    transition: all .3s;
`