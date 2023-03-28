import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';

export const Registration = () => {
  return (
    <>
      {/* <!-- BEGIN REGISTRATION --> */}
      <div className='login registration'>
        <div className='wrapper'>
          <div
            className='login-form js-img'
            style={{
              backgroundImage: `url('/assets/img/registration-form__bg.png')`,
            }}
          >
            <form>
              <h3>register now</h3>
              <SocialLogin />

              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your name'
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your last name'
                  />
                </div>
              </div>
              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                    type='tel'
                    className='form-control'
                    placeholder='Enter your phone'
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Enter your email'
                  />
                </div>
              </div>
              <div className='box-field__row'>
                <span>password</span>
                <div className='box-field'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Enter your password'
                  />
                </div>
                <div className='box-field'>
                  <input
                    type='password'
                    className='form-control'
                    placeholder='Confirm password'
                  />
                </div>
              </div>
              <label className='checkbox-box checkbox-box__sm'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                Remember me
              </label>
              <button className='btn' type='submit'>
                registration
              </button>
              <div className='login-form__bottom'>
                <span>
                  Already have an account?{' '}
                  <a onClick={() => router.push('/login')}>Log in</a>
                </span>
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
      {/* <!-- REGISTRATION EOF   -->  */}
    </>
  );
};
