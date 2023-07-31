import React, { useState } from 'react'
import { MainWrapper, Title } from '../../global_styles/styles'
import { ChampionshipBlogBox, ChampionshipBlogInfo, ChampionshipBlogInfoFooter, ChampionshipMainBlog, ChampionshipMainBlogBox, ChampionshipMainBlogContainer, ChampionshipTitle, SportReg } from './styles'
import img1 from '../../imgs/main_bg.jpeg'
import img2 from '../../imgs/jang_sanati.jpeg'
import img3 from '../../imgs/jang_sanati2.jpeg'
import img4 from '../../imgs/pahlavonlar_jangi.png'

export default function Championships() {

    const [bgImg, setBgImage] = useState(1)

    return (
        <>
            <MainWrapper>
                <ChampionshipTitle>
                    <Title>Jaxon chempionatlari</Title>
                </ChampionshipTitle>
            </MainWrapper>
            <ChampionshipMainBlog>
                {bgImg === 1 ? <img src={img1} alt='main bg' />:<></>}
                {bgImg === 2 ? <img src={img4} alt='main bg' />:<></>}
                {bgImg === 3 ? <img src={img3} alt='main bg' />:<></>}
                {bgImg === 4 ? <img src={img2} alt='main bg' />:<></>}
                <ChampionshipMainBlogContainer>
                    <ChampionshipMainBlogBox>
                        <ChampionshipBlogBox>
                            <ChampionshipBlogInfo onMouseEnter={() => {setBgImage(1)}}>
                                <h4>1</h4>
                                <ChampionshipBlogInfoFooter className="championship-footer">
                                    <h5>Mas Restling</h5>
                                    <SportReg to="register">Ro’yxatdan o’tish</SportReg>
                                </ChampionshipBlogInfoFooter>
                            </ChampionshipBlogInfo>
                        </ChampionshipBlogBox>
                    </ChampionshipMainBlogBox>
                    <ChampionshipMainBlogBox>
                        <ChampionshipBlogBox>
                            <ChampionshipBlogInfo onMouseEnter={() => {setBgImage(2)}}>
                                <h4>2</h4>
                                <ChampionshipBlogInfoFooter className="championship-footer">
                                    <h5>Pahlovonlar bellashuvi</h5>
                                    <SportReg to="register">Ro’yxatdan o’tish</SportReg>
                                </ChampionshipBlogInfoFooter>
                            </ChampionshipBlogInfo>
                        </ChampionshipBlogBox>
                    </ChampionshipMainBlogBox>
                    <ChampionshipMainBlogBox>
                        <ChampionshipBlogBox>
                            <ChampionshipBlogInfo onMouseEnter={() => {setBgImage(3)}}>
                                <h4>3</h4>
                                <ChampionshipBlogInfoFooter className="championship-footer">
                                    <h5>Belbog'li kurash</h5>
                                    <SportReg to="register">Ro’yxatdan o’tish</SportReg>
                                </ChampionshipBlogInfoFooter>
                            </ChampionshipBlogInfo>
                        </ChampionshipBlogBox>
                    </ChampionshipMainBlogBox>
                    <ChampionshipMainBlogBox>
                        <ChampionshipBlogBox>
                            <ChampionshipBlogInfo onMouseEnter={() => {setBgImage(4)}}>
                                <h4>4</h4>
                                <ChampionshipBlogInfoFooter className="championship-footer">
                                    <h5>O'zbekiston jang san'ati</h5>
                                    <SportReg to="register">Ro’yxatdan o’tish</SportReg>
                                </ChampionshipBlogInfoFooter>
                            </ChampionshipBlogInfo>
                        </ChampionshipBlogBox>
                    </ChampionshipMainBlogBox>
                </ChampionshipMainBlogContainer>
            </ChampionshipMainBlog>
        </>
    )
}