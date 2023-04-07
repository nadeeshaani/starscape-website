import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? 'https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1'
    : '';
  return (
    <>
       {/* <!-- BEGIN INFO BLOCKS --> */}
       <div className='info-blocks'>
      
      <div
        className='info-blocks__item info-blocks__item-reverse js-img'
        style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
      >
        <div className='wrapper'>
          <div className='info-blocks__item-img'>
            <PromoVideo
              videoUrl={url}
              play={play}
              onVideoPlay={() => setPlay(true)}
              image='/assets/img/info-item-img2.jpg'
            />
          </div>
          <div className='info-blocks__item-text'>
            <span className='saint-text'>About Us</span>
            <h2>Who we are</h2>
            <span className='info-blocks__item-descr'>
             "Somewhere, something incredible is waiting to be known." Why wait any longer?
            </span>
            <p>
              Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
              anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
              reprehenderit reprehenderit culpa laboris nulla minim anim velit
              adipisicing ea aliqua alluptate sit do do.Non aliqua
              reprehenderit reprehenderit culpa laboris nulla minim.
            </p>
            <Link href='/about'>
              <a className='info-blocks__item-link'>
                <i className='icon-video'></i>
                Watch video about us
                <i className='icon-arrow-lg'></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
