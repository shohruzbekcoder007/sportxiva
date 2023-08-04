import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ChampionshipTitle = styled.div`
    padding-bottom: 50px;
    /* @media (max-width: 700px) {
        padding-bottom: 30px;
    } */
`

export const ChampionshipMainBlog = styled.div`
    width: auto;
    display: block;
    position: relative;
    transition: all .3s;
    height: 900px;
    @media (max-width: 700px){
        height: 670px;
    }
    img {
        width: 100%;
        height: 100%;
        transition: all .3s;
    }
`

export const ChampionshipMainBlogContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    gap: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    flex-wrap: wrap;
`

export const ChampionshipMainBlogBox = styled.div`
    width: 25%;
    border-right: 1px solid #fff;
    height: 100%;
    position: relative;
    /* margin-bottom: 12px; */
    :last-child {
        border-right: none;
    }
    @media (max-width: 930px){
        width: 50%;
        height: 50%;
        border: 1px solid #ccc;
    }
`

export const ChampionshipBlogBox = styled.div`
    border-right: 3px solid #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const ChampionshipBlogInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
    h4 {
        color: #FFF;
        text-align: center;
        font-size: 250px;
        font-style: normal;
        font-weight: 300;
        line-height: 250px;
        @media (max-width: 930px){
            font-size: 80px;
            transform: translate(0px, -110px);
        }
    }
    .championship-footer{
            transition: all .5s;
            height: 0;
            display:  none;
        }
    &:hover {
        background-color: #1f1f1fa3;
        .championship-footer{
            /* background-color: red; */
            transition: all .3s;
            height: auto;
            display:  block;
        }
    }
`

export const ChampionshipBlogInfoFooter = styled.div`
    padding: 31px;
    position: absolute;
    width: 100%;
    /* text-align: center; */
    bottom: 0px;
    /* @media (max-width: 700px) {
        h5 {
            margin-bottom: 5px;
        }
    } */
    h5 {
        color: #FFF;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 56px;
        @media (max-width: 700px){
            margin-bottom: 5px;
        }
    }
`

export const SportReg = styled(Link)`
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
`