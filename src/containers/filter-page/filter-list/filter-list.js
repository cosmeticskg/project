import React, { Fragment } from "react";
import "./filter-list.css";
import Item from "../../home-page/item";
import styles from "./filter-list.module.css";
import Empty from "../../../components/empty";

const FilterList = props => {
  const { filteredProducts, currentPage, pageSize, totalProducts } = props;

  let pagesCount = Math.ceil(totalProducts / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const prev ='< Prev';

  return (
    <Fragment>
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
            <div style={{ paddingTop: "70px" }}>
              <Empty />
            </div>
          )}
        </div>
      </div>
      <div className={styles.centering_wrapper}>
        <div className={styles.paginator_wrapper}>
          {/* <p className={styles.prev}>{prev}</p> */}
          {pages.map(page => {
            return (
              <div
              key={page}
                onClick={() => {
                  props.setCurrentPage(page - 1);
                }}
              >
                <span
                  className={currentPage + 1 === page && styles.selectedPage}
                >
                  {page}
                </span>
              </div>
            );
          })}
          {/* <p className={styles.next}> Next > </p> */}
        </div>
      </div>
    </Fragment>
  );
};

export default FilterList;
