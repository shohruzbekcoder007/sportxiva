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
`

export const FooterReight = styled.div`
    
`

export const FooterCommentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 37px;
    input {
        width: 333px;
        height: 64px;
        flex-shrink: 0;
        border-radius: 12px;
        background: #FFF;
        border: none;
        outline: none;
        padding: 0 16px;
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
    }
`

export const FooterImageWrapper = styled.div`
    padding: 44px 85px;
    border-radius: 15px;
    background-color: #fff;
`

export const FooterReightNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 54px;
`

export const FooterReightLink = styled(Link)`
    display: inline-block;
    color: #FFF;
    text-align: right;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`