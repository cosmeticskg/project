import React, { useState } from "react";
import styles from "./paginator.module.css";

const Paginator = (props) => {
  const { currentPage, pageSize, totalProducts, portionSize = 5 } = props;

  let pagesCount = Math.ceil(totalProducts / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const prev = "< Prev";
  const next = "Next >";
  return (
    <div className={styles.centering_wrapper}>
      <div className={styles.paginator_wrapper}>
        {portionNumber > 1 && (
          <p
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
            className={styles.prev}
          >
            {prev}
          </p>
        )}

        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((page) => {
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

        {portionCount > portionNumber && (
          <p
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
            className={styles.next}
          >
            {next}
          </p>
        )}
      </div>
    </div>
  );
};

export default Paginator;
