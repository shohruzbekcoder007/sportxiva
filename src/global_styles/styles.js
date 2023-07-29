import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 1512px;
    padding: 0 56px;
    margin: 0 auto;
    @media (max-width: 1512px){
        width: 100%;
    }
`

export const Title = styled.h3`
    color: ${props => props.theme.color.color1};
    font-family: Nunito Sans;
    font-size: 56px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

export const FlagImg = styled.div `
    width: 40px;
    height: 24px;
    display: inline-block;
    img {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
`