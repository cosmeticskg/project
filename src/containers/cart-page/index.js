import React, { Component } from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./index.css";
import CartList from "./cart-list";
// import Spinner from "../../components/spinner/spinner";
// import ErrorIndicator from "../../components/error-indicator";
import { connect } from "react-redux";
import {
  productFinallyRemovedFromCart,
  productCountToggle,
  selectProductToBuy,
  clearTotalValue
} from "./actions";

class Cart extends Component {
  componentWillMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    products.map(product => (product.is_purchased = false));
    localStorage.setItem("products", JSON.stringify(products));
    this.props.clearTotal();
  }

  render() {
    const { purchasedProducts } = this.props;
    console.log(this.props.total);
    return (
      <div>
        <HeaderMain />
        <Navbar />
        <div className="cart">
          <div className="cart-body-wrapper">
            <div className="cart-name">
              <p>
                Корзина: ({JSON.parse(localStorage.getItem("products")).length})
              </p>
            </div>
            <CartList {...this.props} />
          </div>

          <div className="cart-total">
            <h2>Сумма заказа</h2>
            <div>
              <p>К оплате</p>
              <p>{purchasedProducts.total}</p>
            </div>
            <button>Купить</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    purchasedProducts: state.cart,
    total: state.cart.total
  };
};

const mapDispatchToProps = dispatch => ({
  onToggle: (id, value) => {
    dispatch(productCountToggle(id, value));
  },
  onDelete: id => {
    dispatch(productFinallyRemovedFromCart(id));
  },
  selectProduct: id => {
    dispatch(selectProductToBuy(id));
  },
  clearTotal: () => {
    dispatch(clearTotalValue());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
