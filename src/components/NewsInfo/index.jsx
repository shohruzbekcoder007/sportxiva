import React, { useEffect, useState } from 'react'
import { MainWrapper } from '../../global_styles/styles'
import { RegisterTitle } from '../Register/styles'
import {InfoWrapper, NewsInfoImg, NewsInfoImgText, NewsInfoText } from './styles'
import { useLocation } from 'react-router'
export default function NewsInfo() {
  const { state } = useLocation()
  const [NewsInfo, setNewsInfo] = useState(state)
  return (
    <InfoWrapper>
      <MainWrapper>
      <RegisterTitle>
          <h1>{NewsInfo?.name}</h1>
      </RegisterTitle>
         <NewsInfoImgText>
          <NewsInfoImg src={NewsInfo?.image} alt="" />
          <NewsInfoText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, voluptatum sit? Sint asperiores, esse aliquid inventore alias earum doloremque facere vitae, dignissimos impedit suscipit repellendus similique perferendis quam voluptate quaerat facilis iusto in necessitatibus ut! Placeat voluptas quae corporis tenetur iste autem nihil nisi, nam, eveniet hic ad, officia ea deserunt inventore ipsa? Dolor ratione atque qui illum quidem! Alias deleniti impedit similique nobis quibusdam necessitatibus eveniet, temporibus nemo in optio! Natus sit impedit eveniet quo, ea nemo rerum mollitia cum, officiis aliquam ducimus quisquam maxime veritatis quasi neque omnis voluptatem eius. Asperiores, aliquid esse earum nobis explicabo praesentium, consectetur dignissimos sint aut doloribus impedit ratione? Hic, reprehenderit. Eum sapiente rerum necessitatibus consectetur quae enim odio itaque a perspiciatis atque iusto facilis numquam voluptatem suscipit architecto, molestias delectus sunt alias illum deserunt earum voluptatibus repellendus quasi. Est nostrum facere nesciunt animi, esse deleniti quia incidunt facilis ut nobis hic. Magnam qui impedit aspernatur accusamus odit suscipit harum ratione quia, illo pariatur, obcaecati architecto reprehenderit itaque? Dignissimos asperiores veritatis quibusdam quisquam et impedit. Aliquid totam corrupti impedit! Possimus soluta consequatur, perspiciatis incidunt ipsa ipsam facere quaerat, veritatis quia, minima ab error officiis. Possimus ex impedit voluptatum consectetur maxime iusto vero dolores laboriosam saepe sunt voluptatem mollitia eius, voluptas quae sint dicta sapiente magnam odit velit unde reiciendis voluptatibus amet consequatur. Ullam eveniet, pariatur velit fugit sequi nisi quos culpa nam placeat magnam reprehenderit, rerum recusandae laborum quis dolores praesentium dolorum alias expedita voluptates quisquam error in? Dolore optio est ad quaerat iusto. Optio saepe quo aperiam similique fuga, autem quam obcaecati sed iure, voluptates maiores accusamus, consequuntur magnam reprehenderit inventore praesentium. Aspernatur sequi voluptatum voluptate in commodi quod minus, dolore vitae exercitationem laboriosam architecto enim pariatur veritatis unde corporis et! Dolor blanditiis odio provident aut dolore, laboriosam illo modi impedit. Animi.</NewsInfoText>  
         </NewsInfoImgText>
      </MainWrapper>
    </InfoWrapper>
  )
}
