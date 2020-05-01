import {
  PRODUCT_FINALLY_REMOVED_FROM_FAVORITES,
  TOGGLE_ITEM_VALUE_OF_FAVORITE,
  CHANGE_CART_ITEM_DATA_IN_FAVORITE_PAGE
} from "./actions";
import FUNCS from "../../helpfulFuncs/helpful-functions";

let initialFavorites = JSON.parse(localStorage.getItem("favorites"));
if (initialFavorites === null) {
  localStorage.setItem("favorites", JSON.stringify([]));
  initialFavorites = 0;
}
const initialState = {
  favoriteProducts: initialFavorites || [],
  favoritesCount: initialFavorites.length
};

const favoriteReducer = (state = initialState, action) => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  switch (action.type) {
    case PRODUCT_FINALLY_REMOVED_FROM_FAVORITES:
      let newItems = favorites.filter(item => action.payload !== item.id);
      localStorage.setItem("favorites", JSON.stringify(newItems));

      //next code for changing isFavoriteItem in cart page 
      let purchasedProducts = JSON.parse(localStorage.getItem("products"));
      let finalCartProducts = purchasedProducts.map(item => {
        if (item.id === action.payload) {
          item.isFavoriteItem = false;
        }
        return item;
      });
      localStorage.setItem("products", JSON.stringify(finalCartProducts));

      return {
        ...state,
        favoriteProducts: newItems,
        favoritesCount: newItems.length
      };

    case TOGGLE_ITEM_VALUE_OF_FAVORITE:
      favorites = FUNCS.setFavorite(favorites, action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));

      return {
        ...state,
        favoriteProducts: favorites,
        favoritesCount: favorites.length
      };

    case CHANGE_CART_ITEM_DATA_IN_FAVORITE_PAGE:
      let newObject = action.payload;
      let finalProducts = state.favoriteProducts.map(item => {
        if (item.id === newObject.id) {
          item.isCartItem = !item.isCartItem;
        }
        return item;
      });
      localStorage.setItem("favorites", JSON.stringify(finalProducts));
      return {
        ...state,
        favoriteProducts: finalProducts,
        favoritesCount: finalProducts.length
      };

    default:
      return state;
  }
};

export default favoriteReducer;
