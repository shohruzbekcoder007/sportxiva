import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterWrapper = styled.div`
    background-color: ${props => props.theme.color.color4};
`

export const FooterContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 56px;
    @media (max-width: 1512px){
        flex-direction: column-reverse;
        gap: 56px;
        align-items: center;
    }
`
export const FooterBottom = styled.div`
    padding: 56px 0;
    p{
        text-align: center;
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`

export const FooterLeft = styled.div`
    h5 {
        color: #FFF;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 43px;
    }
    @media (max-width: 600px){
        width: 100%;
        padding: 0 20px;
    }
`

export const FooterReight = styled.div`
    
`

export const FooterCommentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 37px;
    @media (max-width: 600px){
        width: 100%;
    }
    input {
        width: 333px;
        height: 64px;
        flex-shrink: 0;
        border-radius: 12px;
        background: #FFF;
        border: none;
        outline: none;
        padding: 0 16px;
        @media (max-width: 1512px){
            width: 100%;
        }
    }
    textarea{
        width: 569px;
        height: 230px;
        flex-shrink: 0;
        border-radius: 12px;
        background: #FFF;
        padding: 20px 16px;
        border: none;
        outline: none;
        @media (max-width: 600px){
            width: 100%;
            height: 180px;
        }
    }
`

export const FooterImageWrapper = styled.div`
    padding: 44px 85px;
    border-radius: 15px;
    background-color: #fff;
    @media (max-width: 850px){
        padding: 40px;
    }
    @media (max-width: 550px){
        padding: 10px;
        width: max-content;
        margin: 0 auto;
    }
    img {
        @media (max-width: 760px){
            width: 100%;
        }
        @media (max-width: 550px){
            width: 260px;
            display: inline-block
        }
    }
`

export const FooterReightNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 54px;
    @media (max-width: 550px){
        flex-wrap: wrap;
        gap: 20px;
        margin: 0;
        justify-content: center;
    }
`

export const FooterReightLink = styled(Link)`
    display: inline-block;
    color: #FFF;
    text-align: right;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 10px;
`