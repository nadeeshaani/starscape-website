import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Card = ({ cart, onChangeQuantity }) => {
  const [product_name, setProductName] = useState([]);
  const [product_price, setProductPrice] = useState([]);
  const [product_id, setProductId] = useState([]);
  const [image, setProductImage] = useState([]);



  const {
    name,
    id,
    isStocked,
    productNumber,
    oldPrice,
    price,
    totalprice,
    quantity,
  } = cart;




  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    axios.get(`http://localhost:8090/cart/getCart?jwtToken=${token}`)
      .then(response => {
        setProductId(response.data.items.map(item => item.product.product_id));
        setProductName(response.data.items.map(item => item.product.product_name));
        setProductPrice(response.data.items.map(item => item.product.product_price));
        setProductImage(response.data.items.map(item => item.product.product_imageName));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);



  return (

    <>
      <div className='cart-table__row'>
        <div className='cart-table__col'>
          <Link href={`/product/${id}`}>
            <a className='cart-table__img'>
              <img src={image} className='js-img' alt='' />
            </a>
          </Link>
          <div className='cart-table__info'>
            <Link href={`/product/${id}`}>
              <a className='title5'>{product_name}</a>
            </Link>
            {isStocked && (
              <span className='cart-table__info-stock'>in stock</span>
            )}
            <span className='cart-table__info-num'>SKU: {product_name}</span>
          </div>
        </div>
        <div className='cart-table__col'>
          {oldPrice ? (
            <span className='cart-table__price'>
              ${product_price}
            </span>
          ) : (
            <span className='cart-table__price'>${product_price}</span>
          )}
        </div>
        <div className='cart-table__col'>
          <div className='cart-table__quantity'>
            <div className='counter-box'>
              <span
                onClick={() => onChangeQuantity('decrement', quantity)}
                className='counter-link counter-link__prev'
              >
                <i className='icon-arrow'></i>
              </span>
              <input
                type='text'
                className='counter-input'
                disabled
                value={quantity}
              />
              <span
                onClick={() => onChangeQuantity('increment', quantity)}
                className='counter-link counter-link__next'
              >
                <i className='icon-arrow'></i>
              </span>
            </div>
          </div>
        </div>
        <div className='cart-table__col'>
          <span className='cart-table__total'>
            ${(totalprice).toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
};
