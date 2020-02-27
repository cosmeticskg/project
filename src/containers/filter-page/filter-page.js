import React, { useEffect } from "react";
import "./filter-page.css";
import HeaderMain from "../../components/header-main";
import Footer from "../../components/footer";
import FilterList from "./filter-list/filter-list";
import { connect, useDispatch } from "react-redux";
import { getProductsRequestThunk } from "../home-page/actions";
import ModalOrder from "../cart-page/modal-order";
import ModalThanks from "../cart-page/modal-thanks/";
import {
  showModalOrder,
  showModalThanks,
  hideModalOrder,
  registrOrder
} from "../cart-page/actions";
import {
  addProductThunk,
  addProductToFavoritesThunk
} from "../home-page/actions";

const FilterPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsRequestThunk());
  }, []);

  const handleShow = id => {
    let productToBuy = props.allProducts.find(item => item.id === id);
    localStorage.setItem("productToBuy", JSON.stringify(productToBuy));
    props.showModalOrder();
  };
  const showThanks = () => {
    props.showModalThanks();
  };
  const handleHide = () => {
    props.hideModalOrder();
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
    props.registrOrder(pushData);
  };

  return (
    <div>
      <HeaderMain />
      <div className="filter_wrapper">
        <div className="filter__buttons__wrapper">
          <div className="filter_buttons">
            <select>
              <option>Тело</option>
              <option>Лицо</option>
            </select>
            <select>
              <option>Крема</option>
              <option>Бальзамы</option>
            </select>
            <select>
              <option>Tony Moly</option>
              <option>Kylie</option>
            </select>
          </div>
        </div>
        <FilterList handleShow={handleShow} {...props} />
      </div>
      <ModalOrder
        show={props.showModalOrderValue}
        handleClose={handleHide}
        onSubmit={submit}
        handleThanks={showThanks}
      />
      <ModalThanks
        show={props.showModalThanksValue}
        handleClose={handleHide}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  allProducts: state.home.products,
  showModalOrderValue: state.cart.showModalOrderValue,
  showModalThanksValue: state.cart.showModalThanksValue
});

const mapDispatchToProps = dispatch => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);
