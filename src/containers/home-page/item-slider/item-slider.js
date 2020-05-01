import React from "react";
import "./item-slider.css";
import Item from "../item";
import Slider from "react-slick";

const ItemSlider = props => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          arrows: true,
          slidesToShow: 4 
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
    // autoplay: true,
    // autoplaySpeed: 3000
  };
  const { mapArray, handleShow } = props;
  return (
    <div>
      <div className="item__slider">
        <Slider {...settings}>
          {mapArray.map((item, i) => {
          
            return (
              <div key={i} className="item__slider__row">
                <Item key={i} products={item} {...props} handleShow={handleShow} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ItemSlider;
