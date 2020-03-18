import React from "react";
import "./footer.css";
import HeaderMain from "../header-main";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <p className="footer__name">Cosmetica.kg</p>
        <div className="footer__description">
          "Cosmetica.kg" сеть салонов красоты и магазинов профессиональной
          косметики, работаем с 2020 г.
        </div>
      </div>
      <div className="footer__contacts">
        <p>
          <b>Контактные данные:</b>
        </p>
        <p className="footer__white">&nbsp;&nbsp;&nbsp; +996777123456</p>
        <p>
          <b>Адрес:</b>
          <p className="footer__white">
            <a href="https://neobis.kg/">
              &nbsp;&nbsp;&nbsp;&nbsp;Neobis clubs
            </a>
          </p>
        </p>
      </div>

      <div>
        <p className="footer__social">Соцcети:</p>
        <div>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
