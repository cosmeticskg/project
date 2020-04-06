import React, { Fragment } from "react";
import "./stock-list.css";
import StockItem from "../stock-item";
import StockImage from "../../../img/main-slider/big_shoes_verh_1402.jpg";
import Empty from "../../../components/empty";

const StockList = props => {
  const { stocks, currentSaleBundle } = props;

  return (
    <div className="stock_wrapper">
      <div className="stock-list">
        <div className="stock-item-list">
          {stocks && stocks.length && currentSaleBundle.id !== null ? (
            stocks.map(item => {
              if (item.id === currentSaleBundle.id) {
                return item.products.map(product => {
                  return <StockItem {...product} />;
                });
              }
            })
          ) : (
            <Empty />
          )}
        </div>
      </div>
      <p className="stock_plus">+</p>
      <p className="stock_res">=</p>
      <div className="stock-total">
        {stocks && stocks.length && currentSaleBundle.id !== null ? (
          stocks.map(item => {
            if (item.id === currentSaleBundle.id) {
              return (
                <Fragment>
                  <h2>Сумма по акции</h2>
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
