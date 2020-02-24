import React from "react";
import CartItem from "../cart-item";
import "./cart-list.css";

const CartList = props => {
  const purchasedProducts = JSON.parse(localStorage.getItem("products"));
  return (
    <div className="cart-item-list">
      {purchasedProducts && purchasedProducts.length ? (
        purchasedProducts.map((product) => {
          return (
            <CartItem
              key={product.id}
              {...product}
              count={props.purchasedProducts.count}
              onToggle={props.onToggle}
              onDelete={props.onDelete}
              selectProduct={props.selectProduct}
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

export default CartList;
