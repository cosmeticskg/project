import React from "react";
import "./navbar.css";
import navLogo from "../../img/menu.png";

function Navbar(props) {
  return (
    <nav className="main__nav">
      <ul>
        <li className="main__nav__category">
          <img src={navLogo} alt="menu-icon" />
          <a href="#">Категории</a>
          <ul>
            <li>
              <a href="#">Волосы</a>
              <ul>
                <li>
                  <a href="#">Бальзамы</a>
                </li>
                <li>
                  <a href="#">Крема</a>
                </li>
                <li>
                  <a href="#">Химия</a>
                </li>
                <li>
                  <a href="#">Маски</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Глаза</a>
              <ul>
                <li>
                  <a href="#">Капли</a>
                </li>
                <li>
                  <a href="#">Лекарства</a>
                </li>
                <li>
                  <a href="#">Химия</a>
                </li>
                <li>
                  <a href="#">Очки</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Ноги</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Dior</a>
        </li>
        <li>
          <a href="#">Faberlic</a>
        </li>
        <li>
          <a href="#">Kylie</a>
        </li>
        <li>
          <a href="#">Oriflame</a>
        </li>
        <li>
          <a href="#">Clinique</a>
        </li>
        <li>
          <a href="#">Tony Moly</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
