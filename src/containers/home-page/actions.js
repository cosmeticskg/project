import API from "../../API";

export const GET_PRODUCT_REQUEST = "[HOME_PAGE] GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "[HOME-PAGE] GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "[HOME_PAGE] GET_PRODUCT_ERROR";
export const ADD_PRODUCT = "[HOME_PAGE] ADD_PRODUCT ";

export const addProduct = productId => ({
  type: ADD_PRODUCT,
  payload: productId
});
export const getProductsRequest = () => ({ type: GET_PRODUCT_REQUEST });

export const getProductsSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});

export const getProductsError = () => ({ type: GET_PRODUCT_ERROR });

export const addProductToFavoritesThunk = data => dispatch => {
  let favoriteItemsInLocalStorage;
  if (localStorage.getItem("favorites") === null) {
    favoriteItemsInLocalStorage = [];
  } else {
    favoriteItemsInLocalStorage = JSON.parse(localStorage.getItem("favorites"));
    favoriteItemsInLocalStorage = favoriteItemsInLocalStorage.filter(
      productItem => productItem.get_id !== data.get_id
    );//чтобы item не повторялись
  }
  favoriteItemsInLocalStorage.unshift(data);
  localStorage.setItem(
    "favorites",
    JSON.stringify(favoriteItemsInLocalStorage)
  );
};

export const addProductThunk = data => dispatch => {
  let a;
  if (localStorage.getItem("products") === null) {
    a = [];
  } else {
    a = JSON.parse(localStorage.getItem("products"));
    a = a.filter(productItem => productItem.get_id !== data.get_id);
  }
  a.unshift(data);
  dispatch(addProduct(a));
  localStorage.setItem("products", JSON.stringify(a));
};

export const getProductsRequestThunk = () => dispatch => {
  dispatch(getProductsRequest());
  return API.getProducts()
    .then(res => {
      // console.log(res.data);
      dispatch(getProductsSuccess(res.data));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET Products");
      dispatch(getProductsError());
    });
};
