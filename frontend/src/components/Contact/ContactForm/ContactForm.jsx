export const ContactFrom = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-contacts js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg3.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>write to us</span>
            <span className='main-text'>leave a message</span>
            <p>
              Write to us if you have any questions, we will definitely contact
              you and find a solution.
            </p>
            <form>
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
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <button type='submit' className='btn'>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
