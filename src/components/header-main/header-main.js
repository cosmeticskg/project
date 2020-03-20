import React from "react";
import "./header-main.css";
import cart_inactive from "../../img/cart-full-black.svg";
import home from "../../img/home-full-black.svg";
import favorites_inactive from "../../img/heart-full-black.svg";
import stocks from "../../img/stocks-full-black.svg";
import { Link } from "react-router-dom";

function HeaderMain(props) {
  return (
    <header>
      <div className="header_name">
        <Link to="/">
          <button>Cosmetica.kg</button>
        </Link>
        <div>be brandy. be trandy.</div>

        <div className="header_description">
          <p>(702) 01 01 01 , (555) 22 33 44</p>
          <p>Ежедневно с 7:30 до 18:00</p>
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
          <Link to="/stocks">
            <button>
              <img src={stocks} alt="cart" />
              <span>Акции</span>
            </button>
          </Link>
          <Link to="/">
            <button>
              <img src={home} alt="cart" />
              <span>Главная</span>
            </button>
          </Link>
        </div>
        
      </div>
    </header>
  );
}

export default HeaderMain;
