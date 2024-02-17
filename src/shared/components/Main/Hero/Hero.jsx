import React from 'react';
import './Hero.css';
import { TextBox } from './TextBox';


export function Hero() {
  return (
    <section className='hero hero__section' id='hero'>
      <div className="container hero__container">
        <div className="row">
          <TextBox />
        </div>
      </div>
    </section>
  );
}
