import React from "react";
import "./filter-page.css";
import HeaderMain from "../../components/header-main";
import Footer from "../../components/footer";

const FilterPage = () => {
  return (
    <div >
      <HeaderMain />
      <div className="filter_wrapper">
        <div className="filter__buttons__wrapper"> 
          <div className="filter_button">
            <select>
              <option>Крема</option>
              <option>Бальзамы</option>
            </select>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FilterPage;
