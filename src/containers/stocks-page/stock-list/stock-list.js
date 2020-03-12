import React from "react";
import "./stock-list.css";
import StockItem from "../stock-item";
import StockImage from "../../../img/main-slider/big_shoes_verh_1402.jpg";

const StockList = props => {
  const { stocks } = props;
  console.log("props", props)
  
  return (
    <div className="cart">
      <div className="cart-body-wrapper">
        <div>
          <img className="stock_image" src={StockImage} alt="stock-content" />
        </div>
        <div className="cart-item-list">
          {stocks && stocks.length ? (
            stocks.map(item => {
            console.log("item", item)
              
              return <StockItem  />;
            })
          ) : (
            <p>Empty</p>
          )}
        </div>
      </div>

      <div className="cart-total">
        <h2>Сумма заказа</h2>
        <div>
          <p>Старая цена</p>
          <p>800</p>
        </div>
        <button>Купить</button>
      </div>
    </div>
  );
};

export default StockList;
