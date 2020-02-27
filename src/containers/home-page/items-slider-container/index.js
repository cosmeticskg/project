import React, { Component } from "react";
import Spinner from "../../../components/spinner/spinner";
import ErrorIndicator from "../../../components/error-indicator";
import { connect } from "react-redux";
import {
  getProductsRequestThunk,
  addProductThunk,
  addProductToFavoritesThunk
} from "../actions";
import {
  showModalOrder,
  showModalThanks,
  hideModalOrder,
  registrOrder
} from "../../cart-page/actions";
import ModalOrder from "../../cart-page/modal-order";
import ModalThanks from "../../cart-page/modal-thanks";
import ItemSlider from "../item-slider";
import "./home-container.css";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const handleShow = id => {
      let productToBuy = this.props.allProducts.products.find(
        item => item.id === id
      );
      localStorage.setItem("productToBuy", JSON.stringify(productToBuy));
      this.props.showModalOrder();
    };
    const showThanks = () => {
      this.props.showModalThanks();
    };
    const handleHide = () => {
      this.props.hideModalOrder();
    };

    const submit = values => {
      let products = [JSON.parse(localStorage.getItem("productToBuy"))];
      let pushProducts = products.map(item => {
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
    };

    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <ErrorIndicator />;
    }

    return (
      <div className="main__wrapper">
        <div className="home_container__wrapper">
          
          <h3>Рекомендуемые товары :</h3>
          <ItemSlider {...this.props} handleShow={handleShow} />
          <h3>Хиты :</h3>
          <ItemSlider {...this.props} handleShow={handleShow} />
          <h3>Скидки:</h3>
          <ItemSlider {...this.props} handleShow={handleShow} />
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allProducts: state.home,
  loading: state.home.loading,
  error: state.home.error,
  showModalOrderValue: state.cart.showModalOrderValue,
  showModalThanksValue: state.cart.showModalThanksValue
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(getProductsRequestThunk()),
    addProductToFavorites: product =>
      dispatch(addProductToFavoritesThunk(product)),
    addProduct: product => dispatch(addProductThunk(product)),
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
