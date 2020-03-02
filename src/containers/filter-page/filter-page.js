import React, { useEffect } from "react";
import "./filter-page.css";
import HeaderMain from "../../components/header-main";
import Footer from "../../components/footer";
import FilterList from "./filter-list/filter-list";
import { connect, useDispatch } from "react-redux";
import {
  getProductsRequestThunk,
  getBrandsRequestThunk,
  getCategoriesRequestThunk
} from "./actions";
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
import { filterProductsByBrandThunk } from "./actions";

const FilterPage = props => {
  console.log(props);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsRequestThunk());
    dispatch(getBrandsRequestThunk());
    dispatch(getCategoriesRequestThunk());
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

  const handleChangeCategories = e => {
    console.log(e.target.value);
    console.log(props.allProducts);

    dispatch(filterProductsByBrandThunk(props.allProducts, e.target.value));
  };

  const { categories, brands } = props;

  return (
    <div>
      <HeaderMain />
      <div className="filter_wrapper">
        <div className="filter__buttons__wrapper">
          <div className="filter_buttons">
            <select
              value={props.categories}
              onChange={handleChangeCategories}
              name="category"
            >
              <option>Все категории</option>
              {categories && categories.length ? (
                props.categories.map(item => {
                  if (item.parent === null) {
                    return <option key={item.id} value={item.id}> {item.name} </option>;
                  }
                })
              ) : (
                <option>loading...</option>
              )}
            </select>
            <select name="subCategory">
              <option>Все подкатегории</option>
              <option>Крема</option>
              <option>Бальзамы</option>
            </select>
            <select name="brand">
              <option
              //  defaultValue={props.brandId}
              >
                Все Бренды
              </option>
              {brands && brands.length ? (
                brands.map(item => {
                  return <option key={item.id} value={item.name}> {item.name} </option>;
                })
              ) : (
                <option>loading...</option>
              )}
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
      <ModalThanks show={props.showModalThanksValue} handleClose={handleHide} />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  allProducts: state.filter.products,
  filteredProducts: state.filter.filterProducts,
  brands: state.filter.brands,
  categories: state.filter.categories,
  showModalOrderValue: state.cart.showModalOrderValue,
  showModalThanksValue: state.cart.showModalThanksValue,
  pageLimit: state.filter.pageLimit,
  currentPage: state.filter.currentPage
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
    },
    filterProductsByBrand: () => {
      dispatch(filterProductsByBrandThunk());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);
