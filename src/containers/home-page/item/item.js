import React from "react";
import "./item.css";
import cart from "../../../img/cart-black.svg";
import activeCart from "../../../img/shopping-cart.svg";
import favorites from "../../../img/heart-inactive.svg";
import activeFavorites from "../../../img/heart-active.svg";
import HoverImage from "react-hover-image";

function Item(props) {
  const { description, price, image, id, isSaleProduct,old_price } = props.products;
  const { handleShow } = props;
  const handlePurchaseItem = id => {
    handleShow(id);
  };

  return (
    <div className="item__wrapper">
      <div className="item__img">
        <img src={image} alt="item" />
      </div>
      <div className="item__info">
        <p>{description}</p>
      </div>
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
            <HoverImage
              src={favorites}
              hoverSrc={activeFavorites}
              alt="favorites"
            />
          </button>
        </div>
        <div className="item__buttons__cart">
          <button onClick={() => props.addProduct(props.products)}>
            <HoverImage src={cart} hoverSrc={activeCart} alt="cart" />
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
