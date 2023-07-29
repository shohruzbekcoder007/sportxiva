import React from 'react'
import { RegisterTitle } from '../Register/styles'
import { MainWrapper } from '../../global_styles/styles'
import { WelcomeContainer } from '../Welcome/styles'
import img1 from '../../imgs/osh.png'
import { NewsImgCard, NewsRight, NewsWalksLink, NewsWalksSlickImageWrapper, NewsWalksSlickInfo, NewsWalksSlickItem, NewsWalksSlickTitle, NewsWelcomeContainer } from './styles'
import { WalksLink, WalksSlickImageWrapper, WalksSlickInfo, WalksSlickItem, WalksSlickTitle } from '../WalksSlick/styles'
import { Link } from 'react-router-dom'
export default function News() {
  return (
    <div>
      <MainWrapper>
        <RegisterTitle>
          <h1>Yangiliklar</h1>
        </RegisterTitle>
        <WelcomeContainer>
          <NewsImgCard >
            <img src={img1} alt="" />
          </NewsImgCard>
          <NewsRight>
            <h1>Osh Musobaqasi</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Mattis ligula lectus sem eu pretium scelerisque. Est id sed pellentesque nec. Eu eget massa blandit nulla purus lectus hendrerit est. Vestibulum nunc viverra dignissim nulla nisi pharetra amet in placerat. Augue ut vitae integer morbi. Turpis rutrum tincidunt morbi convallis rhoncus justo. Leo molestie duis urna pellentesque. Aliquet diam risus elementum lectus dolor id mauris. Nullam fringilla in phasellus id eu lobortis. Id mauris venenatis enim ultrices fermentum ullamcorper pulvinar. Amet fringilla nulla eu amet ultrices fermentum sed enim.</p>
          </NewsRight>
        </WelcomeContainer>

        <NewsWelcomeContainer>
        {
          [1,2,3,4,5,6,7,8].map(item => {
            return (
               <NewsWalksSlickItem>
                <NewsWalksSlickImageWrapper>
                  <img src={require("../../imgs/oshsayli.png")} alt="Uzbekistan_Airways" />
                </NewsWalksSlickImageWrapper>
                <NewsWalksSlickTitle>Osh musoboqasi</NewsWalksSlickTitle>
                <NewsWalksSlickInfo>
                  Lorem ipsum dolor sit amet consectetur. Mi adipiscing vitae arcu eget vel euismod vulputate. Amet leo enim adipiscing ac leo diam odio molestie faucibus. Enim.
                </NewsWalksSlickInfo>
                <NewsWalksLink to={`/newsinfo/${item}`}>Batafsil</NewsWalksLink>
              </NewsWalksSlickItem>
            )
          })
        }
        </NewsWelcomeContainer>
      </MainWrapper>
    </div>
  )
}
