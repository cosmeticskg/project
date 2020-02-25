import React, { Component } from "react";
import "./photo-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Photo 1",
    url:
      "https://images.wbstatic.net/poster/ru/main/c1360x370/big_valentine_140222.jpg"
  },
  {
    name: "Photo 1",
    url:
      "https://images.wbstatic.net/poster/ru/main/c1360x370/big_sale_1402.jpg"
  },
  {
    name: "Photo 1",
    url:
      "https://images.wbstatic.net/poster/ru/main/c1360x370/big_electro_1402.jpg"
  },
  {
    name: "Photo 1",
    url:
      "https://images.wbstatic.net/poster/ru/main/c1360x370/big_shoes_verh_1402.jpg"
  }
];

export default class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      // className: "",
      autoplay: true,
      autoplaySpeed: 3000
      // cssEase: "linear"
    };
    return (
      <div className="App">
        <Slider {...settings}>
          {photos.map((photo,i) => {
            return (
              <div key={i}>
                <img width="100%" height="350px" src={photo.url} alt="slider" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
