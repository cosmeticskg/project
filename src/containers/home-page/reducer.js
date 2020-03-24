import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_BRANDS_SUCCESS,
  GET_CATEGORIES_SUCCESS,
  GET_HITS_SUCCESS,
  GET_SALES_SUCCESS,
  GET_SLIDER_IMAGES_SUCCESS,
  GET_SUBCATEGORIES_SUCCESS,
  CHANGE_ITEM_DATA_IN_HOME_PAGE
} from "./actions";

const initialState = {
  products: [],
  hits: [],
  sales: [],
  brands: [],
  categories: [],
  subcategories: [],
  sliderImages: [],
  error: false,
  loading: false
};

const homeReducer = (state = initialState, action) => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  switch (action.type) {
    case CHANGE_ITEM_DATA_IN_HOME_PAGE:
      let newObject = action.payload;
      let finalProducts = state.products.map(item => {
        if (item.id === newObject.id) {
          item.isFavoriteItem = !item.isFavoriteItem;
        }
        return item;
      });
      let finalHits = state.hits.map(item => {
        if (item.id === newObject.id) {
          item.isFavoriteItem = !item.isFavoriteItem;
        }
        return item;
      });
      let finalSales = state.sales.map(item => {
        if (item.id === newObject.id) {
          item.isFavoriteItem = !item.isFavoriteItem;
        }
        return item;
      });

      return {
        ...state,
        products: finalProducts,
        hits: finalHits,
        sales:finalSales
      };
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
        products: action.payload
      };
    case GET_SALES_SUCCESS:
      return {
        ...state,
        loading: false,
        sales: action.payload
      };
    case GET_HITS_SUCCESS:
      return {
        ...state,
        loading: false,
        hits: action.payload
      };
    case GET_SLIDER_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        sliderImages: action.payload
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

export default homeReducer;
