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
        {
          sayils.length !== 0?<Slider {...settings}>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempore. Odit voluptate corporis cum, aliquid tempore consequatur explicabo ipsam recusandae laboriosam assumenda facere accusamus nisi perferendis laborum expedita officia quisquam?
                            </WalksSlickInfo>
                            <WalksLink to="/">Batafsil</WalksLink>
                        </WalksSlickItem>
                    )
                })
            }
        </Slider>:<></>
        }
        </div>
    );
}