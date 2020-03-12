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

const StocksPage = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStocksThunk());
  }, []);
  const { error, loading } = props;

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
      <StockList {...props} />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stocks: state.stocks.stocksData,
    loading: state.stocks.loading,
    error: state.stocks.error
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(StocksPage);
