import React from "react";
import "./favorite-item.css";
import trash from "../../../img/trash.svg";
import activeTrash from "../../../img/trash-active.svg";
import cartInactive from "../../../img/cart-black.svg";
import cartActive from "../../../img/shopping-cart.svg";
import HoverImage from "react-hover-image";
import {Link} from 'react-router-dom';

const FavoriteItem = props => {
  const { name, onDelete, image, description, price, id, isCartItem } = props;

  const handleDelete = id => {
    onDelete(id);
  };

  return (
    <div className="fav_item_wrapper">
      <Link
        to={`/product/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
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
          <p>{price} сом</p>
        </div>
      </Link>

      <div className="cart-item-buttons">
        <div>
          <button
            onClick={() => props.addProductToCart(props.products)}
            className="cart-like-trash-btn"
          >
            {isCartItem ? (
              <img src={cartActive} alt="active cart" />
            ) : (
              <img src={cartInactive} alt="cart inactive" />
            )}
          </button>
          <button
            onClick={() => handleDelete(id)}
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
