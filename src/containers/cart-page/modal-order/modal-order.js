import React from "react";
import "./modal-order.css";
import { Field, reduxForm } from "redux-form";

const ModalOrder = props => {
  const { show, handleClose,handleSubmit } = props;
  // console.log(props);
  
  const showClassName = show
    ? "modal-wrapper display-flex"
    : "modal-wrapper display-none";

    
  return (
    <div className={showClassName}>
      <div className="modal-content">
        <button onClick={handleClose} className="modal-content-close">
          +
        </button>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">
                <span>Имя:</span>
              </label>
              <Field name="name" type="text" component="input" required />
            </li>
            <li>
              <label htmlFor="phone_number">Телефон: </label>
              <Field
                name="phone_number"
                type="tel"
                component="input"
                required
              />
            </li>
            <li>
              <label htmlFor="email">E-mail: </label>
              <Field name="email" type="email" component="input" required />
            </li>
            <li>
              <label htmlFor="address">Адрес: </label>
              <Field name="address" type="text" component="input" required />
            </li>
            <li>
              <label htmlFor="comment">Комментарий: </label>
              <Field name="comment" component="textarea" />
            </li>
          </ul>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "contacts"  
})(ModalOrder);
