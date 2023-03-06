import React from 'react';
import SocialLink from './utils/SocialLink';

const Hero = ({ heroapi: { title, subtitle, btntext, searchbar, img, sociallinks} }) => {
  // console.log(heroapi)
  return (
   <>
      <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
          <div className='grid items-center justify-items-center mt-28 md:mt-29'>
          <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm shadow-black text-white' style={{ textShadow: '0 0 5px rgba(21, 22, 135, 0.8), 0 0 10px rgba(98, 37, 88, 0.8), 0 0 15px rgba(14, 48, 108, 0.8)' }}>{title}</h1>
            <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
            <br />
            <button type='button' className='button-theme'></button>
            {searchbar && (
  <div className='relative'>
    <input
      type='text'
      className='border border-none bg-cyan-100 bg-opacity-25 rounded-md px-4 py-2 w-96 pl-10 focus:outline-none'
      placeholder={searchbar.placeholder}
    />
    <img
      src={searchbar.img}
      alt={searchbar.imageAlt}
      className='absolute top-2 left-2 w-6 h-6 transition duration-300 ease-in-out transform hover:scale-90'
      style={{ opacity: 0.5, cursor: 'pointer' }}
      onClick={() => {
        // perform search logic here
      }}
    />
  </div>
)}
            <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
            
            </div>
            <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div>
          </div>
          <div className='flex items-center'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[69vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] hover:rotate-0 cursor-pointer object-fill'
            />
          </div>
        </div>
      </div>
   </>
  )
}

export default Hero