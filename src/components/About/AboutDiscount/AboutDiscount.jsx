import Link from 'next/link';

export const AboutDiscount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg2.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Success story</span>
            <h2>BeShop develops its own brands</h2>
            <p>
              The BeShope network is being developed and improved, taking into
              account all consumer.
            </p>
            <p className='discount-info__sm'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Corporis quasi tempore aliquam cumque, adipisci voluptates 
             magnam voluptatum molestiae nihil optio reiciendis quam excepturi reprehenderit magni odit, 
             eritatis error repellat quibusdam.
            </p>
            <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
