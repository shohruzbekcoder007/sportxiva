import styled from 'styled-components'
import bgi from '../../imgs/capa1.png'

export const WelcomeWrapper = styled.div`
    width: 100%;
    /* min-height: 100vh; */
    background-image: url(${bgi});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    /* padding-top: 120px; */
    padding: 150px 0;
    @media (max-width: 800px) {
        padding: 50px 0;
    }
`

export const WelcomeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
        gap: 30px;
        justify-content: center;
    }
`

export const WelcomeInfo = styled.div`
    h1 {
        color: ${props => props.theme.color.color1};
        font-size: 56px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 72px;
        @media (max-width: 950px) {
            font-size: 46px;
        }
    }
`

export const WelcomeImage = styled.div`
    flex-shrink: 0;
    img {
        width: 500px;
        /* height: 552px; */
        object-fit: cover;
        border-radius: 15px;
        background: #D9D9D9;
        @media (max-width: 950px) {
            width: 400px;
        }
        @media (max-width: 420px) {
            width: 300px;
        }
    }
`