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
          className='info-blocks__item js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className='wrapper'>
            
          </div>
        </div>
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
              
            
              
            </div>
          </div>
        </div>
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
