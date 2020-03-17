import API from "../../API";

export const GET_PRODUCT_REQUEST = "[FILTER_PAGE] GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "[FILTER_PAGE] GET_PRODUCT_SUCCESS";
export const GET_CATEGORIES_SUCCESS = "[FILTER_PAGE] GET_CATEGORIES_SUCCESS";
export const GET_SUBCATEGORIES_SUCCESS = "[FILTER_PAGE] GET_SUBCATEGORIES_SUCCESS";
export const GET_BRANDS_SUCCESS = "[FILTER_PAGE] GET_BRANDS_SUCCESS";
export const GET_PRODUCT_ERROR = "[FILTER_PAGE] GET_PRODUCT_ERROR";
export const SET_CURRENT_PAGE = "[FILTER_PAGE] SET_CURRENT_PAGE";
export const SET_BRAND = "[FILTER_PAGE] SET_BRAND";
export const SET_CATEGORY = "[FILTER_PAGE] SET_CATEGORY";
export const SET_SUB_CATEGORY = "[FILTER_PAGE] SET_SUB_CATEGORY";

export const getProductsRequest = () => ({ type: GET_PRODUCT_REQUEST });

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
})

export const setBrand = (brandId) => ({
  type: SET_BRAND,
  payload: +brandId || null
})

export const setCategory = (categoryId) => ({
  type: SET_CATEGORY,
  payload: +categoryId || null
})

export const setSubcategory = (subCategoryId) => ({
  type: SET_SUB_CATEGORY,
  payload: +subCategoryId || null
})

export const getProductsSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});

export const getCategoriesSuccess = data => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: data
});

export const getSubcategoriesSuccess = data => ({
  type: GET_SUBCATEGORIES_SUCCESS,
  payload: data
});

export const getBrandsSuccess = data => ({
  type: GET_BRANDS_SUCCESS,
  payload: data
});

export const getProductsError = () => ({ type: GET_PRODUCT_ERROR });

export const getProductsRequestThunk = (category,subCategory,brand,pageSize,currentPage) => dispatch => {
  dispatch(getProductsRequest());
  if ( brand === null){
    brand = "";
  }
  if ( category === null){
    category = "";
  }
  if ( subCategory === null){
    subCategory = "";
  }
  return API.getProductsForFilter(category,subCategory,brand,pageSize,currentPage * pageSize)
    .then(res => {
      let trueData = res.data.results.map(item => ({
        ...item,
        is_purchased: false,
        quantity: 1
      }));

      dispatch(getProductsSuccess(trueData));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET Products BY FILTER");
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

export const getSubcategoriesRequestThunk = () => dispatch => {
  return API.getSubcategories()
    .then(res => {
      let subCategories = res.data;
      dispatch(getSubcategoriesSuccess(subCategories));
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
