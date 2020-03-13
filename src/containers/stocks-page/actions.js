import API from "../../API";

export const GET_STOCKS_REQUEST = "[STOCKS_PAGE] GET_STOCKS_REQUEST";
export const GET_STOCKS_SUCCESS = "[STOCKS_PAGE] GET_STOCKS_SUCCESS";
export const GET_STOCKS_ERROR = "[STOCKS_PAGE] GET_STOCKS_ERROR";
export const SET_CURRENT_SALE_BUNDLE = "[STOCKS_PAGE] SET_CURRENT_SALE_BUNDLE ";

export const setCurrentSaleBundle = (data) => ({
  type: SET_CURRENT_SALE_BUNDLE,
  payload: data
})

export const getStocksRequest = () => ({
  type: GET_STOCKS_REQUEST
});

export const getStocksSuccess = (data) => ({
    type: GET_STOCKS_SUCCESS,
    payload: data
})

export const getStocksError = () => ({
    type: GET_STOCKS_ERROR
  });

export const getStocksThunk = () => dispatch => {
  dispatch(getStocksRequest());
  return API.getStocks()
    .then(res => {
      let stocks = res.data;
      dispatch(getStocksSuccess(stocks));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET STOCKS");
      dispatch(getStocksError());
    });
};
