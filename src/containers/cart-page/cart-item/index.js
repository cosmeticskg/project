import React from "react";
import "./cart-item.css";
import itemPic from "../../../img/items/pomada.jpg";
import trash from "../../../img/trash.svg";
import heartInactive from "../../../img/heart-inactive.svg";

const CartItem = (product,{onDecrease,onDelete,onIncrease,cartItems}) => {
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
          <p>{product.current_price} сом</p>
        </div>
      </div>
      <div className="cart-item-buttons">
        <div>
          <button onClick={() => onDelete(product.get_id)} className="cart-like-trash-btn">
            <img src={heartInactive} alt="heart" />
          </button>
          <button className="cart-like-trash-btn">
            <img src={trash} alt="trash" />
          </button>
        </div>
        <div className="cart-inc-dec">
          <button onClick={() => onDecrease(product.get_id)}>-</button>
          <span>{product.count}</span>
          <button onClick={() => onIncrease(product.get_id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
