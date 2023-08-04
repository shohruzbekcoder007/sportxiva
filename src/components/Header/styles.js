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
    @media (max-width: 1075px){
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
    /* @media (max-width: 670px){
        height: 80px;
    } */
    border-bottom: 2px dotted #ccc;
`

export const Logos = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
        height: 90px;
        @media (max-width: 560px){
            height: 50px;
        }
    }
`

export const MenuList = styled.ul`
    transition: all .3s;
    @media (max-width: 1075px){
        position: absolute;
        top: 100%;
        height: ${props => props.open?'60px':'0'};
        overflow: hidden;
        background: #FFF;
        width: 100%;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 20px 30px -2px #919191;
        border-top: 1px solid #eee;
    }
    @media (max-width: 460px) {
        flex-wrap: wrap;
        height: ${props => props.open?'auto':'0'};
        text-align: center;
    }
    
`

export const MenuItem = styled.li`
    display: inline-block;
    margin: 0 50px;
    transition: all .3s;
    :hover {
        color: ${props => props.theme.color.color2};
    }
    @media (max-width: 1450px) {
        margin: 0 10px;
    }
    @media (max-width: 460px) {
        width: 100%;
        padding: 10px 0;
        transition: all .5s;
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

export const LanguageDots = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

export const TreeDots = styled.span`
  display: none;
  cursor: pointer;
  @media (max-width: 1075px) {
    display: block;
  }
`

export const AddLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`