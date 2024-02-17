import React from 'react';
import './Carousel.css';


export function Carousel({ imgPath, imgPath2, imgPath3 }) {
  return (
    <div id="carouselExampleDark" className="examples__carousel carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <picture>
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath}-300.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 768px)" />
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath}-150.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 486px)" />
            <img
            src={imgPath ? require(`../../../../../img/${imgPath}.jpg`) : require(`../../../../../img/big-plug.jpg`)}
            className="d-block w-100"
            alt="examples" />
          </picture>
          
          
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <picture>
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath2}-300.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 768px)" />
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath2}-150.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 486px)" />
            <img
            src={imgPath ? require(`../../../../../img/${imgPath2}.jpg`) : require(`../../../../../img/big-plug.jpg`)}
            className="d-block w-100"
            alt="examples" />
          </picture>
          
        </div>
        <div className="carousel-item" data-bs-interval="2000">
        <picture>
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath3}-300.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 768px)" />
            <source srcSet={imgPath ? require(`../../../../../img/${imgPath3}-150.jpg`) : require(`../../../../../img/big-plug.jpg`)} media="(max-width: 486px)" />
            <img
            src={imgPath ? require(`../../../../../img/${imgPath3}.jpg`) : require(`../../../../../img/big-plug.jpg`)}
            className="d-block w-100"
            alt="examples" />
          </picture>
          
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Предыдущий</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Следующий</span>
      </button>
    </div>
  );
}
