"use client";
import React from "react";
import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Believe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  const slideData = [
    {
      id: 0,
      img: "/imgs/harold_icon_1.png",
      description: "AT HAROLD CAPITAL, We believe in more than just numbers.",
    },
    {
      id: 1,
      img: "/imgs/harold_icon_2.png",
      description:
        "We also believe in creating a brighter, more secure future for every individual and business we work with.",
    },
    {
      id: 2,
      img: "/imgs/harold_icon_3.png",
      description:
        "We believe in the power of partnerships and long-term vision.",
    },
  ];

  return (
    <div className="px-4 py-8 md:px-8">
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default Believe;
