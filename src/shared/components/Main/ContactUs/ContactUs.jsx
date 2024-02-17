import React from 'react';
import './ContactUs.css';
import { Form } from './Form/Form';
import { Location } from './Location/Location';


export function ContactUs() {
  return (
    <section className='contact-us contact-us__section' id='contact-us'>
    <div className='container contact-us__container'>
      <div className='row contact-us__row'>
        <Form/>
        <Location/>
      </div>
    </div>
    </section>
  );
}
