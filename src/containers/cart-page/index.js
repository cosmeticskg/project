import React, { Component, Fragment } from "react";
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
  clearTotalValue,
  showModalOrder,
  hideModalOrder
} from "./actions";
import ModalOrder from "./modal-order/modal-order";

class Cart extends Component {
  componentWillMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    products.map(product => (product.is_purchased = false));
    localStorage.setItem("products", JSON.stringify(products));
    this.props.clearTotal();
  }

  render() {
    const handleShow = () => {
      this.props.showModalOrder();
    };
    const handleHide = () => {
      this.props.hideModalOrder();
    };
    const { purchasedProducts } = this.props;
    return (
      <Fragment>
        <div>
          <HeaderMain />
          <Navbar />
          <div className="cart">
            <div className="cart-body-wrapper">
              <div className="cart-name">
                <p>
                  Корзина: (
                  {JSON.parse(localStorage.getItem("products")).length})
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
              <button onClick={handleShow}>Купить</button>
            </div>
          </div>
          <Footer />
        </div>
        <ModalOrder
          show={this.props.showModalOrderValue}
          handleClose={handleHide}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    purchasedProducts: state.cart,
    total: state.cart.total,
    showModalOrderValue: state.cart.showModalOrderValue
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
  },
  showModalOrder: () => {
    dispatch(showModalOrder());
  },
  hideModalOrder: () => {
    dispatch(hideModalOrder());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
