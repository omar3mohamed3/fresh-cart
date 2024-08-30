import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
  
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img
            loading="lazy"
              style={{ width: "100%", height: "400px" }}
              src={require("../../assets/imgs/slider-image-1.jpeg")}
              alt="slider 1"
            />
          </div>
          <div>
            <img
            loading="lazy"
              style={{ width: "100%", height: "400px" }}
              src={require("../../assets/imgs/slider-image-2.jpeg")}
              alt="slider 2"
            />
          </div>
          <div>
            <img
            loading="lazy"
              style={{ width: "100%", height: "400px" }}
              src={require("../../assets/imgs/slider-image-3.jpeg")}
              alt="slider 3"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
