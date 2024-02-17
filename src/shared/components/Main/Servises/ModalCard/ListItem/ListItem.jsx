import React from 'react';
import './ListItem.css';

export function ListItem({children}) {
  return (
    <li className='text-secondary'>
      {children}
    </li>
  );
}
