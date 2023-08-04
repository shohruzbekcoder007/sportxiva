import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WalksLink, WalksSlickImageWrapper, WalksSlickInfo, WalksSlickItem, WalksSlickTitle } from "./styles";
import { getSayil } from "./requests";
import { milliy } from "../../utils/API_urls";
import { useSelector } from "react-redux";
import language from '../../utils/language.json'

export default function FolkGamesSlick() {

  const lang = useSelector(state => state.language)

    const [sayils, setSayils] = useState([])

    useEffect(() => {
        getSayil(milliy, (response) => {
            setSayils(response.data)
        }, (error) => {
            console.log(error)
        })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="walks-slick">
        {sayils.length !== 0 ? <Slider {...settings}>
            {
                sayils.map((elem, index) => {
                    return (
                        <WalksSlickItem key={index}>
                            <WalksSlickImageWrapper>
                                <img src={elem.photo} alt="Uzbekistan_Airways" />
                            </WalksSlickImageWrapper>
                            <WalksSlickTitle>{elem[`name_${lang}`]}</WalksSlickTitle>
                            <WalksSlickInfo>
                                {elem[`description_${lang}`].slice(0,70)}...
                            </WalksSlickInfo>
                            <WalksLink to="/">{language.more[lang]}</WalksLink>
                        </WalksSlickItem>
                    )
                })
            }
        </Slider>:<></>
}
        </div>
    );
}