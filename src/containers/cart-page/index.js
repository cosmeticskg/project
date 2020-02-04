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
import { getProductsRequestThunk } from "./actions";

class Cart extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    console.log(this.props);
  }

  render() {
    const { allProducts, loading, error } = this.props;

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
              products={allProducts}
              //  onAddedToCart={onAddedToCart}
            />
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  allProducts: store.cart
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(getProductsRequestThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
