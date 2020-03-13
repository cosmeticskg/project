import React,{useState,useEffect} from "react";
import "./stock-item.css";
import API from '../../../API';

const StockItem = (props) => {
  const [currentProduct,SetCurrentProduct] = useState({});
  useEffect(()=>{
    API.getProduct(props.product)
    .then(res=>{
      SetCurrentProduct(res.data)
    })
  },[]);

  const {price} = props
  return (
    <div className="cart-item-wrapper">
      <div>
        <img className="cart-product-img" src={currentProduct.image} alt="item-pic" />
      </div>
      <div className="cart-item-description">
        <div>
          <span>{currentProduct.description}</span>
        </div>
        <div>
          <p>{price} сом</p>
        </div>
      </div>
    </div>
  );
};
export default StockItem;
