import React from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'

import { NewsPhoto, NewsTitle, NewsTitleDetail, NewsTitleDetailContainer, NewsTitleName } from './style'

export default function News() {
  return (
    <MainWrapper>
        <NewsTitle>
          <Title>Yangiliklar</Title>
        </NewsTitle>
        <NewsPhoto>
            <img  src={require('../../imgs/plov.png')} alt="photo_1" />
            <NewsTitleDetailContainer>
            <NewsTitleName>Osh musoboqasi</NewsTitleName>
            <NewsTitleDetail>Lorem ipsum dolor sit amet consectetur. Mattis ligula lectus sem eu pretium scelerisque. Est id sed pellentesque nec. Eu eget massa blandit nulla purus lectus hendrerit est. Vestibulum nunc viverra dignissim nulla nisi pharetra amet in placerat. Augue ut vitae integer morbi. Turpis rutrum tincidunt morbi convallis rhoncus justo. Leo molestie duis urna pellentesque. Aliquet diam risus elementum lectus dolor id mauris. Nullam fringilla in phasellus id eu lobortis. Id mauris venenatis enim ultrices fermentum ullamcorper pulvinar. Amet fringilla nulla eu amet ultrices fermentum sed enim.</NewsTitleDetail></NewsTitleDetailContainer>
        </NewsPhoto>
    </MainWrapper>
  )
}
