import React, { useEffect, useState } from 'react'
import { HeaderContainer, HeaderWrapper, MenuItem, MenuItemLink, MenuList, TreeDots } from './styles'
import { MainWrapper } from '../../global_styles/styles'
import LanguageMenus from '../LanguageMenus';

export default function Header() {

    const [headerType, setHeaderType] = useState("simple")

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
                    <MenuList>
                        <MenuItem><MenuItemLink to="/">Asosiy</MenuItemLink></MenuItem>
                        <MenuItem><MenuItemLink to="news">Yangiliklar</MenuItemLink></MenuItem>
                        <MenuItem><MenuItemLink to="events">Tadbirlar</MenuItemLink></MenuItem>
                        <MenuItem><MenuItemLink to="organizers">Tashkilotchilar</MenuItemLink></MenuItem>
                    </MenuList>
                    <div>
                        <LanguageMenus />
                        <TreeDots
                            onClick={() => {}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 16 16" fill="#000000" className="bi bi-three-dots-vertical">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            </svg>
                        </TreeDots>
                    </div>
                </HeaderContainer>
            </MainWrapper>
        </HeaderWrapper>
    )
}
