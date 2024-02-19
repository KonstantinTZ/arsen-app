import React from 'react';
import './ModalForm.css';
import ReactDOM from 'react-dom'
import 'animate.css';
import { useTranslation } from 'react-i18next';


export const ModalForm = ({ setIsModalOpend, isMailSuccess }) => {
  const {t} = useTranslation("global");

  return ReactDOM.createPortal((

    <div className="modal fade show " id="ModalForm"  data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content animate__animated animate__zoomIn">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"> </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsModalOpend(false)}></button>
          </div>
          <div className="modal-body">
            <div className="container justify-content-center d-flex">
              {
                isMailSuccess === true
                  ? <div className="modal-success-container">
                    <h5 className='modal-subtitle'>
                      {t("contaactUs.contactUsSuccessModalTitle")}
                    </h5>
                    <p className="modal-descr">
                    {t("contaactUs.contactUsSuccessModalDescr")}
                    </p>
                  </div>


                  : <div className="modal-fail-container">
                    <h5 className='modal-subtitle'>
                    {t("contaactUs.contactUsFailureModalTitle")}
                    </h5>
                    <p className="modal-descr">
                    {t("contaactUs.contactUsFailureModalDescr")}
                    </p>
                    <div className="d-flex align-items-center justify-content-center modal-contacts">
                      <a href='tel:+374(77)005266' className="contacts-header__tel contacts-header__link" activeclassname={"active"} to="/basket">
                        +374(77)005266
                      </a>
                      <a href='https://wa.me/message/HZI6JAQ2764IN1' targer='_blank' className="contacts-header__link" activeclassname={"active"} to="/basket">
                        <img
                          className="contacts-header__logo"
                          width={48}
                          height={48}
                          src="https://img.icons8.com/color/96/whatsapp--v1.png"
                          alt="wa logo"
                        />
                      </a>
                      <a href='viber://add?number=37477005266' targer='_blank' className="contacts-header__link" activeclassname={"active"} to="/basket">

                        <img
                          className="contacts-header__logo"
                          width={48}
                          height={48}
                          src="https://img.icons8.com/color/48/viber.png"
                          alt="viber"
                        />
                      </a>
                    </div>
                  </div>
              }

            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="modal-bottom-btn" onClick={() => { setIsModalOpend(false) }}>Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  ), document.getElementById('modal'))
}

