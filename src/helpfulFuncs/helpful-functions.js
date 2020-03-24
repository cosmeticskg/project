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

  let final = array.map(item => {
    let preFinal = favoriteData.find(elem => elem.id === item.id);
    return preFinal ? { ...item, ...preFinal } : { ...item };
  });
  return final;
};
export default checkDataForFavorites;
