import React from 'react';
import './CardList.css';
import { Card } from './Card/Card';
import { useTranslation } from 'react-i18next';


function CardList() {

  const {t} = useTranslation("global")
  const data = t("servises.servisesCards", {returnObjects: true});
 // , {returnObjects: true} - для того что бы вернуть массив и распарсить его via map!

  return (
    <div className="container servises__card-list">
      <div className="row row-cols-auto card-list__row">
        {
          data.map((item) =>(
            <Card 
            cardTitle={item.cardTitle} 
            cardPrice={item.cardPrice} 
            imgPath={item.cardImageGroupName} 
            cardDescrTitle={item.cardDescrTitle}
            cardMoreBtn = {item.cardMoreBtn}
            cardCloseBtn = {item.cardCloseBtn}
            descrListArr={item.cardListOFWorks}
            key={item.cardId}
            cardId={item.cardId}/>) )
        }

        
        

      </div>
    </div>
  );
}

export default (CardList);