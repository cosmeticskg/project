import React from "react";
import FavoriteItem from '../favorite-item';
import "./favorite-list.css";

const FavoriteList = (props) => {
  const favoriteProducts = JSON.parse(localStorage.getItem("favorites"));
  return (
    <div className="cart-item-list">
      {favoriteProducts && favoriteProducts.length ? (
        favoriteProducts.map((product) => {
          return (
            <FavoriteItem
              key={product.id}
              {...product}
              onDelete={props.onDelete}
              products={product}
              {...props}
            />
          );
        })
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default FavoriteList;
