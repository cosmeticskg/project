import React, { Component } from "react";
import CartItem from "../cart-item";
import "./cart-list.css";

const CartList = props => {
  // console.log(props);

  return (
    <div className="cart-item-list">
      {props.purchasedProducts.purchasedProducts.map(product => {
        return (
          <CartItem
            key={product.id}
            {...product}
            // onAddedToCart={() => onAddedToCart(book.id)}
          />
        );
      })}
    </div>
  );
};

export default CartList;
