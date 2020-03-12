import React from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import PhotoSlider from "./photo-slider";
import Footer from "../../components/footer";
import './index.css';
import HomeContainer from './items-slider-container/';

function Home() {
  return (
    <div className="main__wrapper">
      <HeaderMain />
      <Navbar />
      <HomeContainer />
      <Footer />
    </div>
  );
}

export default Home;
