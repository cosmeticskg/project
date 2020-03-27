import React from "react";
import "./cart-item.css";
import trash from "../../../img/trash.svg";
import trashActive from "../../../img/trash-active.svg";
import heartInactive from "../../../img/heart-inactive.svg";
import heartActive from "../../../img/heart-active.svg";
import HoverImage from "react-hover-image";
import { Link } from "react-router-dom";

const CartItem = props => {
  const handleDelete = id => {
    onDelete(id);
  };

  const {
    onToggle,
    onDelete,
    image,
    description,
    price,
    id,
    quantity,
    selectProduct,
    is_purchased,
    isSaleProduct,
    old_price,
    isFavoriteItem,
    isCartItem
  } = props;
  return (
    <div className="cart-item-wrapper">
      <input
        onChange={() => selectProduct(id)}
        type="checkbox"
        checked={is_purchased}
        className="cart-checkbox"
      />
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <img className="cart-product-img" src={image} alt="item-pic" />
        </div>
      </Link>

      <div className="cart-item-description">
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>
          <span>{description}</span>
        </div>
        </Link>
      </div>
      <div className="cart-item-price">
        {isSaleProduct ? (
          <div>
            <span>{old_price} сом</span>
            <p>{price} сом</p>
          </div>
        ) : (
          <p>{price} сом</p>
        )}
      </div>
      <div className="cart-item-buttons">
        <div>
          <button
            onClick={() => props.addProductToFavorites(props.products)}
            className="cart-like-trash-btn"
          >
            {isFavoriteItem ? (
              <img src={heartActive} alt="favorites" />
            ) : (
              <img src={heartInactive} alt="favorites" />
            )}
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="cart-like-trash-btn"
          >
            <HoverImage src={trash} hoverSrc={trashActive} alt="trash" />
          </button>
        </div>
        <div className="cart-inc-dec">
          <button
            onClick={() => {
              quantity > 1 ? onToggle(id, -1) : console.log("");
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              onToggle(id, 1);
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
