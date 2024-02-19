import React from 'react';
import { useTranslation } from 'react-i18next'
import './MapText.css';

export function MapText() {
  const {t} = useTranslation("global")
  return (
    <div className='col-lg-6 map-text map__map-text'>
        <h2 className='map-text__title'>
        {t('geography.geographyTitle')}
        </h2>
        <p className="map-text__descr">
        {t('geography.geographyDescr')}
        </p>
    </div>
  );
}
