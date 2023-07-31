import React from 'react'
import { NewsWalksLink, NewsWalksSlickImageWrapper, NewsWalksSlickInfo, NewsWalksSlickItem, NewsWalksSlickTitle, NewsWelcomeContainer } from '../News/styles'

export default function CulturalEvents() {
  return (
    <>
        <NewsWelcomeContainer>
        {
          [1,2,3,4,5,6,7,8].map((item, index) => {
            return (
               <NewsWalksSlickItem key={index}>
                <NewsWalksSlickImageWrapper>
                  <img src={require("../../imgs/oshsayli.png")} alt="Uzbekistan_Airways" />
                </NewsWalksSlickImageWrapper>
                <NewsWalksSlickTitle>Osh musoboqasi</NewsWalksSlickTitle>
                <NewsWalksSlickInfo>
                  Lorem ipsum dolor sit amet consectetur. Mi adipiscing vitae arcu eget vel euismod vulputate. Amet leo enim adipiscing ac leo diam odio molestie faucibus. Enim.
                </NewsWalksSlickInfo>
                <NewsWalksLink to={`/news/${item}`}>Batafsil</NewsWalksLink>
              </NewsWalksSlickItem>
            )
          })
        }
        </NewsWelcomeContainer>
    </>
  )
}
