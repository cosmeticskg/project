import API from "../../API";

export const FILTER_PRODUCTS_BY_BRAND =
  "[FILTER_PAGE] FILTER_PRODUCTS_BY_BRAND";
export const FILTER_PRODUCTS_BY_CATEGORIES =
  "[FILTER_PAGE] FILTER_PRODUCTS_BY_CATEGORIES";
export const GET_PRODUCT_REQUEST = "[FILTER_PAGE] GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "[FILTER_PAGE] GET_PRODUCT_SUCCESS";
export const GET_CATEGORIES_SUCCESS = "[FILTER_PAGE] GET_CATEGORIES_SUCCESS";
export const GET_BRANDS_SUCCESS = "[FILTER_PAGE] GET_BRANDS_SUCCESS";
export const GET_PRODUCT_ERROR = "[FILTER_PAGE] GET_PRODUCT_ERROR";

export const filterProductsByBrandThunk = (
  products,
  categoryId
) => dispatch => {
  return dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORIES,
    payload: {
      filterProducts: products.filter(item => item.category.includes(+categoryId))
    }
  });
};

export const getProductsRequest = () => ({ type: GET_PRODUCT_REQUEST });

export const getProductsSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});

export const getCategoriesSuccess = data => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: data
});

export const getBrandsSuccess = data => ({
  type: GET_BRANDS_SUCCESS,
  payload: data
});

export const getProductsError = () => ({ type: GET_PRODUCT_ERROR });

export const getProductsRequestThunk = () => dispatch => {
  dispatch(getProductsRequest());
  return API.getProducts()
    .then(res => {
      console.log(res.data);
      
      let trueData = res.data.results.map(item => ({
        ...item,
        is_purchased: false,
        quantity: 1
      }));

      dispatch(getProductsSuccess(trueData));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET Products");
      dispatch(getProductsError());
    });
};

export const getCategoriesRequestThunk = () => dispatch => {
  return API.getCategories()
    .then(res => {
      let categories = res.data;
      dispatch(getCategoriesSuccess(categories));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET CATEGORIES");
      dispatch(getProductsError());
    });
};

export const getBrandsRequestThunk = () => dispatch => {
  return API.getBrands()
    .then(res => {
      let brands = res.data;
      dispatch(getBrandsSuccess(brands));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET BRANDS");
      dispatch(getProductsError());
    });
};
