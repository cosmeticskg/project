import React, { Component } from "react";
import "./photo-slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Photo 1",
    url:
      "https://www.itl.cat/pngfile/big/34-349499_kylie-jenner-hd-wallpapers-4k-8k-kylie-jenner.jpg"
  },
  {
    name: "Photo 1",
    url:
      "https://images.wallpaperscraft.com/image/lips_lipstick_creative_black_4341_1366x768.jpg"
  },
  {
    name: "Photo 1",
    url:
      "https://images.wallpaperscraft.com/image/brushes_cosmetics_set_114242_1366x768.jpg"
  },
  {
    name: "Photo 1",
    url:
      "http://www.v3wall.com/wallpaper/1366_768/1001/1366_768_20100117013002386531.jpg"
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
          {photos.map(photo => {
            return (
              <div>
                <img width="100%" height="768px" src={photo.url} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
