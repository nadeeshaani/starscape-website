import { Card } from './Card/Card';
import socialData from 'data/social';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';


export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);
  const socialLinks = [...socialData];


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



  const total = cart.reduce((acc, item) => acc + item.totalprice, 0) ;

  const handleProductQuantity = (change, quantity, id) => {
    console.log(change, quantity, id);
    if (change === 'increment') {
      cart.find((item) => item.id === id).quantity = quantity + 1;
      setCount(count + 1);
    }
    if (change === 'decrement' && quantity > 1) {
      cart.find((item) => item.id === id).quantity = quantity - 1;
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setCart(cart);
  }, [cart, count]);

  return (
    <>
      {/* <!-- BEGIN CART --> */}
      <div className='cart'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Product</div>
                <div className='cart-table__col'>Price</div>
                <div className='cart-table__col'>Quantity</div>
                <div className='cart-table__col'>Total</div>
              </div>

              {cart.map((cart) => (
                <Card
                  onChangeQuantity={(change, quantity) =>
                    handleProductQuantity(change, quantity, cart.id)
                  }
                  key={cart.id}
                  cart={cart}
                />
              ))}
            </div>
          </div>
          <div className='cart-bottom'>
            <div className='cart-bottom__promo'>
              
              <h6>How to get a promo code?</h6>
              <p>
                Follow our news on the website, as well as subscribe to our
                social networks. So you will not only be able to receive
                up-to-date codes, but also learn about new products and
                promotional items.
              </p>
              <div className='contacts-info__social'>
                <span>Find us here:</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path} target='_blank'>
                        <i className={social.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='cart-bottom__total'>
              <div className='cart-bottom__total-promo'>
                Discount on promo code
                <span>No</span>
              </div>
              <div className='cart-bottom__total-num'>
                total:
                <span>${total.toFixed(2)}</span>
              </div>
              <Link href='/checkout'>
                <a className='btn'>Checkout</a>
              </Link>
            </div>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='assets/img/promo-video__decor.png'
          alt=''
        />
      </div>
      {/* <!-- CART EOF   --> */}
    </>
  );
};
