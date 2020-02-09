import React from "react";
import CartItem from "../cart-item";
import "./cart-list.css";

const CartList = props => {
  // console.log(props);
  const { purchasedProducts } = props.purchasedProducts;
  return (
    <div className="cart-item-list">
      {purchasedProducts && purchasedProducts.length ? (
        purchasedProducts.map((product, i) => {
          return (
            <CartItem
              key={i}
              {...product}
              index={i}
              count={props.purchasedProducts.count}
              // onDecrease={props.onDecrease}
              // onIncrease={props.onIncrease}
              onToggle={props.onToggle}
              onDelete={props.onDelete}
            />
          );
        })
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
};

export default CartList;
