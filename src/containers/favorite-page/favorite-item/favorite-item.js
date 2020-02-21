import React from "react";
import "./favorite-item.css";
import trash from "../../../img/trash.svg";
import activeTrash from "../../../img/trash-active.svg";
import cartInactive from "../../../img/cart-black.svg";
import cartActive from "../../../img/shopping-cart.svg";
import HoverImage from "react-hover-image";

const FavoriteItem = props => {
  const { name, onDelete, image, description, current_price, get_id } = props;

  const handleDelete = id => {
    onDelete(id);
  };

  return (
    <div className="fav_item_wrapper">
      <div>
        <img className="fav-product-img" src={image} alt="item-pic" />
      </div>
      <div className="fav-item-description">
        <div>
          <h4>{name}</h4>
        </div>
        <div>
          <span>{description}</span>
        </div>
      </div>
      <div>
        <p>{current_price} сом</p>
      </div>
      <div className="cart-item-buttons">
        <div>
          <button
            onClick={() => props.addProduct(props.products)}
            className="cart-like-trash-btn"
          >
            <HoverImage src={cartInactive} hoverSrc={cartActive} alt="cart" />
          </button>
          <button
            onClick={() => handleDelete(get_id)}
            className="cart-like-trash-btn"
          >
            <HoverImage src={trash} hoverSrc={activeTrash} alt="trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
