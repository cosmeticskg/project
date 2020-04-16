import React, { useEffect, useState } from "react";
import style from "./stocks.module.css";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import API from "../../API";
import {Link} from 'react-router-dom';


const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    API.getSliderImages().then((data) => {
      setStocks(data.data.results);
    });
  }, []);
  console.log(stocks);

  return (
    <div className={style.wrapper}>
      <HeaderMain />
      <Navbar />
      <div className={style.content}>
        {stocks.map((item) => {
          return (
            <div className={style.item}>
              <img src={item.image} alt="stock" />
              <p>{item.description}</p>
              <div className={style.more_info_wrapper}>
                <Link to={`/stocks/${item.salebundle}`}>
                  <span className={style.more_info}>Подробнее...</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Stocks;
