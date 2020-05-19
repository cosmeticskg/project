////
// CART PAGE SELECTORS
////

export const getCartPurchasedProducts = (state) => {
    return state.cart;
}

export const getCartTotal = (state) => {
    return state.cart.total;
}

////
// END OF CART PAGE SELECTORS
////