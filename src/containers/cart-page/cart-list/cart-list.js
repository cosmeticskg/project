import React from "react";
import CartItem from "../cart-item";
import "./cart-list.css";

const CartList = (props,hooks) => {
  // console.log(props);
  
  const { purchasedProducts } = props.purchasedProducts;
  return (
    <div className="cart-item-list">
      {purchasedProducts && purchasedProducts.length ? (
        purchasedProducts.map((product, i) => {          
          return (
            <CartItem
              key={product.get_id}
              {...product}
              count={props.purchasedProducts.count}
              onToggle={props.onToggle}
              onDelete={props.onDelete}
              selectProduct={props.selectProduct}
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
