import React, { Component } from "react";
import Spinner from "../../../components/spinner/spinner";
import ErrorIndicator from "../../../components/error-indicator";
import { connect } from "react-redux";
import { getProductsRequestThunk, addProductThunk } from "../actions";
import ItemSlider from '../item-slider';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    // console.log(this.props);
  }

  render() {
    const { allProducts, loading, error,addProduct } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <div>
        <h3>Рекомендуемые товары :</h3>
        <ItemSlider {...this.props} />
        <h3>Хиты :</h3>
        <ItemSlider {...this.props} />
        <h3>Скидки:</h3>
        <ItemSlider {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allProducts: state.home,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(getProductsRequestThunk()),
    addProduct: product => dispatch(addProductThunk(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
