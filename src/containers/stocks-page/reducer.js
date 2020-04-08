import {
  GET_STOCKS_REQUEST,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_ERROR
} from "./actions";

const initialState = {
  stocksData: [],
  loading: true,
  error: false
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

    default:
      return state;
  }
};

export default stocksReducer;
