import React,{useState,useEffect} from "react";
import styles from "./stock-item.module.css";
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
    <div className={styles.wrapper}>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={currentProduct.image} alt="item-pic" />
      </div>
      <div className={styles.content}>
        <div className={styles.description}>
          <span>{currentProduct.description}</span>
        </div>
        <div className={styles.price}>
          <p>{price} сом</p>
        </div>
      </div>
    </div>
  );
};
export default StockItem;
