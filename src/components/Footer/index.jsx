import React, { useState } from 'react'
import { FooterBottom, FooterCommentForm, FooterContainer, FooterImageWrapper, FooterLeft, FooterReight, FooterReightLink, FooterReightNav, FooterWrapper } from './styles'
import { MainWrapper } from '../../global_styles/styles'
import { Button } from '@mui/material'
import { countCommet } from './requests'
import { ideaguests } from '../../utils/API_urls'

export default function Footer() {

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [text, setText] = useState('')

    const clickHandler = () => {
        countCommet(ideaguests, {
            first_name,
            last_name,
            text
        },(response) => {
            alert("Fikringiz uchun rahmat!!!")
        }, (error) => {
            console.log(error)
        })
    }

  return (
    <FooterWrapper>
        <MainWrapper>
            <FooterContainer>
                <FooterLeft>
                    <h5>Fikr va mulohazalar</h5>
                    <FooterCommentForm>
                        <input type="text" placeholder='Ismingiz' onChange={(event)=> {setFirst_name(event.target.value)}}/>
                        <input type="text" placeholder='Emailingiz' onChange={(event)=> {setLast_name(event.target.value)}}/>
                        <textarea onChange={(event)=> {setText(event.target.value)}}></textarea>
                    </FooterCommentForm>
                    <Button
                        sx={{
                            color: "#fff",
                            borderColor: "#fff",
                            textTransform: "capitalize",
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: 'normal',
                            padding: '15px 60px',
                            borderRadius: '12px',
                            '&:hover': {
                                borderColor: "#fff",
                            }
                        }}
                        onClick={clickHandler}
                        variant="outlined"
                    >
                        Jo’natish
                    </Button>
                </FooterLeft>
                <FooterReight>
                    <FooterReightNav>
                        <FooterReightLink>Asosiy</FooterReightLink>
                        <FooterReightLink>Yangiliklar</FooterReightLink>
                        <FooterReightLink>Tadbirlar</FooterReightLink>
                        <FooterReightLink>Tashkilotchilar</FooterReightLink>
                    </FooterReightNav>
                    <FooterImageWrapper>
                        <img src={require('../../imgs/map.png')} alt="footer image" />
                    </FooterImageWrapper>
                </FooterReight>
            </FooterContainer>
            <FooterBottom>
                <p>O’zbekiston Republikasi Yoshlar siyosati va sport vazirligi 2023</p>
            </FooterBottom>
        </MainWrapper>
    </FooterWrapper>
  )
}
