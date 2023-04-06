import { SocialLogin } from 'components/shared/SocialLogin/SocialLogin';
import router from 'next/router';
import React, { useState } from 'react';


export const Registration = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8090/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    alert('check your email for email verification!');
    router.push('/login');
  };
  

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


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
           <form onSubmit={handleSubmit}>

              <h3>register now</h3>
              <SocialLogin />

              <div className='box-field__row'>
                <div className='box-field'>
                  <input
                        type='text'
                        className='form-control'
                        placeholder='Enter your name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                </div>
                <div className='box-field'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter your last name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className='box-field__row'>
               
                <div className='box-field'>
                <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          src='/assets/img/promo-video__decor.png'
          alt=''
        />
      </div>
      {/* <!-- REGISTRATION EOF   -->  */}
    </>
  );
};
