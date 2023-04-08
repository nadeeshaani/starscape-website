import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';



export const Card = ({ }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    axios.get(`http://localhost:8090/cart/getCart?jwtToken=${token}`)
      .then(response => {
        setCartItems(response.data.items);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const token = localStorage.getItem('jwtToken');
  const endpointUrl = `http://localhost:8090/cart/add?jwtToken=${token}`;
  const router = useRouter();


  return (
    <>
      {cartItems.map((item) => (
        <div className='cart-table__row' key={item.cartItemId}>
          <div className='cart-table__col'>
            <Link href={`/product/${item.product.product_id}`}>
              <a className='cart-table__img'>
                <img src={item.product.product_imageName} className='js-img' alt='' />
              </a>
            </Link>
            <div className='cart-table__info'>
              <Link href={`/product/${item.product.product_id}`}>
                <a className='title5'>{item.product.product_name}</a>
              </Link>
              {item.product.isStocked && (
                <span className='cart-table__info-stock'>in stock</span>
              )}
              <span className='cart-table__info-num'>SKU: {item.product.product_name}</span>
            </div>
          </div>
          <div className='cart-table__col'>
            
              <span className='cart-table__price'>Rs.{item.product.product_price}</span>
            
          </div>
          <div className='cart-table__col'>
            <div className='cart-table__quantity'>
              <div className='counter-box'>
                <span
                   onClick={() => {
                    //Increment
                    fetch(endpointUrl, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ product_id: item.product.product_id, quantity: item.quantity-1 }),
                    })
                    .then((res) => res.json())
                    .then(() => {
                      // Reload page
                      router.reload();
                    })
                    .catch((err) => console.error(err));
                  }}
                  className='counter-link counter-link__prev'
                >
                  <i className='icon-arrow'></i>
                </span>
                <input
                  type='text'
                  className='counter-input'
                  disabled
                  value={item.quantity}
                />
                <span
                  onClick={() => {
                    //Increment
                    fetch(endpointUrl, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ product_id: item.product.product_id, quantity: item.quantity+1 }),
                    })
                    .then((res) => res.json())
                    .then(() => {
                      // Reload page
                      router.reload();
                    })
                    .catch((err) => console.error(err));
                  }}
                  className='counter-link counter-link__next'
                >
                  <i className='icon-arrow'></i>
                </span>
              </div>
            </div>
          </div>
          <div className='cart-table__col'>
            <span className='cart-table__total'>
              Rs.{Number(item.totalprice).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};