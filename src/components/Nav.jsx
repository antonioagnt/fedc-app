import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/Logo.svg';
export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={logo}></img>
          </li>
          <li>
            <Link to='/' className='nav-item'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-item'>
              About
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-item'>
              Menu
            </Link>
          </li>
          <li>
            <Link to='/BookingPage' className='nav-item'>
              Reservations
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-item'>
              Reservation
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-item'>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
