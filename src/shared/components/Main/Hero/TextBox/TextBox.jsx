import React from 'react';
import { useTranslation } from 'react-i18next'
import './TextBox.css'
import { MyButtonBig } from '../../../../UI/MyButtonBig/MyButtonBig';

export function TextBox() {
  const {t} = useTranslation("global")
 
  return (
    <div className='text-box hero__text-box col-xl-9 col-lg-9 col-md-12 col-12'>
      <h1 className='text-box__title text-white'>
        {t('hero.heroTitle')}
      </h1>
      <p className='text-box__descr text-white mb-4'>
        {t('hero.heroDescr')}
      </p>
      <a href="#contact-us" className='text-box__button'>
        <MyButtonBig>{t('hero.heroButtonText')}</MyButtonBig>
      </a>
    </div>
  );
}
