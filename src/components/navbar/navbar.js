import React, { Component } from "react";
import "./navbar.css";
import navLogo from "../../img/menu.svg";
import firstLogo from "../../img/make-up.svg";
import secongLogo from "../../img/cosmetic.svg";
import thirdLogo from "../../img/lotion.svg";
import fourthLogo from "../../img/perfume.svg";
import fifthLogo from "../../img/pomada.svg";

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
          <img src={firstLogo} alt="menu-icon" />
          <a href="#">Dior</a>
        </li>
        <li>
          <img src={secongLogo} alt="menu-icon" />
          <a href="#">Faberlic</a>
        </li>
        <li>
          <img src={thirdLogo} alt="menu-icon" />
          <a href="#">Kylie</a>
        </li>
        <li>
          <img src={fourthLogo} alt="menu-icon" />
          <a href="#">Oriflame</a>
        </li>
        <li>
          <img src={fifthLogo} alt="menu-icon" />
          <a href="#">Clinique</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
