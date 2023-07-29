import styled, { keyframes } from 'styled-components'

export const DemonstrationSportsTitle = styled.div`
    padding: 150px 0;
`

export const DemonstrationSportsContainer = styled.div`
    width: 100%;
    /* padding-top: 90px; */
`

export const DemonstrationSportsList = styled.ul`
    width: 100%;
`

export const DemonstrationSportsListItem = styled.li`
    width: 100%;
    position: relative;
    span {
        display: inline-block;
        color: ${props => props.theme.text.font};
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        padding-bottom: 15px;
    }
    h5 {
        color: ${props => props.theme.text.font};
        font-size: 48px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        padding-bottom: 55px;
    }
    border-bottom: 1px solid ${props => props.theme.color.color1};
    margin-bottom: 60px;
`

export const DemonstrationSportsImgWrapper = styled.div`
    width: 300px;
    height: 340px;
    flex-shrink: 0;
    background-color: red;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(60%) rotate(-45deg);
    opacity: -1;
    z-index: -1;
    img {
        width: 100%;
        height: 100%;
    }
`