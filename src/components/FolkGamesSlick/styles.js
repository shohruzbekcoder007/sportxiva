import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const WalksSlickItem = styled.div`
    padding: 36px;
    border-radius: 15px;
    background: #F3F3F3;
`

export const WalksSlickImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 100%;
    }
`

export const WalksSlickTitle = styled.h5`
    color: #1F1F1F;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 22px;
    padding-bottom: 12px;
`

export const WalksSlickInfo = styled.p`
    color: #5A5A5A;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const WalksLink = styled(Link)`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #0093DD;
    width: 100%;
    height: 70px;
    /* padding: 26px 123px; */
    margin-top: 36px;
`