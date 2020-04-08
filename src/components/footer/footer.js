import React, { useEffect } from "react";
import "./footer.css";
import { connect, useDispatch } from "react-redux";
import { getSocialNetworkDataThunk } from "./actions";
import { Redirect } from "react-router-dom";

function Footer(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getSocialNetworkDataThunk());
  }, []);

  const { socialData } = props;

  return (
    <footer>
      <div className="footer_content_wrapper">
        <div className="footer_description_wrapper">
          <p className="footer__name">Cosmetica.kg</p>
          <div className="footer__description">
            "Cosmetica.kg" сеть салонов красоты и магазинов профессиональной
            косметики, работаем с 2020 г.
          </div>
        </div>
        <div className="footer__contacts">
          <p className="footer_title">Контакты</p>
          <p>
            Телефон:&nbsp;&nbsp;&nbsp;{" "}
            <span className="footer__contacts_content">+996777123456</span>
          </p>
          <p>
            Адрес:
            <a className="footer__contacts_content" href="https://neobis.kg/">
              &nbsp;&nbsp;&nbsp;&nbsp;Neobis clubs
            </a>
          </p>
        </div>

        <div>
          <p className="footer__social footer_title">Соцcети</p>
          <div>
            {socialData && socialData.length ? (
              socialData.map(item => {
                return (
                  <a href={item.media_type} key={item.id}>
                    <img
                      className="footer__social__network__icons"
                      src={item.image}
                      alt={item.name}
                    />
                  </a>
                );
              })
            ) : (
              <span>loading...</span>
            )}
          </div>
        </div>
      </div>
      <div className="footer_creater_name">
        <span>
          &copy; 2020 Copyright:{" "}
          <span className="footer_copyright">
            <a className="footer__copyright__link" href="https://neobis.kg/">
              Neobis.com
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
}

const mapStateToProps = state => ({
  socialData: state.footer.footerData
});

export default connect(mapStateToProps)(Footer);
