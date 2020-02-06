import React, { Component } from "react";
import Spinner from "../../../components/spinner/spinner";
import ErrorIndicator from "../../../components/error-indicator";
import { connect } from "react-redux";
import { getProductsRequestThunk } from "../actions";
import ItemSlider from '../item-slider';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    // console.log(this.props);
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
        <h3>Рекомендуемые товары :</h3>
        <ItemSlider products={allProducts} />
        <h3>Хиты :</h3>
        <ItemSlider products={allProducts} />
        <h3>Скидки:</h3>
        <ItemSlider products={allProducts} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  allProducts: store.home
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(getProductsRequestThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
