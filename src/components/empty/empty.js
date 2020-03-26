import React from "react";
import "./empty.css";
import surprised from "../../img/empty/emoji.svg";
import box from "../../img/empty/box.svg";

const Empty = () => {
  return (
    <div className="empty_wrapper">
      <div className="empty_image_wrapper">
        <img
          src={surprised}
          alt="empty surprised face"
          className="empty_surprised"
        />
        <div>
          <img src={box} alt="empty box" className="empty_box" />
          <p>УПС...</p>
        </div>
      </div>

      <div className="empty_description">
        <p>Пусто. Выберите, пожалуйста, другой товар.</p>
      </div>
    </div>
  );
};

export default Empty;
