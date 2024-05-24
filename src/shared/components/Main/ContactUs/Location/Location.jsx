import React from 'react';
import './Location.css';
import { useTranslation } from 'react-i18next';

export function Location() {
  const { t } = useTranslation("global")
  return (
    <div className="col-lg-6 contact-us__location location">

      <h4 className='location__title'>
        {t("addres.addresTitle")}
      </h4 >
      <p className="location__descr">
        {t("addres.addresDescr")}
      </p>

      <iframe
        className='location__map'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3038.595089685611!2d44.634627105821565!3d40.39566589657736!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404027807745cc03%3A0xbd6228cb5e014d2b!2sMiMoracir!5e0!3m2!1sru!2sam!4v1715953181550!5m2!1sru!2sam"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    // eslint-disable-next-line jsx-a11y/iframe-has-title


  );
}
