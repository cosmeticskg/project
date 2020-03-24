import React from "react";
import "./favorite-page.css";
import HeaderMain from "../../components/header-main";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { connect } from "react-redux";
import FavoriteList from "./favorite-list/";
import { productFinallyRemovedFromFavorites } from "./actions";
import { addProductToCartThunk } from "../cart-page/actions";

const FavoritePage = props => {
  return (
    <div className="favorite">
      <HeaderMain />
      <Navbar />
      <div className="favorite__wrapper">
        <p className="favorite__title">Избранное </p>
        <FavoriteList {...props} />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favoriteProducts: state.favorite
  };
};
const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(productFinallyRemovedFromFavorites(id));
  },
  addProductToCart: product => dispatch(addProductToCartThunk(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
