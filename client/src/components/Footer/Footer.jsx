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
          <div className="about-items__container">
            <div className="about__column">
              <p className="about__link">Our Values</p>
              <p className="about__link">Health and Safety</p>
              <p className="about__link">All Locations</p>
            </div>
            
            <div className="about__column">
              <p className="about__link">News and Events</p>
              <p className="about__link">Cultivate Foundation</p>
              <p className="about__link">Sustainability</p>
            </div>
            
            <div className="about__column">
              <p className="about__link">Investors</p>
              <p className="about__link">Pizzeria Locale</p>
              <p className="about__link">Do Not Sell My Information</p>
            </div>
          </div>
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

      <div className="legal-text__container">
        <div className="legal-links__container">
          <p className="legal__link">California Transparency in Supply Chain Act</p>
          <p className="legal__link">Terms of Use</p>
          <p className="legal__link">Accessibility Statement</p>
          <p className="legal__link">Privacy Policy</p>
        </div>
      </div>
    </section>
  )
}

export default Footer