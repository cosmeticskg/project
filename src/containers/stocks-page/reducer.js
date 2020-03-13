import {
  GET_STOCKS_REQUEST,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERROR,
  SET_CURRENT_SALE_BUNDLE
} from "./actions";

const initialState = {
  stocksData: [],
  loading: true,
  error: false,
  currentSaleBundle: JSON.parse(localStorage.getItem('currentSaleBundle')) || null
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_STOCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        stocksData: action.payload
      };
    case GET_STOCKS_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    case SET_CURRENT_SALE_BUNDLE:
      return {
        ...state,
        currentSaleBundle: action.payload
      }

    default:
      return state;
  }
};

export default stocksReducer;
