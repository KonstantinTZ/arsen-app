import React from 'react';
import './TextBox.css'
import { MyButtonBig } from '../../../../UI/MyButtonBig/MyButtonBig';

export function TextBox() {
  return (
    <div className='text-box hero__text-box col-xl-9 col-lg-9 col-md-12 col-12'>
      <h1 className='text-box__title text-white'>
        MiMoracir - сопровождаем вашу память с заботой и уважением !
      </h1>
      <p className='text-box__descr text-white'>
        Находясь вдали от&nbsp;кладбища, проживая в&nbsp;другом городе или по&nbsp;различным причинам не&nbsp;имея возможности должным образом присматривать за&nbsp;могилой, Вы&nbsp;сможете быть спокойны, что место погребения родных и&nbsp;близких людей выглядит достойно и&nbsp;ухоженно.
      </p>
      <a href="#contact-us" className='text-box__button'>
        <MyButtonBig>Оставить заявку</MyButtonBig>
      </a>
    </div>
  );
}
