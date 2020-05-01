import React from "react";
import "./header-main.css";
import cart_inactive from "../../img/cart-full-black.svg";
import home from "../../img/home-full-black.svg";
import favorites_inactive from "../../img/heart-full-black.svg";
import stocks from "../../img/stocks-full-black.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function HeaderMain(props) {
  let favoriteCount = props.favCount || 0;
  let cartCount = props.cartCount;

  return (
    <header>
      <div className="header_description">
        <p>(702) 01 01 01 , (555) 22 33 44</p>
        <p>Ежедневно с 7:30 до 18:00</p>
        <p>Байтик-Баатыра 70а</p>
      </div>

      <div className="header_name">
        <div>
          <Link to="/">
            <button className="header_logo">COSMETICA.KG</button>
          </Link>
          <div className="header_logo_desc">be brandy. be trandy.</div>
        </div>
      </div>

      <div className="header_button_wrapper">
        <div className="header_buttons">
          <Link to="/favorite">
            <button>
              <img src={favorites_inactive} alt="favorites" />
              <span>Избранное</span>
              <span className="header_value ">{favoriteCount}</span>
            </button>
          </Link>
          <Link to="/cart">
            <button>
              <img src={cart_inactive} alt="cart" />
              <span>Корзина</span>
              <span className="header_value header_cart">{cartCount}</span>
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
const mapStateToProps = (state) => {
  return {
    favCount: state.favorite.favoritesCount,
    cartCount: state.cart.cartCount,
  };
};

export default connect(mapStateToProps)(HeaderMain);
