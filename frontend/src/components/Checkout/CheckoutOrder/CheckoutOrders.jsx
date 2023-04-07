import productData from 'data/product/product';
import { CartContext } from 'pages/_app';
import { useContext, useEffect } from 'react';
import { Card } from './Card/Card';
import axios from 'axios';


export const CheckoutOrders = () => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce(
    (total, item) => total + Number(item.price) * Number(item.quantity),
    0
  );
  
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    axios.get(`http://localhost:8090/cart/getCart?jwtToken=${token}`)
      .then(response => {
        setCart(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  const total_pri = cart.reduce((acc, item) => acc + item.totalprice, 0) ;

  return (
    <>
      <div className='checkout-order'>
        <h5>Your Order</h5>
        {cart.map((order) => (
          <Card key={order.id} order={order} />
        ))}
      </div>
      <div className='cart-bottom__total'>
        <div className='cart-bottom__total-num'>
          total:
          <span>Rs.{(total_pri).toFixed(2)}</span>
        </div>
      </div>
    </>
  );
};
