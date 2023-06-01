import React from 'react';
import './loginPage.css';
import circle from '../assets/circle.svg';
import reset from '../assets/reset.svg';
import close from '../assets/close.svg';
import leaf_logo from '../assets/natural-ingredients.png';
import logo from '../assets/cinema_4d.svg';
import facbook from '../assets/facebook_f.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin_w.svg';


function LoginPage() {
  return (
    <div className='loginPage__container'>
      <div className='loginPage__container__leftpart'>
        <div className="loginPage__container__leftpart__left-logo">
          <img src={reset} alt="reset-logo" />
          <img src={close} alt="close-logo" />
          <img src={circle} alt="circle-logo" />
        </div>
        <div className='loginPage__container__leftpart__text'>
          <h1>100% Uptime😎</h1>
          <p>Zero Infrastructure <br />Management</p>
        </div>
        <div className="loginPage__container__leftpart__footer">
          <div className="loginPage__container__leftpart__footer__email">
            <img src={logo} alt="logo" />
            <p>aesthisia.com</p>
          </div>
          <div className="loginPage__container__leftpart__footer__logo">
            <img src={linkedin} alt="linkedin-logo" />
            <img src={facbook} alt="facebook-logo" />
            <img src={instagram} alt="instagram-logo" />
          </div>
        </div>

      </div>

      <div className="loginPage__container__rightpart">

        <div className="loginPage__container__rightpart__logo-text">
          <img src={leaf_logo} alt="leaf-logo" />
          <h1>Welcome <span> Back!</span></h1>
          <p>Glad to see you, Again!</p>
        </div>
        <div className="loginPage__container__rightpart__form">
          <form>
            <input type="email" name="email" id="email" placeholder='Enter your email' required />
            <input type="password" name="password" id="password" placeholder='Enter your password' required />
            <small>Forgot Password?</small>
            <button className='login-btn'>Log in</button>
          </form>
        </div>
        <div className="loginPage__container__rightpart__signUp">
          <p>Don't an account yet? <span>Sign Up</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage