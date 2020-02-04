import React from "react";
import "./cart-item.css";
import itemPic from "../../../img/items/pomada.jpg";
import trash from "../../../img/trash.svg";
import heartInactive from "../../../img/heart-inactive.svg";

const CartItem = product => {
  // console.log(product);

  return (
    <div className="cart-item-wrapper">
      <input type="checkbox" className="cart-checkbox" />
      <div>
        <img className="cart-product-img" src={product.image} alt="item-pic" />
      </div>
      <div className="cart-item-description">
        <div>
          <span>{product.description}</span>
        </div>
        <div>
          <p>{product.price} сом</p>
        </div>
      </div>
      <div className="cart-item-buttons">
        <div>
          <button className="cart-like-trash-btn">
            <img src={heartInactive} alt="heart" />
          </button>
          <button className="cart-like-trash-btn">
            <img src={trash} alt="trash" />
          </button>
        </div>
        <div className="cart-inc-dec">
          <button>-</button>
          <span>{product.count}</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
