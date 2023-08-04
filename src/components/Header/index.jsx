import React, { useEffect, useState } from 'react'
import { AddLogos, HeaderContainer, HeaderWrapper, LanguageDots, Logos, MenuItem, MenuItemLink, MenuList, TreeDots } from './styles'
import { MainWrapper } from '../../global_styles/styles'
import LanguageMenus from '../LanguageMenus';
import { useSelector } from 'react-redux'
import language from '../../utils/language.json'


export default function Header() {

    const lang = useSelector(state => state.language)

    const [headerType, setHeaderType] = useState("simple")
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {

        // const handleScroll = event => {
        //     if( window.scrollY >= 120){
        //         setHeaderType("effective")
        //     } else {
        //         setHeaderType("simple")
        //     }
        // };

        // window.addEventListener('scroll', handleScroll);

        // return () => {
        //     window.removeEventListener('scroll', handleScroll);
        // };

    }, []);

    return (
        <HeaderWrapper type={headerType}>
            <MainWrapper>
                <HeaderContainer>
                        <img src={require('../../imgs/image1.png')} alt="logo" />
                    <MenuList open={openMenu}>
                        <MenuItem><MenuItemLink to="/">{language.home_page[lang]}</MenuItemLink></MenuItem>
                        <MenuItem><MenuItemLink to="news">{language.news_page[lang]}</MenuItemLink></MenuItem>
                        <MenuItem><MenuItemLink to="events">{language.Events[lang]}</MenuItemLink></MenuItem>
                        <MenuItem><MenuItemLink to="organizers">{language.Organizers[lang]}</MenuItemLink></MenuItem>
                    </MenuList>
                    <LanguageDots>
                        <LanguageMenus />
                        <TreeDots
                            onClick={() => {setOpenMenu(!openMenu)}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16" fill="#000000" className="bi bi-three-dots-vertical">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                        </TreeDots>
                    </LanguageDots>
                </HeaderContainer>
                <AddLogos>
                    <Logos>
                        <img src={require('../../imgs/new_logo.jpg')} alt="logo" />
                        <img src={require('../../imgs/new_logo2.jpg')} alt="logo" />
                        <img src={require('../../imgs/removebg-preview2.png')} alt="logo" />
                    </Logos>
                </AddLogos>
            </MainWrapper>
        </HeaderWrapper>
    )
}
