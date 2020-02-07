import React, { Component } from "react";
import "./item-slider.css";
import Item from "../item";
import Slider from "react-slick";
import { addProduct } from "../actions";

// const items = [
//   {
//     item: <Item />
//   }
// ];

const ItemSlider = (props) => {
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

  const {allProducts,onAddedToCart,addProduct} = props;

  // console.log(props);
  
  return (
    <div>
      <div className="item__slider">
        <Slider {...settings}>
          {allProducts.products.map((items,i) => {
            return (
              <div className="item__slider__row">
                <Item
                  key={i}
                  products={items}
                  {...props}
                  // onAddedToCart={() => onAddedToCart(items.get_id)}
                  // onAddedToCart={addProduct}
                />
              </div>
            );
          })}
          {/* {items.map(items => {
              return <div className="item__slider__row">{items.item}</div>;
            })} */}
        </Slider>
      </div>
    </div>
  );
};

export default ItemSlider;
