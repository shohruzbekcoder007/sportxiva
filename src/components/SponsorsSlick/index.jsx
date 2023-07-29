import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SponsorsSlickItem } from "./styles";

export default function SponsorsSlick() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: null,
        prevArrow: null
    };


    return (
        <div className="sponsors-slick">
            <Slider {...settings}>
                <SponsorsSlickItem>
                    <img src={require("../../imgs/Uzbekistan_Airways.png")} alt="Uzbekistan_Airways" />
                </SponsorsSlickItem>
                <SponsorsSlickItem>
                    <img src={require("../../imgs/removebg-preview .png")} alt="Uzbekistan_Airways" />
                </SponsorsSlickItem>
                <SponsorsSlickItem>
                    <img src={require("../../imgs/removebg-preview2.png")} alt="Uzbekistan_Airways" />
                </SponsorsSlickItem>
                <SponsorsSlickItem>
                    <img src={require("../../imgs/Uzbekistan_Airways.png")} alt="Uzbekistan_Airways" />
                </SponsorsSlickItem>
                <SponsorsSlickItem>
                    <img src={require("../../imgs/Uzbekistan_Airways.png")} alt="Uzbekistan_Airways" />
                </SponsorsSlickItem>
                <SponsorsSlickItem>
                    <img src={require("../../imgs/Uzbekistan_Airways.png")} alt="Uzbekistan_Airways" />
                </SponsorsSlickItem>
            </Slider>
        </div>
    );
}