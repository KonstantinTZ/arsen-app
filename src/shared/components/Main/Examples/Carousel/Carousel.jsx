import React from 'react';
import './Carousel.css';


export function Carousel({ imgPath, imgPath2, imgPath3 }) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

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
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
