import React from "react";
import "./stock-item.css";

const StockItem = () => {
  return (
    <div className="cart-item-wrapper">
      <div>
        <img className="cart-product-img" src="" alt="item-pic" />
      </div>
      <div className="cart-item-description">
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium tempora molestiae est aliquam deserunt ducimus doloribus ipsum neque quibusdam dolores.</span>
        </div>
        <div>
          <p>999 сом</p>
        </div>
      </div>
    </div>
  );
};
export default StockItem;
