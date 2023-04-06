import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import useWindowSize from 'components/utils/windowSize/windowSize';
import { header, navItem } from 'data/data.header';
import Link from 'next/link';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import { Nav } from './Nav/Nav';

export const Header = () => {
  const { cart } = useContext(CartContext);
  const [promo, setPromo] = useState(true);
  const [fixedNav, setFixedNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [height, width] = useWindowSize();

  // For Fixed nav
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      if (height < 767) {
        disableBodyScroll(document);
      } else {
        enableBodyScroll(document);
      }
    } else {
      enableBodyScroll(document);
    }
  }, [openMenu, height]);
  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className='header'>
        
        <div className={`header-content ${fixedNav ? 'fixed' : ''}`}>
          <div className='header-logo'>
            <Link href='/'>
              <a>
                <img src={header.logo} alt='' />
              </a>
            </Link>
          </div>
          <div style={{ right: openMenu ? 0 : -360 }} className='header-box'>
            {/* Nav */}
            <Nav navItem={navItem} />
            {/* header options */}
            <ul className='header-options'>
                      <li>
            <Link href='/faq'>
              <a>
                <i className='icon-search' style={{color: 'white'}}></i>
              </a>
            </Link>
          </li>

              <li>
                <Link href='/profile'>
                  <a>
                    <i className='icon-user'style={{color: 'white'}}></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/cart'>
                  <a>
                    <i className='icon-cart'style={{color: 'white'}}></i>
                    <span>{cart.length ?? '0'}</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={
              openMenu ? 'btn-menu js-btn-menu active' : 'btn-menu js-btn-menu'
            }
          >
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
        </div>
      </header>

      {/* <!-- HEADER EOF   --> */}
    </>
  );
};
