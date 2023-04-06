import productData from 'data/product/product';
import { Card } from './Card/Card';
import Link from 'next/link';

export const Wishlist = () => {
  const wishItems = [...productData].slice(0, 2);
  wishItems[1].isStocked = false;

  return (
    <>
      {/* <!-- BEGIN WISHLIST --> */}
      <div className='wishlist'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col'>Product</div>
                <div className='cart-table__col'>Price</div>
                <div className='cart-table__col'>status</div>
                <div className='cart-table__col'>Add to cart</div>
              </div>

              {wishItems.map((wish) => (
                <Card key={wish.id} wish={wish} />
              ))}
            </div>
          </div>
          <div className='wishlist-buttons'>
            <a href='#' className='btn btn-grey'>
              clear Wishlist
            </a>
            <Link href='/shop'>
              <a className='btn'>Explore shop</a>
            </Link>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          data-src='/assets/img/promo-video__decor.png'
          alt=''
        />
      </div>
      {/* <!-- WISHLIST EOF   --> */}
    </>
  );
};
