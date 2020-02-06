import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PURCHASED_PRODUCTS_FROM_STORE
} from "./actions";

const initialState = {
  purchasedProducts: [],
  error: false,
  loading: false,
  count: 0,
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PURCHASED_PRODUCTS_FROM_STORE:
      return {
        ...state,
        purchasedProducts: action.payload
      };
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        purchasedProducts: action.payload
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default cartReducer;
