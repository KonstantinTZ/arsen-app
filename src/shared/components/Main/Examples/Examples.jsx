import React from 'react';
import './Examples.css';
import { useTranslation } from 'react-i18next'
import {Carousel} from './Carousel'

export function Examples() {
  const {t} = useTranslation("global")
  return (
    <section className="examples examples__section" id='examples'>
      <div className="container examples__container">
      <h3 className='examples__title'>{t('gallery.galleryTitle')}</h3>
        <Carousel imgPath={'carousel-1'} imgPath2={'carousel-2'} imgPath3={'carousel-3'}/>
      </div>
    </section>
  );
}
