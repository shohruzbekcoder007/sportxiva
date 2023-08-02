import styled from "styled-components";

export const OurHistoryTitle = styled.div`
    padding-bottom: 56px;
`

export const OurHistoryContainer = styled.div`
    display: flex;
    gap: 25px;
    justify-content: center;
    padding-bottom: 150px;
    @media (max-width: 1200px){
        flex-wrap: wrap;
    }
`

export const OurHistoryItem = styled.div`
    width: 33%;
    @media (max-width: 1200px){
        width: 100%;
    }
`

export const MediaTile = styled.p`
    color: ${props => props.theme.text.font};
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 32px;
`

export const MediaInfo = styled.div`
    width: 100%;
    text-align: center;
    background-color: ${props => props.theme.color.color4};
    padding: 36px;
    margin-bottom: 24px;
    h4 {
        color: #FFF;
        text-align: center;
        font-size: 36px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        padding-bottom: 24px;
    }
    p{
        color: #FFF;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`