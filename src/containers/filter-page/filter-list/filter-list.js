import React from "react";
import "./filter-list.css";
import Item from "../../home-page/item";

const FilterList = props => {
  const allProducts = props.allProducts;

  return (
    <div className="filter_list_wrapper">
      <div className="filter_list__item_container">
        {allProducts && allProducts.length ? (
          allProducts.map(item => {
            return (
              <Item
                key={item.id}
                products={item}
                {...props}
                handleShow={props.handleShow}
              />
            );
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default FilterList;
