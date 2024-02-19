import React, { useRef, useState } from 'react';
import './Form.css';
import emailjs from '@emailjs/browser';
import { MyButtonMedium } from '../../../../UI/MyButtonMedium/MyButtonMedium'

import { orderIdGenerator } from '../../../../utils/orderIdGenerator'
import { ModalForm } from './ModalForm';
import { useTranslation } from 'react-i18next';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

const maskGenerator = createDefaultMaskGenerator('+374 99 999999');

export function Form() {
  const [telValue, setTelValue] = React.useState('');

  const {t} = useTranslation('global')
  let now = new Date();

  const form = useRef()

  const [newId, setNewId] = useState(orderIdGenerator())
  const [newDate, setNewDate] = useState(now.toLocaleDateString())
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpend, setIsModalOpend] = useState(false)
  const [isMailSuccess, setIsMailSuccess] = useState(false)
  const [isFieldDisabled, setIsFieldDisabled] = useState(false)
  // isFieldDisabled - защита от многократной отправки спама



  const sendEmail = (e) => {
    e.preventDefault();
    setNewId(orderIdGenerator())
    setNewDate(now.toLocaleDateString())
    setIsLoading(true)
    setIsFieldDisabled(true)
    emailjs
      .sendForm('service_7tlqjya', 'template_q24xrua', form.current, {
        publicKey: 'ijhd2JDUzmG5iysrW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsLoading(false)
          setIsMailSuccess(true)
          setIsModalOpend(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsLoading(false)
          setIsMailSuccess(false)
          setIsModalOpend(true)
          setIsFieldDisabled(false)
        },
      );
    e.target.reset()
    setTelValue('')
  };
  return (
    <>
    <div className="col-lg-6 d-flex flex-column form__container align-items-start">
      <div className="form__content">
        <h4 className='form__title'>
          {t("contaactUs.contactUsTitle")}
        </h4 >
        <p className="form__descr">
        {t("contaactUs.contactUsDesct")}
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='form__box'
        >
          <input hidden name='order_id' value={newId} type='text' onChange={(e) => e.target.value} />
          <input hidden name='order_date' value={newDate} type='text' onChange={(e) => e.target.value} />
          <div className="form-floating mb-3"  >
            <input type="text" className="form-control" id="floatingInput" placeholder="Your Name" name='order_client_name' minLength={3} maxLength={20} required disabled={isFieldDisabled}/>
            <label htmlFor="floatingInput">
            {t("contaactUs.contactUsFormInputFieldName")}
              </label>
          </div>

          <div className="form-floating mb-3">
            <MaskedInput 
             type="tel" 
             className="form-control" 
             value={telValue}
             onChange={setTelValue}
             id="floatingPassword" 
             placeholder="+7(999)999-99-99" 
             name='order_client_phone' 
             required 
             disabled={isFieldDisabled}
             maskGenerator={maskGenerator}
             />
            <label htmlFor="floatingPassword">
            {t("contaactUs.contactUsFormInputTel")}
              </label>
          </div>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" name='order_client_email' disabled={isFieldDisabled}/>
            <label htmlFor="floatingInput2">
            {t("contaactUs.contactUsFormInputEmail")}
              </label>
          </div>

          <div className="form-floating mb-3">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} name='order_message' disabled={isFieldDisabled}></textarea>
            <label htmlFor="floatingTextarea2">
            {t("contaactUs.contactUsFormInputMessage")}
              </label>
          </div>

          <MyButtonMedium
            type="submit"
            disabled={isFieldDisabled}
          >
            {
              isLoading === false
                ?
                `${t("contaactUs.contactUsFormButtonText")}`
                :
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
            }
          </MyButtonMedium>
        </form>
      </div>
    </div>
    {isModalOpend &&
        <ModalForm setIsModalOpend={setIsModalOpend}  isMailSuccess={isMailSuccess}/>
        }
    </>
  );
}
