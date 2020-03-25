const checkDataForFavorites = (array, specify = "") => {
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  //   console.log(array);

  if (specify === "sales") {
    let final = array.map(item => {
      let preFinal = favoriteData.find(elem => elem.id === item.id);
      return preFinal
        ? { ...item, ...preFinal, price: item.price }
        : { ...item };
    });
    return final;
  }
  if (specify === "cart") {
    let final = array.map(item => {
      let preFinal = favoriteData.find(elem => elem.id === item.id);
      return preFinal
        ? { ...item, ...preFinal, price: item.price }
        : { ...item};
    });
    return final;
  }

  let final = array.map(item => {
    let preFinal = favoriteData.find(elem => elem.id === item.id);
    return preFinal ? { ...item, ...preFinal } : { ...item };
  });
  return final;
};

const setFavorite = (array,actionPayloadId) => {
  const final = array.map(item => {
    if (item.id === actionPayloadId) {
      item.isFavoriteItem = !item.isFavoriteItem;
    }
    return item;
  });
  return final
}
const setPurchaseToCart = (array,actionPayloadId) => {
  const final = array.map(item => {
    if (item.id === actionPayloadId) {
      item.isCartItem = !item.isCartItem;
    }
    return item;
  });
  return final
}

const checkDataForCart = (array, specify = "") => {
  let cartData = JSON.parse(localStorage.getItem("products"));
  //   console.log(array);

  if (specify === "sales") {
    let final = array.map(item => {
      let preFinal = cartData.find(elem => elem.id === item.id);
      return preFinal
        ? { ...item, ...preFinal, price: item.price }
        : { ...item };
    });
    return final;
  }

  let final = array.map(item => {
    let preFinal = cartData.find(elem => elem.id === item.id);
    return preFinal ? { ...item, ...preFinal } : { ...item };
  });
  return final;
};

export default { 
  checkDataForFavorites,
  setFavorite,
  setPurchaseToCart,
  checkDataForCart
 };
