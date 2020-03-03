import React from "react";
import './modal-thanks.css';

const ModalAlert = props => {
  const { show, handleClose } = props;

  const showClassName = show
    ? "modal-wrapper-thanks display-flex"
    : "modal-wrapper-thanks display-none";

  return (
    <div className={showClassName}>
      <div className="modal-wrapper-content">
        <button onClick={handleClose} className="modal-content-close">
          +
        </button>
        <p>Невозможно совершить покупку, так как вы не выбрали ни одного товара! Пожалуйста, выберите товар!</p>
        
      </div>
    </div>
  );
};

export default ModalAlert;