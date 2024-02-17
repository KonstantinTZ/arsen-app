import React from 'react';
import './Servises.css'
import { CardList } from './CardList/CardList';

export function Servises() {
  return (
    <section className='section servises__section'>
      <div className='container'>
        <h3 className='servises__title'>Наши Услуги</h3>
      </div>
        <CardList />
    </section>
  );
}
