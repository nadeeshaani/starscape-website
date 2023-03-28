import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';

export const Login = () => {
  return (
    <>
      {/* <!-- BEGIN LOGIN --> */}
      <div className='login'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{ backgroundImage: `url('/assets/img/login-form__bg.png')` }}
          >
            <form>
              <h3>log in with</h3>
              <SocialLogin />

              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your email or nickname'
                />
              </div>
              <div className='box-field'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Enter your password'
                />
              </div>
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                Remember me
              </label>
              <button className='btn' type='submit'>
                log in
              </button>
              <div className='login-form__bottom'>
                <span>
                  No account?{' '}
                  <a onClick={() => router.push('/registration')}>
                    Register now
                  </a>
                </span>
                <a href='#'>Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- LOGIN EOF   --> */}
    </>
  );
};
