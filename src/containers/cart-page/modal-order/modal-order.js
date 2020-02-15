import React from "react";
import "./modal-order.css";

const ModalOrder = ({ show, handleClose }) => {
  const showClassName = show
    ? "modal-wrapper display-flex"
    : "modal-wrapper display-none";
  return (
    <div className={showClassName}>
      <div className="modal-content">
        <button onClick={handleClose} className="modal-content-close">
          +
        </button>
        <form>
          <ul>
            <li>
              <label><span>Имя:</span></label>
              <input type="text"  required/>
            </li>
            <li>
              <label>Телефон: </label>
              <input type="tel" required />
            </li>
            <li>
              <label>E-mail: </label>
              <input type="email" required />
            </li>
            <li>
              <label>Адрес: </label>
              <input type="text" required />
            </li>
            <li>
              <label>Комментарий: </label>
              <textarea /> 
            </li>
          </ul>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ModalOrder;
