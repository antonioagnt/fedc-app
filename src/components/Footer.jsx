import React from 'react';
import instaLogo from '../img/instagram.svg';
import twitterLogo from '../img/twitter-x.svg';
import faceLogo from '../img/facebook.svg';
import Nav from './Nav';

import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div>
          <img src='./img/icons/lemon-square-icon.png' alt='logo'></img>
        </div>
        <div className='footer-links'>
          <div className='nav-link-footer'>
            <h4>Navigation</h4>
            <Nav />
          </div>
          <div className='contact'>
            <ul>
              <h4>Contact</h4>
              <h4>Adress</h4>
              <p>california, best street, best number</p>
              <h4>Phone Number</h4>
              <p>12-1231-123124</p>
              <h4>Email</h4>
              <p>
                <a href='mailto: lemon@email.com'>lemon@email.com</a>
              </p>
            </ul>
          </div>
          <div className='social-media-links'>
            <h4>Social Media Links</h4>
            <ul className='social-links'>
              <li>
                <a href='https://www.instagram.com/' target='blank'>
                  <img src={instaLogo} alt='instragram icon'></img>
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com/' target='blank'>
                  <img src={twitterLogo} alt='twitte icon'></img>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/' target='blank'>
                  <img src={faceLogo} alt='facebook icon'></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
