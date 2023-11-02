import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
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
