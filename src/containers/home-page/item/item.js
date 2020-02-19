import React from "react";
import "./item.css";
import cart from "../../../img/cart-black.svg";
import favorites from "../../../img/heart-inactive.svg";

function Item(props) {
  const {description,current_price} = props.products;
  
  return (
    <div className="item__wrapper" >
      <div className="item__img">
        <img 
        src={props.products.image}
         alt="item" />
      </div>
      <div className="item__info">
        <p>{description}</p>
      </div>
      <div className="item__buttons">
        <div className="item__buttons__price">
          <p>{current_price} сом</p>
        </div>
        <div className="item__buttons__favorites">
          <button>
            <img src={favorites} alt="favorites" />
          </button>
        </div>
        <div className="item__buttons__cart">
          <button onClick={() => props.addProduct(props.products)}>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>
      <div className="item__buy">
        <button>Купить</button>
      </div>
    </div>
  );
}

export default Item;
