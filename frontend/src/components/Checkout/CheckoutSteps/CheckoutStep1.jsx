import Dropdown from 'react-dropdown';

import { useState , useEffect} from 'react';
export const CheckoutStep1 = ({ onNext }) => {
  const [payment, setPayment] = useState('credit-card');
  const [cart, setCart] = useState(null);
  const [address, setAddress] = useState('');
  const [cartId, setCartId] = useState('');
  


  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');

    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:8090/cart/getCart?jwtToken=' + jwtToken); // replace `jwtToken` with the actual JWT token
        const data = await response.json();
        setCart(data);
        setCartId(data.cartId);

      } catch (error) {
        console.error(error);
      }
    };
    fetchCart();
  }, []);


  const createOrder = (address, cartId) => {
    const jwtToken = localStorage.getItem('jwtToken');
    
    const orderRequest = {
      order_address: address,
      cart_id: cartId,
    };
    
    fetch('http://localhost:8090/order/add?jwtToken=' + jwtToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderRequest)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  const handleConfirmOrder = () => {
    console.log(address);
    console.log(cartId);
    createOrder(address, cartId)
    // Call the `onNext` function prop to move to the next step in the checkout process
    onNext();
    // Revoke the `createOrder` function call by not calling it here
  };
  

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
                placeholder='first name'
                defaultValue={cart?.user?.first_name} // use optional chaining to prevent errors when the `cart` state variable is null or undefined
              />
            </div>
            <div className='box-field'>
              <input
                type='text'
                className='form-control'
                placeholder='last name'
                defaultValue={cart?.user?.last_name}
              />
            </div>
            <div className='box-field__row'>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='mail'
                  defaultValue={cart?.user?.email}
                />
              </div>
            </div>
          </div>

          <div className='checkout-form__item'>
            <h4>Delivery Address</h4>
            <br />
            <div className='box-field box-field__textarea'>
              <textarea
                className='form-control'
                placeholder='Enter the address where you want us to deliver the item'
                required
                value={address}
                onChange={handleAddressChange}
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
            <button onClick={handleConfirmOrder} className='btn btn-icon btn-next'>
              Confirm your order <i className='icon-arrow'></i>
            </button>
          </div>
        </form>
      </div>
      {/* <!-- CHECKOUT STEP ONE EOF -->  */}
    </>
  );

  
};
