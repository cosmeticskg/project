import React, { Component } from "react";
import "./header-main.css";
import cart from "../../img/shopping-cart.png";
import favorites from "../../img/folder.png";
import { Link } from "react-router-dom";

function HeaderMain(props) {
  return (
    <header>
      <div className="header_name">
        <button>Cosmetica.kg</button>
      </div>
      <div className="header_buttons">
        <button>
          <img src={favorites} alt="favorites" />
        </button>
        <Link to="/cart">
          <button>
            <img src={cart} alt="cart" />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderMain;
