import { useState } from 'react';

export const CheckoutStep2 = ({ onNext, onPrev }) => {
  const [payment, setPayment] = useState('credit-card');
  return (
    <>
      {/* <!-- BEING CHECKOUT STEP TWO -->  */}
      <div className='checkout-payment checkout-form'>
        <h4>Payment Methods</h4>
        
        
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
          <button onClick={onPrev} className='btn btn-grey btn-icon'>
            <i className='icon-arrow'></i> back
          </button>
          <button onClick={onNext} className='btn btn-icon btn-next'>
            Confirm your order<i className='icon-arrow'></i>
          </button>
        </div>
      </div>
      {/* <!-- CHECKOUT STEP TWO EOF -->  */}
    </>
  );
};
