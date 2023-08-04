import { styled } from "styled-components";

export const InfoWrapper = styled.div`
    padding-top: 250px;
`

export const NewsInfoImg = styled.img`
    object-fit: contain;
    clip-path: ellipse(100px at 40% 50%);
    width: 700px;
    height: 500px;
    float: right;
    margin: 1rem;
    @media (max-width: 750px) {
        width: 300px;
        height: 300px;
    }
    @media (max-width: 500px) {
        width: 200px;
        height: 200px;
    }
`

export const NewsInfoText = styled.p`
    font-size: 20px;    
`

export const NewsInfoImgText = styled.div`
    display: table;
    padding: 20px 0;
    width: 100%;
    ::before{
        content: '';
        display: table;
    }
    ::after{
        content: '';
        display: table;
    }
`