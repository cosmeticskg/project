import React from "react";
import "./item.css";
import itemPic from "../../../img/items/pomada.jpg";
import cart from "../../../img/shopping-cart.png";
import favorites from "../../../img/folder.png";

function Item(props) {
  return (
    <div className="item__wrapper">
      <div className="item__img">
        <img src={itemPic} alt="item" />
      </div>
      <div className="item__info">
        <h2>Lebel</h2>
        <p>Soft Ht / 700 мл.</p>
        <p>Шампунь для волос/Proedit</p>
      </div>
      <div className="item__buttons">
        <div className="item__buttons__price">
          <p>7000 сом</p>
        </div>
        <div className="item__buttons__favorites">
          <button>
            <img src={favorites} alt="favorites" />
          </button>
        </div>
        <div className="item__buttons__cart">
          <button>
            <img src={cart} alt="cart" />
          </button>
        </div>
      </div>
      <div className="item__buy">
        <button>Купить</button>
      </div>
    </div>
  );
}

export default Item;
