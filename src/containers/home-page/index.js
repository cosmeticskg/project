import React from "react";
import HeaderMain from "../../components/header-main/";
import Navbar from "../../components/navbar";
import PhotoSlider from './photo-slider';
import ItemSlider from './item-slider';
import Footer from '../../components/footer';

function Home() {   
  return (
    <div className="main__wrapper" >
      <HeaderMain />
      <Navbar />
      <PhotoSlider />
      <ItemSlider />
      <ItemSlider />    
      <ItemSlider />
      <Footer />
    </div>
  );
}

export default Home;
