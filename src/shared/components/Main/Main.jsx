import React from 'react';
import './Main.css';
import { Hero } from './Hero/Hero';
import { Examples } from './Examples/Examples';
import {Servises} from './Servises/Servises'
import { ContactUs } from './ContactUs/ContactUs';
import { Map } from './Map/Map';

export function Main() {
  return (
    <main className='main'>
      <Hero/>
      <Examples/>
      <Map/>
      <Servises/>
      <ContactUs/>
    </main>
  );
}
