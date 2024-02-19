import React, { useState } from 'react';// 'react-i18next' ?
import { useTranslation } from 'react-i18next'
import './Navigation.css';
;


export function Navigation() {
  const [activeLanguageButton, setActiveLanguageButton] = useState(true)
  // true === am , false === ru
  const [t, i18n] = useTranslation("global")
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLanguageButton(!activeLanguageButton)
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header__navbar bg-body">
      <div className="container-fluid navbar__box">
        <a className="navbar-brand navbar__logo-link" href="#hero">
          <img
            className='navbar__logo'
            src={require('../../../../img/logo-text-big.webp')}
            alt="logo"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-container" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <span className="nav-link nav-link-btn-box" aria-current="page" >
              <button 
              className={`lang-btn ${activeLanguageButton && " active"}`}
              onClick ={()=>handleChangeLanguage("am")}
              >
                ՀԱՅ</button>
              <button 
              className={`lang-btn ${!activeLanguageButton && " active"}`}
              onClick ={()=>handleChangeLanguage("ru")}
              >
                РУС</button>
              </span>
            <a className="nav-link " href="#examples">{t('navigation.gallery')}</a>
            <a className="nav-link " href="#map">{t('navigation.geography')}</a>
            <a className="nav-link " href="#contact-us">{t('navigation.contactUs')}</a>
          </div>
          <div className="d-flex align-items-center justify-content-center navbar__contacts-header">
            <a href='tel:+374(77)005266' className="contacts-header__tel contacts-header__link" activeclassname={"active"} to="/basket">
              +374(77)005266
            </a>
            <a href='https://wa.me/message/HZI6JAQ2764IN1' targer='_blank' className="contacts-header__link" activeclassname={"active"} to="/basket">
              <img
                className="contacts-header__logo"
                width={48}
                height={48}
                src="https://img.icons8.com/color/96/whatsapp--v1.png"
                alt="wa logo"
              />
            </a>
            <a href='viber://add?number=37477005266' targer='_blank' className="contacts-header__link" activeclassname={"active"} to="/basket">
              
              <img
              className="contacts-header__logo"
                width={48}
                height={48}
                src="https://img.icons8.com/color/48/viber.png"
                alt="viber"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
