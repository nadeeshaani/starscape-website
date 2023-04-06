import { useState } from 'react';
import faqData from 'data/faq/faq';

export const Faq = () => {
  const faqs = [...faqData];
  const [active, setActive] = useState(-1);

  const handleCollapse = (item) => {
    if (item === active) {
      setActive(-1);
    } else {
      setActive(item);
    }
  };
  return (
    <>
      {/* <!-- BEGIN FAQ --> */}
      <div className='faq'>
        <div className='wrapper'>
          <div className='faq-search'>
            <form>
              <div className='box-field__row box-field__row-search'>
                <div className='box-field'>
                  <input
                    type='search'
                    className='form-control'
                    placeholder='Search'
                  />
                </div>
                <button type='submit' className='btn btn-icon'>
                  {' '}
                  <i className='icon-search'></i> search
                </button>
              </div>
            </form>
          </div>

          <div className='faq-items'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${active === index && 'active'}`}
              >
                <div
                  onClick={() => handleCollapse(index)}
                  className='faq-item__head'
                >
                  <span className='faq-item__head-num'>{index + 1}</span>
                  {faq.title}
                  <span className='faq-item__head-btn'></span>
                </div>
                <div
                  style={{ display: active === index && 'block' }}
                  className='faq-item__content'
                >
                  <p>{faq.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='faq-more'>
            <a href='#/'>
              show more <i className='icon-arrow-md'></i>
            </a>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- FAQ EOF   --> */}
    </>
  );
};
