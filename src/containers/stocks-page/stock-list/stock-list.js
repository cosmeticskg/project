import React, { Fragment } from "react";
import "./stock-list.css";
import StockItem from "../stock-item";
import StockImage from "../../../img/main-slider/big_shoes_verh_1402.jpg";

const StockList = props => {
  const { stocks, currentSaleBundle } = props;

  return (
    <div className="cart">
      <div className="cart-body-wrapper">
        <div>
          <img className="stock_image" src={currentSaleBundle.imageUrl} alt="stock-content" />
        </div>
        <div className="cart-item-list">
          {stocks && stocks.length && currentSaleBundle.id !== null ? (
            stocks.map(item => {
              if (item.id === currentSaleBundle.id) {
                return item.products.map(product => {
                  return <StockItem {...product} />;
                });
              }
            })
          ) : (
            <p>Empty</p>
          )}
        </div>
      </div>

      <div className="stock-total">
        {stocks && stocks.length && currentSaleBundle.id !== null ? (
          stocks.map(item => {
            if (item.id === currentSaleBundle.id) {
              return (
                <Fragment>
                  <h2>Сумма заказа</h2>
                  <div className="stock__old_price">
                    <p>Старая цена</p>
                    <p>{item.total_price}</p>
                  </div>
                  <div>
                    <p>Новая цена</p>
                    <p>{item.new_price}</p>
                  </div>
                  <button onClick={() => props.handleShow()}>Купить</button>
                </Fragment>
              );
            }
          })
        ) : (
          <Fragment>
            <h2>Сумма заказа</h2>
            <div className="stock__old_price">
              <p>Старая цена</p>
              <p>0</p>
            </div>
            <div>
              <p>Новая цена</p>
              <p>0</p>
            </div>
            <button disabled>Купить</button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default StockList;
