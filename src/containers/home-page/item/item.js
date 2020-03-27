import React from "react";
import "./item.css";
import cart from "../../../img/cart-black.svg";
import activeCart from "../../../img/shopping-cart.svg";
import favorites from "../../../img/heart-inactive.svg";
import activeFavorites from "../../../img/heart-active.svg";
import { Link } from "react-router-dom";

function Item(props) {
  const {
    handleShow,
    products: {
      name,
      price,
      image,
      id,
      isSaleProduct,
      old_price,
      isFavoriteItem,
      isCartItem
    }
  } = props;
  const handlePurchaseItem = id => {
    handleShow(id);
  };

  return (
    <div className="item__wrapper">
      <Link to={`/product/${id}`} style={{textDecoration: 'none', color: 'black'}}>
        <div className="item__img">
          <img src={image} alt="item" />
        </div>
      </Link>
      <Link to={`/product/${id}`} style={{textDecoration: 'none', color: 'black'}}>
        <div className="item__info">
          <p>{name}</p>
        </div>
        </Link>
        <div className="item__buttons">
          <div className="item__buttons__price">
            {isSaleProduct ? (
              <div>
                <span>{old_price} сом</span>
                <p>{price} сом</p>
              </div>
            ) : (
              <p>{price} сом</p>
            )}
          </div>
          <div className="item__buttons__favorites">
            <button onClick={() => props.addProductToFavorites(props.products)}>
              {isFavoriteItem ? (
                <img src={activeFavorites} alt="favorites" />
              ) : (
                <img src={favorites} alt="favorites" />
              )}
            </button>
          </div>
          <div className="item__buttons__cart">
            <button onClick={() => props.addProductToCart(props.products)}>
              {isCartItem ? (
                <img src={activeCart} alt="cart-active" />
              ) : (
                <img src={cart} alt="cart" />
              )}
            </button>
          </div>
        </div>
        <div className="item__buy">
          <button onClick={() => handlePurchaseItem(id)}>Купить</button>
        </div>
    </div>
  );
}

export default Item;
