import React from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./index.css";

function Cart() {
  return (
    <div>
      <HeaderMain />
      <Navbar />
      <div className="cart">
        <div className="cart-body-wrapper">
          <div className="cart-name">
            <p>Корзина (2)</p>
          </div>
          <div className="cart-total">
            <h2>Сумма заказа</h2>
            <div>
              <p>К оплате</p>
              <p>7000сом</p>
            </div>
            <button>Купить</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
