import React, { Component } from "react";
import "./header-main.css";
import cart_inactive from "../../img/cart-black.svg";
import cart_active from "../../img/shopping-cart.svg";
import favorites_inactive from "../../img/heart-inactive.svg";
import favorites_active from "../../img/heart-active.svg";
import { Link } from "react-router-dom";

function HeaderMain(props) {
  return (
    <header>
      <div className="header_name">
        <Link to="/">
          <button>Cosmetica.kg</button>
        </Link>
      </div>
      <div className="header_buttons">
        <Link to="/favorite">
          <button>
            <img src={favorites_inactive} alt="favorites" />
            <span>Избранное</span>
          </button>
        </Link>
        <Link to="/cart">
          <button>
            <img src={cart_inactive} alt="cart" />
            <span>Корзина</span>
          </button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderMain;
