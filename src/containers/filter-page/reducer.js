import {
  FILTER_PRODUCTS_BY_BRAND,
  FILTER_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_BRANDS_SUCCESS,
  GET_CATEGORIES_SUCCESS
} from "./actions";
import {} from "./actions";

const initialState = {
  products: [],
  filterProducts: [],
  brands: [],
  categories: [],
  loading: true,
  error: false
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
          error: false
        };
      case GET_CATEGORIES_SUCCESS:
        return {
          ...state,
          loading: false,
          categories: action.payload
        };
      case GET_BRANDS_SUCCESS:
        return {
          ...state,
          loading: false,
          brands: action.payload
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          filterProducts: action.payload
        };
      case GET_PRODUCT_ERROR:
        return {
          ...state,
          loading: false,
          error: true
        };
    case FILTER_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        filterProducts: action.payload.filterProducts
      };
    default:
      return state;
  }
};

export default filterReducer;
