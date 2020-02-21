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
  clearTotalValue,
  showModalOrder,
  showModalThanks,
  hideModalOrder,
  registrOrder
} from "./actions";
import ModalOrder from "./modal-order";
import ModalThanks from "./modal-thanks";
import {addProductToFavoritesThunk} from '../home-page/actions';

class Cart extends Component {
  componentWillMount() {
    const products = JSON.parse(localStorage.getItem("products"));
    if(products && products.length){
    products.map(product => (product.is_purchased = false));
    localStorage.setItem("products", JSON.stringify(products));
    this.props.clearTotal();
    }
  }

  render() {
    
    const handleShow = () => {
      if (this.props.total > 0) {
        this.props.showModalOrder();
      } else {
        alert("Пожалуйста, выберите товар для покупки!");
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
          product: item.get_id,
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
                  {JSON.parse(localStorage.getItem("products")).length || 0} 
                  )
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
    showModalThanksValue: state.cart.showModalThanksValue
  };
};

const mapDispatchToProps = dispatch => ({
  addProductToFavorites: product => dispatch(addProductToFavoritesThunk(product)),
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
  showModalThanks: () => {
    dispatch(showModalThanks());
  },
  hideModalOrder: () => {
    dispatch(hideModalOrder());
  },
  registrOrder: data => {
    dispatch(registrOrder(data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
