import {changeItemDataInHomePage} from '../home-page/actions';

export const PRODUCT_FINALLY_REMOVED_FROM_FAVORITES =
  "[FAVORITE_PAGE] PRODUCT_FINALLY_REMOVED_FROM_FAVORITES ";
export const TOGGLE_ITEM_VALUE_OF_FAVORITE =
  "[FAVORITE_PAGE] TOGGLE_ITEM_VALUE_OF_FAVORITE ";

export const productFinallyRemovedFromFavorites = productId => ({
  type: PRODUCT_FINALLY_REMOVED_FROM_FAVORITES,
  payload: productId
});



export const toggleItemValueOfFavorite = data => ({
  type: TOGGLE_ITEM_VALUE_OF_FAVORITE,
  payload: data
});

export const addProductToFavoritesThunk = data => dispatch => {
  let favoriteItemsInLocalStorage;
  if (localStorage.getItem("favorites") === null) {
    favoriteItemsInLocalStorage = [];
  } else {
    favoriteItemsInLocalStorage = JSON.parse(localStorage.getItem("favorites"));
    favoriteItemsInLocalStorage = favoriteItemsInLocalStorage.filter(
      productItem => productItem.id !== data.id
    ); //чтобы item не повторялись
  }

  if (data.isFavoriteItem) {
    let oldData = favoriteItemsInLocalStorage;
    let deleteItem = data.id;
    let beforeDelete = oldData.slice(0, deleteItem);
    let afterDelete = oldData.slice(deleteItem);
    let newData = [...beforeDelete, ...afterDelete];
    favoriteItemsInLocalStorage = newData;
    localStorage.setItem(
      "favorites",
      JSON.stringify(favoriteItemsInLocalStorage)
    );
  } else {
    favoriteItemsInLocalStorage.unshift(data);
    localStorage.setItem(
      "favorites",
      JSON.stringify(favoriteItemsInLocalStorage)
    );
  }
  let finalData = JSON.parse(localStorage.getItem("favorites"));
  dispatch(toggleItemValueOfFavorite(data));
  dispatch(changeItemDataInHomePage(data));
};
