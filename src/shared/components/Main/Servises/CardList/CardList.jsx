import React from 'react';
import './CardList.css';
import { Card } from './Card/Card';
import mainStore from '../../../../../store/mainStore'

export function CardList() {
  return (
    <div className="container servises__card-list">
      <div className="row row-cols-auto card-list__row">
        {
          mainStore.map((item) =>(
            <Card 
            cardTitle={item.cardTitle} 
            cardPrice={item.cardPrice} 
            imgPath={item.cardImageGroupName} 
            descrListArr={item.cardDescriptionList}
            key={item.cardId}
            cardId={item.cardId}/>) )
        }

        
        

      </div>
    </div>
  );
}
