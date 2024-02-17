import React, { useState } from 'react';
import './Card.css';

import { MyButtonMedium } from '../../../../../UI/MyButtonMedium/MyButtonMedium';
import { ModalCard } from '../../ModalCard';


export function Card({ imgPath, cardTitle="Название карточки", cardPrice='0000', descrListArr, cardId }) {
  const [isModalOpend,setIsModalOpend] = useState(false)
  return (
    
    <>
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 mb-3 ">
      <div className="card h-100">
        <img
          src={imgPath ? require(`../../../../../../img/${imgPath}-preview.jpg`) : require(`../../../../../../img/card-plug.jpg`)}
          className="card-img-top"
          alt="pic descr"
        />
        <div className="card-body align-items-start">
          <h5 className="card-title">{cardTitle}</h5>
          <div className="card-bottom">
          <p className="card-text">{cardPrice}</p>
          <MyButtonMedium onClick={()=>setIsModalOpend(true)}>Подробнее</MyButtonMedium>
          </div>
        </div>
      </div>
      {
       isModalOpend &&
       <ModalCard 
       setIsModalOpend={setIsModalOpend} 
       descrListArr={descrListArr} 
       modalTitle={cardTitle} 
       modalPrice={cardPrice}
       imgPath={imgPath}
       key={cardTitle}
       /> 
      }
    </div>
    </>
  );
}
