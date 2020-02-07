import React, { Component } from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./index.css";
import CartList from "./cart-list";
import API from "../../API";
import Spinner from "../../components/spinner/spinner";
import ErrorIndicator from "../../components/error-indicator";
import { connect } from "react-redux";
import {
  allProductsRemovedFromCart,
  productRemovedFromCart,
  productAddedToCart
} from "./actions";

const Cart = (props) =>  {
  const {cartItems, onIncrease, onDecrease, onDelete,loading,error} = props;
  console.log(props);
  

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <HeaderMain />
        <Navbar />
        <div className="cart">
          <div className="cart-body-wrapper">
            <div className="cart-name">
              <p>Корзина: (this.props.count)</p>
            </div>
            <CartList
              cartItems={cartItems}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              onDelete={onDelete}
              // purchasedProducts={allProducts}
              //  onAddedToCart={onAddedToCart}
            />
          </div>

          <div className="cart-total">
            <h2>Сумма заказа</h2>
            <div>
              <p>К оплате</p>
              <p>{cartItems.total}</p>
            </div>
            <button>Купить</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
