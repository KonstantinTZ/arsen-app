import React from 'react';
import './Header.css';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header className='header sticky-top bg-body'>
    <div className='container header__container'>
      <Navigation />
    </div>
    </header>
  );
}
