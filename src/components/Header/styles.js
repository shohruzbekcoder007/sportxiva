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
    /* box-shadow: ${props => props.type === "effective" ? '10px 0px 30px 10px #e8e8e8':``}; */
`

export const HeaderContainer = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MenuList = styled.ul`

`

export const MenuItem = styled.li`
    display: inline-block;
    margin: 0 50px;
    transition: all .3s;
    :hover {
        color: ${props => props.theme.color.color2};
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