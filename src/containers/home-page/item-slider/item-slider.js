import React, { Component } from "react";
import "./item-slider.css";
import Item from "../item";
import Slider from "react-slick";

const items = [
  {
    item: <Item />
  }
];


export default class ItemSlider extends Component {

  componentDidMount(){
    // console.log(this.props);
    
  }
  
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
    const {products} = this.props;
    return (
      <div>
        <div className="item__slider">
          <Slider  {...settings}>
              {
                products.products.map(items => {
                  return <div className="item__slider__row"><Item products={items} /></div>; 
                })
              }
            {/* {items.map(items => {
              return <div className="item__slider__row">{items.item}</div>;
            })} */}
          </Slider>
        </div>
      </div>
    );
  }
}
