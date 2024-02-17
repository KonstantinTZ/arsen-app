import React from 'react';
import './MyButtonMedium.css'

export function MyButtonMedium({children, ...props}) {
  return (
    <button className='MyButtonMedium' {...props}>
      {children}
    </button>
  );
}
