import styled from 'styled-components'
import bgi from '../../imgs/capa1.png'

export const WelcomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bgi});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 120px;
`