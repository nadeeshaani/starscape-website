import Link from 'next/link';

export const SingleProduct = ({
  product,
  onAddToWish,
  onAddToCart,
  addedInCart,
}) => {
  const { product_name, product_price,product_description,product_imageName, product_id } = product;
  const token = localStorage.getItem('jwtToken');
  const endpointUrl = `http://localhost:8090/cart/add?jwtToken=${token}`;
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className='products-item'>
        <div className='products-item__type'>
           <span className='products-item__sale'>sale</span>
         
        </div>
        <div className='products-item__img'>
          <img src={product_imageName} className='js-img' alt='' />
          <div className='products-item__hover'>
            <Link href={`/product/${product_id}`}>
              <a>
                <i className='icon-search'></i>
              </a>
            </Link>
            <div className='products-item__hover-options'>
              <button className='addList' onClick={() => onAddToWish(id)}>
                <i className='icon-heart'></i>
              </button>
              <button
                disabled={false}
                className={`addList ${addedInCart ? 'added' : ''}`}
                onClick={() => 
                  fetch(endpointUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ product_id: product_id, quantity: 1 }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      onAddToCart(data);
                    })
                    .catch((err) => console.error(err))
                }
              >
                <i className='icon-cart'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='products-item__info'>
          <Link href={`/product/${product_id}`}>
            <a>
              <span className='products-item__name'>{product_name}</span>
            </a>
          </Link>
          <span className='products-item__cost'>
            <span>{product_price && `$${product_price}`}</span> ${product_price}
          </span>
        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF --> */}
    </>
  );
};
