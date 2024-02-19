import React from 'react';
import './Servises.css'
import  CardList  from './CardList/CardList';
import { useTranslation } from 'react-i18next';

export function Servises() {
  const {t} = useTranslation("global")
  return (
    <section className='section servises__section'>
      <div className='container'>
        <h3 className='servises__title'>{t("servises.servisesTilte")}</h3>
      </div>
        <CardList />
    </section>
  );
}
