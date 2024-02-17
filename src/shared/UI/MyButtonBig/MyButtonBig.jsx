import React from 'react';
import './MyButtonBig.css'

export function MyButtonBig({children, ...props}) {
  return (
    <button className='MyButtonBig' {...props}>
      {children}
    </button>
  );
}
