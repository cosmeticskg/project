import React, { Component, Fragment } from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./index.css";
import CartList from "./cart-list";
import { connect } from "react-redux";
import {
  productFinallyRemovedFromCart,
  productCountToggle,
  selectProductToBuy,
  countTotalValue,
  showModalOrder,
  showAlertOnEmptyCart,
  showModalThanks,
  hideModalOrder,
  registrOrder
} from "./actions";
import ModalOrder from "./modal-order";
import ModalThanks from "./modal-thanks";
import ModalAlert from "./modal-thanks/modal-alert";

import { addProductToFavoritesThunk } from "../home-page/actions";

class Cart extends Component {
  componentWillMount() {
    console.log(this.props);
    
    const products = JSON.parse(localStorage.getItem("products"));
    if (products && products.length) {
      products.map(product => (product.is_purchased = true));
      localStorage.setItem("products", JSON.stringify(products));
      this.props.countTotal();
    }
  }

  render() {
    const handleShow = () => {
      if (this.props.total > 0) {
        this.props.showModalOrder();
      } else {
        this.props.showAlertOnEmptyCart();
      }
    };
    const showThanks = () => {
      this.props.showModalThanks();
    };
    const handleHide = () => {
      this.props.hideModalOrder();
    };

    const submit = values => {
      let products = JSON.parse(localStorage.getItem("products"));
      let selectedProducts = products.filter(item => item.is_purchased);
      let pushProducts = selectedProducts.map(item => {
        return (item = {
          product: item.id,
          count: item.quantity
        });
      });
      let pushData = {
        contacts: [values],
        products: pushProducts
      };
      this.props.registrOrder(pushData);
      this.props.showModalThanks();
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
                  {JSON.parse(localStorage.getItem("products")).length || 0})
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
        <ModalAlert
           show={this.props.showAlertOnEmptyCartValue}
           handleClose={handleHide}
        />
        <ModalOrder
          show={this.props.showModalOrderValue}
          handleClose={handleHide}
          onSubmit={submit}
          handleThanks={showThanks}
        />
        <ModalThanks
          show={this.props.showModalThanksValue}
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
    showModalOrderValue: state.cart.showModalOrderValue,
    showModalThanksValue: state.cart.showModalThanksValue,
    showAlertOnEmptyCartValue: state.cart.showAlertOnEmptyCartValue
  };
};

const mapDispatchToProps = dispatch => ({
  addProductToFavorites: product =>
    dispatch(addProductToFavoritesThunk(product)),
  onToggle: (id, value) => {
    dispatch(productCountToggle(id, value));
  },
  onDelete: id => {
    dispatch(productFinallyRemovedFromCart(id));
  },
  selectProduct: id => {
    dispatch(selectProductToBuy(id));
  },
  countTotal: () => {
    dispatch(countTotalValue());
  },
  showModalOrder: () => {
    dispatch(showModalOrder());
  },
  showModalThanks: () => {
    dispatch(showModalThanks());
  },
  hideModalOrder: () => {
    dispatch(hideModalOrder());
  },
  registrOrder: data => {
    dispatch(registrOrder(data));
  },
  showAlertOnEmptyCart: () => {
    dispatch(showAlertOnEmptyCart());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
