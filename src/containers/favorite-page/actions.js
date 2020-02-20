export const PRODUCT_FINALLY_REMOVED_FROM_FAVORITES =
  "[FAVORITE_PAGE] PRODUCT_FINALLY_REMOVED_FROM_FAVORITES ";

export const productFinallyRemovedFromFavorites = productId => ({
  type: PRODUCT_FINALLY_REMOVED_FROM_FAVORITES,
  payload: productId
});
