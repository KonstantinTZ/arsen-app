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
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3038.596307990055!2d44.6369167!3d40.3956389!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDIzJzQ0LjMiTiA0NMKwMzgnMTIuOSJF!5e0!3m2!1sru!2sam!4v1707736908388!5m2!1sru!2sam"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    // eslint-disable-next-line jsx-a11y/iframe-has-title


  );
}
