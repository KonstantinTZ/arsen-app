import React from 'react';
import './ModalCard.css';
import ReactDOM from 'react-dom'
import 'animate.css';
import { ListItem } from './ListItem/ListItem';



export const ModalCard = ({ setIsModalOpend,imgPath, modalTitle, modalPrice, descrListArr, modalDescrTitle, modalCloseBtn  }) => {


  return ReactDOM.createPortal((

    <div className="modal fade show " id="ModalForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content animate__animated animate__zoomIn">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"> </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsModalOpend(false)}></button>
          </div>
          <div className="modal-body">
            <div className="container">
              <h5 className='modal-card-subtitle'>{modalTitle}</h5>
              <div className="row">
                <img 
                src={imgPath ? require (`../../../../../img/${imgPath}-2.jpg`): require(`../../../../../img/card-plug.jpg`)} 
                
                alt="demonstration of works" className='col-lg-6 col-12 mb-4' />
                <img 
                src={imgPath ? require (`../../../../../img/${imgPath}-3.jpg`): require(`../../../../../img/card-plug.jpg`)}  
                alt="demonstration of works" className='col-lg-6 col-12 mb-4' />
              </div>
              <p className='text-black mb-2'>
                {modalDescrTitle}
              </p>
              <ul className=' mb-3'>
                {
                  descrListArr.map((item)=>(
                    <ListItem>{item}</ListItem>
                  ))
                }
                
                
              </ul>

              <p className="card-title">{modalPrice}</p>

            </div>
          </div>
          <div className="modal-footer">
            <button tabIndex="-2"  type="button" className="modal-bottom-btn" onClick={() => { setIsModalOpend(false) }}>{modalCloseBtn}</button>
          </div>
        </div>
      </div>
    </div>
  ), document.getElementById('modal'))
}

