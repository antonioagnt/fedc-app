import React from 'react';
import Nav from '../Nav/Nav';

import './Header.css';
export default function Header() {
  return (
    <header>
      <div className='container-headder'>
        <img
          src='./img/icons/Logo.svg'
          alt='logo'
          className='logo-header'
        ></img>
        <div className='nav-bar'>
          <Nav className='bar-nav' />
        </div>
      </div>
    </header>
  );
}
