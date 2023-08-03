import styled from "@emotion/styled";

export const VideoWelcomeWrapper = styled.div`
    width: auto;
    display: block;
    /* margin: 0 -56px; */
    position: relative;
    margin-top: 120px;
    @media (max-width: 670px){
        margin-top: 80px;
    }
    video {
        width: 100%;
        margin: 0 auto;
        /* height: calc(100vh - 150px); */
    }
`

export const VideoWelcomeDateWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.60);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const VideoWelcomeDateContainer = styled.div`
    h3 {
        color: #FFF;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 24px;
    }
    p{
        color: #FFF;
        text-align: center;
        font-family: Nunito Sans;
        font-size: 72px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        @media (max-width: 1160px){
            font-size: 32px;
        }
        span {
            color: #FFF;
            font-size: 72px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
            @media (max-width: 1160px){
                font-size: 32px;
            }
        }
    }
`