import React from "react";
import { useTranslation } from "react-i18next";
import "./Navigation.css";
export function Navigation() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header__navbar bg-body">
      <div className="container-fluid navbar__box">
        <a className="navbar-brand navbar__logo-link" href="#hero">
          <img
            className="navbar__logo"
            src={require("../../../../img/logo-text-big.webp")}
            alt="logo"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-container"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <span className="nav-link nav-link-btn-box" aria-current="page">
              <button
                className={`lang-btn ${i18n.language === "am" && " active"}`}
                onClick={() => handleChangeLanguage("am")}
              >
                {/* ՀԱՅ */}
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_49_3440)">
                    <path
                      d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
                      fill="#1A47B8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 11H22V16H0V11Z"
                      fill="#FFDA2C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H22V5H0V0Z"
                      fill="#F93939"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_49_3440">
                      <rect width="22" height="16" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                className={`lang-btn ${i18n.language === "ru" && " active"}`}
                onClick={() => handleChangeLanguage("ru")}
              >
                {/* РУС */}
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_977)">
                    <rect width="22" height="16" rx="2" fill="#1A47B8" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 10.6667H22V16H0V10.6667Z"
                      fill="#F93939"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H22V5.33333H0V0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_977">
                      <rect width="22" height="16" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                className={`lang-btn ${i18n.language === "en" && " active"}`}
                onClick={() => handleChangeLanguage("en")}
              >
                {/* ENG */}
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_36_907)">
                    <rect width="22" height="16" rx="2" fill="white" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H9.42857V7.46667H0V0Z"
                      fill="#1A47B8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.42857 0V1.06667H22V0H9.42857ZM9.42857 2.13333V3.2H22V2.13333H9.42857ZM9.42857 4.26667V5.33333H22V4.26667H9.42857ZM9.42857 6.4V7.46667H22V6.4H9.42857ZM0 8.53333V9.6H22V8.53333H0ZM0 10.6667V11.7333H22V10.6667H0ZM0 12.8V13.8667H22V12.8H0ZM0 14.9333V16H22V14.9333H0Z"
                      fill="#F93939"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.04762 1.06667V2.13333H2.09524V1.06667H1.04762ZM3.14286 1.06667V2.13333H4.19048V1.06667H3.14286ZM5.2381 1.06667V2.13333H6.28572V1.06667H5.2381ZM7.33334 1.06667V2.13333H8.38096V1.06667H7.33334ZM6.28572 2.13333V3.2H7.33334V2.13333H6.28572ZM4.19048 2.13333V3.2H5.2381V2.13333H4.19048ZM2.09524 2.13333V3.2H3.14286V2.13333H2.09524ZM1.04762 3.2V4.26667H2.09524V3.2H1.04762ZM3.14286 3.2V4.26667H4.19048V3.2H3.14286ZM5.2381 3.2V4.26667H6.28572V3.2H5.2381ZM7.33334 3.2V4.26667H8.38096V3.2H7.33334ZM1.04762 5.33333V6.4H2.09524V5.33333H1.04762ZM3.14286 5.33333V6.4H4.19048V5.33333H3.14286ZM5.2381 5.33333V6.4H6.28572V5.33333H5.2381ZM7.33334 5.33333V6.4H8.38096V5.33333H7.33334ZM6.28572 4.26667V5.33333H7.33334V4.26667H6.28572ZM4.19048 4.26667V5.33333H5.2381V4.26667H4.19048ZM2.09524 4.26667V5.33333H3.14286V4.26667H2.09524Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_907">
                      <rect width="22" height="16" rx="2" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </span>
            <a className="nav-link " href="#examples">
              {t("navigation.gallery")}
            </a>
            <a className="nav-link " href="#map">
              {t("navigation.geography")}
            </a>
            <a className="nav-link " href="#servises">
              {t("navigation.servises")}
            </a>
            <a className="nav-link " href="#contact-us">
              {t("navigation.contactUs")}
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center navbar__contacts-header">
            <a
              href="tel:+374(77)005266"
              className="contacts-header__tel contacts-header__link"
              activeclassname={"active"}
              to="/basket"
            >
              +374(77)005266
            </a>
            <a
              href="https://wa.me/message/HZI6JAQ2764IN1"
              targer="_blank"
              className="contacts-header__link"
              activeclassname={"active"}
              to="/basket"
            >
              <img
                className="contacts-header__logo"
                width={48}
                height={48}
                src="https://img.icons8.com/color/96/whatsapp--v1.png"
                alt="wa logo"
              />
            </a>
            <a
              href="https://skobelkin.ru/viber/37477005266"
              targer="_blank"
              className="contacts-header__link"
              activeclassname={"active"}
              to="/basket"
            >
              {/* viber://chat?number=%2B37477005266 */}
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
