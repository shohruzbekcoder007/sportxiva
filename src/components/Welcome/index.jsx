import React from 'react'
import { WelcomeContainer, WelcomeImage, WelcomeInfo, WelcomeWrapper } from './styles'
import { MainWrapper } from '../../global_styles/styles'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <MainWrapper>
        <WelcomeContainer>
          <WelcomeInfo>
            <h1>Xalqaro etnosport <br /> festivaliga xush kelibsiz</h1>
            <NavLink to="register">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "20px 40px",
                  boxShadow: "none",
                  textTransform: "none",
                  fontFamily: "Nunito Sans",
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  borderRadius: "12px"
                }}
              >
                Ro’yxatdan o’tish
              </Button>
            </NavLink>
          </WelcomeInfo>
          <WelcomeImage>
            <img src={require("../../imgs/photo_2023-07-26_00-34-17 1.png")} alt="Bilal Erdog’an va Adham Ikromov" />
          </WelcomeImage>
        </WelcomeContainer>
      </MainWrapper>
    </WelcomeWrapper>
  )
}
