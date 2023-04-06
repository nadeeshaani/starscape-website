import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Discount</span>
            <span className='main-text'>
              Get Your <span>50%</span> Off
            </span>
            <p>
              Join starscape community today and get your membership to experience the best of our offers!
            </p>

            <Link href='/shop'>
              <a className='btn'>get now!</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
