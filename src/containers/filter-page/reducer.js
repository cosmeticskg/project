import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_BRANDS_SUCCESS,
  GET_CATEGORIES_SUCCESS,
  GET_SUBCATEGORIES_SUCCESS,
  SET_CURRENT_PAGE,
  SET_BRAND,
  SET_CATEGORY,
  SET_SUB_CATEGORY
} from "./actions";
import {} from "./actions";

const initialState = {
  totalProducts: 6,
  products: [],
  filterProducts: [],
  brands: [],
  categories: [],
  subcategories: [],
  loading: true,
  error: false,
  pageSize: 4,
  currentPage: 0,
  currentBrand: null,
  currentCategory: null,
  currentSubcategory: null
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
    case GET_SUBCATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        subcategories: action.payload
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case SET_BRAND:
      return {
        ...state,
        currentBrand: action.payload
      };
    case SET_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload
      };
    case SET_SUB_CATEGORY:
      return {
        ...state,
        currentSubcategory: action.payload
      }

    default:
      return state;
  }
};

export default filterReducer;
