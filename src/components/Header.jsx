import React from 'react';
import logo from '../img/Logo.svg';
import Nav from './Nav';
export default function Header() {
  return <header>
            <div className="container-headder">
            <img src={logo} alt='logo' className='logo-header'>
            </img>
            <div className='nav-bar'>            <Nav /></div>

            </div>

  </header>;
}
