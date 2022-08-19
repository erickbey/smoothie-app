import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsApple} from 'react-icons/bs';
import {DiAndroid} from 'react-icons/di';

function Footer() {
  return (
    <section className="footer__container">
      <div className="footer-navigation__container">
        <ul className='footer-navigation'>
          <li className='footer-navigation__item'>CONTACT SUPPORT</li>
          <li className='footer-navigation__item'>CAREERS</li>
          <li className='footer-navigation__item'>GOODS & GIFT CARDS</li>
          <li className='footer-navigation__item'>FUNDRAISING</li>
        </ul>
      </div>

      <div className="secondary-links__container">
        <div className="secondary-link__item">
          <h3>ABOUT</h3>
        </div>

        <div className="secondary-link__item">
          <h3>CONNECT WITH US</h3>
          <BsFacebook className='footer__icon'/>
          <AiFillInstagram className='footer__icon'/>
          <BsTwitter className='footer__icon'/>
        </div>

        <div className="secondary-link__item">
          <h3>DOWNLOAD OUR APP</h3>
          <BsApple className='footer__icon'/>
          <DiAndroid className='footer__icon'/>
        </div>
      </div>
    </section>
  )
}

export default Footer