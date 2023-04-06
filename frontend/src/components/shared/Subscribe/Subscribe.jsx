export const Subscribe = () => {
  return (
    <>
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className='subscribe'>
        <div className='wrapper'>
          <div className='subscribe-form'>
            <div className='subscribe-form__img'>
              <img
                src='/assets/img/subscribe-img.png'
                className='js-img'
                alt=''
              />
            </div>
            <form>
  <h2 style={{color: 'white'}}>Stay in touch</h2>
  <p style={{color: 'white'}}></p>
  <div className='box-field__row'>
    <div className='box-field'>
      <h4>Visit Starscape blog</h4>
    </div>
    <a href='https://www.nasa.gov/' target='_blank' rel='noopener noreferrer'>
      <button type='button' className='btn'>
        Visit now
      </button>
    </a>
  </div>
</form>

          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
    </>
  );
};
