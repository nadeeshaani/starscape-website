import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export const ReviewFrom = () => {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <>
      {/* <!-- Product Review Form --> */}
      <div className='product-detail__form post-comment__form'>
        <div className='subscribe-form__img'>
          <img src='/assets/img/subscribe-img.png' />
        </div>
        <form>
          <h4>leave a review</h4>
          <p>Your email address will not be published.</p>
          <div className='rating' data-id='rating_1'>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              fillColor='#cfc819'
              size='20px'
              emptyColor='#fff'
            />
          </div>
          <div className='box-field'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your name'
            />
          </div>
          <div className='box-field'>
            <input
              type='email'
              className='form-control'
              placeholder='Enter your email'
            />
          </div>
          <div className='box-field box-field__textarea'>
            <textarea
              className='form-control'
              placeholder='Enter your review'
            ></textarea>
          </div>
          <button type='submit' className='btn'>
            send
          </button>
        </form>
      </div>
    </>
  );
};
