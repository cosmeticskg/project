import React, { Fragment, useEffect } from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { connect, useDispatch } from "react-redux";
import "./stocks-page.css";
import { getStocksThunk } from "./actions";
import Spinner from "../../components/spinner/spinner";
import ErrorIndicator from "../../components/error-indicator";
import StockList from "./stock-list";
import ModalOrder from "../cart-page/modal-order";
import ModalThanks from "../cart-page/modal-thanks/";
import {
  showModalOrder,
  showModalThanks,
  hideModalOrder,
  registrOrder
} from "../cart-page/actions";

const StocksPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocksThunk());
  }, []);

  const { error, loading } = props;

  const handleShow = () => {
    props.showModalOrder();
  };
  const showThanks = () => {
    props.showModalThanks();
  };
  const handleHide = () => {
    props.hideModalOrder();
  };
  const submit = values => {
    let allProducts = props.stocks.find(
      item => item.id === props.currentSaleBundle.id
    );
    console.log("allProducts", allProducts);
    let pushProducts = allProducts.products.map(item => {
    console.log("item", item)
      return (item = {
        product: item.product,
        count: 1
      });
    });
    let pushData = {
      contacts: [values],
      products: pushProducts
    };
    props.registrOrder(pushData);
  };

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
      <StockList {...props} handleShow={handleShow} />
      <Footer />
      <ModalOrder
        show={props.showModalOrderValue}
        handleClose={handleHide}
        onSubmit={submit}
        handleThanks={showThanks}
      />
      <ModalThanks show={props.showModalThanksValue} handleClose={handleHide} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stocks: state.stocks.stocksData,
    loading: state.stocks.loading,
    error: state.stocks.error,
    currentSaleBundle: state.stocks.currentSaleBundle,
    showModalOrderValue: state.cart.showModalOrderValue,
    showModalThanksValue: state.cart.showModalThanksValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(StocksPage);
