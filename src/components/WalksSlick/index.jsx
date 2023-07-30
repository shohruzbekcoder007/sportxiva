import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WalksLink, WalksSlickImageWrapper, WalksSlickInfo, WalksSlickItem, WalksSlickTitle } from "./styles";
import { getSayil } from "./requests";
import { sayil } from "../../utils/API_urls";

export default function FolkGamesSlick() {

    const [sayils, setSayils] = useState([])

    useEffect(() => {
        getSayil(sayil, (response) => {
            setSayils(response.data)
        }, (error) => {
            console.log(error)
        })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    };

    return (
        <div className="walks-slick">
        <Slider {...settings}>
            {
                sayils.map((elem, index) => {
                    return (
                        <WalksSlickItem key={index}>
                            <WalksSlickImageWrapper>
                                <img src={elem.photo} alt="Uzbekistan_Airways" />
                            </WalksSlickImageWrapper>
                            <WalksSlickTitle>{elem.name}</WalksSlickTitle>
                            <WalksSlickInfo>
                                {elem.discription}
                            </WalksSlickInfo>
                            <WalksLink to="/">Batafsil</WalksLink>
                        </WalksSlickItem>
                    )
                })
            }
        </Slider>
        </div>
    );
}