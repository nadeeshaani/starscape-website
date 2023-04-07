import Dropdown from 'react-dropdown';
import { useState } from 'react';


export const CheckoutStep1 = ({ onNext }) => {
  const [payment, setPayment] = useState('credit-card');
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP ONE -->  */}
      <div className='checkout-form'>
        <form onClick={(e) => e.preventDefault()}>
          <div className='checkout-form__item'>
            <h4>Info about you</h4>
            <br />
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your name'
              />
            </div>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='Enter your last name'
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='Enter your phone'
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter your mail'
                />
              </div>
            </div>
          </div>
          <div className='checkout-form__item'>
            <h4>Delivery Address</h4><br />
            <div className='box-field box-field__textarea'>
              <textarea
                className='form-control'
                placeholder='Enter the address where you want us to deliver the item'
              ></textarea>
            </div>

            
           
            
          </div>
          <h4>Payment Methods</h4><br />
          <div
          className={`checkout-payment__item ${payment === 'cash' && 'active'}`}
        >
          <div className='checkout-payment__item-head'>
            <label onClick={() => setPayment('cash')} className='radio-box'>
              Cash On Delivery
              <input type='radio' checked={payment === 'cash'} name='radio' />
              <span className='checkmark'></span>
             
             
            </label>
          </div>
          
        </div>
        
        
          <div className='checkout-buttons'>
            {/* <button className='btn btn-grey btn-icon'>
              {' '}
              <i className='icon-arrow'></i> back
            </button> */}
            <button onClick={onNext} className='btn btn-icon btn-next'>
              Confirm your order <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );

  
};
