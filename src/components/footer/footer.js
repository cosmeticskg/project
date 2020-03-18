import React, { useEffect } from "react";
import "./footer.css";
import { connect, useDispatch } from "react-redux";
import { getSocialNetworkDataThunk } from "./actions";
import { Redirect } from "react-router-dom";

function Footer(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSocialNetworkDataThunk());
  }, []);

  const { socialData } = props;

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
          <b>
            Телефон:&nbsp;&nbsp;&nbsp;{" "}
            <span className="footer__white">+996777123456</span>
          </b>
        </p>
        {/* <p className="footer__white">&nbsp;&nbsp;&nbsp; </p> */}
        <p>
          <b>Адрес:</b>
          <a className="footer__white" href="https://neobis.kg/">
            &nbsp;&nbsp;&nbsp;&nbsp;Neobis clubs
          </a>
        </p>
      </div>

      <div>
        <p className="footer__social">Соцcети:</p>
        <div>
          {socialData && socialData.length ? (
            socialData.map(item => {
              return (
                <a href={item.media_type}>
                  <img className='footer__social__network__icons' src={item.image} alt={item.name} />
                </a>
              );
            })
          ) : (
            <span>loading...</span>
          )}
        </div>
      </div>
    </footer>
  );
}

const mapStateToProps = state => ({
  socialData: state.footer.footerData
});

export default connect(mapStateToProps)(Footer);
