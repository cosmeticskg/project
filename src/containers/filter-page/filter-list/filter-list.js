import React, { Fragment } from "react";
import "./filter-list.css";
import Item from "../../home-page/item";
import styles from "./filter-list.module.css";
import Empty from "../../../components/empty";
import Paginator from "../paginator/paginator";

const FilterList = (props) => {
  const {
    filteredProducts,
    currentPage,
    pageSize,
    totalProducts,
    setCurrentPage,
    portionSize
  } = props;
  return (
    <Fragment>
      <div className="filter_list_wrapper">
        <div className="filter_list__item_container">
          {filteredProducts && filteredProducts.length ? (
            filteredProducts.map((item) => {
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
            <div style={{ paddingTop: "70px" }}>
              <Empty />
            </div>
          )}
        </div>
      </div>
      <Paginator
        currentPage={currentPage}
        pageSize={pageSize}
        totalProducts={totalProducts}
        setCurrentPage={setCurrentPage}
        portionSize={portionSize}
      />
    </Fragment>
  );
};

export default FilterList;
