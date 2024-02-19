import React from 'react';
import './Footer.css';
import { useTranslation } from 'react-i18next';


export function Footer() {
  const {t} = useTranslation("global")
  return (
    <footer className='footer'>
      <div className="container">
        <a href='#1' className='footer__top-link'>
          <img
            className='footer__logo'
            src={require('../../../img/logo-text-big.webp')}
            alt="logo"
          />
        </a>
        <div className="footer__box">
          <div className="footer__left">
            <h4 className='footer__subtitle'>
              {t("footer.footerContactsTitle")}
            </h4>
            <ul className="footer__list list-reset">
              <li className="footer__item">
                <a href="tel:+374(77)005266" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material-two-tone/24/phone--v1.png"
                    alt="phone--v1"
                  />&nbsp;
                  +374(77)005266
                </a>
              </li>
              <li className="footer__item">
                <a href="https://wa.me/message/HZI6JAQ2764IN1" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material-outlined/24/whatsapp--v1.png"
                    alt="whatsapp--v1"
                  />&nbsp;
                  WhatsApp
                </a>
              </li>
              <li className="footer__item">
                <a href="viber://add?number=37477005266" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material-outlined/24/viber.png"
                    alt="viber"
                  />&nbsp;
                  Viber
                </a>
              </li>
              <li className="footer__item">
                <a href="mailto:mimoracir@gmail.com" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material/24/mail.png"
                    alt="mail"
                  />&nbsp;
                  mimoracir@gmail.com
                </a>
              </li>
              <li className="footer__item">
                <a href="https://maps.app.goo.gl/MvrjY4FPUPstRTop7"
                  className='footer__link'
                >
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material-sharp/24/marker.png"
                    alt="marker"
                  />&nbsp;
                  {t("addres.addresDescr")}</a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <h4 className='footer__subtitle'>
            {t("footer.footerSocialTitle")}
            </h4>
            <ul className="footer__list list-reset">
              <li className="footer__item">
                <a href="https://www.facebook.com" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material/24/facebook-new.png"
                    alt="facebook-new"
                  />&nbsp;
                  facebook
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.tiktok.com" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material/24/tiktok.png"
                    alt="tiktok"
                  />&nbsp;
                  tiktok
                </a>
              </li>
              <li className="footer__item">
                <a href="https://www.instagram.com" className='footer__link'>
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/material/24/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />&nbsp;
                  instagram
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
