import React,{useEffect} from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import "./index.css";
import CartList from "./cart-list";
// import API from "../../API";
import Spinner from "../../components/spinner/spinner";
import ErrorIndicator from "../../components/error-indicator";
import { connect } from "react-redux";
import {
  productFinallyRemovedFromCart,
  productCountToggle,
  selectProductToBuy
} from "./actions";
// import { addProduct } from "../home-page/actions";

const Cart = (props) =>  {
  const {purchasedProducts, loading, error} = props;
  // useEffect(() => {

  // },[]);
  // console.log(props);
  

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
        <div className="cart">
          <div className="cart-body-wrapper">
            <div className="cart-name">
              <p>Корзина: ({purchasedProducts.purchasedProducts.length})</p>
            </div>
            <CartList
              {...props}
            />
          </div>

          <div className="cart-total">
            <h2>Сумма заказа</h2>
            <div>
              <p>К оплате</p>
              <p>{purchasedProducts.total}</p>
            </div>
            <button>Купить</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    purchasedProducts: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  onToggle: (id,value) => {dispatch(productCountToggle(id, value))},
  onDelete: id => {dispatch(productFinallyRemovedFromCart(id))},
  selectProduct: id => {dispatch(selectProductToBuy(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
