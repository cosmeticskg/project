import React from "react";
import "./modal-order.css";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

const renderField = ({ input, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const ModalOrder = (props) => {
  const { show, handleClose, handleSubmit, submitting } = props;

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
                Имя:<span>*</span>{" "}
              </label>
              <Field name="name" type="text" component="input" required />
            </li>
            <li>
              <label htmlFor="phone_number">
                Телефон:<span>*</span>{" "}
              </label>
              <Field
                name="phone_number"
                type="tel"
                component={renderField}
                required
              />
            </li>
            <li>
              <label htmlFor="email">
                E-mail:<span>*</span>{" "}
              </label>
              <Field
                name="email"
                type="email"
                component={renderField}
                required
              />
            </li>
            <li>
              <label htmlFor="address">
                Адрес:<span>*</span>{" "}
              </label>
              <Field name="address" type="text" component="input" required />
            </li>
            <li>
              <label htmlFor="comment">Комментарий: </label>
              <Field name="comment" component="textarea" />
            </li>
          </ul>
          <div className="modal_order_submit_wrapper">
            <button disabled={submitting} type="submit">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "contacts",
  validate,
})(ModalOrder);
