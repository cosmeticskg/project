import React from "react";
import "./cart-item.css";
import itemPic from "../../../img/items/pomada.jpg";
import trash from "../../../img/trash.svg";
import heartInactive from "../../../img/heart-inactive.svg";

const CartItem = ({
  onToggle,
  onDelete,
  image,
  description,
  current_price,
  get_id,
  quantity,
  index
}) => {
  // console.log(product);

  // const handleAddQuantity = id => {
  //   onToggle(id, 1);
  // };
  // const handleDecreaseQuantity = id => {
  //   onToggle(id, -1);
  // };

  return (
    <div className="cart-item-wrapper">
      <input type="checkbox" className="cart-checkbox" />
      <div>
        <img className="cart-product-img" src={image} alt="item-pic" />
      </div>
      <div className="cart-item-description">
        <div>
          <span>{description}</span>
        </div>
        <div>
          <p>{current_price} сом</p>
        </div>
      </div>
      <div className="cart-item-buttons">
        <div>
          <button className="cart-like-trash-btn">
            <img src={heartInactive} alt="heart" />
          </button>
          <button onClick={onDelete} className="cart-like-trash-btn">
            <img src={trash} alt="trash" />
          </button>
        </div>
        <div className="cart-inc-dec">
          <button
            onClick={() => {
              quantity > 1 ? onToggle(get_id, -1) : console.log("");
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              onToggle(get_id, 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
