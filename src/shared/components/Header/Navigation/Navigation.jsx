import React from 'react';
import './Navigation.css';


export function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header__navbar bg-body">
      <div className="container-fluid navbar__box">
        <a className="navbar-brand navbar__logo-link" href="#1">
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
            <a className="nav-link " aria-current="page" href="#hero">О нас</a>
            <a className="nav-link " href="#examples">Галерея</a>
            <a className="nav-link " href="#map">География работ</a>
            <a className="nav-link " href="#contact-us">Оставить заявку</a>
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
