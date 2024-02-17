import React from 'react';
import './Map.css';
import { MapText } from './MapText/MapText';
import { MapPicture } from './MapPicture/MapPicture';

export function Map() {
  return (
    <section className="map map__section" id='map'>

      <div className="container map__container">
        <div className='row map__row'>
          <MapPicture />
          <MapText />
        </div>
      </div>
    </section>
  );
}
