import React, { Component } from "react";
import "./item-slider.css";
import Item from "../item";
import Slider from "react-slick";

const items = [
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  },
  {
    item: <Item />
  }
];

export default class ItemSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
      // rows: 1,
      // autoplay: true,
      // autoplaySpeed: 3000
    };
    return (
      <div>
        <h1>Рекомендуемые товары</h1>
        <div className="item__slider">
          <Slider  {...settings}>
            {items.map(items => {
              return <div className="item__slider__row">{items.item}</div>;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
