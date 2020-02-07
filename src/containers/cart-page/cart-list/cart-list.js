import React, { Component } from "react";
import CartItem from "../cart-item";
import "./cart-list.css";

const CartList = props => {
  // console.log(props.cartItems.purchasedProducts);
  const {onDecrease,onDelete,onIncrease,cartItems} = props;
  return (
    <div className="cart-item-list">
      {props.cartItems.purchasedProducts.map(product => {
        return (
          <CartItem
            key={product.get_id}
            {...product}
            cartItems={cartItems}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default CartList;
