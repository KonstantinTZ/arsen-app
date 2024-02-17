import React from 'react';
import './MapPicture.css';

export function MapPicture() {
  return (
    <div className='col-lg-6 map__map-picrure'>
      <img
        src={require(`../../../../../img/map.jpeg`)}
        alt="map"
      />
    </div>
  );
}
