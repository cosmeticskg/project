import React from "react";
import "./filter-list.css";
import Item from "../../home-page/item";

const FilterList = props => {
  const allProducts = props.allProducts;
  const filteredProducts = props.filteredProducts;

  let pagesCount = Math.ceil(props.products / props.pageLimit);

  return (
    <div className="filter_list_wrapper">
      <div className="filter_list__item_container">
        {filteredProducts && filteredProducts.length ? (
          filteredProducts.map(item => {
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
