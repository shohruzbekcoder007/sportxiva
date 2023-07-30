import React, { useEffect, useState } from 'react'
import { HeaderContainer, HeaderWrapper, MenuItem, MenuItemLink, MenuList } from './styles'
import { MainWrapper } from '../../global_styles/styles'

export default function Header() {

    const [headerType, setHeaderType] = useState("simple")

    useEffect(() => {

        const handleScroll = event => {
            if( window.scrollY >= 120){
                setHeaderType("effective")
            } else {
                setHeaderType("simple")
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

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
                    <span>uz</span>
                </HeaderContainer>
            </MainWrapper>
        </HeaderWrapper>
    )
}
