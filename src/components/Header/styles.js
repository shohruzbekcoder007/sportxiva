import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    transition: all .3s;
    z-index: 1000;
    @media (max-width: 670px){
        border-bottom: 2px solid #ccc;
    }
    /* box-shadow: ${props => props.type === "effective" ? '10px 0px 30px 10px #e8e8e8':``}; */
`

export const HeaderContainer = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 670px){
        height: 80px;
    }
    img {
        @media (max-width: 670px){
            width: 70px;
        }
    }
    
`

export const MenuList = styled.ul`
    @media (max-width: 670px){
        position: absolute;
        top: 100%;
        height: 60px;
        background: #FFF;
        width: 100%;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const MenuItem = styled.li`
    display: inline-block;
    margin: 0 50px;
    transition: all .3s;
    :hover {
        color: ${props => props.theme.color.color2};
    }
    @media (max-width: 1000px) {
        margin: 0 10px;
    }
`

export const MenuItemLink = styled(NavLink)`
    line-height: normal;
    font-style: normal;
    font-size: 18px;
    font-weight: 600;
    transition: all .3s;
    color: #1F1F1F;
`

export const TreeDots = styled.span`
  display: none;
  cursor: pointer;
  @media (max-width: 685px) {
    display: block;
  }
`