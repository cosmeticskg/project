import React from "react";
import './modal-thanks.css';

const ModalThanks = props => {
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
        <span>Спасибо за покупку!</span>
        <span>Ваш заказ принят.</span>
      </div>
    </div>
  );
};

export default ModalThanks;
