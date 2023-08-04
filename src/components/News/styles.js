import { styled } from "styled-components";
import { Link } from 'react-router-dom'

export const NewsWrapper = styled.div`
  padding-top: 260px;
`

/* color: ${props => props.theme.color.color2}; */
export const NewsImgCard = styled.div`
  width: 45%;
  margin: 0 0 2rem 0;
  @media (max-width: 650px) {
    width: 100%;
  }
  img {
    width: 100%;
    height: 458px; 
    object-fit: contain;
  }

`
export const NewsRight = styled.div`
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
  h1 {
    font-size: 50px;
     margin: 1rem 0;
  }
  p {
    font-size: 24px;
  }
`

export const NewsWalksSlickItem = styled.div`
    padding: 28px;
    border-radius: 15px;
    background: #F3F3F3;
    width: 330px;
    margin: 2rem 0.5rem;
`

export const NewsWelcomeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const NewsWalksSlickImageWrapper = styled.div`
    flex-shrink: 0;
    img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        object-fit: contain;
    }
`

export const NewsWalksSlickTitle = styled.h5`
    color: #1F1F1F;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 22px;
    padding-bottom: 12px;
`

export const NewsWalksSlickInfo = styled.p`
    color: #5A5A5A;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const NewsWalksLink = styled(Link)`
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: inline-block;
    border-radius: 12px;
    background: #0093DD;
    width: 100%;
    padding: 15px 80px;
    margin-top: 36px;
`

export const NewsContainer  = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;
  }
`