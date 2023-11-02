import React from 'react';
import logo from '../img/Logo.svg';
import instaLogo from '../img/instagram.svg';
import twitterLogo from '../img/twitter-x.svg';
import faceLogo from '../img/facebook.svg';
import Nav from './Nav';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <img src={logo}></img>
        </div>
        <div className='nav-link-footer'>
          <Nav />
        </div>
        <div>
          <ul>
            <h4>Contact</h4>
            <li>Adress</li>
            <li>Phone Number</li>
            <li>Telephone</li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>Social Media Links</h4>
            <li>
              <img src={instaLogo}></img>
            </li>
            <li>
              <img src={twitterLogo}></img>
            </li>
            <li>
              <img src={faceLogo}></img>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
