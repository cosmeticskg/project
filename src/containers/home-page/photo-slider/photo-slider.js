import React, { Component } from "react";
import "./photo-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
      autoplay: true,
      autoplaySpeed: 3000
      // cssEase: "linear"
    };
    const { sliderImages } = this.props.allProducts;
    return (
      <div className="App">
        <Slider {...settings}>
          {sliderImages.map((photo,i) => {
            return (
              <Link key={i} to={`/stocks/${photo.id}`}>
              <div className="photo_slider_image_container" key={i}>
                <img width="100%" height="100%" src={photo.image} alt="slider" />
              </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}
